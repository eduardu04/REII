export const API_URL = process.env.NEXT_PUBLIC_API_URL ?? "http://localhost:8000";

export type AnalysisInput = {
  sale_price: number;
  sale_costs: number;
  monthly_rent: number;
  annual_costs: number;
  years: number;
  discount_rate: number;
  final_value: number;
};

export async function analyse(input: AnalysisInput): Promise<Record<string, unknown>> {
  const res = await fetch(`${API_URL}/api/analysis`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(input),
  });
  if (!res.ok) throw new Error(`A API respondeu ${res.status}`);
  return res.json();
}
