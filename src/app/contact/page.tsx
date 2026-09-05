import Link from "next/link";

import { Navbar } from "@/components/navigation/Navbar";

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-[#f4f0eb] text-[#0d1c17]">
      <Navbar />

      {/* Hero */}
      <section className="border-b border-[#0d1c17]/10 px-6 pb-20 pt-32 lg:px-10 lg:pb-28 lg:pt-40">
        <div className="mx-auto max-w-7xl">
          <p className="text-[10px] uppercase tracking-[0.3em] text-[#9e6d48]">
            Contact MSYNTRA
          </p>

          <h1 className="mt-6 max-w-5xl text-5xl font-light leading-[0.95] tracking-[-0.04em] sm:text-6xl md:text-8xl lg:text-[9rem]">
            LET&apos;S START
            <br />
            A CONVERSATION.
          </h1>

          <div className="mt-12 flex max-w-2xl flex-col gap-6 border-l border-[#9e6d48] pl-5 sm:pl-6">
            <p className="text-sm leading-7 text-[#0d1c17]/60 sm:text-base">
              Whether you have found the vehicle you have
              been looking for or simply want to explore
              what is available, our team is here to help.
            </p>

            <p className="text-sm leading-7 text-[#0d1c17]/60 sm:text-base">
              Tell us what you are looking for and we will
              take it from there.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Information + Form */}
      <section className="px-6 py-20 lg:px-10 lg:py-28">
        <div className="mx-auto grid max-w-7xl gap-20 lg:grid-cols-[0.8fr_1.2fr] lg:gap-28">
          {/* Contact Details */}
          <div>
            <p className="text-[10px] uppercase tracking-[0.25em] text-[#9e6d48]">
              Get in touch
            </p>

            <h2 className="mt-5 text-4xl font-light tracking-tight sm:text-5xl">
              Speak with
              <br />
              our team.
            </h2>

            <div className="mt-12 space-y-10">
              <div>
                <p className="text-[9px] uppercase tracking-[0.2em] text-[#0d1c17]/35">
                  General enquiries
                </p>

                <a
                  href="mailto:hello@msyntraautos.com"
                  className="mt-3 block text-sm transition-colors hover:text-[#9e6d48]"
                >
                  hello@msyntraautos.com
                </a>
              </div>

              <div>
                <p className="text-[9px] uppercase tracking-[0.2em] text-[#0d1c17]/35">
                  Phone
                </p>

                <a
                  href="tel:+923000000000"
                  className="mt-3 block text-sm transition-colors hover:text-[#9e6d48]"
                >
                  +92 300 000 0000
                </a>
              </div>

              <div>
                <p className="text-[9px] uppercase tracking-[0.2em] text-[#0d1c17]/35">
                  Location
                </p>

                <p className="mt-3 text-sm leading-6 text-[#0d1c17]/70">
                  Karachi
                  <br />
                  Pakistan
                </p>
              </div>

              <div>
                <p className="text-[9px] uppercase tracking-[0.2em] text-[#0d1c17]/35">
                  Opening hours
                </p>

                <p className="mt-3 text-sm leading-6 text-[#0d1c17]/70">
                  Monday – Saturday
                  <br />
                  10:00 – 20:00
                </p>
              </div>
            </div>
          </div>

          {/* Form */}
          <div>
            <div className="mb-10 border-b border-[#0d1c17]/10 pb-5">
              <p className="text-[10px] uppercase tracking-[0.25em] text-[#0d1c17]/40">
                Send an enquiry
              </p>

              <p className="mt-3 max-w-lg text-sm leading-6 text-[#0d1c17]/50">
                Complete the form and a member of the
                MSYNTRA team will get back to you.
              </p>
            </div>

            <form className="space-y-8">
              <div className="grid gap-8 sm:grid-cols-2">
                <div>
                  <label
                    htmlFor="name"
                    className="mb-3 block text-[9px] uppercase tracking-[0.2em] text-[#0d1c17]/40"
                  >
                    Name *
                  </label>

                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    className="w-full border-b border-[#0d1c17]/20 bg-transparent py-3 text-sm outline-none transition-colors placeholder:text-[#0d1c17]/20 focus:border-[#0d1c17]"
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="mb-3 block text-[9px] uppercase tracking-[0.2em] text-[#0d1c17]/40"
                  >
                    Email *
                  </label>

                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    className="w-full border-b border-[#0d1c17]/20 bg-transparent py-3 text-sm outline-none transition-colors placeholder:text-[#0d1c17]/20 focus:border-[#0d1c17]"
                    placeholder="you@example.com"
                  />
                </div>
              </div>

              <div className="grid gap-8 sm:grid-cols-2">
                <div>
                  <label
                    htmlFor="phone"
                    className="mb-3 block text-[9px] uppercase tracking-[0.2em] text-[#0d1c17]/40"
                  >
                    Phone
                  </label>

                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    className="w-full border-b border-[#0d1c17]/20 bg-transparent py-3 text-sm outline-none transition-colors placeholder:text-[#0d1c17]/20 focus:border-[#0d1c17]"
                    placeholder="+92"
                  />
                </div>

                <div>
                  <label
                    htmlFor="interest"
                    className="mb-3 block text-[9px] uppercase tracking-[0.2em] text-[#0d1c17]/40"
                  >
                    I&apos;m interested in
                  </label>

                  <select
                    id="interest"
                    name="interest"
                    defaultValue=""
                    className="w-full border-b border-[#0d1c17]/20 bg-[#f4f0eb] py-3 text-sm outline-none transition-colors focus:border-[#0d1c17]"
                  >
                    <option value="" disabled>
                      Select an option
                    </option>
                    <option value="vehicle">
                      A vehicle
                    </option>
                    <option value="viewing">
                      Book a viewing
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
                  htmlFor="message"
                  className="mb-3 block text-[9px] uppercase tracking-[0.2em] text-[#0d1c17]/40"
                >
                  Message *
                </label>

                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  className="w-full resize-none border-b border-[#0d1c17]/20 bg-transparent py-3 text-sm leading-6 outline-none transition-colors placeholder:text-[#0d1c17]/20 focus:border-[#0d1c17]"
                  placeholder="Tell us how we can help..."
                />
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="group inline-flex items-center gap-6 bg-[#0d1c17] px-7 py-5 text-[10px] uppercase tracking-[0.2em] text-[#f4f0eb] transition-opacity hover:opacity-90"
                >
                  Send enquiry

                  <span className="transition-transform duration-300 group-hover:translate-x-1">
                    →
                  </span>
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* Quick Actions */}
      <section className="border-y border-[#0d1c17]/10">
        <div className="mx-auto grid max-w-7xl md:grid-cols-3">
          <Link
            href="/inventory"
            className="group border-b border-[#0d1c17]/10 px-6 py-10 transition-colors hover:bg-[#0d1c17] hover:text-[#f4f0eb] md:border-b-0 md:border-r md:px-10"
          >
            <p className="text-[9px] uppercase tracking-[0.2em] text-[#9e6d48]">
              01
            </p>

            <h3 className="mt-5 text-2xl font-light">
              Explore inventory
            </h3>

            <p className="mt-3 text-xs leading-6 text-[#0d1c17]/45 transition-colors group-hover:text-[#f4f0eb]/50">
              Browse the current MSYNTRA collection.
            </p>

            <span className="mt-8 block text-[9px] uppercase tracking-[0.2em]">
              View vehicles →
            </span>
          </Link>

          <Link
            href="/experience"
            className="group border-b border-[#0d1c17]/10 px-6 py-10 transition-colors hover:bg-[#0d1c17] hover:text-[#f4f0eb] md:border-b-0 md:border-r md:px-10"
          >
            <p className="text-[9px] uppercase tracking-[0.2em] text-[#9e6d48]">
              02
            </p>

            <h3 className="mt-5 text-2xl font-light">
              Book an experience
            </h3>

            <p className="mt-3 text-xs leading-6 text-[#0d1c17]/45 transition-colors group-hover:text-[#f4f0eb]/50">
              Arrange a private viewing or test drive.
            </p>

            <span className="mt-8 block text-[9px] uppercase tracking-[0.2em]">
              Begin →
            </span>
          </Link>

          <Link
            href="/trade-in"
            className="group px-6 py-10 transition-colors hover:bg-[#0d1c17] hover:text-[#f4f0eb] md:px-10"
          >
            <p className="text-[9px] uppercase tracking-[0.2em] text-[#9e6d48]">
              03
            </p>

            <h3 className="mt-5 text-2xl font-light">
              Trade your vehicle
            </h3>

            <p className="mt-3 text-xs leading-6 text-[#0d1c17]/45 transition-colors group-hover:text-[#f4f0eb]/50">
              Start the process of trading your current
              vehicle.
            </p>

            <span className="mt-8 block text-[9px] uppercase tracking-[0.2em]">
              Trade in →
            </span>
          </Link>
        </div>
      </section>
    </main>
  );
}