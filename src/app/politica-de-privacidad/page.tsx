import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

export default function Privacidad() {
  return (
    <main className="bg-black min-h-screen text-zinc-300">
      <Navbar />
      <div className="max-w-4xl mx-auto px-6 py-32">
        <h1 className="text-4xl font-bold text-white mb-8">Política de Privacidad</h1>
        
        <section className="space-y-6">
          <p>
            En LaserCraft, respetamos su privacidad y estamos comprometidos a proteger sus datos personales. Esta política le informará sobre cómo cuidamos sus datos personales cuando visita nuestro sitio web.
          </p>
          
          <h2 className="text-2xl font-semibold text-white mt-8">1. Información que recopilamos</h2>
          <p>
            No recopilamos datos personales de identificación (como nombre o dirección) a menos que usted nos los proporcione voluntariamente. Sin embargo, recopilamos datos técnicos de navegación a través de cookies para mejorar su experiencia.
          </p>

          <h2 className="text-2xl font-semibold text-white mt-8">2. Uso de sus datos</h2>
          <p>
            Utilizamos la información recopilada para:
          </p>
          <ul className="list-disc ml-6 space-y-2">
            <li>Administrar y mejorar nuestro sitio web.</li>
            <li>Analizar el tráfico y las tendencias de uso.</li>
            <li>Gestionar las comisiones del programa de afiliados de Amazon.</li>
          </ul>

          <h2 className="text-2xl font-semibold text-white mt-8">3. Cookies de Amazon</h2>
          <p>
            Al hacer clic en los enlaces de productos de Amazon, este podrá instalar cookies en su navegador para rastrear su compra y acreditar nuestra comisión. Estas cookies están sujetas a la política de privacidad de Amazon.
          </p>

          <h2 className="text-2xl font-semibold text-white mt-8">4. Sus Derechos</h2>
          <p>
            Usted tiene derecho a acceder, rectificar o suprimir sus datos de navegación eliminando las cookies de su navegador en cualquier momento.
          </p>
        </section>
      </div>
      <Footer />
    </main>
  );
}
