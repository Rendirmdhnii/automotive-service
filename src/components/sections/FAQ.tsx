"use client";

import React, { useState, useRef } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import { ChevronDown, HelpCircle } from "lucide-react";

const FAQ_DATA = [
  {
    question: "Berapa biaya servis di IPIN MOTOR?",
    answer:
      "Biaya servis sangat bervariasi tergantung tipe mobil, jenis keluhan, dan sparepart yang diganti. Kami mengutamakan transparansi penuh: diagnosa awal akan dilakukan terlebih dahulu, lalu kami akan memberikan estimasi biaya terperinci untuk disetujui sebelum pengerjaan dimulai.",
  },
  {
    question: "Apakah bisa memesan layanan towing derek saja?",
    answer:
      "Tentu saja bisa. Kami menyediakan layanan towing 24 jam untuk segala keperluan, baik dalam kondisi darurat (mogok, kecelakaan) maupun pengiriman mobil jarak dekat atau antarkota. Anda tidak harus menservis mobil Anda di bengkel kami untuk memakai jasa towing.",
  },
  {
    question: "Apakah bengkel IPIN MOTOR buka pada hari Minggu?",
    answer:
      "Bengkel fisik kami buka hari Senin sampai Sabtu pukul 08.00 - 17.00 WIB. Namun, khusus untuk layanan Emergency Towing Derek 24 Jam dan bantuan darurat jalan raya, tim kami tetap siaga dan beroperasi penuh selama hari Minggu maupun hari libur nasional.",
  },
  {
    question: "Apakah menerima semua jenis dan merek mobil?",
    answer:
      "Ya, kami menerima semua merek mobil baik pabrikan Jepang (Toyota, Honda, Daihatsu, Suzuki, Mitsubishi, Nissan, Mazda) maupun pabrikan Eropa/AS (BMW, Mercedes-Benz, Chevrolet, Ford) untuk berbagai jenis transmisi manual maupun otomatis.",
  },
  {
    question: "Berapa lama estimasi waktu pengerjaan servis?",
    answer:
      "Untuk servis ringan, ganti oli, dan tune up biasa berkisar antara 1 hingga 2 jam. Untuk perbaikan kaki-kaki, AC, atau kelistrikan bisa berkisar setengah hari hingga satu hari penuh. Sedangkan servis berat seperti overhaul mesin membutuhkan waktu 3 hingga 7 hari kerja tergantung ketersediaan suku cadang.",
  },
];

interface AccordionItemProps {
  question: string;
  answer: string;
  isOpen: boolean;
  onToggle: () => void;
}

function AccordionItem({ question, answer, isOpen, onToggle }: AccordionItemProps) {
  return (
    <div className="glass-card-no-hover rounded-2xl border border-white/5 overflow-hidden transition-all duration-300">
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between p-5 text-left focus:outline-none hover:bg-white/[0.02] transition-colors"
      >
        <span className="font-poppins font-bold text-sm sm:text-base text-white tracking-wide flex items-center gap-3">
          <HelpCircle className="w-5 h-5 text-brand-red-light flex-shrink-0" />
          {question}
        </span>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.2 }}
          className="flex-shrink-0"
        >
          <ChevronDown className="w-5 h-5 text-brand-gray" />
        </motion.div>
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
          >
            <div className="px-5 pb-5 pt-1 border-t border-white/5">
              <p className="font-inter text-xs sm:text-sm text-brand-gray/95 leading-relaxed">
                {answer}
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function FAQ() {
  const [openIdx, setOpenIdx] = useState<number | null>(0);
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  const handleToggle = (idx: number) => {
    setOpenIdx(openIdx === idx ? null : idx);
  };

  return (
    <section id="faq" className="relative py-24 bg-brand-dark/40 border-t border-white/5" ref={sectionRef}>
      {/* Background decoration */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full bg-brand-red/5 blur-[120px] pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="font-poppins font-bold text-xs uppercase tracking-[0.2em] text-brand-red">
            Tanya Jawab
          </span>
          <h2 className="font-poppins font-extrabold text-3xl sm:text-4xl lg:text-5xl tracking-tight leading-tight text-white mt-3">
            Pertanyaan yang Sering <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-red to-white">
              Diajukan (FAQ)
            </span>
          </h2>
          <div className="w-20 h-1 bg-brand-red mx-auto mt-6 rounded-full" />
        </div>

        {/* Accordions */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="space-y-4"
        >
          {FAQ_DATA.map((faq, idx) => (
            <AccordionItem
              key={idx}
              question={faq.question}
              answer={faq.answer}
              isOpen={openIdx === idx}
              onToggle={() => handleToggle(idx)}
            />
          ))}
        </motion.div>

      </div>
    </section>
  );
}
