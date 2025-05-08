import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import ClientBody from "./ClientBody";
import Script from "next/script";
import { GA_TRACKING_ID } from "@/lib/google-analytics";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "الديار للمظلات والسواتر | تصميم وتنفيذ وتركيب جميع أنواع المظلات والسواتر",
  description:
    "مؤسسة الديار للمظلات والسواتر وبيوت الشعر والخيام الملكية والبرجولات وتنسيق الحدائق - أفضل خدمات المظلات والسواتر في المملكة العربية السعودية بأسعار تنافسية",
  keywords:
    "مظلات, سواتر, خيام ملكية, بيوت شعر, برجولات, تنسيق حدائق, الديار, مظلات حدائق, مظلات سيارات, سواتر حديد, سواتر خشبية, مظلات مسابح, تركيب مظلات, تركيب سواتر",
  robots: "index, follow",
  authors: [{ name: "الديار للمظلات والسواتر" }],
  viewport: "width=device-width, initial-scale=1",
  openGraph: {
    title: "الديار للمظلات والسواتر | تصميم وتنفيذ وتركيب جميع أنواع المظلات والسواتر",
    description:
      "مؤسسة الديار للمظلات والسواتر وبيوت الشعر والخيام الملكية والبرجولات وتنسيق الحدائق",
    url: "https://aldeyar.me",
    siteName: "الديار للمظلات والسواتر",
    locale: "ar_SA",
    type: "website",
    images: [
      {
        url: "https://same-0zvhmvmjr64-latest.netlify.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fhero.8f6e27dc.jpg&w=3840&q=75",
        width: 1200,
        height: 630,
        alt: "الديار للمظلات والسواتر",
      },
    ],
  },
  alternates: {
    canonical: "https://aldeyar.me",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ar" dir="rtl" className={`${geistSans.variable} ${geistMono.variable}`}>
      <head>
        {/* Google Analytics */}
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`}
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){window.dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_TRACKING_ID}');
          `}
        </Script>

        {/* Schema.org LocalBusiness */}
        <Script id="schema-local-business" type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              "name": "الديار للمظلات والسواتر",
              "image": "https://same-0zvhmvmjr64-latest.netlify.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fhero.8f6e27dc.jpg&w=3840&q=75",
              "url": "https://aldeyar.me",
              "telephone": "+966553719009",
              "email": "info@aldiyarglobal.com",
              "description": "مؤسسة الديار للمظلات والسواتر وبيوت الشعر والخيام الملكية والبرجولات وتنسيق الحدائق - أفضل خدمات المظلات والسواتر في المملكة العربية السعودية بأسعار تنافسية",
              "address": {
                "@type": "PostalAddress",
                "addressCountry": "SA",
                "addressRegion": "الرياض",
                "addressLocality": "الرياض"
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": 24.7136,
                "longitude": 46.6753
              },
              "openingHoursSpecification": {
                "@type": "OpeningHoursSpecification",
                "dayOfWeek": [
                  "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday"
                ],
                "opens": "08:00",
                "closes": "20:00"
              },
              "sameAs": [
                "https://www.instagram.com/aldiyarglobal/",
                "https://wa.me/+966553719009"
              ],
              "priceRange": "$$",
              "servesCuisine": ["مظلات", "سواتر", "خيام ملكية", "بيوت شعر", "برجولات", "تنسيق حدائق"]
            }
          `}
        </Script>
      </head>
      <body suppressHydrationWarning className="antialiased">
        <ClientBody>{children}</ClientBody>
      </body>
    </html>
  );
}
