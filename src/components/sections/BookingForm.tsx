"use client";

import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { motion } from "framer-motion";
import { Calendar, Phone, Car, HelpCircle, Clock, User, CheckCircle2 } from "lucide-react";

const bookingSchema = z.object({
  name: z.string().min(3, { message: "Nama lengkap minimal harus 3 karakter" }),
  phone:
    z.string()
    .min(10, { message: "Nomor HP minimal harus 10 angka" })
    .regex(/^[0-9]+$/, { message: "Nomor HP hanya boleh berisi angka" }),
  carType: z.string().min(2, { message: "Model/Jenis mobil harus diisi (contoh: Avanza 2020)" }),
  issue: z.string().min(5, { message: "Mohon tuliskan keluhan minimal 5 karakter" }),
  date: z.string().min(1, { message: "Silakan tentukan tanggal servis" }),
  time: z.string().min(1, { message: "Silakan pilih waktu kedatangan" }),
});

type BookingFormData = z.infer<typeof bookingSchema>;

export default function BookingForm() {
  const [isSuccess, setIsSuccess] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<BookingFormData>({
    resolver: zodResolver(bookingSchema),
  });

  const onSubmit = async (data: BookingFormData) => {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    const text = `Halo Admin IPIN MOTOR, saya ingin melakukan booking servis dengan detail berikut:
Nama: ${data.name}
Nomor HP: ${data.phone}
Jenis Mobil: ${data.carType}
Tanggal Servis: ${data.date}
Jam Kedatangan: ${data.time}
Keluhan: ${data.issue}
Mohon konfirmasinya, terima kasih.`;

    const encodedText = encodeURIComponent(text);
    const whatsappUrl = `https://api.whatsapp.com/send/?phone=6282338325621&text=${encodedText}`;

    window.open(whatsappUrl, "_blank");
    
    setIsSuccess(true);
    reset();
  };

  return (
    <section id="booking" className="relative py-24 bg-white overflow-hidden">
      {/* Background neon flares */}
      <div className="absolute top-1/2 right-0 w-80 h-80 rounded-full bg-brand-mint/5 blur-[100px] pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="font-poppins font-bold text-xs uppercase tracking-[0.2em] text-brand-mint">
            Booking Online
          </span>
          <h2 className="font-poppins font-extrabold text-3xl sm:text-4xl lg:text-5xl tracking-tight leading-tight text-gray-900 mt-3">
            Atur Jadwal Servis Anda <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-mint to-brand-mint-dark">
              Tanpa Mengantre
            </span>
          </h2>
          <div className="w-20 h-1 bg-brand-mint mx-auto mt-6 rounded-full" />
        </div>

        {/* Booking Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="glass-card-no-hover p-6 sm:p-10 rounded-3xl border border-black/5 shadow-md relative overflow-hidden"
        >
          {isSuccess ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="text-center py-12 flex flex-col items-center justify-center"
            >
              <div className="w-16 h-16 rounded-full bg-brand-mint/10 border border-brand-mint/35 flex items-center justify-center mb-6 shadow-[0_4px_15px_rgba(16,185,129,0.15)]">
                <CheckCircle2 className="w-8 h-8 text-brand-mint-dark" />
              </div>
              <h3 className="font-poppins font-bold text-2xl text-gray-900 mb-3">
                Booking Berhasil Terkirim!
              </h3>
              <p className="font-inter text-sm text-gray-600 max-w-md mx-auto mb-8 leading-relaxed">
                Detail booking Anda telah diformat dan dikirimkan ke WhatsApp admin kami. Harap selesaikan konfirmasi jadwal di tab chat yang terbuka.
              </p>
              <button
                onClick={() => setIsSuccess(false)}
                className="px-6 py-2.5 rounded-lg border border-black/10 hover:border-brand-mint/35 bg-white hover:bg-brand-mint/5 text-gray-800 hover:text-brand-mint-dark font-poppins text-sm font-semibold transition-all duration-300"
              >
                Buat Booking Baru
              </button>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                
                {/* Name */}
                <div className="flex flex-col">
                  <label className="font-poppins font-bold text-xs uppercase tracking-wider text-gray-800 mb-2 flex items-center gap-1.5">
                    <User className="w-3.5 h-3.5 text-brand-mint-dark" />
                    Nama Lengkap
                  </label>
                  <input
                    type="text"
                    placeholder="Masukkan nama Anda"
                    {...register("name")}
                    className="glass-input px-4 py-3.5 rounded-xl text-sm w-full"
                  />
                  {errors.name && (
                    <span className="text-brand-red text-xs mt-1.5 font-medium">
                      {errors.name.message}
                    </span>
                  )}
                </div>

                {/* Phone */}
                <div className="flex flex-col">
                  <label className="font-poppins font-bold text-xs uppercase tracking-wider text-gray-800 mb-2 flex items-center gap-1.5">
                    <Phone className="w-3.5 h-3.5 text-brand-mint-dark" />
                    Nomor WhatsApp / HP
                  </label>
                  <input
                    type="tel"
                    placeholder="Contoh: 082338325621"
                    {...register("phone")}
                    className="glass-input px-4 py-3.5 rounded-xl text-sm w-full"
                  />
                  {errors.phone && (
                    <span className="text-brand-red text-xs mt-1.5 font-medium">
                      {errors.phone.message}
                    </span>
                  )}
                </div>

                {/* Car Type */}
                <div className="flex flex-col">
                  <label className="font-poppins font-bold text-xs uppercase tracking-wider text-gray-800 mb-2 flex items-center gap-1.5">
                    <Car className="w-3.5 h-3.5 text-brand-mint-dark" />
                    Jenis / Tipe Mobil
                  </label>
                  <input
                    type="text"
                    placeholder="Contoh: Toyota Avanza 2021"
                    {...register("carType")}
                    className="glass-input px-4 py-3.5 rounded-xl text-sm w-full"
                  />
                  {errors.carType && (
                    <span className="text-brand-red text-xs mt-1.5 font-medium">
                      {errors.carType.message}
                    </span>
                  )}
                </div>

                {/* Date */}
                <div className="flex flex-col">
                  <label className="font-poppins font-bold text-xs uppercase tracking-wider text-gray-800 mb-2 flex items-center gap-1.5">
                    <Calendar className="w-3.5 h-3.5 text-brand-mint-dark" />
                    Tanggal Servis
                  </label>
                  <input
                    type="date"
                    {...register("date")}
                    className="glass-input px-4 py-3.5 rounded-xl text-sm w-full"
                    min={new Date().toISOString().split("T")[0]}
                  />
                  {errors.date && (
                    <span className="text-brand-red text-xs mt-1.5 font-medium">
                      {errors.date.message}
                    </span>
                  )}
                </div>

                {/* Time */}
                <div className="flex flex-col">
                  <label className="font-poppins font-bold text-xs uppercase tracking-wider text-gray-800 mb-2 flex items-center gap-1.5">
                    <Clock className="w-3.5 h-3.5 text-brand-mint-dark" />
                    Pilih Jam Kedatangan
                  </label>
                  <select
                    {...register("time")}
                    className="glass-input px-4 py-3.5 rounded-xl text-sm w-full bg-white"
                  >
                    <option value="" className="bg-white">Pilih jam...</option>
                    <option value="08:00 - 10:00" className="bg-white">08:00 - 10:00</option>
                    <option value="10:00 - 12:00" className="bg-white">10:00 - 12:00</option>
                    <option value="13:00 - 15:00" className="bg-white">13:00 - 15:00</option>
                    <option value="15:00 - 17:00" className="bg-white">15:00 - 17:00</option>
                  </select>
                  {errors.time && (
                    <span className="text-brand-red text-xs mt-1.5 font-medium">
                      {errors.time.message}
                    </span>
                  )}
                </div>

                {/* Placeholder empty space to align or use full width */}
                <div className="hidden sm:block" />

                {/* Issues (Full Width) */}
                <div className="flex flex-col sm:col-span-2">
                  <label className="font-poppins font-bold text-xs uppercase tracking-wider text-gray-800 mb-2 flex items-center gap-1.5">
                    <HelpCircle className="w-3.5 h-3.5 text-brand-mint-dark" />
                    Keluhan & Keterangan Servis
                  </label>
                  <textarea
                    rows={4}
                    placeholder="Tuliskan keluhan atau jenis servis yang dibutuhkan (contoh: rem bunyi berdecit, ganti oli mesin)"
                    {...register("issue")}
                    className="glass-input px-4 py-3.5 rounded-xl text-sm w-full resize-none"
                  />
                  {errors.issue && (
                    <span className="text-brand-red text-xs mt-1.5 font-medium">
                      {errors.issue.message}
                    </span>
                  )}
                </div>

              </div>

              {/* Submit Button - Emerald Theme */}
              <div className="pt-4">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-4 rounded-xl bg-brand-mint hover:bg-brand-mint-dark font-poppins font-bold text-base text-white transition-all duration-300 shadow-[0_4px_25px_rgba(16,185,129,0.25)] relative overflow-hidden group flex items-center justify-center gap-2"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                      Memproses Booking...
                    </>
                  ) : (
                    <>
                      Booking Sekarang
                    </>
                  )}
                </button>
              </div>
            </form>
          )}
        </motion.div>

      </div>
    </section>
  );
}
