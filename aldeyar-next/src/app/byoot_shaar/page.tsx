import React from "react";
import Link from "next/link";
import Image from "next/image";

export const metadata = {
  title: "بيوت شعر في جدة | مؤسسة الديار العالمية",
  description: "بيوت شعر في جدة - مؤسسة الديار العالمية تقدم تصميم وتنفيذ بيوت شعر ملكية، بيوت شعر عربية، بيوت شعر للمجالس، بيوت شعر للحدائق بأفضل الخامات وأعلى معايير الجودة"
};

export default function ByootShaarPage() {
  return (
    <div dir="rtl" className="font-sans bg-[#fafafa] text-[#2d2a27]">
      {/* بانر الخدمة */}
      <header className="relative w-full min-h-[300px] md:min-h-[380px] flex items-center justify-center overflow-hidden">
        <Image
          src="https://ext.same-assets.com/3073684241/1858852453.jpeg"
          alt="بيوت شعر في جدة"
          className="absolute inset-0 w-full h-full object-cover object-center opacity-80"
          width={1920}
          height={800}
          priority
        />
        <div className="relative z-10 p-8 text-center text-white drop-shadow bg-black/50 rounded w-full max-w-3xl mx-auto mt-16">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">بيوت شعر في جدة</h1>
          <p className="text-lg md:text-xl mb-2">تصميم وتنفيذ مختلف أنواع بيوت الشعر بأفضل الخامات وأعلى معايير الجودة</p>
          <div className="flex justify-center gap-2 text-sm text-[#ffe4ad] mt-3">
            <Link href="/" className="underline hover:text-yellow-400">الرئيسية</Link>
            <span>/</span>
            <Link href="/#services" className="underline hover:text-yellow-400">خدماتنا</Link>
            <span>/</span>
            <span className="text-white/90">بيوت شعر</span>
          </div>
        </div>
      </header>

      {/* وصف وتعريف بيوت الشعر */}
      <section className="max-w-5xl mx-auto my-14 px-4 grid md:grid-cols-2 gap-10 items-center">
        <div className="flex justify-center md:order-2">
          <Image
            src="https://ext.same-assets.com/3073684241/343302816.jpeg"
            alt="بيوت شعر بأعلى معايير الجودة"
            className="rounded-lg border-4 border-[#c3ac8f] bg-white max-w-xs shadow"
            width={400}
            height={300}
          />
        </div>
        <div className="md:order-1">
          <h2 className="text-2xl font-bold mb-4">بيوت شعر بأعلى معايير الجودة</h2>
          <p className="mb-3 text-lg">تعد مؤسسة الديار العالمية من أفضل المؤسسات المتخصصة في تصميم وتركيب مختلف أنواع بيوت الشعر في جدة والمملكة العربية السعودية. نقدم لعملائنا الكرام مجموعة واسعة من بيوت الشعر المصنوعة من أجود الخامات والمواد التي تتميز بقدرتها على تحمل الظروف المناخية القاسية، وتوفير الراحة والخصوصية والأصالة.</p>
          <p className="font-bold mb-2">تتميز بيوت الشعر لدينا بأنها:</p>
          <ul className="list-inside list-disc space-y-2 text-base text-[#86674c]">
            <li>مصنوعة من أجود أنواع الأقمشة العازلة للحرارة والمقاومة للماء</li>
            <li>تجمع بين الأصالة والحداثة في التصميم</li>
            <li>مقاومة للتغيرات الجوية وأشعة الشمس</li>
            <li>متوفرة بتصاميم متنوعة تناسب جميع الأذواق</li>
            <li>مزودة بأحدث أنظمة التكييف والإضاءة</li>
            <li>خدمة تركيب وصيانة احترافية</li>
          </ul>
        </div>
      </section>

      {/* أنواع بيوت الشعر */}
      <section className="max-w-6xl mx-auto px-4 my-16 mb-12">
        <h2 className="text-2xl font-bold mb-8 text-center text-[#a78e5d]">أنواع بيوت الشعر التي نقدمها</h2>
        <div className="grid md:grid-cols-4 gap-7">
          <div className="bg-white rounded-xl border shadow p-5 flex flex-col items-center">
            <Image
              src="https://ext.same-assets.com/3073684241/3661796902.jpeg"
              alt="بيوت شعر ملكية"
              className="h-28 w-full object-cover rounded mb-2"
              width={400}
              height={200}
            />
            <h3 className="font-semibold text-lg mt-1">بيوت شعر ملكية</h3>
            <p className="text-[#86674c] mt-1 text-center text-sm flex-1">
              بيوت شعر ملكية فاخرة مصممة بأعلى معايير الجودة والرفاهية، مناسبة لاستقبال الضيوف وإقامة المناسبات الخاصة.
            </p>
          </div>
          <div className="bg-white rounded-xl border shadow p-5 flex flex-col items-center">
            <Image
              src="https://ext.same-assets.com/3073684241/566618696.jpeg"
              alt="بيوت شعر عربية"
              className="h-28 w-full object-cover rounded mb-2"
              width={400}
              height={200}
            />
            <h3 className="font-semibold text-lg mt-1">بيوت شعر عربية</h3>
            <p className="text-[#86674c] mt-1 text-center text-sm flex-1">
              بيوت شعر بالطراز العربي التقليدي، تعكس الأصالة والتراث العربي مع لمسات عصرية تناسب متطلبات الحياة الحديثة.
            </p>
          </div>
          <div className="bg-white rounded-xl border shadow p-5 flex flex-col items-center">
            <Image
              src="https://ext.same-assets.com/3073684241/95813410.jpeg"
              alt="بيوت شعر للمجالس"
              className="h-28 w-full object-cover rounded mb-2"
              width={400}
              height={200}
            />
            <h3 className="font-semibold text-lg mt-1">بيوت شعر للمجالس</h3>
            <p className="text-[#86674c] mt-1 text-center text-sm flex-1">
              بيوت شعر مصممة خصيصًا للمجالس الرجالية، تمتاز بالفخامة والرحابة وتوفير أقصى درجات الراحة للضيوف.
            </p>
          </div>
          <div className="bg-white rounded-xl border shadow p-5 flex flex-col items-center">
            <Image
              src="https://ext.same-assets.com/3073684241/1685504834.jpeg"
              alt="بيوت شعر للحدائق"
              className="h-28 w-full object-cover rounded mb-2"
              width={400}
              height={200}
            />
            <h3 className="font-semibold text-lg mt-1">بيوت شعر للحدائق</h3>
            <p className="text-[#86674c] mt-1 text-center text-sm flex-1">
              بيوت شعر مصممة للحدائق المنزلية، توفر مساحة مميزة للجلسات العائلية والاسترخاء في الهواء الطلق مع الحفاظ على الخصوصية.
            </p>
          </div>
        </div>
      </section>

      {/* معرض أعمال بيوت الشعر */}
      <section className="max-w-6xl mx-auto px-4 my-16 mb-8">
        <h2 className="text-2xl font-bold mb-8 text-center">معرض أعمالنا</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <Image src="https://ext.same-assets.com/3073684241/642393919.jpeg" alt="بيت شعر ملكي فاخر" className="rounded-xl shadow border w-full h-32 object-cover" width={300} height={150} />
          <Image src="https://ext.same-assets.com/3073684241/3714868902.jpeg" alt="بيت شعر عربي تقليدي" className="rounded-xl shadow border w-full h-32 object-cover" width={300} height={150} />
          <Image src="https://ext.same-assets.com/3073684241/3316960675.jpeg" alt="بيت شعر للمجالس" className="rounded-xl shadow border w-full h-32 object-cover" width={300} height={150} />
          <Image src="https://ext.same-assets.com/3073684241/1685504834.jpeg" alt="بيت شعر للحدائق" className="rounded-xl shadow border w-full h-32 object-cover" width={300} height={150} />
          <Image src="https://ext.same-assets.com/3073684241/343302816.jpeg" alt="بيت شعر بتصميم عصري" className="rounded-xl shadow border w-full h-32 object-cover" width={300} height={150} />
          <Image src="https://ext.same-assets.com/3073684241/2122556860.jpeg" alt="بيت شعر مع ديكورات داخلية فاخرة" className="rounded-xl shadow border w-full h-32 object-cover" width={300} height={150} />
          <Image src="https://ext.same-assets.com/3073684241/2063912984.jpeg" alt="بيت شعر مع إضاءة مميزة" className="rounded-xl shadow border w-full h-32 object-cover" width={300} height={150} />
          <Image src="https://ext.same-assets.com/3073684241/901478804.jpeg" alt="بيت شعر بتطريزات يدوية" className="rounded-xl shadow border w-full h-32 object-cover" width={300} height={150} />
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
            <summary className="font-bold text-[#a78e5d] cursor-pointer flex items-center justify-between">ما هي أنواع الأقمشة المستخدمة في بيوت الشعر؟<span>+</span></summary>
            <p className="mt-2 text-[#2d2a27]">نستخدم في مؤسسة الديار العالمية أجود أنواع الأقمشة المخصصة لبيوت الشعر، مثل القماش الكوري عالي الجودة، والقماش الكتاني المعالج، وأقمشة البولي إيثيلين المقاومة للماء والحرارة، والأقمشة المطرزة المصنوعة خصيصًا لبيوت الشعر الملكية.</p>
          </details>
          <details className="bg-white border rounded shadow p-4 transition-all duration-300 hover:shadow-lg">
            <summary className="font-bold text-[#a78e5d] cursor-pointer flex items-center justify-between">كم تستغرق مدة تنفيذ بيت الشعر؟<span>+</span></summary>
            <p className="mt-2 text-[#2d2a27]">تختلف مدة التنفيذ حسب حجم المشروع وتفاصيل التصميم، ولكن بشكل عام تتراوح بين 10-20 يوم للمشاريع المتوسطة، وقد تصل إلى 30 يوم للمشاريع الكبيرة والملكية التي تحتاج لتفاصيل دقيقة وتطريزات خاصة.</p>
          </details>
          <details className="bg-white border rounded shadow p-4 transition-all duration-300 hover:shadow-lg">
            <summary className="font-bold text-[#a78e5d] cursor-pointer flex items-center justify-between">هل يمكن تجهيز بيت الشعر بأنظمة تكييف وإضاءة؟<span>+</span></summary>
            <p className="mt-2 text-[#2d2a27]">نعم، نقدم خدمة تجهيز بيوت الشعر بأحدث أنظمة التكييف المركزي أو المنفصل، وأنظمة الإضاءة الداخلية والخارجية، كما يمكن تجهيزها بأنظمة صوتية وشاشات عرض، وكافة التمديدات الكهربائية اللازمة لتوفير أقصى درجات الراحة.</p>
          </details>
          <details className="bg-white border rounded shadow p-4 transition-all duration-300 hover:shadow-lg">
            <summary className="font-bold text-[#a78e5d] cursor-pointer flex items-center justify-between">هل تقدمون خدمة الصيانة لبيوت الشعر؟<span>+</span></summary>
            <p className="mt-2 text-[#2d2a27]">نعم، نقدم خدمة صيانة دورية لبيوت الشعر تشمل فحص الهيكل المعدني، وتنظيف وصيانة الأقمشة، واستبدال أي أجزاء تالفة، وصيانة أنظمة الإضاءة والتكييف، وذلك لضمان استمرارية بيت الشعر بأفضل حالة لأطول فترة ممكنة.</p>
          </details>
        </div>
      </section>

      {/* خدمات أخرى */}
      <section className="my-20 max-w-7xl mx-auto px-4">
        <h2 className="text-2xl font-bold mb-8 text-center">خدمات أخرى قد تهمك</h2>
        <div className="grid md:grid-cols-3 gap-5">
          <div className="bg-white rounded-xl border shadow p-6 flex flex-col items-center">
            <Image
              src="https://ext.same-assets.com/3073684241/2205790480.jpeg"
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
              src="https://ext.same-assets.com/3073684241/531069762.jpeg"
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
