import Link from "next/link";

import { Navbar } from "@/components/navigation/Navbar";

const contactChannels = [
  {
    number: "01",
    label: "GENERAL ENQUIRIES",
    value: "contact@msyntra.com",
    href: "mailto:contact@msyntra.com",
    description:
      "Questions about MSYNTRA, our collection, or the ownership experience.",
  },
  {
    number: "02",
    label: "VEHICLE ENQUIRIES",
    value: "Speak with an advisor",
    href: "#enquiry",
    description:
      "Tell us which vehicle has caught your attention and we'll take it from there.",
  },
  {
    number: "03",
    label: "PRIVATE VIEWING",
    value: "Book an appointment",
    href: "/experience",
    description:
      "Arrange a private viewing or test drive at a time that suits you.",
  },
];

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-[#f4f0eb] text-[#0d1c17]">
      <Navbar />

      {/* ========================================================= */}
      {/* HERO */}
      {/* ========================================================= */}

      <section className="relative overflow-hidden border-b border-[#0d1c17]/10">
        <div className="mx-auto max-w-[1600px] px-6 pb-20 pt-32 sm:pb-28 sm:pt-36 lg:px-10 lg:pb-36 lg:pt-44">
          <div className="grid gap-12 lg:grid-cols-[1fr_0.35fr] lg:items-end">
            <div>
              <div className="flex items-center gap-4">
                <span className="h-px w-10 bg-[#9e6d48]" />

                <p className="text-[9px] uppercase tracking-[0.35em] text-[#9e6d48]">
                  Contact MSYNTRA
                </p>
              </div>

              <h1 className="mt-8 max-w-6xl text-[16vw] font-light leading-[0.78] tracking-[-0.065em] sm:text-8xl md:text-9xl lg:text-[10rem]">
                LET&apos;S
                <br />
                <span className="ml-[8vw]">TALK.</span>
              </h1>
            </div>

            <div className="max-w-sm lg:pb-2">
              <p className="text-[10px] uppercase tracking-[0.25em] text-[#0d1c17]/35">
                Private automotive concierge
              </p>

              <p className="mt-5 text-sm leading-7 text-[#0d1c17]/60">
                The right vehicle deserves the right
                conversation. Whether you are searching
                for something specific or simply exploring
                the collection, our team is ready.
              </p>

              <div className="mt-8 flex items-center gap-4">
                <span className="h-8 w-px bg-[#9e6d48]" />

                <span className="text-[9px] uppercase tracking-[0.2em] text-[#0d1c17]/45">
                  Karachi · Pakistan
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Decorative index */}
        <div className="absolute bottom-6 right-6 hidden text-[9px] uppercase tracking-[0.3em] text-[#0d1c17]/20 lg:block">
          MS / 06
        </div>
      </section>

      {/* ========================================================= */}
      {/* CONTACT CHANNELS */}
      {/* ========================================================= */}

      <section className="border-b border-[#0d1c17]/10">
        <div className="mx-auto max-w-[1600px]">
          <div className="grid lg:grid-cols-3">
            {contactChannels.map((channel, index) => (
              <Link
                key={channel.number}
                href={channel.href}
                className={`group relative px-6 py-10 transition-colors duration-500 hover:bg-[#0d1c17] hover:text-[#f4f0eb] sm:px-10 sm:py-14 lg:px-12 lg:py-16 ${
                  index !== contactChannels.length - 1
                    ? "border-b border-[#0d1c17]/10 lg:border-b-0 lg:border-r"
                    : ""
                }`}
              >
                <div className="flex items-start justify-between">
                  <span className="text-[9px] tracking-[0.25em] text-[#9e6d48]">
                    {channel.number}
                  </span>

                  <span className="text-xl font-light text-[#0d1c17]/20 transition-transform duration-500 group-hover:translate-x-1 group-hover:text-[#9e6d48]">
                    ↗
                  </span>
                </div>

                <p className="mt-16 text-[9px] uppercase tracking-[0.25em] text-[#0d1c17]/40 transition-colors group-hover:text-[#f4f0eb]/40">
                  {channel.label}
                </p>

                <h2 className="mt-3 text-2xl font-light tracking-tight sm:text-3xl">
                  {channel.value}
                </h2>

                <p className="mt-5 max-w-sm text-xs leading-6 text-[#0d1c17]/45 transition-colors group-hover:text-[#f4f0eb]/50">
                  {channel.description}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* FORM + INFO */}
      {/* ========================================================= */}

      <section
        id="enquiry"
        className="bg-[#0d1c17] text-[#f4f0eb]"
      >
        <div className="mx-auto max-w-[1600px] px-6 py-20 sm:py-28 lg:px-10 lg:py-36">
          <div className="grid gap-20 lg:grid-cols-[0.7fr_1.3fr] lg:gap-32">
            {/* Left */}
            <div>
              <div className="flex items-center gap-4">
                <span className="h-px w-8 bg-[#9e6d48]" />

                <p className="text-[9px] uppercase tracking-[0.3em] text-[#9e6d48]">
                  Make an enquiry
                </p>
              </div>

              <h2 className="mt-8 text-5xl font-light leading-[0.95] tracking-[-0.04em] sm:text-6xl lg:text-7xl">
                FIND
                <br />
                YOUR
                <br />
                NEXT.
              </h2>

              <p className="mt-10 max-w-sm text-sm leading-7 text-white/45">
                Give us a little context and our team
                will personally follow up with you.
              </p>

              <div className="mt-16 border-t border-white/10 pt-6">
                <p className="text-[9px] uppercase tracking-[0.2em] text-white/30">
                  Response time
                </p>

                <p className="mt-3 text-sm text-white/70">
                  Usually within one business day.
                </p>
              </div>
            </div>

            {/* Right */}
            <div>
              <form className="space-y-10">
                <div className="grid gap-10 sm:grid-cols-2">
                  <div>
                    <label
                      htmlFor="contact-name"
                      className="mb-4 block text-[9px] uppercase tracking-[0.2em] text-white/35"
                    >
                      Your name *
                    </label>

                    <input
                      id="contact-name"
                      name="name"
                      type="text"
                      required
                      placeholder="Full name"
                      className="w-full border-b border-white/20 bg-transparent px-0 py-4 text-sm text-white outline-none transition-colors placeholder:text-white/20 focus:border-[#9e6d48]"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="contact-email"
                      className="mb-4 block text-[9px] uppercase tracking-[0.2em] text-white/35"
                    >
                      Email *
                    </label>

                    <input
                      id="contact-email"
                      name="email"
                      type="email"
                      required
                      placeholder="you@example.com"
                      className="w-full border-b border-white/20 bg-transparent px-0 py-4 text-sm text-white outline-none transition-colors placeholder:text-white/20 focus:border-[#9e6d48]"
                    />
                  </div>
                </div>

                <div className="grid gap-10 sm:grid-cols-2">
                  <div>
                    <label
                      htmlFor="contact-phone"
                      className="mb-4 block text-[9px] uppercase tracking-[0.2em] text-white/35"
                    >
                      Phone
                    </label>

                    <input
                      id="contact-phone"
                      name="phone"
                      type="tel"
                      placeholder="+92"
                      className="w-full border-b border-white/20 bg-transparent px-0 py-4 text-sm text-white outline-none transition-colors placeholder:text-white/20 focus:border-[#9e6d48]"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="contact-interest"
                      className="mb-4 block text-[9px] uppercase tracking-[0.2em] text-white/35"
                    >
                      Enquiry type
                    </label>

                    <select
                      id="contact-interest"
                      name="interest"
                      defaultValue=""
                      className="w-full border-b border-white/20 bg-[#0d1c17] px-0 py-4 text-sm text-white outline-none transition-colors focus:border-[#9e6d48]"
                    >
                      <option value="" disabled>
                        Select an option
                      </option>

                      <option value="vehicle">
                        Vehicle enquiry
                      </option>

                      <option value="viewing">
                        Private viewing
                      </option>

                      <option value="test-drive">
                        Test drive
                      </option>

                      <option value="trade-in">
                        Trade-in
                      </option>

                      <option value="financing">
                        Financing
                      </option>

                      <option value="general">
                        General enquiry
                      </option>
                    </select>
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="contact-message"
                    className="mb-4 block text-[9px] uppercase tracking-[0.2em] text-white/35"
                  >
                    Tell us more *
                  </label>

                  <textarea
                    id="contact-message"
                    name="message"
                    required
                    rows={6}
                    placeholder="What are you looking for?"
                    className="w-full resize-none border-b border-white/20 bg-transparent px-0 py-4 text-sm leading-7 text-white outline-none transition-colors placeholder:text-white/20 focus:border-[#9e6d48]"
                  />
                </div>

                <div className="flex flex-col gap-6 border-t border-white/10 pt-8 sm:flex-row sm:items-center sm:justify-between">
                  <p className="max-w-sm text-[10px] leading-5 text-white/25">
                    By submitting this enquiry, you agree
                    to be contacted by the MSYNTRA team.
                  </p>

                  <button
                    type="submit"
                    className="group inline-flex items-center justify-between gap-12 bg-[#f4f0eb] px-7 py-5 text-[9px] uppercase tracking-[0.22em] text-[#0d1c17] transition-transform duration-300 hover:translate-x-1"
                  >
                    Send enquiry

                    <span className="text-base transition-transform duration-300 group-hover:translate-x-1">
                      →
                    </span>
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* LOCATION */}
      {/* ========================================================= */}

      <section className="border-b border-[#0d1c17]/10">
        <div className="mx-auto grid max-w-[1600px] lg:grid-cols-[1.2fr_0.8fr]">
          <div className="min-h-[420px] bg-[#ded9d2] px-6 py-12 sm:px-10 lg:min-h-[520px] lg:px-16 lg:py-16">
            <div className="flex h-full flex-col justify-between">
              <div>
                <p className="text-[9px] uppercase tracking-[0.3em] text-[#0d1c17]/35">
                  Visit MSYNTRA
                </p>

                <p className="mt-6 max-w-xs text-3xl font-light leading-tight tracking-tight sm:text-4xl">
                  Your next vehicle
                  deserves a proper
                  introduction.
                </p>
              </div>

              <div className="flex items-end justify-between">
                <div>
                  <p className="text-[9px] uppercase tracking-[0.2em] text-[#0d1c17]/35">
                    Karachi
                  </p>

                  <p className="mt-2 text-sm">
                    Pakistan
                  </p>
                </div>

                <span className="text-5xl font-light text-[#0d1c17]/10 sm:text-7xl">
                  M
                </span>
              </div>
            </div>
          </div>

          <div className="flex flex-col justify-between bg-[#f4f0eb] px-6 py-12 sm:px-10 lg:px-16 lg:py-16">
            <div>
              <p className="text-[9px] uppercase tracking-[0.3em] text-[#9e6d48]">
                Opening hours
              </p>

              <div className="mt-8 space-y-5">
                <div className="flex items-center justify-between border-b border-[#0d1c17]/10 pb-4">
                  <span className="text-xs text-[#0d1c17]/45">
                    Monday – Friday
                  </span>

                  <span className="text-xs">
                    10:00 – 20:00
                  </span>
                </div>

                <div className="flex items-center justify-between border-b border-[#0d1c17]/10 pb-4">
                  <span className="text-xs text-[#0d1c17]/45">
                    Saturday
                  </span>

                  <span className="text-xs">
                    10:00 – 20:00
                  </span>
                </div>

                <div className="flex items-center justify-between border-b border-[#0d1c17]/10 pb-4">
                  <span className="text-xs text-[#0d1c17]/45">
                    Sunday
                  </span>

                  <span className="text-xs">
                    By appointment
                  </span>
                </div>
              </div>
            </div>

            <div className="mt-16">
              <Link
                href="/experience"
                className="group flex items-center justify-between border-t border-[#0d1c17]/15 pt-5"
              >
                <span className="text-[9px] uppercase tracking-[0.2em]">
                  Book a private experience
                </span>

                <span className="text-lg transition-transform duration-300 group-hover:translate-x-1">
                  →
                </span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* CLOSING STATEMENT */}
      {/* ========================================================= */}

      <section className="px-6 py-24 sm:py-32 lg:px-10 lg:py-44">
        <div className="mx-auto max-w-[1600px]">
          <p className="text-[9px] uppercase tracking-[0.3em] text-[#9e6d48]">
            The MSYNTRA standard
          </p>

          <h2 className="mt-8 max-w-6xl text-4xl font-light leading-[1] tracking-[-0.04em] sm:text-6xl lg:text-8xl">
            NOT JUST A
            <br />
            <span className="ml-[10vw]">
              CAR.
            </span>
            <br />
            <span className="text-[#0d1c17]/30">
              THE RIGHT ONE.
            </span>
          </h2>

          <div className="mt-12 flex justify-end">
            <Link
              href="/inventory"
              className="group inline-flex items-center gap-6 border-b border-[#0d1c17]/20 pb-3 text-[9px] uppercase tracking-[0.22em]"
            >
              Explore the collection

              <span className="transition-transform duration-300 group-hover:translate-x-1">
                →
              </span>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}