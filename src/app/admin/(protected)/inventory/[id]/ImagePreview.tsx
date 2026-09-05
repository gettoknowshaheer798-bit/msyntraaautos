"use client";

import { useEffect, useState } from "react";

interface ImagePreviewProps {
  name: string;
  currentSrc: string;
  label: string;
}

export default function ImagePreview({
  name,
  currentSrc,
  label,
}: ImagePreviewProps) {
  const [preview, setPreview] = useState(currentSrc);

  useEffect(() => {
    return () => {
      if (preview.startsWith("blob:")) {
        URL.revokeObjectURL(preview);
      }
    };
  }, [preview]);

  function handleChange(
    event: React.ChangeEvent<HTMLInputElement>
  ) {
    const file = event.target.files?.[0];

    if (!file) {
      return;
    }

    if (preview.startsWith("blob:")) {
      URL.revokeObjectURL(preview);
    }

    const nextPreview = URL.createObjectURL(file);
    setPreview(nextPreview);
  }

  return (
    <div>
      <p className="mb-3 text-[10px] uppercase tracking-[0.2em] text-[#0d1c17]/45">
        {label}
      </p>

      <div className="group relative overflow-hidden bg-[#ded9d2]">
        <img
          src={preview}
          alt={label}
          className="aspect-[4/3] w-full object-cover transition-transform duration-700 group-hover:scale-[1.02]"
        />

        <div className="pointer-events-none absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/45 to-transparent px-4 pb-4 pt-12">
          <p className="text-[9px] uppercase tracking-[0.18em] text-white/80">
            {preview !== currentSrc
              ? "New image selected"
              : "Current image"}
          </p>
        </div>
      </div>

      <label className="mt-4 block cursor-pointer">
        <span className="flex items-center justify-center border border-[#0d1c17]/15 px-4 py-4 text-[10px] uppercase tracking-[0.18em] transition-colors hover:border-[#9e6d48] hover:bg-[#0d1c17]/[0.025]">
          {preview !== currentSrc
            ? "Choose Different Image"
            : "Replace Image"}
        </span>

        <input
          type="file"
          name={name}
          accept="image/jpeg,image/png,image/webp,image/avif"
          onChange={handleChange}
          className="sr-only"
        />
      </label>
    </div>
  );
}