import { faqItems } from "@/data/faq";

export function FAQ() {
  return (
    <section
      id="faq"
      className="py-14 sm:py-16 md:py-20 lg:py-22"
      style={{ background: "linear-gradient(135deg, #2C121C 0%, #4A1826 100%)" }}
    >
      <div className="mx-auto w-full px-4 xs:px-5 sm:px-6 lg:px-8 xl:max-w-285">
        <div className="text-center mb-10 sm:mb-12">
          <span className="inline-block font-worksans tracking-[.16em] uppercase text-[0.72rem] font-semibold text-gold-soft mb-3">
            सामान्य प्रश्न
          </span>
          <h2 className="font-yatra text-2xl sm:text-3xl md:text-section text-ivory">
            अक्सर पूछे जाने वाले प्रश्न
          </h2>
          <div className="marigold-divider">
            <span className="dot" />
            <span className="dot" />
            <span className="dot" />
          </div>
        </div>

        <div className="max-w-full sm:max-w-190 mx-auto space-y-3">
          {faqItems.map((item, i) => (
            <details
              key={i}
              className="bg-white/5 border border-gold-soft/20 rounded-2xl overflow-hidden group"
            >
              <summary className="flex items-center justify-between px-4 py-4 sm:px-5.5 sm:py-4.5 cursor-pointer list-none font-worksans font-semibold text-ivory text-[0.95rem] hover:text-gold-soft transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold-soft">
                <span>{item.question}</span>
                <span
                  className="faq-icon shrink-0 ml-4 w-6 h-6 rounded-full border border-gold-soft/40 flex items-center justify-center text-gold-soft text-lg leading-none"
                  aria-hidden="true"
                >
                  +
                </span>
              </summary>
              <div className="px-4 pb-4 sm:px-5.5 sm:pb-4.5 font-worksans text-[0.92rem] text-ivory/70 leading-relaxed border-t border-gold-soft/10 pt-3">
                {item.answer}
              </div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
