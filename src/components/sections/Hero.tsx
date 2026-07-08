"use client";

import React from "react";
import { motion } from "framer-motion";
import { Calendar, PhoneCall, MessageCircle } from "lucide-react";

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
      className="relative min-screen-dynamic-height pt-32 pb-20 flex items-center justify-center overflow-hidden bg-black"
      style={{
        backgroundImage: "radial-gradient(circle at center, rgba(18, 18, 20, 0.4) 0%, rgba(11, 11, 12, 1) 90%), url('https://images.unsplash.com/photo-1617814076367-b759c7d7e738?auto=format&fit=crop&w=1920&q=80')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Background Overlays for Premium Cinematic Feel */}
      <div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-brand-dark/40 to-transparent" />
      <div className="absolute -top-40 -left-40 w-96 h-96 rounded-full bg-brand-red/10 blur-[120px] animate-pulse-slow" />
      <div className="absolute -bottom-40 -right-40 w-96 h-96 rounded-full bg-brand-red/10 blur-[120px] animate-pulse-slow" />

      {/* Grid Pattern overlay */}
      <div 
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: "radial-gradient(rgba(255,255,255,0.15) 1px, transparent 1px)",
          backgroundSize: "24px 24px"
        }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10">
        {/* Tagline Badge */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-brand-red/30 bg-brand-red/10 backdrop-blur-md mb-8 shadow-[0_0_15px_rgba(220,38,38,0.2)]"
        >
          <span className="w-2 h-2 rounded-full bg-brand-red animate-ping" />
          <span className="font-poppins text-xs font-semibold uppercase tracking-[0.25em] text-white">
            KALIAN SEMUA LUAR BIASA
          </span>
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="font-poppins font-black text-4xl sm:text-6xl lg:text-7xl tracking-tight leading-[1.1] mb-6"
        >
          <span className="text-white">INGAT BENGKEL MOBIL,</span>
          <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-red via-brand-red-light to-white text-glow-red">
            INGAT IPIN MOTOR.
          </span>
        </motion.h1>

        {/* Subheadline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="max-w-3xl mx-auto font-inter text-base sm:text-xl text-brand-gray/90 leading-relaxed mb-12"
        >
          Solusi servis mobil, perawatan berkala, dan layanan towing darurat 24 jam di Sidoarjo dengan teknisi berpengalaman dan peralatan modern.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6"
        >
          {/* Booking Servis */}
          <a
            href="#booking"
            onClick={(e) => scrollToSection(e, "#booking")}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-xl bg-white hover:bg-brand-silver text-black font-poppins font-bold text-base transition-all duration-300 transform hover:-translate-y-1 shadow-[0_4px_20px_rgba(255,255,255,0.15)] group"
          >
            <Calendar className="w-5 h-5 transition-transform group-hover:scale-110" />
            Booking Servis
          </a>

          {/* Panggil Towing */}
          <a
            href="#towing"
            onClick={(e) => scrollToSection(e, "#towing")}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-xl bg-brand-red hover:bg-brand-red-light text-white font-poppins font-bold text-base transition-all duration-300 transform hover:-translate-y-1 shadow-[0_4px_25px_rgba(220,38,38,0.35)] relative overflow-hidden group"
          >
            <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
            <PhoneCall className="w-5 h-5 animate-bounce" />
            Panggil Towing (24J)
          </a>

          {/* Hubungi Admin */}
          <a
            href="https://api.whatsapp.com/send/?phone=6282338325621"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-xl border border-white/10 hover:border-brand-red/35 bg-white/5 hover:bg-brand-red/5 text-white hover:text-brand-red-light font-poppins font-bold text-base transition-all duration-300 transform hover:-translate-y-1 backdrop-blur-md group"
          >
            <MessageCircle className="w-5 h-5 transition-transform group-hover:scale-110" />
            Hubungi Admin
          </a>
        </motion.div>
      </div>

      {/* Decorative Bottom Fade */}
      <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-brand-dark to-transparent pointer-events-none" />
    </section>
  );
}
