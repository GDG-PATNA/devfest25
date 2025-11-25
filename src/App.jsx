import './App.css'
import { motion } from 'framer-motion'
function App() {

  return (
    <>
      <div className="min-h-screen flex items-center justify-center bg-[#05060a] text-white  relative overflow-hidden">

        {/* Animated background blobs */}
        <motion.div
          initial={{ scale: 0.9, opacity: 0.15 }}
          animate={{ scale: 1.4, rotate: 20, opacity: 0.08 }}
          transition={{ duration: 12, repeat: Infinity, repeatType: "mirror" }}
          className="absolute -left-24 -top-36 w-[30rem] h-[30rem] rounded-full bg-gradient-to-br from-pink-500 via-purple-600 to-indigo-500 blur-3xl"
        />
        <motion.div
          initial={{ scale: 1.2, opacity: 0.15 }}
          animate={{ scale: 0.9, rotate: -25, opacity: 0.08 }}
          transition={{ duration: 16, repeat: Infinity, repeatType: "mirror" }}
          className="absolute right-0 bottom-0 w-[45rem] h-[45rem] rounded-full bg-gradient-to-br from-cyan-400 via-green-400 to-blue-500 blur-3xl"
        />

        {/* Main Content Card */}
        <div className="relative z-10 max-w-3xl w-full text-center backdrop-blur-xl bg-white/5 border border-white/10 p-10 rounded-2xl shadow-2xl">

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-6xl font-extrabold leading-tight"
          >
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-teal-300 to-indigo-300">
              Welcome Developer
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="mt-4 text-slate-300 text-lg max-w-2xl mx-auto"
          >
            You’re building <span className="font-semibold">DevFest GDG Patna</span>.
            This is your temporary launch screen — futuristic, simple and fast.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2 }}
            className="mt-6"
          >
            <span className="px-4 py-2 rounded-full bg-white/10 border border-white/10 text-sm font-semibold">
              devfest.gdgpatna.com
            </span>
          </motion.div>

          {/* CTA Buttons */}
          <div className="mt-8 flex justify-center gap-4 flex-wrap">
            <a
              href="https://gdgpatna.com"
              target="_blank"
              rel="noreferrer"
              className="px-6 py-3 rounded-xl bg-gradient-to-r from-indigo-600 to-purple-600 font-semibold shadow-lg hover:scale-105 transition-transform"
            >
              Visit GDG Patna
            </a>

            <button
              className="px-6 py-3 rounded-xl border border-white/15 bg-white/5 hover:bg-white/10 font-semibold transition"
              onClick={() => alert("More content coming soon!")}
            >
              More Info
            </button>
          </div>

          <p className="mt-8 text-slate-400 text-sm">
            🚀 Temporary Preview • Tailwind + Framer Motion • Ultra-Modern UI
          </p>
        </div>
      </div>
    </>
  )
}

export default App