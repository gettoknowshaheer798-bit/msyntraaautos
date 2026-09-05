"use client";

import Link from "next/link";
import { useMemo, useState } from "react";

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

interface InventoryTableProps {
  vehicles: Vehicle[];
}

const CATEGORIES = [
  "all",
  "performance",
  "luxury",
  "suv",
  "electric",
] as const;

const STATUSES = [
  "all",
  "available",
  "reserved",
  "sold",
  "coming-soon",
] as const;

function formatCategory(category: string) {
  return category.replace("-", " ");
}

function getStatusClasses(status: string) {
  switch (status) {
    case "available":
      return "bg-[#0d1c17]/5 text-[#0d1c17]";

    case "reserved":
      return "bg-[#9e6d48]/10 text-[#9e6d48]";

    case "sold":
      return "bg-red-900/5 text-red-900/60";

    case "coming-soon":
      return "bg-blue-900/5 text-blue-900/60";

    default:
      return "bg-[#0d1c17]/5 text-[#0d1c17]/60";
  }
}

export default function InventoryTable({
  vehicles,
}: InventoryTableProps) {
  const [search, setSearch] = useState("");
  const [category, setCategory] =
    useState<(typeof CATEGORIES)[number]>("all");
  const [status, setStatus] =
    useState<(typeof STATUSES)[number]>("all");

  const filteredVehicles = useMemo(() => {
    const query = search.trim().toLowerCase();

    return vehicles.filter((vehicle) => {
      const matchesSearch =
        !query ||
        [
          vehicle.make,
          vehicle.model,
          vehicle.year.toString(),
          vehicle.trim,
          vehicle.price,
          vehicle.category ?? "",
          vehicle.status,
        ]
          .join(" ")
          .toLowerCase()
          .includes(query);

      const matchesCategory =
        category === "all" ||
        vehicle.category?.toLowerCase() === category;

      const matchesStatus =
        status === "all" ||
        vehicle.status.toLowerCase() === status;

      return (
        matchesSearch &&
        matchesCategory &&
        matchesStatus
      );
    });
  }, [vehicles, search, category, status]);

  const availableCount = vehicles.filter(
    (vehicle) => vehicle.status === "available"
  ).length;

  const reservedCount = vehicles.filter(
    (vehicle) => vehicle.status === "reserved"
  ).length;

  const soldCount = vehicles.filter(
    (vehicle) => vehicle.status === "sold"
  ).length;

  const featuredCount = vehicles.filter(
    (vehicle) => vehicle.featured
  ).length;

  const hasFilters =
    search.trim() !== "" ||
    category !== "all" ||
    status !== "all";

  function clearFilters() {
    setSearch("");
    setCategory("all");
    setStatus("all");
  }

  return (
    <div className="mt-10">
      {/* Inventory Summary */}
      <div className="mb-10 grid grid-cols-2 border-y border-[#0d1c17]/10 md:grid-cols-4">
        <div className="border-r border-[#0d1c17]/10 px-5 py-6 md:px-6">
          <p className="text-[9px] uppercase tracking-[0.2em] text-[#0d1c17]/40">
            Total
          </p>

          <p className="mt-3 text-3xl font-light">
            {vehicles.length}
          </p>
        </div>

        <div className="border-r border-[#0d1c17]/10 px-5 py-6 md:px-6">
          <p className="text-[9px] uppercase tracking-[0.2em] text-[#0d1c17]/40">
            Available
          </p>

          <p className="mt-3 text-3xl font-light">
            {availableCount}
          </p>
        </div>

        <div className="border-r border-[#0d1c17]/10 px-5 py-6 md:px-6">
          <p className="text-[9px] uppercase tracking-[0.2em] text-[#0d1c17]/40">
            Reserved
          </p>

          <p className="mt-3 text-3xl font-light">
            {reservedCount}
          </p>
        </div>

        <div className="px-5 py-6 md:px-6">
          <p className="text-[9px] uppercase tracking-[0.2em] text-[#0d1c17]/40">
            Featured
          </p>

          <p className="mt-3 text-3xl font-light">
            {featuredCount}
          </p>
        </div>
      </div>

      {/* Filters */}
      <div className="mb-8 border-b border-[#0d1c17]/10 pb-8">
        <div className="flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
          {/* Search */}
          <div className="w-full lg:max-w-md">
            <label
              htmlFor="inventory-search"
              className="mb-3 block text-[9px] uppercase tracking-[0.2em] text-[#0d1c17]/40"
            >
              Search inventory
            </label>

            <div className="relative">
              <input
                id="inventory-search"
                type="text"
                value={search}
                onChange={(event) =>
                  setSearch(event.target.value)
                }
                placeholder="Make, model, year, trim..."
                className="w-full border-b border-[#0d1c17]/20 bg-transparent py-3 pr-8 text-sm outline-none transition-colors placeholder:text-[#0d1c17]/25 focus:border-[#0d1c17]"
              />

              {search && (
                <button
                  type="button"
                  onClick={() => setSearch("")}
                  className="absolute right-0 top-1/2 -translate-y-1/2 text-xs text-[#0d1c17]/40 transition-colors hover:text-[#0d1c17]"
                  aria-label="Clear search"
                >
                  ×
                </button>
              )}
            </div>
          </div>

          {/* Filters */}
          <div className="flex flex-col gap-4 sm:flex-row">
            <div>
              <label
                htmlFor="inventory-category"
                className="mb-3 block text-[9px] uppercase tracking-[0.2em] text-[#0d1c17]/40"
              >
                Category
              </label>

              <select
                id="inventory-category"
                value={category}
                onChange={(event) =>
                  setCategory(
                    event.target.value as (typeof CATEGORIES)[number]
                  )
                }
                className="min-w-[170px] border-b border-[#0d1c17]/20 bg-transparent py-3 text-xs uppercase tracking-[0.12em] outline-none transition-colors focus:border-[#0d1c17]"
              >
                {CATEGORIES.map((item) => (
                  <option key={item} value={item}>
                    {item === "all"
                      ? "All Categories"
                      : formatCategory(item)}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label
                htmlFor="inventory-status"
                className="mb-3 block text-[9px] uppercase tracking-[0.2em] text-[#0d1c17]/40"
              >
                Status
              </label>

              <select
                id="inventory-status"
                value={status}
                onChange={(event) =>
                  setStatus(
                    event.target.value as (typeof STATUSES)[number]
                  )
                }
                className="min-w-[170px] border-b border-[#0d1c17]/20 bg-transparent py-3 text-xs uppercase tracking-[0.12em] outline-none transition-colors focus:border-[#0d1c17]"
              >
                {STATUSES.map((item) => (
                  <option key={item} value={item}>
                    {item === "all"
                      ? "All Statuses"
                      : formatCategory(item)}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>

        {/* Filter result line */}
        <div className="mt-6 flex items-center justify-between">
          <p className="text-[9px] uppercase tracking-[0.2em] text-[#0d1c17]/40">
            Showing {filteredVehicles.length} of{" "}
            {vehicles.length} vehicles
          </p>

          {hasFilters && (
            <button
              type="button"
              onClick={clearFilters}
              className="text-[9px] uppercase tracking-[0.2em] text-[#9e6d48] transition-colors hover:text-[#0d1c17]"
            >
              Clear filters
            </button>
          )}
        </div>
      </div>

      {/* Desktop heading */}
      <div className="hidden grid-cols-[60px_1fr_130px_140px_110px] gap-6 border-b border-[#0d1c17]/10 pb-4 text-[10px] uppercase tracking-[0.2em] text-[#0d1c17]/40 md:grid">
        <span>No.</span>
        <span>Vehicle</span>
        <span>Status</span>
        <span>Price</span>
        <span />
      </div>

      {/* No results */}
      {filteredVehicles.length === 0 && (
        <div className="py-24 text-center">
          <p className="text-xs uppercase tracking-[0.25em] text-[#0d1c17]/40">
            No matching vehicles
          </p>

          <h2 className="mt-4 text-2xl font-light">
            Nothing matches your filters.
          </h2>

          <button
            type="button"
            onClick={clearFilters}
            className="mt-8 border-b border-[#0d1c17] pb-1 text-[10px] uppercase tracking-[0.2em]"
          >
            Clear filters
          </button>
        </div>
      )}

      {/* Inventory */}
      {filteredVehicles.length > 0 && (
        <div>
          {filteredVehicles.map((vehicle, index) => (
            <Link
              key={vehicle.id}
              href={`/admin/inventory/${vehicle.id}`}
              className="group grid gap-5 border-b border-[#0d1c17]/10 py-6 transition-colors hover:bg-[#0d1c17]/[0.025] md:grid-cols-[60px_1fr_130px_140px_110px] md:items-center md:gap-6"
            >
              {/* Number */}
              <div className="hidden text-xs text-[#0d1c17]/35 md:block">
                {String(index + 1).padStart(2, "0")}
              </div>

              {/* Vehicle */}
              <div className="flex min-w-0 items-center gap-5">
                <div className="h-16 w-24 shrink-0 overflow-hidden bg-[#ded9d2]">
                  {vehicle.hero_image ? (
                    <img
                      src={vehicle.hero_image}
                      alt={`${vehicle.make} ${vehicle.model}`}
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  ) : (
                    <div className="flex h-full items-center justify-center text-[9px] uppercase tracking-widest text-[#0d1c17]/30">
                      No Image
                    </div>
                  )}
                </div>

                <div className="min-w-0">
                  <div className="flex flex-wrap items-center gap-3">
                    <h2 className="truncate text-lg font-light">
                      {vehicle.make}{" "}
                      {vehicle.model}
                    </h2>

                    {vehicle.featured && (
                      <span className="text-[9px] uppercase tracking-[0.15em] text-[#9e6d48]">
                        Featured
                      </span>
                    )}
                  </div>

                  <p className="mt-1 text-xs uppercase tracking-[0.15em] text-[#0d1c17]/40">
                    {vehicle.year} · {vehicle.trim}
                  </p>

                  <p className="mt-2 text-[9px] uppercase tracking-[0.15em] text-[#0d1c17]/30 md:hidden">
                    {vehicle.category
                      ? formatCategory(vehicle.category)
                      : "Uncategorized"}
                  </p>
                </div>
              </div>

              {/* Status */}
              <div className="ml-[116px] md:ml-0">
                <span
                  className={`inline-flex px-3 py-2 text-[9px] uppercase tracking-[0.15em] ${getStatusClasses(
                    vehicle.status
                  )}`}
                >
                  {formatCategory(vehicle.status)}
                </span>
              </div>

              {/* Price */}
              <div className="ml-[116px] text-sm text-[#0d1c17]/70 md:ml-0">
                {vehicle.price}
              </div>

              {/* Edit */}
              <div className="ml-[116px] text-left md:ml-0 md:text-right">
                <span className="text-[10px] uppercase tracking-[0.2em] text-[#0d1c17]/40 transition-colors group-hover:text-[#0d1c17]">
                  Edit →
                </span>
              </div>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}