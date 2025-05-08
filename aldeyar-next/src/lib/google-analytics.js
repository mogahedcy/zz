export const GA_TRACKING_ID = 'G-XXXXXXXXXX' // استبدل بمعرف التتبع الخاص بـ Google Analytics

// أحداث تتبع مشاهدة الصفحة
export const pageview = (url) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('config', GA_TRACKING_ID, {
      page_path: url,
    })
  }
}

// أحداث تتبع تفاعلات المستخدم
export const event = ({ action, category, label, value }) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', action, {
      event_category: category,
      event_label: label,
      value: value,
    })
  }
}

// تتبع النقرات على الروابط المعينة مثل أرقام الهاتف وروابط واتساب
export const trackOutboundLink = (type, url) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', 'click', {
      event_category: 'outbound',
      event_label: type,
      transport_type: 'beacon',
      event_callback: function () {
        if (url) document.location = url
      }
    })
  }
  return true
}

// تتبع مشاهدة مقاطع الفيديو
export const trackVideoView = (videoTitle, videoUrl) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', 'video_view', {
      event_category: 'videos',
      event_label: videoTitle,
      video_url: videoUrl
    })
  }
}

// تتبع إرسال نماذج الاتصال
export const trackFormSubmission = (formName) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', 'form_submit', {
      event_category: 'forms',
      event_label: formName
    })
  }
}
