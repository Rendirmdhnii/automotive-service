import React from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/sections/Hero";
import Counters from "@/components/sections/Counters";
import AboutUs from "@/components/sections/AboutUs";
import Services from "@/components/sections/Services";
import Towing from "@/components/sections/Towing";
import WhyChooseUs from "@/components/sections/WhyChooseUs";
import ProcessTimeline from "@/components/sections/ProcessTimeline";
import BookingForm from "@/components/sections/BookingForm";
import Gallery from "@/components/sections/Gallery";
import Testimonials from "@/components/sections/Testimonials";
import FAQ from "@/components/sections/FAQ";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import BackToTop from "@/components/BackToTop";

export default function Home() {
  return (
    <>
      {/* Sticky Top Navigation */}
      <Navbar />

      {/* Main Sections */}
      <main className="flex-1 flex flex-col">
        <Hero />
        <Counters />
        <AboutUs />
        <Services />
        <Towing />
        <WhyChooseUs />
        <ProcessTimeline />
        <BookingForm />
        <Gallery />
        <Testimonials />
        <FAQ />
        <Contact />
      </main>

      {/* Footer & Floating Widgets */}
      <Footer />
      <WhatsAppFloat />
      <BackToTop />
    </>
  );
}
