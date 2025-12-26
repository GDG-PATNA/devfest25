import React, { useState } from 'react';
import QRCode from 'qrcode';
import {
    Search,
    Download,
    AlertCircle,
    Loader2,
    Sparkles,
    CheckCircle2,
    Ticket
} from 'lucide-react';

const CSV_URL =
    "https://docs.google.com/spreadsheets/d/e/2PACX-1vQEtNxmjg6OMu_iQNKcJ0-bw9K51k-HTmH_Be_5Vw_8pbvc0hqoKHpf1n8iWmxyeaYYRryZ_vquQryw/pub?gid=0&single=true&output=csv";

const TEMPLATE_URL = '/certificate.png';

/* ---------------- CONFIGURATION ---------------- */
const QR_CONFIG = {
    x: 220,
    y: 1100,
    size: 200,
    color: '#000000',
    bgColor: '#ffffff00'
};

/* ---------------- UTIL ---------------- */
function parseCSV(text) {
    const lines = text.trim().split('\n');
    const headers = lines[0].split(',').map(h => h.trim());
    return lines.slice(1).map(line => {
        const values = line.split(',').map(v => v.trim());
        return headers.reduce((obj, key, i) => {
            obj[key] = values[i];
            return obj;
        }, {});
    });
}

/* ---------------- CANVAS ---------------- */
async function generateCertificate(name, ticketId) {
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');

    const img = new Image();
    img.src = TEMPLATE_URL;
    await new Promise(res => (img.onload = res));

    canvas.width = img.width;
    canvas.height = img.height;
    ctx.drawImage(img, 0, 0);

    ctx.font = "700 55px Inter";
    ctx.fillStyle = "#5f6368";
    ctx.textAlign = "center";
    ctx.fillText(name, canvas.width / 2, 590);

    try {
        const domain = window.location.origin;
        const verificationUrl = `${domain}/certificate/${ticketId}`;
        const qrDataUrl = await QRCode.toDataURL(verificationUrl, {
            margin: 1,
            color: {
                dark: QR_CONFIG.color,
                light: QR_CONFIG.bgColor
            }
        });

        const qrImg = new Image();
        qrImg.src = qrDataUrl;
        await new Promise(res => (qrImg.onload = res));

        ctx.drawImage(qrImg, QR_CONFIG.x, QR_CONFIG.y, QR_CONFIG.size, QR_CONFIG.size);

    } catch (err) {
        console.error("Error generating QR", err);
    }

    return canvas.toDataURL('image/png');
}

/* ---------------- COMPONENT ---------------- */
export const Certificate = () => {
    const [ticketId, setTicketId] = useState('');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');
    const [result, setResult] = useState(null);

    const handleSearch = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError('');

        try {
            const res = await fetch(CSV_URL);
            const text = await res.text();
            const records = parseCSV(text);
            const record = records.find(r => r.booking_id === ticketId.trim());

            if (!record) throw new Error('Certificate not found. Please check your Ticket ID.');

            const imageUrl = await generateCertificate(record.name, record.booking_id);

            setResult({
                name: record.name,
                url: imageUrl,
                fileName: `DevFest_Certificate_${record.name.replace(/\s+/g, '_')}.png`,
            });
        } catch (err) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="relative min-h-screen bg-slate-950 font-sans selection:bg-blue-500/30 text-white overflow-hidden">

            {/* Background Decorative Blobs */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-blue-600/20 rounded-full blur-[100px]" />
                <div className="absolute bottom-[-10%] right-[-10%] w-[500px] h-[500px] bg-red-600/10 rounded-full blur-[100px]" />
                <div className="absolute top-[40%] left-[50%] translate-x-[-50%] w-[300px] h-[300px] bg-yellow-500/10 rounded-full blur-[80px]" />
            </div>

            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 flex flex-col justify-center min-h-screen">

                <div className="grid lg:grid-cols-2 gap-12 lg:gap-24 items-center">

                    {/* Left Side: Hero Text */}
                    <div className="text-center lg:text-left space-y-8 animate-fade-in-up">
                        <div className="inline-flex items-center gap-2 px-4 py-2 bg-slate-800/50 border border-slate-700 rounded-full backdrop-blur-sm">
                            <span className="relative flex h-3 w-3">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
                            </span>
                            <span className="text-sm font-medium text-slate-300 tracking-wide">Official Downloads Live</span>
                        </div>

                        <h1 className="text-5xl md:text-7xl font-bold tracking-tight leading-[1.1]">
                            Generate Your <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-red-400 to-yellow-400">
                                DevFest Certificate
                            </span>
                        </h1>

                        <p className="text-lg text-slate-400 max-w-lg mx-auto lg:mx-0 leading-relaxed">
                            Thank you for being part of the community. Enter your Booking ID below to generate, verify, and download your official participation credential.
                        </p>
                    </div>

                    {/* Right Side: Glassmorphism Card */}
                    <div className="relative">
                        {/* Card Glow Effect */}
                        <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl blur opacity-30 transition duration-1000 group-hover:opacity-100"></div>

                        <div className="relative bg-slate-900/80 backdrop-blur-xl border border-slate-800 rounded-2xl p-8 shadow-2xl">

                            {!result ? (
                                /* --- SEARCH STATE --- */
                                <form onSubmit={handleSearch} className="space-y-8">
                                    <div className="text-center space-y-2 mb-8">
                                        <div className="w-16 h-16 bg-blue-500/10 rounded-2xl flex items-center justify-center mx-auto mb-4 text-blue-400">
                                            <Ticket className="w-8 h-8" />
                                        </div>
                                        <h2 className="text-2xl font-bold text-white">Retrieve Certificate</h2>
                                        <p className="text-slate-400 text-sm">Enter the ID sent to your email</p>
                                    </div>

                                    <div className="space-y-4">
                                        <div className="relative group">
                                            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                                                <Search className="h-5 w-5 text-slate-500 group-focus-within:text-blue-400 transition-colors" />
                                            </div>
                                            <input
                                                value={ticketId}
                                                onChange={(e) => setTicketId(e.target.value)}
                                                className="block w-full pl-11 pr-4 py-4 bg-slate-950 border border-slate-700 rounded-xl text-slate-200 placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500 transition-all"
                                                placeholder="e.g. CERTIFICATE-ID-XXXX"
                                                required
                                            />
                                        </div>

                                        <button
                                            disabled={loading}
                                            className="w-full bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-500 hover:to-blue-400 text-white font-semibold py-4 rounded-xl shadow-lg shadow-blue-500/20 transition-all transform hover:scale-[1.02] active:scale-[0.98] disabled:opacity-70 disabled:cursor-not-allowed flex justify-center items-center gap-2"
                                        >
                                            {loading ? (
                                                <>
                                                    <Loader2 className="w-5 h-5 animate-spin" />
                                                    <span>Generating...</span>
                                                </>
                                            ) : (
                                                <>
                                                    <span>Find Certificate</span>
                                                    <Sparkles className="w-5 h-5" />
                                                </>
                                            )}
                                        </button>
                                    </div>

                                    {error && (
                                        <div className="p-4 bg-red-500/10 border border-red-500/20 rounded-xl flex items-start gap-3 text-red-400 text-sm">
                                            <AlertCircle className="w-5 h-5 flex-shrink-0" />
                                            <span>{error}</span>
                                        </div>
                                    )}
                                </form>
                            ) : (
                                /* --- RESULT STATE --- */
                                <div className="space-y-6 animate-in fade-in zoom-in duration-300">
                                    <div className="flex items-center gap-3 text-green-400 bg-green-400/10 p-3 rounded-lg border border-green-400/20">
                                        <CheckCircle2 className="w-5 h-5" />
                                        <span className="font-medium">Certificate Generated Successfully</span>
                                    </div>

                                    <div className="relative group rounded-lg overflow-hidden border border-slate-700 shadow-2xl">
                                        <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-all" />
                                        <img src={result.url} alt="Generated Certificate" className="w-full object-cover" />
                                    </div>

                                    <div className="grid grid-cols-2 gap-3">
                                        <button
                                            onClick={() => setResult(null)}
                                            className="px-4 py-3 rounded-xl bg-slate-800 text-slate-300 font-medium hover:bg-slate-700 transition-colors"
                                        >
                                            Back
                                        </button>
                                        <a
                                            href={result.url}
                                            download={result.fileName}
                                            className="flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-green-600 text-white font-medium hover:bg-green-500 shadow-lg shadow-green-900/20 transition-all hover:-translate-y-0.5"
                                        >
                                            <Download className="w-4 h-4" />
                                            Download
                                        </a>
                                    </div>
                                </div>
                            )}
                        </div>

                        {/* Footer underneath card */}
                        <div className="mt-6 text-center">
                            <p className="text-xs text-slate-500">
                                Issues with your ID? <a href="#" className="text-blue-400 hover:underline">Contact Support</a>
                            </p>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Certificate;