"use client";

import { FormEvent, useState } from "react";
import { useRouter } from "next/navigation";
import { createClient } from "@/utils/supabase/client";

export default function AdminLoginPage() {
  const router = useRouter();
  const supabase = createClient();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  async function handleLogin(
    event: FormEvent<HTMLFormElement>
  ) {
    event.preventDefault();

    setLoading(true);
    setError("");

    const { data, error } =
      await supabase.auth.signInWithPassword({
        email,
        password,
      });

    if (error || !data.user) {
      setError(
        error?.message ??
          "Unable to sign in."
      );

      setLoading(false);
      return;
    }

    const role =
      data.user.app_metadata?.role;

    if (role !== "admin") {
      await supabase.auth.signOut();

      setError(
        "This account does not have administrator access."
      );

      setLoading(false);
      return;
    }

    router.replace("/admin/dashboard");
    router.refresh();
  }

  return (
    <main className="flex min-h-screen items-center justify-center bg-[#0d1c17] px-6 text-[#f4f0eb]">
      <div className="w-full max-w-md">
        <div className="mb-12">
          <p className="text-xs uppercase tracking-[0.35em] text-[#9e6d48]">
            MSYNTRA
          </p>

          <h1 className="mt-4 text-4xl font-light tracking-tight">
            Automotive
          </h1>

          <p className="mt-3 text-sm text-white/50">
            Private administration portal
          </p>
        </div>

        <form
          onSubmit={handleLogin}
          className="space-y-6"
        >
          <div>
            <label
              htmlFor="email"
              className="mb-2 block text-xs uppercase tracking-[0.2em] text-white/50"
            >
              Email
            </label>

            <input
              id="email"
              type="email"
              value={email}
              onChange={(event) =>
                setEmail(event.target.value)
              }
              required
              autoComplete="email"
              className="w-full border-b border-white/20 bg-transparent px-0 py-4 text-sm outline-none transition-colors placeholder:text-white/20 focus:border-[#9e6d48]"
              placeholder="admin@msyntra.com"
            />
          </div>

          <div>
            <label
              htmlFor="password"
              className="mb-2 block text-xs uppercase tracking-[0.2em] text-white/50"
            >
              Password
            </label>

            <input
              id="password"
              type="password"
              value={password}
              onChange={(event) =>
                setPassword(event.target.value)
              }
              required
              autoComplete="current-password"
              className="w-full border-b border-white/20 bg-transparent px-0 py-4 text-sm outline-none transition-colors placeholder:text-white/20 focus:border-[#9e6d48]"
              placeholder="••••••••"
            />
          </div>

          {error && (
            <div className="border border-red-400/20 bg-red-400/5 px-4 py-3 text-sm text-red-300">
              {error}
            </div>
          )}

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-[#f4f0eb] px-6 py-4 text-xs font-medium uppercase tracking-[0.25em] text-[#0d1c17] transition-opacity hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-50"
          >
            {loading
              ? "Authenticating..."
              : "Enter Portal"}
          </button>
        </form>
      </div>
    </main>
  );
}