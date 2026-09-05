"use client";

import { useFormStatus } from "react-dom";

export default function SubmitButton() {
  const { pending } =
    useFormStatus();

  return (
    <button
      type="submit"
      disabled={pending}
      className="bg-[#0d1c17] px-10 py-5 text-xs uppercase tracking-[0.25em] text-[#f4f0eb] transition-opacity hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-50"
    >
      {pending
        ? "Saving..."
        : "Save Changes"}
    </button>
  );
}