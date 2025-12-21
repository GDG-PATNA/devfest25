// src/components/Ticket.jsx
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function getTimeLeft() {
  const endDate = new Date(2025, 11, 23, 23, 59, 59); // 23 Dec 2025, local time
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
      className="w-full  h-fit  px-4 md:px-32  bg-[#F7EEDC] "
    >
      <div className="flex border-l-3 border-r-3 py-10  border-gray-500/50 items-center justify-center w-full h-full">
      <div className="w-full max-w-4xl">
        {/* Heading */}
        <div className="text-center mb-6 sm:mb-8">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-product-black leading-tight text-[#111827]">
            Book Your Ticket Now
          </h2>
        </div>

        {/* Timer */}
        <div className="mb-6 sm:mb-8 font-product-bold flex flex-col items-center gap-3">
          <p className="text-[11px] sm:text-xs font-semibold tracking-[0.16em] uppercase text-[#6B7280]">
            Late Bird tickets Sale Ends In:
          </p>

          {timeLeft.expired ? (
            <div className="px-4 py-2 rounded-full bg-white border-2 border-black text-xs sm:text-sm font-semibold text-[#B91C1C] shadow-[2px_2px_0_0_rgba(0,0,0,1)]">
              tickets sale has ended.
            </div>
          ) : (
            <div className="inline-flex items-stretch gap-2 sm:gap-3 px-3 py-2 sm:px-4 sm:py-3 bg-white rounded-full border-2 border-black shadow-[3px_3px_0_0_rgba(0,0,0,1)] animate-[pulse_2.4s_ease-in-out_infinite]">
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
                  <span className="text-sm sm:text-base font-extrabold text-[#B91C1C] leading-none">
                    {formatNumber(item.value)}
                  </span>
                  <span className="text-[9px] sm:text-[10px] uppercase tracking-[0.14em] text-[#bb5e5e]">
                    {item.label}
                  </span>
                </div>
              ))}
            </div>
          )}

          <div className="relative w-full mt-1 flex flex-col items-center">
            <p className="text-[10px] sm:text-xs text-[#6B7280] text-center w-full">
              Tickets sale Extended till{" "}
              <span className="font-semibold text-[#111827]">
                23 Dec 2025, 11:59 PM
              </span>
            </p>

            <Link
              to="/guideline"
              className="text-[10px] sm:text[11px] font-medium text-[#111827] underline cursor-pointer
              mt-1 sm:mt-0 sm:absolute sm:right-0 sm:top-1"
            >
              *Read Ticket Guidelines
            </Link>
          </div>
        </div>

        {/* Ticket widget – focus area */}
        <div className="w-full">
          <iframe
            className="w-full rounded-2xl border-2 border-black"
            style={{ boxShadow: "3px 3px 0px 0px black" }}
            src="https://konfhub.com/widget/devfest-patna-25?desc=true&secondaryBg=F7F7F7&ticketBg=F7F7F7&borderCl=F7F7F7&bg=FFFFFF&fontColor=1e1f24&ticketCl=1e1f24&btnColor=002E6E&fontFamily=Hind&borderRadius=10&widget_type=standard&tickets=69352&ticketId=69352%7C1%22"
            id="konfhub-widget"
            title="Register for DevFest Patna 2025 by Google Developer Groups Patna"
            width="100%"
            height="420"
            loading="lazy"
          ></iframe>
        </div>
      </div>
      </div>
    </section>
  );
}
