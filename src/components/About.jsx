import { motion } from "framer-motion";
import update2 from "../assets/update2.png"

export default function About() {
  return (
    <section
      id="about"
      className="min-h-screen bg-gradient-to-b from-[#F5F7FF] via-[#fffbee] to-[#E6EFFF] text-gray-800 px-6 py-24 flex items-center"
    >
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        {/* Image Side */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex justify-center"
        >
          <div className="relative w-62 h-62 md:w-86 md:h-86 rounded-3xl overflow-hidden shadow-[0_0_25px_rgba(0,0,0,0.2)] border border-white/20 backdrop-blur-xl">
            <img
              src={update2}
              alt="profile"
              className="w-full h-full object-cover"
            />
          </div>
        </motion.div>

        {/* Text Side */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="space-y-6"
        >
          <h2 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-linear-to-r from-blue-400 to-purple-400">
            About Me
          </h2>

          <p className="text-gray-900 text-lg leading-relaxed">
            I'm a passionate <span className="text-blue-800 font-semibold">Full-Stack Developer</span> 
            who loves building modern, responsive, and visually stunning web applications.
            My goal is to turn ideas into reality using creativity and clean code.
          </p>

          <p className="text-gray-900 text-lg leading-relaxed">
            I have experience in MERN stack development, UI/UX design, and building 
            scalable apps. I enjoy exploring AI/ML and integrating innovative features 
            into projects.
          </p>

          <div className="grid grid-cols-2 gap-4 pt-2">
            {["Web Development", "UI/UX", "MERN Stack", "Machine Learning"].map((item) => (
              <div
                key={item}
                className="p-4 bg-gray/5 rounded-xl border border-gray/10 backdrop-blur-xl shadow-[0_0_15px_rgba(255,255,255,0.1)] text-center text-gray-900 font-medium hover:scale-105 transition"
              >
                {item}
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
