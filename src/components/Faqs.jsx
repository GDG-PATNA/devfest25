// src/components/Faqs.jsx
import { useState } from "react";
import { Plus, X } from "lucide-react";

const FAQS = [
    {
        question: "What is DevFest?",
        answer:
            "DevFest is a tech conference led by the GDG community, with the goal of exchanging knowledge, networking, and learning about Google Developer Technologies.",
    },
    {
        question: "What are the benefits of DevFest?",
        answer:
            "You get hands-on sessions, inspiring talks from experts, networking opportunities with developers, and access to the latest updates in Google technologies.",
    },
    {
        question: "Who can attend DevFest?",
        answer:
            "Anyone interested in technology can attend — students, professionals, beginners, or experienced developers from any background.",
    },
    {
        question: "What is the venue for Devfest Patna 2025?",
        answer:
            "Urja Auditorium, Patna",
    },
    {
        question: "Will the accommodation facility provide to attendees?",
        answer:
            "Unfortunately, we won't be able to support you with with accomodation. Individual attendees has to take care of their accomodation by themselves only.",
    },
    {
        question: "If I have any queries, where do I contact?",
        answer:
            "Reach out to us at telegram @gdgpatna"
    },
];

const Faqs = () => {
    const [activeIndex, setActiveIndex] = useState(0);

    const toggleFAQ = (index) => {
        setActiveIndex((prev) => (prev === index ? null : index));
    };

    return (
        <section className="w-full bg-[#F7EEDC] py-16 px-4 flex justify-center rounded-b-[42px]">
            <div className="w-full max-w-4xl">
                {/* Heading */}
                <div className="text-center mb-16">
                    <h2 className="text-3xl sm:text-4xl md:text-[40px] font-[800] leading-tight text-[#111827]">
                        Frequently Asked
                    </h2>

                    <div className="mt-3 inline-block">
                        <span className="inline-block bg-[#FFB72B] border-[3px] border-black rounded-full px-8 py-3 text-2xl sm:text-3xl font-[800] text-white shadow-[0_6px_0_rgba(0,0,0,0.85)] rotate-[-4deg]">
                            Questions
                        </span>
                    </div>
                </div>

                {/* FAQ list */}
                <div className="space-y-4">
                    {FAQS.map((item, index) => {
                        const isActive = activeIndex === index;

                        return (
                            <div
                                key={index}
                                className="relative mt-8 bg-[#4285F4] rounded-tr-[18px] rounded-br-[18px] rounded-bl-[18px] border-[2px] border-black px-4 sm:px-6 pt-3 pb-3 sm:pb-4"
                            >
                                {/* Tab-like top edge */}
                                <div className="absolute -top-6 -left-0.5 h-6 w-25 rounded-t-[12px] bg-[#4285F4] border-t-[2px] border-x-[2px] border-black" />

                                <div className="flex flex-col-reverse">
                                    {/* Bottom: divider + question row */}
                                    <div className="-mx-4 sm:-mx-6 border-t-[2px] border-black rounded-t-[26px]">
                                        <button
                                            className="w-full flex items-start justify-between gap-2 sm:gap-3 pt-3 px-4 sm:px-6"
                                            onClick={() => toggleFAQ(index)}
                                        >

                                            <span className="flex-1 text-left text-sm sm:text-base md:text-lg font-medium text-black tracking-tight leading-snug">
                                                {item.question}
                                            </span>

                                            <span className="flex-shrink-0 flex h-8 w-8 sm:h-9 sm:w-9 items-center justify-center rounded-full bg-white border-[2px] border-black">
                                                {isActive ? (
                                                    <X className="h-4 w-4" />
                                                ) : (
                                                    <Plus className="h-4 w-4" />
                                                )}
                                            </span>

                                        </button>
                                    </div>

                                    {/* answer (expands upward) */}
                                    <div
                                        className={`transition-all duration-600 ease-out ${isActive
                                            ? "max-h-40 sm:max-h-44 mb-3 opacity-100 "
                                            : "max-h-0 mb-0 opacity-0"
                                            } overflow-hidden`}
                                    >
                                        <div className="relative mt-2">
                                            <div className="absolute inset-0 rounded-[18px] bg-black/10 translate-x-[6px] translate-y-[6px]" />
                                            <div className="relative bg-white rounded-tr-[18px] rounded-tl-[18px] rounded-b-none border-[2px] border-b-0 border-black px-4 py-3 text-xs sm:text-sm font-semibold leading-relaxed -rotate-1">
                                                {item.answer}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default Faqs;