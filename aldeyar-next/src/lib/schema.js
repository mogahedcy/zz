// تكوين مخطط المنظمة المحلية (LocalBusiness)
export const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "الديار للمظلات والسواتر",
  "url": "https://aldeyar.me",
  "logo": "https://ext.same-assets.com/200402770/3736915175.png",
  "image": "https://same-0zvhmvmjr64-latest.netlify.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fhero.8f6e27dc.jpg&w=3840&q=75",
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
  "priceRange": "$$"
}

// توليد مخطط الخدمة (Service)
export const generateServiceSchema = (service) => {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": service.type,
    "name": service.name,
    "provider": {
      "@type": "LocalBusiness",
      "name": "الديار للمظلات والسواتر",
      "image": "https://ext.same-assets.com/200402770/3736915175.png",
      "url": "https://aldeyar.me",
      "telephone": "+966553719009",
      "priceRange": "$$"
    },
    "description": service.description,
    "areaServed": {
      "@type": "Country",
      "name": "المملكة العربية السعودية"
    },
    "image": service.image,
    "url": `https://aldeyar.me/${service.slug}`
  }
}

// إنشاء مخطط منتج (Product) لكل نوع من المظلات أو السواتر
export const generateProductSchema = (product) => {
  return {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": product.name,
    "image": product.image,
    "description": product.description,
    "brand": {
      "@type": "Brand",
      "name": "الديار للمظلات والسواتر"
    },
    "offers": {
      "@type": "AggregateOffer",
      "priceCurrency": "SAR",
      "lowPrice": product.lowPrice,
      "highPrice": product.highPrice,
      "offerCount": product.offerCount || "5",
      "offers": product.variants.map(variant => ({
        "@type": "Offer",
        "itemOffered": {
          "@type": "Product",
          "name": variant.name
        },
        "priceCurrency": "SAR",
        "price": variant.price
      }))
    }
  }
}

// إنشاء مخطط المقال (Article) للمدونة
export const generateArticleSchema = (article) => {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": article.title,
    "description": article.description,
    "image": article.image,
    "datePublished": article.datePublished,
    "dateModified": article.dateModified || article.datePublished,
    "author": {
      "@type": "Organization",
      "name": "الديار للمظلات والسواتر",
      "url": "https://aldeyar.me"
    },
    "publisher": {
      "@type": "Organization",
      "name": "الديار للمظلات والسواتر",
      "logo": {
        "@type": "ImageObject",
        "url": "https://ext.same-assets.com/200402770/3736915175.png"
      }
    },
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": `https://aldeyar.me/blog/${article.slug}`
    }
  }
}

// إنشاء مخطط الأسئلة الشائعة (FAQPage)
export const generateFAQSchema = (questions) => {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": questions.map(q => ({
      "@type": "Question",
      "name": q.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": q.answer
      }
    }))
  }
}

// إنشاء بيانات منظمة للخريطة (SiteNavigationElement)
export const siteNavigationSchema = {
  "@context": "https://schema.org",
  "@type": "SiteNavigationElement",
  "name": [
    "الرئيسية",
    "خدماتنا",
    "أعمالنا",
    "من نحن",
    "المدونة",
    "اتصل بنا"
  ],
  "url": [
    "https://aldeyar.me/",
    "https://aldeyar.me/#services",
    "https://aldeyar.me/#projects",
    "https://aldeyar.me/#about",
    "https://aldeyar.me/blog",
    "https://aldeyar.me/#contact"
  ]
}
