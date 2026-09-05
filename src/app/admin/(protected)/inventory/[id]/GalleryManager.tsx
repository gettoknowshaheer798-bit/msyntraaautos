"use client";

import { useState } from "react";

import { deleteGalleryImage } from "./actions";

interface GalleryManagerProps {
  vehicleId: string;
  images: string[];
}

export default function GalleryManager({
  vehicleId,
  images,
}: GalleryManagerProps) {
  const [deleting, setDeleting] =
    useState<string | null>(null);

  const handleDelete = async (
    image: string
  ) => {
    const confirmed = window.confirm(
      "Delete this gallery image permanently?"
    );

    if (!confirmed) {
      return;
    }

    try {
      setDeleting(image);

      await deleteGalleryImage(
        vehicleId,
        image
      );
    } catch (error) {
      console.error(error);

      window.alert(
        error instanceof Error
          ? error.message
          : "Failed to delete image."
      );

      setDeleting(null);
    }
  };

  if (images.length === 0) {
    return (
      <div className="border border-dashed border-[#0d1c17]/15 bg-white/20 px-6 py-16 text-center">
        <div className="mx-auto flex h-12 w-12 items-center justify-center border border-[#0d1c17]/10">
          <span className="text-lg font-light text-[#0d1c17]/30">
            +
          </span>
        </div>

        <p className="mt-5 text-xs uppercase tracking-[0.18em] text-[#0d1c17]/45">
          No gallery images
        </p>

        <p className="mx-auto mt-2 max-w-sm text-xs leading-6 text-[#0d1c17]/30">
          Additional vehicle photography will
          appear here once uploaded.
        </p>
      </div>
    );
  }

  return (
    <div>
      {/* Gallery Header */}
      <div className="mb-5 flex items-center justify-between border-b border-[#0d1c17]/10 pb-4">
        <p className="text-[9px] uppercase tracking-[0.2em] text-[#0d1c17]/40">
          {images.length}{" "}
          {images.length === 1
            ? "Image"
            : "Images"}
        </p>

        <p className="text-[9px] uppercase tracking-[0.15em] text-[#0d1c17]/25">
          Gallery
        </p>
      </div>

      {/* Gallery Grid */}
      <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
        {images.map((image, index) => {
          const isDeleting =
            deleting === image;

          return (
            <div
              key={image}
              className={`group relative overflow-hidden bg-[#ded9d2] transition-opacity duration-300 ${
                isDeleting
                  ? "opacity-40"
                  : "opacity-100"
              }`}
            >
              {/* Image */}
              <img
                src={image}
                alt={`Gallery image ${
                  index + 1
                }`}
                className="aspect-[4/3] w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
              />

              {/* Top Number */}
              <div className="absolute left-3 top-3">
                <span className="inline-flex bg-[#0d1c17]/75 px-2 py-1 text-[8px] uppercase tracking-[0.15em] text-white/80 backdrop-blur-sm">
                  {String(index + 1).padStart(
                    2,
                    "0"
                  )}
                </span>
              </div>

              {/* Hover Overlay */}
              <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-black/80 via-black/10 to-transparent opacity-100 transition-opacity duration-300 md:opacity-0 md:group-hover:opacity-100">
                <div className="flex items-center justify-between gap-3 px-3 pb-3">
                  <span className="text-[8px] uppercase tracking-[0.15em] text-white/70">
                    Gallery{" "}
                    {String(index + 1).padStart(
                      2,
                      "0"
                    )}
                  </span>

                  <button
                    type="button"
                    disabled={isDeleting}
                    onClick={() =>
                      handleDelete(image)
                    }
                    className="border border-white/30 px-2.5 py-1.5 text-[8px] uppercase tracking-[0.15em] text-white transition-colors hover:border-white hover:bg-white hover:text-[#0d1c17] disabled:cursor-not-allowed disabled:opacity-40"
                  >
                    {isDeleting
                      ? "Deleting..."
                      : "Delete"}
                  </button>
                </div>
              </div>

              {/* Mobile Action Bar */}
              <div className="flex items-center justify-between border-t border-white/10 bg-[#0d1c17] px-3 py-2.5 md:hidden">
                <span className="text-[8px] uppercase tracking-[0.15em] text-white/50">
                  Image{" "}
                  {String(index + 1).padStart(
                    2,
                    "0"
                  )}
                </span>

                <button
                  type="button"
                  disabled={isDeleting}
                  onClick={() =>
                    handleDelete(image)
                  }
                  className="text-[8px] uppercase tracking-[0.15em] text-white/80 transition-opacity hover:opacity-60 disabled:opacity-40"
                >
                  {isDeleting
                    ? "Deleting..."
                    : "Delete"}
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}