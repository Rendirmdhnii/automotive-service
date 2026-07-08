import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";

export const metadata: Metadata = {
  title: "IPIN MOTOR - Bengkel Mobil Premium & Towing 24 Jam Sidoarjo",
  description:
    "Solusi servis mobil, tune up, ganti oli, AC, kaki-kaki, kelistrikan, scanner, dan layanan towing 24 jam di Sidoarjo. Teknisi berpengalaman, pengerjaan cepat, garansi pengerjaan, dan sparepart berkualitas.",
  keywords: [
    "bengkel mobil Sidoarjo",
    "towing 24 jam Sidoarjo",
    "mobil mogok Sidoarjo",
    "servis AC mobil Sidoarjo",
    "ganti oli Sidoarjo",
    "tune up mobil Sidoarjo",
    "IPIN MOTOR",
    "bengkel mobil terdekat Sidoarjo",
    "derek mobil 24 jam",
  ],
  authors: [{ name: "IPIN MOTOR Team" }],
  openGraph: {
    title: "IPIN MOTOR - Bengkel Mobil Premium & Towing 24 Jam Sidoarjo",
    description:
      "Ingat Bengkel Mobil, Ingat IPIN MOTOR. Perawatan premium untuk mobil Anda dan penanganan darurat towing 24 jam di Sidoarjo.",
    url: "https://ipinmotor.com",
    siteName: "IPIN MOTOR",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "IPIN MOTOR - Bengkel Mobil & Towing 24 Jam",
      },
    ],
    locale: "id_ID",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "IPIN MOTOR - Bengkel Mobil Premium & Towing 24 Jam",
    description:
      "Solusi servis mobil berkala, tune up, dan derek towing 24 jam di Sidoarjo.",
    images: ["/og-image.jpg"],
  },
  alternates: {
    canonical: "https://ipinmotor.com",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // LocalBusiness Schema Markup
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "AutoRepair",
    "name": "IPIN MOTOR",
    "alternateName": "IPIN MOTOR Sidoarjo",
    "image": "https://ipinmotor.com/og-image.jpg",
    "description": "Bengkel mobil premium dan layanan towing derek 24 jam di Sidoarjo dengan teknisi berpengalaman.",
    "telephone": "+6282338325621",
    "url": "https://ipinmotor.com",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Sidoarjo, Jawa Timur",
      "addressLocality": "Sidoarjo",
      "addressRegion": "Jawa Timur",
      "postalCode": "61219",
      "addressCountry": "ID"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "-7.472613",
      "longitude": "112.700762"
    },
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday"
        ],
        "opens": "08:00",
        "closes": "17:00"
      },
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": [
          "Sunday"
        ],
        "opens": "00:00",
        "closes": "23:59",
        "description": "Hanya layanan emergency towing 24 jam"
      }
    ],
    "sameAs": [
      "https://www.instagram.com/ipinmotor_sidoarjo/",
      "https://www.tiktok.com/@ipinmotorsidoarjo"
    ],
    "priceRange": "$$"
  };

  return (
    <html lang="id" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Poppins:wght@300;400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="antialiased min-h-screen bg-brand-dark text-foreground flex flex-col">
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          forcedTheme="dark"
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
