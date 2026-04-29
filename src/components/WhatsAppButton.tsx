"use client";

import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";

export function WhatsAppButton() {
  const phoneNumber = "34722838192";
  const message = "Hola, me gustaría obtener más información sobre las grabadoras láser.";
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <motion.a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 1, type: "spring", stiffness: 200, damping: 20 }}
      className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-14 h-14 bg-green-500 rounded-full shadow-[0_0_20px_rgba(34,197,94,0.4)] hover:bg-green-400 hover:scale-110 transition-all duration-300 group"
      aria-label="Contact us on WhatsApp"
    >
      <MessageCircle className="w-7 h-7 text-white fill-white" />
      
      {/* Tooltip */}
      <div className="absolute right-full mr-4 px-3 py-1.5 bg-zinc-900 text-white text-sm font-medium rounded-lg opacity-0 pointer-events-none group-hover:opacity-100 transition-opacity whitespace-nowrap border border-white/10 shadow-xl">
        ¿Dudas? Escríbenos
      </div>
      
      {/* Ping effect */}
      <span className="absolute w-full h-full rounded-full bg-green-500 opacity-50 animate-ping -z-10" />
    </motion.a>
  );
}
