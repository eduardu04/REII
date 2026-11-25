"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { useInView, useReducedMotion } from "motion/react";

/**
 * Avanço automático entre separadores (padrão Libra/Harvey).
 * Só corre com a secção no ecrã; pausa com rato/foco e com o botão (WCAG 2.2.2).
 * Com movimento reduzido, ou no telemóvel (onde a pessoa lê ao seu ritmo), não avança sozinho.
 */
export function useAutoAdvance(count: number, duration = 6000) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { margin: "-20% 0px -20% 0px" });
  const reduce = useReducedMotion();
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const [hover, setHover] = useState(false);
  const [small, setSmall] = useState(false);
  const manual = !!reduce || small;
  const running = inView && !paused && !hover && !manual;

  useEffect(() => {
    const mq = window.matchMedia("(max-width: 767px)");
    const update = () => setSmall(mq.matches);
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, []);

  const next = useCallback(() => setActive((i) => (i + 1) % count), [count]);

  useEffect(() => {
    if (!running) return;
    const t = setTimeout(next, duration);
    return () => clearTimeout(t);
  }, [running, active, next, duration]);

  const bind = {
    ref,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    onFocusCapture: () => setHover(true),
    onBlurCapture: () => setHover(false),
  };

  return { active, setActive, running, paused, setPaused, reduce: manual, bind, duration };
}
