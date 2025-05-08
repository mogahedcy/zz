import React from "react";
import Link from "next/link";
import Image from "next/image";

export const metadata = {
  title: "برجولات في جدة | مؤسسة الديار العالمية",
  description: "برجولات في جدة - مؤسسة الديار العالمية تقدم تصميم وتنفيذ برجولات خشبية وحديدية وألومنيوم بأفضل الخامات وأعلى معايير الجودة"
};

export default function PergolasPage() {
  return (
    <div dir="rtl" className="font-sans bg-[#fafafa] text-[#2d2a27]">
      {/* بانر الخدمة */}
      <header className="relative w-full min-h-[300px] md:min-h-[380px] flex items-center justify-center overflow-hidden">
        <Image
          src="https://ext.same-assets.com/3372524550/1734019317.jpeg"
          alt="برجولات في جدة"
          className="absolute inset-0 w-full h-full object-cover object-center opacity-80"
          width={1920}
          height={800}
          priority
        />
        <div className="relative z-10 p-8 text-center text-white drop-shadow bg-black/50 rounded w-full max-w-3xl mx-auto mt-16">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">برجولات في جدة</h1>
          <p className="text-lg md:text-xl mb-2">تصميم وتنفيذ برجولات خشبية وحديدية وألومنيوم بأفضل الخامات وأعلى معايير الجودة</p>
          <div className="flex justify-center gap-2 text-sm text-[#ffe4ad] mt-3">
            <Link href="/" className="underline hover:text-yellow-400">الرئيسية</Link>
            <span>/</span>
            <Link href="/#services" className="underline hover:text-yellow-400">خدماتنا</Link>
            <span>/</span>
            <span className="text-white/90">برجولات</span>
          </div>
        </div>
      </header>

      {/* وصف وتعريف البرجولات */}
      <section className="max-w-5xl mx-auto my-14 px-4 grid md:grid-cols-2 gap-10 items-center">
        <div className="flex justify-center md:order-2">
          <Image
            src="https://ext.same-assets.com/3372524550/3283197689.jpeg"
            alt="برجولات عصرية بتصاميم مبتكرة"
            className="rounded-lg border-4 border-[#c3ac8f] bg-white max-w-xs shadow"
            width={400}
            height={300}
          />
        </div>
        <div className="md:order-1">
          <h2 className="text-2xl font-bold mb-4">برجولات عصرية بتصاميم مبتكرة</h2>
          <p className="mb-3 text-lg">تقدم مؤسسة الديار العالمية خدمات تصميم وتركيب برجولات عصرية بأفضل الخامات والتصاميم المبتكرة. البرجولات هي هياكل معمارية جمالية تضفي لمسة من الفخامة والأناقة على المكان، وتوفر مساحة ظليلة للجلوس والاسترخاء - سواء في الحدائق، أو على الأسطح، أو بجانب حمامات السباحة.</p>
          <p className="font-bold mb-2">تتميز برجولاتنا بأنها:</p>
          <ul className="list-inside list-disc space-y-2 text-base text-[#86674c]">
            <li>مصنوعة من أفضل الخامات عالية الجودة المقاومة للصدأ</li>
            <li>تصاميم عصرية تجمع بين الأناقة والوظائف العملية</li>
            <li>مقاومة للعوامل الجوية وأشعة الشمس القوية</li>
            <li>متوفرة بأشكال وأحجام مختلفة تناسب كافة المساحات</li>
            <li>تركيب احترافي بواسطة فنيين متخصصين</li>
            <li>ضمان شامل على الخامات والتركيب لضمان جودة المنتج</li>
          </ul>
        </div>
      </section>

      {/* أنواع البرجولات */}
      <section className="max-w-6xl mx-auto px-4 my-16 mb-12">
        <h2 className="text-2xl font-bold mb-8 text-center text-[#a78e5d]">أنواع البرجولات التي نقدمها</h2>
        <div className="grid md:grid-cols-4 gap-7">
          <div className="bg-white rounded-xl border shadow p-5 flex flex-col items-center">
            <Image
              src="https://ext.same-assets.com/3372524550/1177626593.jpeg"
              alt="برجولات خشبية"
              className="h-28 w-full object-cover rounded mb-2"
              width={400}
              height={200}
            />
            <h3 className="font-semibold text-lg mt-1">برجولات خشبية</h3>
            <p className="text-[#86674c] mt-1 text-center text-sm flex-1">
              برجولات مصنوعة من أفضل أنواع الأخشاب المعالجة، تضفي لمسة طبيعية ودافئة على المكان، مثالية للحدائق والاستراحات.
            </p>
          </div>
          <div className="bg-white rounded-xl border shadow p-5 flex flex-col items-center">
            <Image
              src="https://ext.same-assets.com/3372524550/2093277565.jpeg"
              alt="برجولات حديدية"
              className="h-28 w-full object-cover rounded mb-2"
              width={400}
              height={200}
            />
            <h3 className="font-semibold text-lg mt-1">برجولات حديدية</h3>
            <p className="text-[#86674c] mt-1 text-center text-sm flex-1">
              برجولات من الحديد المجلفن المقاوم للصدأ، تتميز بالقوة والمتانة وتصميمات عصرية مناسبة للاستخدام الداخلي والخارجي.
            </p>
          </div>
          <div className="bg-white rounded-xl border shadow p-5 flex flex-col items-center">
            <Image
              src="https://ext.same-assets.com/3372524550/60439396.jpeg"
              alt="برجولات ألومنيوم"
              className="h-28 w-full object-cover rounded mb-2"
              width={400}
              height={200}
            />
            <h3 className="font-semibold text-lg mt-1">برجولات ألومنيوم</h3>
            <p className="text-[#86674c] mt-1 text-center text-sm flex-1">
              برجولات خفيفة مصنوعة من الألومنيوم عالي الجودة، تتميز بمقاومتها للعوامل الجوية وسهولة تنظيفها وصيانتها، مناسبة للأسطح والحدائق.
            </p>
          </div>
          <div className="bg-white rounded-xl border shadow p-5 flex flex-col items-center">
            <Image
              src="https://ext.same-assets.com/3372524550/2754594000.jpeg"
              alt="برجولات للحدائق"
              className="h-28 w-full object-cover rounded mb-2"
              width={400}
              height={200}
            />
            <h3 className="font-semibold text-lg mt-1">برجولات للحدائق</h3>
            <p className="text-[#86674c] mt-1 text-center text-sm flex-1">
              برجولات مصممة خصيصاً للحدائق المنزلية، توفر مساحة مظللة للجلسات العائلية والاسترخاء في الهواء الطلق مع الحفاظ على المظهر الجمالي.
            </p>
          </div>
        </div>
      </section>

      {/* لماذا تختار برجولات الديار العالمية */}
      <section className="max-w-6xl mx-auto px-4 py-14 bg-white/70 rounded-lg shadow mb-16">
        <h2 className="text-2xl font-bold mb-8 text-center">لماذا تختار برجولات الديار العالمية؟</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-xl border text-center flex flex-col items-center shadow-sm hover:shadow-md transition">
            <div className="bg-[#fcf7e9] w-16 h-16 rounded-full flex items-center justify-center mb-4">
              <Image src="https://ext.same-assets.com/3372524550/1252668012.jpeg" alt="جودة عالية" width={40} height={40} className="object-contain" />
            </div>
            <h3 className="text-lg font-bold mb-2">جودة عالية</h3>
            <p className="text-gray-600 text-sm">نستخدم أفضل الخامات وأحدث التقنيات في تصميم وتنفيذ البرجولات لضمان متانتها ومقاومتها للظروف المناخية المختلفة.</p>
          </div>
          <div className="bg-white p-6 rounded-xl border text-center flex flex-col items-center shadow-sm hover:shadow-md transition">
            <div className="bg-[#fcf7e9] w-16 h-16 rounded-full flex items-center justify-center mb-4">
              <Image src="https://ext.same-assets.com/3372524550/3414519594.jpeg" alt="تصاميم عصرية" width={40} height={40} className="object-contain" />
            </div>
            <h3 className="text-lg font-bold mb-2">تصاميم عصرية</h3>
            <p className="text-gray-600 text-sm">نقدم تصاميم مبتكرة وعصرية تناسب كافة الأذواق وتضيف لمسة جمالية مميزة لمنزلك أو منشأتك.</p>
          </div>
          <div className="bg-white p-6 rounded-xl border text-center flex flex-col items-center shadow-sm hover:shadow-md transition">
            <div className="bg-[#fcf7e9] w-16 h-16 rounded-full flex items-center justify-center mb-4">
              <Image src="https://ext.same-assets.com/3372524550/842632897.jpeg" alt="خدمة شاملة" width={40} height={40} className="object-contain" />
            </div>
            <h3 className="text-lg font-bold mb-2">خدمة شاملة</h3>
            <p className="text-gray-600 text-sm">نقدم خدمة متكاملة من التصميم والتنفيذ إلى التركيب والصيانة بما يضمن راحتك التامة.</p>
          </div>
        </div>
      </section>

      {/* معرض أعمال البرجولات */}
      <section className="max-w-6xl mx-auto px-4 my-16 mb-8">
        <h2 className="text-2xl font-bold mb-8 text-center">معرض أعمالنا</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <Image src="https://ext.same-assets.com/3372524550/812304309.jpeg" alt="برجولات خشبية" className="rounded-xl shadow border w-full h-32 object-cover" width={300} height={150} />
          <Image src="https://ext.same-assets.com/3372524550/1813799759.jpeg" alt="برجولات حديدية" className="rounded-xl shadow border w-full h-32 object-cover" width={300} height={150} />
          <Image src="https://ext.same-assets.com/3372524550/1927758805.jpeg" alt="برجولات ألومنيوم" className="rounded-xl shadow border w-full h-32 object-cover" width={300} height={150} />
          <Image src="https://ext.same-assets.com/3372524550/842632897.jpeg" alt="برجولات للحدائق" className="rounded-xl shadow border w-full h-32 object-cover" width={300} height={150} />
          <Image src="https://ext.same-assets.com/3372524550/3414519594.jpeg" alt="برجولات عصرية" className="rounded-xl shadow border w-full h-32 object-cover" width={300} height={150} />
          <Image src="https://ext.same-assets.com/3372524550/1252668012.jpeg" alt="برجولات مودرن" className="rounded-xl shadow border w-full h-32 object-cover" width={300} height={150} />
          <Image src="https://ext.same-assets.com/3372524550/1177626593.jpeg" alt="برجولات خشبية فاخرة" className="rounded-xl shadow border w-full h-32 object-cover" width={300} height={150} />
          <Image src="https://ext.same-assets.com/3372524550/2093277565.jpeg" alt="برجولات حديدية مميزة" className="rounded-xl shadow border w-full h-32 object-cover" width={300} height={150} />
        </div>
      </section>

      {/* دعوة للتواصل */}
      <section className="bg-[#2d2a27] text-white py-12 mt-16">
        <div className="max-w-3xl mx-auto px-4 flex flex-col gap-4 items-center text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-2">هل ترغب في برجولة بتصميم فريد؟</h2>
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
            <summary className="font-bold text-[#a78e5d] cursor-pointer flex items-center justify-between">ما هي الفترة اللازمة لتنفيذ البرجولة؟<span>+</span></summary>
            <p className="mt-2 text-[#2d2a27]">تختلف الفترة اللازمة لتنفيذ البرجولة حسب حجم المشروع ونوع البرجولة والتصميم المطلوب، ولكن بشكل عام تتراوح بين 5-10 أيام للمشاريع الصغيرة، و10-15 يوم للمشاريع المتوسطة والكبيرة.</p>
          </details>
          <details className="bg-white border rounded shadow p-4 transition-all duration-300 hover:shadow-lg">
            <summary className="font-bold text-[#a78e5d] cursor-pointer flex items-center justify-between">ما هي أفضل أنواع البرجولات المناسبة للأماكن المفتوحة؟<span>+</span></summary>
            <p className="mt-2 text-[#2d2a27]">البرجولات الخشبية والألومنيوم هي الأفضل للأماكن المفتوحة نظراً لمقاومتها العالية للعوامل الجوية. البرجولات الخشبية توفر مظهراً طبيعياً وجمالياً، بينما تتميز برجولات الألومنيوم بخفة الوزن وسهولة الصيانة.</p>
          </details>
          <details className="bg-white border rounded shadow p-4 transition-all duration-300 hover:shadow-lg">
            <summary className="font-bold text-[#a78e5d] cursor-pointer flex items-center justify-between">هل تقدمون ضمانات على البرجولات؟<span>+</span></summary>
            <p className="mt-2 text-[#2d2a27]">نعم، نقدم ضمانات على جميع أنواع البرجولات التي نقوم بتركيبها. تختلف مدة الضمان حسب نوع البرجولة، ولكنها تصل إلى 10 سنوات على الهيكل الرئيسي وسنة على الأعمال الأخرى.</p>
          </details>
          <details className="bg-white border rounded shadow p-4 transition-all duration-300 hover:shadow-lg">
            <summary className="font-bold text-[#a78e5d] cursor-pointer flex items-center justify-between">هل يمكنني تركيب إضاءة وأنظمة تدفئة وتبريد للبرجولة؟<span>+</span></summary>
            <p className="mt-2 text-[#2d2a27]">نعم بالتأكيد، يمكن تجهيز البرجولة بأنظمة إضاءة مختلفة ومراوح سقفية ودفايات خارجية وحتى رذاذ الماء للتبريد في فصل الصيف. نقوم بتوفير كافة هذه التجهيزات والتركيبات الكهربائية اللازمة بناءً على رغبة العميل.</p>
          </details>
          <details className="bg-white border rounded shadow p-4 transition-all duration-300 hover:shadow-lg">
            <summary className="font-bold text-[#a78e5d] cursor-pointer flex items-center justify-between">هل البرجولات تحتاج للصيانة؟<span>+</span></summary>
            <p className="mt-2 text-[#2d2a27]">تحتاج البرجولات إلى صيانة بسيطة للحفاظ عليها في حالة ممتازة. البرجولات الخشبية تحتاج إلى إعادة دهان وعزل كل فترة، بينما تتطلب برجولات الألومنيوم والحديد تنظيفاً دورياً فقط، مع التأكد من سلامة الوصلات والمفاصل. نقدم خدمات صيانة دورية لجميع أنواع البرجولات لضمان استمراريتها لأطول فترة ممكنة.</p>
          </details>
        </div>
      </section>

      {/* خدمات أخرى */}
      <section className="my-20 max-w-7xl mx-auto px-4">
        <h2 className="text-2xl font-bold mb-8 text-center">خدمات أخرى قد تهمك</h2>
        <div className="grid md:grid-cols-3 gap-5">
          <div className="bg-white rounded-xl border shadow p-6 flex flex-col items-center">
            <Image
              src="https://ext.same-assets.com/3372524550/2205790480.jpeg"
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
              src="https://ext.same-assets.com/742929371/1378182230.jpeg"
              alt="السواتر"
              className="h-24 w-full object-cover rounded mb-2"
              width={300}
              height={150}
            />
            <h3 className="font-semibold text-lg mt-1">السواتر</h3>
            <p className="text-[#86674c] mt-1 text-center text-sm flex-1">تركيب سواتر بمختلف الأنواع والخامات لتوفير الخصوصية والحماية للمنازل والمنشآت.</p>
            <Link href="/sawater" className="mt-4 px-5 py-2 bg-[#a78e5d] text-white rounded-full font-semibold transition hover:bg-[#86674c]">عرض التفاصيل</Link>
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
