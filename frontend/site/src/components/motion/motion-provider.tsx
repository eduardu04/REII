"use client";

import { LazyMotion, MotionConfig, MotionGlobalConfig, domAnimation } from "motion/react";

// `?static` no endereço salta todas as animações (para rever conteúdo e para capturas).
if (typeof window !== "undefined" && new URLSearchParams(window.location.search).has("static")) {
  MotionGlobalConfig.skipAnimations = true;
}

/**
 * LazyMotion carrega só as funcionalidades de animação usadas (≈15 KB em vez de ≈34 KB).
 * `reducedMotion="user"` respeita a preferência do sistema operativo.
 * Usar sempre `m.*` (e não `motion.*`) dentro deste provider.
 */
export function MotionProvider({ children }: { children: React.ReactNode }) {
  return (
    <LazyMotion features={domAnimation} strict>
      <MotionConfig reducedMotion="user" transition={{ ease: [0.22, 1, 0.36, 1] }}>
        {children}
      </MotionConfig>
    </LazyMotion>
  );
}
