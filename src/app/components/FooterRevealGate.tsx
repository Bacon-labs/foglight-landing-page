"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";

type FooterRevealGateProps = {
  children: ReactNode;
};

export default function FooterRevealGate({ children }: FooterRevealGateProps) {
  const sentinelRef = useRef<HTMLDivElement | null>(null);
  const [isFooterActive, setIsFooterActive] = useState(false);

  useEffect(() => {
    const sentinel = sentinelRef.current;
    if (!sentinel) return;

    const shell = sentinel.closest(".page-shell");

    const setActive = (nextActive: boolean) => {
      shell?.classList.toggle("footer-reveal-active", nextActive);
      setIsFooterActive((currentActive) => (
        currentActive === nextActive ? currentActive : nextActive
      ));
    };

    const observer = new IntersectionObserver(
      ([entry]) => setActive(entry.isIntersecting),
      {
        rootMargin: "0px 0px 18% 0px",
        threshold: 0,
      },
    );

    observer.observe(sentinel);

    return () => {
      observer.disconnect();
      shell?.classList.remove("footer-reveal-active");
    };
  }, []);

  return (
    <>
      <div ref={sentinelRef} className="footer-reveal-sentinel" aria-hidden="true" />
      {isFooterActive ? children : null}
    </>
  );
}
