/*
 * Gráficos dos ecrãs da app (estáticos, como na dashboard). Desenhados em px do ecrã de 1440.
 */

const fmt = (n: number) => `${n.toLocaleString("pt-PT", { useGrouping: "always" }).replace(/\s/g, " ")} €`;

type Series = { values: number[]; color: string; fill?: boolean; label?: string };

/** Gráfico de linhas "Hoje … 5 anos" com grelha, pontos e etiqueta no último ponto. */
export function LineChart({
  width,
  height,
  min,
  max,
  ticks,
  series,
  xLabels = ["Hoje", "1 ano", "2 anos", "3 anos", "4 anos", "5 anos"],
  badge,
}: {
  width: number;
  height: number;
  min: number;
  max: number;
  ticks: number[];
  series: Series[];
  xLabels?: string[];
  badge?: { title: string; sub: string };
}) {
  const pad = { l: 66, r: 24, t: 18, b: 30 };
  const n = series[0].values.length;
  const x = (i: number) => pad.l + (i / (n - 1)) * (width - pad.l - pad.r);
  const y = (v: number) => pad.t + (1 - (v - min) / (max - min)) * (height - pad.t - pad.b);
  const path = (vals: number[]) => vals.map((v, i) => `${i ? "L" : "M"}${x(i)},${y(v)}`).join(" ");
  const last = n - 1;
  const top = series[0];

  return (
    <svg width={width} height={height} viewBox={`0 0 ${width} ${height}`} aria-hidden className="block">
      {ticks.map((t) => (
        <g key={t}>
          <line x1={pad.l} x2={width - pad.r} y1={y(t)} y2={y(t)} stroke="var(--line)" />
          <text x={pad.l - 10} y={y(t)} dy="0.32em" textAnchor="end" fontSize="11" fill="var(--ink-3)">
            {fmt(t)}
          </text>
        </g>
      ))}
      {xLabels.map((l, i) => (
        <text key={l} x={x(i)} y={height - 6} textAnchor="middle" fontSize="11" fill="var(--ink-3)">
          {l}
        </text>
      ))}
      {series.map((s) =>
        s.fill ? (
          <path key={`f-${s.color}`} d={`${path(s.values)} L${x(last)},${y(min)} L${x(0)},${y(min)} Z`} fill={s.color} opacity={0.07} />
        ) : null,
      )}
      <line x1={x(last)} x2={x(last)} y1={y(top.values[last])} y2={y(min)} stroke="var(--rent)" strokeDasharray="3 3" />
      {series.map((s) => (
        <g key={s.color}>
          <path d={path(s.values)} fill="none" stroke={s.color} strokeWidth={2.2} />
          {s.values.map((v, i) => (
            <circle key={i} cx={x(i)} cy={y(v)} r={i === last ? 6 : 3.5} fill="#fff" stroke={s.color} strokeWidth={2} />
          ))}
        </g>
      ))}
      {badge && (
        <g transform={`translate(${x(last) - 120}, ${y(top.values[last]) - 52})`}>
          <rect width="104" height="38" rx="6" fill="var(--rent)" />
          <text x="52" y="16" textAnchor="middle" fontSize="12" fontWeight="600" fill="#fff">
            {badge.title}
          </text>
          <text x="52" y="30" textAnchor="middle" fontSize="10" fill="#cfe3dc">
            {badge.sub}
          </text>
        </g>
      )}
    </svg>
  );
}

/** Mapa esquemático da zona (raio de 1,2 km, imóvel ao centro e comparáveis à volta). */
export function ZoneMap({ width, height }: { width: number; height: number }) {
  const cx = width * 0.47;
  const cy = height * 0.5;
  return (
    <svg width={width} height={height} viewBox={`0 0 ${width} ${height}`} aria-hidden className="block rounded-[12px]">
      <rect width={width} height={height} fill="#e9eee9" />
      <circle cx={width * 0.1} cy={height * 0.18} r="40" fill="#dce7dc" />
      <circle cx={width * 0.95} cy={height * 0.82} r="56" fill="#dce7dc" />
      <path d={`M0 ${height * 0.86} Q ${width * 0.2} ${height * 0.8} ${width * 0.3} ${height}`} fill="#d6e2ea" />
      {[0.18, 0.42, 0.66].map((p) => (
        <line key={`h${p}`} x1="0" x2={width} y1={height * p} y2={height * (p + 0.05)} stroke="#fff" strokeWidth="9" />
      ))}
      {[0.28, 0.62, 0.86].map((p) => (
        <line key={`v${p}`} y1="0" y2={height} x1={width * p} x2={width * (p - 0.05)} stroke="#fff" strokeWidth="9" />
      ))}
      <circle cx={cx} cy={cy} r={height * 0.26} fill="#b4532a" opacity="0.1" stroke="#b4532a" strokeOpacity="0.35" strokeDasharray="4 4" />
      {[
        [0.63, 0.17],
        [0.24, 0.3],
        [0.71, 0.4],
        [0.36, 0.68],
        [0.62, 0.7],
      ].map(([px, py]) => (
        <g key={`${px}${py}`}>
          <circle cx={width * px} cy={height * py} r="9" fill="#fff" />
          <circle cx={width * px} cy={height * py} r="5" fill="#0f4c45" />
        </g>
      ))}
      <circle cx={cx} cy={cy} r="20" fill="#fff" />
      <circle cx={cx} cy={cy} r="14" fill="#b4532a" />
      <rect x={cx - 5} y={cy - 5} width="10" height="10" rx="2" fill="#fff" />
    </svg>
  );
}

/** Barras "Comparação de preço por m²". */
export function PriceBars() {
  const bars = [
    { label: "Zona\n(média)", value: 4230, color: "#c9c3b6" },
    { label: "Comparáveis\n(média)", value: 4221, color: "#8fb9ad" },
    { label: "Este imóvel\n(estimado)", value: 4227, color: "#0f4c45" },
  ];
  return (
    <div className="flex items-end justify-around px-2 pt-4">
      {bars.map((b) => (
        <div key={b.label} className="flex w-[72px] flex-col items-center">
          <span className="text-[11px] text-ink-2">{fmt(b.value).replace("€", "€")}</span>
          <span className="mt-1.5 h-[118px] w-[56px] rounded-t-[6px]" style={{ background: b.color }} />
          <span className="mt-2 text-center text-[10px] leading-tight whitespace-pre-line text-ink-3">{b.label}</span>
        </div>
      ))}
    </div>
  );
}
