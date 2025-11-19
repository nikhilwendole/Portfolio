import { motion } from "framer-motion";

export default function Projects() {
  const projectList = [
    {
      title: "Portfolio Website",
      desc: "A premium glossy portfolio built with React, Vite, and Tailwind.",
      img: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800",
      link: "https://portfolio-81sq.vercel.app/#contact", // OPEN WHEN CLICKED
    },
    {
      title: "E-Commerce App",
      desc: "A MERN stack e-commerce store with cart, auth, and admin panel.",
      img: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800",
      link: "https://computer-town-final-9zem.vercel.app/",
    },
    {
      title: "Hospital Management System",
      desc: "React,Node,Express and MongoDB .",
      img: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=800",
      link: "",
    },
  ];

  return (
    <section id="projects" className="min-h-screen bg-gradient-to-b from-[#F5F7FF] via-[#fffbee] to-[#E6EFFF] text-gray-800 px-6 pt-28 pb-16">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-6xl font-bold mb-12 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400">
          My Projects
        </h2>

        <div className="grid md:grid-cols-3 gap-10">
          {projectList.map((p, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 200 }}
              onClick={() => window.open(p.link, "_blank")} // 🔥 OPEN PROJECT
              className="cursor-pointer bg-gray/50 hover:bg-gray/90 backdrop-blur-lg rounded-2xl overflow-hidden shadow-xl border border-white/70 hover:shadow-[0_0_25px_rgba(255,255,255,0.3)] transition"
            >
              <img src={p.img} className="w-full h-48 object-cover" />

              <div className="p-6 space-y-2">
                <h3 className="text-xl font-bold text-blue-300">{p.title}</h3>
                <p className="text-gray-900">{p.desc}</p>

                <button className="mt-3px-4 py-2 rounded-lg bg-gradient-to-r from-blue-500 to-purple-500 font-semibold text-white hover:opacity-90">
                  View Project →
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
