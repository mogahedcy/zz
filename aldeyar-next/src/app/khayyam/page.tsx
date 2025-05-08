import React from "react";
import Link from "next/link";
import Image from "next/image";

export const metadata = {
  title: "خيام ملكية في جدة | مؤسسة الديار العالمية",
  description: "خيام ملكية في جدة - مؤسسة الديار العالمية تقدم تصميم وتنفيذ خيام ملكية فاخرة، خيام أفراح، خيام مناسبات، خيام عزاء بأفضل الخامات وأعلى معايير الجودة"
};

export default function KhayyamPage() {
  return (
    <div dir="rtl" className="font-sans bg-[#fafafa] text-[#2d2a27]">
      {/* بانر الخدمة */}
      <header className="relative w-full min-h-[300px] md:min-h-[380px] flex items-center justify-center overflow-hidden">
        <Image
          src="https://ext.same-assets.com/200922472/2553766852.jpeg"
          alt="خيام ملكية في جدة"
          className="absolute inset-0 w-full h-full object-cover object-center opacity-80"
          width={1920}
          height={800}
          priority
        />
        <div className="relative z-10 p-8 text-center text-white drop-shadow bg-black/50 rounded w-full max-w-3xl mx-auto mt-16">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">خيام ملكية في جدة</h1>
          <p className="text-lg md:text-xl mb-2">تصميم وتنفيذ مختلف أنواع الخيام الملكية بأفضل الخامات وأعلى معايير الجودة</p>
          <div className="flex justify-center gap-2 text-sm text-[#ffe4ad] mt-3">
            <Link href="/" className="underline hover:text-yellow-400">الرئيسية</Link>
            <span>/</span>
            <Link href="/#services" className="underline hover:text-yellow-400">خدماتنا</Link>
            <span>/</span>
            <span className="text-white/90">خيام ملكية</span>
          </div>
        </div>
      </header>

      {/* وصف وتعريف الخيام الملكية */}
      <section className="max-w-5xl mx-auto my-14 px-4 grid md:grid-cols-2 gap-10 items-center">
        <div className="flex justify-center md:order-2">
          <Image
            src="https://ext.same-assets.com/200922472/870035748.jpeg"
            alt="خيام ملكية فاخرة في جدة"
            className="rounded-lg border-4 border-[#c3ac8f] bg-white max-w-xs shadow"
            width={400}
            height={300}
          />
        </div>
        <div className="md:order-1">
          <h2 className="text-2xl font-bold mb-4">خيام ملكية بأعلى معايير الجودة</h2>
          <p className="mb-3 text-lg">تعد مؤسسة الديار العالمية من أفضل المؤسسات المتخصصة في تصميم وتركيب مختلف أنواع الخيام الملكية في جدة والمملكة العربية السعودية. نقدم لعملائنا الكرام مجموعة واسعة من الخيام الملكية المصنوعة من أجود الخامات والمواد التي تتميز بالفخامة والرقي والقدرة على تحمل الظروف المناخية المختلفة.</p>
          <p className="font-bold mb-2">تتميز الخيام الملكية لدينا بأنها:</p>
          <ul className="list-inside list-disc space-y-2 text-base text-[#86674c]">
            <li>مصنوعة من أجود أنواع الأقمشة والخامات المستوردة عالية الجودة</li>
            <li>تصاميم فاخرة تجمع بين الطابع الملكي التقليدي واللمسات العصرية</li>
            <li>مقاومة للرياح والأمطار وأشعة الشمس</li>
            <li>متوفرة بأحجام وألوان متنوعة تناسب جميع المناسبات</li>
            <li>مزودة بأحدث أنظمة التكييف والإضاءة والصوت</li>
            <li>خدمة تصميم وتنفيذ وتركيب احترافية</li>
          </ul>
        </div>
      </section>

      {/* أنواع الخيام الملكية */}
      <section className="max-w-6xl mx-auto px-4 my-16 mb-12">
        <h2 className="text-2xl font-bold mb-8 text-center text-[#a78e5d]">أنواع الخيام الملكية التي نقدمها</h2>
        <div className="grid md:grid-cols-4 gap-7">
          <div className="bg-white rounded-xl border shadow p-5 flex flex-col items-center">
            <Image
              src="https://ext.same-assets.com/200922472/1754028587.jpeg"
              alt="خيام ملكية فاخرة"
              className="h-28 w-full object-cover rounded mb-2"
              width={400}
              height={200}
            />
            <h3 className="font-semibold text-lg mt-1">خيام ملكية فاخرة</h3>
            <p className="text-[#86674c] mt-1 text-center text-sm flex-1">
              خيام ملكية فاخرة ذات تصميم راقي ومميز، مجهزة بكافة وسائل الراحة، مناسبة للمناسبات الرسمية واستقبال كبار الشخصيات.
            </p>
          </div>
          <div className="bg-white rounded-xl border shadow p-5 flex flex-col items-center">
            <Image
              src="https://ext.same-assets.com/200922472/3473190553.jpeg"
              alt="خيام أفراح ومناسبات"
              className="h-28 w-full object-cover rounded mb-2"
              width={400}
              height={200}
            />
            <h3 className="font-semibold text-lg mt-1">خيام أفراح ومناسبات</h3>
            <p className="text-[#86674c] mt-1 text-center text-sm flex-1">
              خيام مصممة خصيصًا للأفراح والمناسبات الخاصة، تتميز بالفخامة والرحابة وإمكانية تجهيزها حسب طبيعة المناسبة والذوق الشخصي.
            </p>
          </div>
          <div className="bg-white rounded-xl border shadow p-5 flex flex-col items-center">
            <Image
              src="https://ext.same-assets.com/200922472/1836008776.jpeg"
              alt="خيام عزاء"
              className="h-28 w-full object-cover rounded mb-2"
              width={400}
              height={200}
            />
            <h3 className="font-semibold text-lg mt-1">خيام عزاء</h3>
            <p className="text-[#86674c] mt-1 text-center text-sm flex-1">
              خيام مخصصة لمجالس العزاء، مصممة بشكل يوفر الراحة والخصوصية ويتناسب مع طبيعة المناسبة، مع إمكانية توفير جميع التجهيزات اللازمة.
            </p>
          </div>
          <div className="bg-white rounded-xl border shadow p-5 flex flex-col items-center">
            <Image
              src="https://ext.same-assets.com/200922472/1549714147.jpeg"
              alt="خيام VIP"
              className="h-28 w-full object-cover rounded mb-2"
              width={400}
              height={200}
            />
            <h3 className="font-semibold text-lg mt-1">خيام VIP</h3>
            <p className="text-[#86674c] mt-1 text-center text-sm flex-1">
              خيام VIP ذات مواصفات خاصة وتجهيزات استثنائية، مصممة لتلبية متطلبات كبار الشخصيات والمناسبات الرفيعة المستوى، مع إمكانية التصميم حسب الطلب.
            </p>
          </div>
        </div>
      </section>

      {/* معرض أعمال الخيام الملكية */}
      <section className="max-w-6xl mx-auto px-4 my-16 mb-8">
        <h2 className="text-2xl font-bold mb-8 text-center">معرض أعمالنا</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <Image src="https://ext.same-assets.com/200922472/1754028587.jpeg" alt="خيمة ملكية فاخرة" className="rounded-xl shadow border w-full h-32 object-cover" width={300} height={150} />
          <Image src="https://ext.same-assets.com/200922472/3473190553.jpeg" alt="خيمة أفراح" className="rounded-xl shadow border w-full h-32 object-cover" width={300} height={150} />
          <Image src="https://ext.same-assets.com/200922472/1836008776.jpeg" alt="خيمة مناسبات" className="rounded-xl shadow border w-full h-32 object-cover" width={300} height={150} />
          <Image src="https://ext.same-assets.com/200922472/1549714147.jpeg" alt="خيمة VIP" className="rounded-xl shadow border w-full h-32 object-cover" width={300} height={150} />
          <Image src="https://ext.same-assets.com/200922472/1202963034.jpeg" alt="خيمة بتصميم عصري" className="rounded-xl shadow border w-full h-32 object-cover" width={300} height={150} />
          <Image src="https://ext.same-assets.com/200922472/1656897895.jpeg" alt="خيمة ملكية مع ديكورات داخلية" className="rounded-xl shadow border w-full h-32 object-cover" width={300} height={150} />
          <Image src="https://ext.same-assets.com/200922472/2436778414.jpeg" alt="خيمة مع إضاءة مميزة" className="rounded-xl shadow border w-full h-32 object-cover" width={300} height={150} />
          <Image src="https://ext.same-assets.com/200922472/1287770187.jpeg" alt="خيمة بتصميم فريد" className="rounded-xl shadow border w-full h-32 object-cover" width={300} height={150} />
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
            <summary className="font-bold text-[#a78e5d] cursor-pointer flex items-center justify-between">ما هي المناسبات المناسبة للخيام الملكية؟<span>+</span></summary>
            <p className="mt-2 text-[#2d2a27]">الخيام الملكية مناسبة للعديد من المناسبات مثل حفلات الزفاف، الاحتفالات العائلية، المؤتمرات، المعارض، المناسبات الرسمية، مجالس العزاء، والفعاليات الخاصة. يمكن تخصيص الخيمة الملكية حسب نوع المناسبة والمتطلبات الخاصة بكل عميل.</p>
          </details>
          <details className="bg-white border rounded shadow p-4 transition-all duration-300 hover:shadow-lg">
            <summary className="font-bold text-[#a78e5d] cursor-pointer flex items-center justify-between">ما هي المساحات المتوفرة للخيام الملكية؟<span>+</span></summary>
            <p className="mt-2 text-[#2d2a27]">نوفر خيام ملكية بمساحات متنوعة تبدأ من 100 متر مربع وتصل إلى 1000 متر مربع أو أكثر حسب الطلب. يمكن تصميم الخيام حسب المساحة المتاحة والعدد المتوقع للحضور، مع إمكانية دمج عدة خيام لتوفير مساحات أكبر.</p>
          </details>
          <details className="bg-white border rounded shadow p-4 transition-all duration-300 hover:shadow-lg">
            <summary className="font-bold text-[#a78e5d] cursor-pointer flex items-center justify-between">هل يمكن تجهيز الخيام الملكية بالديكورات والأثاث؟<span>+</span></summary>
            <p className="mt-2 text-[#2d2a27]">نعم، نقدم خدمة متكاملة تشمل تجهيز الخيام الملكية بالديكورات الداخلية، والأثاث الفاخر، وأنظمة الإضاءة المميزة، والسجاد، والستائر، والمفروشات، والطاولات والكراسي، ومنصات العرض، وأنظمة الصوت والفيديو، وكافة التجهيزات اللازمة للمناسبة.</p>
          </details>
          <details className="bg-white border rounded shadow p-4 transition-all duration-300 hover:shadow-lg">
            <summary className="font-bold text-[#a78e5d] cursor-pointer flex items-center justify-between">هل الخيام الملكية مناسبة للاستخدام في جميع فصول السنة؟<span>+</span></summary>
            <p className="mt-2 text-[#2d2a27]">نعم، خيامنا الملكية مصممة للاستخدام على مدار العام. نستخدم أقمشة ومواد عالية الجودة مقاومة للعوامل الجوية المختلفة. يتم تجهيز الخيام بأنظمة تكييف وتدفئة متطورة لضمان راحة الضيوف في جميع فصول السنة، سواء في الصيف الحار أو الشتاء البارد.</p>
          </details>
        </div>
      </section>

      {/* خدمات أخرى */}
      <section className="my-20 max-w-7xl mx-auto px-4">
        <h2 className="text-2xl font-bold mb-8 text-center">خدمات أخرى قد تهمك</h2>
        <div className="grid md:grid-cols-3 gap-5">
          <div className="bg-white rounded-xl border shadow p-6 flex flex-col items-center">
            <Image
              src="https://ext.same-assets.com/2539755772/3897470258.jpeg"
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
              src="https://ext.same-assets.com/2539755772/531069762.jpeg"
              alt="السواتر"
              className="h-24 w-full object-cover rounded mb-2"
              width={300}
              height={150}
            />
            <h3 className="font-semibold text-lg mt-1">السواتر</h3>
            <p className="text-[#86674c] mt-1 text-center text-sm flex-1">تركيب سواتر بمختلف الأنواع والخامات لتوفير الخصوصية والحماية للمنازل والمنشآت.</p>
            <Link href="/sawater" className="mt-4 px-5 py-2 bg-[#a78e5d] text-white rounded-full font-semibold transition hover:bg-[#86674c]">عرض التفاصيل</Link>
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
