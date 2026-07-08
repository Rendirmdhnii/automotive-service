"use client";

import React from "react";
import { motion } from "framer-motion";
import { Calendar, PhoneCall, MessageCircle } from "lucide-react";
import Image from "next/image";
import { ASSETS } from "@/lib/assets";

export default function Hero() {
  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetId = href.replace("#", "");
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      const offset = 80;
      const targetPosition = targetElement.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({
        top: targetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <section
      id="hero"
      className="relative min-screen-dynamic-height pt-36 pb-20 flex items-center justify-center overflow-hidden bg-gradient-to-br from-emerald-50 via-teal-50/20 to-white"
    >
      {/* Background Image Asset with low opacity for premium overlay */}
      <div className="absolute inset-0 z-0 opacity-10 pointer-events-none">
        <Image
          src={ASSETS.heroBg}
          alt="IPIN MOTOR Bengkel Premium Sidoarjo"
          fill
          className="object-cover"
          priority
        />
      </div>

      {/* Background neon glows in light theme */}
      <div className="absolute -top-40 -left-40 w-96 h-96 rounded-full bg-brand-mint/10 blur-[120px] animate-pulse-slow pointer-events-none" />
      <div className="absolute -bottom-40 -right-40 w-96 h-96 rounded-full bg-brand-mint/10 blur-[120px] pointer-events-none" />

      {/* Grid Pattern overlay */}
      <div 
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(rgba(16,185,129,0.3) 1px, transparent 1px)",
          backgroundSize: "24px 24px"
        }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10 w-full overflow-x-hidden">
        {/* Tagline Badge */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-brand-mint/25 bg-brand-mint/10 backdrop-blur-md mb-8 shadow-[0_4px_15px_rgba(16,185,129,0.08)]"
        >
          <span className="w-2 h-2 rounded-full bg-brand-mint animate-ping" />
          <span className="font-poppins text-xs font-semibold uppercase tracking-[0.25em] text-brand-mint-dark">
            KALIAN SEMUA LUAR BIASA
          </span>
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="font-poppins font-black text-3xl sm:text-4xl md:text-6xl lg:text-7xl tracking-tight leading-[1.15] mb-6"
        >
          <span className="text-gray-900">INGAT BENGKEL MOBIL,</span>
          <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-mint via-brand-mint-light to-brand-mint-dark text-glow-mint">
            INGAT IPIN MOTOR.
          </span>
        </motion.h1>

        {/* Subheadline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="max-w-3xl mx-auto font-inter text-sm sm:text-base md:text-lg text-gray-600 leading-relaxed mb-6"
        >
          Solusi servis mobil, perawatan berkala, dan layanan towing darurat 24 jam di Sidoarjo dengan teknisi berpengalaman dan peralatan modern.
        </motion.p>

        {/* Operational Hours Badge */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-emerald-100/80 text-emerald-800 border border-emerald-200/50 font-poppins text-xs font-bold uppercase tracking-wider mb-10"
        >
          BENGKEL BUKA: 08.00 - 23.00 WIB
        </motion.div>

        {/* CTA Buttons - Responsive Stacking */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-6 max-w-md md:max-w-none mx-auto w-full md:w-auto"
        >
          {/* Booking Servis - Premium Black */}
          <a
            href="#booking"
            onClick={(e) => scrollToSection(e, "#booking")}
            className="w-full md:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-xl bg-gray-900 hover:bg-black text-white font-poppins font-bold text-base transition-all duration-300 transform hover:-translate-y-1 shadow-[0_4px_20px_rgba(0,0,0,0.15)] group"
          >
            <Calendar className="w-5 h-5 transition-transform group-hover:scale-110" />
            Booking Servis
          </a>

          {/* Panggil Towing - Urgent Red */}
          <a
            href="#towing"
            onClick={(e) => scrollToSection(e, "#towing")}
            className="w-full md:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-xl bg-brand-red hover:bg-brand-red-light text-white font-poppins font-bold text-base transition-all duration-300 transform hover:-translate-y-1 shadow-[0_4px_25px_rgba(220,38,38,0.25)] relative overflow-hidden group"
          >
            <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
            <PhoneCall className="w-5 h-5 animate-bounce" />
            Panggil Towing (24J)
          </a>

          {/* Hubungi Admin - Outline Button */}
          <a
            href="https://api.whatsapp.com/send/?phone=6282338325621"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full md:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-xl border-2 border-gray-900 bg-transparent hover:bg-gray-50 text-gray-900 font-poppins font-bold text-base transition-all duration-300 transform hover:-translate-y-1 group"
          >
            <MessageCircle className="w-5 h-5 transition-transform group-hover:scale-110" />
            Hubungi Admin
          </a>
        </motion.div>
      </div>

      {/* Decorative Bottom Fade in Light Theme */}
      <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-white to-transparent pointer-events-none" />
    </section>
  );
}
