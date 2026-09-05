import { redirect } from "next/navigation";
import { createClient } from "@/utils/supabase/server";

export default async function AdminProtectedLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const supabase = await createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    redirect("/admin/login");
  }

  const role = user.app_metadata?.role;

  if (role !== "admin") {
    await supabase.auth.signOut();

    redirect("/admin/login");
  }

  return (
    <div className="min-h-screen bg-[#f4f0eb] text-[#0d1c17]">
      {children}
    </div>
  );
}