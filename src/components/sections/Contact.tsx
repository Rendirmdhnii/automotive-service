"use client";

import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Phone, MessageCircle, MapPin, ExternalLink, ShieldAlert, HeartHandshake } from "lucide-react";

const CONTACT_CHANNELS = [
  {
    title: "Hubungi Admin Bengkel (Booking / Towing)",
    phone: "+62 823-3832-5621",
    desc: "Untuk penjadwalan servis, derek towing 24 jam, atau konsultasi kerusakan.",
    link: "https://api.whatsapp.com/send/?phone=6282338325621",
    color: "from-brand-red to-brand-red-light",
    icon: Phone,
  },
  {
    title: "Layanan Suku Cadang (Sparepart)",
    phone: "+62 823-3824-4401",
    desc: "Cek ketersediaan suku cadang, pemesanan inden, dan estimasi harga sparepart.",
    link: "https://api.whatsapp.com/send/?phone=6282338244401",
    color: "from-zinc-800 to-zinc-700",
    icon: HeartHandshake,
  },
  {
    title: "Kritik, Saran & Masukan",
    phone: "+62 812-2925-5076",
    desc: "Layanan Customer Care. Sampaikan masukan Anda untuk kualitas bengkel kami.",
    link: "https://api.whatsapp.com/send/?phone=6281229255076",
    color: "from-zinc-900 to-zinc-800",
    icon: ShieldAlert,
  },
];

export default function Contact() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  return (
    <section id="contact" className="relative py-24 bg-brand-dark overflow-hidden" ref={sectionRef}>
      {/* Background glow flares */}
      <div className="absolute top-1/2 right-0 w-80 h-80 rounded-full bg-brand-red/5 blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="font-poppins font-bold text-xs uppercase tracking-[0.2em] text-brand-red">
            Kontak Kami
          </span>
          <h2 className="font-poppins font-extrabold text-3xl sm:text-4xl lg:text-5xl tracking-tight leading-tight text-white mt-3">
            Terhubung Langsung Dengan <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-red to-white">
              Tim IPIN MOTOR
            </span>
          </h2>
          <div className="w-20 h-1 bg-brand-red mx-auto mt-6 rounded-full" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
          
          {/* Left Column: WhatsApp Channels */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -40 }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-6 flex flex-col gap-6"
          >
            {CONTACT_CHANNELS.map((channel, idx) => {
              const Icon = channel.icon;
              return (
                <a
                  key={idx}
                  href={channel.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="glass-card p-6 rounded-2xl flex items-start gap-5 border border-white/5 relative group overflow-hidden block"
                >
                  {/* Decorative Color Bar */}
                  <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-brand-red" />
                  
                  {/* Channel Icon */}
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${channel.color} flex items-center justify-center text-white shadow-md`}>
                    <Icon className="w-5.5 h-5.5" />
                  </div>

                  {/* Text Content */}
                  <div className="flex-1 flex flex-col">
                    <span className="font-poppins font-bold text-sm text-brand-silver/90 group-hover:text-white transition-colors">
                      {channel.title}
                    </span>
                    <span className="font-poppins font-extrabold text-lg text-white mt-1">
                      {channel.phone}
                    </span>
                    <p className="font-inter text-xs text-brand-gray/95 mt-1.5 leading-relaxed">
                      {channel.desc}
                    </p>
                    <div className="flex items-center gap-1.5 mt-4 text-[10px] font-poppins font-bold uppercase tracking-wider text-brand-red-light group-hover:text-white transition-colors">
                      <MessageCircle className="w-4 h-4" />
                      Chat WhatsApp Sekarang
                    </div>
                  </div>
                </a>
              );
            })}
          </motion.div>

          {/* Right Column: Google Maps Embed */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 40 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-6 flex flex-col"
          >
            <div className="glass-card-no-hover p-4 rounded-3xl border border-white/10 flex flex-col flex-1 h-full relative overflow-hidden group">
              <div className="flex items-center gap-2 mb-4">
                <MapPin className="w-5 h-5 text-brand-red-light" />
                <span className="font-poppins font-bold text-sm text-white">
                  Lokasi Bengkel (Sidoarjo)
                </span>
              </div>
              
              {/* Maps Container with Aspect Ratio */}
              <div className="relative rounded-2xl overflow-hidden border border-white/5 flex-1 min-h-[300px] h-full bg-zinc-900 shadow-inner">
                {/* Embed Map focused on Sidoarjo, Jawa Timur */}
                <iframe
                  title="Peta Lokasi Bengkel IPIN MOTOR Sidoarjo"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d126601.27218678007!2d112.6468940847774!3d-7.433158021021434!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd7e108e9ca85e1%3A0x3027d756b13e9a0!2sSidoarjo%20Regency%2C%20East%20Java!5e0!3m2!1sen!2sid!4v1700000000000!5m2!1sen!2sid"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="grayscale invert opacity-80 group-hover:opacity-90 group-hover:grayscale-0 transition-all duration-700"
                />
              </div>

              {/* Direct Maps Redirect Link */}
              <a
                href="https://maps.app.goo.gl/M9LswaaJUWidufDU7"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 flex items-center justify-center gap-2 py-3.5 rounded-xl bg-white hover:bg-brand-silver text-black font-poppins font-bold text-sm transition-all"
              >
                Buka di Google Maps
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
