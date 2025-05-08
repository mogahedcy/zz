import Link from 'next/link';
import Image from 'next/image';

export default function Home() {
  return (
    <div dir="rtl" className="font-sans bg-[#fafafa] text-[#2d2a27]">
      {/* أيقونات جانبية عائمة للتواصل */}
      <aside className="fixed top-1/3 md:left-4 left-1 z-50 flex flex-col gap-2 items-center">
        <a
          href="tel:+966553719009"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-[#51ac41] hover:bg-[#39383d] rounded-full p-2 shadow transition"
          title="اتصال مباشر"
        >
          <Image
            src="https://img.icons8.com/fluency/48/000000/phone.png"
            alt="اتصال"
            className="w-9 h-9"
            width={36}
            height={36}
          />
        </a>
        <a
          href="https://wa.me/+966553719009"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-[#51ac41] rounded-full p-2 shadow hover:bg-[#b8975d] transition"
          title="واتساب"
        >
          <Image
            src="https://img.icons8.com/color/48/000000/whatsapp--v1.png"
            alt="واتساب"
            className="w-9 h-9"
            width={36}
            height={36}
          />
        </a>
        <a
          href="https://www.instagram.com/aldiyarglobal/"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-[#fff] rounded-full p-2 shadow hover:bg-[#b8975d] transition"
          title="انستجرام"
        >
          <Image
            src="https://img.icons8.com/color/48/000000/instagram-new--v1.png"
            alt="انستجرام"
            className="w-9 h-9"
            width={36}
            height={36}
          />
        </a>
      </aside>

      {/* شريط الهيدر العلوي */}
      <div className="bg-[#39383d] text-[#f9f9f8] text-sm py-2 px-4 flex justify-between items-center">
        <div className="flex gap-5 items-center">
          <span className="font-semibold">0553719009</span>
          <span className="hidden md:inline">info@aldiyarglobal.com</span>
        </div>
        <div className="flex gap-3 items-center">
          <a
            href="https://wa.me/+966553719009"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src="https://img.icons8.com/color/32/000000/whatsapp--v1.png"
              alt="واتساب"
              className="w-5 h-5"
              width={20}
              height={20}
            />
          </a>
          <a
            href="https://www.instagram.com/aldiyarglobal/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src="https://img.icons8.com/color/32/000000/instagram-new--v1.png"
              alt="انستجرام"
              className="w-5 h-5"
              width={20}
              height={20}
            />
          </a>
        </div>
      </div>

      {/* قسم الهيدر والشعار */}
      <header className="bg-[#5b5750] bg-opacity-90 text-white py-4 shadow-md relative z-20">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <Link href="/" className="text-2xl font-bold flex items-center gap-2">
            <Image
              src="https://ext.same-assets.com/200402770/3736915175.png"
              alt="شعار الديار"
              width={45}
              height={45}
              className="h-12 w-auto"
            />
            <span className="hidden sm:inline">الديار العالمية</span>
          </Link>

          <nav className="hidden md:block">
            <ul className="flex gap-6">
              <li><Link href="/#hero" className="hover:text-[#b8975d] transition">الرئيسية</Link></li>
              <li><Link href="/#services" className="hover:text-[#b8975d] transition">خدماتنا</Link></li>
              <li><Link href="/#projects" className="hover:text-[#b8975d] transition">أعمالنا</Link></li>
              <li><Link href="/#about" className="hover:text-[#b8975d] transition">من نحن</Link></li>
              <li><Link href="/blog" className="hover:text-[#b8975d] transition">المدونة</Link></li>
              <li><Link href="/#contact" className="hover:text-[#b8975d] transition">تواصل معنا</Link></li>
            </ul>
          </nav>

          <div className="flex items-center gap-2">
            <a
              href="tel:+966553719009"
              className="bg-[#b8975d] hover:bg-[#917547] py-2 px-4 rounded font-semibold transition-colors hidden sm:block"
            >
              0553719009
            </a>
            <button className="md:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
              </svg>
            </button>
          </div>
        </div>
      </header>

      {/* شريط التنقل الرئيسي (تم استبداله بالهيدر الجديد) */}

      {/* هيدر مع شرائح صور متحركة */}
      <header id="hero" className="relative w-full h-[380px] md:h-[500px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 w-full h-full">
          <Image
            src="https://ext.same-assets.com/200402770/3400896523.jpeg"
            alt="مظلات الديار"
            className="absolute inset-0 w-full h-full object-cover object-center opacity-80"
            width={1920}
            height={1080}
            priority
          />
        </div>
        <div className="container mx-auto px-4 relative z-10 text-center">
          <h1 className="text-3xl md:text-5xl font-bold text-white drop-shadow-lg mb-4">
            مؤسسة الديار العالمية
          </h1>
          <p className="text-lg md:text-xl text-white max-w-2xl mx-auto mb-8 drop-shadow-lg">
            نقدم أفضل خدمات المظلات والسواتر والبرجولات وبيوت الشعر في المملكة العربية السعودية
          </p>
          <Link href="/#services" className="inline-block px-6 py-3 bg-[#b8975d] text-white font-bold rounded-lg hover:bg-[#8c5f44] transition shadow-lg">
            تصفح خدماتنا
          </Link>
        </div>
      </header>

      {/* قسم الترحيب */}
      <section className="py-12 text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold mb-6">مرحباً بكم في مؤسسة الديار العالمية</h2>
          <p className="max-w-3xl mx-auto text-base md:text-lg text-[#86674c] mb-10">
            تعتبر مؤسسة الديار من أفضل مؤسسات المظلات والسواتر والخيام بجدة والمملكة العربية السعودية. نلتزم بتقديم خدمات عالية الجودة وبأسعار مناسبة. نفتخر بخبرتنا لأكثر من 15 عاماً في هذا المجال.
          </p>

          {/* الإحصائيات */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto mt-10">
            <div className="bg-white rounded-lg shadow p-4 flex flex-col items-center">
              <Image
                src="https://img.icons8.com/color/48/000000/medal--v1.png"
                alt="جوائز جودة"
                width={40}
                height={40}
                className="mb-2"
              />
              <span className="text-[#b8975d] font-bold text-xl md:text-2xl">+10</span>
              <span className="text-sm text-gray-600">جوائز جودة</span>
            </div>
            <div className="bg-white rounded-lg shadow p-4 flex flex-col items-center">
              <Image
                src="https://img.icons8.com/color/48/000000/certificate.png"
                alt="سنوات خبرة"
                width={40}
                height={40}
                className="mb-2"
              />
              <span className="text-[#b8975d] font-bold text-xl md:text-2xl">+15</span>
              <span className="text-sm text-gray-600">سنوات خبرة</span>
            </div>
            <div className="bg-white rounded-lg shadow p-4 flex flex-col items-center">
              <Image
                src="https://img.icons8.com/color/48/000000/check-all.png"
                alt="مشاريع منفذة"
                width={40}
                height={40}
                className="mb-2"
              />
              <span className="text-[#b8975d] font-bold text-xl md:text-2xl">+500</span>
              <span className="text-sm text-gray-600">مشروع منفذ</span>
            </div>
            <div className="bg-white rounded-lg shadow p-4 flex flex-col items-center">
              <Image
                src="https://img.icons8.com/color/48/000000/groups.png"
                alt="عميل راضي"
                width={40}
                height={40}
                className="mb-2"
              />
              <span className="text-[#b8975d] font-bold text-xl md:text-2xl">+350</span>
              <span className="text-sm text-gray-600">عميل راضي</span>
            </div>
          </div>
        </div>
      </section>

      {/* قسم الخدمات */}
      <section id="services" className="py-16 bg-[#f9f9f9]">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold mb-10 text-center">خدماتنا</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* كرت المظلات */}
            <div className="bg-white rounded shadow overflow-hidden">
              <div className="h-48 relative">
                <Image
                  src="https://ext.same-assets.com/200402770/2205790480.jpeg"
                  alt="المظلات"
                  className="w-full h-full object-cover"
                  width={400}
                  height={300}
                />
              </div>
              <div className="p-5">
                <h3 className="font-bold text-xl mb-2 text-center">المظلات</h3>
                <ul className="text-sm text-gray-600 space-y-1 mb-4 mr-5 list-disc list-inside">
                  <li>تصميم وتركيب مظلات سيارات</li>
                  <li>مظلات حدائق وجلسات</li>
                  <li>مظلات مدارس ومسابح</li>
                  <li>خامات عالية الجودة</li>
                  <li>ضمان 10 سنوات</li>
                </ul>
                <div className="text-center mt-4">
                  <Link href="/mazallat" className="inline-block px-5 py-2 bg-[#b8975d] text-white rounded-full hover:bg-[#8c5f44] transition text-sm font-bold">
                    عرض التفاصيل
                  </Link>
                </div>
              </div>
            </div>

            {/* كرت الخيام الملكية */}
            <div className="bg-white rounded shadow overflow-hidden">
              <div className="h-48 relative">
                <Image
                  src="https://ext.same-assets.com/200402770/1914607147.jpeg"
                  alt="خيام ملكية"
                  className="w-full h-full object-cover"
                  width={400}
                  height={300}
                />
              </div>
              <div className="p-5">
                <h3 className="font-bold text-xl mb-2 text-center">خيام ملكية</h3>
                <ul className="text-sm text-gray-600 space-y-1 mb-4 mr-5 list-disc list-inside">
                  <li>خيام ملكية للمناسبات</li>
                  <li>خيام للحدائق والإستراحات</li>
                  <li>تصميمات عصرية وفاخرة</li>
                  <li>مقاومة للحرارة والرطوبة</li>
                  <li>خدمة تركيب احترافية</li>
                </ul>
                <div className="text-center mt-4">
                  <Link href="/khayyam" className="inline-block px-5 py-2 bg-[#b8975d] text-white rounded-full hover:bg-[#8c5f44] transition text-sm font-bold">
                    عرض التفاصيل
                  </Link>
                </div>
              </div>
            </div>

            {/* كرت السواتر */}
            <div className="bg-white rounded shadow overflow-hidden">
              <div className="h-48 relative">
                <Image
                  src="https://ext.same-assets.com/200402770/531069762.jpeg"
                  alt="السواتر"
                  className="w-full h-full object-cover"
                  width={400}
                  height={300}
                />
              </div>
              <div className="p-5">
                <h3 className="font-bold text-xl mb-2 text-center">السواتر</h3>
                <ul className="text-sm text-gray-600 space-y-1 mb-4 mr-5 list-disc list-inside">
                  <li>سواتر حديد وخشب</li>
                  <li>سواتر قماش وPVC</li>
                  <li>توفير الخصوصية والحماية</li>
                  <li>تصميمات متنوعة</li>
                  <li>خامات عالية الجودة</li>
                </ul>
                <div className="text-center mt-4">
                  <Link href="/sawater" className="inline-block px-5 py-2 bg-[#b8975d] text-white rounded-full hover:bg-[#8c5f44] transition text-sm font-bold">
                    عرض التفاصيل
                  </Link>
                </div>
              </div>
            </div>

            {/* كرت البرجولات */}
            <div className="bg-white rounded shadow overflow-hidden">
              <div className="h-48 relative">
                <Image
                  src="https://ext.same-assets.com/200402770/3318001237.jpeg"
                  alt="البرجولات"
                  className="w-full h-full object-cover"
                  width={400}
                  height={300}
                />
              </div>
              <div className="p-5">
                <h3 className="font-bold text-xl mb-2 text-center">البرجولات</h3>
                <ul className="text-sm text-gray-600 space-y-1 mb-4 mr-5 list-disc list-inside">
                  <li>برجولات خشبية عصرية</li>
                  <li>برجولات حديد مشغول</li>
                  <li>تصميمات للحدائق والمتنزهات</li>
                  <li>مقاومة لعوامل الطقس</li>
                  <li>أشكال عصرية ومتنوعة</li>
                </ul>
                <div className="text-center mt-4">
                  <Link href="/pergolas" className="inline-block px-5 py-2 bg-[#b8975d] text-white rounded-full hover:bg-[#8c5f44] transition text-sm font-bold">
                    عرض التفاصيل
                  </Link>
                </div>
              </div>
            </div>

            {/* كرت بيوت الشعر */}
            <div className="bg-white rounded shadow overflow-hidden">
              <div className="h-48 relative">
                <Image
                  src="https://ext.same-assets.com/3073684241/343302816.jpeg"
                  alt="بيوت شعر"
                  className="w-full h-full object-cover"
                  width={400}
                  height={300}
                />
              </div>
              <div className="p-5">
                <h3 className="font-bold text-xl mb-2 text-center">بيوت شعر</h3>
                <ul className="text-sm text-gray-600 space-y-1 mb-4 mr-5 list-disc list-inside">
                  <li>بيوت شعر فاخرة وملكية</li>
                  <li>تنفيذ بالمقاسات المطلوبة</li>
                  <li>ديكورات داخلية وخارجية</li>
                  <li>الحماية من الحرارة والبرد</li>
                  <li>ضمان الجودة والمتانة</li>
                </ul>
                <div className="text-center mt-4">
                  <Link href="/byoot_shaar" className="inline-block px-5 py-2 bg-[#b8975d] text-white rounded-full hover:bg-[#8c5f44] transition text-sm font-bold">
                    عرض التفاصيل
                  </Link>
                </div>
              </div>
            </div>

            {/* كرت تنسيق الحدائق */}
            <div className="bg-white rounded shadow overflow-hidden">
              <div className="h-48 relative">
                <Image
                  src="https://ext.same-assets.com/4049809232/447736083.jpeg"
                  alt="تنسيق حدائق"
                  className="w-full h-full object-cover"
                  width={400}
                  height={300}
                />
              </div>
              <div className="p-5">
                <h3 className="font-bold text-xl mb-2 text-center">تنسيق حدائق</h3>
                <ul className="text-sm text-gray-600 space-y-1 mb-4 mr-5 list-disc list-inside">
                  <li>تصميم وتنسيق الحدائق</li>
                  <li>زراعة وتركيب النجيل الصناعي</li>
                  <li>شبكات الري الأوتوماتيكية</li>
                  <li>نوافير وديكورات خارجية</li>
                  <li>صيانة دورية للحدائق</li>
                </ul>
                <div className="text-center mt-4">
                  <Link href="/landscaping" className="inline-block px-5 py-2 bg-[#b8975d] text-white rounded-full hover:bg-[#8c5f44] transition text-sm font-bold">
                    عرض التفاصيل
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* قسم من نحن */}
      <section id="about" className="py-16">
        <div className="container mx-auto px-4">
          <div className="bg-white shadow-lg rounded-lg overflow-hidden">
            <div className="grid md:grid-cols-2 items-center">
              <div className="p-8">
                <h2 className="text-2xl font-bold mb-4 text-[#b8975d]">من نحن</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  مؤسسة الديار من المؤسسات الرائدة في مجال تصميم وتنفيذ المظلات والسواتر والخيام والبرجولات وبيوت الشعر بجدة والمملكة العربية السعودية. نمتلك خبرة تزيد عن 15 عاماً في هذا المجال.
                </p>
                <p className="text-gray-700 leading-relaxed mb-6">
                  نلتزم بتقديم أفضل الخدمات وأجود الخامات والتصميمات العصرية التي تلبي احتياجات عملائنا. فريقنا من المهندسين والفنيين جاهز دائماً لتقديم الاستشارات والدعم اللازم لإنجاز مشروعك بأفضل صورة.
                </p>
                <div className="text-center md:text-right">
                  <Link href="#contact" className="inline-block px-6 py-2 bg-[#b8975d] text-white rounded-full hover:bg-[#8c5f44] transition text-sm font-bold">
                    تواصل معنا
                  </Link>
                </div>
              </div>
              <div className="p-8 flex justify-center">
                <Image
                  src="https://ext.same-assets.com/200402770/574858840.png"
                  alt="شعار مؤسسة الديار العالمية"
                  className="max-w-xs"
                  width={300}
                  height={300}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* قسم الفريق الهندسي */}
      <section className="py-16 bg-[#f9f9f9]">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold mb-12 text-center">فريق هندسي متميز في خدمتك</h2>
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div>
              <Image
                src="https://ext.same-assets.com/200402770/3782621980.jpeg"
                alt="فريق هندسي متميز"
                className="rounded-lg shadow-md"
                width={600}
                height={400}
              />
            </div>
            <div>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <span className="bg-[#b8975d] text-white p-1 rounded-full mr-2 flex-shrink-0 mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </span>
                  <div>
                    <h3 className="font-bold text-lg text-[#8c5f44]">مهندسون وفنيون محترفون</h3>
                    <p className="text-gray-600">نمتلك فريق من المهندسين والفنيين المحترفين بخبرة كبيرة في تصميم وتنفيذ جميع أنواع المظلات والسواتر والخيام.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="bg-[#b8975d] text-white p-1 rounded-full mr-2 flex-shrink-0 mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </span>
                  <div>
                    <h3 className="font-bold text-lg text-[#8c5f44]">سرعة تنفيذ قياسية</h3>
                    <p className="text-gray-600">نلتزم بتنفيذ المشاريع في الوقت المحدد وبأعلى جودة ممكنة. سرعة في التنفيذ مع الإهتمام بأدق التفاصيل.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="bg-[#b8975d] text-white p-1 rounded-full mr-2 flex-shrink-0 mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </span>
                  <div>
                    <h3 className="font-bold text-lg text-[#8c5f44]">استشارات هندسية مجانية</h3>
                    <p className="text-gray-600">نقدم استشارات هندسية مجانية لمساعدتك في اختيار أفضل الحلول المناسبة لمشروعك.</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* بعض أعمالنا */}
      <section id="projects" className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold mb-10 text-center">بعض أعمالنا</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
            <div className="relative overflow-hidden rounded-lg shadow-md group">
              <Image
                src="https://ext.same-assets.com/200402770/3221027249.jpeg"
                alt="مظلات سيارات"
                className="w-full h-64 object-cover transition duration-500 group-hover:scale-110"
                width={400}
                height={300}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex flex-col justify-end p-4">
                <h3 className="text-white font-bold text-lg">مظلات سيارات</h3>
                <p className="text-gray-200 text-sm">تنفيذ مظلات سيارات عصرية بجدة</p>
              </div>
            </div>
            <div className="relative overflow-hidden rounded-lg shadow-md group">
              <Image
                src="https://ext.same-assets.com/200402770/3377810294.jpeg"
                alt="خيام ملكية"
                className="w-full h-64 object-cover transition duration-500 group-hover:scale-110"
                width={400}
                height={300}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex flex-col justify-end p-4">
                <h3 className="text-white font-bold text-lg">خيام ملكية</h3>
                <p className="text-gray-200 text-sm">خيام وبيوت شعر بتصاميم فاخرة</p>
              </div>
            </div>
            <div className="relative overflow-hidden rounded-lg shadow-md group">
              <Image
                src="https://ext.same-assets.com/200402770/2876684063.jpeg"
                alt="برجولات حدائق"
                className="w-full h-64 object-cover transition duration-500 group-hover:scale-110"
                width={400}
                height={300}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex flex-col justify-end p-4">
                <h3 className="text-white font-bold text-lg">برجولات حدائق</h3>
                <p className="text-gray-200 text-sm">برجولات عصرية للحدائق والمتنزهات</p>
              </div>
            </div>
            <div className="relative overflow-hidden rounded-lg shadow-md group">
              <Image
                src="https://ext.same-assets.com/200402770/3574464506.jpeg"
                alt="سواتر حديد وخشب"
                className="w-full h-64 object-cover transition duration-500 group-hover:scale-110"
                width={400}
                height={300}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex flex-col justify-end p-4">
                <h3 className="text-white font-bold text-lg">سواتر حديد وخشب</h3>
                <p className="text-gray-200 text-sm">سواتر لتوفير الخصوصية والحماية</p>
              </div>
            </div>
            <div className="relative overflow-hidden rounded-lg shadow-md group">
              <Image
                src="https://ext.same-assets.com/4049809232/2214971808.jpeg"
                alt="تنسيق حدائق"
                className="w-full h-64 object-cover transition duration-500 group-hover:scale-110"
                width={400}
                height={300}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex flex-col justify-end p-4">
                <h3 className="text-white font-bold text-lg">تنسيق حدائق</h3>
                <p className="text-gray-200 text-sm">تصميم وتنسيق الحدائق المنزلية</p>
              </div>
            </div>
            <div className="relative overflow-hidden rounded-lg shadow-md group">
              <Image
                src="https://ext.same-assets.com/3073684241/3661796902.jpeg"
                alt="بيوت شعر فاخرة"
                className="w-full h-64 object-cover transition duration-500 group-hover:scale-110"
                width={400}
                height={300}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex flex-col justify-end p-4">
                <h3 className="text-white font-bold text-lg">بيوت شعر فاخرة</h3>
                <p className="text-gray-200 text-sm">تفصيل بيوت شعر للاستراحات والمخيمات</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* تواصل معنا */}
      <section id="contact" className="py-16 bg-[#f9f9f9]">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold mb-10 text-center">تواصل معنا</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <div className="bg-white rounded-lg shadow p-6 mb-6">
                <h3 className="font-bold text-lg mb-4 text-[#b8975d] text-center">العنوان</h3>
                <p className="text-center text-gray-600">جدة، المملكة العربية السعودية</p>
              </div>
              <div className="bg-white rounded-lg shadow p-6 mb-6">
                <h3 className="font-bold text-lg mb-4 text-[#b8975d] text-center">الهاتف</h3>
                <p className="text-center">
                  <a href="tel:+966553719009" className="text-[#8c5f44] font-semibold hover:underline">0553719009</a>
                </p>
              </div>
              <div className="bg-white rounded-lg shadow p-6">
                <h3 className="font-bold text-lg mb-4 text-[#b8975d] text-center">البريد الإلكتروني</h3>
                <p className="text-center">
                  <a href="mailto:info@aldiyarglobal.com" className="text-[#8c5f44] font-semibold hover:underline">info@aldiyarglobal.com</a>
                </p>
              </div>
            </div>
            <div className="md:col-span-2">
              <form className="bg-white rounded-lg shadow p-6">
                <div className="grid md:grid-cols-2 gap-4 mb-4">
                  <input
                    type="text"
                    placeholder="الاسم"
                    className="border border-gray-300 rounded p-3 focus:outline-none focus:ring-2 focus:ring-[#b8975d]"
                  />
                  <input
                    type="tel"
                    placeholder="رقم الجوال"
                    className="border border-gray-300 rounded p-3 focus:outline-none focus:ring-2 focus:ring-[#b8975d]"
                  />
                </div>
                <div className="mb-4">
                  <input
                    type="email"
                    placeholder="البريد الإلكتروني"
                    className="w-full border border-gray-300 rounded p-3 focus:outline-none focus:ring-2 focus:ring-[#b8975d]"
                  />
                </div>
                <div className="mb-4">
                  <textarea
                    placeholder="الرسالة"
                    rows={5}
                    className="w-full border border-gray-300 rounded p-3 focus:outline-none focus:ring-2 focus:ring-[#b8975d]"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-[#b8975d] text-white font-bold py-3 rounded-lg hover:bg-[#8c5f44] transition"
                >
                  إرسال
                </button>
              </form>
              <div className="mt-6 flex justify-center space-x-4">
                <a href="https://wa.me/+966553719009" target="_blank" rel="noopener noreferrer" className="mx-2">
                  <Image
                    src="https://img.icons8.com/color/48/000000/whatsapp--v1.png"
                    alt="واتساب"
                    width={40}
                    height={40}
                  />
                </a>
                <a href="https://www.instagram.com/aldiyarglobal/" target="_blank" rel="noopener noreferrer" className="mx-2">
                  <Image
                    src="https://img.icons8.com/color/48/000000/instagram-new--v1.png"
                    alt="انستجرام"
                    width={40}
                    height={40}
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* الفوتر */}
      <footer className="bg-[#2d2a27] text-[#fafafa] py-10">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-10">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <Image
                  src="https://ext.same-assets.com/200402770/3736915175.png"
                  alt="شعار الديار"
                  width={70}
                  height={70}
                />
                <h3 className="text-xl font-bold">الديار العالمية</h3>
              </div>
              <p className="text-sm text-[#c3ad90]">
                مؤسسة الديار العالمية للمظلات والسواتر والبرجولات والخيام وبيوت الشعر والديكورات الداخلية والخارجية بجدة وكافة أنحاء المملكة
              </p>
            </div>
            <div>
              <h3 className="text-lg font-bold mb-5 text-[#b8975d]">روابط سريعة</h3>
              <ul className="space-y-2">
                <li><Link href="/" className="hover:text-[#b8975d] transition">الرئيسية</Link></li>
                <li><Link href="#services" className="hover:text-[#b8975d] transition">خدماتنا</Link></li>
                <li><Link href="#about" className="hover:text-[#b8975d] transition">من نحن</Link></li>
                <li><Link href="#projects" className="hover:text-[#b8975d] transition">بعض أعمالنا</Link></li>
                <li><Link href="#contact" className="hover:text-[#b8975d] transition">اتصل بنا</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-bold mb-5 text-[#b8975d]">معلومات التواصل</h3>
              <ul className="space-y-2">
                <li>الهاتف: <a href="tel:+966553719009" className="text-[#fafafa] hover:text-[#b8975d] transition">0553719009</a></li>
                <li>البريد: <a href="mailto:info@aldiyarglobal.com" className="text-[#fafafa] hover:text-[#b8975d] transition">info@aldiyarglobal.com</a></li>
                <li>العنوان: جدة، المملكة العربية السعودية</li>
              </ul>
              <div className="flex mt-4 space-x-3">
                <a href="https://wa.me/+966553719009" target="_blank" rel="noopener noreferrer" className="ml-3">
                  <Image
                    src="https://img.icons8.com/color/48/000000/whatsapp--v1.png"
                    alt="واتساب"
                    width={30}
                    height={30}
                  />
                </a>
                <a href="https://www.instagram.com/aldiyarglobal/" target="_blank" rel="noopener noreferrer">
                  <Image
                    src="https://img.icons8.com/color/48/000000/instagram-new--v1.png"
                    alt="انستجرام"
                    width={30}
                    height={30}
                  />
                </a>
              </div>
            </div>
          </div>
          <div className="border-t border-[#b09257] mt-8 pt-4 text-center text-[#c3ad90] text-sm">
            جميع الحقوق محفوظة © 2024 مؤسسة الديار العالمية
          </div>
        </div>
      </footer>

      {/* زر واتساب عائم */}
      <a
        href="https://wa.me/+966553719009"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed z-50 bottom-5 right-5 bg-green-500 hover:bg-[#51ac41] text-white rounded-full p-4 shadow-lg animate-pop-in border-4 border-white"
        style={{ boxShadow: "0 4px 16px 0 #51ac4180" }}
        aria-label="واتساب سريع"
      >
        <Image
          src="https://img.icons8.com/color/48/000000/whatsapp--v1.png"
          alt="واتساب"
          className="w-8 h-8"
          width={32}
          height={32}
        />
      </a>
    </div>
  );
}
