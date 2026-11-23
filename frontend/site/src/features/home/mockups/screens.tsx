import Image from "next/image";
import { ArrowRight, Check, MapPin, Plus } from "lucide-react";

import { Logo } from "@/components/brand/logo";
import { demo, photos, portfolio } from "@/content/home";
import { formatEuro, formatEuroMonth } from "@/lib/format";
import { cn } from "@/lib/utils";

import { AppShell } from "./app-shell";

/*
 * Ecrãs da app REII recriados a partir de REII_Ecras.pdf, para a página Início.
 * Conteúdo estático com valores de demonstração; servem para mostrar o produto real.
 */

function Card({ className, children }: { className?: string; children: React.ReactNode }) {
  return <div className={cn("rounded-xl bg-white ring-1 ring-line", className)}>{children}</div>;
}

function PageTitle({ eyebrow, title, text, action }: { eyebrow?: string; title: string; text: string; action?: React.ReactNode }) {
  return (
    <div className="flex flex-wrap items-end justify-between gap-3">
      <div>
        {eyebrow && <span className="rounded-full bg-rent-soft px-2 py-0.5 text-[0.62rem] font-semibold text-rent">{eyebrow}</span>}
        <p className="mt-1.5 text-[1.15rem] font-semibold tracking-[-0.02em] text-ink sm:text-[1.35rem]">{title}</p>
        <p className="mt-0.5 text-[0.72rem] text-ink-2">{text}</p>
      </div>
      {action}
    </div>
  );
}

/* ——— Os meus imóveis ——— */
export function MyPropertiesScreen() {
  return (
    <AppShell nav="Os meus imóveis" header={{ kind: "greeting", text: "Bom dia, Francisca" }}>
      <PageTitle
        title="Os meus imóveis"
        text="Acompanhe, analise e compare as opções de venda ou arrendamento."
        action={
          <span className="inline-flex items-center gap-1.5 rounded-lg bg-rent px-3 py-2 text-[0.72rem] font-semibold text-white">
            <Plus className="size-3.5" /> Nova análise
          </span>
        }
      />
      <div className="mt-4 grid grid-cols-3 gap-3">
        {[
          ["Imóveis analisados", "2"],
          ["Potencial de valorização (5 anos)", "+167 000 €"],
          ["Análises guardadas", "2"],
        ].map(([k, v]) => (
          <Card key={k} className="p-3.5">
            <p className="text-[0.62rem] leading-tight text-ink-2">{k}</p>
            <p className="mt-1.5 text-[1.05rem] font-semibold tracking-[-0.02em] text-ink tabular">{v}</p>
          </Card>
        ))}
      </div>
      <div className="mt-3 space-y-3">
        {portfolio.map((p) => (
          <Card key={p.name} className="flex flex-wrap items-center gap-3 p-3 sm:flex-nowrap sm:gap-4">
            <span className="relative hidden h-20 w-28 shrink-0 overflow-hidden rounded-lg sm:block">
              <Image src={p.image} alt="" fill sizes="112px" className="object-cover" />
            </span>
            <div className="min-w-0 basis-full sm:flex-1 sm:basis-auto">
              <p className="text-[0.85rem] font-semibold text-ink">{p.name}</p>
              <p className="mt-0.5 text-[0.65rem] text-ink-2">{p.place}</p>
              <p className="text-[0.65rem] text-ink-2">{p.specs}</p>
              <p className="text-[0.65rem] text-ink-3">{p.date}</p>
            </div>
            <div className="w-[calc(50%-0.375rem)] rounded-lg bg-sell-soft p-2.5 sm:w-[34%]">
              <p className="text-[0.6rem] font-semibold text-sell">Vender · daqui a 5 anos</p>
              <p className="mt-0.5 text-[0.95rem] font-semibold tracking-[-0.02em] text-ink tabular">{formatEuro(p.sell)}</p>
              <p className="text-[0.6rem] font-semibold text-success">{p.sellGain}</p>
            </div>
            <div className="w-[calc(50%-0.375rem)] rounded-lg bg-rent-soft p-2.5 sm:w-[34%]">
              <p className="text-[0.6rem] font-semibold text-rent">Arrendar · renda estimada</p>
              <p className="mt-0.5 text-[0.95rem] font-semibold tracking-[-0.02em] text-ink tabular">{formatEuroMonth(p.rent)}</p>
              <p className="text-[0.6rem] text-ink-2">5 anos: {p.rentTotal}</p>
            </div>
          </Card>
        ))}
      </div>
      <p className="mt-3 text-[0.6rem] text-ink-3">Fonte: SIR, Confidencial Imobiliário e INE · Atualizado em 06 mai 2026</p>
    </AppShell>
  );
}

/* ——— Caracterização ——— */
export function CharacterizationScreen() {
  const fields = [
    ["Tipologia", "T2"],
    ["Área útil", "88 m²"],
    ["Ano de construção", "2008"],
    ["Estado", "Bom"],
    ["Certificado energético", "B"],
    ["Garagem", "Sim"],
  ];
  return (
    <AppShell nav="Nova análise" header={{ kind: "stepper", current: 0 }}>
      <PageTitle eyebrow="Passo 1 de 4" title="Caracterização do imóvel" text="Comece por adicionar as fotos e os principais dados do imóvel." />
      <div className="mt-4 grid gap-3 sm:grid-cols-[1.5fr_1fr]">
        <div className="relative aspect-[16/10] overflow-hidden rounded-xl">
          <Image src={photos.t2Sala} alt="" fill sizes="40vw" className="object-cover" />
          <span className="absolute top-2 left-2 rounded-md bg-black/50 px-1.5 py-0.5 text-[0.6rem] text-white">1/6</span>
        </div>
        <div className="grid grid-cols-2 gap-2">
          {[photos.cozinha, photos.casaDeBanho, photos.t2Fachada].map((src, i) => (
            <span key={i} className="relative overflow-hidden rounded-lg">
              <Image src={src} alt="" fill sizes="12vw" className="object-cover" />
            </span>
          ))}
          <span className="grid place-items-center rounded-lg bg-rent-soft text-center text-[0.6rem] font-semibold text-rent">
            <span>
              <Plus className="mx-auto mb-1 size-4" />
              Adicionar fotos
            </span>
          </span>
        </div>
      </div>
      <Card className="mt-3 p-4">
        <p className="text-[0.8rem] font-semibold text-ink">Dados principais</p>
        <div className="mt-3 grid grid-cols-3 gap-2.5">
          {fields.map(([k, v]) => (
            <div key={k}>
              <p className="text-[0.6rem] text-ink-2">{k}</p>
              <p className="mt-1 rounded-md px-2.5 py-1.5 text-[0.72rem] text-ink ring-1 ring-line">{v}</p>
            </div>
          ))}
        </div>
        <p className="mt-3 text-[0.6rem] text-ink-2">Morada ou freguesia</p>
        <p className="mt-1 flex items-center gap-2 rounded-md px-2.5 py-1.5 text-[0.72rem] text-ink ring-1 ring-line">
          <MapPin className="size-3 text-rent" /> Sé Nova, Coimbra
          <span className="ml-auto text-[0.6rem] font-semibold text-rent">Dentro da zona-piloto</span>
        </p>
      </Card>
      <div className="mt-3 flex justify-end">
        <span className="inline-flex items-center gap-1.5 rounded-lg bg-rent px-3 py-2 text-[0.72rem] font-semibold text-white">
          Continuar para os pressupostos <ArrowRight className="size-3.5" />
        </span>
      </div>
    </AppShell>
  );
}

/* ——— Mercado comparativo ——— */
export function ComparablesScreen() {
  const rows = [
    ["Este imóvel", "Sé Nova", "88 m²", "372 000 €", "4 227 €", "—", "Ref."],
    ["T2", "Sé Nova", "90 m²", "380 000 €", "4 222 €", "0,3 km", "96 %"],
    ["T2", "Celas", "85 m²", "365 000 €", "4 294 €", "0,6 km", "92 %"],
    ["T2", "Sé Nova", "92 m²", "390 000 €", "4 239 €", "0,4 km", "91 %"],
    ["T2", "S. António", "87 m²", "360 000 €", "4 138 €", "0,9 km", "88 %"],
    ["T2", "Celas", "89 m²", "375 000 €", "4 213 €", "1,1 km", "86 %"],
  ];
  return (
    <AppShell nav="Análises" header={{ kind: "breadcrumb", items: ["Análises", "T2 · Coimbra", "Mercado comparativo"] }}>
      <PageTitle eyebrow="Detalhes da análise" title="Mercado comparativo" text="Imóveis semelhantes na mesma zona, usados para estimar o valor de mercado." />
      <div className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-4">
        {[
          ["Valor pelos comparáveis", "372 000 €"],
          ["Preço médio da zona", "4 230 €/m²"],
          ["Variação (últ. 12 meses)", "+6,8 %"],
          ["N.º de comparáveis", "6 imóveis"],
        ].map(([k, v], i) => (
          <Card key={k} className="p-3">
            <p className="text-[0.6rem] text-ink-2">{k}</p>
            <p className={cn("mt-1 text-[0.95rem] font-semibold tracking-[-0.02em] tabular", i === 2 ? "text-success" : "text-ink")}>{v}</p>
          </Card>
        ))}
      </div>
      <Card className="mt-3 overflow-hidden">
        <p className="px-4 pt-3.5 text-[0.8rem] font-semibold text-ink">Imóveis comparáveis</p>
        <table className="mt-2 w-full text-left text-[0.68rem]">
          <thead className="bg-surface text-ink-2">
            <tr>
              {["Imóvel", "Localização", "Área", "Preço", "€/m²", "Distância", "Semelhança"].map((h, i) => (
                <th key={h} className={cn("px-3 py-2 font-medium", i > 2 && "hidden sm:table-cell")}>
                  {h}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {rows.map((r, ri) => (
              <tr key={ri} className={cn("border-t border-line", ri === 0 && "bg-rent-soft/50 font-semibold")}>
                {r.map((c, ci) => (
                  <td key={ci} className={cn("px-3 py-2 text-ink tabular", ci > 2 && "hidden sm:table-cell")}>
                    {ci === 6 && ri > 0 ? <span className="rounded-full bg-rent-soft px-2 py-0.5 text-rent">{c}</span> : c}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
        <p className="border-t border-line px-4 py-2.5 text-[0.6rem] text-ink-3">Fonte: SIR, Confidencial Imobiliário · Atualizado em 06 mai 2026</p>
      </Card>
    </AppShell>
  );
}

/* ——— Relatório ——— */
export function ReportScreen() {
  return (
    <AppShell nav="Relatórios" header={{ kind: "breadcrumb", items: ["Relatórios", "T2 · Coimbra"] }}>
      <PageTitle
        title="Relatório de análise"
        text="Avaliação completa do imóvel, projeções e fatores que influenciam o seu valor."
        action={
          <span className="flex gap-2">
            <span className="rounded-lg px-3 py-2 text-[0.7rem] font-semibold text-rent ring-1 ring-rent/30">Partilhar</span>
            <span className="rounded-lg bg-rent px-3 py-2 text-[0.7rem] font-semibold text-white">Exportar PDF</span>
          </span>
        }
      />
      <Card className="mt-4 grid gap-4 p-4 sm:grid-cols-[1fr_1.1fr]">
        <div className="flex gap-3">
          <span className="relative h-24 w-32 shrink-0 overflow-hidden rounded-lg">
            <Image src={photos.t2Fachada} alt="" fill sizes="128px" className="object-cover" />
          </span>
          <div>
            <p className="text-[1rem] font-semibold tracking-[-0.02em] text-ink">T2 · Coimbra</p>
            <p className="mt-1 text-[0.65rem] leading-relaxed text-ink-2">
              Coimbra, Sé Nova
              <br />
              88 m² · 2 quartos
              <br />
              Analisado em 06 mai 2026
            </p>
          </div>
        </div>
        <div className="rounded-lg bg-rent-soft p-3">
          <p className="text-[0.62rem] font-semibold text-rent">O que os números mostram</p>
          <p className="mt-1 text-[0.85rem] font-semibold tracking-[-0.01em] text-ink">Potencial de valorização de 16,3 % em 5 anos.</p>
          <p className="mt-1 text-[0.62rem] leading-relaxed text-ink-2">
            A valorização estimada da zona é superior à média de Coimbra. A IA resume os dados; a decisão é sua.
          </p>
        </div>
      </Card>
      <div className="mt-3 grid grid-cols-2 gap-3">
        <Card className="bg-sell-soft p-4 ring-0">
          <p className="text-[0.7rem] font-semibold text-sell">Vender · daqui a 5 anos</p>
          <p className="mt-1 text-[1.4rem] font-semibold tracking-[-0.03em] text-ink tabular">{formatEuro(demo.sell.value)}</p>
          <p className="text-[0.62rem] font-semibold text-success">+52 000 € (+16,3 %)</p>
        </Card>
        <Card className="bg-rent-soft p-4 ring-0">
          <p className="text-[0.7rem] font-semibold text-rent">Arrendar · renda estimada</p>
          <p className="mt-1 text-[1.4rem] font-semibold tracking-[-0.03em] text-ink tabular">{formatEuroMonth(demo.rent.monthly)}</p>
          <p className="text-[0.62rem] text-ink-2">Total em 5 anos: 72 000 €</p>
        </Card>
      </div>
      <Card className="mt-3 p-4">
        <p className="text-[0.8rem] font-semibold text-ink">A zona em destaque</p>
        <ul className="mt-2 grid gap-2 text-[0.68rem] sm:grid-cols-2">
          {["Escolas e Universidade de Coimbra", "Autocarros e estação CP próximos", "Comércio e serviços a pé", "Nova ligação Metrobus prevista para 2028"].map((t) => (
            <li key={t} className="flex items-center gap-2 text-ink">
              <Check className="size-3 text-rent" /> {t}
            </li>
          ))}
        </ul>
      </Card>
    </AppShell>
  );
}

/* ——— Passo 1: situação (onboarding, ecrã inteiro) ——— */
export function OnboardingScreen() {
  const situations = ["Herdei uma casa", "Segunda habitação", "Imóvel vazio", "Sou investidor"];
  const priorities = [
    ["Dinheiro agora", "Receber um valor de uma vez"],
    ["Rendimento mensal", "Ter uma renda regular"],
    ["Ainda não sei", "Ver as duas opções primeiro"],
  ];
  return (
    <div className="flex overflow-hidden rounded-[1.25rem] bg-cream ring-1 ring-black/10">
      <div className="hidden w-[34%] shrink-0 flex-col bg-rent-deep p-6 text-white sm:flex">
        <Logo className="h-4 text-white" />
        <p className="mt-auto text-[1.25rem] leading-tight font-semibold tracking-[-0.02em]">Decisões imobiliárias com dados.</p>
        <p className="mt-2 text-[0.68rem] text-white/65">Perceba se compensa vender ou arrendar o seu imóvel.</p>
      </div>
      <div className="flex-1 p-5 sm:p-7">
        <div className="flex justify-between text-[0.65rem]">
          <span className="font-semibold text-ink">Passo 1 de 2</span>
          <span className="text-ink-3">A seguir: o seu imóvel</span>
        </div>
        <div className="mt-2 h-1 rounded-full bg-surface-2">
          <div className="h-full w-1/2 rounded-full bg-rent" />
        </div>
        <p className="mt-5 text-[1.05rem] font-semibold tracking-[-0.02em] text-ink">Qual é a sua situação?</p>
        <div className="mt-3 grid grid-cols-2 gap-2">
          {situations.map((s, i) => (
            <span
              key={s}
              className={cn(
                "flex items-center justify-between rounded-lg bg-white px-3 py-2.5 text-[0.72rem] font-medium text-ink ring-1",
                i === 0 ? "ring-rent" : "ring-line",
              )}
            >
              {s}
              <span className={cn("size-3 rounded-full ring-1", i === 0 ? "bg-rent ring-rent" : "ring-line")} />
            </span>
          ))}
        </div>
        <p className="mt-5 text-[1.05rem] font-semibold tracking-[-0.02em] text-ink">O que mais pesa na sua decisão?</p>
        <div className="mt-3 grid grid-cols-3 gap-2">
          {priorities.map(([t, d], i) => (
            <span key={t} className={cn("rounded-lg bg-white p-3 ring-1", i === 2 ? "ring-rent" : "ring-line")}>
              <span className="block text-[0.72rem] font-semibold text-ink">{t}</span>
              <span className="mt-1 block text-[0.6rem] text-ink-2">{d}</span>
            </span>
          ))}
        </div>
        <div className="mt-5 flex items-center justify-between">
          <span className="text-[0.68rem] font-semibold text-rent">Já tenho conta · Entrar</span>
          <span className="inline-flex items-center gap-1.5 rounded-lg bg-rent px-3 py-2 text-[0.72rem] font-semibold text-white">
            Continuar <ArrowRight className="size-3.5" />
          </span>
        </div>
      </div>
    </div>
  );
}

/* ——— Passo 3: os dois caminhos (resumo, sem gráficos) ——— */
export function TwoPathsScreen() {
  return (
    <AppShell nav="Análises" header={{ kind: "stepper", current: 3 }}>
      <PageTitle eyebrow="Resultados da análise" title="Projeção do seu imóvel a 5 anos" text="Os dois caminhos, lado a lado, com os pressupostos que definiu." />
      <div className="mt-4 grid grid-cols-2 gap-3">
        <Card className="bg-sell-soft p-4 ring-0">
          <p className="text-[0.72rem] font-semibold text-sell">Vender</p>
          <p className="mt-1 text-[0.62rem] text-ink-2">Daqui a 5 anos</p>
          <p className="text-[1.5rem] font-semibold tracking-[-0.03em] text-ink tabular">{formatEuro(demo.sell.value)}</p>
          <p className="text-[0.62rem] font-semibold text-success">+52 000 € (+16,3 %)</p>
        </Card>
        <Card className="bg-rent-soft p-4 ring-0">
          <p className="text-[0.72rem] font-semibold text-rent">Arrendar</p>
          <p className="mt-1 text-[0.62rem] text-ink-2">Renda estimada</p>
          <p className="text-[1.5rem] font-semibold tracking-[-0.03em] text-ink tabular">{formatEuroMonth(demo.rent.monthly)}</p>
          <p className="text-[0.62rem] text-ink-2">Rendas brutas em 5 anos: 72 000 €</p>
        </Card>
      </div>
      <div className="mt-3 grid gap-3 sm:grid-cols-2">
        <Card className="p-4">
          <dl className="divide-y divide-line text-[0.68rem]">
            {[
              ["Rentabilidade anual (TIR)", "5,6 % ao ano"],
              ["Ganho do arrendamento (VAL)", "41 800 €"],
              ["Horizonte da análise", "5 anos"],
              ["Nível de confiança", "Alta, 85 %"],
            ].map(([k, v]) => (
              <div key={k} className="flex justify-between gap-3 py-2 first:pt-0 last:pb-0">
                <dt className="text-ink-2">{k}</dt>
                <dd className="font-semibold text-ink tabular">{v}</dd>
              </div>
            ))}
          </dl>
        </Card>
        <Card className="bg-sell-soft p-4 ring-0">
          <p className="text-[0.68rem] font-semibold text-sell">Quando é que a resposta muda?</p>
          <p className="mt-1.5 text-[0.75rem] leading-relaxed text-ink">
            Se a renda descer abaixo de <b className="tabular">{formatEuroMonth(demo.turningPoint)}</b>, vender passa a compensar mais do que arrendar.
          </p>
          <p className="mt-2 text-[0.6rem] text-ink-3">Fontes: INE, SIR e Idealista · 06 mai 2026</p>
        </Card>
      </div>
    </AppShell>
  );
}
