"use client";

import React, { useState, useRef } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import { Search } from "lucide-react";
import Image from "next/image";

const CATEGORIES = ["Semua", "Servis", "Towing", "Fasilitas"];

const GALLERY_ITEMS = [
  {
    id: 1,
    title: "Bengkel & Area Kerja",
    category: "Fasilitas",
    image: "https://images.unsplash.com/photo-1616788494707-ec28f08d05a1?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 2,
    title: "Diagnosa Scanner Engine",
    category: "Servis",
    image: "https://images.unsplash.com/photo-1486006920555-c77dce18193b?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 3,
    title: "Armada Towing Flatbed",
    category: "Towing",
    image: "https://images.unsplash.com/photo-1563720223185-11003d516935?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 4,
    title: "Spooring & Alignment Roda",
    category: "Servis",
    image: "https://images.unsplash.com/photo-1551524559-8af4e6624178?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 5,
    title: "Servis Sistem AC Mobil",
    category: "Servis",
    image: "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 6,
    title: "Stok Sparepart Orisinal",
    category: "Fasilitas",
    image: "https://images.unsplash.com/photo-1507136566006-cfc505b114fc?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 7,
    title: "Ruang Tunggu Premium",
    category: "Fasilitas",
    image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 8,
    title: "Penyerahan Kunci Pelanggan",
    category: "Servis",
    image: "https://images.unsplash.com/photo-1549399542-7e3f8b79c341?auto=format&fit=crop&w=800&q=80",
  },
];

export default function Gallery() {
  const [activeFilter, setActiveFilter] = useState("Semua");
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  const filteredItems = GALLERY_ITEMS.filter((item) => {
    if (activeFilter === "Semua") return true;
    return item.category === activeFilter;
  });

  return (
    <section id="gallery" className="relative py-24 bg-gray-50/50 border-y border-gray-100" ref={sectionRef}>
      {/* Background neon flares */}
      <div className="absolute top-1/3 left-0 w-96 h-96 rounded-full bg-brand-mint/5 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="font-poppins font-bold text-xs uppercase tracking-[0.2em] text-brand-mint">
            Galeri Bengkel
          </span>
          <h2 className="font-poppins font-extrabold text-3xl sm:text-4xl lg:text-5xl tracking-tight leading-tight text-gray-900 mt-3">
            Dokumentasi & Aktivitas <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-mint to-brand-mint-dark">
              Harian IPIN MOTOR
            </span>
          </h2>
          <div className="w-20 h-1 bg-brand-mint mx-auto mt-6 rounded-full" />
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-12">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveFilter(cat)}
              className={`px-5 py-2 rounded-full font-poppins text-xs font-semibold uppercase tracking-wider transition-all duration-300 ${
                activeFilter === cat
                  ? "bg-brand-mint text-white shadow-[0_4px_15px_rgba(16,185,129,0.25)]"
                  : "border border-black/5 bg-gray-100/50 text-gray-600 hover:bg-gray-100 hover:text-gray-900"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Masonry/Grid Gallery - 1 col on mobile, 2/3/4 cols on desktop */}
        <motion.div
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
        >
          <AnimatePresence mode="popLayout">
            {filteredItems.map((item) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                key={item.id}
                className="relative rounded-2xl overflow-hidden shadow-sm border border-black/5 aspect-square group cursor-pointer"
              >
                {/* Image */}
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                  loading="lazy"
                />

                {/* Glass Hover Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/35 to-black/15 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                  {/* Category Tag */}
                  <span className="w-max px-2.5 py-1 rounded bg-brand-mint text-white font-poppins text-[10px] font-bold uppercase tracking-wider mb-2.5">
                    {item.category}
                  </span>
                  
                  {/* Title */}
                  <h3 className="font-poppins font-bold text-base text-white tracking-wide">
                    {item.title}
                  </h3>

                  {/* Search Icon Decor */}
                  <div className="absolute top-4 right-4 w-9 h-9 rounded-full bg-brand-mint/90 flex items-center justify-center transform -translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 shadow-md">
                    <Search className="w-4 h-4 text-white" />
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

      </div>
    </section>
  );
}
