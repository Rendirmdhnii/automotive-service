"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Phone } from "lucide-react";
import Image from "next/image";
import { ASSETS } from "@/lib/assets";

const NAV_ITEMS = [
  { name: "Tentang Kami", href: "#about" },
  { name: "Layanan", href: "#services" },
  { name: "Towing 24 Jam", href: "#towing" },
  { name: "Alur Servis", href: "#process" },
  { name: "Galeri", href: "#gallery" },
  { name: "Testimoni", href: "#testimonials" },
  { name: "FAQ", href: "#faq" },
  { name: "Kontak", href: "#contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  // Handle background transition on scroll
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      // Determine active section based on scroll position
      const scrollPosition = window.scrollY + 100;
      for (const item of NAV_ITEMS) {
        const el = document.getElementById(item.href.replace("#", ""));
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(item.href);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setIsOpen(false);
    const targetId = href.replace("#", "");
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      const offset = 80; // height of navbar
      const targetPosition = targetElement.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({
        top: targetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? "glass-nav py-3 shadow-md" : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link
            href="#"
            onClick={(e) => handleNavClick(e, "#")}
            className="flex items-center gap-2 group focus:outline-none"
          >
            <div className="relative w-10 h-10 rounded-lg overflow-hidden flex items-center justify-center transition-all duration-300 group-hover:scale-105 group-hover:rotate-12 shadow-[0_0_15px_rgba(16,185,129,0.15)] bg-gray-50 border border-black/5">
              <Image
                src={ASSETS.logo}
                alt="IPIN MOTOR Logo"
                width={40}
                height={40}
                className="object-contain w-full h-full p-1"
                priority
              />
            </div>
            <div className="flex flex-col">
              <span className="font-poppins font-extrabold text-xl tracking-wider text-gray-900 flex items-center">
                IPIN <span className="text-brand-mint ml-1.5">MOTOR</span>
              </span>
              <span className="text-[9px] font-medium uppercase tracking-[0.2em] text-gray-500 -mt-1 group-hover:text-gray-900 transition-colors">
                Premium Auto Service
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                className={`font-inter text-sm font-semibold transition-colors hover:text-brand-mint relative py-1.5 focus:outline-none ${
                  activeSection === item.href ? "text-brand-mint" : "text-gray-700 hover:text-brand-mint"
                }`}
              >
                {item.name}
                {activeSection === item.href && (
                  <motion.div
                    layoutId="activeIndicator"
                    className="absolute bottom-0 left-0 right-0 h-[2px] bg-brand-mint rounded-full"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
              </a>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden lg:block">
            <a
              href="https://api.whatsapp.com/send/?phone=6282338325621"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-gray-900 hover:bg-black font-poppins text-sm font-semibold text-white transition-all duration-300 hover:shadow-[0_4px_15px_rgba(0,0,0,0.15)] focus:outline-none"
            >
              <Phone className="w-4 h-4" />
              Hubungi Kami
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-lg text-gray-900 hover:bg-black/5 transition-colors focus:outline-none"
              aria-label={isOpen ? "Close menu" : "Open menu"}
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Dropdown */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden border-b border-black/5 bg-white/95 backdrop-blur-lg overflow-hidden"
          >
            <div className="px-4 pt-3 pb-6 space-y-3">
              {NAV_ITEMS.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  className={`block py-2.5 px-3 rounded-lg text-base font-semibold transition-colors ${
                    activeSection === item.href
                      ? "bg-brand-mint/10 text-brand-mint border-l-4 border-brand-mint"
                      : "text-gray-800 hover:bg-black/5 hover:text-black"
                  }`}
                >
                  {item.name}
                </a>
              ))}
              <div className="pt-4 border-t border-black/5">
                <a
                  href="https://api.whatsapp.com/send/?phone=6282338325621"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-2 px-4 py-3 rounded-lg bg-gray-900 hover:bg-black font-poppins text-base font-semibold text-white transition-all shadow-[0_4px_15px_rgba(0,0,0,0.15)]"
                >
                  <Phone className="w-5 h-5" />
                  Hubungi Kami
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
