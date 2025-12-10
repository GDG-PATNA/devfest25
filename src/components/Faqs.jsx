// src/components/Faqs.jsx
import { useState } from "react";
import { Plus, X } from "lucide-react";
import noiseTexture from '../assets/noiseTexture.png'

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
    answer: "Urja Auditorium, Patna",
  },
  {
    question: "Will the accommodation facility provide to attendees?",
    answer:
      "Unfortunately, we won't be able to support you with with accomodation. Individual attendees has to take care of their accomodation by themselves only.",
  },
  {
    question: "If I have any queries, where do I contact?",
    answer: "Reach out to us at telegram @gdgpatna",
  },
];

const Faqs = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const toggleFAQ = (index) => {
    setActiveIndex((prev) => (prev === index ? null : index));
  };

  return (
    <section
      id="faq"
      className="w-full bg-[#F7EEDC] lg:rounded-b-[5rem] rounded-b-[3rem] overflow-clip px-4 md:px-25"
    >
      <div className="w-full border-l-3 border-r-3 border-gray-500/50  px-4 sm:px-8 lg:px-12 py-16 md:py-24">
        <div className="max-w-4xl mx-auto">
          {/* Heading */}
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-[45px]  leading-tight font-product-bold text-[#111827]">
              Frequently Asked
            </h2>

            <div className="mt-3 inline-block">
              <span className="inline-block font-product-bold bg-linear-to-b from-yellow-600 to-yellow-200 border-[3px] border-black rounded-full px-6 py-2 text-[30px] md:text-[45px]  shadow-[0_5px_0_rgba(0,0,0,0.85)] overflow-hidden rotate-[-6deg]">
                <img src={noiseTexture} alt="" className="absolute left-0 top-0 opacity-80 mix-blend-plus-lighter pointer-events-none" />
                <p className="select-none font-product-black relative z-1 text-gray-900">
                Questions
                </p>
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
                  className="relative mt-10 bg-[#4285F4] rounded-tr-[18px] rounded-br-[18px] rounded-bl-[18px] border-2 border-black px-4 sm:px-6 pt-1 pb-3 sm:pb-4"
                >
                  {/* Tab-like top edge */}
                  <div className="absolute -top-6 -translate-x-[1.7px] left-0 h-6 w-36 rounded-t-xl bg-[#4285F4] border-t-2 border-x-2 border-black" />

                  <div className="flex flex-col-reverse">
                    {/* Bottom: divider + question row */}
                    <div className="-mx-4.5 sm:-mx-6 translate-y-5 bg-[#4285F4] border-2 border-black rounded-[18px]">
                      <button
                        className="w-full flex items-start justify-between gap-2 sm:gap-3 pt-3 px-4 sm:px-6"
                        onClick={() => toggleFAQ(index)}
                      >
                        <span className="flex-1 text-left text-sm sm:text-base md:text-lg py-2 font-medium text-white tracking-tight ">
                          {item.question}
                        </span>

                        <span className="shrink-0 flex h-8 w-8 sm:h-9 sm:w-9 items-center justify-center rounded-full bg-white border-2 mb-3 border-black">
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
                      className={`transition-all duration-600 ease-out ${
                        isActive
                          ? "max-h-40 sm:max-h-44 -mb-5 opacity-100 "
                          : "max-h-0 mb-0 opacity-0"
                      } overflow-hidden`}
                    >
                      <div className="relative mt-2">
                        <div className="absolute inset-0 rounded-[18px] bg-black/10 translate-x-1.5 translate-y- -rotate-2" />
                        <div className="relative bg-white rounded-tr-[18px] rounded-tl-[18px] translate-y-2 rounded-b-none border-2 border-b-0 border-black px-4 py-4 text-xs sm:text-sm font-semibold leading-relaxed -rotate-1">
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
      </div>
    </section>
  );
};

export default Faqs;
