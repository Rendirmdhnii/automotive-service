"use client";

import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Star, Quote, User } from "lucide-react";

const TESTIMONIALS_DATA = [
  {
    name: "Budi Santoso",
    car: "Toyota Innova Reborn",
    rating: 5,
    comment:
      "Sangat puas servis di IPIN MOTOR. Keluhan mesin loyo langsung beres setelah tune up dan scan komputer. Biayanya transparan dan dijelaskan detail sebelum dikerjakan. Recommended!",
  },
  {
    name: "Hendra Wijaya",
    car: "Honda Civic Turbo",
    rating: 5,
    comment:
      "Towing IPIN MOTOR penyelamat! Mobil mogok jam 2 pagi di tol Sidoarjo, telepon admin langsung direspon cepat. Truk towing gendong datang kurang dari 30 menit. Penanganan sangat profesional.",
  },
  {
    name: "Rina Kartika",
    car: "Honda HR-V",
    rating: 5,
    comment:
      "AC mobil yang tadinya panas sekarang jadi dingin banget. Pengerjaan cepat, montirnya ramah dan ruang tunggunya nyaman dilengkapi Wi-Fi dan kopi gratis. Harga bersahabat.",
  },
  {
    name: "Ahmad Hidayat",
    car: "Mitsubishi Pajero Sport",
    rating: 5,
    comment:
      "Masalah kaki-kaki mobil gluduk-gluduk akhirnya teratasi setelah ganti shockbreaker dan spooring balancing di sini. Setir kembali stabil dan lurus. Mantap layanannya!",
  },
  {
    name: "Dewi Lestari",
    car: "Suzuki Ertiga",
    rating: 5,
    comment:
      "Baru pertama kali coba booking servis online lewat web IPIN MOTOR, ternyata praktis sekali. Begitu sampai bengkel langsung dilayani tanpa antre lama. Sparepart dijamin orisinal.",
  },
  {
    name: "Ferry Irawan",
    car: "Toyota Fortuner",
    rating: 5,
    comment:
      "Transmisi matik sempat delay dan jedug. Setelah konsultasi gratis, mekanik menyarankan kuras oli matik dan perbaikan minor. Hasilnya sekarang lancar tanpa kendala. Sangat jujur dan ahli!",
  },
];

export default function Testimonials() {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
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
    <section id="testimonials" className="relative py-24 bg-white overflow-hidden">
      {/* Background neon elements */}
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-brand-mint/5 blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="font-poppins font-bold text-xs uppercase tracking-[0.2em] text-brand-mint">
            Testimoni Pelanggan
          </span>
          <h2 className="font-poppins font-extrabold text-3xl sm:text-4xl lg:text-5xl tracking-tight leading-tight text-gray-900 mt-3">
            Apa Kata Mereka Tentang <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-mint to-brand-mint-dark">
              Pelayanan IPIN MOTOR?
            </span>
          </h2>
          <div className="w-20 h-1 bg-brand-mint mx-auto mt-6 rounded-full" />
        </div>

        {/* Testimonials Grid */}
        <motion.div
          ref={containerRef}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {TESTIMONIALS_DATA.map((testi, idx) => (
            <motion.div
              key={idx}
              variants={cardVariants}
              className="glass-card p-6 rounded-2xl border border-black/5 flex flex-col justify-between relative group"
            >
              {/* Quote Icon Decor */}
              <div className="absolute top-6 right-6 opacity-[0.05] group-hover:opacity-[0.1] transition-opacity duration-300 pointer-events-none">
                <Quote className="w-12 h-12 text-gray-400" />
              </div>

              <div>
                {/* Stars Layout */}
                <div className="flex items-center gap-1 mb-5">
                  {[...Array(testi.rating)].map((_, sIdx) => (
                    <Star key={sIdx} className="w-4.5 h-4.5 fill-amber-400 text-amber-400" />
                  ))}
                </div>

                {/* Review Text */}
                <p className="font-inter text-xs sm:text-sm text-gray-600 leading-relaxed italic mb-6">
                  &ldquo;{testi.comment}&rdquo;
                </p>
              </div>

              {/* User Block */}
              <div className="flex items-center gap-3.5 pt-4 border-t border-black/5">
                <div className="w-10 h-10 rounded-full bg-gray-100 border border-gray-200/50 flex items-center justify-center">
                  <User className="w-5 h-5 text-gray-500" />
                </div>
                <div className="flex flex-col">
                  <span className="font-poppins font-bold text-sm text-gray-900 tracking-wide">
                    {testi.name}
                  </span>
                  <span className="font-inter text-[10px] text-brand-mint-dark font-semibold tracking-wide">
                    {testi.car}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
