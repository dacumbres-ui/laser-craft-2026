"use client";

import { motion } from "framer-motion";

export function BackgroundElements() {
  return (
    <div className="fixed inset-0 z-[0] pointer-events-none overflow-hidden">
      {/* Esfera naranja superior izquierda */}
      <motion.div
        animate={{
          y: [0, -50, 0],
          x: [0, 30, 0],
          rotate: [0, 90, 0],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute top-[10%] left-[5%] w-64 h-64 rounded-full bg-orange-600/10 blur-3xl"
      />

      {/* Hexágono central difuminado */}
      <motion.div
        animate={{
          y: [0, 80, 0],
          x: [0, -40, 0],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute top-[40%] right-[10%] w-96 h-96 bg-red-600/10 blur-[100px] rounded-[40%]"
      />

      {/* Elemento de luz inferior */}
      <motion.div
        animate={{
          y: [0, -30, 0],
          scale: [1, 1.5, 1],
          opacity: [0.3, 0.6, 0.3],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute bottom-[-10%] left-[30%] w-[40vw] h-64 bg-orange-500/10 blur-[120px] rounded-full"
      />

      {/* Anillo giratorio decorativo SVG */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 100, repeat: Infinity, ease: "linear" }}
        className="absolute top-[20%] right-[-5%] opacity-20"
      >
        <svg width="400" height="400" viewBox="0 0 400 400" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="200" cy="200" r="199" stroke="#EA580C" strokeWidth="2" strokeDasharray="10 20"/>
          <circle cx="200" cy="200" r="150" stroke="#EA580C" strokeWidth="1" strokeDasharray="5 10" opacity="0.5"/>
        </svg>
      </motion.div>

      {/* Patrón de puntos flotantes SVG */}
      <motion.div
        animate={{ y: [0, -20, 0], x: [0, -20, 0] }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-[30%] left-[5%] opacity-10"
      >
        <svg width="200" height="200" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
          <pattern id="dots" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
            <circle cx="2" cy="2" r="2" fill="#EA580C" />
          </pattern>
          <rect x="0" y="0" width="200" height="200" fill="url(#dots)" />
        </svg>
      </motion.div>
    </div>
  );
}
