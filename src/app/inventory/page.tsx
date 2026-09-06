"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import {
  ArrowDown,
  ArrowRight,
  Check,
  ChevronDown,
  Heart,
  RotateCcw,
  SlidersHorizontal,
  X,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useMemo, useState } from "react";

import type { Vehicle } from "@/types/vehicle";
import { createClient } from "@/utils/supabase/client";

type Category =
  | "ALL"
  | "PERFORMANCE"
  | "LUXURY"
  | "SUV"
  | "ELECTRIC";

type SortOption =
  | "FEATURED"
  | "PRICE_LOW"
  | "PRICE_HIGH"
  | "YEAR_NEW";

const CATEGORIES: Category[] = [
  "ALL",
  "PERFORMANCE",
  "LUXURY",
  "SUV",
  "ELECTRIC",
];

const SORT_OPTIONS: {
  value: SortOption;
  label: string;
}[] = [
  {
    value: "FEATURED",
    label: "Featured",
  },
  {
    value: "PRICE_LOW",
    label: "Price: Low to High",
  },
  {
    value: "PRICE_HIGH",
    label: "Price: High to Low",
  },
  {
    value: "YEAR_NEW",
    label: "Newest First",
  },
];

type SupabaseVehicle = {
  id: string;
  make: string;
  model: string;
  year: number;
  trim: string;
  description: string;
  hero_image: string;
  thumbnail: string;
  action_image: string;
  image_style: string;
  engine_spec: string;
  power_spec: string;
  colors: Vehicle["colors"];
  features: string[];
  specs: Vehicle["specs"];
  history_checklist: string[];
  financing_estimate: Vehicle["financingEstimate"];
  price: string;
  category: string | null;
  status: string;
  featured: boolean;
  created_at?: string;
  updated_at?: string;
};

function getCategory(make: string, model: string): Category {
  const name = `${make} ${model}`.toLowerCase();

  if (name.includes("nevera")) {
    return "ELECTRIC";
  }

  if (name.includes("tacoma")) {
    return "SUV";
  }

  if (
    name.includes("laferrari") ||
    name.includes("m8") ||
    name.includes("ferrari")
  ) {
    return "PERFORMANCE";
  }

  return "LUXURY";
}

function parsePrice(price: string | number) {
  if (typeof price === "number") {
    return price;
  }

  return Number(price.replace(/[^0-9.]/g, "")) || 0;
}

function formatPrice(price: string | number) {
  if (typeof price === "number") {
    return `$${price.toLocaleString()}`;
  }

  return price;
}

function mapSupabaseVehicle(vehicle: SupabaseVehicle): Vehicle {
  return {
    id: vehicle.id,
    make: vehicle.make,
    model: vehicle.model,
    year: vehicle.year,
    trim: vehicle.trim,
    price: vehicle.price,
    description: vehicle.description,
    heroImage: vehicle.hero_image,
    thumbnail: vehicle.thumbnail,
    actionImage: vehicle.action_image,
    imageStyle: vehicle.image_style,
    engineSpec: vehicle.engine_spec,
    powerSpec: vehicle.power_spec,
    colors: vehicle.colors ?? [],
    features: vehicle.features ?? [],
    specs: vehicle.specs ?? undefined,
    historyChecklist: vehicle.history_checklist ?? undefined,
    financingEstimate: vehicle.financing_estimate ?? undefined,
  };
}

export default function InventoryPage() {
  const shouldReduceMotion = useReducedMotion();

  const [vehicles, setVehicles] = useState<Vehicle[]>([]);
  const [featuredVehicles, setFeaturedVehicles] = useState<string[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const [activeCategory, setActiveCategory] =
    useState<Category>("ALL");

  const [activeMake, setActiveMake] = useState("ALL");

  const [sortBy, setSortBy] =
    useState<SortOption>("FEATURED");

  const [favorites, setFavorites] = useState<string[]>([]);

  const [mobileFiltersOpen, setMobileFiltersOpen] =
    useState(false);

  const [sortOpen, setSortOpen] = useState(false);

  const [showFavoritesOnly, setShowFavoritesOnly] =
    useState(false);

  /* ============================================================
     LOAD VEHICLES FROM SUPABASE
     ============================================================ */

  useEffect(() => {
    let mounted = true;

    async function loadVehicles() {
      setLoading(true);
      setError(null);

      const supabase = createClient();

      const { data, error } = await supabase
        .from("vehicles")
        .select("*")
        .eq("status", "available")
        .order("created_at", {
          ascending: false,
        });

      if (!mounted) {
        return;
      }

      if (error) {
        console.error("Failed to load vehicles:", error);

        setError("Unable to load the current collection.");
        setVehicles([]);
        setFeaturedVehicles([]);
        setLoading(false);

        return;
      }

      const rows = (data ?? []) as SupabaseVehicle[];

      const mappedVehicles = rows.map(mapSupabaseVehicle);

      const featuredIds = rows
        .filter((vehicle) => vehicle.featured)
        .map((vehicle) => vehicle.id);

      setVehicles(mappedVehicles);
      setFeaturedVehicles(featuredIds);
      setLoading(false);
    }

    loadVehicles();

    return () => {
      mounted = false;
    };
  }, []);

  /* ============================================================
     MAKES
     ============================================================ */

  const makes = useMemo(() => {
    return Array.from(
      new Set(vehicles.map((vehicle) => vehicle.make))
    ).sort();
  }, [vehicles]);

  /* ============================================================
     FILTER + SORT
     ============================================================ */

  const filteredVehicles = useMemo(() => {
    const result = vehicles.filter((vehicle) => {
      const category = getCategory(
        vehicle.make,
        vehicle.model
      );

      const categoryMatch =
        activeCategory === "ALL" ||
        category === activeCategory;

      const makeMatch =
        activeMake === "ALL" ||
        vehicle.make === activeMake;

      const favoriteMatch =
        !showFavoritesOnly ||
        favorites.includes(vehicle.id);

      return (
        categoryMatch &&
        makeMatch &&
        favoriteMatch
      );
    });

    return [...result].sort((a, b) => {
      switch (sortBy) {
        case "PRICE_LOW":
          return (
            parsePrice(a.price) -
            parsePrice(b.price)
          );

        case "PRICE_HIGH":
          return (
            parsePrice(b.price) -
            parsePrice(a.price)
          );

        case "YEAR_NEW":
          return b.year - a.year;

        case "FEATURED": {
          const aFeatured =
            featuredVehicles.includes(a.id);

          const bFeatured =
            featuredVehicles.includes(b.id);

          if (aFeatured && !bFeatured) {
            return -1;
          }

          if (!aFeatured && bFeatured) {
            return 1;
          }

          return 0;
        }

        default:
          return 0;
      }
    });
  }, [
    vehicles,
    featuredVehicles,
    activeCategory,
    activeMake,
    favorites,
    showFavoritesOnly,
    sortBy,
  ]);

  /* ============================================================
     FILTER STATE
     ============================================================ */

  const hasActiveFilters =
    activeCategory !== "ALL" ||
    activeMake !== "ALL" ||
    sortBy !== "FEATURED" ||
    showFavoritesOnly;

  const resetFilters = () => {
    setActiveCategory("ALL");
    setActiveMake("ALL");
    setSortBy("FEATURED");
    setShowFavoritesOnly(false);
  };

  const toggleFavorite = (id: string) => {
    setFavorites((current) =>
      current.includes(id)
        ? current.filter((item) => item !== id)
        : [...current, id]
    );
  };

  /* ============================================================
     RENDER
     ============================================================ */

  return (
    <main className="min-h-screen bg-[#f4f0eb] text-[#0d1c17] selection:bg-[#9e6d48] selection:text-white">
      {/* ============================================================
          HERO
          ============================================================ */}

      <section className="relative min-h-[620px] overflow-hidden bg-[#dcd7ce] sm:min-h-[680px] lg:min-h-[720px]">
        <div className="absolute inset-0">
          <Image
            src="/images/vehicles/Collection-Hero.png"
            alt="MSYNTRA automotive collection"
            fill
            priority
            sizes="100vw"
            className="object-cover object-[68%_center] lg:object-right"
          />
        </div>

        {/* Header */}

        <header className="relative z-20 mx-auto flex w-full max-w-[1500px] items-center justify-between px-5 py-7 sm:px-8 md:px-12 md:py-8 lg:px-16 xl:px-20">
          <Link
            href="/"
            className="group flex flex-col"
          >
            <span className="font-serif text-lg font-light uppercase tracking-[0.22em] text-[#0d1c17] sm:text-xl">
              MSYNTRA
            </span>

            <span className="mt-0.5 text-[7px] font-semibold uppercase tracking-[0.38em] text-[#9e6d48] sm:text-[8px]">
              Automotive
            </span>
          </Link>

          <nav className="hidden items-center gap-8 text-[9px] font-semibold uppercase tracking-[0.25em] text-[#0d1c17] lg:flex">
            <Link
              href="/inventory"
              className="border-b border-[#9e6d48] pb-1 text-[#9e6d48]"
            >
              Inventory
            </Link>

            <Link
              href="/about"
              className="transition-colors hover:text-[#9e6d48]"
            >
              Experience
            </Link>

            <Link
              href="/financing"
              className="transition-colors hover:text-[#9e6d48]"
            >
              Financing
            </Link>

            <Link
              href="/about"
              className="transition-colors hover:text-[#9e6d48]"
            >
              About
            </Link>

            <Link
              href="/contact"
              className="transition-colors hover:text-[#9e6d48]"
            >
              Contact
            </Link>
          </nav>

          <Link
            href="/contact"
            className="bg-[#0d1c17] px-5 py-2.5 text-[8px] font-semibold uppercase tracking-[0.25em] text-[#e7e3dc] transition-colors hover:bg-[#9e6d48] hover:text-[#0d1c17] sm:px-6 sm:text-[9px]"
          >
            Inquire
          </Link>
        </header>

        {/* Hero Content */}

        <div className="relative z-10 mx-auto flex min-h-[calc(620px-90px)] max-w-[1500px] items-center px-5 pb-14 sm:min-h-[590px] sm:px-8 md:px-12 lg:min-h-[620px] lg:px-16 xl:px-20">
          <motion.div
            initial={
              shouldReduceMotion
                ? { opacity: 1 }
                : {
                    opacity: 0,
                    y: 35,
                  }
            }
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: shouldReduceMotion ? 0 : 1,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="max-w-[650px]"
          >
            <div className="mb-5 flex items-center gap-3">
              <span className="h-px w-7 bg-[#9e6d48]" />

              <span className="-translate-x-4 whitespace-nowrap font-serif text-4xl font-light uppercase tracking-[-0.02em] text-[#0d1c17] sm:text-5xl md:text-6xl lg:text-7xl">
                The Collection
              </span>
            </div>

            <h1
              className="whitespace-nowrap font-serif text-base font-light uppercase leading-none tracking-[-0.02em] text-[#0d1c17] sm:text-lg md:text-xl lg:text-2xl"
              style={{
                fontVariationSettings:
                  '"SOFT" 100, "opsz" 144',
              }}
            >
              EVERY VEHICLE. ONE DESTINATION.
            </h1>

            <div className="mt-7 flex flex-col gap-6 sm:flex-row sm:items-end sm:gap-10">
              <p className="max-w-[300px] text-xs font-light leading-[1.7] tracking-wide text-[#0d1c17] md:text-sm">
                A considered collection of exceptional
                automobiles, from everyday capability to
                uncompromising performance.
              </p>

              <div className="border-l border-[#9e6d48]/40 pl-5">
                <span className="block text-2xl font-light text-[#0d1c17] sm:text-3xl">
                  {loading ? "—" : vehicles.length}
                </span>

                <span className="text-[8px] font-semibold uppercase tracking-[0.25em] text-[#0d1c17]">
                  Vehicles
                </span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Scroll Cue */}

        <div className="absolute bottom-7 right-5 z-20 hidden items-center gap-3 text-[8px] font-semibold uppercase tracking-[0.25em] text-[#0d1c17] sm:flex md:right-12">
          <span>Explore the collection</span>

          <ArrowDown className="h-3.5 w-3.5 text-[#9e6d48]" />
        </div>
      </section>

      {/* ============================================================
          FILTER / CONTROL BAR
          ============================================================ */}

      <section className="relative z-30 border-y border-[#d6d0c6] bg-[#f4f0eb]/95 backdrop-blur-xl">
        <div className="mx-auto max-w-[1500px] px-5 sm:px-8 md:px-12 lg:px-16 xl:px-20">
          {/* Desktop */}

          <div className="hidden min-h-[76px] items-center justify-between lg:flex">
            <div className="flex items-center gap-8">
              {CATEGORIES.map((category) => {
                const active =
                  activeCategory === category;

                return (
                  <button
                    key={category}
                    type="button"
                    onClick={() =>
                      setActiveCategory(category)
                    }
                    className={`relative py-7 text-[9px] font-semibold uppercase tracking-[0.25em] transition-colors ${
                      active
                        ? "text-[#0d1c17]"
                        : "text-[#7a7e7b] hover:text-[#0d1c17]"
                    }`}
                  >
                    {category}

                    <span
                      className={`absolute bottom-0 left-0 h-[2px] bg-[#9e6d48] transition-all duration-300 ${
                        active ? "w-full" : "w-0"
                      }`}
                    />
                  </button>
                );
              })}
            </div>

            <div className="flex items-center gap-5">
              {/* Make */}

              <div className="relative">
                <select
                  value={activeMake}
                  onChange={(event) =>
                    setActiveMake(event.target.value)
                  }
                  className="cursor-pointer appearance-none bg-transparent py-3 pr-7 text-[9px] font-semibold uppercase tracking-[0.2em] text-[#5d6863] outline-none transition-colors hover:text-[#0d1c17]"
                  aria-label="Filter by make"
                >
                  <option value="ALL">
                    ALL MAKES
                  </option>

                  {makes.map((make) => (
                    <option key={make} value={make}>
                      {make}
                    </option>
                  ))}
                </select>

                <ChevronDown className="pointer-events-none absolute right-0 top-1/2 h-3 w-3 -translate-y-1/2 text-[#9e6d48]" />
              </div>

              <div className="h-5 w-px bg-[#d6d0c6]" />

              {/* Favorites */}

              <button
                type="button"
                onClick={() =>
                  setShowFavoritesOnly(
                    (current) => !current
                  )
                }
                className={`flex items-center gap-2 text-[9px] font-semibold uppercase tracking-[0.2em] transition-colors ${
                  showFavoritesOnly
                    ? "text-[#9e6d48]"
                    : "text-[#5d6863] hover:text-[#0d1c17]"
                }`}
              >
                <Heart
                  className={`h-3.5 w-3.5 ${
                    showFavoritesOnly
                      ? "fill-[#9e6d48]"
                      : ""
                  }`}
                />

                Favorites

                {favorites.length > 0 && (
                  <span className="text-[#9e6d48]">
                    {favorites.length}
                  </span>
                )}
              </button>

              <div className="h-5 w-px bg-[#d6d0c6]" />

              {/* Sort */}

              <div className="relative">
                <button
                  type="button"
                  onClick={() =>
                    setSortOpen((current) => !current)
                  }
                  className="flex items-center gap-2 text-[9px] font-semibold uppercase tracking-[0.2em] text-[#5d6863] transition-colors hover:text-[#0d1c17]"
                  aria-expanded={sortOpen}
                >
                  <span>
                    {
                      SORT_OPTIONS.find(
                        (option) =>
                          option.value === sortBy
                      )?.label
                    }
                  </span>

                  <ChevronDown
                    className={`h-3 w-3 text-[#9e6d48] transition-transform ${
                      sortOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>

                <AnimatePresence>
                  {sortOpen && (
                    <motion.div
                      initial={{
                        opacity: 0,
                        y: 8,
                      }}
                      animate={{
                        opacity: 1,
                        y: 0,
                      }}
                      exit={{
                        opacity: 0,
                        y: 8,
                      }}
                      transition={{
                        duration: 0.2,
                      }}
                      className="absolute right-0 top-full mt-3 w-52 border border-[#d6d0c6] bg-[#f4f0eb] p-2 shadow-xl"
                    >
                      {SORT_OPTIONS.map((option) => (
                        <button
                          key={option.value}
                          type="button"
                          onClick={() => {
                            setSortBy(option.value);
                            setSortOpen(false);
                          }}
                          className="flex w-full items-center justify-between px-3 py-3 text-left text-[8px] font-semibold uppercase tracking-[0.18em] text-[#5d6863] transition-colors hover:bg-[#eae5dd] hover:text-[#0d1c17]"
                        >
                          {option.label}

                          {sortBy === option.value && (
                            <Check className="h-3 w-3 text-[#9e6d48]" />
                          )}
                        </button>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {hasActiveFilters && (
                <>
                  <div className="h-5 w-px bg-[#d6d0c6]" />

                  <button
                    type="button"
                    onClick={resetFilters}
                    className="flex items-center gap-2 text-[9px] font-semibold uppercase tracking-[0.2em] text-[#9e6d48] transition-colors hover:text-[#0d1c17]"
                  >
                    Reset

                    <RotateCcw className="h-3 w-3" />
                  </button>
                </>
              )}
            </div>
          </div>

          {/* Mobile / Tablet */}

          <div className="flex min-h-[68px] items-center justify-between gap-3 lg:hidden">
            <div className="flex items-center gap-3">
              <button
                type="button"
                onClick={() =>
                  setMobileFiltersOpen(true)
                }
                className="flex items-center gap-2 border border-[#d6d0c6] px-4 py-3 text-[8px] font-semibold uppercase tracking-[0.2em] text-[#0d1c17]"
              >
                <SlidersHorizontal className="h-3.5 w-3.5 text-[#9e6d48]" />
                Filters
              </button>

              {hasActiveFilters && (
                <span className="h-1.5 w-1.5 rounded-full bg-[#9e6d48]" />
              )}
            </div>

            <span className="text-[8px] font-semibold uppercase tracking-[0.2em] text-[#7a7e7b]">
              {loading
                ? "Loading"
                : `${filteredVehicles.length} ${
                    filteredVehicles.length === 1
                      ? "Vehicle"
                      : "Vehicles"
                  }`}
            </span>

            <button
              type="button"
              onClick={() =>
                setSortOpen((current) => !current)
              }
              className="flex items-center gap-2 text-[8px] font-semibold uppercase tracking-[0.2em] text-[#5d6863]"
            >
              Sort

              <ChevronDown
                className={`h-3 w-3 text-[#9e6d48] transition-transform ${
                  sortOpen ? "rotate-180" : ""
                }`}
              />
            </button>
          </div>
        </div>
      </section>

      {/* ============================================================
          MOBILE FILTER DRAWER
          ============================================================ */}

      <AnimatePresence>
        {mobileFiltersOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-[80] bg-[#0d1c17]/50 backdrop-blur-sm"
              onClick={() =>
                setMobileFiltersOpen(false)
              }
            />

            <motion.aside
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{
                duration: shouldReduceMotion
                  ? 0
                  : 0.45,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="fixed right-0 top-0 z-[90] flex h-full w-[88%] max-w-[420px] flex-col bg-[#f4f0eb] shadow-2xl"
            >
              <div className="flex items-center justify-between border-b border-[#d6d0c6] px-6 py-5">
                <div>
                  <span className="text-[8px] font-semibold uppercase tracking-[0.3em] text-[#9e6d48]">
                    Refine
                  </span>

                  <h2 className="mt-1 font-serif text-2xl font-light uppercase">
                    Your Selection
                  </h2>
                </div>

                <button
                  type="button"
                  onClick={() =>
                    setMobileFiltersOpen(false)
                  }
                  className="flex h-9 w-9 items-center justify-center border border-[#d6d0c6]"
                  aria-label="Close filters"
                >
                  <X className="h-4 w-4" />
                </button>
              </div>

              <div className="flex-1 overflow-y-auto px-6 py-7">
                {/* Category */}

                <div className="mb-9">
                  <span className="mb-4 block text-[8px] font-semibold uppercase tracking-[0.25em] text-[#7a7e7b]">
                    Category
                  </span>

                  <div className="grid grid-cols-2 gap-2">
                    {CATEGORIES.map((category) => {
                      const active =
                        activeCategory === category;

                      return (
                        <button
                          key={category}
                          type="button"
                          onClick={() =>
                            setActiveCategory(category)
                          }
                          className={`border px-3 py-3 text-left text-[8px] font-semibold uppercase tracking-[0.18em] transition-colors ${
                            active
                              ? "border-[#0d1c17] bg-[#0d1c17] text-[#e7e3dc]"
                              : "border-[#d6d0c6] text-[#5d6863]"
                          }`}
                        >
                          {category}
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Make */}

                <div className="mb-9">
                  <span className="mb-4 block text-[8px] font-semibold uppercase tracking-[0.25em] text-[#7a7e7b]">
                    Make
                  </span>

                  <div className="space-y-1">
                    <button
                      type="button"
                      onClick={() =>
                        setActiveMake("ALL")
                      }
                      className={`flex w-full items-center justify-between border-b border-[#d6d0c6] py-3 text-left text-[9px] font-semibold uppercase tracking-[0.2em] ${
                        activeMake === "ALL"
                          ? "text-[#9e6d48]"
                          : "text-[#0d1c17]"
                      }`}
                    >
                      All Makes

                      {activeMake === "ALL" && (
                        <Check className="h-3.5 w-3.5" />
                      )}
                    </button>

                    {makes.map((make) => (
                      <button
                        key={make}
                        type="button"
                        onClick={() =>
                          setActiveMake(make)
                        }
                        className={`flex w-full items-center justify-between border-b border-[#d6d0c6] py-3 text-left text-[9px] font-semibold uppercase tracking-[0.2em] ${
                          activeMake === make
                            ? "text-[#9e6d48]"
                            : "text-[#0d1c17]"
                        }`}
                      >
                        {make}

                        {activeMake === make && (
                          <Check className="h-3.5 w-3.5" />
                        )}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Sort */}

                <div className="mb-9">
                  <span className="mb-4 block text-[8px] font-semibold uppercase tracking-[0.25em] text-[#7a7e7b]">
                    Sort By
                  </span>

                  <div className="space-y-1">
                    {SORT_OPTIONS.map((option) => (
                      <button
                        key={option.value}
                        type="button"
                        onClick={() =>
                          setSortBy(option.value)
                        }
                        className={`flex w-full items-center justify-between border-b border-[#d6d0c6] py-3 text-left text-[9px] font-semibold uppercase tracking-[0.15em] ${
                          sortBy === option.value
                            ? "text-[#9e6d48]"
                            : "text-[#0d1c17]"
                        }`}
                      >
                        {option.label}

                        {sortBy === option.value && (
                          <Check className="h-3.5 w-3.5" />
                        )}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Favorites */}

                <button
                  type="button"
                  onClick={() =>
                    setShowFavoritesOnly(
                      (current) => !current
                    )
                  }
                  className={`flex w-full items-center justify-between border border-[#d6d0c6] px-4 py-4 text-[9px] font-semibold uppercase tracking-[0.18em] ${
                    showFavoritesOnly
                      ? "border-[#0d1c17] bg-[#0d1c17] text-[#e7e3dc]"
                      : "text-[#0d1c17]"
                  }`}
                >
                  <span className="flex items-center gap-3">
                    <Heart
                      className={`h-3.5 w-3.5 ${
                        showFavoritesOnly
                          ? "fill-[#9e6d48] text-[#9e6d48]"
                          : "text-[#9e6d48]"
                      }`}
                    />

                    Favorites Only
                  </span>

                  {favorites.length > 0 && (
                    <span>{favorites.length}</span>
                  )}
                </button>
              </div>

              <div className="border-t border-[#d6d0c6] p-5">
                <button
                  type="button"
                  onClick={() => {
                    resetFilters();
                    setMobileFiltersOpen(false);
                  }}
                  className="flex w-full items-center justify-center gap-3 bg-[#0d1c17] py-4 text-[9px] font-semibold uppercase tracking-[0.25em] text-[#e7e3dc]"
                >
                  Reset Filters

                  <RotateCcw className="h-3.5 w-3.5" />
                </button>
              </div>
            </motion.aside>
          </>
        )}
      </AnimatePresence>

      {/* ============================================================
          LOADING / ERROR
          ============================================================ */}

      {loading && (
        <section className="mx-auto max-w-[1500px] px-5 py-20 sm:px-8 md:px-12 lg:px-16 xl:px-20">
          <div className="flex items-center gap-4 text-[9px] font-semibold uppercase tracking-[0.25em] text-[#7a7e7b]">
            <span className="h-px w-8 bg-[#9e6d48]" />
            Loading the collection...
          </div>
        </section>
      )}

      {!loading && error && (
        <section className="mx-auto max-w-[1500px] px-5 py-24 text-center sm:px-8 md:px-12 lg:px-16 xl:px-20">
          <span className="mb-4 block text-[9px] font-semibold uppercase tracking-[0.3em] text-[#9e6d48]">
            Collection unavailable
          </span>

          <h2 className="font-serif text-3xl font-light uppercase text-[#0d1c17] sm:text-4xl">
            Unable to load the vehicles.
          </h2>

          <p className="mx-auto mt-4 max-w-sm text-xs font-light leading-relaxed text-[#6f706a]">
            Please try again in a moment.
          </p>

          <button
            type="button"
            onClick={() => window.location.reload()}
            className="mt-8 inline-flex items-center gap-3 bg-[#0d1c17] px-7 py-4 text-[9px] font-semibold uppercase tracking-[0.25em] text-[#e7e3dc] transition-colors hover:bg-[#9e6d48] hover:text-[#0d1c17]"
          >
            Try Again

            <RotateCcw className="h-3.5 w-3.5" />
          </button>
        </section>
      )}

      {!loading && !error && (
        <>
          {/* ============================================================
              INVENTORY HEADER
              ============================================================ */}

          <section className="mx-auto max-w-[1500px] px-5 pb-7 pt-12 sm:px-8 md:px-12 md:pt-16 lg:px-16 xl:px-20">
            <div className="flex items-end justify-between gap-6">
              <div>
                <span className="mb-2 block text-[8px] font-semibold uppercase tracking-[0.3em] text-[#9e6d48] sm:text-[9px]">
                  Available Now
                </span>

                <h2
                  className="font-serif text-3xl font-light uppercase tracking-[-0.025em] sm:text-4xl md:text-5xl"
                  style={{
                    fontVariationSettings:
                      '"SOFT" 100, "opsz" 144',
                  }}
                >
                  {showFavoritesOnly
                    ? "YOUR FAVORITES"
                    : activeCategory === "ALL"
                      ? "THE CURRENT COLLECTION"
                      : activeCategory}
                </h2>
              </div>

              <div className="hidden text-right sm:block">
                <span className="block text-2xl font-light">
                  {filteredVehicles.length}
                </span>

                <span className="text-[8px] font-semibold uppercase tracking-[0.25em] text-[#7a7e7b]">
                  Results
                </span>
              </div>
            </div>
          </section>

          {/* ============================================================
              VEHICLE GALLERY
              ============================================================ */}

          <section className="mx-auto max-w-[1500px] px-5 pb-24 sm:px-8 md:px-12 lg:px-16 xl:px-20">
            {filteredVehicles.length > 0 ? (
              <motion.div
                layout
                className="grid grid-cols-1 gap-5 md:grid-cols-6 md:gap-5 lg:grid-cols-12 lg:gap-6"
              >
                <AnimatePresence mode="popLayout">
                  {filteredVehicles.map((car, index) => {
                    const category = getCategory(
                      car.make,
                      car.model
                    );

                    const isFavorite =
                      favorites.includes(car.id);

                    const layoutPattern = index % 4;

                    const colSpan =
                      layoutPattern === 0
                        ? "md:col-span-4 lg:col-span-8"
                        : layoutPattern === 1
                          ? "md:col-span-2 lg:col-span-4"
                          : layoutPattern === 2
                            ? "md:col-span-3 lg:col-span-5"
                            : "md:col-span-3 lg:col-span-7";

                    const imageHeight =
                      layoutPattern === 0
                        ? "h-[400px] sm:h-[460px] md:h-[480px]"
                        : layoutPattern === 1
                          ? "h-[330px] sm:h-[380px] md:h-[480px]"
                          : "h-[340px] sm:h-[390px] md:h-[360px]";

                    return (
                      <motion.article
                        key={car.id}
                        layout
                        initial={
                          shouldReduceMotion
                            ? {
                                opacity: 1,
                              }
                            : {
                                opacity: 0,
                                y: 35,
                                scale: 0.985,
                              }
                        }
                        animate={{
                          opacity: 1,
                          y: 0,
                          scale: 1,
                        }}
                        exit={
                          shouldReduceMotion
                            ? {
                                opacity: 0,
                              }
                            : {
                                opacity: 0,
                                scale: 0.97,
                              }
                        }
                        transition={{
                          duration:
                            shouldReduceMotion ? 0 : 0.7,
                          delay:
                            shouldReduceMotion
                              ? 0
                              : Math.min(
                                  index * 0.06,
                                  0.3
                                ),
                          ease: [
                            0.16,
                            1,
                            0.3,
                            1,
                          ],
                        }}
                        className={`group relative overflow-hidden rounded-[2px] bg-[#eae5dd] ${colSpan}`}
                      >
                        <Link
                          href={`/inventory/${car.id}`}
                          className="block"
                          aria-label={`View ${car.make} ${car.model}`}
                        >
                          <div
                            className={`relative w-full overflow-hidden bg-[#ded8ce] ${imageHeight}`}
                          >
                            <motion.div
                              className="absolute inset-0"
                              whileHover={
                                shouldReduceMotion
                                  ? undefined
                                  : {
                                      scale: 1.045,
                                    }
                              }
                              transition={{
                                duration: 1,
                                ease: [
                                  0.16,
                                  1,
                                  0.3,
                                  1,
                                ],
                              }}
                            >
                              <Image
                                src={
                                  car.heroImage ||
                                  car.thumbnail
                                }
                                alt={`${car.make} ${car.model}`}
                                fill
                                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 66vw"
                                className="object-cover object-center"
                              />
                            </motion.div>

                            {/* Gradients */}

                            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />

                            <div className="absolute inset-0 bg-gradient-to-r from-black/20 via-transparent to-transparent" />

                            {/* Top Metadata */}

                            <div className="absolute left-5 top-5 flex items-center gap-2 sm:left-6 sm:top-6">
                              <span className="bg-[#0d1c17]/70 px-2.5 py-1.5 text-[7px] font-semibold uppercase tracking-[0.2em] text-[#e7e3dc] backdrop-blur-sm sm:text-[8px]">
                                {category}
                              </span>

                              <span className="text-[8px] font-medium tracking-[0.15em] text-white/70">
                                {car.year}
                              </span>

                              {featuredVehicles.includes(
                                car.id
                              ) && (
                                <span className="bg-[#9e6d48]/90 px-2.5 py-1.5 text-[7px] font-semibold uppercase tracking-[0.2em] text-white backdrop-blur-sm sm:text-[8px]">
                                  Featured
                                </span>
                              )}
                            </div>

                            {/* Favorite */}

                            <button
                              type="button"
                              onClick={(event) => {
                                event.preventDefault();
                                event.stopPropagation();

                                toggleFavorite(car.id);
                              }}
                              className="absolute right-5 top-5 z-20 flex h-9 w-9 items-center justify-center rounded-full border border-white/20 bg-black/20 text-white backdrop-blur-md transition-all hover:border-white/50 hover:bg-[#0d1c17] sm:right-6 sm:top-6"
                              aria-label={
                                isFavorite
                                  ? `Remove ${car.make} ${car.model} from favorites`
                                  : `Add ${car.make} ${car.model} to favorites`
                              }
                            >
                              <Heart
                                className={`h-3.5 w-3.5 transition-colors ${
                                  isFavorite
                                    ? "fill-[#c59b72] text-[#c59b72]"
                                    : ""
                                }`}
                              />
                            </button>

                            {/* Vehicle Information */}

                            <div className="absolute bottom-0 left-0 right-0 p-5 sm:p-6 md:p-7">
                              <div className="flex items-end justify-between gap-4">
                                <div>
                                  <span className="mb-1 block text-[8px] font-light uppercase tracking-[0.2em] text-white/55 sm:text-[9px]">
                                    {car.trim}
                                  </span>

                                  <h3
                                    className={`font-serif font-light uppercase leading-[0.92] tracking-[-0.015em] text-white ${
                                      layoutPattern === 0
                                        ? "text-2xl sm:text-3xl md:text-4xl"
                                        : "text-xl sm:text-2xl md:text-3xl"
                                    }`}
                                    style={{
                                      fontVariationSettings:
                                        '"SOFT" 100, "opsz" 144',
                                    }}
                                  >
                                    {car.make}
                                    <br />
                                    {car.model}
                                  </h3>
                                </div>

                                <span className="hidden text-sm font-light text-white sm:block md:text-base">
                                  {formatPrice(car.price)}
                                </span>
                              </div>

                              <div className="mt-4 flex items-end justify-between border-t border-white/20 pt-3">
                                <div>
                                  <span className="block text-[8px] font-light uppercase tracking-[0.12em] text-white/65 sm:text-[9px]">
                                    {car.engineSpec}
                                  </span>

                                  <span className="mt-1 block text-[8px] font-light uppercase tracking-[0.12em] text-white/45 sm:text-[9px]">
                                    {car.powerSpec}
                                  </span>
                                </div>

                                <div className="flex items-center gap-2 text-[8px] font-semibold uppercase tracking-[0.2em] text-[#c59b72] transition-colors group-hover:text-white">
                                  View Vehicle

                                  <ArrowRight className="h-3 w-3 transition-transform duration-300 group-hover:translate-x-1" />
                                </div>
                              </div>

                              {/* Mobile Price */}

                              <div className="mt-3 sm:hidden">
                                <span className="text-sm font-light text-white">
                                  {formatPrice(car.price)}
                                </span>
                              </div>
                            </div>
                          </div>
                        </Link>
                      </motion.article>
                    );
                  })}
                </AnimatePresence>
              </motion.div>
            ) : (
              /* ==========================================================
                 EMPTY STATE
                 ========================================================== */

              <motion.div
                initial={{
                  opacity: 0,
                  y: 20,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                className="flex min-h-[420px] flex-col items-center justify-center border border-[#d6d0c6] px-6 text-center"
              >
                <span className="mb-4 text-[9px] font-semibold uppercase tracking-[0.3em] text-[#9e6d48]">
                  No matching vehicles
                </span>

                <h3 className="max-w-md font-serif text-3xl font-light uppercase tracking-[-0.02em] text-[#0d1c17]">
                  Nothing in the current
                  selection.
                </h3>

                <p className="mt-4 max-w-sm text-xs font-light leading-relaxed text-[#6f706a]">
                  Adjust your filters to explore
                  the full MSYNTRA collection.
                </p>

                <button
                  type="button"
                  onClick={resetFilters}
                  className="mt-8 inline-flex items-center gap-3 bg-[#0d1c17] px-7 py-4 text-[9px] font-semibold uppercase tracking-[0.25em] text-[#e7e3dc] transition-colors hover:bg-[#9e6d48] hover:text-[#0d1c17]"
                >
                  Reset Selection

                  <RotateCcw className="h-3.5 w-3.5" />
                </button>
              </motion.div>
            )}

            {/* Results Footer */}

            {filteredVehicles.length > 0 && (
              <div className="mt-12 flex flex-col items-center justify-between gap-5 border-t border-[#d6d0c6] pt-7 sm:flex-row">
                <span className="text-[8px] font-semibold uppercase tracking-[0.25em] text-[#7a7e7b]">
                  Showing{" "}
                  {filteredVehicles.length} of{" "}
                  {vehicles.length} vehicles
                </span>

                {hasActiveFilters && (
                  <button
                    type="button"
                    onClick={resetFilters}
                    className="flex items-center gap-2 text-[8px] font-semibold uppercase tracking-[0.25em] text-[#9e6d48] transition-colors hover:text-[#0d1c17]"
                  >
                    Clear Selection

                    <X className="h-3 w-3" />
                  </button>
                )}
              </div>
            )}
          </section>
        </>
      )}

      {/* ============================================================
          BOTTOM CTA
          ============================================================ */}

      <section className="relative overflow-hidden bg-[#07130e] px-5 py-20 text-[#e7e3dc] sm:px-8 md:px-12 md:py-24 lg:px-16 xl:px-20">
        <div className="mx-auto flex max-w-[1500px] flex-col justify-between gap-10 lg:flex-row lg:items-end">
          <div className="max-w-3xl">
            <span className="mb-4 block text-[9px] font-semibold uppercase tracking-[0.3em] text-[#b07d58]">
              Can't find what you're looking for?
            </span>

            <h2
              className="font-serif text-4xl font-light uppercase leading-[0.92] tracking-[-0.025em] sm:text-5xl md:text-6xl"
              style={{
                fontVariationSettings:
                  '"SOFT" 100, "opsz" 144',
              }}
            >
              THE RIGHT CAR
              <br />
              MAY BE ONE
              <br />
              CONVERSATION AWAY.
            </h2>
          </div>

          <Link
            href="/contact"
            className="group inline-flex w-fit items-center gap-5 border border-[#e7e3dc]/30 px-7 py-4 text-[9px] font-semibold uppercase tracking-[0.25em] transition-all duration-300 hover:bg-[#e7e3dc] hover:text-[#17251f] sm:px-9"
          >
            Speak With Us

            <ArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </div>

        {/* Single cream divider at the bottom */}

        <div className="absolute bottom-0 left-0 right-0 z-10 h-px bg-[#e7e3dc]/45" />
      </section>
    </main>
  );
}