import Image from "next/image";
import { CTADynamic } from "@/components/ui/CTADynamic";
import { siteConfig } from "@/data/site";
import { createWhatsAppUrl, DEFAULT_WA_MESSAGE } from "@/lib/whatsapp";

export function MainHero() {
  const waUrl = createWhatsAppUrl(DEFAULT_WA_MESSAGE);

  return (
    <section className="relative w-full min-h-[calc(100vh-80px)] py-12 lg:py-0 flex items-center justify-start overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/herobg.webp"
          alt="Hero Background"
          fill
          priority
          quality={90}
          sizes="100vw"
          className="object-cover object-center"
        />
        {/* Optional overlay to make text readable */}
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      {/* Content Container */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-4 sm:mt-0">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-10 lg:gap-8">
          {/* Left Side Content */}
          <div className="w-full lg:w-1/2 max-w-xl lg:max-w-3xl flex flex-col items-center lg:items-start text-center lg:text-left gap-4 sm:gap-4">
            {/* Top text */}
            <span className="font-semibold text-gold-soft text-sm sm:text-base tracking-widest px-4 py-1.5 rounded-full backdrop-blur-sm">
              || ऊँ नमः शिवाय ||
            </span>

            {/* Main Heading */}
            <h1 className="font-yatra text-4xl sm:text-5xl lg:text-[64px] text-white leading-[1.2] lg:leading-[1.15]">
              महाकाल की नगरी में, <br className="hidden lg:block" />
              <span className="text-gold-soft lg:block">
                शास्त्रोक विधि से दोष
              </span>{" "}
              निवारण पूजा
            </h1>

            {/* Subheading */}
            <p className="text-sm sm:text-lg text-white/90 leading-relaxed font-medium max-w-xl mt-1 sm:mt-2">
              पंडित धीरज शर्मा जी द्वारा उज्जैन में कालसर्प दोष, मंगल दोष,{" "}
              <br className="hidden lg:block" /> एवं नवग्रह शांति पूजा — संपूर्ण
              विधि-विधान एवं व्यक्तिगत संकल्प के साथ।
            </p>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row w-full sm:w-auto items-stretch sm:items-center gap-3 sm:gap-4 mt-2 sm:mt-4">
              <CTADynamic
                href={waUrl}
                target="_blank"
                rel="noopener noreferrer"
                variant="outline"
                className="px-6 py-3.5 bg-maroon-nav border-gold-soft text-white hover:bg-maroon-nav/80 w-full sm:w-auto"
                icon={
                  <svg
                    viewBox="0 0 24 24"
                    className="w-5 h-5 text-[#25D366]"
                    fill="currentColor"
                  >
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z" />
                  </svg>
                }
              >
                WhatsApp पर जुड़ें
              </CTADynamic>

              <CTADynamic
                href={`tel:${siteConfig.phone.primary}`}
                variant="solid"
                className="px-6 py-3.5 w-full sm:w-auto"
                icon={
                  <svg
                    viewBox="0 0 24 24"
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                  </svg>
                }
              >
                अभी कॉल करें
              </CTADynamic>
            </div>

            {/* Bottom Icons Row */}
            <div className="flex flex-row flex-wrap justify-center sm:justify-start items-center gap-4 sm:gap-8 mt-6 sm:mt-8 pt-6 border-t border-white/10 w-full">
              {/* Stat 1 */}
              <div className="w-32 sm:w-max flex items-center gap-2 sm:gap-3">
                <div className="text-gold-soft w-8 sm:w-9">
                  <Image
                    src="/images/temple.svg"
                    alt="Temple Icon"
                    width={36}
                    height={36}
                    className="object-contain w-full h-auto"
                  />
                </div>
                <div className="flex flex-col text-white leading-tight text-left">
                  <span className="font-bold text-lg sm:text-xl">20+</span>
                  <span className="text-[11px] sm:text-sm text-white/80">
                    वर्षों का अनुभव
                  </span>
                </div>
              </div>

              <div className="w-px h-8 sm:h-10 bg-transparent sm:bg-white/20 block"></div>

              {/* Stat 2 */}
              <div className="w-32 sm:w-max flex items-center gap-2 sm:gap-3">
                <div className="text-gold-soft w-8 sm:w-9">
                  <Image
                    src="/images/laptop.svg"
                    alt="Laptop Icon"
                    width={36}
                    height={36}
                    className="object-contain w-full h-auto"
                  />
                </div>
                <div className="flex flex-col text-white leading-tight text-left">
                  <span className="font-bold text-lg sm:text-xl">Online</span>
                  <span className="text-[11px] sm:text-sm text-white/80">
                    पूजा की सुविधा
                  </span>
                </div>
              </div>

              <div className="w-px h-8 sm:h-10 bg-white/20 hidden sm:block"></div>

              {/* Stat 3 */}
              <div className="w-32 sm:w-max flex items-center gap-2 sm:gap-3">
                <div className="text-gold-soft w-8 sm:w-9">
                  <Image
                    src="/images/verified.svg"
                    alt="Verified Icon"
                    width={36}
                    height={36}
                    className="object-contain w-full h-auto"
                  />
                </div>
                <div className="flex flex-col text-white leading-tight text-left">
                  <span className="font-bold text-lg sm:text-xl">100%</span>
                  <span className="text-[11px] sm:text-sm text-white/80">
                    संतोष की गारंटी
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side Content (Image Array) */}
          <div className="w-full lg:w-1/2 flex items-center justify-center lg:justify-end relative mt-6 lg:mt-0 pb-8 sm:pb-10 lg:pb-0">
            <div className="relative w-full max-w-70 sm:max-w-sm lg:max-w-md aspect-4/5 flex items-center justify-center">
              {/* Floating Circular Icons */}
              <div className="absolute top-[10%] sm:top-[10%] left-[-18%] sm:left-[-15%] lg:left-[-18%] z-2 hidden xs:block w-20 h-20 lg:w-28 lg:h-28">
                <Image
                  src="/images/shiv.webp"
                  alt="Shiv"
                  fill
                  className="object-cover rounded-full p-1 drop-shadow-xl"
                />
              </div>

              <div className="absolute top-[40%] sm:top-[36%] left-[-18%] sm:left-[-15%] lg:left-[-30%] z-20 hidden xs:block w-20 h-20 lg:w-28 lg:h-28">
                <Image
                  src="/images/snake.webp"
                  alt="Snake"
                  fill
                  className="object-cover rounded-full p-1 drop-shadow-xl"
                />
              </div>

              <div className="absolute bottom-[9%] sm:bottom-[18%] left-[-14%] sm:left-[-10%] lg:left-[-24%] z-20 hidden xs:block w-20 h-20 lg:w-28 lg:h-28">
                <Image
                  src="/images/flame.webp"
                  alt="Flame"
                  fill
                  className="object-cover rounded-full p-1 drop-shadow-xl"
                />
              </div>

              {/* Main Pandit Image */}
              <div className="relative w-full h-full z-10">
                <Image
                  src="/images/pandit-dheeraj-sharma1.webp"
                  alt="Pandit Dheeraj Sharma Ji"
                  fill
                  className="object-contain drop-shadow-2xl"
                  priority
                />
              </div>

              {/* Nameplate Badge */}
              <div className="absolute -bottom-4 sm:-bottom-6 left-1/2 -translate-x-1/2 z-30 w-56 h-12 sm:w-72 sm:h-14 lg:w-96 lg:h-16 flex items-center justify-center drop-shadow-xl">
                <Image
                  src="/images/nameplate.webp"
                  alt="Nameplate Background"
                  fill
                  className="object-contain"
                  priority
                />
                <span className="relative z-10 font-worksans text-xs sm:text-sm lg:text-base text-white mt-1 tracking-wide">
                  पंडित धीरज शर्मा जी
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
