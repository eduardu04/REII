import { cn } from "@/lib/utils";

/**
 * Ilustração provisória de uma fachada portuguesa (azulejo, varandas, luz quente).
 * Substituir por fotografia real de arquitetura quando a equipa a tiver (ver doc: "Fotografia").
 */
export function FacadeIllustration({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 400 300"
      preserveAspectRatio="xMidYMid slice"
      role="img"
      aria-label="Ilustração de uma fachada de prédio português com azulejos e varandas"
      className={cn("h-full w-full", className)}
    >
      <defs>
        <pattern id="azulejo" width="20" height="20" patternUnits="userSpaceOnUse">
          <rect width="20" height="20" fill="#eef1f2" />
          <path d="M10 2 L18 10 L10 18 L2 10 Z" fill="none" stroke="#5b7f98" strokeWidth="1.2" />
          <circle cx="10" cy="10" r="2.2" fill="#5b7f98" />
          <circle cx="0" cy="0" r="2" fill="#5b7f98" />
          <circle cx="20" cy="0" r="2" fill="#5b7f98" />
          <circle cx="0" cy="20" r="2" fill="#5b7f98" />
          <circle cx="20" cy="20" r="2" fill="#5b7f98" />
        </pattern>
        <linearGradient id="luz" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#fff3df" stopOpacity="0.7" />
          <stop offset="1" stopColor="#fff3df" stopOpacity="0" />
        </linearGradient>
      </defs>

      <rect width="400" height="300" fill="#e9d9c3" />
      {/* Telhado */}
      <rect x="0" y="0" width="400" height="22" fill="#b8562f" />
      <rect x="0" y="22" width="400" height="6" fill="#94431f" />
      {/* Fachada em azulejo */}
      <rect x="0" y="28" width="400" height="272" fill="url(#azulejo)" />

      {[60, 170, 280].map((x) => (
        <g key={x}>
          {/* Janela do 2.º andar */}
          <rect x={x - 6} y="52" width="72" height="96" fill="#f7f5f0" />
          <rect x={x} y="58" width="60" height="84" fill="#1f3b4a" />
          <rect x={x + 29} y="58" width="2" height="84" fill="#f7f5f0" />
          <rect x={x} y="96" width="60" height="2" fill="#f7f5f0" />
          {/* Varanda */}
          <rect x={x - 10} y="144" width="80" height="5" fill="#2d2a26" />
          {Array.from({ length: 9 }).map((_, i) => (
            <rect key={i} x={x - 8 + i * 9.5} y="124" width="1.6" height="20" fill="#2d2a26" />
          ))}
          <rect x={x - 10} y="122" width="80" height="2.5" fill="#2d2a26" />

          {/* Janela do 1.º andar */}
          <rect x={x - 6} y="180" width="72" height="96" fill="#f7f5f0" />
          <rect x={x} y="186" width="60" height="90" fill={x === 170 ? "#0f4c45" : "#1f3b4a"} />
          <rect x={x + 29} y="186" width="2" height="90" fill="#f7f5f0" />
        </g>
      ))}

      <rect width="400" height="300" fill="url(#luz)" />
    </svg>
  );
}
