"use client";

import {
  useCallback,
  useEffect,
  useRef,
  type PointerEvent,
  type ReactNode,
} from "react";

type SpotlightRootProps = {
  children: ReactNode;
  className?: string;
};

export default function SpotlightRoot({ children, className }: SpotlightRootProps) {
  const rectCacheRef = useRef<WeakMap<HTMLElement, DOMRect>>(new WeakMap());

  useEffect(() => {
    const clearRects = () => {
      rectCacheRef.current = new WeakMap();
    };

    window.addEventListener("scroll", clearRects, { passive: true, capture: true });
    window.addEventListener("resize", clearRects, { passive: true });

    return () => {
      window.removeEventListener("scroll", clearRects, { capture: true });
      window.removeEventListener("resize", clearRects);
    };
  }, []);

  const updateSpotlight = useCallback((event: PointerEvent<HTMLElement>) => {
    const eventTarget = event.target;
    if (!(eventTarget instanceof Element)) return;

    const target = eventTarget.closest<HTMLElement>("[data-spotlight]");
    if (!target || !event.currentTarget.contains(target)) return;

    let rect = rectCacheRef.current.get(target);
    if (!rect) {
      rect = target.getBoundingClientRect();
      rectCacheRef.current.set(target, rect);
    }

    target.style.setProperty("--mx", `${event.clientX - rect.left}px`);
    target.style.setProperty("--my", `${event.clientY - rect.top}px`);
  }, []);

  return (
    <article className={className} onPointerMove={updateSpotlight}>
      {children}
    </article>
  );
}
