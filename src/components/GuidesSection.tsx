"use client";

import { motion } from "framer-motion";
import { SafetyTutorial } from "./SafetyTutorial";
import { CleaningGuide } from "./CleaningGuide";
import { FAQ } from "./FAQ";
import Image from "next/image";

export function GuidesSection() {
  return (
    <div className="relative max-w-[90rem] mx-auto px-4 md:px-8 py-12 flex flex-col lg:flex-row gap-8 lg:gap-16 z-10">
      
      {/* Columna Izquierda: Imagen Sticky (Visible solo en desktop y pegajosa mientras haces scroll por las guías) */}
      <div className="hidden lg:block lg:w-1/3 relative">
        <div className="sticky top-32 h-[80vh] min-h-[600px] w-full rounded-3xl overflow-hidden border border-white/10 shadow-[0_0_50px_rgba(0,0,0,0.5)]">
          {/* Un splash naranja por debajo para mezclar mejor la imagen */}
          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent z-10" />
          
          <div className="absolute inset-0 bg-zinc-900">
             <Image 
               src="https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?q=80&w=2070&auto=format&fit=crop" 
               alt="Persona usando máquina láser" 
               fill 
               className="object-cover opacity-70"
               unoptimized
             />
          </div>
          
          <div className="absolute bottom-8 left-8 right-8 z-20">
            <h3 className="text-2xl font-bold text-white mb-2">Seguridad y Mantenimiento</h3>
            <p className="text-zinc-400 text-sm leading-relaxed">
              La clave para dominar el grabado láser es respetar la máquina. Aprende a usarla sin riesgos, mantenla limpia para resultados profesionales y resuelve todas tus dudas.
            </p>
          </div>
        </div>
      </div>

      {/* Columna Derecha: Contenido que hace scroll */}
      <div className="w-full lg:w-2/3 flex flex-col gap-12">
        <SafetyTutorial />
        <CleaningGuide />
        <FAQ />
      </div>

    </div>
  );
}
