const reviews = [
  {
    name: "दिलीप जी",
    location: "प्रतापगढ़",
    text: "गुरु जी जैसी कुंडली देख कर अपने बताया था ठीक वही हुआ आपका बहुत बहुत धन्यवाद 🙏",
    rating: 5,
  },
  {
    name: "प्रदीप जी",
    location: "हरदा",
    text: "पंडित जी जबसे आपने चांडल दोष की शांति की हे व्यापार अच्छे से चलने लगा है",
    rating: 5,
  },
  {
    name: "राकेश जी",
    location: "नर्मदापुरम",
    text: "पंडित जी कालसर्प के पूजन के बाद बिल्कुल पहले जैसा व्यापार चालू हो गया",
    rating: 5,
  },
  {
    name: "तन्मय जी",
    location: "भोपाल",
    text: "गुरुजी जब से महामृत्युंजय जप किया बड़े पापा बिल्कुल स्वस्थ हो गए, जय महाकाल 🙏",
    rating: 5,
  },
  {
    name: "अमित शर्मा",
    location: "इंदौर",
    text: "पंडित जी का व्यवहार बहुत ही विनम्र है, नवग्रह शांति पूजा के बाद घर में बहुत शांति है।",
    rating: 5,
  },
  {
    name: "सुनीता जैन",
    location: "उज्जैन",
    text: "मंगल दोष के कारण बहुत परेशान थी, यहाँ पूजा कराने के बाद विवाह में आ रही सारी बाधाएं दूर हो गईं।",
    rating: 5,
  },
  {
    name: "राजीव सिंह",
    location: "दिल्ली",
    text: "ऑनलाइन पूजा का संकल्प लिया था। पंडित जी ने पूरी विधि-विधान से पूजा की वीडियो भी भेजी।",
    rating: 5,
  },
];

function StarRating({ count }: { count: number }) {
  return (
    <div className="flex items-center gap-1">
      {[...Array(count)].map((_, i) => (
        <svg
          key={i}
          className="w-4 h-4 text-gold-soft"
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

export function Reviews() {
  return (
    <section
      id="reviews"
      className="py-16 sm:py-20 md:py-28 bg-linear-to-br from-[#2e0011] via-[#4A1826] to-[#2C121C] relative overflow-hidden"
    >
      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 50s linear infinite;
        }
        .animate-marquee:hover {
          animation-play-state: paused;
        }
      `}</style>

      {/* Decorative blobs */}
      <div className="absolute top-[-10%] right-[-10%] w-125 h-125 bg-gold-soft rounded-full blur-[150px] opacity-10 pointer-events-none"></div>
      <div className="absolute bottom-[-10%] left-[-10%] w-125 h-125 bg-maroon-deep rounded-full blur-[150px] opacity-20 pointer-events-none"></div>

      <div className="relative z-10 w-full">
        <div className="mx-auto px-4 xs:px-5 sm:px-6 lg:px-8 xl:max-w-7xl">
          <div className="text-center mb-12 sm:mb-16">
            <div className="flex items-center justify-center gap-4 mb-4">
              <div className="h-px w-10 sm:w-16 bg-gold-soft/60"></div>
              <span className="inline-block font-worksans tracking-[.16em] uppercase text-xs sm:text-[13px] font-semibold text-gold-soft">
                श्रद्धालुओं के अनुभव
              </span>
              <div className="h-px w-10 sm:w-16 bg-gold-soft/60"></div>
            </div>
            <h2 className="font-yatra text-3xl sm:text-4xl md:text-[44px] text-ivory mb-6 leading-tight">
              भक्तों का <span className="text-gold-soft">विश्वास</span>
            </h2>
          </div>
        </div>

        {/* Scrolling Marquee Container */}
        <div className="relative w-full overflow-hidden">
          {/* Edge Gradient Masks for smooth fade out */}
          <div className="absolute top-0 left-0 w-8 sm:w-24 h-full bg-linear-to-r from-[#2e0011] to-transparent z-20 pointer-events-none"></div>
          <div className="absolute top-0 right-0 w-8 sm:w-24 h-full bg-linear-to-l from-[#2C121C] to-transparent z-20 pointer-events-none"></div>

          <div className="flex w-max animate-marquee gap-6 sm:gap-8 px-4 pb-8 pt-4">
            {[...reviews, ...reviews].map((review, i) => (
              <div
                key={i}
                className="w-75 sm:w-95 shrink-0 group bg-white/5 border border-white/10 rounded-2xl p-6 sm:p-8 hover:bg-white/10 hover:border-gold-soft/30 transition-all duration-300 hover:-translate-y-1.5 cursor-pointer"
              >
                <div className="flex justify-between items-start mb-5">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-gold-soft/20 flex items-center justify-center text-gold-soft font-yatra text-xl border border-gold-soft/30 shrink-0 shadow-inner">
                      {review.name.charAt(0)}
                    </div>
                    <div>
                      <h4 className="text-ivory font-semibold text-[16px] sm:text-[17px] mb-0.5">
                        {review.name}
                      </h4>
                      <p className="text-gold-soft text-xs sm:text-[13px] tracking-wide">
                        {review.location}
                      </p>
                    </div>
                  </div>
                  <div className="shrink-0 mt-1">
                    <StarRating count={review.rating} />
                  </div>
                </div>
                <p className="text-ivory/90 font-worksans leading-relaxed text-[14.5px] sm:text-[15px] italic">
                  &ldquo;{review.text}&rdquo;
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
