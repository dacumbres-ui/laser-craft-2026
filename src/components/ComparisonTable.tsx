"use client";

import { motion } from "framer-motion";
import { Check, X } from "lucide-react";
import { products } from "@/data/products";

export function ComparisonTable() {
  const scrollToProduct = (index: number) => {
    const el = document.getElementById(`product-${index}`);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "center" });
      
      // Añadimos un pequeño efecto de brillo al hacer scroll hacia él
      const card = el.firstElementChild as HTMLElement;
      if (card) {
        card.style.transition = "box-shadow 0.3s";
        card.style.boxShadow = "0 0 30px rgba(234, 88, 12, 0.5)";
        setTimeout(() => {
          card.style.boxShadow = "none";
        }, 1500);
      }
    }
  };

  return (
    <section id="comparativa" className="py-24 px-4 md:px-8 max-w-7xl mx-auto relative z-10">
      <div className="text-center mb-16">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-5xl font-bold text-white mb-6"
        >
          Tabla Comparativa
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-zinc-400 max-w-2xl mx-auto text-lg"
        >
          Compara fácilmente las características principales de las 10 mejores grabadoras para elegir la que mejor se adapte a tu proyecto y presupuesto. Haz clic en cualquiera para ver sus detalles.
        </motion.p>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2 }}
        className="w-full overflow-x-auto rounded-3xl border border-white/10 bg-zinc-900/50 backdrop-blur-md"
      >
        <table className="w-full text-left border-collapse min-w-[800px]">
          <thead>
            <tr className="bg-white/5 border-b border-white/10 text-zinc-300">
              <th className="p-4 font-semibold whitespace-nowrap">Modelo</th>
              <th className="p-4 font-semibold whitespace-nowrap">Precio</th>
              <th className="p-4 font-semibold whitespace-nowrap">Potencia Láser</th>
              <th className="p-4 font-semibold whitespace-nowrap">Área de Trabajo</th>
              <th className="p-4 font-semibold whitespace-nowrap">Materiales Destacados</th>
              <th className="p-4 font-semibold whitespace-nowrap">Asistencia de Aire</th>
              <th className="p-4 font-semibold whitespace-nowrap">Ideal para...</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-white/5 text-sm">
            {products.map((item, i) => (
              <motion.tr 
                key={i} 
                className="hover:bg-white/10 transition-colors cursor-pointer group"
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                onClick={() => scrollToProduct(i)}
                title="Haz clic para ver detalles"
              >
                <td className="p-4 font-medium text-white whitespace-nowrap group-hover:text-orange-400 transition-colors">{item.title.split("Grabadora")[0].split("láser")[0].trim()}</td>
                <td className="p-4 text-orange-400 font-semibold">{item.price}</td>
                <td className="p-4 text-zinc-300">{item.power}</td>
                <td className="p-4 text-zinc-300">{item.area}</td>
                <td className="p-4 text-zinc-400 max-w-xs">{item.materials}</td>
                <td className="p-4 text-zinc-300">
                  {item.airAssist ? (
                    <span className="flex items-center gap-1 text-green-400">
                      <Check className="w-4 h-4" /> Sí
                    </span>
                  ) : (
                    <span className="flex items-center gap-1 text-red-400/80">
                      <X className="w-4 h-4" /> No
                    </span>
                  )}
                </td>
                <td className="p-4 text-zinc-300">{item.recommended}</td>
              </motion.tr>
            ))}
          </tbody>
        </table>
      </motion.div>
    </section>
  );
}
