"use client";

import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { PhoneCall, Truck, AlertTriangle, ShieldCheck, MapPin, Clock } from "lucide-react";
import Image from "next/image";

const TOWING_CASES = [
  { title: "Mobil Mogok", desc: "Mesin mati mendadak di jalan tol, jalan raya, atau di rumah." },
  { title: "Mobil Kecelakaan", desc: "Evakuasi aman dari lokasi benturan ke bengkel atau rumah." },
  { title: "Mobil Tidak Bisa Hidup", desc: "Masalah aki drop, dinamo starter mati, atau sistem kelistrikan macet." },
  { title: "Evakuasi Kendaraan", desc: "Penyelamatan kendaraan terperosok, terjebak banjir, atau tergelincir." },
  { title: "Antar Kendaraan", desc: "Pengiriman mobil baru, mobil antik, sportscar, atau mutasi antar kota." },
];

export default function Towing() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  return (
    <section
      id="towing"
      className="relative py-24 bg-black overflow-hidden border-y border-brand-red/10"
      ref={sectionRef}
    >
      {/* Background Graphic Grid */}
      <div 
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: "linear-gradient(45deg, #DC2626 25%, transparent 25%), linear-gradient(-45deg, #DC2626 25%, transparent 25%), linear-gradient(45deg, transparent 75%, #DC2626 75%), linear-gradient(-45deg, transparent 75%, #DC2626 75%)",
          backgroundSize: "40px 40px",
          backgroundPosition: "0 0, 0 20px, 20px -20px, -20px 0"
        }}
      />

      {/* Red Ambient Glows */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-4xl h-96 rounded-full bg-brand-red/10 blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          {/* Left Column: Emergency Towing details */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-7 flex flex-col"
          >
            {/* Live Indicator */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-brand-red bg-brand-red/10 backdrop-blur-md mb-6 w-max shadow-[0_0_15px_rgba(220,38,38,0.3)]">
              <span className="w-2.5 h-2.5 rounded-full bg-brand-red animate-ping" />
              <span className="font-poppins text-xs font-bold uppercase tracking-[0.2em] text-white">
                LAYANAN DARURAT 24 JAM
              </span>
            </div>

            <h2 className="font-poppins font-black text-4xl sm:text-5xl lg:text-6xl tracking-tight leading-none text-white mb-6">
              Butuh Derek Cepat? <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-red via-brand-red-light to-white text-glow-red">
                Towing IPIN MOTOR Siap!
              </span>
            </h2>

            <p className="font-inter text-base sm:text-lg text-brand-gray/95 leading-relaxed mb-8">
              Kondisi darurat di jalan bisa terjadi kapan saja. Layanan derek towing 24 jam kami didukung armada modern (flatbed/gendong) dan tim responsif untuk mengangkut kendaraan Anda dengan aman ke lokasi tujuan.
            </p>

            {/* Quick Badge points */}
            <div className="grid grid-cols-3 gap-4 mb-8">
              <div className="flex flex-col p-4 rounded-xl bg-white/[0.02] border border-white/5 text-center">
                <Clock className="w-5 h-5 text-brand-red-light mx-auto mb-2" />
                <span className="font-poppins font-bold text-xs text-white">Respon Cepat</span>
              </div>
              <div className="flex flex-col p-4 rounded-xl bg-white/[0.02] border border-white/5 text-center">
                <MapPin className="w-5 h-5 text-brand-red-light mx-auto mb-2" />
                <span className="font-poppins font-bold text-xs text-white">Area Sidoarjo</span>
              </div>
              <div className="flex flex-col p-4 rounded-xl bg-white/[0.02] border border-white/5 text-center">
                <ShieldCheck className="w-5 h-5 text-brand-red-light mx-auto mb-2" />
                <span className="font-poppins font-bold text-xs text-white">Garansi Aman</span>
              </div>
            </div>

            {/* Towing Cases Bullet Checklist */}
            <h3 className="font-poppins font-bold text-sm uppercase tracking-[0.15em] text-white/90 mb-4">
              Kasus Penyelamatan Towing:
            </h3>
            <div className="space-y-3.5 mb-10">
              {TOWING_CASES.map((tcase, idx) => (
                <div key={idx} className="flex items-start gap-3">
                  <div className="mt-1 flex-shrink-0 w-5 h-5 rounded-full bg-brand-red/10 border border-brand-red/30 flex items-center justify-center">
                    <span className="w-1.5 h-1.5 rounded-full bg-brand-red-light" />
                  </div>
                  <div>
                    <h4 className="font-poppins font-bold text-sm text-white">{tcase.title}</h4>
                    <p className="font-inter text-xs text-brand-gray/90 mt-0.5">{tcase.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* CTA PANGGIL TOWING SEKARANG */}
            <a
              href="https://api.whatsapp.com/send/?phone=6282338325621"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-max inline-flex items-center justify-center gap-3.5 px-10 py-5 rounded-2xl bg-brand-red hover:bg-brand-red-light text-white font-poppins font-extrabold text-lg transition-all duration-300 transform hover:-translate-y-1.5 shadow-[0_0_35px_rgba(220,38,38,0.5)] border border-brand-red-light/30 relative overflow-hidden group"
            >
              <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
              <PhoneCall className="w-6 h-6 animate-pulse" />
              Panggil Towing Sekarang
            </a>
          </motion.div>

          {/* Right Column: Towing Image Graphic */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-5 relative"
          >
            {/* Background red alert box */}
            <div className="absolute -inset-4 rounded-3xl border border-brand-red/20 pointer-events-none scale-102" />
            
            {/* Warning indicator decoration */}
            <div className="absolute -top-3 -right-3 w-10 h-10 rounded-full bg-brand-red flex items-center justify-center animate-bounce shadow-[0_0_15px_rgba(220,38,38,0.5)]">
              <AlertTriangle className="w-5 h-5 text-white" />
            </div>

            <div className="relative rounded-2xl overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.6)] border border-brand-red/30 group aspect-[4/3] sm:aspect-video lg:aspect-[3/4]">
              {/* Unsplash Image - Flatbed towing truck towing a car */}
              <Image
                src="https://images.unsplash.com/photo-1563720223185-11003d516935?auto=format&fit=crop&w=800&q=80"
                alt="Armada Mobil Towing Derek IPIN MOTOR"
                fill
                sizes="(max-width: 1024px) 100vw, 40vw"
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                priority={false}
              />
              {/* Image Gradient Vignette */}
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />

              {/* Status Indicator inside Image */}
              <div className="absolute bottom-6 left-6 right-6 p-4 rounded-xl glass-card-no-hover border border-brand-red/20">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-brand-red/10 border border-brand-red/30 flex items-center justify-center">
                    <Truck className="w-4 h-4 text-brand-red-light" />
                  </div>
                  <div className="flex flex-col">
                    <span className="font-poppins font-bold text-xs text-white">Armada Gendong (Flatbed)</span>
                    <span className="font-inter text-[10px] text-brand-gray/80">Siap meluncur dalam hitungan menit</span>
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
