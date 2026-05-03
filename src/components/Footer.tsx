"use client";

import Link from "next/link";

export function Footer() {
  return (
    <footer className="bg-zinc-950 border-t border-white/10 pt-10 pb-6 relative z-10">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-center md:text-left border-t border-white/5 pt-8">
          <p className="text-zinc-500 text-sm">
            © 2026 LaserCraft. Todos los derechos reservados.
          </p>
          <div className="flex flex-wrap justify-center gap-6 text-sm text-zinc-500">
            <Link href="/aviso-legal" className="hover:text-white transition-colors">Aviso Legal</Link>
            <Link href="/politica-de-privacidad" className="hover:text-white transition-colors">Política de Privacidad</Link>
            <Link href="/politica-de-cookies" className="hover:text-white transition-colors">Política de Cookies</Link>
          </div>
        </div>
        <p className="text-zinc-600 text-xs text-center mt-6">
          En calidad de Afiliado de Amazon, obtengo ingresos por las compras adscritas que cumplen los requisitos aplicables. Esto no supone ningún coste extra para el comprador.
        </p>
      </div>
    </footer>
  );
}
