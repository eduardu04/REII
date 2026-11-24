import { ArrowRight, BarChart3, Calendar, Check, Eye, FileText, Home, Landmark, MapPin, Ruler, ShieldCheck, TrendingUp } from "lucide-react";

import { photos } from "@/content/home";
import { cn } from "@/lib/utils";

import { AppShell } from "./app-shell";
import { LineChart } from "./charts";
import { AnalysisTabs, Card, I, IconBox, Pill, PropertyMini, Thumb } from "./screens";

/*
 * Ecrãs dos passos 2 e 3 e dos cálculos financeiros, recriados de REII_Ecras.pdf (p. 4, 5 e 8)
 * à largura de 1440 px. Valores de demonstração do T2 Coimbra. Sem classes responsivas, de propósito.
 */

function PropertyWide() {
  return (
    <Card className="flex items-center gap-7 p-5">
      <Thumb src={photos.t2Fachada} className="h-[126px] w-[198px] shrink-0" sizes="200px" />
      <div>
        <p className="text-[22px] font-semibold">T2 · Sé Nova, Coimbra</p>
        <p className="mt-3 flex items-center gap-6 text-[15px] text-ink-2">
          <span className="flex items-center gap-2">
            <Ruler className="size-4" /> 88 m²
          </span>
          <span className="flex items-center gap-2">
            <Home className="size-4" /> 2 quartos
          </span>
          <span className="flex items-center gap-2">
            <MapPin className="size-4" /> Coimbra
          </span>
          <span className="flex items-center gap-2">
            <Calendar className="size-4" /> Construído em 2008
          </span>
        </p>
      </div>
    </Card>
  );
}

function StepFooter({ next }: { next: string }) {
  return (
    <div className="mt-7 flex items-center justify-between">
      <span className="flex items-center gap-2 rounded-[10px] bg-white px-6 py-3.5 text-[16px] font-semibold text-rent ring-1 ring-rent/50">
        <ArrowRight className="size-4 rotate-180" /> Anterior
      </span>
      <span data-cursor="4" className="flex items-center gap-2 rounded-[10px] bg-rent px-6 py-3.5 text-[16px] font-semibold text-white">
        {next} <ArrowRight className="size-4" />
      </span>
    </div>
  );
}

function StepBadge({ n }: { n: number }) {
  return <span className="rounded-full bg-white px-3 py-1 text-[13px] font-semibold ring-1 ring-line">Passo {n} de 4</span>;
}

/* ——— Pressupostos (REII_Ecras p. 4) ——— */

export function AssumptionsScreen() {
  const rows = [
    { t: "Objetivo", d: "O que pretende fazer com este imóvel?", icon: Eye },
    {
      t: "Horizonte de análise",
      d: "Durante quanto tempo quer analisar o investimento?",
      icon: Calendar,
    },
    {
      t: "Manutenção anual",
      d: "Despesas de conservação e pequenas reparações.",
      icon: Home,
    },
  ];
  return (
    <AppShell
      nav="Nova análise"
      top={{
        kind: "stepper",
        current: 1,
        subtitle: "Sé Nova, Coimbra · 88 m²",
      }}
    >
      <div className="flex gap-6">
        <div className="min-w-0 flex-1">
          <StepBadge n={2} />
          <h3 className="mt-3 text-[34px] font-semibold tracking-[-0.02em]">Pressupostos</h3>
          <p className="mt-2 text-[16px] text-ink-2">Confirme o cenário da análise. A REII trata das estimativas técnicas e dos cálculos.</p>

          <div className="mt-7">
            <PropertyWide />
          </div>

          <Card className="mt-5 px-7 pt-6 pb-2">
            <p className="text-[21px] font-semibold">Defina o cenário da análise</p>
            {rows.map(({ t, d, icon: Icon }, i) => (
              <div key={t} className={cn("flex items-center gap-5 py-6", i > 0 && "border-t border-line")}>
                <IconBox>
                  <Icon className="size-5" />
                </IconBox>
                <div className="w-[270px] shrink-0">
                  <p className="text-[17px] font-semibold">{t}</p>
                  <p className="mt-1 text-[14px] leading-snug text-ink-2">{d}</p>
                </div>
                {i === 0 && (
                  <div className="grid flex-1 grid-cols-3 gap-3">
                    {[
                      ["Comparar", "Venda vs. arrendamento"],
                      ["Apenas vender", ""],
                      ["Apenas arrendar", ""],
                    ].map(([a, b], j) => (
                      <span
                        key={a}
                        data-cursor={j === 0 ? "1" : undefined}
                        className={cn(
                          "flex items-center gap-3 rounded-[12px] px-4 py-4 ring-1",
                          j === 0 ? "bg-rent-soft/60 ring-rent" : "bg-white ring-line",
                        )}
                      >
                        <span className={cn("grid size-5 shrink-0 place-items-center rounded-full ring-2", j === 0 ? "ring-rent" : "ring-line")}>
                          {j === 0 && <span className="size-2.5 rounded-full bg-rent" />}
                        </span>
                        <span>
                          <span className="block text-[15px] font-semibold">{a}</span>
                          {b && <span className="block text-[12px] text-ink-2">{b}</span>}
                        </span>
                      </span>
                    ))}
                  </div>
                )}
                {i === 1 && (
                  <div className="flex-1">
                    <p data-cursor="2" className="rounded-[10px] bg-white px-5 py-3.5 text-[16px] ring-1 ring-line">
                      5 anos
                    </p>
                    <p className="mt-2 text-[13px] text-ink-2">Pode comparar 3, 5, 10 ou 15 anos.</p>
                  </div>
                )}
                {i === 2 && (
                  <div className="flex flex-1 items-center gap-5">
                    <p className="flex w-[200px] justify-between rounded-[10px] bg-surface px-5 py-3.5 text-[16px] text-ink-3">
                      800 <span>€/ano</span>
                    </p>
                    <span data-cursor="3" className="flex items-center gap-3">
                      <span className="grid size-6 place-items-center rounded-[6px] bg-rent text-white">
                        <Check className="size-4" strokeWidth={3} />
                      </span>
                      <span>
                        <span className="block text-[15px] font-semibold">Não sei</span>
                        <span className="block text-[12px] text-ink-2">Usar a estimativa da REII</span>
                      </span>
                    </span>
                  </div>
                )}
              </div>
            ))}
          </Card>

          <StepFooter next="Continuar para a estimativa de mercado" />
        </div>

        <div className="w-[340px] shrink-0 pt-[146px]">
          <Card data-focus className="p-7">
            <div className="flex items-center gap-4">
              <IconBox>
                <BarChart3 className="size-5" />
              </IconBox>
              <p className="text-[21px] leading-snug font-semibold">Estimativas técnicas calculadas pela REII</p>
            </div>
            {[
              {
                t: "Valorização anual",
                d: "Estimada pela IA com dados de mercado da zona.",
                tone: "sell" as const,
                icon: TrendingUp,
              },
              {
                t: "Taxa de ocupação",
                d: "Estimada pela IA com dados de arrendamento.",
                tone: "rent" as const,
                icon: Home,
              },
              {
                t: "Taxa de desconto",
                d: "Definida pelo motor financeiro (risco e custo de oportunidade).",
                tone: "neutral" as const,
                icon: Landmark,
              },
            ].map(({ t, d, tone, icon: Icon }) => (
              <div key={t} className="mt-5 flex gap-4 border-t border-line pt-5">
                <IconBox tone={tone}>
                  <Icon className="size-5" />
                </IconBox>
                <div>
                  <p className="text-[16px] font-semibold">{t}</p>
                  <p className="mt-1 text-[14px] leading-snug text-ink-2">{d}</p>
                </div>
              </div>
            ))}
            <div className="mt-6 flex gap-3 rounded-[12px] bg-rent-soft/70 p-5 ring-1 ring-rent/10">
              <ShieldCheck className="size-5 shrink-0 text-rent" />
              <p className="text-[14px] leading-relaxed text-ink-2">
                Não precisa de saber estes valores. A REII estima-os, indica as fontes e deixa-os rever no passo seguinte.
              </p>
            </div>
          </Card>
        </div>
      </div>
    </AppShell>
  );
}

/* ——— Estimativa de mercado (REII_Ecras p. 5) ——— */

export function EstimateScreen() {
  return (
    <AppShell nav="Nova análise" top={{ kind: "stepper", current: 2, subtitle: "Sé Nova, Coimbra" }}>
      <div className="flex gap-6">
        <div className="min-w-0 flex-1">
          <StepBadge n={3} />
          <h3 className="mt-3 flex items-center gap-4 text-[34px] font-semibold tracking-[-0.02em]">
            Estimativa de mercado <Pill>Cenário central</Pill>
          </h3>
          <p className="mt-2 text-[16px] text-ink-2">
            Com base nas características do imóvel, a REII analisou o mercado de Coimbra e estima os principais valores.
          </p>

          <div className="mt-7">
            <PropertyWide />
          </div>

          <div className="mt-5 grid grid-cols-2 gap-5">
            <div data-cursor="1" className="rounded-[14px] bg-sell-soft p-7 ring-1 ring-sell/10">
              <p className="flex items-center gap-2.5 text-[17px] font-semibold text-sell">
                <span className="size-4 rounded-[4px] bg-sell" /> Venda
              </p>
              <p className="mt-4 flex items-center gap-2 text-[14px] text-ink-2">
                Valor estimado hoje <I />
              </p>
              <p className="mt-1 text-[36px] font-semibold tracking-[-0.02em]">320 000 €</p>
              <p className="mt-4 flex items-center gap-2 text-[14px] text-ink-2">
                Projeção daqui a 5 anos <I />
              </p>
              <p className="mt-1 text-[40px] font-semibold tracking-[-0.02em] text-sell">372 000 €</p>
              <span className="mt-2 inline-flex items-center gap-1.5 rounded-full bg-[#e3f1e7] px-3 py-1 text-[13px] font-semibold text-success">
                <TrendingUp className="size-3.5" /> +52 000 € antes de impostos e despesas
              </span>
            </div>
            <div data-cursor="2" className="rounded-[14px] bg-rent-soft p-7 ring-1 ring-rent/10">
              <p className="flex items-center gap-2.5 text-[17px] font-semibold text-rent">
                <span className="size-4 rounded-[4px] bg-rent" /> Arrendamento
              </p>
              <p className="mt-4 flex items-center gap-2 text-[14px] text-ink-2">
                Renda mensal estimada <I />
              </p>
              <p className="mt-1 text-[36px] font-semibold tracking-[-0.02em]">1 200 €</p>
              <p className="mt-4 flex items-center gap-2 text-[14px] text-ink-2">
                Rendas em 5 anos, com 94 % de ocupação <I />
              </p>
              <p className="mt-1 text-[40px] font-semibold tracking-[-0.02em] text-rent">67 680 €</p>
              <span className="mt-2 inline-flex rounded-full bg-white px-3 py-1 text-[13px] font-semibold ring-1 ring-line">
                Antes de impostos e despesas
              </span>
            </div>
          </div>

          <Card className="mt-5 p-6">
            <div className="flex items-center justify-between">
              <p className="flex items-center gap-2 text-[21px] font-semibold">
                Evolução estimada do valor do imóvel <I />
              </p>
              <p className="text-[12px] text-ink-2">
                Fonte: <b className="text-ink">INE e SIR</b> · Atualizado em 06 mai 2026
              </p>
            </div>
            <div className="mt-4">
              <LineChart
                width={820}
                height={240}
                min={300000}
                max={400000}
                ticks={[300000, 325000, 350000, 375000, 400000]}
                series={[
                  {
                    values: [320000, 330000, 340000, 350000, 361000, 372000],
                    color: "var(--rent)",
                    fill: true,
                  },
                ]}
                badge={{ title: "372 000 €", sub: "+16,3 %" }}
              />
            </div>
          </Card>

          <StepFooter next="Continuar para os resultados" />
        </div>

        <div className="w-[340px] shrink-0 space-y-5 pt-[146px]">
          <Card className="p-7">
            <p className="flex items-center gap-2.5 text-[21px] font-semibold">
              <FileText className="size-5 text-rent" /> Pressupostos utilizados
            </p>
            {[
              ["Horizonte", "5 anos"],
              ["Valorização anual", "3,1 %"],
              ["Taxa de ocupação prevista", "94 %"],
              ["Manutenção anual estimada", "800 €"],
            ].map(([k, v], i) => (
              <p key={k} className={cn("flex justify-between gap-4 py-3.5 text-[15px]", i > 0 ? "border-t border-line" : "mt-2")}>
                <span className="text-ink-2">{k}</span> <b>{v}</b>
              </p>
            ))}
            <p className="mt-2 text-[15px] font-semibold text-rent">Rever pressupostos →</p>
          </Card>
          <Card data-cursor="3" data-focus className="p-7">
            <p className="flex items-center gap-2.5 text-[21px] font-semibold">
              <Landmark className="size-5 text-rent" /> Fontes e referências
            </p>
            <ul className="mt-4 space-y-3 text-[15px] text-ink-2">
              {[
                "INE – Estatísticas da habitação",
                "SIR – Confidencial Imobiliário",
                "Anúncios comparáveis (últimos 6 meses)",
                "Tendência da zona – Sé Nova, Coimbra",
              ].map((t) => (
                <li key={t} className="flex gap-2.5">
                  <Check className="mt-0.5 size-4 shrink-0 text-rent" /> {t}
                </li>
              ))}
            </ul>
          </Card>
          <Card className="grid grid-cols-2 gap-4 p-6">
            <div>
              <p className="text-[14px] text-ink-2">Data da estimativa</p>
              <p className="mt-1.5 text-[18px] font-semibold">06 mai 2026</p>
            </div>
            <div>
              <p className="text-[14px] text-ink-2">Nível de confiança</p>
              <p className="mt-1.5 text-[18px] font-semibold text-rent">Alta (85 %)</p>
            </div>
          </Card>
        </div>
      </div>
    </AppShell>
  );
}

/* ——— Cálculos financeiros (REII_Ecras p. 8) ——— */

export function CalculationsScreen() {
  return (
    <AppShell
      nav="Análises"
      top={{
        kind: "breadcrumb",
        items: ["Análises", "T2 · Coimbra", "Cálculos financeiros"],
      }}
    >
      <div className="flex items-start justify-between gap-8">
        <div>
          <Pill>Detalhes da análise</Pill>
          <h3 className="mt-3 text-[34px] font-semibold tracking-[-0.02em]">Cálculos financeiros</h3>
          <p className="mt-2 text-[16px] text-ink-2">Como chegámos aos valores: indicadores, fluxos de caixa e pressupostos.</p>
        </div>
        <PropertyMini />
      </div>

      <div className="mt-6">
        <AnalysisTabs active="Cálculos financeiros" />
      </div>

      <div className="mt-5 flex gap-5">
        <div className="min-w-0 flex-1 space-y-5">
          <div className="flex gap-5">
            <div className="flex-[1.6] rounded-[14px] bg-sell-soft p-7 ring-1 ring-sell/10">
              <p className="flex items-center gap-2.5 text-[17px] font-semibold text-sell">
                <span className="size-4 rounded-[4px] bg-sell" /> Valor estimado no futuro
              </p>
              <p className="mt-2 text-[14px] text-ink-2">Projeção de venda em 5 anos</p>
              <p className="mt-2 flex items-center gap-2 text-[40px] font-semibold tracking-[-0.02em]">
                372 000 € <I />
              </p>
              <span className="mt-2 inline-flex items-center gap-1.5 rounded-full bg-[#e3f1e7] px-3 py-1 text-[13px] font-semibold text-success">
                <TrendingUp className="size-3.5" /> +52 000 € (+16,3 %)
              </span>
            </div>
            <Card className="flex-1 p-7">
              <IconBox tone="neutral">
                <Home className="size-5" />
              </IconBox>
              <p className="mt-5 flex items-center gap-2 text-[14px] text-ink-2">
                Valor atual do imóvel <I />
              </p>
              <p className="mt-1.5 text-[30px] font-semibold tracking-[-0.02em]">320 000 €</p>
            </Card>
          </div>

          <div className="rounded-[14px] bg-rent-soft p-7 ring-1 ring-rent/10">
            <p className="flex items-center gap-2.5 text-[17px] font-semibold text-rent">
              <span className="size-4 rounded-[4px] bg-rent" /> Cenário de arrendamento
            </p>
            <p className="mt-2 flex items-center gap-2 text-[30px] font-semibold tracking-[-0.02em]">
              1 200 €/mês <I />
            </p>
            <p className="mt-1 text-[14px] text-ink-2">72 000 € brutos em 5 anos</p>
          </div>

          <Card className="p-7">
            <p className="text-[21px] font-semibold">Principais indicadores financeiros</p>
            <div className="mt-5 grid grid-cols-3 gap-4">
              {[
                {
                  k: "VAL · Valor atual líquido",
                  v: "41 800 €",
                  green: true,
                  c: "1",
                },
                {
                  k: "TIR · Taxa interna de rentabilidade",
                  v: "5,6 %",
                  c: "2",
                },
                { k: "Payback · tempo de retorno", v: "≈ 5 anos" },
              ].map(({ k, v, green, c }) => (
                <div key={k} data-cursor={c} className="rounded-[12px] bg-surface p-5">
                  <p className="flex items-start justify-between gap-2 text-[14px] leading-snug text-ink-2">
                    {k} <I className="mt-0.5 shrink-0" />
                  </p>
                  <p className={cn("mt-3 text-[34px] font-semibold tracking-[-0.02em]", green && "text-success")}>{v}</p>
                </div>
              ))}
            </div>
          </Card>

          <div className="flex items-center gap-5 rounded-[14px] bg-rent-soft/70 px-7 py-5 ring-1 ring-rent/10">
            <IconBox>
              <ShieldCheck className="size-5" />
            </IconBox>
            <div>
              <p className="text-[16px] font-semibold">Análise gerada por IA</p>
              <p className="mt-1 text-[14px] leading-relaxed text-ink-2">
                Estimativa baseada em dados de mercado, modelos financeiros (VAL, TIR, fluxo de caixa) e pressupostos definidos. Pode conter
                imprecisões: confirme sempre com fontes oficiais e profissionais.
              </p>
            </div>
          </div>
        </div>

        <div className="w-[360px] shrink-0 space-y-5">
          <Card data-cursor="3" data-focus className="p-7">
            <p className="flex items-center justify-between text-[21px] font-semibold">
              Cálculo do VAL (resumo) <I />
            </p>
            <div className="mt-3">
              {[
                ["Investimento inicial (valor + custos)", "−332 800 €"],
                ["Fluxos de caixa (rendas, 5 anos)", "+72 000 €"],
                ["Valor de revenda (ano 5)", "+372 000 €"],
                ["Taxa de desconto (custo de capital)", "5,0 %"],
              ].map(([k, v], i) => (
                <p key={k} className={cn("flex items-center justify-between gap-4 py-3.5 text-[14px]", i > 0 && "border-t border-line")}>
                  <span className="max-w-[190px] leading-snug text-ink-2">{k}</span> <span className="tabular-nums">{v}</span>
                </p>
              ))}
            </div>
            <p className="mt-2 flex justify-between rounded-[10px] bg-surface px-4 py-3.5 text-[17px] font-semibold">
              VAL (líquido) <span>41 800 €</span>
            </p>
          </Card>
          <Card className="p-7">
            <p className="flex items-center gap-2.5 text-[21px] font-semibold">
              <FileText className="size-5 text-rent" /> Principais pressupostos
            </p>
            <div className="mt-2">
              {[
                ["Valor de referência", "320 000 €"],
                ["Custos de aquisição (IMT, IS, registo…)", "≈ 12 800 € (4,0 %)"],
                ["Renda mensal estimada", "1 200 €"],
                ["Taxa de desconto", "5,0 %"],
                ["Horizonte da análise", "5 anos"],
                ["Valorização média", "≈ 3,1 % ao ano"],
              ].map(([k, v], i) => (
                <p key={k} className={cn("flex items-center justify-between gap-4 py-3.5 text-[14px]", i > 0 && "border-t border-line")}>
                  <span className="max-w-[170px] leading-snug text-ink-2">{k}</span> <b className="text-right">{v}</b>
                </p>
              ))}
            </div>
            <p className="mt-2 text-[15px] font-semibold text-rent">Editar pressupostos →</p>
          </Card>
        </div>
      </div>
    </AppShell>
  );
}
