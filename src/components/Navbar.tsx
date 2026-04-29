"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { LaserLogo } from "./LaserLogo";

export function Navbar() {
  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[90%] max-w-5xl"
    >
      <nav className="flex items-center justify-between px-6 py-3 rounded-full bg-black/40 backdrop-blur-md border border-white/10 shadow-2xl">
        <div className="flex items-center text-white font-bold text-xl tracking-tight">
          <LaserLogo />
          <span>LaserCraft <span className="text-orange-500">2026</span></span>
        </div>
        
        <ul className="hidden md:flex items-center gap-8 text-sm font-medium text-neutral-300">
          <li>
            <Link href="#top-10" className="hover:text-white transition-colors">
              Top 10 Grabadoras
            </Link>
          </li>
          <li>
            <Link href="#limpieza" className="hover:text-white transition-colors">
              Mantenimiento
            </Link>
          </li>
          <li>
            <Link href="#faq" className="hover:text-white transition-colors">
              Preguntas Frecuentes
            </Link>
          </li>
        </ul>
        
        <Link 
          href="#top-10"
          className="px-5 py-2 rounded-full bg-orange-500 text-black font-semibold text-sm hover:bg-orange-400 transition-colors shadow-[0_0_20px_rgba(249,115,22,0.4)]"
        >
          View Top Picks
        </Link>
      </nav>
    </motion.header>
  );
}
