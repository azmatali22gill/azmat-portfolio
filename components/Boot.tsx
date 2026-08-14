"use client";

import { useEffect, useState } from "react";

const lines = [
  { text: "$ initializing environment...", cls: "dim" },
  { text: "[ok] react — ready", cls: "" },
  { text: "[ok] next.js — ready", cls: "" },
  { text: "[ok] node.js — ready", cls: "" },
  { text: "[ok] mongodb — connected", cls: "" },
  { text: "$ system online", cls: "" },
];

export default function Boot() {
  const [hidden, setHidden] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const timer = setTimeout(() => setHidden(true), lines.length * 220 + 500);
    return () => clearTimeout(timer);
  }, []);

  if (!mounted) return null;

  return (
    <div id="boot" className={hidden ? "hidden" : ""}>
      <div id="boot-log">
        {lines.map((line, i) => (
          <div
            key={i}
            className={line.cls}
            style={{ animationDelay: `${i * 0.22}s` }}
          >
            {line.text}
          </div>
        ))}
      </div>
    </div>
  );
}