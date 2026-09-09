import Image from "next/image";
import { siteConfig } from "@/data/site";
import { User, MessageCircle, BookOpen, ShieldCheck } from "lucide-react";

const credentials = [
  {
    icon: User,
    line1: "20+ वर्षों",
    line2: "का अनुभव",
  },
  {
    icon: MessageCircle,
    line1: "Online पूजा",
    line2: "की सुविधा",
  },
  {
    icon: BookOpen,
    line1: "वैदिक शास्त्रों",
    line2: "में निपुण",
  },
  {
    icon: ShieldCheck,
    line1: "समर्पित सेवा",
    line2: "एवं मार्गदर्शन",
  },
];

export function PanditBio() {
  return (
    <section
      id="about"
      className="relative py-16 sm:py-24 overflow-hidden"
      style={{ background: "linear-gradient(135deg, #FBF3E4, #F3E6CB)" }}
    >
      {/* Decorative Background Elements */}
      {/* <div className="absolute top-0 left-0 w-full h-full opacity-20 pointer-events-none overflow-hidden">
        <div className="absolute top-[-10%] right-[-10%] w-125 h-125 bg-gold-soft rounded-full blur-[150px]"></div>
        <div className="absolute bottom-[-10%] left-[-10%] w-125 h-125 bg-maroon-deep rounded-full blur-[150px]"></div>
      </div> */}

      <div className="relative z-10 mx-auto w-full px-4 xs:px-5 sm:px-6 lg:px-8 xl:max-w-7xl">
        <div className="flex flex-col md:flex-row items-center gap-16 lg:gap-8">
          {/* Left Column: Photo Area */}
          <div className="w-full md:w-1/2 flex justify-center">
            <div className="relative group mt-6 md:mt-0">
              {/* Image Container */}
              <div className="relative w-90 h-90 sm:w-100 sm:h-120 lg:w-125 lg:h-150 z-10 flex justify-center">
                <Image
                  src="/images/pandit-dheeraj-sharma1.webp"
                  alt="Pandit Dheeraj Sharma Ji - Ujjain Vedic Pandit"
                  fill
                  loading="lazy"
                  className="object-contain object-bottom group-hover:scale-[1.03] transition-transform duration-700 drop-shadow-2xl"
                  sizes="(max-width: 640px) 300px, (max-width: 1024px) 400px, 500px"
                />
              </div>
            </div>
          </div>

          {/* Right Column: Content Area */}
          <div className="w-full flex flex-col items-center text-center md:items-start md:text-left">
            <div className="flex items-center gap-4 mb-5">
              <div className="h-px w-8 sm:w-12 bg-gold-soft/60"></div>
              <span className="inline-block font-worksans tracking-[.16em] uppercase text-xs sm:text-[13px] font-semibold text-maroon-deep">
                अनुभवी वैदिक विद्वान
              </span>
              <div className="h-px w-8 sm:w-12 bg-gold-soft/60 md:hidden"></div>
            </div>

            <h2 className="font-yatra text-4xl sm:text-5xl lg:text-14 text-maroon-deep mb-4 leading-[1.15]">
              {siteConfig.pandit.nameHi}
            </h2>

            <div className="inline-flex items-center gap-2 bg-gold-soft/10 border border-gold-soft/30 text-maroon-deep text-xs sm:text-sm font-semibold px-5 py-2 sm:py-2.5 rounded-full mb-8 backdrop-blur-sm shadow-inner">
              <span className="w-1.5 h-1.5 rounded-full bg-maroon-deep"></span>
              शास्त्रोक्त वैदिक पंडित • महाकाल नगरी, उज्जैन
            </div>

            <div className="space-y-4 font-worksans text-[15px] sm:text-[1.05rem] text-maroon-deep font-medium leading-relaxed mb-10 max-w-2xl">
              <p>
                पंडित धीरज शर्मा जी उज्जैन के एक सुप्रसिद्ध वैदिक पंडित हैं, जो
                20 से अधिक वर्षों से
                <strong className="text-maroon-deep">
                  {" "}
                  काल सर्प दोष, मंगल दोष, नवग्रह शांति{" "}
                </strong>
                एवं अन्य दोष-निवारण पूजाएँ सम्पूर्ण विधि-विधान से सम्पन्न कराते
                आ रहे हैं।
              </p>
              <p>
                वे प्रत्येक पूजा को शास्त्रों में वर्णित सटीक नियमों, शुद्ध
                मंत्रोच्चार एवं व्यक्तिगत संकल्प के साथ पूर्ण कराते हैं, ताकि
                श्रद्धालुओं को शत-प्रतिशत फल प्राप्त हो सके।
              </p>
              <p className="text-maroon-deep italic mt-6">
                श्रद्धालुओं की सुविधा के लिए Online एवं Offline दोनों प्रकार की
                पूजा का उत्तम प्रबंध उपलब्ध है।
              </p>
            </div>

            {/* Credential Checkmarks */}
            <div className="flex flex-wrap justify-center md:justify-start gap-3 sm:gap-4 w-full mt-2">
              {credentials.map((c, index) => {
                const Icon = c.icon;
                return (
                  <div
                    key={index}
                    className="flex items-center gap-3 bg-[#FDF8ED]/60 border border-[#D4B683] rounded-full pl-1.5 pr-5 py-1.5 shadow-sm hover:-translate-y-0.5 transition-transform duration-300"
                  >
                    <div className="shrink-0 bg-[#8A5A19] w-10 h-10 sm:w-11 sm:h-11 rounded-full flex items-center justify-center text-[#FDF8ED]">
                      <Icon size={20} strokeWidth={2} />
                    </div>
                    <div className="flex flex-col text-left">
                      <span className="text-[#8A5A19] text-[14px] sm:text-[15px] font-bold leading-tight font-worksans">
                        {c.line1}
                      </span>
                      <span className="text-[#334155] text-[12px] sm:text-[13px] font-semibold leading-tight font-worksans mt-0.5">
                        {c.line2}
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
