import { SimulacaoForm } from "@/components/simulacao-form";

export default function Home() {
  return (
    <main className="mx-auto w-full max-w-xl px-6 py-12">
      <h1 className="text-3xl font-semibold tracking-tight">REII</h1>
      <p className="mt-2 text-ink-2">Vender ou arrendar? Simulação inicial do motor de cálculo.</p>
      <SimulacaoForm />
    </main>
  );
}
