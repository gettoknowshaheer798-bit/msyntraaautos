"use server";

import { supabaseAdmin } from "@/utils/supabase/admin";

type TradeInInput = {
  make: string;
  model: string;
  year: string;
  trim: string;
  mileage: string;
  condition: string;
  accidents: string;
  notes: string;
  fullName: string;
  email: string;
  phone: string;
  zip: string;
};

export type TradeInResult =
  | { success: true }
  | { success: false; error: string };

function isValidEmail(value: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

export async function submitTradeIn(
  input: TradeInInput
): Promise<TradeInResult> {
  const {
    make,
    model,
    year,
    trim,
    mileage,
    condition,
    accidents,
    notes,
    fullName,
    email,
    phone,
    zip,
  } = input;

  /*
   * Server-side validation — mirrors the client-side checks in
   * page.tsx, but never trust the client alone.
   */

  if (!make.trim() || !model.trim() || !year || !mileage) {
    return {
      success: false,
      error: "Please complete all required vehicle fields.",
    };
  }

  const yearNum = Number(year);
  const mileageNum = Number(mileage);
  const maxYear = new Date().getFullYear() + 1;

  if (!Number.isFinite(yearNum) || yearNum < 1980 || yearNum > maxYear) {
    return { success: false, error: `Please provide a valid year between 1980 and ${maxYear}.` };
  }

  if (!Number.isFinite(mileageNum) || mileageNum < 0) {
    return { success: false, error: "Please provide a valid mileage." };
  }

  if (!condition || !accidents) {
    return {
      success: false,
      error: "Please complete all required condition fields.",
    };
  }

  if (!fullName.trim() || !email.trim() || !phone.trim() || !zip.trim()) {
    return {
      success: false,
      error: "Please complete all required contact fields.",
    };
  }

  if (!isValidEmail(email)) {
    return { success: false, error: "Please enter a valid email address." };
  }

  /*
   * Insert using the service-role client, since there is no
   * authenticated user for a public trade-in form.
   */

  const { error } = await supabaseAdmin.from("trade_in_requests").insert({
    make: make.trim(),
    model: model.trim(),
    year: yearNum,
    trim: trim.trim() || null,
    mileage: mileageNum,

    condition,
    accident_history: accidents,
    notes: notes || null,

    full_name: fullName.trim(),
    email: email.trim(),
    phone: phone.trim(),
    zip: zip.trim(),
  });

  if (error) {
    console.error("Failed to submit trade-in request:", error);
    return {
      success: false,
      error: "Something went wrong submitting your request. Please try again.",
    };
  }

  return { success: true };
}