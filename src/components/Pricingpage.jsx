import { motion } from "framer-motion";

export default function PricingPage() {
  const plans = [
    {
      title: "Basic Static",
      price: "₹3,000",
      features: ["1-2 Pages", "Modern UI", "Responsive Design", "Basic SEO", "Hosting Setup"],
      gradient: "from-blue-500/40 to-cyan-400/40",
    },
    {
      title: "Standard Static",
      price: "₹5,000",
      features: [
        "3-5 Pages",
        "Premium UI",
        "Contact Form",
        "Animations",
        "Free Domain (1 Year)",
      ],
      gradient: "from-purple-500/40 to-pink-400/40",
    },
    {
      title: "Premium Static",
      price: "₹7,000",
      features: [
        "5-8 Pages",
        "Ultra Modern UI",
        "Gallery + Testimonials",
        "Faster Load",
        "Domain + Hosting Setup",
      ],
      gradient: "from-amber-500/40 to-red-400/40",
    },
    {
      title: "Basic Dynamic",
      price: "₹10,000",
      features: [
        "Admin Panel",
        "Blog / Product CMS",
        "Responsive",
        "Database Setup",
        "Free Domain",
      ],
      gradient: "from-green-500/40 to-emerald-400/40",
    },
    {
      title: "Standard Dynamic",
      price: "₹15,000",
      features: [
        "Full Admin Dashboard",
        "Authentication",
        "Real-time Updates",
        "Modern UI",
        "1 Month Support",
      ],
      gradient: "from-indigo-500/40 to-sky-400/40",
    },
    {
      title: "Premium Dynamic",
      price: "₹20,000 - ₹30,000",
      features: [
        "CRM-Level Dashboard",
        "Payment Gateway",
        "Email Notifications",
        "API Integrations",
        "Domain + Hosting + SSL",
      ],
      gradient: "from-rose-500/40 to-orange-400/40",
    },
  ];

  return (
    <section id="pricing" className="min-h-screen w-full  bg-gradient-to-b from-[#F5F7FF] via-[#fffbee] to-[#E6EFFF] text-gray-800 px-6 pt-28 pb-20">
      <div className="max-w-7xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400"
        >
          Pricing Plans
        </motion.h2>

        <p className="text-gray-900 max-w-2xl mx-auto mt-4 text-lg">
          Choose the plan that fits your client's needs — Static, Dynamic & Domain Included.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 mt-16">
          {plans.map((plan, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              whileHover={{ scale: 1.05 }}
              className={`p-[2px] rounded-2xl bg-gradient-to-br ${plan.gradient} backdrop-blur-xl shadow-xl hover:shadow-[0_0_35px_rgba(255,255,255,0.2)] transition`}
            >
              <div className="bg-black/80 p-8 rounded-2xl h-full flex flex-col justify-between">
                <div>
                  <h3 className="text-3xl font-bold mb-4 text-blue-300">{plan.title}</h3>
                  <p className="text-4xl font-extrabold mb-6 text-white">{plan.price}</p>

                  <ul className="text-gray-500 space-y-2 text-left">
                    {plan.features.map((f, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <span className="text-blue-400 text-lg">✔</span>
                        {f}
                      </li>
                    ))}
                  </ul>
                </div>

                <button className="mt-8 w-full py-3 bg-gradient-to-r from-blue-500 to-purple-500 hover:opacity-90 rounded-xl font-semibold shadow-lg">
                  Choose Plan
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}