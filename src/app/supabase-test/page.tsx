import { createClient } from "@/utils/supabase/server";

export default async function SupabaseTestPage() {
  const supabase = await createClient();

  const { data, error } = await supabase
    .from("vehicles")
    .select("*");

  return (
    <main className="p-10">
      <h1 className="text-3xl font-bold">
        Supabase Connection Test
      </h1>

      <pre className="mt-8 whitespace-pre-wrap">
        {JSON.stringify(
          {
            data,
            error,
          },
          null,
          2
        )}
      </pre>
    </main>
  );
}