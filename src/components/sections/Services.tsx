"use client";

import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  Activity,
  Droplet,
  CalendarDays,
  Disc,
  Compass,
  Wind,
  Zap,
  Cpu,
  RefreshCw,
  Gauge,
  Scale,
  Search,
  Settings,
  AlertTriangle,
  ChevronRight,
} from "lucide-react";

const SERVICES_DATA = [
  {
    icon: Activity,
    title: "Tune Up",
    desc: "Mengembalikan performa mesin mobil ke kondisi optimal, membersihkan intake, dan menyetel ulang pembakaran.",
  },
  {
    icon: Droplet,
    title: "Ganti Oli",
    desc: "Layanan ganti oli mesin, oli transmisi, dan gardan menggunakan oli bersertifikasi dan filter berkualitas.",
  },
  {
    icon: CalendarDays,
    title: "Servis Berkala",
    desc: "Perawatan rutin paket kelipatan 5.000 / 10.000 KM untuk menjaga garansi dan keandalan berkendara.",
  },
  {
    icon: Disc,
    title: "Sistem Rem",
    desc: "Pemeriksaan kampas rem, bubut piringan cakram, kuras minyak rem, dan pembersihan komponen pengereman.",
  },
  {
    icon: Compass,
    title: "Kaki-Kaki Mobil",
    desc: "Perbaikan tierod, rack end, bushing, shockbreaker, dan link stabilizer agar berkendara kembali senyap.",
  },
  {
    icon: Wind,
    title: "AC Mobil",
    desc: "Kuras freon, ganti oli kompresor, pembersihan evaporator, dan filter kabin agar AC kembali dingin menggigil.",
  },
  {
    icon: Zap,
    title: "Kelistrikan Mobil",
    desc: "Uji kelistrikan kabel body, lampu, alternator, starter, aki mobil, dan sekring secara menyeluruh.",
  },
  {
    icon: Cpu,
    title: "Servis Mesin (Overhaul)",
    desc: "Turun setengah/total mesin untuk memperbaiki kebocoran oli, kompresi lemah, atau kerusakan silinder head.",
  },
  {
    icon: RefreshCw,
    title: "Perbaikan Transmisi",
    desc: "Servis girboks manual maupun matik (AT/CVT) yang mengalami slip, delay, atau hentakan keras.",
  },
  {
    icon: Gauge,
    title: "Spooring",
    desc: "Penyelarasan sudut kemiringan roda (toe/camber) sesuai spesifikasi pabrikan agar setir lurus presisi.",
  },
  {
    icon: Scale,
    title: "Balancing",
    desc: "Penyeimbangan distribusi berat ban dan velg guna menghilangkan getaran kemudi di kecepatan tinggi.",
  },
  {
    icon: Search,
    title: "Computer Scanner Diagnostic",
    desc: "Membaca kode error (DTC) pada ECU mobil untuk mendeteksi sensor rusak secara akurat dan cepat.",
  },
  {
    icon: Settings,
    title: "Penggantian Sparepart",
    desc: "Pemasangan suku cadang fast-moving maupun slow-moving dengan kualitas terjamin dan presisi.",
  },
  {
    icon: AlertTriangle,
    title: "Emergency Service",
    desc: "Penyelamatan darurat untuk mobil mogok di jalan, jumper aki, ganti ban bocor, atau bantuan mekanik panggilan.",
  },
];

export default function Services() {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, margin: "-50px" });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
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
    <section id="services" className="relative py-24 bg-gray-50/50 border-t border-gray-100">
      {/* Background glowing lights */}
      <div className="absolute top-1/4 right-0 w-96 h-96 rounded-full bg-brand-mint/5 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 left-0 w-96 h-96 rounded-full bg-brand-mint/5 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="font-poppins font-bold text-xs uppercase tracking-[0.2em] text-brand-mint">
            Layanan Kami
          </span>
          <h2 className="font-poppins font-extrabold text-3xl sm:text-4xl lg:text-5xl tracking-tight leading-tight text-gray-900 mt-3">
            Solusi Perawatan & Servis Lengkap <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-mint to-brand-mint-dark">
              Untuk Kendaraan Anda
            </span>
          </h2>
          <div className="w-20 h-1 bg-brand-mint mx-auto mt-6 rounded-full" />
        </div>

        {/* Services Grid - 1 col on mobile, 2/3/4 cols on desktop */}
        <motion.div
          ref={containerRef}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
        >
          {SERVICES_DATA.map((srv, idx) => {
            const Icon = srv.icon;
            return (
              <motion.div
                key={idx}
                variants={cardVariants}
                className="glass-card p-6 rounded-2xl flex flex-col justify-between group"
              >
                <div>
                  {/* Icon Block */}
                  <div className="w-12 h-12 rounded-xl bg-brand-mint/10 border border-brand-mint/20 flex items-center justify-center mb-5 shadow-inner">
                    <Icon className="w-6 h-6 text-brand-mint-dark" />
                  </div>

                  {/* Title & Desc */}
                  <h3 className="font-poppins font-bold text-base text-gray-900 tracking-wide mb-3">
                    {srv.title}
                  </h3>
                  <p className="font-inter text-xs text-gray-600 leading-relaxed">
                    {srv.desc}
                  </p>
                </div>

                {/* Card CTA decoration */}
                <div className="flex items-center gap-1 text-[11px] font-poppins font-bold uppercase tracking-wider text-brand-mint mt-5 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span>Konsultasi Gratis</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Global Section Bottom CTA */}
        <div className="text-center mt-16">
          <p className="font-inter text-sm text-gray-500 mb-4">
            Butuh servis darurat panggilan atau konsultasi perbaikan khusus?
          </p>
          <a
            href="#booking"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-brand-mint/45 hover:border-brand-mint bg-brand-mint/5 hover:bg-brand-mint/10 text-brand-mint-dark hover:text-white font-poppins font-bold text-sm tracking-wide transition-all"
          >
            Hubungi Mekanik Panggilan
          </a>
        </div>

      </div>
    </section>
  );
}
