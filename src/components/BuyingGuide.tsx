"use client";

import { motion } from "framer-motion";
import { BookOpen, ShieldCheck, Zap, Heart } from "lucide-react";

export function BuyingGuide() {
  return (
    <section className="py-24 px-6 md:px-10 max-w-7xl mx-auto relative z-10">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Guía de Compra 2026</h2>
        <p className="text-zinc-400 max-w-3xl mx-auto text-lg italic">
          Todo lo que necesitas saber antes de comprar tu primera grabadora láser para casa.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="space-y-6"
        >
          <div className="flex items-center gap-4 text-orange-500">
            <Zap className="w-6 h-6" />
            <h3 className="text-2xl font-bold text-white">¿Qué potencia necesito?</h3>
          </div>
          <p className="text-zinc-400 leading-relaxed">
            Si solo quieres **grabar logotipos** en madera, cuero o papel, con una potencia de **3W a 5W** tendrás suficiente y ahorrarás dinero. Sin embargo, si tu intención es **cortar materiales** como contrachapado (madera DM) o acrílico, te recomendamos saltar directamente a los **7W o 10W**. Recuerda que a mayor potencia, más rápido terminarás tus trabajos.
          </p>
          
          <div className="flex items-center gap-4 text-orange-500 pt-4">
            <ShieldCheck className="w-6 h-6" />
            <h3 className="text-2xl font-bold text-white">Seguridad en el hogar</h3>
          </div>
          <p className="text-zinc-400 leading-relaxed">
            Aunque estas máquinas son baratas (menos de 300€), siguen siendo láseres potentes. Siempre usa las **gafas de protección** incluidas y trabaja en una habitación con buena ventilación o utiliza un sistema de extracción de humos. El humo de la madera quemada puede ser molesto y el de ciertos plásticos, tóxico.
          </p>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="bg-zinc-900/50 border border-white/10 rounded-3xl p-8 backdrop-blur-sm"
        >
          <div className="flex items-center gap-4 text-orange-500 mb-6">
            <BookOpen className="w-6 h-6" />
            <h3 className="text-2xl font-bold text-white">Conceptos Clave</h3>
          </div>
          <ul className="space-y-6">
            <li className="flex gap-4">
              <div className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
              <div>
                <span className="text-white font-semibold">Área de trabajo:</span>
                <p className="text-sm text-zinc-400 mt-1">La mayoría de estas máquinas ofrecen 40x40cm, lo cual es más que suficiente para el 90% de los proyectos caseros.</p>
              </div>
            </li>
            <li className="flex gap-4">
              <div className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
              <div>
                <span className="text-white font-semibold">Software (LaserGRBL vs LightBurn):</span>
                <p className="text-sm text-zinc-400 mt-1">LaserGRBL es gratis y genial para empezar. LightBurn es de pago pero es el estándar de la industria si quieres profesionalizarte.</p>
              </div>
            </li>
            <li className="flex gap-4">
              <div className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
              <div>
                <span className="text-white font-semibold">Materiales:</span>
                <p className="text-sm text-zinc-400 mt-1">Casi todas graban madera, cuero, pizarra y algunos metales lacados. El cristal y el acrílico transparente requieren trucos adicionales (como pintarlos de negro antes).</p>
              </div>
            </li>
          </ul>
        </motion.div>
      </div>

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mt-16 p-8 rounded-3xl bg-gradient-to-r from-orange-500/10 to-transparent border border-orange-500/20 text-center"
      >
        <Heart className="w-8 h-8 text-orange-500 mx-auto mb-4" />
        <h4 className="text-xl font-bold text-white mb-2">Un consejo de amigo</h4>
        <p className="text-zinc-400 max-w-2xl mx-auto">
          No te obsesiones con comprar la más cara al principio. Cualquiera de nuestro **Top 10** es una opción sólida para aprender los fundamentos del grabado láser sin arruinarte. ¡Empieza pequeño y crece con tus proyectos!
        </p>
      </motion.div>
    </section>
  );
}
