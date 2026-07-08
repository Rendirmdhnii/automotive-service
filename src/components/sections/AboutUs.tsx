"use client";

import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { CheckCircle2, Wrench, Shield, Zap, DollarSign, Settings, Smile } from "lucide-react";
import Image from "next/image";

const KEY_VALUES = [
  {
    icon: Wrench,
    title: "Teknisi Berpengalaman",
    desc: "Mekanik andal bersertifikat yang memahami berbagai jenis mesin dan kelistrikan mobil.",
  },
  {
    icon: Settings,
    title: "Peralatan Modern",
    desc: "Diagnostik presisi dengan OBD scanner canggih dan peralatan reparasi standar industri.",
  },
  {
    icon: Zap,
    title: "Pelayanan Cepat",
    desc: "Alur kerja yang efisien memastikan mobil Anda selesai tepat waktu tanpa mengurangi kualitas.",
  },
  {
    icon: DollarSign,
    title: "Harga Transparan",
    desc: "Estimasi biaya yang jelas di awal. Tidak ada biaya tersembunyi atau servis tanpa persetujuan.",
  },
  {
    icon: Shield,
    title: "Sparepart Berkualitas",
    desc: "Pilihan suku cadang asli (OEM) dan berkualitas tinggi dengan jaminan garansi.",
  },
  {
    icon: Smile,
    title: "Prioritas Kepuasan",
    desc: "Kami mendengarkan setiap keluhan dan mengutamakan kenyamanan serta keselamatan Anda berkendara.",
  },
];

export default function AboutUs() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  return (
    <section id="about" className="relative py-24 bg-brand-dark overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-1/2 left-0 w-80 h-80 rounded-full bg-brand-red/5 blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10" ref={sectionRef}>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          {/* Left Column: Text Content & Core values */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-7 flex flex-col"
          >
            <span className="font-poppins font-bold text-xs uppercase tracking-[0.2em] text-brand-red mb-3">
              Tentang Kami
            </span>
            <h2 className="font-poppins font-extrabold text-3xl sm:text-4xl lg:text-5xl tracking-tight leading-tight text-white mb-6">
              Dedikasi Terbaik untuk <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-red to-white">
                Kesempurnaan Mobil Anda
              </span>
            </h2>
            <p className="font-inter text-base text-brand-gray/95 leading-relaxed mb-8">
              IPIN MOTOR hadir sebagai bengkel mobil modern dan tepercaya di Sidoarjo. Kami melayani segala kebutuhan perawatan kendaraan Anda mulai dari tune up, kelistrikan, servis kaki-kaki, hingga layanan emergency towing 24 jam. Dengan komitmen pelayanan prima, kami memastikan setiap perjalanan Anda aman dan nyaman.
            </p>

            {/* Slogan Badge */}
            <div className="mb-10 p-5 rounded-xl bg-white/[0.02] border-l-4 border-brand-red backdrop-blur-sm">
              <p className="font-poppins font-bold text-lg text-white italic tracking-wide">
                &ldquo;INGAT BENGKEL MOBIL, INGAT IPIN MOTOR.&rdquo;
              </p>
            </div>

            {/* Grid of values */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {KEY_VALUES.map((val, idx) => {
                const Icon = val.icon;
                return (
                  <div key={idx} className="flex gap-4 group">
                    <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-brand-red/10 border border-brand-red/20 flex items-center justify-center group-hover:bg-brand-red group-hover:border-brand-red transition-all duration-300">
                      <Icon className="w-5 h-5 text-brand-red-light group-hover:text-white transition-colors" />
                    </div>
                    <div className="flex flex-col">
                      <h4 className="font-poppins font-semibold text-sm text-white tracking-wide">
                        {val.title}
                      </h4>
                      <p className="font-inter text-xs text-brand-gray/90 mt-1 leading-relaxed">
                        {val.desc}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </motion.div>

          {/* Right Column: Premium Image Composition */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-5 relative"
          >
            {/* Outline box decor */}
            <div className="absolute -inset-4 rounded-3xl border border-brand-red/25 transform rotate-2 pointer-events-none scale-102" />
            
            {/* Glow backing */}
            <div className="absolute -inset-1 bg-gradient-to-tr from-brand-red to-white opacity-10 blur-xl rounded-3xl pointer-events-none" />

            <div className="relative rounded-2xl overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.5)] border border-white/10 group aspect-[4/5] sm:aspect-square lg:aspect-[4/5]">
              {/* Unsplash Image - Premium mechanic working on car engine */}
              <Image
                src="https://images.unsplash.com/photo-1486006920555-c77dce18193b?auto=format&fit=crop&w=800&q=80"
                alt="Teknisi IPIN MOTOR sedang menservis mobil"
                fill
                sizes="(max-width: 1024px) 100vw, 40vw"
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                priority={false}
              />
              
              {/* Image Gradient Vignette */}
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent" />

              {/* Float Experience Badge */}
              <div className="absolute bottom-6 left-6 right-6 p-5 rounded-xl glass-card-no-hover border border-white/10 shadow-lg">
                <div className="flex items-center gap-4">
                  <div className="text-3xl font-poppins font-black text-brand-red-light tracking-tighter">
                    15th
                  </div>
                  <div className="w-[1px] h-10 bg-white/10" />
                  <div className="flex flex-col">
                    <span className="font-poppins font-bold text-sm text-white tracking-wide">
                      Pengalaman Sukses
                    </span>
                    <span className="font-inter text-xs text-brand-gray/80">
                      Merawat & Menyelamatkan Kendaraan
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
