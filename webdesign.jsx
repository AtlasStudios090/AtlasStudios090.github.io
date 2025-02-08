import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Menu } from "lucide-react";

export default function LandingPage() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="relative bg-black text-white min-h-screen overflow-hidden font-[\"Helvetica Neue\", sans-serif]">
      {/* Fixed Header */}
      <header className="fixed top-0 left-0 right-0 flex items-center justify-between p-4 bg-black z-10 shadow-md">
        <div className="text-lg font-bold">ATLAS STUDIOS</div>
        <img
          src="/path-to-logo.png"
          alt="Logo"
          className="w-8 h-8"
        />
        <button onClick={() => setMenuOpen(!menuOpen)}>
          <Menu className="text-white w-6 h-6" />
        </button>
        {menuOpen && (
          <div className="absolute right-4 top-12 bg-white text-black rounded-lg shadow-lg p-2">
            <a
              href="/portfolio"
              className="block px-4 py-2 hover:bg-gray-100 rounded"
            >
              Portfolio
            </a>
            <a
              href="/contact"
              className="block px-4 py-2 hover:bg-gray-100 rounded"
            >
              Contact
            </a>
          </div>
        )}
      </header>

      {/* Main Content */}
      <main className="h-full flex flex-col items-center justify-center text-center pt-20">
        <motion.h1
          className="text-4xl md:text-6xl font-bold"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Potencia Tu Presencia Digital con Diseño Web de Alto Impacto.
        </motion.h1>
        <motion.button
          className="mt-6 px-6 py-3 bg-white text-black font-bold rounded-lg shadow hover:bg-gray-200"
          onClick={() => (window.location.href = "/contact-page")}
          whileHover={{ scale: 1.1 }}
        >
          CONTACTA YA
        </motion.button>

        {/* Animated Bars */}
        <motion.div
          className="flex space-x-2 mt-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          {[1, 2, 3, 4].map((_, i) => (
            <motion.div
              key={i}
              className="w-2 bg-white rounded"
              initial={{ height: "10px" }}
              animate={{ height: `${40 + i * 20}px` }}
              transition={{ duration: 1.5, delay: i * 0.3 }}
            ></motion.div>
          ))}
        </motion.div>

        {/* Features Section */}
        <div className="grid grid-cols-2 gap-6 mt-10 w-full max-w-4xl">
          <div className="text-center">
            <p>Diseños modernos y atractivos que capturan la esencia de tu marca.</p>
          </div>
          <div className="text-center">
            <p>Experiencia de usuario optimizada para mayor engagement y conversiones.</p>
          </div>
          <div className="text-center">
            <p>Webs rápidas y responsivas, adaptadas a cualquier dispositivo.</p>
          </div>
          <div className="text-center">
            <p>Estrategias SEO integradas para que tu negocio brille en los buscadores.</p>
          </div>
        </div>

        {/* Footer Text */}
        <motion.p
          className="mt-10 text-sm md:text-lg"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
        >
          Transforma tu visión en una plataforma digital poderosa y efectiva. ¡Haz que tu marca deje huella en internet!
        </motion.p>
      </main>
    </div>
  );
}
