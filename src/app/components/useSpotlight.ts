"use client";

import {
  useCallback,
  useEffect,
  useRef,
  type PointerEventHandler,
  type RefObject,
} from "react";

/**
 * useSpotlight — keeps a cursor-tracked `--mx` / `--my` CSS variable on the
 * target element in sync with pointer position, without calling
 * `getBoundingClientRect` on every pointermove (it's cached via
 * `ResizeObserver` and invalidated on scroll). Used by the spotlight system
 * (capability cards, team cards, hero image, coverage cells, feature rows,
 * AMLR year card).
 */
export function useSpotlight<T extends HTMLElement = HTMLDivElement>(): {
  ref: RefObject<T | null>;
  onPointerMove: PointerEventHandler<T>;
} {
  const ref = useRef<T | null>(null);
  const rectRef = useRef<DOMRect | null>(null);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const refresh = () => {
      rectRef.current = node.getBoundingClientRect();
    };
    const invalidate = () => {
      rectRef.current = null;
    };

    refresh();
    const observer = new ResizeObserver(refresh);
    observer.observe(node);
    window.addEventListener("scroll", invalidate, { passive: true, capture: true });
    window.addEventListener("resize", refresh, { passive: true });

    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", invalidate, { capture: true });
      window.removeEventListener("resize", refresh);
    };
  }, []);

  const onPointerMove = useCallback<PointerEventHandler<T>>((event) => {
    let rect = rectRef.current;
    if (!rect) {
      rect = event.currentTarget.getBoundingClientRect();
      rectRef.current = rect;
    }
    const target = event.currentTarget;
    target.style.setProperty("--mx", `${event.clientX - rect.left}px`);
    target.style.setProperty("--my", `${event.clientY - rect.top}px`);
  }, []);

  return { ref, onPointerMove };
}
