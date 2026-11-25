import { useEffect, useRef, useState } from "react";

export default function StatCard({ label, labelBn, value, suffix = "" }) {
  const [displayValue, setDisplayValue] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);
  const cardRef = useRef(null);

  useEffect(() => {
    const node = cardRef.current;
    if (!node || hasAnimated) return;

    const prefersReducedMotion =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const startCount = () => {
      setHasAnimated(true);
      if (prefersReducedMotion) {
        setDisplayValue(value);
        return;
      }

      const duration = 1100;
      const startTime = performance.now();

      const tick = (now) => {
        const elapsed = now - startTime;
        const progress = Math.min(elapsed / duration, 1);
        // Ease-out cubic
        const eased = 1 - Math.pow(1 - progress, 3);
        setDisplayValue(Math.round(eased * value));
        if (progress < 1) {
          requestAnimationFrame(tick);
        }
      };

      requestAnimationFrame(tick);
    };

    if (typeof IntersectionObserver === "undefined") {
      startCount();
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0]?.isIntersecting) {
          startCount();
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [value, hasAnimated]);

  return (
    <div
      ref={cardRef}
      className="px-6 py-7 bg-white flex flex-col justify-between"
    >
      <div className="flex items-center justify-between gap-2">
        <span className="text-sm font-medium text-civinity-muted">{label}</span>
        <span className="text-xs text-civinity-green font-medium">{labelBn}</span>
      </div>
      <p className="mt-2 font-heading text-3xl sm:text-4xl font-bold tracking-tight text-civinity-ink tabular-nums">
        {displayValue.toLocaleString("en-US")}
        {suffix}
      </p>
    </div>
  );
}
