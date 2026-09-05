import Link from "next/link";

export default function AdminDashboardPage() {
  return (
    <main className="min-h-screen bg-[#f4f0eb]">
      <header className="border-b border-[#0d1c17]/10">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-6 lg:px-10">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-[#9e6d48]">
              MSYNTRA
            </p>

            <p className="mt-1 text-xs uppercase tracking-[0.2em] text-[#0d1c17]/40">
              Administration
            </p>
          </div>

          <Link
            href="/"
            className="text-xs uppercase tracking-[0.2em] text-[#0d1c17]/60 transition-colors hover:text-[#0d1c17]"
          >
            View Website
          </Link>
        </div>
      </header>

      <section className="mx-auto max-w-7xl px-6 py-16 lg:px-10 lg:py-24">
        <p className="text-xs uppercase tracking-[0.3em] text-[#9e6d48]">
          Dashboard
        </p>

        <h1 className="mt-4 text-5xl font-light tracking-tight md:text-7xl">
          Welcome back.
        </h1>

        <div className="mt-16 grid gap-px overflow-hidden border border-[#0d1c17]/10 bg-[#0d1c17]/10 md:grid-cols-3">
          <Link
            href="/admin/inventory"
            className="group bg-[#f4f0eb] p-8 transition-colors hover:bg-[#0d1c17] hover:text-[#f4f0eb]"
          >
            <p className="text-xs uppercase tracking-[0.25em] opacity-50">
              01
            </p>

            <h2 className="mt-12 text-2xl font-light">
              Inventory
            </h2>

            <p className="mt-3 text-sm opacity-50">
              Manage vehicles, pricing and availability.
            </p>
          </Link>

          <div className="bg-[#f4f0eb] p-8 opacity-50">
            <p className="text-xs uppercase tracking-[0.25em]">
              02
            </p>

            <h2 className="mt-12 text-2xl font-light">
              Inquiries
            </h2>

            <p className="mt-3 text-sm">
              Coming soon.
            </p>
          </div>

          <div className="bg-[#f4f0eb] p-8 opacity-50">
            <p className="text-xs uppercase tracking-[0.25em]">
              03
            </p>

            <h2 className="mt-12 text-2xl font-light">
              Trade-ins
            </h2>

            <p className="mt-3 text-sm">
              Coming soon.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}