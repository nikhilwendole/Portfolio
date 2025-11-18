import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full backdrop-blur-xl bg-white/60 border-b border-black/90 shadow-[0_8px_32px_rgba(255,255,255,0.1)] z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="text-2xl font-bold text-black drop-shadow-md tracking-wide">
          NIKHIL
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-10 text-black text-lg font-medium">
         <a href="/"> <li className="hover:text-gray-900 transition">Home</li> </a> 
       <a href="#about "> <li className="hover:text-gray-900 transition">About us</li></a>
         <a href="#projects"> <li className="hover:text-gray-900 transition">Projects</li></a>
         <a href="#services"> <li className="hover:text-gray-900 transition">Services</li></a>
         <a href="#pricing"> <li className="hover:text-gray-900 transition">Pricing</li></a>
         <a href="#contact"> <li className="hover:text-gray-900 transition">Contact</li></a>
        </ul>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-gray-900"
          onClick={() => setOpen(!open)}
        >
          {open ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Dropdown */}
      {open && (
        <div className="md:hidden bg-white/10 backdrop-blur-xl border-t border-white/20 text-gray-600 text-lg font-medium flex flex-col p-6 space-y-4 shadow-[0_8px_32px_rgba(255,255,255,0.15)]">
          <a href="/"> <li className="hover:text-gray-900 transition">Home</li> </a> 
       <a href="#about "> <li className="hover:text-gray-900 transition">About us</li></a>
         <a href="#projects"> <li className="hover:text-gray-900 transition">Projects</li></a>
         <a href="#services"> <li className="hover:text-gray-900 transition">Services</li></a>
         <a href="#pricing"> <li className="hover:text-gray-900 transition">Pricing</li></a>
         <a href="#contact"> <li className="hover:text-gray-900 transition">Contact</li></a>
        </div>
      )}
    </nav>
  );
}
