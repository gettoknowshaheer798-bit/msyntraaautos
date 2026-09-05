"use client";

import { useFormStatus } from "react-dom";

interface DeleteVehicleButtonProps {
  vehicleName: string;
}

export default function DeleteVehicleButton({
  vehicleName,
}: DeleteVehicleButtonProps) {
  const { pending } = useFormStatus();

  function handleClick(
    event: React.MouseEvent<HTMLButtonElement>
  ) {
    const confirmed = window.confirm(
      `Delete ${vehicleName} permanently?\n\nThis cannot be undone.`
    );

    if (!confirmed) {
      event.preventDefault();
    }
  }

  return (
    <button
      type="submit"
      onClick={handleClick}
      disabled={pending}
      className="border border-red-900/20 px-6 py-4 text-xs uppercase tracking-[0.18em] text-red-900 transition-colors hover:border-red-900 hover:bg-red-900 hover:text-white disabled:cursor-not-allowed disabled:opacity-40"
    >
      {pending ? "Deleting..." : "Delete Vehicle"}
    </button>
  );
}