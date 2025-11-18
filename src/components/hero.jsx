import { motion } from "framer-motion";
import resume from "../assets/Nikhil_Resume.pdf";
import photos from "../assets/update.png";

export default function HeroSection() {
  return (
    <section className="min-h-screen w-full bg-gradient-to-b from-[#ecf3ff] via-[#fff8e8] to-[#e8eeff] text-gray-900 flex items-center justify-center px-6 pt-28 relative overflow-hidden">

      {/* Animated Background */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.6 }}
        transition={{ duration: 1.5 }}
        className="absolute inset-0 z-0"
      >
        <div className="absolute top-10 left-20 w-40 h-40 bg-blue-300/30 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-10 right-20 w-56 h-56 bg-purple-300/30 rounded-full blur-3xl animate-ping" />
      </motion.div>

      <div className="relative z-10 max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">

        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-8"
        >
          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">
            Hey, I'm
            <span className="text-blue-500"> Nikhil</span>
          </h1>

          <p className="text-gray-800 text-lg md:text-xl leading-relaxed max-w-xl">
            I’m a passionate
            <span className="text-blue-400 font-semibold"> Full‑Stack Developer</span>
            who loves creating modern, fast, and visually stunning digital experiences.
            From crafting elegant UI to building powerful backend systems — I turn ideas into reality.
          </p>

          {/* Key Highlights */}
          <div className="grid grid-cols-2 gap-4 pt-2">
            <div className="p-4 bg-white/30 backdrop-blur-md rounded-xl shadow-lg border border-white/20">
              <h3 className="text-xl font-bold text-blue-600">4+ Projects</h3>
              <p className="text-sm text-gray-700">Full-stack web apps</p>
            </div>
            <div className="p-4 bg-white/30 backdrop-blur-md rounded-xl shadow-lg border border-white/20">
              <h3 className="text-xl font-bold text-purple-600">UI/UX</h3>
              <p className="text-sm text-gray-700">Clean modern design</p>
            </div>
            <div className="p-4 bg-white/30 backdrop-blur-md rounded-xl shadow-lg border border-white/20">
              <h3 className="text-xl font-bold text-green-600">MERN</h3>
              <p className="text-sm text-gray-700">Real-world applications</p>
            </div>
            <div className="p-4 bg-white/30 backdrop-blur-md rounded-xl shadow-lg border border-white/20">
              <h3 className="text-xl font-bold text-orange-600">Problem Solver</h3>
              <p className="text-sm text-gray-700">DSA + Logical thinking</p>
            </div>
          </div>

          {/* Buttons */}
          <div className="flex gap-4 pt-6">
            <a href="#projects">
              <button className="px-6 py-3 bg-blue-500 hover:bg-blue-600 rounded-xl shadow-lg shadow-blue-500/30 font-semibold transition">
                View Projects
              </button>
            </a>
            <a href="#contact">
              <button className="px-6 py-3 border border-gray-400 hover:border-blue-400 rounded-xl font-semibold transition">
                Contact Me
              </button>
            </a>
            <a href={resume} download>
              <button className="px-6 py-3 border border-gray-500 hover:border-blue-500 rounded-xl font-semibold transition">
                Download Resume
              </button>
            </a>
          </div>
        </motion.div>

        {/* Right Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.2 }}
          className="flex justify-center"
        >
          <div className="relative w-72 h-72 md:w-96 md:h-96 rounded-3xl overflow-hidden shadow-[0_0_25px_rgba(0,0,0,0.2)] border border-white/20 backdrop-blur-xl">
            <img
              src={photos}
              alt="profile"
              className="w-full h-full object-cover scale-110"
            />

            {/* Floating Glow */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
