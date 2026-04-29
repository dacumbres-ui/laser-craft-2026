"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

const faqs = [
  {
    question: "¿Es seguro usar una grabadora láser en casa?",
    answer: "Sí, es completamente seguro si tomas las precauciones adecuadas. Siempre debes usar las gafas de protección incluidas (que bloqueen la longitud de onda del láser), nunca dejar la máquina desatendida mientras trabaja y asegurarte de tener buena ventilación o usar un extractor de humo, ya que algunos materiales generan gases al quemarse."
  },
  {
    question: "¿Qué diferencia hay entre un láser de 5W, 10W y 20W?",
    answer: "La potencia determina la velocidad y la capacidad de corte: \n- **5W a 7W:** Perfectas para grabados muy detallados y corte de maderas finas (hasta 5mm) o acrílicos oscuros.\n- **10W:** El punto dulce. Cortan maderas de hasta 10mm de una pasada, graban mucho más rápido y pueden marcar metales como el acero inoxidable.\n- **20W a 30W:** Bestias de corte. Cortan maderas gruesas (15mm+), acrílico negro e incluso graban a color en metales. Son ideales para producción continua."
  },
  {
    question: "¿Qué materiales puedo grabar o cortar?",
    answer: "Puedes grabar: madera, cuero, cartón, papel, plástico opaco, bambú, pizarra, piedra y metales revestidos o acero inoxidable (con máquinas >10W).\nPuedes cortar: madera contrachapada, balsa, cuero, acrílico oscuro y tela.\n¡NUNCA debes grabar PVC, vinilo o plásticos que contengan cloro, ya que emiten gases tóxicos y corrosivos!"
  },
  {
    question: "¿Necesito saber programación o diseño avanzado?",
    answer: "No, en absoluto. El software más utilizado (como LaserGRBL, que es gratuito, o LightBurn, que es de pago pero excelente) es muy fácil de usar. Solo tienes que importar una imagen (JPG, PNG, SVG), ajustar el tamaño, elegir la potencia y la velocidad, y darle a iniciar."
  },
  {
    question: "¿Cuánto duran este tipo de máquinas?",
    answer: "Los módulos de láser de diodo modernos están diseñados para durar entre 10,000 y 20,000 horas de uso continuo. Si la mantienes limpia, especialmente la lente del láser, tendrás máquina para muchísimos años."
  }
];

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleOpen = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-24 px-4 md:px-8 max-w-4xl mx-auto bg-black">
      <div className="text-center mb-16">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-5xl font-bold text-white mb-6"
        >
          Preguntas Frecuentes
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-zinc-400 text-lg"
        >
          Todo lo que necesitas saber antes de comprar tu primera grabadora láser.
        </motion.p>
      </div>

      <div className="space-y-4">
        {faqs.map((faq, index) => {
          const isOpen = openIndex === index;

          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={cn(
                "border rounded-2xl overflow-hidden transition-colors duration-300",
                isOpen ? "bg-white/5 border-orange-500/50" : "bg-transparent border-white/10 hover:border-white/20"
              )}
            >
              <button
                onClick={() => toggleOpen(index)}
                className="flex items-center justify-between w-full p-6 text-left focus:outline-none"
              >
                <span className="text-lg font-semibold text-white pr-8">
                  {faq.question}
                </span>
                <motion.div
                  animate={{ rotate: isOpen ? 180 : 0 }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                  className={cn(
                    "flex-shrink-0 w-8 h-8 flex items-center justify-center rounded-full border transition-colors",
                    isOpen ? "border-orange-500 text-orange-500 bg-orange-500/10" : "border-white/20 text-white/50"
                  )}
                >
                  <ChevronDown className="w-5 h-5" />
                </motion.div>
              </button>
              
              <AnimatePresence initial={false}>
                {isOpen && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                  >
                    <div className="p-6 pt-0 text-zinc-400 whitespace-pre-wrap leading-relaxed">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
