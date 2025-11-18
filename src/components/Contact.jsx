// import { motion } from "framer-motion";
// import { Mail, Phone, MapPin, Send } from "lucide-react";

// export default function Contact() {
//   return (
//     <section className="min-h-screen w-full bg-gradient-to-br from-black via-gray-900 to-gray-800 text-white px-6 pt-28 pb-20">
//       <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-14 items-center">

//         {/* Left Section */}
//         <motion.div
//           initial={{ opacity: 0, y: 40 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8 }}
//           className="space-y-6"
//         >
//           <h2 className="text-4xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400">
//             Get In Touch
//           </h2>

//           <p className="text-gray-300 text-lg leading-relaxed max-w-lg">
//             Have a project in mind? Want a modern website, dynamic web app, or premium UI design? 
//             Let's connect and bring your ideas to life.
//           </p>

//           {/* Contact Info */}
//           <div className="space-y-4 mt-6">
//             <div className="flex items-center gap-4 text-gray-300">
//               <Mail className="text-blue-400" />
//               yourmail@gmail.com
//             </div>
//             <div className="flex items-center gap-4 text-gray-300">
//               <Phone className="text-blue-400" />
//               +91 98765 43210
//             </div>
//             <div className="flex items-center gap-4 text-gray-300">
//               <MapPin className="text-blue-400" />
//               Mumbai, India
//             </div>
//           </div>
//         </motion.div>

//         {/* Contact Form */}
//         <motion.form
//           initial={{ opacity: 0, y: 40 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.9 }}
//           className="p-[2px] rounded-2xl bg-gradient-to-br from-blue-500/40 via-purple-400/40 to-pink-400/40 backdrop-blur-xl shadow-xl"
//         >
//           <div className="bg-black/70 p-8 rounded-2xl space-y-6">
//             <div>
//               <label className="text-gray-300">Your Name</label>
//               <input
//                 type="text"
//                 placeholder="Enter your name"
//                 className="w-full mt-2 p-3 bg-black/50 border border-white/10 rounded-xl text-white outline-none focus:border-blue-400"
//               />
//             </div>

//             <div>
//               <label className="text-gray-300">Email</label>
//               <input
//                 type="email"
//                 placeholder="Enter your email"
//                 className="w-full mt-2 p-3 bg-black/50 border border-white/10 rounded-xl text-white outline-none focus:border-blue-400"
//               />
//             </div>

//             <div>
//               <label className="text-gray-300">Message</label>
//               <textarea
//                 rows="5"
//                 placeholder="Write your message..."
//                 className="w-full mt-2 p-3 bg-black/50 border border-white/10 rounded-xl text-white outline-none focus:border-blue-400"
//               ></textarea>
//             </div>

//             <button
//               type="submit"
              
//               className="w-full py-3 flex items-center justify-center gap-2 bg-gradient-to-r from-blue-500 to-purple-500 hover:opacity-90 rounded-xl font-semibold shadow-lg"
//             >
//               <Send size={18} /> Send Message
//             </button>
//           </div>
//         </motion.form>
//       </div>
//     </section>
//   );
// }




import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="min-h-screen w-full bg-gradient-to-br from-black via-gray-900 to-gray-800 text-white px-6 pt-28 pb-20">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-14 items-center">

        {/* Left Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-6"
        >
          <h2 className="text-4xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400">
            Get In Touch
          </h2>

          <p className="text-gray-300 text-lg leading-relaxed max-w-lg">
            Have a project in mind? Want a modern website, dynamic web app, or premium UI design? 
            Let's connect and bring your ideas to life.
          </p>

          {/* Contact Info */}
          <div className="space-y-4 mt-6">
            <div className="flex items-center gap-4 text-gray-300">
              <Mail className="text-blue-400" />
              nikhilwendole312004@gmail.com
            </div>
            <div className="flex items-center gap-4 text-gray-300">
              <Phone className="text-blue-400" />
              +91 8669779438
            </div>
            <div className="flex items-center gap-4 text-gray-300">
              <MapPin className="text-blue-400" />
              Pune, India
            </div>
          </div>
        </motion.div>

        {/* Contact Form */}
        <motion.form
          action="https://formspree.io/f/xkgkaeol"   // <-- Add your Formspree ID
          method="POST"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
          className="p-[2px] rounded-2xl bg-gradient-to-br from-blue-500/40 via-purple-400/40 to-pink-400/40 backdrop-blur-xl shadow-xl"
        >
          <div className="bg-black/70 p-8 rounded-2xl space-y-6">

            <div>
              <label className="text-gray-300">Your Name</label>
              <input
                type="text"
                name="name"
                required
                placeholder="Enter your name"
                className="w-full mt-2 p-3 bg-black/50 border border-white/10 rounded-xl text-white outline-none focus:border-blue-400"
              />
            </div>

            <div>
              <label className="text-gray-300">Email</label>
              <input
                type="email"
                name="email"
                required
                placeholder="Enter your email"
                className="w-full mt-2 p-3 bg-black/50 border border-white/10 rounded-xl text-white outline-none focus:border-blue-400"
              />
            </div>

            <div>
              <label className="text-gray-300">Message</label>
              <textarea
                name="message"
                rows="5"
                required
                placeholder="Write your message..."
                className="w-full mt-2 p-3 bg-black/50 border border-white/10 rounded-xl text-white outline-none focus:border-blue-400"
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full py-3 flex items-center justify-center gap-2 bg-gradient-to-r from-blue-500 to-purple-500 hover:opacity-90 rounded-xl font-semibold shadow-lg"
            >
              <Send size={18} /> Send Message
            </button>
          </div>
        </motion.form>
      </div>
    </section>
  );
}
