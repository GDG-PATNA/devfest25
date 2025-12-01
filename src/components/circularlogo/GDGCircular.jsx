import React from "react";

const GDGCircular = () => {
    return (
        <div className="relative w-[80vw] max-w-[340px] aspect-square mx-auto flex items-center justify-center">

            {/* Rotating Text Circle */}
            <div className="absolute inset-0 animate-spin-slow">
                <svg viewBox="0 0 300 300" className="w-full h-full">
                    <defs>
                        <path
                            id="circleTextPath"
                            d="
                M150 150
                m -120,0
                a 120,120 0 1,1 240,0
                a 120,120 0 1,1 -240,0
            "
                        />
                    </defs>

                    <text
                        fontSize="16.2"
                        fontWeight="700"
                        fill="black"
                        letterSpacing="2px"
                    >
                        <textPath href="#circleTextPath" startOffset="0%">
                            • GDG PATNA 2025 • GDG PATNA 2025 • GDG PATNA 2025 • GDG PATNA 2025 •
                        </textPath>
                    </text>
                </svg>
            </div>

            {/* Center Arrow (Fixed) */}
            <img src="/src/assets/arrow.001.png" className="h-[50%]" alt="" />
        </div>
    );
};

export default GDGCircular;
