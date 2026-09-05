import { createClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseSecretKey = process.env.SUPABASE_SECRET_KEY;

if (!supabaseUrl) {
  throw new Error(
    "Missing NEXT_PUBLIC_SUPABASE_URL"
  );
}

if (!supabaseSecretKey) {
  throw new Error(
    "Missing SUPABASE_SECRET_KEY"
  );
}

/**
 * Server-only Supabase client.
 *
 * NEVER import this file into a Client Component.
 * NEVER expose SUPABASE_SECRET_KEY to the browser.
 */
export const supabaseAdmin = createClient(
  supabaseUrl,
  supabaseSecretKey,
  {
    auth: {
      autoRefreshToken: false,
      persistSession: false,
    },
  }
);