import { benefits } from "@/data/benefits";

export function Benefits() {
  return (
    <section
      className="py-14 sm:py-16 md:py-20 lg:py-22 bg-night"
      id="benefits"
    >
      <div className="mx-auto w-full px-4 xs:px-5 sm:px-6 lg:px-8 xl:max-w-285">
        <div className="text-center mb-10 sm:mb-12">
          <span className="inline-block font-worksans tracking-[.16em] uppercase text-[0.72rem] font-semibold text-gold-soft mb-3">
            हमसे क्यों?
          </span>
          <h2 className="font-yatra text-2xl sm:text-3xl md:text-section text-ivory">
            हमारे साथ पूजा के लाभ
          </h2>
          <div className="marigold-divider">
            <span className="dot" />
            <span className="dot" />
            <span className="dot" />
          </div>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-5">
          {benefits.map((benefit, i) => (
            <div
              key={i}
              className="flex items-center gap-3 bg-white/5 border border-gold-soft/15 rounded-2xl px-5 py-4 hover:border-gold-soft/30 transition-colors"
            >
              <span
                className="shrink-0 w-8 h-8 rounded-full bg-teal/20 text-teal-soft flex items-center justify-center"
                aria-hidden="true"
              >
                <svg
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="w-4 h-4"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
              </span>
              <p className="font-worksans text-[0.93rem] text-ivory/85 leading-snug">
                {benefit}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
