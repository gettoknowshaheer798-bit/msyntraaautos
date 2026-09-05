import { createClient } from "@/utils/supabase/server";
import Link from "next/link";
import InventoryTable from "./InventoryTable";

type Vehicle = {
  id: string;
  make: string;
  model: string;
  year: number;
  trim: string;
  price: string;
  hero_image: string;
  category: string | null;
  status: string;
  featured: boolean;
};

export default async function AdminInventoryPage() {
  const supabase = await createClient();

  const { data: vehicles, error } = await supabase
    .from("vehicles")
    .select(
      `
        id,
        make,
        model,
        year,
        trim,
        price,
        hero_image,
        category,
        status,
        featured
      `
    )
    .order("created_at", {
      ascending: false,
    });

  if (error) {
    console.error(
      "Failed to load admin inventory:",
      error
    );
  }

  const inventory = (vehicles ?? []) as Vehicle[];

  return (
    <main className="min-h-screen">
      {/* Header */}
      <header className="border-b border-[#0d1c17]/10">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-6 lg:px-10">
          <div>
            <Link
              href="/admin/dashboard"
              className="text-xs uppercase tracking-[0.3em] text-[#9e6d48]"
            >
              MSYNTRA
            </Link>

            <p className="mt-1 text-xs uppercase tracking-[0.2em] text-[#0d1c17]/40">
              Administration / Inventory
            </p>
          </div>

          <div className="flex items-center gap-6">
            <Link
              href="/admin/dashboard"
              className="text-xs uppercase tracking-[0.2em] text-[#0d1c17]/50 transition-colors hover:text-[#0d1c17]"
            >
              Dashboard
            </Link>

            <Link
              href="/"
              className="text-xs uppercase tracking-[0.2em] text-[#0d1c17]/50 transition-colors hover:text-[#0d1c17]"
            >
              Website
            </Link>
          </div>
        </div>
      </header>

      {/* Main */}
      <section className="mx-auto max-w-7xl px-6 py-12 lg:px-10 lg:py-20">
        {/* Page heading */}
        <div className="flex flex-col justify-between gap-8 border-b border-[#0d1c17]/10 pb-10 md:flex-row md:items-end">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-[#9e6d48]">
              {inventory.length}{" "}
              {inventory.length === 1
                ? "Vehicle"
                : "Vehicles"}
            </p>

            <h1 className="mt-4 text-5xl font-light tracking-tight md:text-7xl">
              Inventory
            </h1>

            <p className="mt-5 max-w-xl text-sm leading-7 text-[#0d1c17]/55">
              Manage the vehicles displayed across
              the MSyntra Automotive collection.
            </p>
          </div>

          <Link
            href="/admin/inventory/new"
            className="inline-flex w-fit items-center gap-4 bg-[#0d1c17] px-6 py-4 text-xs uppercase tracking-[0.2em] text-[#f4f0eb] transition-opacity hover:opacity-90"
          >
            <span className="text-lg leading-none">
              +
            </span>
            Add Vehicle
          </Link>
        </div>

        {/* Error */}
        {error && (
          <div className="mt-8 border border-red-900/10 bg-red-50 px-6 py-5 text-sm text-red-900">
            Failed to load inventory.

            <p className="mt-1 text-xs opacity-60">
              {error.message}
            </p>
          </div>
        )}

        {/* Empty state */}
        {!error && inventory.length === 0 && (
          <div className="py-32 text-center">
            <p className="text-xs uppercase tracking-[0.25em] text-[#0d1c17]/40">
              No vehicles
            </p>

            <h2 className="mt-4 text-3xl font-light">
              Your inventory is empty.
            </h2>

            <Link
              href="/admin/inventory/new"
              className="mt-8 inline-block border-b border-[#0d1c17] pb-1 text-xs uppercase tracking-[0.2em]"
            >
              Add your first vehicle
            </Link>
          </div>
        )}

        {/* Inventory table */}
        {!error && inventory.length > 0 && (
          <InventoryTable vehicles={inventory} />
        )}
      </section>
    </main>
  );
}