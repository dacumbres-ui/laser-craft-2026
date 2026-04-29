"use client";

import { motion } from "framer-motion";
import { ProductCard } from "./ProductCard";
import { products } from "@/data/products";

export function BentoGrid() {
  return (
    <section id="top-10" className="py-24 px-4 md:px-8 max-w-7xl mx-auto z-10 relative">
      <div className="text-center mb-16">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-5xl font-bold text-white mb-6"
        >
          Top 10 Grabadoras Láser de <span className="text-orange-500">2026</span>
        </motion.h2>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-zinc-400 max-w-2xl mx-auto text-lg"
        >
          Hemos analizado las máquinas más vendidas del mercado para traerte una selección definitiva basada en rendimiento, facilidad de uso y relación calidad-precio.
        </motion.p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 auto-rows-[auto]">
        {products.map((product, index) => (
          <div key={product.amazonLink} id={`product-${index}`}>
            <ProductCard
              title={product.title}
              description={product.description}
              imagePath={product.imagePath}
              amazonLink={product.amazonLink}
              included={product.included}
              pros={product.pros}
              cons={product.cons}
              reviews={product.reviews}
              delay={index * 0.1}
            />
          </div>
        ))}
      </div>
    </section>
  );
}
