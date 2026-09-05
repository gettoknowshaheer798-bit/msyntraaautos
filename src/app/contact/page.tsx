import Image from "next/image";
import Link from "next/link";

import { Navbar } from "@/components/navigation/Navbar";
import { getFeaturedVehicles } from "@/utils/supabase/vehicles";

const contactChannels = [
  {
    number: "01",
    title: "BUY A VEHICLE",
    description:
      "Tell us what you're looking for and our advisors will help you find the right car.",
    href: "/inventory",
    image:
      "/images/vehicles/Ferrari-LaFerrari-MainImage.png",
    accent: "bg-[#9e6d48]",
  },
  {
    number: "02",
    title: "PRIVATE VIEWING",
    description:
      "Experience the collection privately, at your own pace and on your own terms.",
    href: "/experience",
    image:
      "/images/vehicles/Rolls-Royce-Ghost-MainImage.png",
    accent: "bg-[#283d35]",
  },
  {
    number: "03",
    title: "TRADE-IN",
    description:
      "Thinking about changing your car? Start a conversation about your current vehicle.",
    href: "/trade-in",
    image:
      "/images/vehicles/BMW-M8-GranCoupe-MainImage.png",
    accent: "bg-[#536b80]",
  },
  {
    number: "04",
    title: "SERVICE",
    description:
      "Keep your vehicle performing and looking exceptional with our specialist services.",
    href: "/service",
    image:
      "/images/vehicles/Mercedes-S-Class-MainImage.png",
    accent: "bg-[#69423c]",
  },
];

export default async function ContactPage() {
  const featuredVehicles = await getFeaturedVehicles();

  const heroVehicle =
    featuredVehicles[0]?.heroImage ||
    "/images/vehicles/Ferrari-LaFerrari-MainImage.png";

  const showroomVehicle =
    featuredVehicles[1]?.heroImage ||
    "/images/vehicles/Rimac-Nevera-MainImage.png";

  return (
    <main className="min-h-screen bg-[#f4f0eb] text-[#0d1c17]">
      <Navbar />

      {/* =========================================================
          HERO
      ========================================================= */}
      <section className="relative px-4 pb-6 pt-24 sm:px-6 sm:pt-28 lg:px-8 lg:pt-32">
        <div className="relative min-h-[78vh] overflow-hidden bg-[#0d1c17]">
          <Image
            src={heroVehicle}
            alt="MSYNTRA vehicle"
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />

          {/* Image treatment */}
          <div className="absolute inset-0 bg-black/25" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0d1c17]/90 via-transparent to-black/10" />

          {/* Top label */}
          <div className="absolute left-6 top-6 flex items-center gap-3 text-[9px] uppercase tracking-[0.25em] text-white/70 sm:left-10 sm:top-10">
            <span className="h-px w-8 bg-white/40" />
            Private Automotive Concierge
          </div>

          {/* Hero copy */}
          <div className="absolute bottom-8 left-6 right-6 sm:bottom-12 sm:left-10 sm:right-10 lg:bottom-16 lg:left-16 lg:right-16">
            <div className="max-w-5xl">
              <p className="mb-5 text-[10px] uppercase tracking-[0.3em] text-white/55">
                01 / Contact MSYNTRA
              </p>

              <h1 className="text-[clamp(4rem,11vw,10rem)] font-light leading-[0.78] tracking-[-0.055em] text-white">
                LET&apos;S
                <br />
                TALK.
              </h1>

              <div className="mt-8 flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
                <p className="max-w-md text-sm leading-7 text-white/65">
                  Whether you already know the car you want or you&apos;re
                  simply beginning the search, our team is here to make the
                  next step effortless.
                </p>

                <a
                  href="#enquiry"
                  className="group inline-flex w-fit items-center gap-5 border-b border-white/30 pb-3 text-[10px] uppercase tracking-[0.22em] text-white transition-colors hover:border-white"
                >
                  Start an enquiry
                  <span className="transition-transform duration-300 group-hover:translate-x-2">
                    →
                  </span>
                </a>
              </div>
            </div>
          </div>

          {/* Accent number */}
          <div className="absolute right-6 top-6 hidden h-20 w-20 items-center justify-center bg-[#9e6d48] text-white sm:flex">
            <span className="text-[10px] uppercase tracking-[0.2em]">
              MS
            </span>
          </div>
        </div>
      </section>

      {/* =========================================================
          CONTACT CHANNELS
      ========================================================= */}
      <section className="px-6 py-24 lg:px-12 lg:py-32">
        <div className="mx-auto max-w-[1500px]">
          <div className="mb-14 flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
            <div>
              <p className="text-[10px] uppercase tracking-[0.28em] text-[#9e6d48]">
                How can we help?
              </p>

              <h2 className="mt-5 max-w-3xl text-4xl font-light leading-[0.95] tracking-[-0.035em] sm:text-6xl lg:text-7xl">
                Start with
                <br />
                what matters.
              </h2>
            </div>

            <p className="max-w-sm text-xs leading-6 text-[#0d1c17]/50">
              Choose a direction and we&apos;ll take care of the rest.
              Every MSYNTRA conversation begins with understanding what
              you actually need.
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            {contactChannels.map((channel) => (
              <Link
                key={channel.number}
                href={channel.href}
                className="group relative min-h-[360px] overflow-hidden bg-[#0d1c17]"
              >
                <Image
                  src={channel.image}
                  alt={channel.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover opacity-65 transition-transform duration-1000 ease-out group-hover:scale-105"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent" />

                <div
                  className={`absolute left-5 top-5 flex h-10 w-10 items-center justify-center ${channel.accent} text-white`}
                >
                  <span className="text-[9px] tracking-[0.15em]">
                    {channel.number}
                  </span>
                </div>

                <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8">
                  <div className="flex items-end justify-between gap-6">
                    <div>
                      <h3 className="text-2xl font-light tracking-[-0.02em] text-white sm:text-3xl">
                        {channel.title}
                      </h3>

                      <p className="mt-3 max-w-md text-xs leading-6 text-white/55">
                        {channel.description}
                      </p>
                    </div>

                    <span className="flex h-11 w-11 shrink-0 items-center justify-center border border-white/25 text-white transition-all duration-300 group-hover:border-white group-hover:bg-white group-hover:text-[#0d1c17]">
                      →
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================
          ENQUIRY
      ========================================================= */}
      <section
        id="enquiry"
        className="bg-[#0d1c17] px-6 py-24 text-white lg:px-12 lg:py-32"
      >
        <div className="mx-auto grid max-w-[1500px] gap-16 lg:grid-cols-[0.8fr_1.2fr] lg:gap-24">
          {/* Left */}
          <div className="lg:sticky lg:top-24 lg:self-start">
            <p className="text-[10px] uppercase tracking-[0.28em] text-[#c49a78]">
              02 / Enquiry
            </p>

            <h2 className="mt-6 text-5xl font-light leading-[0.9] tracking-[-0.04em] sm:text-7xl">
              Start a
              <br />
              conversation.
            </h2>

            <p className="mt-8 max-w-sm text-sm leading-7 text-white/45">
              Leave us a few details and one of our advisors will get
              back to you. No pressure. No unnecessary sales pitch.
              Just a proper conversation.
            </p>

            <div className="mt-14 border-t border-white/10 pt-6">
              <p className="text-[9px] uppercase tracking-[0.2em] text-white/30">
                Direct contact
              </p>

              <a
                href="mailto:contact@msyntra.com"
                className="mt-3 inline-block text-sm text-white/70 transition-colors hover:text-white"
              >
                contact@msyntra.com
              </a>
            </div>
          </div>

          {/* Form */}
          <form className="space-y-12">
            <div>
              <label
                htmlFor="name"
                className="mb-4 block text-[9px] uppercase tracking-[0.22em] text-white/35"
              >
                01 / Your name
              </label>

              <input
                id="name"
                name="name"
                type="text"
                placeholder="Your full name"
                className="w-full border-b border-white/15 bg-transparent py-4 text-lg font-light text-white outline-none placeholder:text-white/20 focus:border-white/60"
              />
            </div>

            <div>
              <label
                htmlFor="email"
                className="mb-4 block text-[9px] uppercase tracking-[0.22em] text-white/35"
              >
                02 / Email address
              </label>

              <input
                id="email"
                name="email"
                type="email"
                placeholder="you@example.com"
                className="w-full border-b border-white/15 bg-transparent py-4 text-lg font-light text-white outline-none placeholder:text-white/20 focus:border-white/60"
              />
            </div>

            <div>
              <p className="mb-5 text-[9px] uppercase tracking-[0.22em] text-white/35">
                03 / I&apos;m interested in
              </p>

              <div className="grid gap-3 sm:grid-cols-2">
                {[
                  "A vehicle",
                  "Private viewing",
                  "Trade-in",
                  "Service",
                ].map((option) => (
                  <label
                    key={option}
                    className="group cursor-pointer border border-white/10 px-5 py-5 transition-colors hover:border-[#9e6d48]"
                  >
                    <input
                      type="radio"
                      name="interest"
                      value={option}
                      className="sr-only"
                    />

                    <span className="flex items-center justify-between text-[10px] uppercase tracking-[0.16em] text-white/55 group-hover:text-white">
                      {option}

                      <span className="h-3 w-3 border border-white/25 transition-colors group-hover:border-[#9e6d48]" />
                    </span>
                  </label>
                ))}
              </div>
            </div>

            <div>
              <label
                htmlFor="message"
                className="mb-4 block text-[9px] uppercase tracking-[0.22em] text-white/35"
              >
                04 / Tell us more
              </label>

              <textarea
                id="message"
                name="message"
                rows={5}
                placeholder="Tell us what you're looking for..."
                className="w-full resize-none border-b border-white/15 bg-transparent py-4 text-lg font-light text-white outline-none placeholder:text-white/20 focus:border-white/60"
              />
            </div>

            <div className="flex flex-col gap-5 border-t border-white/10 pt-8 sm:flex-row sm:items-center sm:justify-between">
              <p className="max-w-xs text-[10px] leading-5 text-white/30">
                By submitting this form, you&apos;re simply starting a
                conversation with MSYNTRA.
              </p>

              <button
                type="submit"
                className="group flex w-fit items-center gap-8 bg-[#9e6d48] px-7 py-5 text-[10px] uppercase tracking-[0.2em] text-white transition-colors hover:bg-[#b48662]"
              >
                Send enquiry

                <span className="transition-transform duration-300 group-hover:translate-x-2">
                  →
                </span>
              </button>
            </div>
          </form>
        </div>
      </section>

      {/* =========================================================
          VISIT / SHOWROOM
      ========================================================= */}
      <section className="px-6 py-24 lg:px-12 lg:py-32">
        <div className="mx-auto max-w-[1500px]">
          <div className="relative min-h-[650px] overflow-hidden bg-[#263b34]">
            <Image
              src={showroomVehicle}
              alt="MSYNTRA collection"
              fill
              sizes="100vw"
              className="object-cover"
            />

            <div className="absolute inset-0 bg-gradient-to-r from-[#0d1c17]/90 via-[#0d1c17]/35 to-transparent" />

            <div className="absolute inset-y-0 left-0 flex max-w-xl flex-col justify-between p-7 sm:p-10 lg:p-16">
              <div>
                <p className="text-[10px] uppercase tracking-[0.28em] text-[#c49a78]">
                  03 / Visit MSYNTRA
                </p>

                <h2 className="mt-6 text-5xl font-light leading-[0.9] tracking-[-0.04em] text-white sm:text-7xl">
                  See the
                  <br />
                  collection.
                </h2>

                <p className="mt-8 max-w-sm text-sm leading-7 text-white/50">
                  Some cars deserve more than a photograph. Arrange a
                  private viewing and experience the collection in
                  person.
                </p>
              </div>

              <div>
                <div className="grid grid-cols-2 gap-x-10 gap-y-8 border-t border-white/15 pt-7">
                  <div>
                    <p className="text-[9px] uppercase tracking-[0.18em] text-white/30">
                      Location
                    </p>

                    <p className="mt-2 text-sm text-white/70">
                      Karachi, Pakistan
                    </p>
                  </div>

                  <div>
                    <p className="text-[9px] uppercase tracking-[0.18em] text-white/30">
                      Viewing
                    </p>

                    <p className="mt-2 text-sm text-white/70">
                      By appointment
                    </p>
                  </div>
                </div>

                <Link
                  href="/experience"
                  className="group mt-8 inline-flex items-center gap-6 border-b border-white/30 pb-3 text-[10px] uppercase tracking-[0.2em] text-white"
                >
                  Book a private viewing

                  <span className="transition-transform duration-300 group-hover:translate-x-2">
                    →
                  </span>
                </Link>
              </div>
            </div>

            <div className="absolute right-6 top-6 hidden border border-white/20 px-4 py-3 sm:block">
              <span className="text-[9px] uppercase tracking-[0.2em] text-white/60">
                MSYNTRA / KARACHI
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          CONTACT DETAILS
      ========================================================= */}
      <section className="border-t border-[#0d1c17]/10 px-6 py-20 lg:px-12">
        <div className="mx-auto grid max-w-[1500px] gap-12 md:grid-cols-3">
          <div>
            <p className="text-[9px] uppercase tracking-[0.22em] text-[#0d1c17]/35">
              Email
            </p>

            <a
              href="mailto:contact@msyntra.com"
              className="mt-4 inline-block text-lg font-light transition-colors hover:text-[#9e6d48]"
            >
              contact@msyntra.com
            </a>
          </div>

          <div>
            <p className="text-[9px] uppercase tracking-[0.22em] text-[#0d1c17]/35">
              Location
            </p>

            <p className="mt-4 text-lg font-light">
              Karachi, Pakistan
            </p>
          </div>

          <div>
            <p className="text-[9px] uppercase tracking-[0.22em] text-[#0d1c17]/35">
              Availability
            </p>

            <p className="mt-4 text-lg font-light">
              Private appointments
            </p>
          </div>
        </div>
      </section>

      {/* =========================================================
          CLOSING
      ========================================================= */}
      <section className="relative overflow-hidden bg-[#9e6d48] px-6 py-28 text-white lg:px-12 lg:py-36">
        <div className="absolute -right-20 -top-20 h-72 w-72 rounded-full border border-white/10" />
        <div className="absolute -bottom-32 -left-20 h-96 w-96 rounded-full border border-white/10" />

        <div className="relative mx-auto max-w-[1500px]">
          <p className="text-[10px] uppercase tracking-[0.28em] text-white/60">
            The next move is yours.
          </p>

          <div className="mt-8 flex flex-col justify-between gap-12 lg:flex-row lg:items-end">
            <h2 className="max-w-4xl text-5xl font-light leading-[0.9] tracking-[-0.045em] sm:text-7xl lg:text-8xl">
              READY WHEN
              <br />
              YOU ARE.
            </h2>

            <Link
              href="/inventory"
              className="group flex w-fit shrink-0 items-center gap-8 border-b border-white/40 pb-4 text-[10px] uppercase tracking-[0.22em] transition-colors hover:border-white"
            >
              Explore inventory

              <span className="transition-transform duration-300 group-hover:translate-x-2">
                →
              </span>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
