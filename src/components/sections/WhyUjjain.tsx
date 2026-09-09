import Image from "next/image";

export function WhyUjjain() {
  return (
    <section
      id="why-ujjain"
      className="relative w-full min-h-[calc(100vh-80px)] 2xl:min-h-min pb-32 pt-20 sm:py-28 md:py-32 lg:pb-34 lg:pt-20 bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: "url('/images/bg2.webp')" }}
    >
      <div className="mx-auto w-full px-4 xs:px-5 sm:px-6 lg:px-8 xl:max-w-285 2xl:max-w-330">
        <div className="grid grid-cols-1 gap-8 items-center lg:grid-cols-[0.8fr_1.2fr] md:gap-14 lg:gap-14">
          {/* Image */}
          <div className="relative max-w-100 lg:max-w-none mx-auto w-full">
            <div className="relative aspect-square rounded-2xl overflow-hidden border-2 border-gold-soft/30 shadow-brand">
              <Image
                src="/images/mahakal-ji.webp"
                alt="Mahakaleshwar Jyotirlinga Ujjain — Shree Mahakal Mandir"
                fill
                loading="lazy"
                className="object-cover"
                sizes="(max-width: 768px) 80vw, 35vw"
              />
            </div>

            {/* Caption Nameplate Badge */}
            <div className="absolute -bottom-5 sm:-bottom-7 left-1/2 -translate-x-1/2 z-30 w-56 h-12 sm:w-64 sm:h-14 flex items-center justify-center drop-shadow-xl">
              <Image
                src="/images/nameplate.webp"
                alt="Nameplate Background"
                fill
                className="object-contain"
              />
              <span className="relative z-10 font-worksans text-[11px] sm:text-xs text-white mt-1 tracking-wide">
                महाकालेश्वर मंदिर, उज्जैन
              </span>
            </div>
          </div>

          {/* Content */}
          <div className="text-maroon-deep">
            {/* Top decorative title */}
            <div className="flex items-center gap-4 mb-4">
              <div className="h-px w-8 sm:w-12 bg-gold-soft/60"></div>
              <span className="font-yatra text-maroon text-lg sm:text-xl tracking-wider">
                उज्जैन ही क्यों?
              </span>
              <div className="h-px w-8 sm:w-12 bg-gold-soft/60"></div>
            </div>

            <h2 className="font-yatra text-3xl sm:text-4xl md:text-[42px] text-maroon-deep leading-[1.2] mb-6">
              महाकाल की नगरी में,
              <br />
              <span className="text-maroon-deep">
                शास्त्रोक्त विधि से दोष निवारण पूजा
              </span>
            </h2>

            <div className="space-y-4 font-worksans text-base sm:text-[1.05rem] text-maroon-deep font-medium leading-relaxed mb-10">
              <p className="max-w-2xl">
                उज्जैन केवल एक धार्मिक स्थल नहीं, बल्कि सदियों से वैदिक साधना और
                ज्योतिषीय पूजन का प्रमुख केंद्र रहा है!
              </p>
              <p className="max-w-2xl">
                प्राचीन मंदिरों एवं पवित्र क्षिप्रा नदी के कारण देश-विदेश से
                श्रद्धालु यहाँ दोष निवारण अनुष्ठानों के लिए आते हैं!
              </p>
              <p className="max-w-2xl">
                शास्त्रोक्त विधि से पूजा के लिए अनुभवी वैदिक पंडित का मार्गदर्शन
                अत्यंत महत्वपूर्ण होता है — यही भूमिका पंडित धीरज शर्मा जी
                निभाते हैं!
              </p>
            </div>

            {/* 4 Icons Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-x-6 gap-y-8 sm:gap-8">
              {/* Feature 1 */}
              <div className="flex flex-col items-start text-left gap-3">
                <div className="w-14 h-14 rounded-full border-2 border-maroon bg-maroon-deep flex items-center justify-center shadow-lg shadow-black/20">
                  <svg
                    width="26"
                    height="26"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    className="text-gold-soft"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M3 21h18"></path>
                    <path d="M12 3l-8 7h16z"></path>
                    <path d="M5 10v11"></path>
                    <path d="M19 10v11"></path>
                    <path d="M9 21v-4a2 2 0 0 1 4 0v4"></path>
                  </svg>
                </div>
                <span className="font-medium text-[13px] sm:text-sm text-maroon leading-snug">
                  महाकालेश्वर-ज्योतिर्लिंग
                  <br />
                  का दिव्य स्थान
                </span>
              </div>

              {/* Feature 2 */}
              <div className="flex flex-col items-start text-left gap-3">
                <div className="w-14 h-14 rounded-full border-2 border-gold-soft bg-maroon-deep flex items-center justify-center shadow-lg shadow-black/20">
                  <svg
                    width="26"
                    height="26"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    className="text-gold-soft"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M2 6c.6.5 1.2 1 2.5 1C7 7 7 5 9.5 5c2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1"></path>
                    <path d="M2 12c.6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1"></path>
                    <path d="M2 18c.6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1"></path>
                  </svg>
                </div>
                <span className="font-medium text-[13px] sm:text-sm text-maroon leading-snug">
                  पवित्र क्षिप्रा नदी का
                  <br />
                  आध्यात्मिक महत्व
                </span>
              </div>

              {/* Feature 3 */}
              <div className="flex flex-col items-start text-left gap-3">
                <div className="w-14 h-14 rounded-full border-2 border-gold-soft bg-maroon-deep flex items-center justify-center shadow-lg shadow-black/20">
                  <svg
                    width="26"
                    height="26"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    className="text-gold-soft"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M12 22c-4-4-4-9-4-12a4 4 0 0 1 8 0c0 3 0 8-4 12z"></path>
                    <path d="M12 22c-4-4-9-4-12-4a4 4 0 0 1 0-8c3 0 8 0 12 4z"></path>
                    <path d="M12 22c4-4 9-4 12-4a4 4 0 0 0 0-8c-3 0-8 0-12 4z"></path>
                  </svg>
                </div>
                <span className="font-medium text-[13px] sm:text-sm text-maroon leading-snug">
                  वैदिक परंपरा और
                  <br />
                  शास्त्रों का संगम
                </span>
              </div>

              {/* Feature 4 */}
              <div className="flex flex-col items-start text-left gap-3">
                <div className="w-14 h-14 rounded-full border-2 border-gold-soft bg-maroon-deep flex items-center justify-center shadow-lg shadow-black/20">
                  <svg
                    width="26"
                    height="26"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    className="text-gold-soft"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                    <circle cx="9" cy="7" r="4"></circle>
                    <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                    <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                  </svg>
                </div>
                <span className="font-medium text-[13px] sm:text-sm text-maroon leading-snug">
                  देश-विदेश से आने वाले
                  <br />
                  लाखों श्रद्धालु
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
