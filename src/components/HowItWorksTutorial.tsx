"use client";

import { motion } from "framer-motion";
import { Wrench, Laptop, Focus, Maximize, Play, ShieldAlert } from "lucide-react";

const steps = [
  {
    icon: <Wrench className="w-8 h-8 text-orange-500" />,
    title: "1. Ensamblaje y Configuración",
    description: "Monta la estructura siguiendo el manual. Conecta los cables, asegúrate de que las correas estén tensas y conecta la máquina a tu ordenador por USB o Wi-Fi.",
  },
  {
    icon: <Laptop className="w-8 h-8 text-orange-500" />,
    title: "2. Preparación del Diseño",
    description: "Utiliza software como LightBurn o LaserGRBL. Importa tu imagen o vector, ajusta el tamaño y configura los parámetros de potencia y velocidad según tu material.",
  },
  {
    icon: <Focus className="w-8 h-8 text-orange-500" />,
    title: "3. Colocación y Enfoque",
    description: "Pon el material bajo el láser. Usa el cilindro o bloque de enfoque incluido para ajustar la altura exacta del módulo láser sobre el material.",
  },
  {
    icon: <Maximize className="w-8 h-8 text-orange-500" />,
    title: "4. Encuadre (Framing)",
    description: "Inicia la función de encuadre. El láser se moverá a baja potencia trazando el contorno del diseño para asegurarte de que está bien centrado en el material.",
  },
  {
    icon: <Play className="w-8 h-8 text-orange-500" />,
    title: "5. Grabado y Seguridad",
    description: "Ponte las gafas de protección, enciende el extractor de humo si lo tienes, y dale a iniciar. Mantente cerca supervisando el proceso hasta que termine.",
  }
];

export function HowItWorksTutorial() {
  return (
    <section id="tutorial" className="py-24 px-4 md:px-8 max-w-7xl mx-auto z-10 relative">
      <div className="text-center mb-16">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-5xl font-bold text-white mb-6"
        >
          ¿Cómo funciona una <span className="text-orange-500">Grabadora Láser</span>?
        </motion.h2>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-zinc-400 max-w-2xl mx-auto text-lg"
        >
          Usar una grabadora láser de diodo es más sencillo de lo que parece. Sigue estos 5 pasos básicos para empezar a crear tus propios proyectos desde el primer día.
        </motion.p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 relative">
        {steps.map((step, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className={`bg-zinc-900/50 backdrop-blur-md border border-zinc-800/50 p-8 rounded-3xl relative group hover:border-orange-500/50 transition-colors ${
              index === 3 ? "lg:col-start-1 lg:ml-[50%]" : index === 4 ? "lg:col-start-2 lg:ml-[50%]" : ""
            }`}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-orange-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-3xl" />
            <div className="bg-zinc-950 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 border border-zinc-800 group-hover:scale-110 transition-transform">
              {step.icon}
            </div>
            <h3 className="text-xl font-bold text-white mb-4">{step.title}</h3>
            <p className="text-zinc-400 leading-relaxed">
              {step.description}
            </p>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.5 }}
        className="mt-16 bg-orange-950/20 border border-orange-500/20 rounded-3xl p-8 max-w-3xl mx-auto flex flex-col md:flex-row items-center gap-6"
      >
        <div className="bg-orange-500/20 p-4 rounded-full">
          <ShieldAlert className="w-10 h-10 text-orange-500" />
        </div>
        <div>
          <h4 className="text-lg font-bold text-white mb-2">Regla de Oro: La Seguridad es lo Primero</h4>
          <p className="text-zinc-400">
            Nunca mires directamente al láser sin las gafas de protección adecuadas, ni dejes la máquina funcionando sin supervisión. Un pequeño error puede causar daños irreparables o un incendio.
          </p>
        </div>
      </motion.div>
    </section>
  );
}
