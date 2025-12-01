import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus } from "lucide-react"; // ✅ NEW

export default function WhatToExpect() {
    const [active, setActive] = useState(null);

    const items = [
        {
            title: "Technical Content",
            color: "bg-[#FF8A8A]",
            text: `Gain in-depth insights from industry experts, explore the latest tools and technologies, and learn how modern solutions are shaping the future of development.`,
        },
        {
            title: "Networking",
            color: "bg-[#FFCD47]",
            text: `Connect with developers, designers, founders, and tech enthusiasts from the community.`,
        },
        {
            title: "Fun Activities",
            color: "bg-[#52D991]",
            text: `Participate in games, quizzes, and fun challenges designed to keep the energy high.`,
        },
        {
            title: "Knowledge Sharing",
            color: "bg-[#5AA2FF]",
            text: `Learn from experts, mentors, and fellow attendees through discussions and demos.`,
        },
    ];

    const spring = {
        type: "spring",
        damping: 22,
        stiffness: 180,
    };

    return (
        <section className="w-full bg-[#3A3A3A] py-">
            <div className="max-w-6xl mx-auto relative">

                {/* MOBILE/TABLET TITLE */}
                <h2 className="lg:hidden text-center text-4xl font-serif font-bold text-white mb-20 relative top-10">
                    <span className="font-light opacity-80">What to</span>{" "}
                    <span className="font-bold">Expect</span>
                </h2>

                {/* DESKTOP LEFT VERTICAL TITLE (FIXED FULLY) */}
                <div className="hidden lg:block absolute left-0 top-1/2 -translate-y-1/2 -rotate-90">
                    <h2 className="text-[70px] font-serif font-bold leading-none text-white text-center " >
                        <span className="block font-light opacity-80">What to</span>
                        <span className="block font-bold">Expect</span>
                    </h2>
                </div>


                {/* ACCORDION */}
                <div className="w-full lg:ml-[260px] lg:max-w-[800px] space-y-0">

                    {items.map((item, index) => (
                        <div key={index}>

                            {/* HEADER */}
                            <motion.div
                                initial={false}
                                animate={{ borderRadius: "30px 30px 0 0" }}
                                transition={spring}
                                onClick={() => setActive(active === index ? null : index)}
                                className={`cursor-pointer flex justify-between items-center px-6 py-6 min-h-[100px] lg:min-h-[110px] 
                                text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold text-white ${item.color}`}
                            >
                                {item.title}

                                <motion.div
                                    initial={false}
                                    animate={{ rotate: active === index ? 45 : 0 }}
                                    transition={{ duration: 0.25 }}
                                    className="shrink-0 w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 flex items-center justify-center rounded-full border-2 border-white text-white"
                                >
                                    <Plus className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8" strokeWidth={3} />
                                </motion.div>
                            </motion.div>


                            {/* BODY */}
                            <AnimatePresence>
                                {active === index && (
                                    <motion.div
                                        initial={{ opacity: 0, height: 0 }}
                                        animate={{ opacity: 1, height: "auto" }}
                                        exit={{ opacity: 0, height: 0 }}
                                        transition={spring}
                                        className="overflow-hidden"
                                    >
                                        <div className="bg-[#F6F0E5] px-10 py-8 text-xl text-black rounded-b-[30px]">
                                            {item.text}
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>

                        </div>
                    ))}

                </div>
            </div>
        </section>
    );
}