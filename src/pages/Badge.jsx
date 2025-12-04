import React, { useState, useRef, useEffect } from 'react';
import { Download, Upload, RefreshCw } from 'lucide-react';

const Badge = () => {
    const [name, setName] = useState('');
    const [image, setImage] = useState(null);
    const [frameShape, setFrameShape] = useState('circle');
    const canvasRef = useRef(null);
    const [generated, setGenerated] = useState(false);
    const [loading, setLoading] = useState(false);

    const TEMPLATE_SRC = '/badge-template.png';

    const CONFIG = {
        photo: {
            x: 720,
            y: 460,
            radius: 200,
        },
        name: {
            x: 720,
            y: 720,
            color: '#000000',
            font: 'bold 55px Inter, sans-serif',
        },
    };

    const FRAME_SHAPES = [
        { id: 'circle', name: 'Circle', icon: '●' },
        { id: 'rounded-square', name: 'Rounded Square', icon: '▢' },
        { id: 'wavy', name: 'Wavy Blob', icon: '◉' },
        { id: 'hexagon', name: 'Hexagon', icon: '⬡' },
        { id: 'pentagon', name: 'Pentagon', icon: '⬟' },
    ];

    const handleImageUpload = (e) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = (event) => {
                const img = new Image();
                img.onload = () => setImage(img);
                img.src = event.target.result;
            };
            reader.readAsDataURL(file);
        }
    };

    // ----- Shape drawing helpers -----
    const drawImageInShape = (ctx, centerX, centerY, size, img) => {
        const aspect = img.width / img.height;
        let drawWidth = size;
        let drawHeight = drawWidth / aspect;
        if (drawHeight < size) {
            drawHeight = size;
            drawWidth = drawHeight * aspect;
        }
        const drawX = centerX - drawWidth / 2;
        const drawY = centerY - drawHeight / 2;
        ctx.drawImage(img, drawX, drawY, drawWidth, drawHeight);
    };

    const drawCircle = (ctx, cx, cy, radius, img) => {
        ctx.save();
        ctx.beginPath();
        ctx.arc(cx, cy, radius, 0, Math.PI * 2);
        ctx.closePath();
        ctx.clip();
        drawImageInShape(ctx, cx, cy, radius * 2, img);
        ctx.restore();
        ctx.beginPath();
        ctx.arc(cx, cy, radius, 0, Math.PI * 2);
        ctx.lineWidth = 10;
        ctx.strokeStyle = '#ffffff';
        ctx.stroke();
    };

    const drawRoundedSquare = (ctx, cx, cy, size, img) => {
        const corner = 40;
        const x = cx - size / 2;
        const y = cy - size / 2;
        ctx.save();
        ctx.beginPath();
        ctx.moveTo(x + corner, y);
        ctx.lineTo(x + size - corner, y);
        ctx.quadraticCurveTo(x + size, y, x + size, y + corner);
        ctx.lineTo(x + size, y + size - corner);
        ctx.quadraticCurveTo(x + size, y + size, x + size - corner, y + size);
        ctx.lineTo(x + corner, y + size);
        ctx.quadraticCurveTo(x, y + size, x, y + size - corner);
        ctx.lineTo(x, y + corner);
        ctx.quadraticCurveTo(x, y, x + corner, y);
        ctx.closePath();
        ctx.clip();
        drawImageInShape(ctx, cx, cy, size, img);
        ctx.restore();
        ctx.beginPath();
        ctx.moveTo(x + corner, y);
        ctx.lineTo(x + size - corner, y);
        ctx.quadraticCurveTo(x + size, y, x + size, y + corner);
        ctx.lineTo(x + size, y + size - corner);
        ctx.quadraticCurveTo(x + size, y + size, x + size - corner, y + size);
        ctx.lineTo(x + corner, y + size);
        ctx.quadraticCurveTo(x, y + size, x, y + size - corner);
        ctx.lineTo(x, y + corner);
        ctx.quadraticCurveTo(x, y, x + corner, y);
        ctx.closePath();
        ctx.lineWidth = 10;
        ctx.strokeStyle = '#ffffff';
        ctx.stroke();
    };

    const drawWavyBlob = (ctx, cx, cy, radius, img) => {
        const points = 8;
        const step = (Math.PI * 2) / points;
        ctx.save();
        ctx.beginPath();
        for (let i = 0; i <= points; i++) {
            const angle = i * step;
            const wave = Math.sin(i * 2) * 15;
            const r = radius + wave;
            const x = cx + Math.cos(angle) * r;
            const y = cy + Math.sin(angle) * r;
            if (i === 0) ctx.moveTo(x, y);
            else {
                const prevAngle = (i - 0.5) * step;
                const prevWave = Math.sin((i - 0.5) * 2) * 15;
                const prevR = radius + prevWave;
                const cpX = cx + Math.cos(prevAngle) * (prevR + 10);
                const cpY = cy + Math.sin(prevAngle) * (prevR + 10);
                ctx.quadraticCurveTo(cpX, cpY, x, y);
            }
        }
        ctx.closePath();
        ctx.clip();
        drawImageInShape(ctx, cx, cy, radius * 2, img);
        ctx.restore();
        // border
        ctx.beginPath();
        for (let i = 0; i <= points; i++) {
            const angle = i * step;
            const wave = Math.sin(i * 2) * 15;
            const r = radius + wave;
            const x = cx + Math.cos(angle) * r;
            const y = cy + Math.sin(angle) * r;
            if (i === 0) ctx.moveTo(x, y);
            else {
                const prevAngle = (i - 0.5) * step;
                const prevWave = Math.sin((i - 0.5) * 2) * 15;
                const prevR = radius + prevWave;
                const cpX = cx + Math.cos(prevAngle) * (prevR + 10);
                const cpY = cy + Math.sin(prevAngle) * (prevR + 10);
                ctx.quadraticCurveTo(cpX, cpY, x, y);
            }
        }
        ctx.closePath();
        ctx.lineWidth = 10;
        ctx.strokeStyle = '#ffffff';
        ctx.stroke();
    };

    const drawHexagon = (ctx, cx, cy, radius, img) => {
        const sides = 6;
        const step = (Math.PI * 2) / sides;
        ctx.save();
        ctx.beginPath();
        for (let i = 0; i <= sides; i++) {
            const angle = i * step - Math.PI / 2;
            const x = cx + Math.cos(angle) * radius;
            const y = cy + Math.sin(angle) * radius;
            if (i === 0) ctx.moveTo(x, y);
            else ctx.lineTo(x, y);
        }
        ctx.closePath();
        ctx.clip();
        drawImageInShape(ctx, cx, cy, radius * 2, img);
        ctx.restore();
        // border
        ctx.beginPath();
        for (let i = 0; i <= sides; i++) {
            const angle = i * step - Math.PI / 2;
            const x = cx + Math.cos(angle) * radius;
            const y = cy + Math.sin(angle) * radius;
            if (i === 0) ctx.moveTo(x, y);
            else ctx.lineTo(x, y);
        }
        ctx.closePath();
        ctx.lineWidth = 10;
        ctx.strokeStyle = '#ffffff';
        ctx.stroke();
    };

    // Existing drawPentagon (unchanged)
    const drawPentagon = (ctx, cx, cy, radius, img) => {
        const sides = 5;
        const step = (Math.PI * 2) / sides;
        ctx.save();
        ctx.beginPath();
        for (let i = 0; i <= sides; i++) {
            const angle = i * step - Math.PI / 2;
            const x = cx + Math.cos(angle) * radius;
            const y = cy + Math.sin(angle) * radius;
            if (i === 0) ctx.moveTo(x, y);
            else ctx.lineTo(x, y);
        }
        ctx.closePath();
        ctx.clip();
        drawImageInShape(ctx, cx, cy, radius * 2, img);
        ctx.restore();
        // border
        ctx.beginPath();
        for (let i = 0; i <= sides; i++) {
            const angle = i * step - Math.PI / 2;
            const x = cx + Math.cos(angle) * radius;
            const y = cy + Math.sin(angle) * radius;
            if (i === 0) ctx.moveTo(x, y);
            else ctx.lineTo(x, y);
        }
        ctx.closePath();
        ctx.lineWidth = 10;
        ctx.strokeStyle = '#ffffff';
        ctx.stroke();
    };

    // Existing drawDiamond (unchanged)
    const drawDiamond = (ctx, cx, cy, radius, img) => {
        ctx.save();
        ctx.beginPath();
        ctx.moveTo(cx, cy - radius);
        ctx.lineTo(cx + radius, cy);
        ctx.lineTo(cx, cy + radius);
        ctx.lineTo(cx - radius, cy);
        ctx.closePath();
        ctx.clip();
        drawImageInShape(ctx, cx, cy, radius * 2, img);
        ctx.restore();
        // border
        ctx.beginPath();
        ctx.moveTo(cx, cy - radius);
        ctx.lineTo(cx + radius, cy);
        ctx.lineTo(cx, cy + radius);
        ctx.lineTo(cx - radius, cy);
        ctx.closePath();
        ctx.lineWidth = 10;
        ctx.strokeStyle = '#ffffff';
        ctx.stroke();
    };

    const drawStar = (ctx, cx, cy, radius, img) => {
        const spikes = 5;
        const outer = radius;
        const inner = radius * 0.5;
        ctx.save();
        ctx.beginPath();
        for (let i = 0; i < spikes * 2; i++) {
            const angle = (i * Math.PI) / spikes - Math.PI / 2;
            const r = i % 2 === 0 ? outer : inner;
            const x = cx + Math.cos(angle) * r;
            const y = cy + Math.sin(angle) * r;
            if (i === 0) ctx.moveTo(x, y);
            else ctx.lineTo(x, y);
        }
        ctx.closePath();
        ctx.clip();
        drawImageInShape(ctx, cx, cy, radius * 2, img);
        ctx.restore();
        // border
        ctx.beginPath();
        for (let i = 0; i < spikes * 2; i++) {
            const angle = (i * Math.PI) / spikes - Math.PI / 2;
            const r = i % 2 === 0 ? outer : inner;
            const x = cx + Math.cos(angle) * r;
            const y = cy + Math.sin(angle) * r;
            if (i === 0) ctx.moveTo(x, y);
            else ctx.lineTo(x, y);
        }
        ctx.closePath();
        ctx.lineWidth = 10;
        ctx.strokeStyle = '#ffffff';
        ctx.stroke();
    };

    const generateBadge = () => {
        if (!canvasRef.current) return;
        setLoading(true);
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');
        const template = new Image();
        template.src = TEMPLATE_SRC;
        template.onload = () => {
            canvas.width = template.width;
            canvas.height = template.height;
            ctx.drawImage(template, 0, 0);
            if (image) {
                const size = CONFIG.photo.radius * 2;
                const cx = CONFIG.photo.x;
                const cy = CONFIG.photo.y;
                const r = CONFIG.photo.radius;
                switch (frameShape) {
                    case 'circle':
                        drawCircle(ctx, cx, cy, r, image);
                        break;
                    case 'rounded-square':
                        drawRoundedSquare(ctx, cx, cy, size, image);
                        break;
                    case 'wavy':
                        drawWavyBlob(ctx, cx, cy, r, image);
                        break;
                    case 'hexagon':
                        drawHexagon(ctx, cx, cy, r, image);
                        break;
                    case 'pentagon':
                        drawPentagon(ctx, cx, cy, r, image);
                        break;
                }
            }
            if (name) {
                ctx.fillStyle = CONFIG.name.color;
                ctx.font = CONFIG.name.font;
                ctx.textAlign = 'center';
                ctx.textBaseline = 'middle';
                const words = name.split(' ');
                const lines = [];
                let current = '';
                let fontSize = 50;
                words.forEach(w => {
                    if ((current + ' ' + w).length <= 18) current += ' ' + w;
                    else { lines.push(current); current = w; }
                });
                lines.push(current);
                const maxWidth = 800;
                let maxLineWidth = 0;
                lines.forEach(l => { const w = ctx.measureText(l).width; if (w > maxLineWidth) maxLineWidth = w; });
                while (maxLineWidth > maxWidth && fontSize > 30) {
                    fontSize -= 2;
                    ctx.font = `bold ${fontSize}px Inter, sans-serif`;
                    maxLineWidth = 0;
                    lines.forEach(l => { const w = ctx.measureText(l).width; if (w > maxLineWidth) maxLineWidth = w; });
                }
                const lineHeight = fontSize * 1.2;
                lines.forEach((l, i) => ctx.fillText(l, CONFIG.name.x, CONFIG.name.y + i * lineHeight));
            }
            setGenerated(true);
            setLoading(false);
        };
    };

    const downloadBadge = () => {
        const canvas = canvasRef.current;
        try {
            const link = document.createElement('a');
            link.download = `devfest-badge-${name.replace(/\s+/g, '-').toLowerCase() || 'attendee'}.png`;
            link.href = canvas.toDataURL('image/png');
            link.click();
        } catch (err) {
            console.error('Download failed:', err);
            alert('Could not download badge. Please try right-clicking the image and "Save Image As".');
        }
    };

    useEffect(() => {
        generateBadge();
    }, [image, name, frameShape]);

    return (
        <div className="min-h-screen bg-gray-50 pt-28 py-12 px-4 sm:px-6 lg:px-8 font-sans">
            <div className="max-w-5xl mx-auto">
                <div className="text-center mb-12">
                    <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl mb-4">
                        Get Your <span className="text-blue-600">DevFest</span> Badge
                    </h1>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                        Personalize your experience! Upload your photo and enter your name to generate your official DevFest attendee badge.
                    </p>
                </div>
                <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                        <div className="p-8 lg:p-12 bg-gray-50 flex flex-col justify-center space-y-8">
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">Your Name</label>
                                <input
                                    type="text"
                                    value={name}
                                    onChange={e => setName(e.target.value)}
                                    placeholder="Enter your full name"
                                    className="w-full font-medium px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors bg-white"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">Your Photo</label>
                                <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-lg hover:border-blue-500 transition-colors bg-white cursor-pointer relative">
                                    <div className="space-y-1 text-center">
                                        {image ? (
                                            <div className="relative w-32 h-32 mx-auto rounded-full overflow-hidden mb-4">
                                                <img src={image.src} alt="Preview" className="w-full h-full object-cover" />
                                            </div>
                                        ) : (
                                            <Upload className="mx-auto h-12 w-12 text-gray-400" />
                                        )}
                                        <div className="flex text-sm text-gray-600 justify-center">
                                            <label htmlFor="file-upload" className="relative cursor-pointer bg-white rounded-md font-medium text-blue-600 hover:text-blue-500 focus-within:outline-none">
                                                <span>Upload a file</span>
                                                <input id="file-upload" name="file-upload" type="file" className="sr-only" accept="image/*" onChange={handleImageUpload} />
                                            </label>
                                            <p className="pl-1">or drag and drop</p>
                                        </div>
                                        <p className="text-xs text-gray-500">PNG, JPG, JPEG up to 10MB</p>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-3">Frame Shape</label>
                                <div className="grid grid-cols-5 gap-2">
                                    {FRAME_SHAPES.map(shape => (
                                        <button
                                            key={shape.id}
                                            onClick={() => setFrameShape(shape.id)}
                                            className={`flex flex-col items-center justify-center p-3 cursor-pointer rounded-lg border-2 transition-all ${frameShape === shape.id ? 'border-blue-600 bg-blue-50 text-blue-600' : 'border-gray-300 hover:border-blue-400 bg-white'}`}
                                            title={shape.name}
                                        >
                                            <span className="text-2xl mb-1">{shape.icon}</span>
                                            <span className="text-xs font-medium text-center leading-tight">{shape.name}</span>
                                        </button>
                                    ))}
                                </div>
                            </div>
                            <div className="pt-4">
                                <button
                                    onClick={downloadBadge}
                                    disabled={!generated}
                                    className={`w-full flex items-center justify-center px-8 py-4 border border-transparent text-lg cursor-pointer font-medium rounded-xl text-white ${generated ? 'bg-blue-600 hover:bg-blue-700 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5' : 'bg-gray-400 cursor-not-allowed'} transition-all duration-200`}
                                >
                                    <Download className="w-6 h-6 mr-2" />
                                    Download Badge
                                </button>
                            </div>
                        </div>
                        <div className="relative bg-gray-200 flex items-center justify-center p-8 lg:p-12 overflow-hidden">
                            <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#4b5563_1px,transparent_1px)] [background-size:16px_16px]"></div>
                            <div className="relative shadow-2xl rounded-lg overflow-hidden max-w-full">
                                <canvas ref={canvasRef} className="max-w-full h-auto block mx-auto rounded-lg" style={{ maxHeight: '600px' }} />
                                {!generated && loading && (
                                    <div className="absolute inset-0 flex items-center justify-center bg-white bg-opacity-80">
                                        <RefreshCw className="w-10 h-10 text-blue-600 animate-spin" />
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Badge;
