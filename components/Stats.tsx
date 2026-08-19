"use client";

import { useEffect, useRef, useState } from "react";

const stats = [
  { label: "Years of Experience", value: 2, suffix: "+", accent: "teal" },
  { label: "Projects Shipped", value: 15, suffix: "+", accent: "pink" },
  { label: "Technologies in Stack", value: 12, suffix: "+", accent: "amber" },
  { label: "On-Time Delivery", value: 100, suffix: "%", accent: "teal" },
];

type StatItem = (typeof stats)[number];

function useCountUp(target: number, start: boolean, duration = 1400) {
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!start) return;

    if (
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      setValue(target);
      return;
    }

    let raf: number;
    const t0 = performance.now();

    const tick = (now: number) => {
      const p = Math.min((now - t0) / duration, 1);
      const eased = 1 - Math.pow(1 - p, 3);
      setValue(Math.round(target * eased));
      if (p < 1) raf = requestAnimationFrame(tick);
    };

    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [start, target, duration]);

  return value;
}

function Stat({ item, start }: { item: StatItem; start: boolean }) {
  const value = useCountUp(item.value, start);
  return (
    <div className={`stat-cell accent-${item.accent}`}>
      <div className="stat-value">
        {value}
        <span className="stat-suffix">{item.suffix}</span>
      </div>
      <div className="stat-label">{item.label}</div>
    </div>
  );
}

export default function Stats() {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    if (typeof IntersectionObserver === "undefined") {
      setInView(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div className="about-stats" ref={ref}>
      <div className="stats-head">
        <span className="stats-eyebrow">At a glance</span>
        <span className="stats-live">
          <i></i> currently shipping
        </span>
      </div>

      <div className="stats-grid">
        {stats.map((item) => (
          <Stat key={item.label} item={item} start={inView} />
        ))}
      </div>

      <div className="stats-foot">
        <span className="stats-dot"></span>
        available for new projects
      </div>
    </div>
  );
}