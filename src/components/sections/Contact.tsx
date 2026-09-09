"use client";

import { useState } from "react";
import { createWhatsAppUrl } from "@/lib/whatsapp";

type FormState = "idle" | "submitting" | "success" | "error";

export function Contact() {
  const [name, setName] = useState("");
  const [mobile, setMobile] = useState("");
  const [message, setMessage] = useState("");
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [status, setStatus] = useState<FormState>("idle");

  function validate() {
    const newErrors: Record<string, string> = {};
    if (!name.trim()) newErrors.name = "नाम आवश्यक है।";
    if (!/^[0-9]{10}$/.test(mobile))
      newErrors.mobile = "10 अंकों का मोबाइल नम्बर दर्ज करें।";
    return newErrors;
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const v = validate();
    setErrors(v);
    if (Object.keys(v).length > 0) return;

    setStatus("submitting");
    const waText = `नमस्ते पंडित जी,\nनाम: ${name}\nमोबाइल: ${mobile}${message ? `\nसंदेश: ${message}` : ""}\nDosh Nivaran Puja के बारे में जानकारी चाहिए।`;
    window.open(createWhatsAppUrl(waText), "_blank", "noopener");
    setStatus("success");
  }

  if (status === "success") {
    return (
      <section
        id="contact"
        className="py-14 sm:py-16 md:py-20 lg:py-22"
        style={{ background: "linear-gradient(135deg, #FBF3E4, #F3E6CB)" }}
      >
        <div className="mx-auto px-4 sm:px-6 xl:max-w-285 text-center">
          <div className="mx-auto max-w-120 bg-white rounded-3xl p-8 shadow-brand border border-line">
            <div className="text-5xl mb-4">🙏</div>
            <h3 className="font-yatra text-2xl text-maroon-deep mb-2">
              धन्यवाद!
            </h3>
            <p className="text-ink/75 font-worksans text-sm">
              आपकी जानकारी प्राप्त हो गई है। हम शीघ्र संपर्क करेंगे।
            </p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section
      id="contact"
      className="py-14 sm:py-16 md:py-20 lg:py-22"
      style={{ background: "linear-gradient(135deg, #FBF3E4, #F3E6CB)" }}
    >
      <div className="mx-auto w-full px-4 xs:px-5 sm:px-6 lg:px-8 xl:max-w-285">
        <div className="text-center mb-8">
          <span className="inline-block font-worksans tracking-[.16em] uppercase text-[0.72rem] font-semibold text-maroon mb-3">
            संपर्क करें
          </span>
          <h2 className="font-yatra text-2xl sm:text-3xl md:text-section text-maroon-deep">
            अपनी जानकारी भेजें, हम आपको Call करेंगे
          </h2>
          <div className="marigold-divider">
            <span className="dot" />
            <span className="dot" />
            <span className="dot" />
          </div>
        </div>

        <form
          onSubmit={handleSubmit}
          noValidate
          className="mx-auto max-w-full sm:max-w-160 bg-ivory-deep border border-line rounded-2xl p-6 sm:p-[38px_34px] shadow-brand"
        >
          {/* Name */}
          <div className="mb-5">
            <label
              htmlFor="contact-name"
              className="block font-worksans text-[0.88rem] font-semibold text-maroon-deep mb-1.5"
            >
              आपका नाम{" "}
              <span aria-hidden="true" className="text-vermillion">
                *
              </span>
            </label>
            <input
              id="contact-name"
              type="text"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="जैसे: राम शर्मा"
              className={`w-full px-4 py-3 rounded-xl bg-white border text-ink font-worksans text-sm focus:outline-none focus:ring-2 focus:ring-gold transition ${
                errors.name ? "border-vermillion" : "border-line"
              }`}
            />
            {errors.name && (
              <p role="alert" className="text-vermillion text-xs mt-1">
                {errors.name}
              </p>
            )}
          </div>

          {/* Mobile */}
          <div className="mb-5">
            <label
              htmlFor="contact-mobile"
              className="block font-worksans text-[0.88rem] font-semibold text-maroon-deep mb-1.5"
            >
              मोबाइल नम्बर{" "}
              <span aria-hidden="true" className="text-vermillion">
                *
              </span>
            </label>
            <input
              id="contact-mobile"
              type="tel"
              required
              inputMode="numeric"
              pattern="[0-9]{10}"
              value={mobile}
              onChange={(e) =>
                setMobile(e.target.value.replace(/\D/g, "").slice(0, 10))
              }
              placeholder="10 अंकों का मोबाइल नम्बर"
              className={`w-full px-4 py-3 rounded-xl bg-white border text-ink font-worksans text-sm focus:outline-none focus:ring-2 focus:ring-gold transition ${
                errors.mobile ? "border-vermillion" : "border-line"
              }`}
            />
            {errors.mobile && (
              <p role="alert" className="text-vermillion text-xs mt-1">
                {errors.mobile}
              </p>
            )}
          </div>

          {/* Message */}
          <div className="mb-6">
            <label
              htmlFor="contact-message"
              className="block font-worksans text-[0.88rem] font-semibold text-maroon-deep mb-1.5"
            >
              संदेश (वैकल्पिक)
            </label>
            <textarea
              id="contact-message"
              rows={3}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="जैसे: मुझे Kaal Sarp Dosh Puja के बारे में जानना है।"
              className="w-full px-4 py-3 rounded-xl bg-white border border-line text-ink font-worksans text-sm resize-none focus:outline-none focus:ring-2 focus:ring-gold transition"
            />
          </div>

          <button
            type="submit"
            disabled={status === "submitting"}
            className="w-full flex items-center justify-center gap-2 py-3.5 rounded-full bg-[#25D366] text-white font-bold text-base shadow-cta hover:brightness-105 hover:-translate-y-0.5 transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold disabled:opacity-60 disabled:cursor-not-allowed"
          >
            {status === "submitting" ? (
              "भेज रहे हैं..."
            ) : (
              <>
                <svg
                  viewBox="0 0 24 24"
                  className="w-5 h-5 text-white"
                  fill="currentColor"
                >
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z" />
                </svg>
                WhatsApp पर भेजें
              </>
            )}
          </button>

          <p className="text-center text-[0.78rem] text-ink/50 mt-3 font-worksans">
            आपकी जानकारी पूर्णतः सुरक्षित है।
          </p>
        </form>
      </div>
    </section>
  );
}
