import React, { useEffect, useRef } from "react";

export default function NotFound() {
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext("2d");
        let particlesArray = [];
        let animationFrameId;

        const resizeCanvas = () => {
            canvas.width = window.innerWidth;
            canvas.height = Math.max(window.innerHeight, document.body.scrollHeight);
        };

        resizeCanvas();

        window.addEventListener("resize", () => {
            resizeCanvas();
            initParticles();
        });

        const mouse = { x: null, y: null, radius: 150 };

        window.addEventListener("mousemove", (e) => {
            mouse.x = e.x;
            mouse.y = e.y;
        });

        class Particle {
            constructor(x, y, dX, dY, size) {
                this.x = x;
                this.y = y;
                this.dX = dX;
                this.dY = dY;
                this.size = size;
            }

            draw() {
                ctx.beginPath();
                ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
                ctx.fillStyle = "rgba(255, 255, 255, 0.3)";
                ctx.fill();
            }

            update() {
                if (this.x > canvas.width || this.x < 0) this.dX = -this.dX;
                if (this.y > canvas.height || this.y < 0) this.dY = -this.dY;

                const dx = mouse.x - this.x;
                const dy = mouse.y - this.y;
                const distance = Math.sqrt(dx * dx + dy * dy);

                if (distance < mouse.radius) {
                    const force = (mouse.radius - distance) / mouse.radius;
                    const moveX = (dx / distance) * force * 2;
                    const moveY = (dy / distance) * force * 2;
                    this.x -= moveX;
                    this.y -= moveY;
                } else {
                    this.x += this.dX;
                    this.y += this.dY;
                }

                this.draw();
            }
        }

        const initParticles = () => {
            particlesArray = [];
            const num = (canvas.height * canvas.width) / 15000;
            for (let i = 0; i < num; i++) {
                const size = Math.random() * 2 + 1;
                const x = Math.random() * canvas.width;
                const y = Math.random() * canvas.height;
                const dX = Math.random() * 0.5 - 0.25;
                const dY = Math.random() * 0.5 - 0.25;
                particlesArray.push(new Particle(x, y, dX, dY, size));
            }
        };

        const animate = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            particlesArray.forEach((p) => p.update());
            animationFrameId = requestAnimationFrame(animate);
        };

        initParticles();
        animate();

        return () => {
            cancelAnimationFrame(animationFrameId);
            window.removeEventListener("resize", resizeCanvas);
        };
    }, []);

    return (
        <div className="bg-gray-900 text-white font-sans min-h-screen flex flex-col items-center justify-center relative overflow-x-hidden">

            {/* Particle Background */}
            <canvas
                ref={canvasRef}
                className="absolute top-0 left-0 w-full h-full z-0 pointer-events-none"
            />

            {/* Content */}
            <div className="relative z-10 text-center px-4 grow flex flex-col items-center justify-center w-full max-w-4xl py-12">

                {/* Floating Astronaut */}
                <div className="float mb-6 inline-block">
                    <i className="fas fa-user-astronaut text-6xl sm:text-7xl md:text-8xl text-teal-400 opacity-80"></i>
                </div>

                {/* Glitch 404 */}
                <h1 className="glitch mb-4 text-6xl sm:text-8xl md:text-9xl" data-text="404">
                    404
                </h1>

                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 text-gray-200">
                    Houston, we have a problem.
                </h2>

                <p className="text-gray-400 max-w-md mx-auto mb-10 text-base sm:text-lg">
                    The page you are looking for seems to have drifted into a black hole. Let's get you back to safety.
                </p>

                {/* Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 justify-center w-full sm:w-auto">
                    <a
                        href="/"
                        className="group relative px-8 py-3 bg-teal-600 hover:bg-teal-700 rounded-lg font-bold transition-all transform hover:scale-105 shadow-[0_0_20px_rgba(13,148,136,0.5)] overflow-hidden text-center"
                    >
                        <span className="relative z-10 flex items-center justify-center gap-2">
                            <i className="fas fa-shuttle-space"></i> Return to Base
                        </span>
                    </a>

                    <button
                        onClick={() => window.history.back()}
                        className="px-8 py-3 border border-gray-600 hover:bg-gray-800 rounded-lg font-bold transition-all text-gray-300 hover:text-white text-center"
                    >
                        Go Back
                    </button>
                </div>
            </div>

            {/* Footer */}
            <div className="relative z-10 text-gray-600 text-xs sm:text-sm pb-8 mt-auto">
                ERROR CODE: 404_PAGE_NOT_FOUND
            </div>

            {/* Styles */}
            <style>{`
                .glitch {
                    position: relative;
                    color: white;
                    font-weight: 900;
                    letter-spacing: 0.5rem;
                    text-shadow: 0.05em 0 0 #00fffc,
                                 -0.03em -0.04em 0 #fc00ff,
                                  0.025em 0.04em 0 #fffc00;
                    animation: glitch 725ms infinite;
                }
                .glitch span {
                    position: absolute;
                    top: 0;
                    left: 0;
                }

                @keyframes glitch {
                    0%, 15% {
                        text-shadow: 0.05em 0 0 #00fffc,
                                     -0.03em -0.04em 0 #fc00ff,
                                      0.025em 0.04em 0 #fffc00;
                    }
                    16%, 49% {
                        text-shadow: -0.05em -0.025em 0 #00fffc,
                                      0.025em 0.035em 0 #fc00ff,
                                     -0.05em -0.05em 0 #fffc00;
                    }
                    50%, 99% {
                        text-shadow: 0.05em 0.035em 0 #00fffc,
                                      0.03em 0 0 #fc00ff,
                                      0 -0.04em 0 #fffc00;
                    }
                    100% {
                        text-shadow: -0.05em 0 0 #00fffc,
                                     -0.025em -0.04em 0 #fc00ff,
                                     -0.04em -0.025em 0 #fffc00;
                    }
                }

                .float {
                    animation: float 6s ease-in-out infinite;
                }
                @keyframes float {
                    0% { transform: translateY(0px) rotate(0deg); }
                    50% { transform: translateY(-20px) rotate(5deg); }
                    100% { transform: translateY(0px) rotate(0deg); }
                }
            `}</style>
        </div>
    );
}
