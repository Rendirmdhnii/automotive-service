"use client";

import React from "react";
import Link from "next/link";
import { Phone, MapPin, Clock } from "lucide-react";
import Image from "next/image";
import { ASSETS } from "@/lib/assets";

export default function Footer() {
  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
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
    <footer className="relative bg-[#0B0C0E] border-t border-white/5 pt-16 pb-8 z-20 overflow-hidden">
      {/* Background Graphic Lines */}
      <div className="absolute bottom-0 right-0 w-80 h-80 rounded-full bg-brand-mint/5 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-16 pb-12 border-b border-white/5">
          
          {/* Column 1: Brand Info */}
          <div className="lg:col-span-4 flex flex-col">
            <Link
              href="#"
              onClick={(e) => handleNavClick(e, "#")}
              className="flex items-center gap-2 group w-max mb-6 focus:outline-none"
            >
              <div className="relative w-10 h-10 rounded-lg overflow-hidden flex items-center justify-center transition-all duration-300 group-hover:scale-105 group-hover:rotate-12 shadow-[0_0_15px_rgba(16,185,129,0.15)] bg-white/5 border border-white/10">
                <Image
                  src={ASSETS.logo}
                  alt="IPIN MOTOR Logo"
                  width={40}
                  height={40}
                  className="object-contain w-full h-full p-1"
                />
              </div>
              <div className="flex flex-col">
                <span className="font-poppins font-extrabold text-xl tracking-wider text-white">
                  IPIN <span className="text-brand-mint">MOTOR</span>
                </span>
                <span className="text-[9px] font-medium uppercase tracking-[0.2em] text-gray-400 -mt-1">
                  Premium Auto Service
                </span>
              </div>
            </Link>

            <p className="font-inter text-xs text-gray-400 leading-relaxed mb-6">
              Bengkel mobil premium dan spesialis towing 24 jam terpercaya di Sidoarjo. Kami merawat mobil Anda layaknya milik kami sendiri.
            </p>

            {/* Slogan & Tagline */}
            <div className="flex flex-col gap-1 mb-6">
              <span className="font-poppins font-bold text-xs text-white uppercase tracking-wider">
                Ingat Bengkel Mobil, Ingat IPIN MOTOR.
              </span>
              <span className="font-poppins font-semibold text-[10px] text-brand-mint-light uppercase tracking-[0.2em]">
                &ldquo;KALIAN SEMUA LUAR BIASA&rdquo;
              </span>
            </div>

            {/* Social Icons */}
            <div className="flex items-center gap-3">
              {/* Instagram */}
              <a
                href="https://www.instagram.com/ipinmotor_sidoarjo/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-white/5 hover:bg-brand-mint border border-white/10 hover:border-brand-mint flex items-center justify-center text-gray-400 hover:text-white transition-all duration-300"
                aria-label="Instagram IPIN MOTOR"
              >
                <svg
                  className="w-4.5 h-4.5 stroke-current font-normal"
                  viewBox="0 0 24 24"
                  fill="none"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                </svg>
              </a>
              {/* TikTok */}
              <a
                href="https://www.tiktok.com/@ipinmotorsidoarjo"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-white/5 hover:bg-brand-mint border border-white/10 hover:border-brand-mint flex items-center justify-center text-gray-400 hover:text-white transition-all duration-300"
                aria-label="TikTok IPIN MOTOR"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.17-2.89-.6-4.09-1.51-.71-.53-1.3-1.22-1.74-2v6.6c0 1.96-.53 3.89-1.74 5.39-1.51 1.94-4.01 3.09-6.49 2.87-2.99-.21-5.78-2.48-6.62-5.4-1.02-3.41.69-7.39 3.99-8.77 1.36-.59 2.91-.74 4.38-.46v4.08c-1.12-.33-2.39-.14-3.32.55-.99.71-1.46 2-1.29 3.2.17 1.25.96 2.4 2.14 2.85.99.39 2.13.25 2.99-.34.72-.49 1.14-1.31 1.15-2.18l.02-14.4c.01-.01.01-.02.01-.03z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="lg:col-span-3 flex flex-col md:pl-6">
            <h4 className="font-poppins font-bold text-sm text-white tracking-wider uppercase mb-6 border-l-2 border-brand-mint pl-2.5">
              Menu Cepat
            </h4>
            <ul className="space-y-3">
              {[
                { name: "Tentang Kami", href: "#about" },
                { name: "Layanan Servis", href: "#services" },
                { name: "Emergency Towing", href: "#towing" },
                { name: "Alur Proses", href: "#process" },
                { name: "Booking Online", href: "#booking" },
                { name: "Galeri Bengkel", href: "#gallery" },
              ].map((link, idx) => (
                <li key={idx}>
                  <a
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className="font-inter text-xs text-gray-400 hover:text-brand-mint-light transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Operational Hours */}
          <div className="lg:col-span-2 flex flex-col">
            <h4 className="font-poppins font-bold text-sm text-white tracking-wider uppercase mb-6 border-l-2 border-brand-mint pl-2.5">
              Jam Kerja
            </h4>
            <div className="flex flex-col gap-4 font-inter text-xs text-gray-400">
              <div className="flex items-start gap-2.5">
                <Clock className="w-4.5 h-4.5 text-brand-mint-light flex-shrink-0 mt-0.5" />
                <div className="flex flex-col">
                  <span className="font-semibold text-white">Senin - Sabtu:</span>
                  <span>08:00 - 17:00 WIB</span>
                </div>
              </div>
              <div className="flex items-start gap-2.5">
                <Clock className="w-4.5 h-4.5 text-brand-mint-light flex-shrink-0 mt-0.5" />
                <div className="flex flex-col">
                  <span className="font-semibold text-white">Minggu:</span>
                  <span className="text-brand-mint-light font-medium">Bengkel Libur</span>
                  <span className="text-[10px] text-gray-400 italic mt-0.5">Towing 24 Jam tetap Siaga</span>
                </div>
              </div>
            </div>
          </div>

          {/* Column 4: Contact details */}
          <div className="lg:col-span-3 flex flex-col">
            <h4 className="font-poppins font-bold text-sm text-white tracking-wider uppercase mb-6 border-l-2 border-brand-mint pl-2.5">
              Alamat Kontak
            </h4>
            <ul className="space-y-4 font-inter text-xs text-gray-400">
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4.5 h-4.5 text-brand-mint-light flex-shrink-0 mt-0.5" />
                <span>Sidoarjo, Jawa Timur, Indonesia</span>
              </li>
              <li className="flex items-start gap-2.5">
                <Phone className="w-4.5 h-4.5 text-brand-mint-light flex-shrink-0 mt-0.5" />
                <div className="flex flex-col">
                  <span>+62 823-3832-5621 (Admin)</span>
                  <span>+62 823-3824-4401 (Sparepart)</span>
                </div>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom copyright bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between pt-8 text-center sm:text-left">
          <p className="font-inter text-[11px] text-gray-500">
            &copy; {new Date().getFullYear()} IPIN MOTOR. Hak Cipta Dilindungi Undang-Undang.
          </p>
          <p className="font-inter text-[10px] text-gray-500 mt-2 sm:mt-0">
            Premium Automotive Solution Sidoarjo
          </p>
        </div>
      </div>
    </footer>
  );
}
