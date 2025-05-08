import React from "react";
import Link from "next/link";
import Image from "next/image";

export const metadata = {
  title: "تنسيق حدائق في جدة | مؤسسة الديار العالمية",
  description: "تنسيق حدائق في جدة - مؤسسة الديار العالمية تقدم خدمات تصميم وتنسيق الحدائق المنزلية والعامة بأحدث التقنيات وأفضل النباتات والديكورات"
};

export default function LandscapingPage() {
  return (
    <div dir="rtl" className="font-sans bg-[#fafafa] text-[#2d2a27]">
      {/* بانر الخدمة */}
      <header className="relative w-full min-h-[300px] md:min-h-[380px] flex items-center justify-center overflow-hidden">
        <Image
          src="https://ext.same-assets.com/4049809232/2214971808.jpeg"
          alt="تنسيق حدائق في جدة"
          className="absolute inset-0 w-full h-full object-cover object-center opacity-80"
          width={1920}
          height={800}
          priority
        />
        <div className="relative z-10 p-8 text-center text-white drop-shadow bg-black/50 rounded w-full max-w-3xl mx-auto mt-16">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">تنسيق حدائق في جدة</h1>
          <p className="text-lg md:text-xl mb-2">تصميم وتنسيق حدائق منزلية وعامة بأفكار إبداعية وخامات متميزة</p>
          <div className="flex justify-center gap-2 text-sm text-[#ffe4ad] mt-3">
            <Link href="/" className="underline hover:text-yellow-400">الرئيسية</Link>
            <span>/</span>
            <Link href="/#services" className="underline hover:text-yellow-400">خدماتنا</Link>
            <span>/</span>
            <span className="text-white/90">تنسيق حدائق</span>
          </div>
        </div>
      </header>

      {/* وصف الخدمة */}
      <section className="max-w-5xl mx-auto my-14 px-4 grid md:grid-cols-2 gap-10 items-center">
        <div className="flex justify-center md:order-2">
          <Image
            src="https://ext.same-assets.com/4049809232/447736083.jpeg"
            alt="حدائق مميزة"
            className="rounded-lg border-4 border-[#c3ac8f] bg-white max-w-xs shadow"
            width={400}
            height={300}
          />
        </div>
        <div className="md:order-1">
          <h2 className="text-2xl font-bold mb-4">حدائق مميزة تجمع بين الجمال والاستدامة</h2>
          <p className="mb-3 text-lg">تقدم مؤسسة الديار العالمية خدمات متكاملة في مجال تصميم وتنسيق الحدائق المنزلية والعامة بأفكار عصرية وإبداعية. نعمل على تحويل المساحات الخارجية إلى واحات خضراء جميلة.</p>
          <p className="mb-2">تتميز خدماتنا بـ:</p>
          <ul className="list-inside list-disc space-y-2 text-base text-[#86674c]">
            <li>تصاميم عصرية تجمع بين الأناقة والوظائف العملية</li>
            <li>استخدام أفضل أنواع النباتات والأشجار المناسبة للمناخ</li>
            <li>أنظمة ري وتصريف مياه متطورة</li>
            <li>تركيبات وإضاءة خارجية بتصاميم مميزة</li>
            <li>فريق عمل متخصص في التنفيذ والإشراف والصيانة</li>
          </ul>
        </div>
      </section>

      {/* خدمات تنسيق الحدائق */}
      <section className="max-w-6xl mx-auto px-4 my-16">
        <h2 className="text-2xl font-bold mb-8 text-center text-[#a78e5d]">خدمات تنسيق الحدائق التي نقدمها</h2>
        <div className="grid md:grid-cols-3 gap-7">
          <div className="bg-white rounded-xl border shadow p-5 flex flex-col items-center">
            <Image
              src="https://ext.same-assets.com/4049809232/795805632.jpeg"
              alt="تصميم حدائق منزلية"
              className="h-28 w-full object-cover rounded mb-2"
              width={400}
              height={200}
            />
            <h3 className="font-semibold text-lg mt-1">تصميم حدائق منزلية</h3>
            <p className="text-[#86674c] mt-1 text-center text-sm">تصميم وتنسيق الحدائق المنزلية بأحدث الأفكار والتقنيات</p>
          </div>
          <div className="bg-white rounded-xl border shadow p-5 flex flex-col items-center">
            <Image
              src="https://ext.same-assets.com/4049809232/3955559781.jpeg"
              alt="زراعة النجيل"
              className="h-28 w-full object-cover rounded mb-2"
              width={400}
              height={200}
            />
            <h3 className="font-semibold text-lg mt-1">زراعة النجيل</h3>
            <p className="text-[#86674c] mt-1 text-center text-sm">زراعة أفضل أنواع النجيل الطبيعي والصناعي</p>
          </div>
          <div className="bg-white rounded-xl border shadow p-5 flex flex-col items-center">
            <Image
              src="https://ext.same-assets.com/4049809232/1676117830.jpeg"
              alt="نوافير وشلالات"
              className="h-28 w-full object-cover rounded mb-2"
              width={400}
              height={200}
            />
            <h3 className="font-semibold text-lg mt-1">نوافير وشلالات</h3>
            <p className="text-[#86674c] mt-1 text-center text-sm">تركيب نوافير وشلالات بتصاميم عصرية ومبتكرة</p>
          </div>
        </div>
      </section>

      {/* معرض الأعمال */}
      <section className="max-w-6xl mx-auto px-4 my-16">
        <h2 className="text-2xl font-bold mb-8 text-center">معرض أعمالنا</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <Image src="https://ext.same-assets.com/4049809232/1574876251.jpeg" alt="حديقة منزلية" className="rounded border shadow w-full h-32 object-cover" width={300} height={150} />
          <Image src="https://ext.same-assets.com/4049809232/785441482.jpeg" alt="تصميم حدائق" className="rounded border shadow w-full h-32 object-cover" width={300} height={150} />
          <Image src="https://ext.same-assets.com/4049809232/3955559781.jpeg" alt="نجيل طبيعي" className="rounded border shadow w-full h-32 object-cover" width={300} height={150} />
          <Image src="https://ext.same-assets.com/4049809232/1676117830.jpeg" alt="النوافير" className="rounded border shadow w-full h-32 object-cover" width={300} height={150} />
        </div>
      </section>

      {/* الأسئلة الشائعة */}
      <section className="my-20 max-w-3xl mx-auto px-4">
        <h2 className="text-2xl font-bold mb-8 text-center">الأسئلة الشائعة</h2>
        <div className="space-y-4">
          <details className="bg-white border rounded shadow p-4 transition-all duration-300 hover:shadow-lg">
            <summary className="font-bold text-[#a78e5d] cursor-pointer flex items-center justify-between">ما هي الخطوات الأولى في تصميم الحديقة؟<span>+</span></summary>
            <p className="mt-2 text-[#2d2a27]">تبدأ عملية تصميم وتنسيق الحديقة بزيارة ميدانية للموقع لدراسة المساحة وطبيعة الأرض والظروف البيئية، ثم نقوم بإعداد تصور مبدئي يناسب احتياجات العميل وميزانيته</p>
          </details>
          <details className="bg-white border rounded shadow p-4 transition-all duration-300 hover:shadow-lg">
            <summary className="font-bold text-[#a78e5d] cursor-pointer flex items-center justify-between">ما هي أفضل النباتات المناسبة للحدائق في جدة؟<span>+</span></summary>
            <p className="mt-2 text-[#2d2a27]">تعتبر النباتات المحلية والمتأقلمة مع البيئة الصحراوية هي الأفضل للحدائق في المنطقة الغربية، مثل أشجار النخيل، الجهنمية، الفل، الياسمين</p>
          </details>
        </div>
      </section>

      {/* دعوة للتواصل */}
      <section className="bg-[#2d2a27] text-white py-12 mt-16">
        <div className="max-w-3xl mx-auto px-4 flex flex-col gap-4 items-center text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-2">هل ترغب في حديقة جميلة لمنزلك؟</h2>
          <p className="mb-5 text-[#ffe4ad]">تواصل معنا الآن للحصول على استشارة مجانية وعرض سعر مناسب</p>
          <div className="flex flex-wrap gap-3 justify-center">
            <a href="tel:+966553719009" className="bg-[#a78e5d] hover:bg-[#86674c] transition text-white font-bold px-5 py-2 rounded-full">اتصل الآن</a>
            <a href="https://wa.me/+966553719009" className="bg-[#26ca8b] hover:bg-green-600 transition text-white font-bold px-5 py-2 rounded-full">واتساب</a>
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
