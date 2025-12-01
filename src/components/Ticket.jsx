// src/components/Ticket.jsx
import React, { useEffect, useState } from "react";

function getTimeLeft() {
  const endDate = new Date(2025, 11, 8, 23, 59, 59); // 8 Dec 2025, local time
  const now = new Date();
  const diff = endDate - now;

  if (diff <= 0) {
    return { expired: true, days: 0, hours: 0, minutes: 0, seconds: 0 };
  }

  const totalSeconds = Math.floor(diff / 1000);
  const days = Math.floor(totalSeconds / (60 * 60 * 24));
  const hours = Math.floor((totalSeconds % (60 * 60 * 24)) / (60 * 60));
  const minutes = Math.floor((totalSeconds % (60 * 60)) / 60);
  const seconds = totalSeconds % 60;

  return { expired: false, days, hours, minutes, seconds };
}

export default function Ticket() {
  const [timeLeft, setTimeLeft] = useState(getTimeLeft);

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft(getTimeLeft());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const formatNumber = (num) => String(num).padStart(2, "0");

  return (
    <section
      id="tickets"
      className="w-full bg-[#F7EEDC] py-12 px-4 flex justify-center"
    >
      <div className="w-full max-w-4xl">
        {/* Heading */}
        <div className="text-center mb-6 sm:mb-8">
          <h2 className="text-2xl sm:text-3xl md:text-[32px] font-extrabold leading-tight text-[#111827]">
            Book Your Ticket Now
          </h2>
        </div>

        {/* Timer */}
        <div className="mb-6 sm:mb-8 flex flex-col items-center gap-3">
          <p className="text-[11px] sm:text-xs font-semibold tracking-[0.16em] uppercase text-[#6B7280]">
            Early Bird Ticket Sale Ends In:
          </p>

          {timeLeft.expired ? (
            <div className="px-4 py-2 rounded-full bg-white border-[2px] border-black text-xs sm:text-sm font-semibold text-[#B91C1C] shadow-[2px_2px_0_0_rgba(0,0,0,1)]">
              Early Bird sale has ended. Regular tickets may still be available.
            </div>
          ) : (
            <div className="inline-flex items-stretch gap-2 sm:gap-3 px-3 py-2 sm:px-4 sm:py-3 bg-white rounded-full border-[2px] border-black shadow-[3px_3px_0_0_rgba(0,0,0,1)] animate-[pulse_2.4s_ease-in-out_infinite]">
              {[
                { label: "Days", value: timeLeft.days },
                { label: "Hours", value: timeLeft.hours },
                { label: "Mins", value: timeLeft.minutes },
                { label: "Secs", value: timeLeft.seconds },
              ].map((item) => (
                <div
                  key={item.label}
                  className="flex flex-col items-center min-w-[52px]"
                >
                  <span className="text-sm sm:text-base font-extrabold text-[#111827] leading-none">
                    {formatNumber(item.value)}
                  </span>
                  <span className="text-[9px] sm:text-[10px] uppercase tracking-[0.14em] text-[#6B7280]">
                    {item.label}
                  </span>
                </div>
              ))}
            </div>
          )}

          <p className="text-[10px] sm:text-xs text-[#6B7280]">
            Early Bird valid till{" "}
            <span className="font-semibold text-[#111827]">
              8 Dec 2025, 11:59 PM
            </span>
          </p>
        </div>

        {/* Ticket widget – focus area */}
        <div className="w-full">
          <iframe
            className="w-full rounded-[16px] border-[2px] border-black"
            style={{ boxShadow: "3px 3px 0px 0px black" }}
            src="https://konfhub.com/widget/devfest-patna-25?desc=true&secondaryBg=F7F7F7&ticketBg=F7F7F7&borderCl=F7F7F7&bg=FFFFFF&fontColor=1e1f24&ticketCl=1e1f24&btnColor=002E6E&fontFamily=Hind&borderRadius=10&widget_type=standard&tickets=67139%2C67143&ticketId=67139%7C%3B67143%7C"
            id="konfhub-widget"
            title="Register for DevFest Patna 2025 by Google Developer Groups Patna"
            width="100%"
            height="420"
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </section>
  );
}