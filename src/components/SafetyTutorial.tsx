"use client";

import { motion } from "framer-motion";
import { AlertTriangle, Eye, Wind, ShieldAlert } from "lucide-react";

export function SafetyTutorial() {
  return (
    <section id="seguridad" className="py-24">
      <div className="mb-12">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-5xl font-bold text-white mb-6"
        >
          Uso Seguro de tu Láser
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-zinc-400 text-lg max-w-2xl"
        >
          Un grabador láser es una herramienta increíble, pero no es un juguete. Sigue este tutorial rápido antes de encender tu máquina por primera vez.
        </motion.p>
      </div>

      <div className="space-y-6">
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="flex gap-4 p-6 rounded-3xl bg-zinc-900/50 border border-orange-500/20 hover:border-orange-500/50 transition-colors"
        >
          <div className="shrink-0 p-3 bg-orange-500/10 rounded-2xl h-fit">
            <Eye className="w-6 h-6 text-orange-500" />
          </div>
          <div>
            <h3 className="text-xl font-bold text-white mb-2">1. Protección Ocular Obligatoria</h3>
            <p className="text-zinc-400 text-sm leading-relaxed">
              El rayo de un láser de diodo (generalmente azul, 450nm) es extremadamente brillante. Incluso el reflejo en una superficie brillante puede dañar tu retina permanentemente de forma instantánea. <strong>Siempre usa las gafas de protección</strong> certificadas que vienen con la máquina, o compra unas de calidad que bloqueen la longitud de onda específica de tu láser.
            </p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="flex gap-4 p-6 rounded-3xl bg-zinc-900/50 border border-blue-500/20 hover:border-blue-500/50 transition-colors"
        >
          <div className="shrink-0 p-3 bg-blue-500/10 rounded-2xl h-fit">
            <Wind className="w-6 h-6 text-blue-500" />
          </div>
          <div>
            <h3 className="text-xl font-bold text-white mb-2">2. Ventilación y Extracción</h3>
            <p className="text-zinc-400 text-sm leading-relaxed">
              Al quemar materiales como madera, cuero o acrílico, se generan humo y partículas que no debes respirar. Usa la máquina en un garaje, un cuarto muy bien ventilado, o idealmente, instala una <strong>carcasa de cerramiento (Enclosure)</strong> con un tubo extractor conectado a una ventana.
            </p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="flex gap-4 p-6 rounded-3xl bg-zinc-900/50 border border-red-500/20 hover:border-red-500/50 transition-colors"
        >
          <div className="shrink-0 p-3 bg-red-500/10 rounded-2xl h-fit">
            <AlertTriangle className="w-6 h-6 text-red-500" />
          </div>
          <div>
            <h3 className="text-xl font-bold text-white mb-2">3. Peligro de Incendio</h3>
            <p className="text-zinc-400 text-sm leading-relaxed">
              Estás literalmente quemando material. Si el láser se detiene por un fallo informático pero sigue disparando, el material se incendiará en segundos. <strong>Nunca dejes la máquina trabajando sola.</strong> Ten siempre un pequeño extintor o una manta ignífuga cerca, y coloca una plancha de acero o panal de abejas debajo del material para proteger tu mesa.
            </p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="flex gap-4 p-6 rounded-3xl bg-zinc-900/50 border border-purple-500/20 hover:border-purple-500/50 transition-colors"
        >
          <div className="shrink-0 p-3 bg-purple-500/10 rounded-2xl h-fit">
            <ShieldAlert className="w-6 h-6 text-purple-500" />
          </div>
          <div>
            <h3 className="text-xl font-bold text-white mb-2">4. Materiales Prohibidos</h3>
            <p className="text-zinc-400 text-sm leading-relaxed">
              No todos los materiales son aptos para el láser. Evita absolutamente el <strong>PVC, Vinilo, Cuero artificial (Pleather) o materiales con teflón</strong>. Al cortarlos con láser emiten gas de cloro, el cual es altamente tóxico para ti y creará ácido clorhídrico en el aire que oxidará y destruirá tu máquina.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
