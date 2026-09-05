import Link from "next/link";

import { createVehicle } from "./actions";

export default function NewVehiclePage() {
  return (
    <main className="min-h-screen">
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
              Administration / Inventory / New
            </p>
          </div>

          <Link
            href="/admin/inventory"
            className="text-xs uppercase tracking-[0.2em] text-[#0d1c17]/50 hover:text-[#0d1c17]"
          >
            Back to Inventory
          </Link>
        </div>
      </header>

      <section className="mx-auto max-w-5xl px-6 py-12 lg:px-10 lg:py-20">
        <div className="border-b border-[#0d1c17]/10 pb-10">
          <p className="text-xs uppercase tracking-[0.3em] text-[#9e6d48]">
            New Vehicle
          </p>

          <h1 className="mt-4 text-5xl font-light tracking-tight md:text-7xl">
            Add Vehicle
          </h1>

          <p className="mt-5 max-w-xl text-sm leading-7 text-[#0d1c17]/55">
            Add a vehicle to the MSyntra collection,
            including specifications, imagery and
            financing information.
          </p>
        </div>

        <form
          action={createVehicle}
          encType="multipart/form-data"
          className="mt-12 space-y-16"
        >
          {/* BASIC INFORMATION */}
          <section>
            <SectionHeading
              number="01"
              title="Vehicle Information"
            />

            <div className="mt-8 grid gap-8 md:grid-cols-2">
              <Field
                label="Make"
                name="make"
                placeholder="BMW"
                required
              />

              <Field
                label="Model"
                name="model"
                placeholder="M8 Gran Coupe"
                required
              />

              <Field
                label="Year"
                name="year"
                type="number"
                placeholder="2024"
                required
              />

              <Field
                label="Trim"
                name="trim"
                placeholder="COMPETITION"
                required
              />

              <Field
                label="Price"
                name="price"
                placeholder="$139,900"
                required
              />

              <SelectField
                label="Category"
                name="category"
                options={[
                  ["performance", "Performance"],
                  ["luxury", "Luxury"],
                  ["suv", "SUV"],
                  ["electric", "Electric"],
                ]}
              />

              <SelectField
                label="Status"
                name="status"
                options={[
                  ["available", "Available"],
                  ["reserved", "Reserved"],
                  ["sold", "Sold"],
                  ["coming-soon", "Coming Soon"],
                ]}
              />

              <SelectField
                label="Image Style"
                name="image_style"
                options={[
                  ["photo", "Photo"],
                  ["render", "Render"],
                ]}
              />
            </div>

            <div className="mt-8">
              <label className="mb-3 block text-[10px] uppercase tracking-[0.2em] text-[#0d1c17]/45">
                Description
              </label>

              <textarea
                name="description"
                required
                rows={6}
                placeholder="Describe the vehicle..."
                className="w-full resize-none border border-[#0d1c17]/10 bg-white/50 px-5 py-4 text-sm outline-none transition-colors placeholder:text-[#0d1c17]/25 focus:border-[#9e6d48]"
              />
            </div>

            <label className="mt-6 flex cursor-pointer items-center gap-3">
              <input
                type="checkbox"
                name="featured"
                className="h-4 w-4 accent-[#0d1c17]"
              />

              <span className="text-xs uppercase tracking-[0.15em]">
                Featured vehicle
              </span>
            </label>
          </section>

          {/* TECHNICAL */}
          <section>
            <SectionHeading
              number="02"
              title="Technical Specifications"
            />

            <div className="mt-8 grid gap-8 md:grid-cols-2">
              <Field
                label="Engine"
                name="engine"
                placeholder="4.4L Twin-Turbo V8"
                required
              />

              <Field
                label="Power"
                name="power"
                placeholder="617 HP"
                required
              />

              <Field
                label="Torque"
                name="torque"
                placeholder="553 lb-ft"
              />

              <Field
                label="Drivetrain"
                name="drivetrain"
                placeholder="AWD"
              />

              <Field
                label="Transmission"
                name="transmission"
                placeholder="8-Speed Automatic"
              />

              <Field
                label="Fuel Type"
                name="fuel_type"
                placeholder="Petrol"
              />
            </div>
          </section>

          {/* IMAGES */}
          <section>
            <SectionHeading
              number="03"
              title="Vehicle Images"
            />

            <p className="mt-4 text-sm leading-6 text-[#0d1c17]/50">
              Images are uploaded directly to the
              private admin-controlled vehicle image
              storage system.
            </p>

            <div className="mt-8 grid gap-8 md:grid-cols-3">
              <FileField
                label="Hero Image"
                name="hero_image"
                required
              />

              <FileField
                label="Thumbnail"
                name="thumbnail"
                required
              />

              <FileField
                label="Action Image"
                name="action_image"
                required
              />
            </div>

            <div className="mt-8">
              <FileField
                label="Gallery Images"
                name="gallery_images"
                multiple
              />

              <p className="mt-3 text-xs text-[#0d1c17]/40">
                Select multiple images at once.
              </p>
            </div>
          </section>

          {/* COLORS */}
          <section>
            <SectionHeading
              number="04"
              title="Colors"
            />

            <div className="mt-8">
              <label className="mb-3 block text-[10px] uppercase tracking-[0.2em] text-[#0d1c17]/45">
                Colors
              </label>

              <textarea
                name="colors"
                rows={5}
                placeholder={`Black|#111111
White|#FFFFFF
Silver|#C0C0C0`}
                className="w-full resize-none border border-[#0d1c17]/10 bg-white/50 px-5 py-4 font-mono text-sm outline-none transition-colors placeholder:text-[#0d1c17]/25 focus:border-[#9e6d48]"
              />

              <p className="mt-3 text-xs text-[#0d1c17]/40">
                One color per line: Name|HEX
              </p>
            </div>
          </section>

          {/* FEATURES */}
          <section>
            <SectionHeading
              number="05"
              title="Features"
            />

            <div className="mt-8">
              <label className="mb-3 block text-[10px] uppercase tracking-[0.2em] text-[#0d1c17]/45">
                Features
              </label>

              <textarea
                name="features"
                rows={7}
                placeholder={`M Carbon Ceramic Brakes
M Sport Exhaust
Adaptive M Suspension
Carbon Fiber Roof`}
                className="w-full resize-none border border-[#0d1c17]/10 bg-white/50 px-5 py-4 text-sm outline-none transition-colors placeholder:text-[#0d1c17]/25 focus:border-[#9e6d48]"
              />

              <p className="mt-3 text-xs text-[#0d1c17]/40">
                One feature per line.
              </p>
            </div>
          </section>

          {/* HISTORY */}
          <section>
            <SectionHeading
              number="06"
              title="History Checklist"
            />

            <div className="mt-8">
              <textarea
                name="history"
                rows={7}
                placeholder={`No accident history
Single owner
Full service history
Original documentation`}
                className="w-full resize-none border border-[#0d1c17]/10 bg-white/50 px-5 py-4 text-sm outline-none transition-colors placeholder:text-[#0d1c17]/25 focus:border-[#9e6d48]"
              />

              <p className="mt-3 text-xs text-[#0d1c17]/40">
                One item per line.
              </p>
            </div>
          </section>

          {/* FINANCING */}
          <section>
            <SectionHeading
              number="07"
              title="Financing Estimate"
            />

            <div className="mt-8 grid gap-8 md:grid-cols-3">
              <Field
                label="Monthly"
                name="monthly"
                placeholder="$2,850"
              />

              <Field
                label="Term"
                name="term"
                placeholder="60 months"
              />

              <Field
                label="APR"
                name="apr"
                placeholder="7.9%"
              />
            </div>
          </section>

          {/* SUBMIT */}
          <div className="border-t border-[#0d1c17]/10 pt-10">
            <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-center">
              <div>
                <p className="text-xs uppercase tracking-[0.2em] text-[#0d1c17]/40">
                  Ready?
                </p>

                <p className="mt-2 text-sm text-[#0d1c17]/55">
                  Create this vehicle in the MSyntra
                  inventory.
                </p>
              </div>

              <button
                type="submit"
                className="bg-[#0d1c17] px-8 py-5 text-xs uppercase tracking-[0.25em] text-[#f4f0eb] transition-opacity hover:opacity-90"
              >
                Create Vehicle
              </button>
            </div>
          </div>
        </form>
      </section>
    </main>
  );
}

function SectionHeading({
  number,
  title,
}: {
  number: string;
  title: string;
}) {
  return (
    <div className="flex items-baseline gap-5 border-b border-[#0d1c17]/10 pb-5">
      <span className="text-xs tracking-[0.2em] text-[#9e6d48]">
        {number}
      </span>

      <h2 className="text-2xl font-light">
        {title}
      </h2>
    </div>
  );
}

function Field({
  label,
  name,
  placeholder,
  type = "text",
  required = false,
}: {
  label: string;
  name: string;
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
      </label>

      <input
        id={name}
        name={name}
        type={type}
        placeholder={placeholder}
        required={required}
        className="w-full border-b border-[#0d1c17]/15 bg-transparent px-0 py-4 text-sm outline-none transition-colors placeholder:text-[#0d1c17]/25 focus:border-[#9e6d48]"
      />
    </div>
  );
}

function SelectField({
  label,
  name,
  options,
}: {
  label: string;
  name: string;
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
        defaultValue={options[0][0]}
        className="w-full border-b border-[#0d1c17]/15 bg-transparent px-0 py-4 text-sm outline-none focus:border-[#9e6d48]"
      >
        {options.map(([value, label]) => (
          <option
            key={value}
            value={value}
          >
            {label}
          </option>
        ))}
      </select>
    </div>
  );
}

function FileField({
  label,
  name,
  multiple = false,
  required = false,
}: {
  label: string;
  name: string;
  multiple?: boolean;
  required?: boolean;
}) {
  return (
    <label className="block cursor-pointer">
      <span className="mb-3 block text-[10px] uppercase tracking-[0.2em] text-[#0d1c17]/45">
        {label}
      </span>

      <span className="flex min-h-32 items-center justify-center border border-dashed border-[#0d1c17]/20 bg-white/30 px-6 text-center text-xs uppercase tracking-[0.15em] text-[#0d1c17]/40 transition-colors hover:border-[#9e6d48] hover:bg-white/50">
        Choose {multiple ? "Images" : "Image"}
      </span>

      <input
        type="file"
        name={name}
        accept="image/jpeg,image/png,image/webp,image/avif"
        multiple={multiple}
        required={required}
        className="sr-only"
      />
    </label>
  );
}