// pages/tc.jsx

import React from "react";

const TERMS = [
  {
    title: "Tickets & Entry",
    points: [
      "Each ticket admits one person only.",
      "Tickets are not transferable to another person.",
      "Entry will be allowed only with a valid, confirmed ticket and a matching ID proof.",
    ],
  },
  {
    title: "Swags & Goodies",
    points: [
      "Swags are limited and subject to availability.",
      "Swags will not be given to anyone if you're not attending in person.",
      "Swags must be collected during the event timings only.",
    ],
  },
  {
    title: "Event Schedule & Changes",
    points: [
      "The organizers reserve the right to make changes to the schedule, speakers, or sessions at any time.",
      "Any major updates will be communicated through official channels.",
    ],
  },
  {
    title: "Refund & Cancellation",
    points: [
      "All tickets are non-refundable.",
      "In case of event postponement, tickets may be carried forward to the rescheduled date as per organizer policy.",
    ],
  },
  {
    title: "Code of Conduct",
    points: [
      "All attendees must follow the event’s Code of Conduct and maintain respectful behaviour towards others.",
      "Harassment, discrimination, or any kind of inappropriate behaviour will not be tolerated.",
      "The organizers reserve the right to remove any attendee for violating the Code of Conduct.",
    ],
  },
  {
    title: "Photography & Media",
    points: [
      "Photos and videos may be clicked during the event.",
      "By attending, you consent to the use of event photos/videos for promotional purposes.",
    ],
  },
  {
    title: "General",
    points: [
      "By registering for this event, you agree to these Terms & Conditions.",
      "For any queries, please reach out to the organizers through official channels.",
    ],
  },
];

export default function TermsAndConditions() {
  return (
    <main className="min-h-screen w-full bg-[#F7EEDC] flex justify-center px-4 py-16">
      <section className="w-full max-w-4xl">
        {/* Header Card */}
        <div className="relative mb-10 mt-12">
          {/* “tab” like top edge */}
          <div className="absolute -top-3 left-6 inline-flex items-center gap-2 rounded-full border-[2px] border-black bg-[#F7EEDC] px-4 py-1 text-xs sm:text-sm font-semibold tracking-wide">
            <span className="inline-block h-2 w-2 rounded-full border-[2px] border-black bg-white" />
            Terms &amp; Conditions
          </div>

          {/* Main header box */}
          <div className="rounded-[32px] border-[2.5px] border-black bg-white px-6 py-8 sm:px-8 sm:py-10 shadow-[4px_4px_0px_#000000]">
            <h1 className="text-3xl sm:text-4xl font-[800] leading-tight text-black mb-3">
              Please read before attending 🚀
            </h1>
            <p className="text-sm font-semibold sm:text-base text-gray-700 max-w-2xl">
              These Terms &amp; Conditions apply to all attendees of DevFest 2025. 
              By registering and attending the event, you agree to follow the points mentioned below.
            </p>
          </div>
        </div>

        {/* Content Card */}
        <div className="rounded-[32px] border-[2.5px] border-black bg-white px-5 py-7 sm:px-8 sm:py-9 shadow-[4px_4px_0px_#000000] space-y-8">
          {TERMS.map((section) => (
            <div key={section.title} className="space-y-3">
              <h2 className="text-lg sm:text-xl font-[800] text-black">
                {section.title}
              </h2>
              <ul className="space-y-2 pl-4 text-xs font-semibold sm:text-sm text-gray-800">
                {section.points.map((point, idx) => (
                  <li key={idx} className="flex gap-2">
                    <span className="mt-[6px] inline-block h-1.5 w-1.5 rounded-full border-[2px] border-black" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div className="mt-6 pt-4 border-t border-dashed border-gray-300 text-[11px] sm:text-xs text-gray-600">
            Last updated: {new Date().getFullYear()}
          </div>
        </div>
      </section>
    </main>
  );
}
