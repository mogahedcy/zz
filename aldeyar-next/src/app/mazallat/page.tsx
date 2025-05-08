import React from "react";
import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import Script from "next/script";

export const metadata: Metadata = {
  title: "مظلات الديار | أفضل أنواع المظلات بأسعار مناسبة وجودة عالية",
  description:
    "نقدم أفضل خدمات تركيب وتصميم المظلات بمختلف أنواعها: مظلات سيارات، مظلات حدائق، مظلات مسابح، مظلات لكسان، مظلات خشبية، مظلات حديد. جودة عالية، أسعار منافسة وضمان على جميع أعمالنا.",
  keywords:
    "مظلات, مظلات سيارات, مظلات حدائق, مظلات مسابح, مظلات لكسان, مظلات خشبية, مظلات حديد, تركيب مظلات, تصميم مظلات, أفضل مظلات, مظلات رخيصة, مظلات الرياض, مظلات جدة, مظلات الشرقية, مظلات المدينة",
};

export default function MazallatPage() {
  return (
    <>
      <Script id="mazallat-schema" type="application/ld+json">
        {`
          {
            "@context": "https://schema.org/",
            "@type": "Service",
            "serviceType": "تركيب وتصميم المظلات",
            "provider": {
              "@type": "LocalBusiness",
              "name": "الديار للمظلات والسواتر",
              "image": "https://same-0zvhmvmjr64-latest.netlify.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fhero.8f6e27dc.jpg&w=3840&q=75",
              "telephone": "+966553719009",
              "priceRange": "$$",
              "address": {
                "@type": "PostalAddress",
                "addressCountry": "SA",
                "addressRegion": "الرياض"
              }
            },
            "areaServed": {
              "@type": "Country",
              "name": "المملكة العربية السعودية"
            },
            "description": "نقدم أفضل خدمات تركيب وتصميم المظلات بمختلف أنواعها: مظلات سيارات، مظلات حدائق، مظلات مسابح، مظلات لكسان، مظلات خشبية، مظلات حديد. جودة عالية، أسعار منافسة وضمان على جميع أعمالنا",
            "offers": {
              "@type": "AggregateOffer",
              "priceCurrency": "SAR",
              "lowPrice": "100",
              "highPrice": "5000",
              "offerCount": "10"
            },
            "hasOfferCatalog": {
              "@type": "OfferCatalog",
              "name": "أنواع المظلات",
              "itemListElement": [
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "مظلات سيارات"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "مظلات حدائق"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "مظلات مسابح"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "مظلات لكسان"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "مظلات خشبية"
                  }
                }
              ]
            }
          }
        `}
      </Script>

      <div dir="rtl" className="font-sans bg-[#fafafa] text-[#2d2a27]">
        {/* بانر الخدمة */}
        <header className="relative w-full min-h-[300px] md:min-h-[380px] flex items-center justify-center overflow-hidden">
          <Image
            src="https://ext.same-assets.com/2539755772/71406733.jpeg"
            alt="مظلات جدة الديار العالمية"
            className="absolute inset-0 w-full h-full object-cover object-center opacity-80"
            width={1920}
            height={800}
            priority
          />
          <div className="relative z-10 p-8 text-center text-white drop-shadow bg-black/50 rounded w-full max-w-3xl mx-auto mt-16">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">مظلات الديار</h1>
            <p className="text-lg md:text-xl mb-2">
              نقدم أفضل خدمات تركيب وتصميم المظلات بمختلف أنواعها. نحن متخصصون في تصميم وتركيب مظلات السيارات، مظلات الحدائق، مظلات المسابح، مظلات اللكسان، المظلات الخشبية ومظلات الحديد بأعلى جودة وأفضل الأسعار في المملكة العربية السعودية.
            </p>
            <div className="flex justify-center gap-2 text-sm text-[#ffe4ad] mt-3">
              <Link href="/" className="underline hover:text-yellow-400">
                الرئيسية
              </Link>
              <span>/</span>
              <Link href="/#services" className="underline hover:text-yellow-400">
                خدماتنا
              </Link>
              <span>/</span>
              <span className="text-white/90">مظلات</span>
            </div>
          </div>
        </header>

        {/* وصف وتعريف المظلات */}
        <section className="max-w-5xl mx-auto my-14 px-4 grid md:grid-cols-2 gap-10 items-center">
          <div className="flex justify-center md:order-2">
            <Image
              src="https://ext.same-assets.com/2539755772/3897470258.jpeg"
              alt="مظلات سيارات جدة"
              className="rounded-lg border-4 border-[#c3ac8f] bg-white max-w-xs shadow"
              width={400}
              height={300}
            />
          </div>
          <div className="md:order-1">
            <h2 className="text-2xl font-bold mb-4">مظلات بأعلى معايير الجودة</h2>
            <p className="mb-3 text-lg">
              مؤسسة الديار للمظلات تقدم خدمات تركيب وتصميم جميع أنواع المظلات في جدة وجميع أنحاء المملكة العربية السعودية. نستخدم أفضل الخامات المقاومة للحرارة والأمطار، ونوفر مظلات سيارات، مظلات حدائق، مظلات مسابح، مظلات لكسان، مظلات خشبية وحديدية، مع ضمان الجودة والأسعار المنافسة وخدمة ما بعد البيع.
            </p>
            <p className="font-bold mb-2">لماذا تختار مظلات الديار؟</p>
            <ul className="list-inside list-disc space-y-2 text-base text-[#86674c]">
              <li>مقاومة للحرارة وأشعة الشمس الضارة</li>
              <li>عازلة للماء والأمطار بنسبة 100%</li>
              <li>مقاومة للصدأ والتآكل</li>
              <li>متوفرة بألوان وتصميمات متنوعة تناسب جميع الأذواق</li>
              <li>سهلة التنظيف والصيانة</li>
              <li>متينة وتدوم لفترات طويلة</li>
              <li>ضمان على جميع الأعمال</li>
              <li>خدمة تركيب سريعة واحترافية</li>
            </ul>
          </div>
        </section>

        {/* أنواع المظلات */}
        <section className="max-w-6xl mx-auto px-4 my-16 mb-12">
          <h2 className="text-2xl font-bold mb-8 text-center text-[#ac925c]">
            أنواع المظلات التي نقدمها
          </h2>
          <div className="grid md:grid-cols-4 gap-7">
            <div className="bg-white rounded-xl border shadow p-5 flex flex-col items-center">
              <Image
                src="https://ext.same-assets.com/2539755772/3897470258.jpeg"
                alt="مظلات سيارات"
                className="h-28 w-full object-cover rounded mb-2"
                width={400}
                height={200}
              />
              <h3 className="font-semibold text-lg mt-1">مظلات سيارات</h3>
              <p className="text-[#86674c] mt-1 text-center text-sm flex-1">
                مظلات مواقف السيارات بمختلف المقاسات والأشكال، توفر حماية كاملة للسيارات من أشعة الشمس والأمطار.
              </p>
            </div>
            <div className="bg-white rounded-xl border shadow p-5 flex flex-col items-center">
              <Image
                src="https://ext.same-assets.com/2539755772/3049632715.jpeg"
                alt="مظلات حدائق"
                className="h-28 w-full object-cover rounded mb-2"
                width={400}
                height={200}
              />
              <h3 className="font-semibold text-lg mt-1">مظلات حدائق</h3>
              <p className="text-[#86674c] mt-1 text-center text-sm flex-1">
                مظلات للحدائق المنزلية والعامة بتصميمات عصرية وخامات عالية الجودة تضيف لمسة جمالية للمكان.
              </p>
            </div>
            <div className="bg-white rounded-xl border shadow p-5 flex flex-col items-center">
              <Image
                src="https://ext.same-assets.com/2539755772/3504524629.jpeg"
                alt="مظلات مدارس"
                className="h-28 w-full object-cover rounded mb-2"
                width={400}
                height={200}
              />
              <h3 className="font-semibold text-lg mt-1">مظلات مدارس</h3>
              <p className="text-[#86674c] mt-1 text-center text-sm flex-1">
                مظلات للمدارس توفر بيئة آمنة ومستقرة للطلاب والمعلمين وتحميهم من عوامل الجو والتقلبات.
              </p>
            </div>
            <div className="bg-white rounded-xl border shadow p-5 flex flex-col items-center">
              <Image
                src="https://ext.same-assets.com/2539755772/1807765189.jpeg"
                alt="مظلات مسابح"
                className="h-28 w-full object-cover rounded mb-2"
                width={400}
                height={200}
              />
              <h3 className="font-semibold text-lg mt-1">مظلات مسابح</h3>
              <p className="text-[#86674c] mt-1 text-center text-sm flex-1">
                مظلات للمسابح تحمي من أشعة الشمس وتحافظ على نظافة المسبح، مع توفير تهوية ممتازة.
              </p>
            </div>
          </div>
        </section>

        {/* معرض أعمال مظلات */}
        <section className="max-w-6xl mx-auto px-4 my-16 mb-8">
          <h2 className="text-2xl font-bold mb-8 text-center">معرض أعمالنا</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <Image
              src="https://ext.same-assets.com/2539755772/1414337162.jpeg"
              alt="مظلات سيارات في مجمع سكني"
              className="rounded-xl shadow border w-full h-32 object-cover"
              width={300}
              height={150}
            />
            <Image
              src="https://ext.same-assets.com/2539755772/2164257014.jpeg"
              alt="مظلات حدائق فاخرة"
              className="rounded-xl shadow border w-full h-32 object-cover"
              width={300}
              height={150}
            />
            <Image
              src="https://ext.same-assets.com/2539755772/3651157645.jpeg"
              alt="مظلات مدارس واسعة"
              className="rounded-xl shadow border w-full h-32 object-cover"
              width={300}
              height={150}
            />
            <Image
              src="https://ext.same-assets.com/2539755772/1278764839.jpeg"
              alt="مظلات مسابح فاخرة"
              className="rounded-xl shadow border w-full h-32 object-cover"
              width={300}
              height={150}
            />
            <Image
              src="https://ext.same-assets.com/2539755772/2377535824.jpeg"
              alt="مظلات PVC عالية الجودة"
              className="rounded-xl shadow border w-full h-32 object-cover"
              width={300}
              height={150}
            />
            <Image
              src="https://ext.same-assets.com/2539755772/2202899246.jpeg"
              alt="مظلات حديد مشغول"
              className="rounded-xl shadow border w-full h-32 object-cover"
              width={300}
              height={150}
            />
            <Image
              src="https://ext.same-assets.com/2539755772/2050251729.jpeg"
              alt="مظلات مداخل فلل"
              className="rounded-xl shadow border w-full h-32 object-cover"
              width={300}
              height={150}
            />
            <Image
              src="https://ext.same-assets.com/2539755772/1754448353.jpeg"
              alt="مظلات لكسان"
              className="rounded-xl shadow border w-full h-32 object-cover"
              width={300}
              height={150}
            />
          </div>
        </section>

        {/* دعوة للتواصل */}
        <section className="bg-[#2d2a27] text-white py-12 mt-16">
          <div className="max-w-3xl mx-auto px-4 flex flex-col gap-4 items-center text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-2">
              هل أنت مهتم بالحصول على خدماتنا؟
            </h2>
            <p className="mb-5 text-[#ffe4ad]">
              تواصل معنا الآن للحصول على استشارة مجانية وعرض سعر مناسب
            </p>
            <div className="flex flex-wrap gap-3 justify-center">
              <a
                href="tel:+966553719009"
                className="bg-[#ac925c] hover:bg-[#86674c] transition text-white font-bold px-5 py-2 rounded-full"
              >
                اتصل الآن
              </a>
              <a
                href="https://wa.me/+966553719009"
                className="bg-[#32c975] hover:bg-green-600 transition text-white font-bold px-5 py-2 rounded-full"
              >
                واتساب
              </a>
              <Link
                href="/#contact"
                className="border border-[#ffe4ad] text-[#ffe4ad] font-bold px-5 py-2 rounded-full hover:bg-[#ffe4ad] hover:text-[#2d2a27] transition"
              >
                طلب عرض سعر
              </Link>
            </div>
          </div>
        </section>

        {/* الأسئلة الشائعة */}
        <section className="my-20 max-w-3xl mx-auto px-4">
          <h2 className="text-2xl font-bold mb-8 text-center">الأسئلة الشائعة</h2>
          <div className="space-y-4">
            <details className="bg-white border rounded shadow p-4 transition-all duration-300 hover:shadow-lg">
              <summary className="font-bold text-[#ac925c] cursor-pointer flex items-center justify-between">
                ما هي أفضل أنواع المظلات للسيارات؟<span>+</span>
              </summary>
              <p className="mt-2 text-[#2d2a27]">
                تعتبر مظلات PVC ومظلات القماش المعالج ومظلات اللكسان من أفضل الأنواع للسيارات، وتختلف حسب الميزانية واحتياجات العميل. مظلات PVC هي الأكثر انتشارًا بسبب متانتها وقدرتها على عزل الحرارة وسعرها المناسب.
              </p>
            </details>
            <details className="bg-white border rounded shadow p-4 transition-all duration-300 hover:shadow-lg">
              <summary className="font-bold text-[#ac925c] cursor-pointer flex items-center justify-between">
                كم تبلغ مدة تنفيذ المظلات؟<span>+</span>
              </summary>
              <p className="mt-2 text-[#2d2a27]">
                تختلف مدة التنفيذ حسب حجم المشروع ونوع المظلة، ولكن بشكل عام تتراوح بين 3-7 أيام للمشاريع الصغيرة، و7-14 يوم للمشاريع المتوسطة والكبيرة.
              </p>
            </details>
            <details className="bg-white border rounded shadow p-4 transition-all duration-300 hover:shadow-lg">
              <summary className="font-bold text-[#ac925c] cursor-pointer flex items-center justify-between">
                هل تقدمون ضمان على المظلات؟<span>+</span>
              </summary>
              <p className="mt-2 text-[#2d2a27]">
                نعم، نقدم ضمان يصل إلى 10 سنوات على المظلات حسب نوع الخامة المستخدمة، ويشمل الضمان جودة التركيب والخامات ومقاومتها للعوامل الجوية.
              </p>
            </details>
            <details className="bg-white border rounded shadow p-4 transition-all duration-300 hover:shadow-lg">
              <summary className="font-bold text-[#ac925c] cursor-pointer flex items-center justify-between">
                كيف يمكنني المحافظة على المظلة لفترة أطول؟<span>+</span>
              </summary>
              <p className="mt-2 text-[#2d2a27]">
                للمحافظة على المظلة، ننصح بتنظيفها بشكل دوري باستخدام الماء والصابون الخفيف، وتجنب استخدام المواد الكيميائية القاسية، والتأكد من عدم تراكم الأوساخ والأتربة عليها.
              </p>
            </details>
          </div>
        </section>

        {/* خدمات أخرى */}
        <section className="my-20 max-w-7xl mx-auto px-4">
          <h2 className="text-2xl font-bold mb-8 text-center">خدمات أخرى قد تهمك</h2>
          <div className="grid md:grid-cols-3 gap-5">
            <div className="bg-white rounded-xl border shadow p-6 flex flex-col items-center">
              <Image
                src="https://ext.same-assets.com/2539755772/531069762.jpeg"
                alt="السواتر"
                className="h-24 w-full object-cover rounded mb-2"
                width={300}
                height={150}
              />
              <h3 className="font-semibold text-lg mt-1">السواتر</h3>
              <p className="text-[#86674c] mt-1 text-center text-sm flex-1">
                تركيب سواتر بمختلف الأنواع والخامات لتوفير الخصوصية والحماية للمنازل والمنشآت.
              </p>
              <Link
                href="/sawater"
                className="mt-4 px-5 py-2 bg-[#ac925c] text-white rounded-full font-semibold transition hover:bg-[#86674c]"
              >
                عرض التفاصيل
              </Link>
            </div>
            <div className="bg-white rounded-xl border shadow p-6 flex flex-col items-center">
              <Image
                src="https://ext.same-assets.com/3372524550/3283197689.jpeg"
                alt="برجولات"
                className="h-24 w-full object-cover rounded mb-2"
                width={300}
                height={150}
              />
              <h3 className="font-semibold text-lg mt-1">البرجولات</h3>
              <p className="text-[#86674c] mt-1 text-center text-sm flex-1">
                تصميم وتنفيذ برجولات خشبية وحديدية بأشكال عصرية تضيف لمسة جمالية للحدائق والمنتزهات.
              </p>
              <Link
                href="/pergolas"
                className="mt-4 px-5 py-2 bg-[#ac925c] text-white rounded-full font-semibold transition hover:bg-[#86674c]"
              >
                عرض التفاصيل
              </Link>
            </div>
            <div className="bg-white rounded-xl border shadow p-6 flex flex-col items-center">
              <Image
                src="https://ext.same-assets.com/2539755772/574858840.png"
                alt="خيام ملكية"
                className="h-24 w-full object-cover rounded mb-2"
                width={300}
                height={150}
              />
              <h3 className="font-semibold text-lg mt-1">خيام ملكية</h3>
              <p className="text-[#86674c] mt-1 text-center text-sm flex-1">
                تصميم وتنفيذ خيام ملكية فاخرة بتصاميم فريدة وعصرية تناسب كافة المناسبات والاحتفالات.
              </p>
              <Link
                href="/khayyam"
                className="mt-4 px-5 py-2 bg-[#ac925c] text-white rounded-full font-semibold transition hover:bg-[#86674c]"
              >
                عرض التفاصيل
              </Link>
            </div>
          </div>
        </section>

        {/* Footer with links to main site */}
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
