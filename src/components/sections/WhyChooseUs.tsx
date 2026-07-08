"use client";

import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  Users,
  Shield,
  Layers,
  Zap,
  CheckCircle,
  Truck,
  Heart,
  HelpCircle,
} from "lucide-react";

const WHY_CHOOSE_US_DATA = [
  {
    icon: Users,
    title: "Teknisi Profesional",
    desc: "Mekanik andal berpengalaman luas di berbagai kelas dan jenis mobil.",
  },
  {
    icon: Layers,
    title: "Sparepart Berkualitas",
    desc: "Suku cadang pilihan yang tahan lama dengan opsi OEM atau orisinal pabrikan.",
  },
  {
    icon: Shield,
    title: "Harga Transparan",
    desc: "Semua estimasi biaya disetujui di awal tanpa ada beban biaya tambahan tersembunyi.",
  },
  {
    icon: Zap,
    title: "Pengerjaan Cepat",
    desc: "Alur kerja efisien dan presisi tinggi sehingga mobil dapat segera dikendarai.",
  },
  {
    icon: CheckCircle,
    title: "Garansi Pengerjaan",
    desc: "Jaminan kepuasan pascaservis. Jika ada kendala, kami bantu perbaiki gratis.",
  },
  {
    icon: Truck,
    title: "Towing Siap 24 Jam",
    desc: "Layanan derek darurat siap sedia sepanjang hari untuk segala situasi darurat.",
  },
  {
    icon: Heart,
    title: "Pelayanan Ramah",
    desc: "Komunikasi terbuka, ramah, dan mengutamakan kenyamanan setiap pelanggan.",
  },
  {
    icon: HelpCircle,
    title: "Konsultasi Gratis",
    desc: "Diskusikan masalah mobil Anda secara gratis dengan tim kami sebelum servis.",
  },
];

export default function WhyChooseUs() {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring" as const,
        stiffness: 100,
        damping: 15,
      },
    },
  };

  return (
    <section id="why-choose-us" className="relative py-24 bg-white overflow-hidden">
      {/* Decorative Blur light */}
      <div className="absolute top-1/2 left-0 w-80 h-80 rounded-full bg-brand-mint/5 blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="font-poppins font-bold text-xs uppercase tracking-[0.2em] text-brand-mint">
            Kenapa Memilih Kami
          </span>
          <h2 className="font-poppins font-extrabold text-3xl sm:text-4xl lg:text-5xl tracking-tight leading-tight text-gray-900 mt-3">
            Komitmen Kami Menjaga <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-mint to-brand-mint-dark">
              Kualitas dan Kepercayaan Anda
            </span>
          </h2>
          <div className="w-20 h-1 bg-brand-mint mx-auto mt-6 rounded-full" />
        </div>

        {/* Benefits Grid - 1 col on mobile, 2/3/4 cols on desktop */}
        <motion.div
          ref={containerRef}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {WHY_CHOOSE_US_DATA.map((item, idx) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={idx}
                variants={cardVariants}
                className="glass-card p-6 rounded-2xl border border-black/5 flex flex-col justify-start relative group"
              >
                {/* Background Hover Glow */}
                <div className="absolute inset-0 bg-gradient-to-br from-brand-mint/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl" />

                {/* Icon Wrapper */}
                <div className="w-12 h-12 rounded-xl bg-gray-100/80 group-hover:bg-brand-mint/10 border border-gray-200/50 group-hover:border-brand-mint/30 flex items-center justify-center mb-5 transition-all duration-300">
                  <Icon className="w-5 h-5 text-gray-500 group-hover:text-brand-mint-dark transition-colors" />
                </div>

                {/* Text Title & description */}
                <h3 className="font-poppins font-bold text-base text-gray-900 tracking-wide mb-2">
                  {item.title}
                </h3>
                <p className="font-inter text-xs text-gray-600 leading-relaxed">
                  {item.desc}
                </p>
              </motion.div>
            );
          })}
        </motion.div>

      </div>
    </section>
  );
}
