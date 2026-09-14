"use client";

import { useEffect, useRef } from "react";

export function ScrollSpine() {
  const fillRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let ticking = false;
    function update() {
      const max = document.documentElement.scrollHeight - window.innerHeight;
      const pct = max > 0 ? Math.min(100, (window.scrollY / max) * 100) : 0;
      if (fillRef.current) fillRef.current.style.height = pct + "%";
      ticking = false;
    }
    function onScroll() {
      if (!ticking) {
        requestAnimationFrame(update);
        ticking = true;
      }
    }
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="spine" aria-hidden="true">
      <div className="spine__fill" ref={fillRef} />
    </div>
  );
}
