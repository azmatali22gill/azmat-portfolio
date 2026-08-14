"use client";

import { useCallback, useEffect, useState } from "react";
import { createPortal } from "react-dom";

const screenshots = Array.from(
  { length: 9 },
  (_, i) => `/screenshots/shot-${String(i + 1).padStart(2, "0")}.png`,
);

export default function Gallery() {
  const [index, setIndex] = useState(0);
  const [open, setOpen] = useState(false);

  const close = useCallback(() => {
    setOpen(false);
    document.body.style.overflow = "";
  }, []);

  const nav = useCallback((direction: number) => {
    setIndex((current) => (current + direction + screenshots.length) % screenshots.length);
  }, []);

  useEffect(() => {
    if (!open) return;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowRight") nav(1);
      if (e.key === "ArrowLeft") nav(-1);
    };
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open, close, nav]);

  return (
    <>
      <button className="btn btn-ghost" onClick={() => setOpen(true)}>
        View Screenshots
      </button>

      {open &&
        createPortal(
          <div
            className="gallery-overlay"
            onClick={(e) => {
              if (e.target === e.currentTarget) close();
            }}
          >
            <button className="gallery-close" onClick={close}>
              &times;
            </button>
            <button className="gallery-nav gallery-prev" onClick={() => nav(-1)}>
              &#10094;
            </button>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              className="gallery-img"
              src={screenshots[index]}
              alt="Readlink screenshot"
            />
            <button className="gallery-nav gallery-next" onClick={() => nav(1)}>
              &#10095;
            </button>
            <div className="gallery-counter">
              {index + 1} / {screenshots.length}
            </div>
          </div>,
          document.body,
        )}
    </>
  );
}