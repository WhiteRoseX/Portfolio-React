import React, { useEffect, useMemo, useRef, useState } from "react";
import { motion, useAnimation, useReducedMotion } from "framer-motion";

const logos = [
  "https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png",
  "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f1/Vitejs-logo.svg/640px-Vitejs-logo.svg.png",
  "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/640px-React-icon.svg.png",
  "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Node.js_logo_2015.svg/640px-Node.js_logo_2015.svg.png",
];

const rand = (min, max) => Math.random() * (max - min) + min;
const clamp = (v, a, b) => Math.min(b, Math.max(a, v));

const labelFromSrc = (src) =>
  src.includes("React") ? "React" :
  src.includes("Node") ? "Node.js" :
  src.includes("Vite") ? "Vite" :
  src.includes("JavaScript") ? "JavaScript" : "Logo";

function randomPoint(w, h, size = 0, margin = 40) {
  // garde une marge + la taille de l'élément pour ne pas coller aux bords
  const mX = margin + size / 2;
  const mY = margin + size / 2;
  return {
    x: rand(mX, Math.max(mX, w - mX)),
    y: rand(mY, Math.max(mY, h - mY)),
  };
}

/**
 * Génère N positions initiales "bien réparties" : on divise l'écran
 * en une grille ~sqrt(N) x ~sqrt(N) et on prend un point aléatoire dans chaque cellule.
 */
function seededPositions(n, w, h, size = 0) {
  const cols = Math.ceil(Math.sqrt(n));
  const rows = Math.ceil(n / cols);
  const cellW = w / cols;
  const cellH = h / rows;
  const out = [];
  let k = 0;
  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols && k < n; c++, k++) {
      const cx = c * cellW;
      const cy = r * cellH;
      const margin = 24 + size / 2;
      const x = rand(cx + margin, Math.max(cx + margin, cx + cellW - margin));
      const y = rand(cy + margin, Math.max(cy + margin, cy + cellH - margin));
      out.push({ x, y });
    }
  }
  return out;
}

/* -------------------- Enfant: 1 logo flottant -------------------- */
function FloatingLogoItem({ src, size, baseOpacity, start, getViewport }) {
  const controls = useAnimation();
  const prefersReduced = useReducedMotion();
  const runningRef = useRef(true);

  useEffect(() => {
    runningRef.current = true;
    return () => { runningRef.current = false; };
  }, []);

  useEffect(() => {
    if (prefersReduced) return;

    async function loop() {
      // position de départ
      await controls.set({
        x: start.x,
        y: start.y,
        scale: 1,
        opacity: baseOpacity,
      });

      // boucle infinie sans délai ajouté => pas de "pause"
      while (runningRef.current) {
        const { w, h } = getViewport();
        const next = randomPoint(w, h, size);
        const scaleTo = rand(0.52, 0.80);
        const opacityTo = clamp(baseOpacity + rand(-0.2, 0.2), 0.35, 0.6);

        await controls.start({
          x: next.x,
          y: next.y,
          scale: scaleTo,
          opacity: opacityTo,
          transition: {
            duration: rand(6, 12), // trajets plus longs => flottement doux
            ease: "easeInOut",
          },
        });
      }
    }

    loop();

    return () => {
      controls.stop();
    };
  }, [controls, prefersReduced, baseOpacity, size, getViewport, start.x, start.y]);

  if (prefersReduced) {
    // version statique dispersée
    return (
      <img
        src={src}
        alt={labelFromSrc(src)}
        loading="lazy"
        width={size}
        height={size}
        style={{
          position: "absolute",
          left: start.x,
          top: start.y,
          opacity: baseOpacity,
          objectFit: "contain",
          willChange: "transform, opacity",
        }}
      />
    );
  }

  return (
    <motion.img
      src={src}
      alt={labelFromSrc(src)}
      loading="lazy"
      width={size}
      height={size}
      initial={{ x: start.x, y: start.y, opacity: baseOpacity, scale: 1 }}
      animate={controls}
      style={{
        position: "absolute",
        objectFit: "contain",
        willChange: "transform, opacity",
        pointerEvents: "none",
      }}
      // petit effet si jamais tu réactives pointer-events
      whileHover={{ scale: 1.1 }}
    />
  );
}

/* -------------------- Parent: gère viewport & seed -------------------- */
const FloatingLogos = ({ numberOfLogos = 20 }) => {
  const viewportRef = useRef({ w: 0, h: 0 });
  const [, force] = useState(0);

  // Mesure viewport une fois, puis on met à jour sur resize
  useEffect(() => {
    const measure = () => {
      viewportRef.current.w = window.innerWidth;
      viewportRef.current.h = window.innerHeight;
      // on force un render au premier measure pour éviter le (0,0)
      force((x) => x + 1);
    };
    measure();
    window.addEventListener("resize", measure, { passive: true });
    return () => window.removeEventListener("resize", measure);
  }, []);

  const getViewport = () => viewportRef.current;

  const items = useMemo(() => {
    const { w, h } = viewportRef.current;
    if (!w || !h) return [];

    // tailles/opacités variées
    const sizes = Array.from({ length: numberOfLogos }, () => Math.round(rand(24, 50)));
    const starts = seededPositions(numberOfLogos, w, h, 40); // seed très dispersé

    return Array.from({ length: numberOfLogos }).map((_, i) => ({
      id: i,
      src: logos[i % logos.length],
      size: sizes[i],
      baseOpacity: 0.3,
      start: starts[i],
    }));
  }, [numberOfLogos, viewportRef.current.w, viewportRef.current.h]);

  if (!viewportRef.current.w || !viewportRef.current.h) return null;

  return (
    <div
      aria-hidden
      style={{
        position: "absolute",
        inset: 0,
        overflow: "hidden",
        pointerEvents: "none",
        zIndex: 0,
      }}
    >
      {items.map((it) => (
        <FloatingLogoItem
          key={it.id}
          src={it.src}
          size={it.size}
          baseOpacity={it.baseOpacity}
          start={it.start}
          getViewport={getViewport}
        />
      ))}
    </div>
  );
};

export default FloatingLogos;
