"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, ShoppingCart, Star, StarHalf, X, Check, Package, ThumbsUp, ThumbsDown } from "lucide-react";
import Image from "next/image";
import { AMAZON_AFFILIATE_TAG } from "@/data/products";

const getAffiliateLink = (url: string) => {
  if (!url) return "#";
  if (!url.includes("amazon") && !url.includes("amzn.eu")) return url;
  
  const separator = url.includes("?") ? "&" : "?";
  return `${url}${separator}tag=${AMAZON_AFFILIATE_TAG}`;
};

interface Review {
  name: string;
  rating: number;
  text: string;
}

interface ProductCardProps {
  title: string;
  description: string;
  imagePath: string;
  amazonLink: string;
  included?: string[];
  pros?: string[];
  cons?: string[];
  reviews?: Review[];
  delay?: number;
  className?: string;
}

export function ProductCard({ 
  title, 
  description, 
  imagePath, 
  amazonLink, 
  included = [], 
  pros = [], 
  cons = [], 
  reviews = [], 
  delay = 0, 
  className = "" 
}: ProductCardProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.6, delay }}
        whileHover={{ y: -5 }}
        className={`group relative overflow-hidden rounded-3xl bg-zinc-900 border border-white/10 hover:border-orange-500/50 transition-all duration-300 flex flex-col ${className}`}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-orange-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-0 pointer-events-none" />
        
        <div 
          className="relative h-48 md:h-64 w-full overflow-hidden bg-white z-10 flex items-center justify-center p-4 cursor-pointer"
          onClick={() => setIsModalOpen(true)}
        >
          <motion.div 
            animate={{ y: [0, -8, 0] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: delay * 0.5 }}
            className="w-full h-full relative pointer-events-none"
          >
            <Image 
              src={imagePath} 
              alt={title} 
              fill
              className="object-contain group-hover:scale-110 transition-transform duration-500"
            />
          </motion.div>
        </div>

        <div className="relative z-10 p-6 flex flex-col flex-grow justify-between">
          <div>
            <h3 className="text-xl md:text-2xl font-bold text-white mb-2 line-clamp-2">
              {title}
            </h3>
            <p className="text-zinc-400 text-sm line-clamp-3 mb-4">
              {description}
            </p>
          </div>

          <div className="flex gap-2 mt-auto">
            <button
              onClick={() => setIsModalOpen(true)}
              className="w-full px-4 py-3 text-sm font-semibold text-white transition-all rounded-xl bg-white/5 border border-white/10 hover:bg-white/10"
            >
              Ver detalles
            </button>
            <a
              href={getAffiliateLink(amazonLink)}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center w-full px-4 py-3 text-sm font-semibold text-white transition-all rounded-xl bg-orange-600 hover:bg-orange-500 group/btn"
            >
              <span>Comprar</span>
              <ShoppingCart className="w-4 h-4 ml-2" />
            </a>
          </div>
        </div>
      </motion.div>

      {/* Modal / Expanded View */}
      <AnimatePresence>
        {isModalOpen && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 bg-black/80 backdrop-blur-sm"
              onClick={() => setIsModalOpen(false)}
            />
            
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="relative w-full max-w-4xl max-h-[90vh] bg-zinc-950 border border-white/10 rounded-3xl overflow-y-auto shadow-2xl flex flex-col md:flex-row z-10"
            >
              <button 
                onClick={() => setIsModalOpen(false)}
                className="absolute top-4 right-4 z-20 p-2 bg-black/50 hover:bg-black rounded-full text-white/70 hover:text-white transition-colors"
              >
                <X className="w-6 h-6" />
              </button>

              <div className="md:w-1/2 bg-white p-8 flex items-center justify-center min-h-[300px]">
                <div className="relative w-full h-full min-h-[300px]">
                  <Image 
                    src={imagePath} 
                    alt={title} 
                    fill
                    className="object-contain"
                  />
                </div>
              </div>
              
              <div className="md:w-1/2 p-6 md:p-8 flex flex-col gap-8">
                <div>
                  <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">{title}</h2>
                  <p className="text-zinc-400 leading-relaxed">{description}</p>
                </div>

                {/* Pros & Cons */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <h4 className="flex items-center gap-2 font-semibold text-white mb-3">
                      <ThumbsUp className="w-4 h-4 text-green-500" /> Pros
                    </h4>
                    <ul className="space-y-2">
                      {pros.map((pro, i) => (
                        <li key={i} className="text-sm text-zinc-400 flex gap-2">
                          <Check className="w-4 h-4 text-green-500 shrink-0 mt-0.5" />
                          <span>{pro}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="flex items-center gap-2 font-semibold text-white mb-3">
                      <ThumbsDown className="w-4 h-4 text-red-500" /> Contras
                    </h4>
                    <ul className="space-y-2">
                      {cons.map((con, i) => (
                        <li key={i} className="text-sm text-zinc-400 flex gap-2">
                          <X className="w-4 h-4 text-red-500 shrink-0 mt-0.5" />
                          <span>{con}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Included */}
                <div className="bg-white/5 rounded-2xl p-5 border border-white/5">
                  <h4 className="flex items-center gap-2 font-semibold text-white mb-3">
                    <Package className="w-5 h-5 text-orange-500" /> ¿Qué incluye la caja?
                  </h4>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {included.map((item, i) => (
                      <li key={i} className="text-sm text-zinc-400 flex items-center gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-orange-500" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Reviews */}
                <div>
                  <h4 className="font-semibold text-white mb-4">Reseñas destacadas de Amazon</h4>
                  <div className="space-y-4">
                    {reviews.map((review, i) => (
                      <div key={i} className="bg-zinc-900 rounded-xl p-4 border border-white/5">
                        <div className="flex items-center gap-2 mb-2">
                          <div className="flex text-orange-500">
                            {[...Array(5)].map((_, idx) => (
                              <Star key={idx} className={`w-3.5 h-3.5 ${idx < review.rating ? 'fill-orange-500' : 'fill-transparent opacity-30'}`} />
                            ))}
                          </div>
                          <span className="text-xs font-medium text-zinc-300">{review.name}</span>
                          <span className="text-xs text-green-500 ml-auto flex items-center gap-1">
                            <Check className="w-3 h-3" /> Compra verificada
                          </span>
                        </div>
                        <p className="text-sm text-zinc-400 italic">"{review.text}"</p>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-auto pt-6 border-t border-white/10">
                  <a
                    href={getAffiliateLink(amazonLink)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center w-full px-6 py-4 font-bold text-white transition-all rounded-xl bg-orange-600 hover:bg-orange-500 shadow-[0_0_20px_rgba(234,88,12,0.4)] hover:shadow-[0_0_30px_rgba(234,88,12,0.6)]"
                  >
                    <ShoppingCart className="w-5 h-5 mr-2" />
                    Comprar en Amazon
                  </a>
                  <p className="text-center text-xs text-zinc-500 mt-3">Serás redirigido a la página oficial del producto.</p>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}
