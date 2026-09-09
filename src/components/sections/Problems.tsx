import { ReactNode } from "react";
import Image from "next/image";

interface ProblemData {
  title: string;
  desc: string;
  icon: ReactNode;
}

const problems: ProblemData[] = [
  {
    title: "काल सर्प दोष",
    desc: "ज्योतिष के अनुसार काल सर्प दोष से जीवन में रुकावट और मानसिक तनाव बढ़ सकता है।",
    icon: (
      <Image src="/images/python.webp" alt="काल सर्प दोष" width={80} height={80} className="object-contain" />
    ),
  },
  {
    title: "मंगल दोष",
    desc: "मंगल दोष के कारण विवाह में देरी, दांपत्य जीवन में तनाव और पारिवारिक असंतुलन हो सकता है।",
    icon: (
      <Image src="/images/trishul.webp" alt="मंगल दोष" width={80} height={80} className="object-contain" />
    ),
  },
  {
    title: "विवाह में बाधा",
    desc: "कुंडली में ग्रहों की स्थिति के कारण रिश्तों में देरी, असहमति और विवाह में रुकावटें आ सकती हैं।",
    icon: (
      <Image src="/images/rings.webp" alt="विवाह में बाधा" width={80} height={80} className="object-contain" />
    ),
  },
  {
    title: "करियर और वित्तीय समस्या",
    desc: "ग्रहों के अशुभ प्रभाव से नौकरी, व्यापार और आर्थिक स्थिति में उतार-चढ़ाव आ सकते हैं।",
    icon: (
      <Image src="/images/career.webp" alt="करियर और वित्तीय समस्या" width={80} height={80} className="object-contain" />
    ),
  },
  {
    title: "पारिवारिक समस्याएं",
    desc: "ग्रह दोषों के कारण घर में कलह, मानसिक तनाव और रिश्तों में दूरी बढ़ सकती है।",
    icon: (
      <Image src="/images/family.webp" alt="पारिवारिक समस्याएं" width={80} height={80} className="object-contain" />
    ),
  },
  {
    title: "आध्यात्मिक और मानसिक शांति",
    desc: "नकारात्मक ऊर्जा, ग्रह दोष और अस्थिरता के कारण मन अशांत रहता है और जीवन में संतुलन नहीं बन पाता।",
    icon: (
      <Image src="/images/peace.webp" alt="आध्यात्मिक और मानसिक शांति" width={80} height={80} className="object-contain" />
    ),
  },
];

export function Problems() {
  return (
    <section
      id="problems"
      className="relative py-16 sm:py-20 md:pb-32 md:pt-16 bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: "url('/images/bg2.webp')" }}
    >
      <div className="relative z-10 mx-auto w-full px-4 xs:px-5 sm:px-6 lg:px-8 xl:max-w-7xl">
        {/* Heading Section */}
        <div className="text-center mb-14 sm:mb-20">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="h-px w-10 sm:w-16 bg-maroon-deep/30"></div>
            <div className="w-1.5 h-1.5 rotate-45 border border-maroon-deep/40"></div>
            <span className="font-yatra tracking-widest text-maroon-deep text-sm sm:text-base font-bold">
              || ॐ नमः शिवाय ||
            </span>
            <div className="w-1.5 h-1.5 rotate-45 border border-maroon-deep/40"></div>
            <div className="h-px w-10 sm:w-16 bg-maroon-deep/30"></div>
          </div>

          <h2 className="font-yatra text-3xl sm:text-4xl md:text-[44px] text-maroon-deep mb-6 leading-tight">
            यदि हाँ, तो यही <span className="text-gold-dark">मार्गदर्शन</span>{" "}
            आज ही प्राप्त करें
          </h2>

          <p className="font-worksans text-[15px] sm:text-[17px] text-maroon-deep/80 max-w-4xl mx-auto leading-relaxed">
            हर श्रद्धालु की कुंडली और परिस्थिति अलग होती है — इसलिए पूजा भी
            व्यक्तिगत रूप से तय की जाती है। यहाँ जानिए किन-किन समस्याओं में
            हमारी पूजा आपके लिए सहायक हो सकती है।
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {problems.map((p, index) => (
            <div
              key={index}
              className="group relative bg-white/95 backdrop-blur-sm rounded-xl p-6 shadow-card border border-gold-soft/40 hover:shadow-brand hover:-translate-y-1 transition-all duration-300 flex items-start gap-4"
            >
              {/* Decorative Corner Accents */}
              {/* <div className="absolute top-2 left-2 w-2 h-2 border-t border-l border-gold-soft/40 rounded-tl-sm opacity-50"></div>
              <div className="absolute top-2 right-2 w-2 h-2 border-t border-r border-gold-soft/40 rounded-tr-sm opacity-50"></div>
              <div className="absolute bottom-2 left-2 w-2 h-2 border-b border-l border-gold-soft/40 rounded-bl-sm opacity-50"></div> */}

              {/* Icon Container */}
              <div className="shrink-0 w-20 h-20 rounded-full flex items-center justify-center">
                {p.icon}
              </div>

              {/* Text Content */}
              <div className="flex flex-col">
                <h3 className="font-yatra text-xl sm:text-2xl text-maroon-deep mb-2">
                  {p.title}
                </h3>
                <p className="text-maroon-deep/80 text-[13px] sm:text-[14px] font-worksans leading-relaxed">
                  {p.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
