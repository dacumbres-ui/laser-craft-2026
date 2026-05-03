import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

export default function AvisoLegal() {
  return (
    <main className="bg-black min-h-screen text-zinc-300">
      <Navbar />
      <div className="max-w-4xl mx-auto px-6 py-32">
        <h1 className="text-4xl font-bold text-white mb-8">Aviso Legal</h1>
        
        <section className="space-y-6">
          <p>
            En cumplimiento del artículo 10 de la Ley 34/2002, de 11 de julio, de Servicios de la Sociedad de la Información y Comercio Electrónico (LSSICE), se exponen a continuación los datos identificativos del titular del sitio web.
          </p>
          
          <h2 className="text-2xl font-semibold text-white mt-8">1. Datos Identificativos</h2>
          <p>
            El sitio web <strong>laser-craft-2026.vercel.app</strong> es gestionado por LaserCraft. 
            Contacto: davidcum@gmail.com (Ejemplo).
          </p>

          <h2 className="text-2xl font-semibold text-white mt-8">2. Propiedad Intelectual</h2>
          <p>
            El código fuente, los diseños gráficos, las imágenes, las fotografías, los sonidos, las animaciones, el software, los textos, así como la información y los contenidos que se recogen en el presente sitio web están protegidos por la legislación española sobre los derechos de propiedad intelectual e industrial.
          </p>

          <h2 className="text-2xl font-semibold text-white mt-8">3. Programa de Afiliados de Amazon</h2>
          <p>
            Este sitio web participa en el Programa de Afiliados de Amazon EU, un programa de publicidad para afiliados diseñado para ofrecer a sitios web un modo de obtener comisiones por publicidad, publicitando e incluyendo enlaces a Amazon.es. 
          </p>
          <p>
            Amazon y el logotipo de Amazon son marcas comerciales de Amazon.com, Inc. o sus sociedades filiales.
          </p>

          <h2 className="text-2xl font-semibold text-white mt-8">4. Exclusión de Responsabilidad</h2>
          <p>
            LaserCraft no se hace responsable, en ningún caso, de los daños y perjuicios de cualquier naturaleza que pudieran ocasionar, a título enunciativo: errores u omisiones en los contenidos, falta de disponibilidad del portal o la transmisión de virus o programas maliciosos o lesivos en los contenidos, a pesar de haber adoptado todas las medidas tecnológicas necesarias para evitarlo.
          </p>
        </section>
      </div>
      <Footer />
    </main>
  );
}
