"use client";

import React, { useEffect, useRef } from "react";
import { motion, useMotionValue, useTransform, animate, useInView } from "framer-motion";
import { Car, ShieldCheck, Award, Truck } from "lucide-react";

interface CounterProps {
  value: number;
  duration?: number;
}

function CounterNumber({ value, duration = 2.5 }: CounterProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const motionValue = useMotionValue(0);
  const rounded = useTransform(motionValue, (latest) => Math.round(latest).toLocaleString("id-ID"));

  useEffect(() => {
    if (isInView) {
      const controls = animate(motionValue, value, { duration, ease: "easeOut" });
      return controls.stop;
    }
  }, [isInView, motionValue, value, duration]);

  return <motion.span ref={ref}>{rounded}</motion.span>;
}

const STATS = [
  {
    icon: Car,
    value: 12500,
    suffix: "+",
    label: "Mobil Diservis",
    description: "Semua tipe & merek mobil",
  },
  {
    icon: ShieldCheck,
    value: 99,
    suffix: "%",
    label: "Pelanggan Puas",
    description: "Berdasarkan ulasan langsung",
  },
  {
    icon: Award,
    value: 15,
    suffix: "+",
    label: "Tahun Pengalaman",
    description: "Melayani sejak tahun 2011",
  },
  {
    icon: Truck,
    value: 3200,
    suffix: "+",
    label: "Towing Berhasil",
    description: "Penyelamatan darurat 24 Jam",
  },
];

export default function Counters() {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
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
    <section id="counters" className="relative py-16 bg-brand-dark/40 border-y border-white/5 z-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={containerRef}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {STATS.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={index}
                variants={cardVariants}
                className="glass-card-no-hover p-6 rounded-2xl flex items-center gap-5 border border-white/5 relative group overflow-hidden"
              >
                {/* Decorative Hover Glow background */}
                <div className="absolute inset-0 bg-gradient-to-br from-brand-red/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                {/* Icon wrapper */}
                <div className="w-14 h-14 rounded-xl bg-white/5 group-hover:bg-brand-red/10 flex items-center justify-center border border-white/10 group-hover:border-brand-red/35 transition-all duration-300 shadow-inner">
                  <Icon className="w-6 h-6 text-brand-silver group-hover:text-brand-red-light transition-colors" />
                </div>

                {/* Text Content */}
                <div className="flex flex-col">
                  <span className="font-poppins font-extrabold text-3xl sm:text-4xl text-white tracking-tight flex items-baseline">
                    <CounterNumber value={stat.value} />
                    <span className="text-brand-red text-2xl sm:text-3xl ml-0.5">{stat.suffix}</span>
                  </span>
                  <span className="font-poppins font-semibold text-sm text-brand-silver/90 mt-1 tracking-wide">
                    {stat.label}
                  </span>
                  <span className="font-inter text-xs text-brand-gray/80 mt-0.5">
                    {stat.description}
                  </span>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
