"use client";

import { motion } from "framer-motion";
import { CheckCircle2, XCircle, Droplets, Wrench } from "lucide-react";

export function CleaningGuide() {
  return (
    <section id="limpieza" className="py-24 px-4 md:px-8 max-w-5xl mx-auto bg-black">
      <div className="text-center mb-16">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-5xl font-bold text-white mb-6"
        >
          Guía de Limpieza y Mantenimiento
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-zinc-400 text-lg max-w-2xl mx-auto"
        >
          Mantén tu grabadora láser como el primer día. Un buen mantenimiento garantiza cortes limpios, previene incendios y prolonga la vida útil del módulo láser.
        </motion.p>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        {/* Qué SÍ hacer */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="p-8 rounded-3xl bg-zinc-900/50 border border-green-500/20"
        >
          <div className="flex items-center gap-3 mb-6">
            <div className="p-3 bg-green-500/10 rounded-xl text-green-500">
              <CheckCircle2 className="w-6 h-6" />
            </div>
            <h3 className="text-2xl font-semibold text-white">Lo que DEBES hacer</h3>
          </div>
          
          <ul className="space-y-4 text-zinc-300">
            <li className="flex gap-3">
              <Droplets className="w-5 h-5 text-green-400 shrink-0 mt-0.5" />
              <span><strong>Limpiar la lente frecuentemente:</strong> Usa hisopos de algodón (bastoncillos) empapados en alcohol isopropílico (al menos 90%). Frótalo suavemente sobre la lente después de cada proyecto largo.</span>
            </li>
            <li className="flex gap-3">
              <Wrench className="w-5 h-5 text-green-400 shrink-0 mt-0.5" />
              <span><strong>Lubricar los ejes:</strong> Usa grasa de litio blanca o aceite para máquinas de coser en los rieles y varillas roscadas para que el láser se mueva con fluidez.</span>
            </li>
            <li className="flex gap-3">
              <CheckCircle2 className="w-5 h-5 text-green-400 shrink-0 mt-0.5" />
              <span><strong>Revisar las correas:</strong> Asegúrate de que las correas de distribución no estén ni muy flojas (pierdes precisión) ni muy tensas (fuerzas el motor).</span>
            </li>
            <li className="flex gap-3">
              <CheckCircle2 className="w-5 h-5 text-green-400 shrink-0 mt-0.5" />
              <span><strong>Ejemplo de rutina:</strong> Tras cortar madera (que genera mucha resina), apaga la máquina, saca la lente si es posible, límpiala con alcohol isopropílico, y aspira los restos de madera de los carriles.</span>
            </li>
          </ul>
        </motion.div>

        {/* Qué NO hacer */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="p-8 rounded-3xl bg-zinc-900/50 border border-red-500/20"
        >
          <div className="flex items-center gap-3 mb-6">
            <div className="p-3 bg-red-500/10 rounded-xl text-red-500">
              <XCircle className="w-6 h-6" />
            </div>
            <h3 className="text-2xl font-semibold text-white">Lo que NUNCA debes hacer</h3>
          </div>
          
          <ul className="space-y-4 text-zinc-300">
            <li className="flex gap-3">
              <XCircle className="w-5 h-5 text-red-400 shrink-0 mt-0.5" />
              <span><strong>Usar agua o limpiacristales en la lente:</strong> Dejan residuos y marcas de agua. Cuando el láser pasa a través del residuo, calienta la suciedad y puede estallar o quemar la lente.</span>
            </li>
            <li className="flex gap-3">
              <XCircle className="w-5 h-5 text-red-400 shrink-0 mt-0.5" />
              <span><strong>Usar papel higiénico o toallas de cocina:</strong> Estos papeles son abrasivos a nivel microscópico y rayarán el recubrimiento antirreflectante de la lente protectora.</span>
            </li>
            <li className="flex gap-3">
              <XCircle className="w-5 h-5 text-red-400 shrink-0 mt-0.5" />
              <span><strong>Soplar con la boca el polvo:</strong> Tu aliento contiene pequeñas partículas de saliva. Usa un compresor de aire (Air Assist) o aire comprimido en bote, siempre con la máquina apagada.</span>
            </li>
            <li className="flex gap-3">
              <XCircle className="w-5 h-5 text-red-400 shrink-0 mt-0.5" />
              <span><strong>Limpiar mientras está conectada:</strong> ¡Seguridad ante todo! Siempre desconecta la grabadora láser de la corriente antes de manipular el módulo o limpiar los rieles.</span>
            </li>
          </ul>
        </motion.div>
      </div>
    </section>
  );
}
