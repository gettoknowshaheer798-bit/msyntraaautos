import FinancingCalculatorSection from "./_components/FinancingCalculatorSection";
import { getAvailableVehicles } from "@/utils/supabase/vehicles";

export default async function FinancingPage() {
  const vehicles = await getAvailableVehicles();

  return (
    <main>
      <FinancingCalculatorSection vehicles={vehicles} />
    </main>
  );
}