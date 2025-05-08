import React from "react";
import Link from "next/link";
import Image from "next/image";

export const metadata = {
  title: "سواتر في جدة | مؤسسة الديار العالمية",
  description: "سواتر في جدة - مؤسسة الديار العالمية تقدم تصميم وتنفيذ سواتر حديد، سواتر خشبية، سواتر قماش وسواتر شينكو بأفضل الخامات وأعلى معايير الجودة"
};

export default function SawaterPage() {
  return (
    <div dir="rtl" className="font-sans bg-[#fafafa] text-[#2d2a27]">
      {/* بانر الخدمة */}
      <header className="relative w-full min-h-[300px] md:min-h-[380px] flex items-center justify-center overflow-hidden">
        <Image
          src="https://ext.same-assets.com/742929371/1378182230.jpeg"
          alt="سواتر في جدة"
          className="absolute inset-0 w-full h-full object-cover object-center opacity-80"
          width={1920}
          height={800}
          priority
        />
        <div className="relative z-10 p-8 text-center text-white drop-shadow bg-black/50 rounded w-full max-w-3xl mx-auto mt-16">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">سواتر في جدة</h1>
          <p className="text-lg md:text-xl mb-2">تصميم وتنفيذ مختلف أنواع السواتر بأفضل الخامات وأعلى معايير الجودة</p>
          <div className="flex justify-center gap-2 text-sm text-[#ffe4ad] mt-3">
            <Link href="/" className="underline hover:text-yellow-400">الرئيسية</Link>
            <span>/</span>
            <Link href="/#services" className="underline hover:text-yellow-400">خدماتنا</Link>
            <span>/</span>
            <span className="text-white/90">سواتر</span>
          </div>
        </div>
      </header>

      {/* وصف وتعريف السواتر */}
      <section className="max-w-5xl mx-auto my-14 px-4 grid md:grid-cols-2 gap-10 items-center">
        <div className="flex justify-center md:order-2">
          <Image
            src="https://ext.same-assets.com/742929371/1270547884.jpeg"
            alt="سواتر بأعلى معايير الجودة"
            className="rounded-lg border-4 border-[#c3ac8f] bg-white max-w-xs shadow"
            width={400}
            height={300}
          />
        </div>
        <div className="md:order-1">
          <h2 className="text-2xl font-bold mb-4">سواتر بأعلى معايير الجودة</h2>
          <p className="mb-3 text-lg">تعد مؤسسة الديار العالمية من أفضل المؤسسات المتخصصة في تصميم وتركيب مختلف أنواع السواتر في جدة والمملكة العربية السعودية. نقدم لعملائنا الكرام مجموعة واسعة من السواتر المصنوعة من أجود الخامات والمواد التي تتميز بقدرتها على توفير الخصوصية والأمان مع مقاومة العوامل الجوية المختلفة.</p>
          <p className="font-bold mb-2">تتميز سواتر الديار العالمية بأنها:</p>
          <ul className="list-inside list-disc space-y-2 text-base text-[#86674c]">
            <li>توفر خصوصية تامة للمنازل والمنشآت</li>
            <li>مقاومة للرياح القوية والعوامل الجوية</li>
            <li>مقاومة للصدأ والتآكل</li>
            <li>متوفرة بألوان وتصميمات متنوعة تناسب جميع الأذواق</li>
            <li>سهلة التنظيف والصيانة</li>
            <li>متينة وتدوم لفترات طويلة</li>
          </ul>
        </div>
      </section>

      {/* أنواع السواتر */}
      <section className="max-w-6xl mx-auto px-4 my-16 mb-12">
        <h2 className="text-2xl font-bold mb-8 text-center text-[#a78e5d]">أنواع السواتر التي نقدمها</h2>
        <div className="grid md:grid-cols-4 gap-7">
          <div className="bg-white rounded-xl border shadow p-5 flex flex-col items-center">
            <Image
              src="https://ext.same-assets.com/742929371/2544295178.jpeg"
              alt="سواتر حديد"
              className="h-28 w-full object-cover rounded mb-2"
              width={400}
              height={200}
            />
            <h3 className="font-semibold text-lg mt-1">سواتر حديد</h3>
            <p className="text-[#86674c] mt-1 text-center text-sm flex-1">
              سواتر من الحديد المجلفن والمشغول بمختلف التصاميم، تتميز بالمتانة ومقاومة الصدأ وتوفير الخصوصية التامة.
            </p>
          </div>
          <div className="bg-white rounded-xl border shadow p-5 flex flex-col items-center">
            <Image
              src="https://ext.same-assets.com/742929371/1284030991.jpeg"
              alt="سواتر خشبية"
              className="h-28 w-full object-cover rounded mb-2"
              width={400}
              height={200}
            />
            <h3 className="font-semibold text-lg mt-1">سواتر خشبية</h3>
            <p className="text-[#86674c] mt-1 text-center text-sm flex-1">
              سواتر من الخشب الطبيعي والصناعي المعالج بتصاميم عصرية وراقية، توفر منظراً جمالياً مع الخصوصية.
            </p>
          </div>
          <div className="bg-white rounded-xl border shadow p-5 flex flex-col items-center">
            <Image
              src="https://ext.same-assets.com/742929371/3643643845.jpeg"
              alt="سواتر قماش"
              className="h-28 w-full object-cover rounded mb-2"
              width={400}
              height={200}
            />
            <h3 className="font-semibold text-lg mt-1">سواتر قماش</h3>
            <p className="text-[#86674c] mt-1 text-center text-sm flex-1">
              سواتر من أجود أنواع الأقمشة المقاومة للعوامل الجوية والحريق، سهلة التركيب والفك وتوفر خصوصية جيدة.
            </p>
          </div>
          <div className="bg-white rounded-xl border shadow p-5 flex flex-col items-center">
            <Image
              src="https://ext.same-assets.com/742929371/3826485312.jpeg"
              alt="سواتر شينكو"
              className="h-28 w-full object-cover rounded mb-2"
              width={400}
              height={200}
            />
            <h3 className="font-semibold text-lg mt-1">سواتر شينكو</h3>
            <p className="text-[#86674c] mt-1 text-center text-sm flex-1">
              سواتر معدنية اقتصادية ومتينة، مناسبة للمشاريع الكبيرة والأسوار الخارجية، توفر حماية وخصوصية ممتازة.
            </p>
          </div>
        </div>
      </section>

      {/* معرض أعمال السواتر */}
      <section className="max-w-6xl mx-auto px-4 my-16 mb-8">
        <h2 className="text-2xl font-bold mb-8 text-center">معرض أعمالنا</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <Image src="https://ext.same-assets.com/742929371/2877641733.jpeg" alt="سواتر حديد فاخرة" className="rounded-xl shadow border w-full h-32 object-cover" width={300} height={150} />
          <Image src="https://ext.same-assets.com/742929371/3583571490.jpeg" alt="سواتر خشبية مميزة" className="rounded-xl shadow border w-full h-32 object-cover" width={300} height={150} />
          <Image src="https://ext.same-assets.com/742929371/2152465902.jpeg" alt="سواتر قماش عالية الجودة" className="rounded-xl shadow border w-full h-32 object-cover" width={300} height={150} />
          <Image src="https://ext.same-assets.com/742929371/3826485312.jpeg" alt="سواتر شينكو متينة" className="rounded-xl shadow border w-full h-32 object-cover" width={300} height={150} />
          <Image src="https://ext.same-assets.com/742929371/706870550.jpeg" alt="سواتر للفلل الفاخرة" className="rounded-xl shadow border w-full h-32 object-cover" width={300} height={150} />
          <Image src="https://ext.same-assets.com/742929371/460471090.jpeg" alt="سواتر حديد مشغول" className="rounded-xl shadow border w-full h-32 object-cover" width={300} height={150} />
          <Image src="https://ext.same-assets.com/742929371/2544295178.jpeg" alt="سواتر خشبية عصرية" className="rounded-xl shadow border w-full h-32 object-cover" width={300} height={150} />
          <Image src="https://ext.same-assets.com/742929371/1284030991.jpeg" alt="سواتر للمجمعات السكنية" className="rounded-xl shadow border w-full h-32 object-cover" width={300} height={150} />
        </div>
      </section>

      {/* دعوة للتواصل */}
      <section className="bg-[#2d2a27] text-white py-12 mt-16">
        <div className="max-w-3xl mx-auto px-4 flex flex-col gap-4 items-center text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-2">هل أنت مهتم بالحصول على خدماتنا؟</h2>
          <p className="mb-5 text-[#ffe4ad]">تواصل معنا الآن للحصول على استشارة مجانية وعرض سعر مناسب</p>
          <div className="flex flex-wrap gap-3 justify-center">
            <a href="tel:+966553719009" className="bg-[#a78e5d] hover:bg-[#86674c] transition text-white font-bold px-5 py-2 rounded-full">اتصل الآن</a>
            <a href="https://wa.me/+966553719009" className="bg-[#26ca8b] hover:bg-green-600 transition text-white font-bold px-5 py-2 rounded-full">واتساب</a>
            <Link href="/#contact" className="border border-[#ffe4ad] text-[#ffe4ad] font-bold px-5 py-2 rounded-full hover:bg-[#ffe4ad] hover:text-[#2d2a27] transition">طلب عرض سعر</Link>
          </div>
        </div>
      </section>

      {/* الأسئلة الشائعة */}
      <section className="my-20 max-w-3xl mx-auto px-4">
        <h2 className="text-2xl font-bold mb-8 text-center">الأسئلة الشائعة</h2>
        <div className="space-y-4">
          <details className="bg-white border rounded shadow p-4 transition-all duration-300 hover:shadow-lg">
            <summary className="font-bold text-[#a78e5d] cursor-pointer flex items-center justify-between">ما هي أفضل أنواع السواتر للمنازل؟<span>+</span></summary>
            <p className="mt-2 text-[#2d2a27]">تعتبر السواتر الخشبية والحديد المشغول من أفضل الأنواع للمنازل، حيث توفر الخصوصية مع المظهر الجمالي المميز. لكن الاختيار يعتمد على ميزانية العميل والطابع العام للمنزل والمنطقة المحيطة.</p>
          </details>
          <details className="bg-white border rounded shadow p-4 transition-all duration-300 hover:shadow-lg">
            <summary className="font-bold text-[#a78e5d] cursor-pointer flex items-center justify-between">كم تبلغ مدة تنفيذ السواتر؟<span>+</span></summary>
            <p className="mt-2 text-[#2d2a27]">تختلف مدة التنفيذ حسب حجم المشروع ونوع الساتر، ولكن بشكل عام تتراوح بين 5-10 أيام للمشاريع الصغيرة، و10-20 يوم للمشاريع المتوسطة والكبيرة.</p>
          </details>
          <details className="bg-white border rounded shadow p-4 transition-all duration-300 hover:shadow-lg">
            <summary className="font-bold text-[#a78e5d] cursor-pointer flex items-center justify-between">هل تقدمون ضمان على السواتر؟<span>+</span></summary>
            <p className="mt-2 text-[#2d2a27]">نعم، نقدم ضمان يصل إلى 15 سنة على السواتر حسب نوع الخامة المستخدمة، ويشمل الضمان جودة التركيب والخامات ومقاومتها للعوامل الجوية والتآكل.</p>
          </details>
          <details className="bg-white border rounded shadow p-4 transition-all duration-300 hover:shadow-lg">
            <summary className="font-bold text-[#a78e5d] cursor-pointer flex items-center justify-between">ما هي مميزات سواتر الشينكو مقارنة بالأنواع الأخرى؟<span>+</span></summary>
            <p className="mt-2 text-[#2d2a27]">تتميز سواتر الشينكو بكونها اقتصادية وسريعة التركيب ومقاومة للعوامل الجوية، مما يجعلها مثالية للمشاريع الكبيرة والأسوار الخارجية. كما أنها متوفرة بألوان متعددة وتحتاج لصيانة أقل مقارنة بالأنواع الأخرى.</p>
          </details>
        </div>
      </section>

      {/* خدمات أخرى */}
      <section className="my-20 max-w-7xl mx-auto px-4">
        <h2 className="text-2xl font-bold mb-8 text-center">خدمات أخرى قد تهمك</h2>
        <div className="grid md:grid-cols-3 gap-5">
          <div className="bg-white rounded-xl border shadow p-6 flex flex-col items-center">
            <Image
              src="https://ext.same-assets.com/742929371/2205790480.jpeg"
              alt="المظلات"
              className="h-24 w-full object-cover rounded mb-2"
              width={300}
              height={150}
            />
            <h3 className="font-semibold text-lg mt-1">المظلات</h3>
            <p className="text-[#86674c] mt-1 text-center text-sm flex-1">تصميم وتنفيذ مختلف أنواع المظلات للسيارات، الحدائق، المدارس والمسابح بأفضل الخامات.</p>
            <Link href="/mazallat" className="mt-4 px-5 py-2 bg-[#a78e5d] text-white rounded-full font-semibold transition hover:bg-[#86674c]">عرض التفاصيل</Link>
          </div>
          <div className="bg-white rounded-xl border shadow p-6 flex flex-col items-center">
            <Image
              src="https://ext.same-assets.com/3073684241/343302816.jpeg"
              alt="بيوت شعر"
              className="h-24 w-full object-cover rounded mb-2"
              width={300}
              height={150}
            />
            <h3 className="font-semibold text-lg mt-1">بيوت شعر</h3>
            <p className="text-[#86674c] mt-1 text-center text-sm flex-1">تصميم وتنفيذ بيوت شعر بمختلف الأنواع والأحجام بتصاميم تجمع بين الأصالة والحداثة.</p>
            <Link href="/byoot_shaar" className="mt-4 px-5 py-2 bg-[#a78e5d] text-white rounded-full font-semibold transition hover:bg-[#86674c]">عرض التفاصيل</Link>
          </div>
          <div className="bg-white rounded-xl border shadow p-6 flex flex-col items-center">
            <Image
              src="https://ext.same-assets.com/200922472/1754028587.jpeg"
              alt="خيام ملكية"
              className="h-24 w-full object-cover rounded mb-2"
              width={300}
              height={150}
            />
            <h3 className="font-semibold text-lg mt-1">خيام ملكية</h3>
            <p className="text-[#86674c] mt-1 text-center text-sm flex-1">تصميم وتنفيذ خيام ملكية فاخرة بتصاميم فريدة وعصرية تناسب كافة المناسبات والاحتفالات.</p>
            <Link href="/khayyam" className="mt-4 px-5 py-2 bg-[#a78e5d] text-white rounded-full font-semibold transition hover:bg-[#86674c]">عرض التفاصيل</Link>
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
            <Link href="/" className="hover:text-[#a78e5d] transition">الرئيسية</Link>
            <Link href="/#services" className="hover:text-[#a78e5d] transition">خدماتنا</Link>
            <Link href="/#about" className="hover:text-[#a78e5d] transition">من نحن</Link>
            <Link href="/#projects" className="hover:text-[#a78e5d] transition">أعمالنا</Link>
            <Link href="/#contact" className="hover:text-[#a78e5d] transition">اتصل بنا</Link>
          </div>
          <div className="border-t border-[#a78e5d] pt-5 text-sm text-[#c3ad90]">
            جميع الحقوق محفوظة © 2024 مؤسسة الديار العالمية
          </div>
        </div>
      </footer>
    </div>
  );
}
