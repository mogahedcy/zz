import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import Script from "next/script";
import { siteNavigationSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "خريطة الموقع | الديار للمظلات والسواتر",
  description: "تصفح جميع صفحات موقع الديار للمظلات والسواتر، والوصول إلى خدماتنا ومدونتنا وصفحات التواصل",
  keywords: "خريطة الموقع, الديار للمظلات والسواتر, روابط الموقع, مظلات, سواتر, خيام ملكية, بيوت شعر, برجولات, تنسيق حدائق",
};

export default function SitemapPage() {
  return (
    <>
      <Script id="sitemap-schema" type="application/ld+json">
        {JSON.stringify(siteNavigationSchema)}
      </Script>

      <div dir="rtl" className="font-sans bg-[#fafafa] text-[#2d2a27]">
        {/* بانر الخدمة */}
        <header className="relative w-full min-h-[200px] flex items-center justify-center overflow-hidden bg-[#2d2a27]">
          <div className="relative z-10 p-8 text-center text-white w-full max-w-3xl mx-auto">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">خريطة الموقع</h1>
            <p className="text-lg md:text-xl mb-2">تصفح جميع صفحات موقع الديار للمظلات والسواتر</p>
            <div className="flex justify-center gap-2 text-sm text-[#ffe4ad] mt-3">
              <Link href="/" className="underline hover:text-yellow-400">الرئيسية</Link>
              <span>/</span>
              <span className="text-white/90">خريطة الموقع</span>
            </div>
          </div>
        </header>

        <div className="max-w-5xl mx-auto py-12 px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* الصفحات الرئيسية */}
            <div className="bg-white shadow-md rounded-lg p-6">
              <h2 className="text-xl font-bold mb-4 text-[#ac925c]">الصفحات الرئيسية</h2>
              <ul className="space-y-2">
                <li>
                  <Link href="/" className="text-[#2d2a27] hover:text-[#ac925c] flex items-center gap-2">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                    </svg>
                    الصفحة الرئيسية
                  </Link>
                </li>
                <li>
                  <Link href="/#services" className="text-[#2d2a27] hover:text-[#ac925c] flex items-center gap-2">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    خدماتنا
                  </Link>
                </li>
                <li>
                  <Link href="/#projects" className="text-[#2d2a27] hover:text-[#ac925c] flex items-center gap-2">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    أعمالنا
                  </Link>
                </li>
                <li>
                  <Link href="/#about" className="text-[#2d2a27] hover:text-[#ac925c] flex items-center gap-2">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    من نحن
                  </Link>
                </li>
                <li>
                  <Link href="/#contact" className="text-[#2d2a27] hover:text-[#ac925c] flex items-center gap-2">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    اتصل بنا
                  </Link>
                </li>
                <li>
                  <Link href="/blog" className="text-[#2d2a27] hover:text-[#ac925c] flex items-center gap-2">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
                    </svg>
                    المدونة
                  </Link>
                </li>
                <li>
                  <Link href="/sitemap" className="text-[#2d2a27] hover:text-[#ac925c] flex items-center gap-2">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
                    </svg>
                    خريطة الموقع
                  </Link>
                </li>
              </ul>
            </div>

            {/* صفحات الخدمات */}
            <div className="bg-white shadow-md rounded-lg p-6">
              <h2 className="text-xl font-bold mb-4 text-[#ac925c]">خدماتنا</h2>
              <ul className="space-y-2">
                <li>
                  <Link href="/mazallat" className="text-[#2d2a27] hover:text-[#ac925c] flex items-center gap-2">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
                    </svg>
                    مظلات
                  </Link>
                </li>
                <li>
                  <Link href="/sawater" className="text-[#2d2a27] hover:text-[#ac925c] flex items-center gap-2">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
                    </svg>
                    سواتر
                  </Link>
                </li>
                <li>
                  <Link href="/khayyam" className="text-[#2d2a27] hover:text-[#ac925c] flex items-center gap-2">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
                    </svg>
                    خيام ملكية
                  </Link>
                </li>
                <li>
                  <Link href="/byoot_shaar" className="text-[#2d2a27] hover:text-[#ac925c] flex items-center gap-2">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
                    </svg>
                    بيوت شعر
                  </Link>
                </li>
                <li>
                  <Link href="/pergolas" className="text-[#2d2a27] hover:text-[#ac925c] flex items-center gap-2">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
                    </svg>
                    برجولات
                  </Link>
                </li>
                <li>
                  <Link href="/landscaping" className="text-[#2d2a27] hover:text-[#ac925c] flex items-center gap-2">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
                    </svg>
                    تنسيق حدائق
                  </Link>
                </li>
              </ul>
            </div>

            {/* المدونة */}
            <div className="bg-white shadow-md rounded-lg p-6">
              <h2 className="text-xl font-bold mb-4 text-[#ac925c]">مقالات المدونة</h2>
              <ul className="space-y-2">
                <li>
                  <Link href="/blog/choosing-right-shade" className="text-[#2d2a27] hover:text-[#ac925c] flex items-center gap-2">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                    كيفية اختيار المظلة المناسبة لمنزلك
                  </Link>
                </li>
                <li>
                  <Link href="/blog/best-fence-types" className="text-[#2d2a27] hover:text-[#ac925c] flex items-center gap-2">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                    أفضل أنواع السواتر للمنازل والفلل
                  </Link>
                </li>
                <li>
                  <Link href="/blog/fabric-vs-pvc-shades" className="text-[#2d2a27] hover:text-[#ac925c] flex items-center gap-2">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                    الفرق بين المظلات القماشية ومظلات البي في سي
                  </Link>
                </li>
                <li>
                  <Link href="/blog" className="mt-3 text-[#ac925c] hover:underline block font-semibold">
                    عرض جميع المقالات &larr;
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          {/* معلومات الاتصال */}
          <div className="bg-white shadow-md rounded-lg p-6 mt-8">
            <h2 className="text-xl font-bold mb-4 text-[#ac925c]">معلومات الاتصال</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <p className="mb-2 flex items-center gap-2">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[#ac925c]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  <a href="tel:+966553719009" className="hover:text-[#ac925c]">0553719009</a>
                </p>
                <p className="mb-2 flex items-center gap-2">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[#ac925c]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <a href="mailto:info@aldiyarglobal.com" className="hover:text-[#ac925c]">info@aldiyarglobal.com</a>
                </p>
                <p className="mb-2 flex items-center gap-2">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[#ac925c]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <span>المملكة العربية السعودية</span>
                </p>
              </div>
              <div>
                <p className="mb-2 flex items-center gap-2">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[#ac925c]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span>ساعات العمل: 8 صباحًا - 8 مساءً</span>
                </p>
                <p className="mb-2 flex items-center gap-2">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[#ac925c]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                  </svg>
                  <a href="https://wa.me/+966553719009" className="hover:text-[#ac925c]">تواصل معنا عبر واتساب</a>
                </p>
                <p className="mb-2 flex items-center gap-2">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[#ac925c]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
                  </svg>
                  <a href="https://www.instagram.com/aldiyarglobal/" className="hover:text-[#ac925c]">تابعنا على انستجرام</a>
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* دعوة للتواصل */}
        <section className="bg-[#2d2a27] text-white py-12 mt-16">
          <div className="max-w-3xl mx-auto px-4 flex flex-col gap-4 items-center text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-2">هل أنت مهتم بالحصول على خدماتنا؟</h2>
            <p className="mb-5 text-[#ffe4ad]">تواصل معنا الآن للحصول على استشارة مجانية وعرض سعر مناسب</p>
            <div className="flex flex-wrap gap-3 justify-center">
              <a href="tel:+966553719009" className="bg-[#ac925c] hover:bg-[#86674c] transition text-white font-bold px-5 py-2 rounded-full">اتصل الآن</a>
              <a href="https://wa.me/+966553719009" className="bg-[#32c975] hover:bg-green-600 transition text-white font-bold px-5 py-2 rounded-full">واتساب</a>
              <Link href="/#contact" className="border border-[#ffe4ad] text-[#ffe4ad] font-bold px-5 py-2 rounded-full hover:bg-[#ffe4ad] hover:text-[#2d2a27] transition">طلب عرض سعر</Link>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-[#302a23] text-white py-8">
          <div className="max-w-6xl mx-auto px-4 text-center">
            <Link href="/" className="inline-block mb-5">
              <Image
                src="https://ext.same-assets.com/200402770/3736915175.png"
                alt="شعار الديار"
                width={80}
                height={80}
                className="mx-auto"
              />
            </Link>
            <div className="flex flex-wrap justify-center gap-6 mb-5">
              <Link href="/" className="hover:text-[#b09257] transition">
                الرئيسية
              </Link>
              <Link href="/#services" className="hover:text-[#b09257] transition">
                خدماتنا
              </Link>
              <Link href="/#about" className="hover:text-[#b09257] transition">
                من نحن
              </Link>
              <Link href="/#projects" className="hover:text-[#b09257] transition">
                أعمالنا
              </Link>
              <Link href="/blog" className="hover:text-[#b09257] transition">
                المدونة
              </Link>
              <Link href="/#contact" className="hover:text-[#b09257] transition">
                اتصل بنا
              </Link>
            </div>
            <div className="border-t border-[#b09257] pt-5 text-sm text-[#c3ad90]">
              جميع الحقوق محفوظة © 2024 مؤسسة الديار العالمية
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}
