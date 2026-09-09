import { bookingSteps } from "@/data/bookingSteps";

export function BookingSteps() {
  return (
    <section
      id="booking"
      className="py-14 sm:py-16 md:py-20 lg:py-22"
      style={{ background: "linear-gradient(135deg, #FBF3E4, #F3E6CB)" }}
    >
      <div className="mx-auto w-full px-4 xs:px-5 sm:px-6 lg:px-8 xl:max-w-285">
        <div className="text-center mb-10 sm:mb-12">
          <span className="inline-block font-worksans tracking-[.16em] uppercase text-[0.72rem] font-semibold text-maroon mb-3">
            बुकिंग कैसे करें?
          </span>
          <h2 className="font-yatra text-2xl sm:text-3xl md:text-section text-maroon-deep">
            पूजा बुकिंग की सरल प्रक्रिया
          </h2>
          <div className="marigold-divider">
            <span className="dot" />
            <span className="dot" />
            <span className="dot" />
          </div>
        </div>

        <div className="max-w-7xl grid grid-cols-1 md:grid-cols-2 mx-auto gap-6">
          {bookingSteps.map((step, i) => (
            <div
              key={i}
              className="grid grid-cols-[56px_1fr] gap-4 sm:gap-5 items-start bg-white rounded-2xl px-4 py-4 sm:px-5 sm:py-5 shadow-card border border-line"
            >
              <span className="w-11 h-11 sm:w-13 sm:h-13 rounded-full bg-maroon text-gold-soft font-yatra text-lg flex items-center justify-center shrink-0 shadow-cta">
                {i + 1}
              </span>
              <div>
                <h3 className="font-worksans font-semibold text-maroon-deep text-[0.97rem] mb-1">
                  {step.title}
                </h3>
                <p className="font-worksans text-[0.88rem] text-ink/70">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
