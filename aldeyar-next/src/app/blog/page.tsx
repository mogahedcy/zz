import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import Script from "next/script";

export const metadata: Metadata = {
  title: "مدونة الديار للمظلات والسواتر | مقالات ونصائح حول المظلات والسواتر",
  description: "مدونة الديار للمظلات والسواتر: مقالات ونصائح حول أنواع المظلات والسواتر، طرق العناية بها، أحدث التصاميم، والمزيد من المعلومات المفيدة لاختيار المظلات المناسبة لاحتياجاتك",
  keywords: "مدونة مظلات, نصائح مظلات, تصاميم مظلات, مقالات سواتر, العناية بالمظلات, اختيار المظلات المناسبة, أنواع المظلات, مواصفات السواتر, مظلات سيارات",
};

const blogPosts = [
  {
    id: 1,
    title: "كيفية اختيار المظلة المناسبة لمنزلك",
    excerpt: "دليل شامل لاختيار المظلة المثالية لمنزلك بناءً على الاحتياجات والميزانية والموقع والتصميم",
    image: "https://ext.same-assets.com/2539755772/1414337162.jpeg",
    date: "6 مايو 2025",
    slug: "choosing-right-shade",
    category: "نصائح"
  },
  {
    id: 2,
    title: "أفضل أنواع السواتر للمنازل والفلل",
    excerpt: "مقارنة بين أنواع السواتر المختلفة مثل الخشبية والحديدية واللكسان والشينكو، ومميزات كل نوع",
    image: "https://ext.same-assets.com/2539755772/531069762.jpeg",
    date: "2 مايو 2025",
    slug: "best-fence-types",
    category: "مقارنات"
  },
  {
    id: 3,
    title: "كيفية العناية بمظلات السيارات وإطالة عمرها",
    excerpt: "نصائح مهمة للحفاظ على مظلات السيارات وصيانتها بشكل دوري لضمان استمرارية جودتها لفترة أطول",
    image: "https://ext.same-assets.com/2539755772/3897470258.jpeg",
    date: "28 أبريل 2025",
    slug: "car-shade-maintenance",
    category: "صيانة"
  },
  {
    id: 4,
    title: "أحدث تصميمات برجولات الحدائق لعام 2025",
    excerpt: "استعراض لأحدث صيحات تصميم البرجولات العصرية للحدائق والمساحات الخارجية مع نصائح اختيار التصميم المناسب",
    image: "https://ext.same-assets.com/3372524550/3283197689.jpeg",
    date: "22 أبريل 2025",
    slug: "modern-pergola-designs",
    category: "تصاميم"
  },
  {
    id: 5,
    title: "الفرق بين المظلات القماشية ومظلات البي في سي",
    excerpt: "مقارنة تفصيلية بين المظلات القماشية ومظلات PVC من حيث المتانة والسعر والمظهر والاستخدام المناسب",
    image: "https://ext.same-assets.com/2539755772/2164257014.jpeg",
    date: "15 أبريل 2025",
    slug: "fabric-vs-pvc-shades",
    category: "مقارنات"
  },
  {
    id: 6,
    title: "كيفية تركيب مظلات المسابح بطريقة احترافية",
    excerpt: "دليل خطوة بخطوة لتركيب مظلات المسابح بشكل احترافي مع التركيز على عوامل السلامة والجودة",
    image: "https://ext.same-assets.com/2539755772/1807765189.jpeg",
    date: "8 أبريل 2025",
    slug: "pool-shade-installation",
    category: "تركيب"
  }
];

export default function BlogPage() {
  return (
    <>
      <Script id="blog-schema" type="application/ld+json">
        {`
          {
            "@context": "https://schema.org",
            "@type": "Blog",
            "name": "مدونة الديار للمظلات والسواتر",
            "url": "https://aldeyar.me/blog",
            "description": "مدونة الديار للمظلات والسواتر: مقالات ونصائح حول أنواع المظلات والسواتر، طرق العناية بها، أحدث التصاميم، والمزيد من المعلومات المفيدة",
            "publisher": {
              "@type": "Organization",
              "name": "الديار للمظلات والسواتر",
              "logo": {
                "@type": "ImageObject",
                "url": "https://ext.same-assets.com/200402770/3736915175.png"
              }
            },
            "blogPost": [
              ${blogPosts.map(post => `
                {
                  "@type": "BlogPosting",
                  "headline": "${post.title}",
                  "description": "${post.excerpt}",
                  "image": "${post.image}",
                  "datePublished": "2025-05-06",
                  "author": {
                    "@type": "Organization",
                    "name": "الديار للمظلات والسواتر"
                  },
                  "url": "https://aldeyar.me/blog/${post.slug}"
                }
              `).join(',')}
            ]
          }
        `}
      </Script>

      <div dir="rtl" className="font-sans bg-[#fafafa] text-[#2d2a27]">
        {/* بانر المدونة */}
        <header className="relative w-full min-h-[300px] md:min-h-[380px] flex items-center justify-center overflow-hidden">
          <Image
            src="https://ext.same-assets.com/2539755772/2050251729.jpeg"
            alt="مدونة الديار للمظلات والسواتر"
            className="absolute inset-0 w-full h-full object-cover object-center opacity-80"
            width={1920}
            height={800}
            priority
          />
          <div className="relative z-10 p-8 text-center text-white drop-shadow bg-black/50 rounded w-full max-w-3xl mx-auto mt-16">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">مدونة الديار للمظلات والسواتر</h1>
            <p className="text-lg md:text-xl mb-2">مقالات ونصائح حول أنواع المظلات والسواتر، طرق العناية بها، وأحدث التصاميم</p>
            <div className="flex justify-center gap-2 text-sm text-[#ffe4ad] mt-3">
              <Link href="/" className="underline hover:text-yellow-400">الرئيسية</Link>
              <span>/</span>
              <span className="text-white/90">المدونة</span>
            </div>
          </div>
        </header>

        {/* قائمة التصنيفات */}
        <div className="max-w-6xl mx-auto px-4 mt-8">
          <div className="flex flex-wrap justify-center gap-3 mb-8">
            <button className="px-4 py-2 bg-[#ac925c] text-white rounded-full font-semibold">الكل</button>
            <button className="px-4 py-2 bg-white border border-[#ac925c] text-[#ac925c] rounded-full font-semibold hover:bg-[#ac925c] hover:text-white transition">نصائح</button>
            <button className="px-4 py-2 bg-white border border-[#ac925c] text-[#ac925c] rounded-full font-semibold hover:bg-[#ac925c] hover:text-white transition">مقارنات</button>
            <button className="px-4 py-2 bg-white border border-[#ac925c] text-[#ac925c] rounded-full font-semibold hover:bg-[#ac925c] hover:text-white transition">صيانة</button>
            <button className="px-4 py-2 bg-white border border-[#ac925c] text-[#ac925c] rounded-full font-semibold hover:bg-[#ac925c] hover:text-white transition">تصاميم</button>
            <button className="px-4 py-2 bg-white border border-[#ac925c] text-[#ac925c] rounded-full font-semibold hover:bg-[#ac925c] hover:text-white transition">تركيب</button>
          </div>
        </div>

        {/* قائمة المقالات */}
        <section className="max-w-6xl mx-auto px-4 py-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map(post => (
              <div key={post.id} className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition">
                <div className="relative h-48">
                  <Image
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover"
                    width={400}
                    height={250}
                  />
                  <div className="absolute top-2 right-2 bg-[#ac925c] text-white px-3 py-1 rounded-full text-xs font-semibold">
                    {post.category}
                  </div>
                </div>
                <div className="p-5">
                  <p className="text-sm text-gray-500 mb-2">{post.date}</p>
                  <h3 className="font-bold text-lg mb-2">{post.title}</h3>
                  <p className="text-gray-600 text-sm mb-4">{post.excerpt}</p>
                  <Link
                    href={`/blog/${post.slug}`}
                    className="inline-block text-[#ac925c] font-semibold hover:text-[#86674c] transition"
                  >
                    اقرأ المزيد...
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* اشترك في النشرة البريدية */}
        <section className="bg-[#ac925c] text-white py-14 my-12">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">اشترك في النشرة البريدية</h2>
            <p className="mb-6">احصل على أحدث المقالات والنصائح والعروض الخاصة مباشرة إلى بريدك الإلكتروني</p>
            <div className="flex flex-col sm:flex-row gap-2 justify-center max-w-xl mx-auto">
              <input
                type="email"
                placeholder="البريد الإلكتروني"
                className="px-4 py-3 rounded-lg border flex-1 text-black"
              />
              <button className="bg-[#2d2a27] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#444] transition">
                اشترك الآن
              </button>
            </div>
          </div>
        </section>

        {/* الأسئلة الشائعة */}
        <section className="my-20 max-w-3xl mx-auto px-4">
          <h2 className="text-2xl font-bold mb-8 text-center">الأسئلة الشائعة حول المظلات والسواتر</h2>
          <div className="space-y-4">
            <details className="bg-white border rounded shadow p-4 transition-all duration-300 hover:shadow-lg">
              <summary className="font-bold text-[#ac925c] cursor-pointer flex items-center justify-between">
                ما هي أفضل أنواع المظلات للحدائق؟<span>+</span>
              </summary>
              <p className="mt-2 text-[#2d2a27]">
                أفضل أنواع المظلات للحدائق تعتمد على احتياجاتك الخاصة، ولكن بشكل عام تعتبر المظلات الخشبية والمظلات القماشية من أفضل الخيارات للحدائق لجمالها وقدرتها على الاندماج مع المساحات الخضراء. المظلات الخشبية توفر مظهرًا طبيعيًا وفخامة، بينما المظلات القماشية توفر مرونة في التصميم والألوان.
              </p>
            </details>
            <details className="bg-white border rounded shadow p-4 transition-all duration-300 hover:shadow-lg">
              <summary className="font-bold text-[#ac925c] cursor-pointer flex items-center justify-between">
                كيف تختلف أسعار المظلات والسواتر؟<span>+</span>
              </summary>
              <p className="mt-2 text-[#2d2a27]">
                تختلف أسعار المظلات والسواتر بناءً على عدة عوامل منها نوع الخامة المستخدمة (PVC، قماش، خشب، حديد، لكسان)، ومساحة التركيب، والتصميم والشكل، وارتفاع المظلة، ودرجة العزل الحراري. عمومًا تبدأ أسعار المظلات البسيطة من 100 ريال للمتر المربع وقد تصل إلى 500 ريال للمتر المربع للأنواع الفاخرة عالية الجودة.
              </p>
            </details>
            <details className="bg-white border rounded shadow p-4 transition-all duration-300 hover:shadow-lg">
              <summary className="font-bold text-[#ac925c] cursor-pointer flex items-center justify-between">
                ما هي أكثر أنواع السواتر خصوصية؟<span>+</span>
              </summary>
              <p className="mt-2 text-[#2d2a27]">
                أكثر أنواع السواتر التي توفر خصوصية عالية هي السواتر الحديدية المجدولة، السواتر الخشبية الشرائحية، وسواتر اللكسان المعتمة. توفر هذه الأنواع حجب كامل للرؤية مع الحفاظ على التهوية المناسبة. سواتر الشينكو أيضًا توفر خصوصية عالية جدًا ولكنها قد تكون أقل جمالية من الأنواع الأخرى.
              </p>
            </details>
            <details className="bg-white border rounded shadow p-4 transition-all duration-300 hover:shadow-lg">
              <summary className="font-bold text-[#ac925c] cursor-pointer flex items-center justify-between">
                هل مظلات PVC تتأثر بالحرارة الشديدة؟<span>+</span>
              </summary>
              <p className="mt-2 text-[#2d2a27]">
                مظلات PVC عالية الجودة مصممة لتحمل درجات الحرارة العالية في المملكة العربية السعودية، وهي معالجة ضد الأشعة فوق البنفسجية. ومع ذلك، قد تتعرض بعض المظلات الرخيصة للتمدد أو التقلص قليلاً في درجات الحرارة القصوى. ننصح باختيار مظلات PVC ذات سماكة جيدة (700-950 جرام/متر مربع) ومعالجة ضد الأشعة فوق البنفسجية لضمان مقاومتها للحرارة الشديدة.
              </p>
            </details>
          </div>
        </section>

        {/* خدماتنا */}
        <section className="my-20 max-w-7xl mx-auto px-4">
          <h2 className="text-2xl font-bold mb-8 text-center">خدماتنا</h2>
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
              <p className="text-[#86674c] mt-1 text-center text-sm flex-1">
                تصميم وتركيب جميع أنواع المظلات بأحدث التقنيات وأفضل الخامات وأعلى معايير الجودة.
              </p>
              <Link
                href="/mazallat"
                className="mt-4 px-5 py-2 bg-[#ac925c] text-white rounded-full font-semibold transition hover:bg-[#86674c]"
              >
                عرض التفاصيل
              </Link>
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
