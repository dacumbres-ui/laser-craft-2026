import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

export default function Cookies() {
  return (
    <main className="bg-black min-h-screen text-zinc-300">
      <Navbar />
      <div className="max-w-4xl mx-auto px-6 py-32">
        <h1 className="text-4xl font-bold text-white mb-8">Política de Cookies</h1>
        
        <section className="space-y-6">
          <p>
            Utilizamos cookies para facilitar el uso de nuestra página web y adaptar sus contenidos para que te resulten más útiles.
          </p>
          
          <h2 className="text-2xl font-semibold text-white mt-8">1. ¿Qué son las cookies?</h2>
          <p>
            Las cookies son pequeños archivos de texto que se almacenan en su navegador cuando visita casi cualquier página web. Su utilidad es que la web sea capaz de recordar su visita cuando vuelva a navegar por esa página.
          </p>

          <h2 className="text-2xl font-semibold text-white mt-8">2. Cookies utilizadas en este sitio</h2>
          <ul className="list-disc ml-6 space-y-2">
            <li><strong>Cookies técnicas:</strong> Necesarias para el funcionamiento básico de la web.</li>
            <li><strong>Cookies de Afiliación:</strong> Utilizadas por Amazon para saber que el usuario procede de nuestra web y así asignarnos la comisión correspondiente. Tienen una duración de 24 horas.</li>
            <li><strong>Cookies de Análisis:</strong> (Si usas Google Analytics) Para entender cómo interactúan los visitantes con la web.</li>
          </ul>

          <h2 className="text-2xl font-semibold text-white mt-8">3. Cómo desactivar las cookies</h2>
          <p>
            Usted puede restringir, bloquear o borrar las cookies de este sitio web en cualquier momento, modificando la configuración de su navegador. Cada navegador tiene una configuración diferente.
          </p>
        </section>
      </div>
      <Footer />
    </main>
  );
}
