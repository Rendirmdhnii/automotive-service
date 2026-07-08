"use client";

import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  MessageSquare,
  Search,
  FileSpreadsheet,
  Settings,
  ShieldCheck,
  CheckCircle2,
} from "lucide-react";

const STEPS = [
  {
    icon: MessageSquare,
    title: "1. Booking & Registrasi",
    desc: "Hubungi kami via WhatsApp, isi formulir booking online, atau langsung datang ke bengkel kami.",
  },
  {
    icon: Search,
    title: "2. Diagnosa Mekanik",
    desc: "Mekanik kami melakukan pemeriksaan awal dan diagnostik kelistrikan menggunakan OBD scanner komputer.",
  },
  {
    icon: FileSpreadsheet,
    title: "3. Estimasi & Persetujuan",
    desc: "Kami merinci masalah, daftar sparepart yang perlu diganti, beserta estimasi biaya sebelum memulai perbaikan.",
  },
  {
    icon: Settings,
    title: "4. Eksekusi Servis",
    desc: "Pengerjaan servis dilakukan secara presisi menggunakan peralatan modern dan suku cadang orisinal.",
  },
  {
    icon: ShieldCheck,
    title: "5. Uji Kualitas (QC)",
    desc: "Kendaraan diuji coba oleh kepala mekanik (test drive) untuk memastikan semua keluhan telah teratasi sepenuhnya.",
  },
  {
    icon: CheckCircle2,
    title: "6. Serah Terima & Garansi",
    desc: "Penyerahan kendaraan beserta nota rincian perbaikan dan aktivasi garansi servis resmi dari IPIN MOTOR.",
  },
];

export default function ProcessTimeline() {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });

  const lineVariants = {
    hidden: { scaleY: 0 },
    visible: {
      scaleY: 1,
      transition: { duration: 1.5, ease: "easeInOut" as const },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: (index: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        type: "spring" as const,
        stiffness: 100,
        damping: 15,
        delay: index * 0.15,
      },
    }),
  };

  return (
    <section id="process" className="relative py-24 bg-gray-50/50 border-y border-gray-100">
      {/* Background radial gradient */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full bg-brand-mint/5 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="font-poppins font-bold text-xs uppercase tracking-[0.2em] text-brand-mint">
            Alur Kerja Kami
          </span>
          <h2 className="font-poppins font-extrabold text-3xl sm:text-4xl lg:text-5xl tracking-tight leading-tight text-gray-900 mt-3">
            Bagaimana Kami Merawat <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-mint to-brand-mint-dark">
              Kendaraan Anda
            </span>
          </h2>
          <div className="w-20 h-1 bg-brand-mint mx-auto mt-6 rounded-full" />
        </div>

        {/* Timeline body */}
        <div className="relative max-w-4xl mx-auto" ref={containerRef}>
          
          {/* Vertical Connecting Line (Desktop) */}
          <motion.div
            variants={lineVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="absolute left-4 md:left-1/2 top-4 bottom-4 w-[2px] bg-gradient-to-b from-brand-mint via-brand-mint/50 to-gray-200 origin-top transform md:-translate-x-1/2 hidden md:block"
          />
          
          {/* Vertical Connecting Line (Mobile) */}
          <motion.div
            variants={lineVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="absolute left-6 top-4 bottom-4 w-[2px] bg-gradient-to-b from-brand-mint via-brand-mint/50 to-gray-200 origin-top md:hidden"
          />

          <div className="space-y-12">
            {STEPS.map((step, idx) => {
              const Icon = step.icon;
              const isEven = idx % 2 === 0;

              return (
                <div
                  key={idx}
                  className={`flex flex-col md:flex-row items-start ${
                    isEven ? "md:flex-row-reverse" : ""
                  } relative`}
                >
                  {/* Timeline Dot Indicator */}
                  <div className="absolute left-6 md:left-1/2 top-6 w-5 h-5 rounded-full border-4 border-white bg-brand-mint -translate-x-[9px] md:-translate-x-2.5 z-20 shadow-[0_0_10px_rgba(16,185,129,0.5)]" />

                  {/* Empty space for spacing on desktop */}
                  <div className="w-full md:w-1/2 hidden md:block" />

                  {/* Step Card Content */}
                  <motion.div
                    custom={idx}
                    variants={itemVariants}
                    initial="hidden"
                    animate={isInView ? "visible" : "hidden"}
                    className="w-full md:w-1/2 pl-16 md:pl-0 md:px-8"
                  >
                    <div className="glass-card p-6 rounded-2xl border border-black/5 relative group">
                      {/* Background Hover Glow */}
                      <div className="absolute inset-0 bg-gradient-to-br from-brand-mint/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl" />

                      <div className="flex gap-4">
                        {/* Step Icon */}
                        <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-brand-mint/10 border border-brand-mint/20 flex items-center justify-center shadow-inner group-hover:bg-brand-mint group-hover:border-brand-mint transition-all duration-300">
                          <Icon className="w-5 h-5 text-brand-mint-dark group-hover:text-white transition-colors" />
                        </div>

                        {/* Title & Desc */}
                        <div className="flex flex-col">
                          <h3 className="font-poppins font-bold text-base text-gray-900 tracking-wide">
                            {step.title}
                          </h3>
                          <p className="font-inter text-xs text-gray-600 mt-1.5 leading-relaxed">
                            {step.desc}
                          </p>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
