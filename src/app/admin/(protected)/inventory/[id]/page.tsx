import Link from "next/link";
import { notFound } from "next/navigation";

import { createClient } from "@/utils/supabase/server";

import {
  deleteVehicle,
  updateVehicle,
} from "./actions";

import DeleteVehicleButton from "./DeleteVehicleButton";
import GalleryManager from "./GalleryManager";
import ImagePreview from "./ImagePreview";
import SubmitButton from "./SubmitButton";

interface PageProps {
  params: Promise<{
    id: string;
  }>;
}

type Vehicle = {
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

  colors: {
    name: string;
    hex: string;
  }[];

  features: string[];

  specs: {
    engine?: string;
    power?: string;
    torque?: string;
    drivetrain?: string;
    transmission?: string;
    fuelType?: string;
  } | null;

  history_checklist: string[];

  financing_estimate: {
    monthly?: string;
    term?: string;
    apr?: string;
  } | null;

  price: string;

  category: string | null;
  status: string;
  featured: boolean;

  gallery_images: string[];
};

export default async function EditVehiclePage({
  params,
}: PageProps) {
  const { id } = await params;

  const supabase = await createClient();

  const {
    data: vehicle,
    error,
  } = await supabase
    .from("vehicles")
    .select("*")
    .eq("id", id)
    .single();

  if (error || !vehicle) {
    notFound();
  }

  const data = vehicle as Vehicle;

  return (
    <main className="min-h-screen">
      {/* HEADER */}
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
              Administration / Inventory / Edit
            </p>
          </div>

          <div className="flex items-center gap-6">
            <Link
              href="/admin/inventory"
              className="text-xs uppercase tracking-[0.2em] text-[#0d1c17]/50 transition-colors hover:text-[#0d1c17]"
            >
              Inventory
            </Link>

            <Link
              href={`/inventory/${data.id}`}
              target="_blank"
              className="text-xs uppercase tracking-[0.2em] text-[#0d1c17]/50 transition-colors hover:text-[#0d1c17]"
            >
              View Vehicle ↗
            </Link>
          </div>
        </div>
      </header>

      {/* CONTENT */}
      <section className="mx-auto max-w-6xl px-6 py-12 lg:px-10 lg:py-20">
        {/* TITLE */}
        <div className="border-b border-[#0d1c17]/10 pb-10">
          <p className="text-xs uppercase tracking-[0.3em] text-[#9e6d48]">
            Edit Vehicle
          </p>

          <h1 className="mt-4 text-5xl font-light tracking-tight md:text-7xl">
            {data.make} {data.model}
          </h1>

          <p className="mt-4 text-sm uppercase tracking-[0.15em] text-[#0d1c17]/40">
            {data.year} · {data.trim}
          </p>
        </div>

        {/* MAIN FORM */}
        <form
          action={updateVehicle.bind(
            null,
            data.id
          )}
          className="mt-12 space-y-16"
        >
          {/* 01 VEHICLE INFORMATION */}
          <Section
            number="01"
            title="Vehicle Information"
          >
            <div className="grid gap-8 md:grid-cols-2">
              <Field
                label="Make"
                name="make"
                defaultValue={data.make}
                required
              />

              <Field
                label="Model"
                name="model"
                defaultValue={data.model}
                required
              />

              <Field
                label="Year"
                name="year"
                type="number"
                defaultValue={String(data.year)}
                required
              />

              <Field
                label="Trim"
                name="trim"
                defaultValue={data.trim}
                required
              />

              <Field
                label="Price"
                name="price"
                defaultValue={data.price}
                required
              />

              <SelectField
                label="Category"
                name="category"
                defaultValue={
                  data.category ??
                  "performance"
                }
                options={[
                  [
                    "performance",
                    "Performance",
                  ],
                  ["luxury", "Luxury"],
                  ["suv", "SUV"],
                  ["electric", "Electric"],
                ]}
              />

              <SelectField
                label="Status"
                name="status"
                defaultValue={data.status}
                options={[
                  [
                    "available",
                    "Available",
                  ],
                  [
                    "reserved",
                    "Reserved",
                  ],
                  ["sold", "Sold"],
                  [
                    "coming-soon",
                    "Coming Soon",
                  ],
                ]}
              />

              <SelectField
                label="Image Style"
                name="image_style"
                defaultValue={
                  data.image_style
                }
                options={[
                  ["photo", "Photo"],
                  ["render", "Render"],
                ]}
              />
            </div>

            <Textarea
              label="Description"
              name="description"
              defaultValue={
                data.description
              }
              required
            />

            <label className="mt-6 flex cursor-pointer items-center gap-3">
              <input
                type="checkbox"
                name="featured"
                defaultChecked={
                  data.featured
                }
                className="h-4 w-4 accent-[#0d1c17]"
              />

              <span className="text-xs uppercase tracking-[0.15em]">
                Featured vehicle
              </span>
            </label>
          </Section>

          {/* 02 TECHNICAL SPECIFICATIONS */}
          <Section
            number="02"
            title="Technical Specifications"
          >
            <div className="grid gap-8 md:grid-cols-2">
              <Field
                label="Engine"
                name="engine"
                defaultValue={
                  data.specs?.engine ??
                  data.engine_spec
                }
              />

              <Field
                label="Power"
                name="power"
                defaultValue={
                  data.specs?.power ??
                  data.power_spec
                }
              />

              <Field
                label="Torque"
                name="torque"
                defaultValue={
                  data.specs?.torque ?? ""
                }
              />

              <Field
                label="Drivetrain"
                name="drivetrain"
                defaultValue={
                  data.specs?.drivetrain ?? ""
                }
              />

              <Field
                label="Transmission"
                name="transmission"
                defaultValue={
                  data.specs?.transmission ?? ""
                }
              />

              <Field
                label="Fuel Type"
                name="fuel_type"
                defaultValue={
                  data.specs?.fuelType ?? ""
                }
              />
            </div>
          </Section>

          {/* 03 VEHICLE IMAGES */}
          <Section
            number="03"
            title="Vehicle Images"
          >
            <div className="grid gap-8 md:grid-cols-3">
              <ImagePreview
                label="Hero Image"
                name="hero_image"
                currentSrc={data.hero_image}
              />

              <ImagePreview
                label="Thumbnail"
                name="thumbnail"
                currentSrc={data.thumbnail}
              />

              <ImagePreview
                label="Action Image"
                name="action_image"
                currentSrc={data.action_image}
              />
            </div>

            {/* ADD GALLERY */}
            <div className="mt-12 border-t border-[#0d1c17]/10 pt-10">
              <p className="text-[10px] uppercase tracking-[0.2em] text-[#0d1c17]/45">
                Add Gallery Images
              </p>

              <p className="mt-2 max-w-xl text-xs leading-6 text-[#0d1c17]/40">
                Upload additional images to the
                vehicle gallery. Existing images
                will remain untouched.
              </p>

              <label className="mt-6 flex cursor-pointer flex-col items-center justify-center border border-dashed border-[#0d1c17]/20 bg-white/30 px-6 py-12 text-center transition-colors hover:border-[#9e6d48] hover:bg-white/50">
                <span className="text-[10px] uppercase tracking-[0.2em] text-[#0d1c17]/60">
                  Choose Gallery Images
                </span>

                <span className="mt-3 text-xs text-[#0d1c17]/35">
                  JPEG, PNG, WEBP or AVIF
                </span>

                <input
                  type="file"
                  name="gallery_images"
                  accept="image/jpeg,image/png,image/webp,image/avif"
                  multiple
                  className="sr-only"
                />
              </label>
            </div>

            {/* CURRENT GALLERY */}
            <div className="mt-12">
              <div className="flex items-baseline justify-between">
                <div>
                  <p className="text-[10px] uppercase tracking-[0.2em] text-[#0d1c17]/45">
                    Current Gallery
                  </p>

                  <p className="mt-2 text-xs text-[#0d1c17]/40">
                    {data.gallery_images?.length ??
                      0}{" "}
                    image
                    {(data.gallery_images
                      ?.length ?? 0) === 1
                      ? ""
                      : "s"}
                  </p>
                </div>
              </div>

              <div className="mt-6">
                <GalleryManager
                  vehicleId={data.id}
                  images={
                    data.gallery_images ?? []
                  }
                />
              </div>
            </div>
          </Section>

          {/* 04 COLORS */}
          <Section
            number="04"
            title="Colors"
          >
            <Textarea
              label="Colors"
              name="colors"
              defaultValue={(
                data.colors ?? []
              )
                .map(
                  (color) =>
                    `${color.name}|${color.hex}`
                )
                .join("\n")}
              placeholder={`Black|#111111
White|#FFFFFF
Silver|#C0C0C0`}
            />

            <p className="mt-3 text-xs text-[#0d1c17]/40">
              One color per line using:
              Name|HEX
            </p>
          </Section>

          {/* 05 FEATURES */}
          <Section
            number="05"
            title="Features"
          >
            <Textarea
              label="Features"
              name="features"
              defaultValue={(
                data.features ?? []
              ).join("\n")}
              placeholder={`Sport Chrono Package
Carbon Ceramic Brakes
Premium Interior`}
            />

            <p className="mt-3 text-xs text-[#0d1c17]/40">
              One feature per line.
            </p>
          </Section>

          {/* 06 HISTORY */}
          <Section
            number="06"
            title="History Checklist"
          >
            <Textarea
              label="History"
              name="history"
              defaultValue={(
                data.history_checklist ??
                []
              ).join("\n")}
              placeholder={`No accident history
Single owner
Full service history`}
            />

            <p className="mt-3 text-xs text-[#0d1c17]/40">
              One history item per line.
            </p>
          </Section>

          {/* 07 FINANCING */}
          <Section
            number="07"
            title="Financing Estimate"
          >
            <div className="grid gap-8 md:grid-cols-3">
              <Field
                label="Monthly"
                name="monthly"
                defaultValue={
                  data
                    .financing_estimate
                    ?.monthly ?? ""
                }
              />

              <Field
                label="Term"
                name="term"
                defaultValue={
                  data
                    .financing_estimate
                    ?.term ?? ""
                }
              />

              <Field
                label="APR"
                name="apr"
                defaultValue={
                  data
                    .financing_estimate
                    ?.apr ?? ""
                }
              />
            </div>
          </Section>

          {/* SAVE */}
          <div className="border-t border-[#0d1c17]/10 pt-10">
            <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-center">
              <div>
                <p className="text-xs uppercase tracking-[0.2em] text-[#0d1c17]/40">
                  Vehicle ID
                </p>

                <p className="mt-2 font-mono text-xs text-[#0d1c17]/60">
                  {data.id}
                </p>
              </div>

              <SubmitButton />
            </div>
          </div>
        </form>

        {/* DANGER ZONE */}
        <section className="mt-20 border-t border-red-900/10 pt-10">
          <p className="text-[10px] uppercase tracking-[0.25em] text-red-900/50">
            Danger Zone
          </p>

          <h2 className="mt-3 text-2xl font-light">
            Delete this vehicle
          </h2>

          <p className="mt-3 max-w-xl text-sm leading-7 text-[#0d1c17]/50">
            This permanently removes the vehicle
            from the MSyntra inventory and
            deletes its associated Storage
            images.
          </p>

          <form
            action={deleteVehicle.bind(
              null,
              data.id
            )}
            className="mt-6"
          >
            <DeleteVehicleButton
              vehicleName={`${data.year} ${data.make} ${data.model}`}
            />
          </form>
        </section>
      </section>
    </main>
  );
}

/* ================================================= */
/* SECTION                                           */
/* ================================================= */

function Section({
  number,
  title,
  children,
}: {
  number: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section>
      <div className="flex items-baseline gap-5 border-b border-[#0d1c17]/10 pb-5">
        <span className="text-xs tracking-[0.2em] text-[#9e6d48]">
          {number}
        </span>

        <h2 className="text-2xl font-light">
          {title}
        </h2>
      </div>

      <div className="mt-8">
        {children}
      </div>
    </section>
  );
}

/* ================================================= */
/* FIELD                                             */
/* ================================================= */

function Field({
  label,
  name,
  defaultValue,
  placeholder,
  type = "text",
  required = false,
}: {
  label: string;
  name: string;
  defaultValue?: string;
  placeholder?: string;
  type?: string;
  required?: boolean;
}) {
  return (
    <div>
      <label
        htmlFor={name}
        className="mb-3 block text-[10px] uppercase tracking-[0.2em] text-[#0d1c17]/45"
      >
        {label}
        {required && (
          <span className="ml-1 text-[#9e6d48]">
            *
          </span>
        )}
      </label>

      <input
        id={name}
        name={name}
        type={type}
        defaultValue={defaultValue}
        placeholder={placeholder}
        required={required}
        className="w-full border-b border-[#0d1c17]/15 bg-transparent px-0 py-4 text-sm outline-none transition-colors placeholder:text-[#0d1c17]/25 focus:border-[#9e6d48]"
      />
    </div>
  );
}

/* ================================================= */
/* TEXTAREA                                          */
/* ================================================= */

function Textarea({
  label,
  name,
  defaultValue,
  placeholder,
  required = false,
}: {
  label: string;
  name: string;
  defaultValue?: string;
  placeholder?: string;
  required?: boolean;
}) {
  return (
    <div className="mt-8">
      <label
        htmlFor={name}
        className="mb-3 block text-[10px] uppercase tracking-[0.2em] text-[#0d1c17]/45"
      >
        {label}
        {required && (
          <span className="ml-1 text-[#9e6d48]">
            *
          </span>
        )}
      </label>

      <textarea
        id={name}
        name={name}
        rows={6}
        defaultValue={defaultValue}
        placeholder={placeholder}
        required={required}
        className="w-full resize-none border border-[#0d1c17]/10 bg-white/50 px-5 py-4 text-sm leading-7 outline-none transition-colors placeholder:text-[#0d1c17]/25 focus:border-[#9e6d48]"
      />
    </div>
  );
}

/* ================================================= */
/* SELECT                                            */
/* ================================================= */

function SelectField({
  label,
  name,
  defaultValue,
  options,
}: {
  label: string;
  name: string;
  defaultValue: string;
  options: [string, string][];
}) {
  return (
    <div>
      <label
        htmlFor={name}
        className="mb-3 block text-[10px] uppercase tracking-[0.2em] text-[#0d1c17]/45"
      >
        {label}
      </label>

      <select
        id={name}
        name={name}
        defaultValue={defaultValue}
        className="w-full border-b border-[#0d1c17]/15 bg-transparent px-0 py-4 text-sm outline-none focus:border-[#9e6d48]"
      >
        {options.map(
          ([value, label]) => (
            <option
              key={value}
              value={value}
            >
              {label}
            </option>
          )
        )}
      </select>
    </div>
  );
}