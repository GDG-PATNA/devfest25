/* =========================================================================
   FILE: ./pages/Agenda.jsx
   ========================================================================= */
import { Calendar, Clock, Users, Coffee, Mic, Sparkles, Award } from "lucide-react";
import { Link } from "react-router-dom";

const agendaData = [
  {
    time: "09:00 – 10:00",
    session: "Registration & Networking",
    speaker: "",
    icon: Users,
    color: "blue"
  },
  {
    time: "10:00 – 10:15",
    session: "Inauguration: Saraswati Vandana",
    speaker: "Vishal Kumar",
    icon: Sparkles,
    color: "purple"
  },
  {
    time: "10:15 – 10:30",
    session: "Welcome Note",
    speaker: "GDG Patna Leadership",
    icon: Users,
    color: "blue"
  },
  {
    time: "10:35 – 11:05",
    session: "Speaker Session 1",
    speaker: "Pankaj Rai (GDE)",
    icon: Mic,
    color: "purple"
  },
  {
    time: "11:10 – 11:40",
    session: "Speaker Session 2",
    speaker: "Aparajita Verma (Mycom)",
    icon: Mic,
    color: "purple"
  },
  {
    time: "11:45 – 12:15",
    session: "Speaker Session 3",
    speaker: "Rajesh Ranjan (02 Angels)",
    icon: Mic,
    color: "purple"
  },
  {
    time: "12:20 – 12:50",
    session: "Speaker Session 4",
    speaker: "Vivek Yadav (FlutterFlow)",
    icon: Mic,
    color: "purple"
  },
  {
    time: "12:50 – 01:20",
    session: "DevFEST Open Mic",
    speaker: "Community",
    icon: Users,
    color: "green"
  },
  {
    time: "01:20 – 01:30",
    session: "Sponsor Spotlight",
    speaker: "ISM Patna & Partners",
    icon: Award,
    color: "yellow"
  },
  {
    time: "01:30 – 02:30",
    session: "LUNCH BREAK",
    speaker: "",
    icon: Coffee,
    color: "yellow",
    isLunch: true
  },
  {
    time: "02:30 – 03:00",
    session: "Speaker Session 5",
    speaker: "Om Prakash (AppyCrown)",
    icon: Mic,
    color: "purple"
  },
  {
    time: "03:05 – 03:35",
    session: "Speaker Session 6",
    speaker: "Chandan Tiwari (EDC India)",
    icon: Mic,
    color: "purple"
  },
  {
    time: "03:40 – 04:00",
    session: "Panel 1: Jobs & Career Growth",
    speaker: "Anurag Sir & Om Prakash",
    icon: Users,
    color: "blue"
  },
  {
    time: "04:00 – 04:20",
    session: "Panel 2: Startup & Funding",
    speaker: "Barkha Ma & Investors",
    icon: Users,
    color: "blue"
  },
  {
    time: "04:30 – 05:30",
    session: "Grand Finale: Hukumat Live Band",
    speaker: "",
    icon: Sparkles,
    color: "green"
  },
  {
    time: "05:30 Onwards",
    session: "Closing Ceremony & Group Photo",
    speaker: "",
    icon: Award,
    color: "purple"
  }
];

export default function Agenda() {
  return (
    <div className="min-h-screen bg-white">
      {/* Background Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#f3f3f3_1.5px,transparent_1px),linear-gradient(to_bottom,#f3f3f3_1.5px,transparent_1px)] bg-[size:5rem_5rem] opacity-30"></div>
      
      {/* Header Section */}
      <div className="relative z-10 pt-24 pb-8">
        {/* Page Title */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-6xl font-product-black text-gray-900 mb-4">
            Agenda
          </h1>
          <p className="text-lg md:text-xl text-gray-600 font-product-semibold max-w-2xl mx-auto px-4">
            DevFest Patna 2025 Schedule - Join us for an amazing day of learning and networking
          </p>
        </div>

        {/* Date and Venue Info */}
        <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mb-12">
          <div className="flex items-center gap-2 bg-white/80 backdrop-blur-md border-2 border-gray-200 rounded-full px-4 py-2 shadow-sm">
            <Calendar className="w-5 h-5 text-blue-600" strokeWidth={2.5} />
            <span className="font-product-bold text-gray-800">December 27, 2025</span>
          </div>
          <div className="flex items-center gap-2 bg-white/80 backdrop-blur-md border-2 border-gray-200 rounded-full px-4 py-2 shadow-sm">
            <Clock className="w-5 h-5 text-blue-600" strokeWidth={2.5} />
            <span className="font-product-bold text-gray-800">09:00 AM - 05:30 PM</span>
          </div>
        </div>
      </div>

      {/* Agenda Content */}
      <div className="max-w-4xl mx-auto px-4 pb-16 sm:px-6 lg:px-8 relative z-10">
        <div className="bg-white rounded-3xl shadow-xl border border-gray-200 overflow-hidden">
          {/* Table Header */}
          <div className="bg-gradient-to-r from-blue-600 to-blue-700 text-white p-6">
            <div className="grid grid-cols-12 gap-4 font-product-bold text-lg">
              <div className="col-span-3 md:col-span-2 hidden sm:block">TIME</div>
              <div className="col-span-12 sm:col-span-9 md:col-span-10">SESSION / SPEAKER</div>
            </div>
          </div>

          {/* Agenda Items */}
          <div className="divide-y divide-gray-200">
            {agendaData.map((item, index) => {
              const Icon = item.icon;
              const colorClasses = {
                yellow: 'bg-yellow-100 text-yellow-700 border-yellow-300',
                blue: 'bg-blue-100 text-blue-700 border-blue-300',
                purple: 'bg-purple-100 text-purple-700 border-purple-300',
                green: 'bg-green-100 text-green-700 border-green-300'
              };
              
              return (
                <div
                  key={index}
                  className={`hover:bg-gray-50 transition-colors duration-200 ${
                    item.isLunch ? 'bg-yellow-50 hover:bg-yellow-100' : ''
                  }`}
                >
                  {/* Mobile Layout */}
                  <div className="sm:hidden p-4">
                    <div className="flex items-start gap-3 mb-2">
                      <div className={`w-8 h-8 rounded-full flex items-center justify-center border flex-shrink-0 ${colorClasses[item.color]}`}>
                        <Icon className="w-4 h-4" strokeWidth={2} />
                      </div>
                      <div>
                        <div className={`font-product-semibold text-sm ${
                          item.isLunch ? 'text-yellow-700 font-bold' : 'text-gray-700'
                        }`}>
                          {item.time}
                        </div>
                      </div>
                    </div>
                    <div className={`font-product-bold text-base ml-11 ${
                      item.isLunch ? 'text-yellow-800 text-lg' : 'text-gray-900'
                    }`}>
                      {item.session}
                    </div>
                    {item.speaker && (
                      <div className="font-product-regular text-gray-600 text-sm ml-11 mt-1">
                        {item.speaker}
                      </div>
                    )}
                  </div>

                  {/* Desktop Layout */}
                  <div className="hidden sm:grid grid-cols-12 gap-4 p-4 md:p-6">
                    {/* Time Column */}
                    <div className="col-span-3 md:col-span-2">
                      <div className="flex items-center gap-2">
                        <div className={`w-8 h-8 rounded-full flex items-center justify-center border ${colorClasses[item.color]}`}>
                          <Icon className="w-4 h-4" strokeWidth={2} />
                        </div>
                        <span className={`font-product-semibold text-sm md:text-base ${
                          item.isLunch ? 'text-yellow-700 font-bold' : 'text-gray-700'
                        }`}>
                          {item.time}
                        </span>
                      </div>
                    </div>

                    {/* Session/Speaker Column */}
                    <div className="col-span-9 md:col-span-10">
                      <div className={`font-product-bold text-lg ${
                        item.isLunch ? 'text-yellow-800 text-xl' : 'text-gray-900'
                      }`}>
                        {item.session}
                      </div>
                      {item.speaker && (
                        <div className="font-product-regular text-gray-600 mt-1">
                          {item.speaker}
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Additional Information */}
        <div className="mt-12 grid md:grid-cols-2 gap-6">
          <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-200 hover:shadow-xl transition-shadow duration-300">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                <Coffee className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-product-bold text-gray-900">Refreshments</h3>
            </div>
            <p className="text-gray-600 font-product-regular">
              Coffee, tea, and light snacks will be served during breaks. Lunch is included for all attendees.
            </p>
          </div>

          <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-200 hover:shadow-xl transition-shadow duration-300">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                <Users className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-product-bold text-gray-900">Networking</h3>
            </div>
            <p className="text-gray-600 font-product-regular">
              Multiple networking opportunities throughout the day to connect with speakers and fellow attendees.
            </p>
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-12 text-center">
          <Link to="/#tickets">
            <button className="bg-[#FBBC04] text-black font-product-bold text-lg px-8 py-3 rounded-full border-2 border-black shadow-[0px_3px_0px] hover:translate-y-1 hover:shadow-none transition-all select-none cursor-pointer">
              Register Now
            </button>
          </Link>
          <p className="mt-4 text-gray-600 font-product-regular">
            Don't miss out on this amazing event!
          </p>
        </div>
      </div>
    </div>
  );
}
