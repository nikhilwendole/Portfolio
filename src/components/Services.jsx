// ServicesPage.jsx — Ultra Premium Services Page
// React + Tailwind + Framer Motion (Vite compatible)

import React from "react";
import { motion } from "framer-motion";
import { Code, Sparkles, Bot, Layers, Globe, Wrench } from "lucide-react";

export default function ServicesPage() {
  const services = [
    {
      title: "Full-Stack Web Development",
      icon: <Code size={36} className="text-blue-400" />,
      desc: "High-performance MERN applications with modern UI, secure APIs, and scalable architecture.",
      features: ["MERN Stack", "Next.js (optional)", "API Development", "Custom Dashboard"],
    },
    {
      title: "AI / ML Integrations",
      icon: <Bot size={36} className="text-purple-400" />,
      desc: "Smart, data-driven features integrated directly into your applications.",
      features: ["ML Predictions", "AI Chatbots", "Automation", "Analytics Tools"],
    },
    {
      title: "Premium UI/UX Design",
      icon: <Sparkles size={36} className="text-pink-400" />,
      desc: "Beautiful, animated, and highly polished user interfaces.",
      features: ["Animations", "Responsive UI", "Brand Identity", "Component Libraries"],
    },
    {
      title: "API + Backend Services",
      icon: <Layers size={36} className="text-green-400" />,
      desc: "Robust backend infrastructure for startups and businesses.",
      features: ["Express.js", "MongoDB", "Cloud Functions", "Optimized Endpoints"],
    },
    {
      title: "Landing Page & Portfolio Design",
      icon: <Globe size={36} className="text-yellow-400" />,
      desc: "Ultra-modern landing pages that convert and perform.",
      features: ["SEO", "Fast Loading", "Animations", "Branding"],
    },
    {
      title: "Maintenance & Optimization",
      icon: <Wrench size={36} className="text-cyan-400" />,
      desc: "Performance upgrades, code improvement, and ongoing support.",
      features: ["Bug Fixing", "Refactoring", "Speed Optimization", "Security Updates"],
    },
  ];

  return (
    <div  id="services" className="min-h-screen  bg-gradient-to-b from-[#F5F7FF] via-[#fffbee] to-[#E6EFFF] text-gray-800 pt-28 pb-20 px-6">
      {/* Heading */}
      <div className="text-center max-w-3xl mx-auto">
        <h1 className="text-4xl md:text-6xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">
          My Services
        </h1>
        <p className="mt-4 text-gray-900 text-lg">
          I build high-quality, premium digital products — combining modern design,
          smooth animations, and powerful backend engineering.
        </p>
      </div>

      {/* Service Cards */}
      <div className="max-w-7xl mx-auto mt-16 grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {services.map((service, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            className="p-8 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-xl shadow-[0_0_40px_rgba(0,0,0,0.35)] hover:shadow-[0_0_60px_rgba(0,0,0,0.55)] hover:-translate-y-2 transition-all duration-300 relative overflow-hidden"
          >
            <div className="mb-4">{service.icon}</div>
            
            <h3 className="text-2xl font-semibold text-black">{service.title}</h3>
            <p className="mt-2 text-gray-900 text-sm leading-relaxed">{service.desc}</p>

            {/* Features */}
            <ul className="mt-5 space-y-2 text-gray-900 text-sm">
              {service.features.map((f, i) => (
                <li key={i} className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-blue-400 rounded-full" /> {f}
                </li>
              ))}
            </ul>

            {/* Hover glow effect */}
            <div className="absolute inset-0 opacity-0 hover:opacity-10 bg-gradient-to-tr from-blue-500 via-purple-500 to-pink-500 transition-all duration-500" />
          </motion.div>
        ))}
      </div>

      {/* CTA Section */}
      <div className="text-center mt-20">
        <h2 className="text-3xl font-bold">Want to work together?</h2>
        <p className="text-gray-900 mt-2">
          I take freelance projects, collaborations, and full-time roles.
        </p>

        <a
          href="#contact"
          className="inline-block mt-6 px-8 py-4 rounded-2xl bg-gradient-to-r from-indigo-600 to-blue-500 font-semibold shadow-lg hover:scale-105 transition"
        >
          Contact Me
        </a>
      </div>
    </div>
  );
}