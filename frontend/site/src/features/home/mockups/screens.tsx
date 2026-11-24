import Image, { type StaticImageData } from "next/image";
import {
  ArrowRight,
  BarChart3,
  Building2,
  Bus,
  Calendar,
  Check,
  Download,
  Eye,
  FileText,
  GraduationCap,
  Home,
  Info,
  Landmark,
  MapPin,
  MoreHorizontal,
  Plus,
  Ruler,
  Share2,
  ShieldCheck,
  ShoppingBag,
  Store,
  Trees,
  TrendingUp,
} from "lucide-react";

import { Logo } from "@/components/brand/logo";
import quarto from "@/assets/photos/t2-quarto.jpg";
import wc from "@/assets/photos/t2-wc.jpg";
import metrobus from "@/assets/photos/coimbra-metrobus.jpg";
import { photos } from "@/content/home";
import { cn } from "@/lib/utils";

import { AppShell } from "./app-shell";
import { LineChart, PriceBars, ZoneMap } from "./charts";


/*
 * Ecrãs da app REII, recriados de REII_Ecras.pdf à largura de 1440 px (ver <ScaledScreen>).
 * Valores de demonstração do T2 Coimbra. Sem classes responsivas, de propósito.
 */

/* ——— peças comuns ——— */

function Card({ className, children, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div className={cn("rounded-[14px] bg-white shadow-[0_1px_2px_rgb(0_0_0/0.04)] ring-1 ring-line", className)} {...props}>
      {children}
    </div>
  );
}

function Pill({ children, tone = "rent" }: { children: React.ReactNode; tone?: "rent" | "sell" | "neutral" | "amber" }) {
  const t = {
    rent: "bg-rent-soft text-rent",
    sell: "bg-sell-soft text-sell",
    neutral: "bg-white text-ink ring-1 ring-line",
    amber: "bg-[#f8ecd2] text-[#8a5a00]",
  }[tone];
  return <span className={cn("inline-flex items-center rounded-full px-2.5 py-1 text-[12px] font-semibold", t)}>{children}</span>;
}

function IconBox({ children, tone = "rent" }: { children: React.ReactNode; tone?: "rent" | "sell" | "neutral" }) {
  const t = { rent: "bg-rent-soft text-rent", sell: "bg-sell-soft text-sell", neutral: "bg-surface text-ink-2" }[tone];
  return <span className={cn("grid size-11 shrink-0 place-items-center rounded-[10px]", t)}>{children}</span>;
}

const I = ({ className }: { className?: string }) => <Info className={cn("size-[15px] text-ink-3", className)} strokeWidth={2} />;

function Thumb({ src, className, sizes = "200px" }: { src: StaticImageData; className?: string; sizes?: string }) {
  return (
    <span className={cn("relative block overflow-hidden rounded-[10px]", className)}>
      <Image src={src} alt="" fill sizes={sizes} className="object-cover" />
    </span>
  );
}

function SellCard({ big = false, label = "Vender" }: { big?: boolean; label?: string }) {
  return (
    <div className="rounded-[14px] bg-sell-soft p-7 ring-1 ring-sell/10">
      <p className="flex items-center gap-2.5 text-[17px] font-semibold text-sell">
        <span className="size-4 rounded-[4px] bg-sell" /> {label}
      </p>
      <p className="mt-3 text-[14px] text-ink-2">Daqui a 5 anos</p>
      <p className={cn("mt-2 flex items-center gap-2 font-semibold tracking-[-0.02em]", big ? "text-[44px]" : "text-[36px]")}>
        372 000 € <I />
      </p>
      <span className="mt-3 inline-flex items-center gap-1.5 rounded-full bg-[#e3f1e7] px-3 py-1 text-[14px] font-semibold text-success">
        <TrendingUp className="size-4" /> +52 000 € (+16,3 %)
      </span>
    </div>
  );
}

function RentCard({ big = false }: { big?: boolean }) {
  return (
    <div className="rounded-[14px] bg-rent-soft p-7 ring-1 ring-rent/10">
      <p className="flex items-center gap-2.5 text-[17px] font-semibold text-rent">
        <span className="size-4 rounded-[4px] bg-rent" /> Arrendar
      </p>
      <p className="mt-3 text-[14px] text-ink-2">Renda estimada</p>
      <p className={cn("mt-2 flex items-center gap-2 font-semibold tracking-[-0.02em]", big ? "text-[44px]" : "text-[36px]")}>
        1 200 €/mês <I />
      </p>
      <p className="mt-3 flex items-center gap-2 text-[14px] text-ink-2">
        <Calendar className="size-4" /> Total em 5 anos: <b className="text-ink">72 000 €</b>
      </p>
    </div>
  );
}

function AiNotice({ title, text, action }: { title: string; text: string; action?: string }) {
  return (
    <div className="flex items-center gap-5 rounded-[14px] bg-rent-soft/70 px-7 py-5 ring-1 ring-rent/10">
      <IconBox>
        <ShieldCheck className="size-5" />
      </IconBox>
      <div className="flex-1">
        <p className="text-[16px] font-semibold">{title}</p>
        <p className="mt-1 text-[14px] leading-relaxed text-ink-2">{text}</p>
      </div>
      {action && (
        <span className="rounded-[10px] bg-white px-4 py-2.5 text-[14px] font-semibold text-rent ring-1 ring-rent/40">{action}</span>
      )}
    </div>
  );
}

function PropertyMini({ date = "Analisado em 06 mai 2026" }: { date?: string }) {
  return (
    <Card className="flex items-center gap-4 p-3 pr-6">
      <Thumb src={photos.t2Fachada} className="h-[70px] w-[100px]" />
      <div className="text-[13px] text-ink-2">
        <p className="text-[16px] font-semibold text-ink">T2 · Coimbra</p>
        <p className="mt-1 flex items-center gap-1.5">
          <MapPin className="size-3.5" /> Sé Nova · 88 m² · 2 quartos
        </p>
        <p className="mt-0.5 flex items-center gap-1.5">
          <Calendar className="size-3.5" /> {date}
        </p>
      </div>
    </Card>
  );
}

function AnalysisTabs({ active }: { active: string }) {
  const tabs = [
    { label: "Visão detalhada", icon: Eye },
    { label: "Cálculos financeiros", icon: BarChart3 },
    { label: "Zona e valorização", icon: MapPin },
    { label: "Mercado comparativo", icon: Building2 },
  ];
  return (
    <Card className="flex items-center gap-2 p-2">
      {tabs.map(({ label, icon: Icon }) => (
        <span
          key={label}
          data-cursor={label === active ? "1" : undefined}
          className={cn(
            "flex items-center gap-2 rounded-[10px] px-4 py-2.5 text-[15px]",
            label === active ? "bg-rent font-semibold text-white" : "text-ink",
          )}
        >
          <Icon className="size-4" /> {label}
        </span>
      ))}
      <span className="ml-auto flex items-center gap-2 px-4 py-2.5 text-[15px]">
        <FileText className="size-4" /> Relatório
      </span>
    </Card>
  );
}

/** Peças partilhadas com os ecrãs da página Como funciona (step-screens.tsx). */
export { AnalysisTabs, Card, I, IconBox, Pill, PropertyMini, Thumb };

/* ——— Os meus imóveis (REII_Ecras p. 2) ——— */

const PORTFOLIO = [
  { name: "T2 · Coimbra", place: "Sé Nova, Coimbra", specs: "88 m² · 2 quartos", date: "Última análise: 06 mai 2026", image: photos.t2Fachada, sell: "372 000 €", gain: "+52 000 € (+16,3 %)", rent: "1 200 €/mês", total: "72 000 €" },
  { name: "T3 · Lisboa", place: "Arroios, Lisboa", specs: "120 m² · 3 quartos", date: "Última análise: 28 abr 2026", image: photos.t3Fachada, sell: "735 000 €", gain: "+115 000 € (+18,5 %)", rent: "2 300 €/mês", total: "138 000 €" },
];

export function MyPropertiesScreen() {
  return (
    <AppShell nav="Os meus imóveis" top={{ kind: "greeting", text: "Bom dia, Francisca" }}>
      <div className="flex items-end justify-between">
        <div>
          <h3 className="text-[34px] font-semibold tracking-[-0.02em]">Os meus imóveis</h3>
          <p className="mt-2 text-[16px] text-ink-2">Acompanhe, analise e compare as opções de venda ou arrendamento.</p>
        </div>
        <span data-cursor="1" className="flex items-center gap-2 rounded-[10px] bg-rent px-5 py-3 text-[16px] font-semibold text-white">
          <Plus className="size-5" /> Nova análise
        </span>
      </div>

      <div className="mt-7 grid grid-cols-3 gap-5">
        {[
          { k: "Imóveis analisados", v: "2", icon: Home },
          { k: "Potencial de valorização (5 anos)", v: "+167 000 €", s: "Soma dos dois imóveis, cenário central", icon: TrendingUp },
          { k: "Análises guardadas", v: "2", icon: FileText },
        ].map(({ k, v, s, icon: Icon }) => (
          <Card key={k} className="flex gap-4 p-6">
            <IconBox>
              <Icon className="size-5" />
            </IconBox>
            <div>
              <p className="flex items-center gap-2 text-[14px] text-ink-2">
                {k} {s && <I />}
              </p>
              <p className="mt-1.5 text-[26px] font-semibold tracking-[-0.02em]">{v}</p>
              {s && <p className="mt-1 text-[12px] text-ink-2">{s}</p>}
            </div>
          </Card>
        ))}
      </div>

      <div className="mt-5 space-y-5">
        {PORTFOLIO.map((p, pi) => (
          <Card key={p.name} className="flex items-center gap-7 p-5">
            <Thumb src={p.image} className="h-[166px] w-[208px] shrink-0" sizes="210px" />
            <div className="w-[250px] text-[14px] text-ink-2">
              <p className="text-[21px] font-semibold text-ink">{p.name}</p>
              <p className="mt-3 flex items-center gap-2">
                <MapPin className="size-4" /> {p.place}
              </p>
              <p className="mt-1.5 flex items-center gap-2">
                <Ruler className="size-4" /> {p.specs}
              </p>
              <p className="mt-1.5 flex items-center gap-2">
                <Calendar className="size-4" /> {p.date}
              </p>
            </div>
            <div data-cursor={pi === 0 ? "2" : undefined} className="flex-1 rounded-[12px] bg-sell-soft p-5 ring-1 ring-sell/10">
              <Pill tone="sell">Vender</Pill>
              <p className="mt-3 text-[14px] text-ink-2">Daqui a 5 anos</p>
              <p className="mt-1 flex items-center gap-2 text-[26px] font-semibold tracking-[-0.02em]">
                {p.sell} <I />
              </p>
              <span className="mt-2 inline-flex items-center gap-1.5 rounded-full bg-[#e3f1e7] px-3 py-1 text-[13px] font-semibold text-success">
                <TrendingUp className="size-3.5" /> {p.gain}
              </span>
            </div>
            <div data-cursor={pi === 0 ? "3" : undefined} className="flex-1 rounded-[12px] bg-rent-soft p-5 ring-1 ring-rent/10">
              <Pill>Arrendar</Pill>
              <p className="mt-3 text-[14px] text-ink-2">Renda estimada</p>
              <p className="mt-1 flex items-center gap-2 text-[26px] font-semibold tracking-[-0.02em]">
                {p.rent} <I />
              </p>
              <p className="mt-2 text-[13px] text-ink-2">
                Rendimento em 5 anos: <b className="text-ink">{p.total}</b>
              </p>
            </div>
            <span data-cursor={pi === 1 ? "4" : undefined} className="grid size-11 place-items-center rounded-[10px] ring-1 ring-line">
              <MoreHorizontal className="size-5 text-ink-2" />
            </span>
          </Card>
        ))}
      </div>

      <p className="mt-5 flex items-center gap-2 text-[13px] text-ink-2">
        <Info className="size-4" /> Fonte: <b className="text-ink">SIR – Confidencial Imobiliário e INE</b> · Atualizado em 06 mai 2026
      </p>

      <Card className="mt-6 flex items-center gap-5 px-7 py-6">
        <IconBox>
          <Eye className="size-5" />
        </IconBox>
        <div className="flex-1">
          <p className="text-[19px] font-semibold">Ainda não tem análises suficientes?</p>
          <p className="mt-1 text-[15px] text-ink-2">Veja um exemplo completo e perceba como funciona a análise.</p>
        </div>
        <span className="flex items-center gap-2 rounded-[10px] px-5 py-3 text-[15px] font-semibold text-rent ring-1 ring-rent/50">
          Ver exemplo T2 Coimbra <ArrowRight className="size-4" />
        </span>
      </Card>
    </AppShell>
  );
}

/* ——— Mercado comparativo (REII_Ecras p. 10) ——— */

const COMPARABLES = [
  ["Este imóvel", "Sé Nova", "88 m²", "2", "372 000 €", "4 227 €", "—", "Ref."],
  ["T2", "Sé Nova", "90 m²", "2", "380 000 €", "4 222 €", "0,3 km", "96 %"],
  ["T2", "Celas", "85 m²", "2", "365 000 €", "4 294 €", "0,6 km", "92 %"],
  ["T2", "Sé Nova", "92 m²", "2", "390 000 €", "4 239 €", "0,4 km", "91 %"],
  ["T2", "S. António", "87 m²", "2", "360 000 €", "4 138 €", "0,9 km", "88 %"],
  ["T2", "Celas", "89 m²", "2", "375 000 €", "4 213 €", "1,1 km", "86 %"],
];

export function ComparablesScreen() {
  return (
    <AppShell nav="Análises" top={{ kind: "breadcrumb", items: ["Análises", "T2 · Coimbra", "Mercado comparativo"] }}>
      <div className="flex items-start justify-between gap-8">
        <div>
          <Pill>Detalhes da análise</Pill>
          <h3 className="mt-3 text-[34px] font-semibold tracking-[-0.02em]">Mercado comparativo</h3>
          <p className="mt-2 text-[16px] text-ink-2">Imóveis semelhantes na mesma zona, usados para estimar o valor de mercado.</p>
        </div>
        <PropertyMini />
      </div>

      <div className="mt-6">
        <AnalysisTabs active="Mercado comparativo" />
      </div>

      <div className="mt-5 grid grid-cols-4 gap-5">
        {[
          { k: "Valor pelos comparáveis", v: "372 000 €", icon: Landmark, tone: "rent" as const },
          { k: "Preço médio da zona", v: "4 230 €/m²", icon: MapPin, tone: "sell" as const },
          { k: "Variação (últ. 12 meses)", v: "+6,8 %", icon: TrendingUp, tone: "rent" as const, green: true },
          { k: "N.º de comparáveis", v: "6 imóveis", icon: Building2, tone: "neutral" as const },
        ].map(({ k, v, icon: Icon, tone, green }) => (
          <Card key={k} data-cursor={k.startsWith("Valor") ? "2" : undefined} className="flex gap-4 p-6">
            <IconBox tone={tone}>
              <Icon className="size-5" />
            </IconBox>
            <div className="min-w-0 flex-1">
              <p className="flex items-start justify-between gap-2 text-[14px] leading-snug text-ink-2">
                {k} <I className="mt-0.5 shrink-0" />
              </p>
              <p className={cn("mt-2 text-[26px] font-semibold tracking-[-0.02em]", green && "text-success")}>{v}</p>
            </div>
          </Card>
        ))}
      </div>

      <div className="mt-5 flex gap-5">
        <Card data-cursor="4" className="w-[280px] shrink-0 p-3">
          <div className="relative">
            <ZoneMap width={254} height={380} />
            <span className="absolute top-3 left-3 rounded-full bg-white px-3 py-1.5 text-[13px] font-semibold shadow-sm">Coimbra</span>
            <span className="absolute bottom-3 left-3 rounded-[10px] bg-white px-3 py-2 text-[13px] shadow-sm">
              <b className="block">Coimbra, Sé Nova</b>
              <span className="text-[11px] text-ink-2">Raio de 1,2 km</span>
            </span>
          </div>
        </Card>
        <Card className="min-w-0 flex-1 p-6">
          <div className="flex items-center justify-between">
            <p className="flex items-center gap-2 text-[19px] font-semibold">
              Imóveis comparáveis <I />
            </p>
            <p className="text-[12px] text-ink-2">
              Fonte: <b className="text-ink">SIR – Confidencial Imobiliário</b> · Atualizado em 06 mai 2026
            </p>
          </div>
          <div className="mt-4 overflow-hidden rounded-[12px] ring-1 ring-line">
            <table className="w-full text-[14px]">
              <thead className="bg-surface text-[13px] text-ink-2">
                <tr>
                  {["Imóvel", "Localização", "Área", "Quartos", "Preço", "€/m²", "Distância", "Semelhança"].map((h, i) => (
                    <th key={h} className={cn("px-4 py-3 font-medium", i < 2 ? "text-left" : "text-right")}>
                      {h}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {COMPARABLES.map((r, ri) => (
                  <tr key={ri} data-cursor={ri === 1 ? "3" : undefined} className={cn("border-t border-line", ri === 0 && "bg-surface/60 font-semibold")}>
                    {r.map((c, ci) => (
                      <td key={ci} className={cn("px-4 py-3.5 tabular-nums", ci < 2 ? "text-left" : "text-right")}>
                        {ci === 0 && ri === 0 ? (
                          <span className="flex items-center gap-2">
                            <span className="size-3 rounded-[3px] bg-ink" /> {c}
                          </span>
                        ) : ci === 7 ? (
                          <span className={cn("rounded-full px-2.5 py-1 text-[12px] font-semibold", ri === 0 ? "bg-rent-soft text-rent" : "bg-surface text-ink")}>{c}</span>
                        ) : (
                          c
                        )}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Card>
      </div>

      <div className="mt-5 grid grid-cols-3 gap-5">
        <Card className="p-6">
          <p className="flex items-start justify-between text-[19px] font-semibold">
            Comparação de preço por m² <I className="mt-1" />
          </p>
          <PriceBars />
          <p className="mt-4 text-[12px] text-ink-2">Eixo a começar em 0 €: as três barras são praticamente iguais.</p>
        </Card>
        <Card className="p-6">
          <p className="text-[19px] font-semibold">O que mostram os comparáveis?</p>
          <p className="mt-4 text-[15px] leading-relaxed text-ink-2">
            Imóveis semelhantes, na mesma zona e com características próximas, estão à venda entre <b className="text-ink">4 138 €</b> e{" "}
            <b className="text-ink">4 294 €/m²</b>, com uma média de <b className="text-ink">4 221 €/m²</b>. Com base nestes dados, o valor estimado de{" "}
            <b className="text-ink">372 000 €</b> está em linha com o mercado.
          </p>
          <div className="mt-4">
            <Pill>Explicação da IA</Pill>
          </div>
        </Card>
        <Card className="p-6">
          <p className="text-[19px] font-semibold">Origem e fiabilidade dos dados</p>
          <div className="mt-4 space-y-4">
            {[
              { t: "Dados confirmados", d: "Anúncios ativos e registos de transações (SIR).", tone: "rent" as const, icon: Check },
              { t: "Estimativas (IA)", d: "Valor estimado, variação e projeção.", tone: "sell" as const, icon: TrendingUp },
              { t: "A validar", d: "Estado do imóvel, obras e características não visíveis nos anúncios.", tone: "neutral" as const, icon: Info },
            ].map(({ t, d, tone, icon: Icon }) => (
              <div key={t} className="flex gap-4">
                <IconBox tone={tone}>
                  <Icon className="size-5" />
                </IconBox>
                <div>
                  <p className="text-[15px] font-semibold">{t}</p>
                  <p className="mt-0.5 text-[13px] leading-snug text-ink-2">{d}</p>
                </div>
              </div>
            ))}
          </div>
        </Card>
      </div>

      <div className="mt-5">
        <AiNotice
          title="Análise gerada por IA"
          text="Os resultados são estimativas, podem conter erros e não são uma avaliação oficial. Confirme os dados (estado do imóvel, documentação e mercado) antes de tomar uma decisão."
          action="Ver metodologia e fontes"
        />
      </div>
    </AppShell>
  );
}

/* ——— Relatório (REII_Ecras p. 11) ——— */

export function ReportScreen() {
  return (
    <AppShell nav="Relatórios" top={{ kind: "breadcrumb", items: ["Relatórios", "T2 · Coimbra"] }}>
      <div className="flex items-end justify-between">
        <div>
          <h3 className="text-[34px] font-semibold tracking-[-0.02em]">Relatório de análise</h3>
          <p className="mt-2 text-[16px] text-ink-2">Avaliação completa do imóvel, projeções e fatores que influenciam o seu valor.</p>
        </div>
        <div className="flex gap-3">
          <span className="flex items-center gap-2 rounded-[10px] bg-white px-5 py-3 text-[16px] font-semibold text-rent ring-1 ring-rent/50">
            <Share2 className="size-4" /> Partilhar
          </span>
          <span data-cursor="1" className="flex items-center gap-2 rounded-[10px] bg-rent px-5 py-3 text-[16px] font-semibold text-white">
            <Download className="size-4" /> Exportar PDF
          </span>
        </div>
      </div>

      <Card className="mt-7 flex gap-7 p-6">
        <div className="w-[344px] shrink-0">
          <Thumb src={photos.t2Fachada} className="h-[186px] w-full" sizes="344px" />
          <div className="mt-2.5 grid grid-cols-4 gap-2.5">
            {[photos.t2Cozinha, quarto, wc].map((src, i) => (
              <Thumb key={i} src={src} className="h-[64px]" sizes="80px" />
            ))}
            <span className="grid h-[64px] place-items-center rounded-[10px] bg-ink text-[16px] font-semibold text-white">+8</span>
          </div>
        </div>
        <div className="w-[300px] text-[15px] text-ink-2">
          <p className="text-[34px] font-semibold tracking-[-0.02em] text-ink">T2 · Coimbra</p>
          <p className="mt-4 flex items-center gap-2.5">
            <MapPin className="size-4" /> Coimbra, Sé Nova
          </p>
          <p className="mt-2 flex items-center gap-2.5">
            <Ruler className="size-4" /> 88 m²
          </p>
          <p className="mt-2 flex items-center gap-2.5">
            <Home className="size-4" /> 2 quartos
          </p>
          <p className="mt-2 flex items-center gap-2.5">
            <Calendar className="size-4" /> Analisado em 06 mai 2026
          </p>
        </div>
        <div data-cursor="2" className="flex-1 rounded-[14px] bg-rent-soft/70 p-6 ring-1 ring-rent/10">
          <p className="flex items-center gap-2 text-[16px] font-semibold text-rent">
            <BarChart3 className="size-4" /> O que os números mostram
          </p>
          <p className="mt-3 text-[25px] leading-tight font-semibold tracking-[-0.02em]">Potencial de valorização de 16,3 % em 5 anos.</p>
          <p className="mt-3 text-[14px] leading-relaxed text-ink-2">
            Com base nos dados de mercado, no contexto urbano e nas infraestruturas previstas, a valorização estimada da zona é superior à média de
            Coimbra. A IA resume os dados; a decisão é sua.
          </p>
        </div>
      </Card>

      <Card className="mt-5 flex items-center gap-2 p-2">
        {[
          { l: "Visão geral", icon: Eye },
          { l: "Cálculos e metodologia", icon: BarChart3 },
          { l: "Mercado e zona", icon: MapPin },
          { l: "Projeções", icon: TrendingUp },
          { l: "Riscos e notas", icon: ShieldCheck },
        ].map(({ l, icon: Icon }, i) => (
          <span key={l} data-cursor={l === "Projeções" ? "3" : undefined} className={cn("flex items-center gap-2 rounded-[10px] px-4 py-2.5 text-[15px]", i === 0 ? "bg-rent font-semibold text-white" : "text-ink")}>
            <Icon className="size-4" /> {l}
          </span>
        ))}
      </Card>

      <div className="mt-6 flex gap-5">
        <div className="min-w-0 flex-1">
          <p className="text-[25px] font-semibold tracking-[-0.02em]">Cenários de investimento</p>
          <p className="mt-1 text-[15px] text-ink-2">Comparação entre vender e arrendar, com projeções do cenário central.</p>
          <div className="mt-5 grid grid-cols-2 gap-5">
            <SellCard big />
            <RentCard big />
          </div>
          <div className="mt-5 flex gap-5">
            <Card className="min-w-0 flex-1 p-6">
              <p className="flex items-center gap-2 text-[19px] font-semibold">
                Projeção do valor do imóvel <I />
              </p>
              <div className="mt-4">
                <LineChart
                  width={420}
                  height={200}
                  min={300000}
                  max={400000}
                  ticks={[300000, 325000, 350000, 375000, 400000]}
                  series={[{ values: [320000, 330000, 340000, 350000, 361000, 372000], color: "var(--rent)", fill: true }]}
                  badge={{ title: "372 000 €", sub: "+16,3 %" }}
                />
              </div>
              <p className="mt-3 text-[12px] text-ink-2">
                Fonte: <b className="text-ink">INE e SIR</b> · Atualizado em 06 mai 2026
              </p>
            </Card>
            <Card className="w-[300px] shrink-0 p-6">
              <p className="text-[19px] font-semibold">Principais indicadores</p>
              {[
                { k: "Rentabilidade anual (TIR)", v: "5,6 %", icon: TrendingUp },
                { k: "Risco", v: "Médio", icon: ShieldCheck },
                { k: "Horizonte em análise", v: "5 anos", icon: Calendar },
              ].map(({ k, v, icon: Icon }, i) => (
                <div key={k} className={cn("flex items-center gap-4 py-4", i > 0 && "border-t border-line")}>
                  <IconBox>
                    <Icon className="size-5" />
                  </IconBox>
                  <div>
                    <p className="text-[13px] text-ink-2">{k}</p>
                    <p className="mt-0.5 text-[21px] font-semibold">{v}</p>
                  </div>
                </div>
              ))}
            </Card>
          </div>
          <Card className="mt-5 p-6">
            <div className="flex items-center gap-4">
              <IconBox>
                <FileText className="size-5" />
              </IconBox>
              <div>
                <p className="text-[17px] font-semibold">Principais cálculos realizados</p>
                <p className="text-[14px] text-ink-2">Métodos de avaliação financeira e de mercado utilizados:</p>
              </div>
            </div>
            <div className="mt-4 flex flex-wrap gap-2.5">
              {[
                ["VAL", "Valor atual líquido"],
                ["TIR", "Taxa interna de rentabilidade"],
                ["Payback", "Tempo de retorno"],
                ["Projeção", "de valorização"],
              ].map(([a, b]) => (
                <span key={a} className="rounded-full px-4 py-2 text-[14px] ring-1 ring-line">
                  <b>{a}</b> <span className="text-ink-2">{b}</span>
                </span>
              ))}
            </div>
          </Card>
        </div>

        <div className="w-[340px] shrink-0 space-y-5">
          <Card className="p-6">
            <p className="text-[19px] font-semibold">A zona em destaque</p>
            {[
              { t: "Escolas e universidades", d: "Ex.: Universidade de Coimbra", icon: GraduationCap },
              { t: "Transportes", d: "Autocarros e estação CP próximos", icon: Bus },
              { t: "Comércio e serviços", d: "Supermercados, farmácia, restauração", icon: Store },
              { t: "Espaços verdes", d: "Parque Verde do Mondego", icon: Trees },
            ].map(({ t, d, icon: Icon }, i) => (
              <div key={t} className={cn("flex gap-3 py-3.5", i > 0 && "border-t border-line")}>
                <Icon className="mt-0.5 size-5 text-rent" />
                <div>
                  <p className="text-[15px] font-semibold">{t}</p>
                  <p className="text-[13px] text-ink-2">{d}</p>
                </div>
              </div>
            ))}
          </Card>
          <Card className="p-6">
            <p className="flex items-start justify-between text-[19px] leading-snug font-semibold">
              Projetos e notícias da zona <I className="mt-1" />
            </p>
            <Thumb src={metrobus} className="mt-4 h-[150px] w-full" sizes="300px" />
            <p className="mt-4 text-[17px] leading-snug font-semibold">Nova ligação de transportes em Coimbra em fase de construção</p>
            <p className="mt-2 text-[14px] leading-relaxed text-ink-2">
              A nova ligação vai melhorar a mobilidade na zona e aumentar a procura imobiliária, contribuindo para a valorização dos imóveis.
            </p>
            <p className="mt-3 text-[12px] text-ink-2">
              Fonte: <b className="text-ink">CM Coimbra</b> · Atualizado em abr 2026
            </p>
          </Card>
          <div className="rounded-[14px] bg-rent-soft/70 p-6 ring-1 ring-rent/10">
            <p className="flex items-center gap-2 text-[16px] font-semibold">
              <ShieldCheck className="size-5 text-rent" /> Análise realizada por IA
            </p>
            <p className="mt-2 text-[14px] leading-relaxed text-ink-2">
              Gerada com modelos de IA, dados de mercado e fontes públicas. Os resultados são estimativas e podem conter imprecisões. Confirme
              sempre a informação antes de decidir.
            </p>
          </div>
        </div>
      </div>
    </AppShell>
  );
}

/* ——— Caracterização (REII_Ecras p. 3) ——— */

export function CharacterizationScreen() {
  const fields = [
    ["Tipologia", "T2", true],
    ["Área útil", "88", true, "m²"],
    ["Ano de construção", "2008", false],
    ["Estado de conservação", "Bom", true],
    ["Certificado energético", "B", false],
    ["Garagem", "Sim", false],
    ["Elevador", "Sim", false],
    ["Quartos", "2", true],
  ] as const;
  return (
    <AppShell nav="Nova análise" top={{ kind: "stepper", current: 0, subtitle: "Caracterização e dados do imóvel" }}>
      <div className="flex gap-6">
        <div className="min-w-0 flex-1">
          <span className="rounded-full bg-white px-3 py-1 text-[13px] font-semibold ring-1 ring-line">Passo 1 de 4</span>
          <h3 className="mt-3 text-[34px] font-semibold tracking-[-0.02em]">Caracterização do imóvel</h3>
          <p className="mt-2 text-[16px] text-ink-2">Comece por adicionar as fotos e os principais dados do imóvel.</p>

          <div className="mt-7 flex gap-4">
            <div className="relative h-[296px] w-[432px] shrink-0 overflow-hidden rounded-[12px]">
              <Image src={photos.t2Sala} alt="" fill sizes="432px" className="object-cover" />
              <span className="absolute top-3 left-3 rounded-full bg-black/55 px-2.5 py-1 text-[12px] font-semibold text-white">1 / 6</span>
            </div>
            <div className="grid flex-1 grid-cols-3 gap-4">
              {[quarto, photos.t2Cozinha, wc, photos.t2Fachada].map((src, i) => (
                <Thumb key={i} src={src} className="h-[140px]" sizes="120px" />
              ))}
              <span data-cursor="1" className="col-span-2 grid h-[140px] place-items-center rounded-[10px] border border-dashed border-ink-3/40 bg-white text-center text-[14px] font-semibold text-rent">
                <span>
                  <Plus className="mx-auto mb-1.5 size-6" />
                  Adicionar
                  <br />
                  fotos
                </span>
              </span>
            </div>
          </div>
          <p className="mt-3 text-[13px] text-ink-2">Opcional. As fotos ajudam a IA a confirmar o estado de conservação; não entram no cálculo do preço.</p>

          <Card className="mt-5 p-7">
            <p className="text-[21px] font-semibold">Dados principais</p>
            <div className="mt-5 grid grid-cols-4 gap-x-5 gap-y-5">
              {fields.map(([label, value, req, unit]) => (
                <div key={label}>
                  <p className="text-[14px] font-semibold">
                    {label} {req && <span className="text-sell">*</span>}
                  </p>
                  <p data-cursor={label === "Tipologia" ? "2" : label === "Quartos" ? "3" : undefined} className="mt-2 flex items-center justify-between rounded-[8px] bg-white px-4 py-3 text-[16px] ring-1 ring-line">
                    {value} {unit && <span className="text-[14px] text-ink-3">{unit}</span>}
                  </p>
                </div>
              ))}
            </div>
            <p className="mt-6 flex items-center gap-2 text-[16px] font-semibold">
              <MapPin className="size-5 text-rent" /> Localização
            </p>
            <p className="mt-4 text-[14px] font-semibold">
              Morada ou freguesia <span className="text-sell">*</span>
            </p>
            <div className="mt-2 flex gap-4">
              <p className="flex-1 rounded-[8px] bg-white px-4 py-3 text-[16px] ring-1 ring-line">Sé Nova, Coimbra</p>
              <span className="flex items-center gap-2 rounded-[8px] px-5 py-3 text-[15px] font-semibold text-rent ring-1 ring-rent/60">
                <MapPin className="size-4" /> Ver no mapa
              </span>
            </div>
          </Card>

          <div className="mt-6 flex items-center justify-between">
            <span className="text-[16px] font-semibold text-rent">Guardar rascunho</span>
            <span className="flex items-center gap-2 rounded-[10px] bg-rent px-6 py-3.5 text-[16px] font-semibold text-white">
              Continuar para os pressupostos <ArrowRight className="size-4" />
            </span>
          </div>
        </div>

        <div className="w-[320px] shrink-0 space-y-5 pt-[118px]">
          <Card className="p-6">
            <p className="flex justify-between text-[17px] font-semibold">
              Dados preenchidos <span>60 %</span>
            </p>
            <div className="mt-3 h-2 overflow-hidden rounded-full bg-surface-2">
              <div className="h-full w-[60%] rounded-full bg-rent" />
            </div>
            <p className="mt-3 text-[12px] leading-relaxed text-ink-2">Faltam: estado da cozinha e número de casas de banho (opcionais).</p>
          </Card>
          <Card className="p-6">
            <p className="text-[21px] font-semibold">Resumo do imóvel</p>
            <Thumb src={photos.t2Fachada} className="mt-4 h-[150px] w-full" sizes="280px" />
            <p className="mt-4 text-[16px] font-semibold">T2 · Coimbra</p>
            <ul className="mt-3 space-y-2 text-[14px] text-ink-2">
              {["Sé Nova, Coimbra", "88 m² · 2 quartos", "2008", "Classe energética B", "Garagem", "Elevador"].map((t) => (
                <li key={t} className="flex items-center gap-2">
                  <Check className="size-4 text-rent" /> {t}
                </li>
              ))}
            </ul>
          </Card>
          <div className="flex gap-3 rounded-[14px] bg-rent-soft/70 p-5 ring-1 ring-rent/10">
            <ShieldCheck className="size-6 shrink-0 text-rent" />
            <div>
              <p className="text-[16px] font-semibold">Dentro da zona-piloto</p>
              <p className="mt-1 text-[14px] leading-relaxed text-ink-2">Este imóvel está numa zona com dados de mercado suficientes para a análise.</p>
            </div>
          </div>
        </div>
      </div>
    </AppShell>
  );
}

/* ——— Resultados (REII_Ecras p. 6) ——— */

export function ResultsScreen() {
  return (
    <AppShell nav="Análises" top={{ kind: "stepper", current: 3, subtitle: "Sé Nova, Coimbra · 88 m²" }}>
      <Pill>Resultados da análise</Pill>
      <h3 className="mt-3 text-[34px] font-semibold tracking-[-0.02em]">Projeção do seu imóvel a 5 anos</h3>
      <p className="mt-2 text-[16px] text-ink-2">Os dois caminhos, lado a lado, com os pressupostos que definiu. A IA explica cada número; a decisão é sua.</p>

      <div className="mt-6 flex gap-5">
        <div className="min-w-0 flex-1 space-y-5">
          <div className="grid grid-cols-2 gap-5">
            <SellCard />
            <RentCard />
          </div>
          <Card className="p-6">
            <p className="flex items-center gap-2 text-[21px] font-semibold">
              Valor estimado ao longo do tempo <I />
            </p>
            <div className="mt-2 flex gap-6 text-[13px] text-ink-2">
              <span className="flex items-center gap-2">
                <span className="size-3 rounded-[3px] bg-sell" /> Vender: valor do imóvel
              </span>
              <span className="flex items-center gap-2">
                <span className="size-3 rounded-[3px] bg-rent" /> Arrendar: valor + rendas líquidas
              </span>
            </div>
            <div className="mt-3">
              <LineChart
                width={720}
                height={250}
                min={300000}
                max={450000}
                ticks={[300000, 350000, 400000, 450000]}
                series={[
                  { values: [320000, 343000, 366000, 389000, 412000, 435700], color: "var(--rent)", fill: true },
                  { values: [320000, 330000, 340000, 350000, 361000, 372000], color: "var(--sell)" },
                ]}
              />
            </div>
            <p className="mt-3 text-[12px] text-ink-2">
              Fonte: <b className="text-ink">Motor financeiro REII · INE · SIR</b> · Atualizado em 06 mai 2026
            </p>
          </Card>
        </div>

        <div className="w-[330px] shrink-0 space-y-5">
          <Card className="p-6">
            <p className="text-[19px] font-semibold">Cenário de análise</p>
            <div className="mt-4 grid grid-cols-3 rounded-[10px] bg-surface p-1 text-[14px]">
              {["Conservador", "Central", "Otimista"].map((s) => (
                <span key={s} data-cursor={s === "Otimista" ? "1" : undefined} className={cn("rounded-[8px] py-2 text-center", s === "Central" ? "bg-white font-semibold shadow-sm ring-1 ring-ink" : "text-ink-2")}>
                  {s}
                </span>
              ))}
            </div>
            <p className="mt-3 text-[12px] text-ink-2">Conservador e otimista mudam a valorização anual (±1 p.p.) e a ocupação.</p>
          </Card>
          <Card className="p-6">
            <p className="text-[19px] font-semibold">Indicadores principais</p>
            <div data-cursor="2" className="mt-4 rounded-[12px] bg-sell-soft p-4">
              <p className="text-[15px] font-semibold text-sell">Venda</p>
              {[
                ["Valor estimado", "372 000 €"],
                ["Ganho estimado", "+52 000 €"],
                ["Valorização", "+16,3 %"],
              ].map(([k, v]) => (
                <p key={k} className="mt-2.5 flex justify-between text-[14px]">
                  <span className="text-ink-2">{k}</span> <b>{v}</b>
                </p>
              ))}
            </div>
            <div data-cursor="3" className="mt-3 rounded-[12px] bg-rent-soft p-4">
              <p className="text-[15px] font-semibold text-rent">Arrendamento</p>
              {[
                ["Renda mensal", "1 200 €"],
                ["Rendas brutas (5 anos)", "72 000 €"],
                ["TIR", "5,6 % ao ano"],
                ["VAL", "41 800 €"],
              ].map(([k, v]) => (
                <p key={k} className="mt-2.5 flex justify-between text-[14px]">
                  <span className="text-ink-2">{k}</span> <b>{v}</b>
                </p>
              ))}
            </div>
          </Card>
          <div className="rounded-[14px] bg-rent-soft/70 p-5 ring-1 ring-rent/10">
            <p className="text-[16px] font-semibold">O que significa?</p>
            <p className="mt-1.5 text-[14px] leading-relaxed text-ink-2">
              Com estes pressupostos, se a renda descer abaixo de 1 050 €/mês, o valor final de vender passa a ser maior do que o de arrendar.
            </p>
          </div>
        </div>
      </div>
    </AppShell>
  );
}

/* ——— Passo 1: situação (REII_Ecras p. 1, ecrã inteiro) ——— */

export function OnboardingScreen() {
  const situations = ["Herdei uma casa", "Segunda habitação", "Imóvel vazio", "Sou investidor"];
  const priorities = [
    ["Dinheiro agora", "Receber um valor de uma vez"],
    ["Rendimento mensal", "Ter uma renda regular"],
    ["Ainda não sei", "Ver as duas opções primeiro"],
  ];
  return (
    <div className="flex h-[900px] w-[1440px] bg-cream text-ink">
      <div className="relative flex w-[480px] shrink-0 flex-col overflow-hidden bg-rent-deep px-14 py-14 text-white">
        <Image src={photos.palco} alt="" fill sizes="480px" className="object-cover object-[56%_40%]" />
        <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgb(10_54_50/0.55)_0%,rgb(10_54_50/0.15)_30%,rgb(10_54_50/0.75)_62%,rgb(10_54_50/0.96)_100%)]" />
        <Logo className="relative h-[32px] text-white" />
        <p className="relative mt-auto text-[44px] leading-[1.08] font-semibold tracking-[-0.02em]">Decisões imobiliárias com dados.</p>
        <p className="relative mt-6 text-[17px] leading-relaxed text-white/80">Analise, compare e perceba se compensa vender ou arrendar o seu imóvel.</p>
        <ul className="relative mt-10 space-y-3 text-[15px] text-white/90">
          {["Estimativas com fonte e data", "Venda e arrendamento lado a lado", "A decisão é sempre sua"].map((t) => (
            <li key={t} className="flex items-center gap-3">
              <Check className="size-4 text-mint" /> {t}
            </li>
          ))}
        </ul>
      </div>
      <div className="flex-1 px-[110px] py-16">
        <div className="flex justify-between text-[15px]">
          <span className="font-semibold">Passo 1 de 2</span>
          <span className="text-ink-2">A seguir: o seu imóvel</span>
        </div>
        <div className="mt-3 h-2 rounded-full bg-surface-2">
          <div className="h-full w-1/2 rounded-full bg-rent" />
        </div>
        <p className="mt-12 text-[34px] font-semibold tracking-[-0.02em]">Qual é a sua situação?</p>
        <div className="mt-6 grid grid-cols-2 gap-4">
          {situations.map((s, i) => (
            <span
              key={s}
              data-cursor={i === 0 ? "1" : undefined}
              className={cn(
                "flex items-center gap-4 rounded-[12px] px-6 py-6 text-[17px] font-semibold ring-1",
                i === 0 ? "bg-rent-soft/60 ring-rent" : "bg-white ring-line",
              )}
            >
              <IconBox>{[<Home key="h" className="size-5" />, <Building2 key="b" className="size-5" />, <Landmark key="l" className="size-5" />, <BarChart3 key="c" className="size-5" />][i]}</IconBox>
              {s}
              <span className={cn("ml-auto size-6 rounded-full ring-2", i === 0 ? "bg-white ring-rent ring-offset-0" : "ring-line")}>
                {i === 0 && <span className="m-1.5 block size-3 rounded-full bg-rent" />}
              </span>
            </span>
          ))}
        </div>
        <p className="mt-12 text-[34px] font-semibold tracking-[-0.02em]">O que mais pesa na sua decisão?</p>
        <p className="mt-2 text-[15px] text-ink-2">Não há resposta certa. Usamos isto só para mostrar primeiro a informação que mais lhe interessa.</p>
        <div className="mt-6 grid grid-cols-3 gap-4">
          {priorities.map(([t, d], i) => (
            <span key={t} data-cursor={i === 2 ? "2" : undefined} className={cn("rounded-[12px] p-6 ring-1", i === 0 ? "bg-rent-soft/60 ring-rent" : "bg-white ring-line")}>
              <IconBox>{[<ShoppingBag key="s" className="size-5" />, <Calendar key="c" className="size-5" />, <Eye key="e" className="size-5" />][i]}</IconBox>
              <span className="mt-5 block text-[18px] font-semibold">{t}</span>
              <span className="mt-2 block text-[14px] text-ink-2">{d}</span>
            </span>
          ))}
        </div>
        <div className="mt-12 flex items-center justify-between">
          <span className="text-[16px] font-semibold text-rent">Já tenho conta · Entrar</span>
          <span data-cursor="3" className="flex items-center gap-2 rounded-[10px] bg-rent px-7 py-4 text-[16px] font-semibold text-white">
            Continuar <ArrowRight className="size-4" />
          </span>
        </div>
      </div>
    </div>
  );
}
