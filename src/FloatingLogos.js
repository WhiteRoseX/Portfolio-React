import React, { useMemo } from "react";
import {
    motion,
    useAnimationFrame,
    useMotionValue,
    useReducedMotion,
    useTransform,
} from "framer-motion";

const icon = (name) =>
    `https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/${name}/${name}-original.svg`;

const technologies = [
    { name: "React", src: icon("react") },
    { name: "JavaScript", src: icon("javascript") },
    { name: "Node.js", src: icon("nodejs") },
    { name: "TypeScript", src: icon("typescript") },
    { name: "Python", src: icon("python") },
    { name: "Swift", src: icon("swift") },
    { name: "SwiftUI", src: icon("swift") },
    { name: "Tailwind", src: icon("tailwindcss") },
    { name: "Vite", src: icon("vitejs") },
    { name: "Git", src: icon("git") },
    { name: "Docker", src: icon("docker") },
    { name: "HTML5", src: icon("html5") },
    { name: "CSS3", src: icon("css3") },
    { name: "Firebase", src: icon("firebase") },
    { name: "Linux", src: icon("linux") },
    { name: "PostgreSQL", src: icon("postgresql") },
];


/**
 * Génère des positions sur toute la largeur,
 * en évitant partiellement la zone centrale.
 */

function seededRandom(seed) {
    return function () {
        let t = (seed += 0x6d2b79f5);
        t = Math.imul(t ^ (t >>> 15), t | 1);
        t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
        return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
    };
}

function generatePositions(count, mobile = false) {
    const random = seededRandom(20261019 + count + (mobile ? 1 : 0));
    const positions = [];

    // Espacement adapté à la forme du rectangle
    const aspect = mobile ? 0.65 : 2.3;

    const marginX = mobile ? 9 : 3;
    const marginY = 8;

    for (let i = 0; i < count; i++) {
        let best = null;
        let bestScore = -Infinity;

        // On teste différentes positions aléatoires
        for (let attempt = 0; attempt < 50; attempt++) {
            const x = marginX + random() * (100 - marginX * 2);
            const y = marginY + random() * (100 - marginY * 2);

            // Distance par rapport aux logos existants
            let minDistance = Infinity;

            for (const point of positions) {
                const dx = (x - point.x) * aspect;
                const dy = y - point.y;

                const distance = Math.hypot(dx, dy);
                minDistance = Math.min(minDistance, distance);
            }

            // Protection légère du titre et de l'ordinateur
            // sans créer un grand couloir vide au centre
            const titleDistance =
                ((x - 50) / 13) ** 2 +
                ((y - 18) / 10) ** 2;

            const laptopDistance =
                ((x - 50) / 15) ** 2 +
                ((y - 48) / 16) ** 2;

            const penalty =
                (titleDistance < 1 ? 12 : 0) +
                (laptopDistance < 1 ? 9 : 0);

            // Petite variation aléatoire pour éviter
            // une distribution trop mathématique
            const score = minDistance + random() * 7 - penalty;

            if (score > bestScore) {
                bestScore = score;
                best = { x, y };
            }
        }

        if (!best) continue;

        positions.push(best);
    }

    return positions.map((point, i) => ({
        id: i,
        logo: technologies[i % technologies.length],
        x: point.x,
        y: point.y,
        size: mobile
            ? 25 + random() * 9
            : 30 + random() * 16,
        seed: random() * 10000,
    }));
}

/**
 * Mouvement organique "fractal-ish"
 * = somme de plusieurs oscillations lentes.
 */
function FloatingLogoItem({ item, reducedMotion }) {
    const { logo, x: baseXPercent, y: baseYPercent, size, seed, id } = item;

    const x = useMotionValue(0);
    const y = useMotionValue(0);
    const rotate = useMotionValue(0);
    const scale = useMotionValue(1);

    const opacity = useTransform(scale, [0.94, 1.08], [0.38, 0.72]);

    // paramètres propres à chaque logo
    const ampX = 65 + (id % 6) * 13;
    const ampY = 30 + (id % 5) * 11;
    const rotAmp = 4 + (id % 4) * 1.2;

    useAnimationFrame((time) => {
        if (reducedMotion) return;

        // temps en secondes
        const t = time / 1000;

        /**
         * fBm très simple :
         * plusieurs couches d'oscillations lentes,
         * avec phases/frequences différentes.
         */
        const dx =
            Math.sin(t * 0.45 + seed * 1.37) * ampX * 0.55 +
            Math.sin(t * 0.91 + seed * 2.11) * ampX * 0.28 +
            Math.cos(t * 1.63 + seed * 0.73) * ampX * 0.17;

        const dy =
            Math.cos(t * 0.38 + seed * 1.91) * ampY * 0.58 +
            Math.sin(t * 0.84 + seed * 0.67) * ampY * 0.27 +
            Math.cos(t * 1.47 + seed * 2.73) * ampY * 0.15;

        const driftX =
            Math.sin(t * 0.12 + seed * 3.2) * 12 +
            Math.cos(t * 0.07 + seed * 1.9) * 8;

        const driftY =
            Math.cos(t * 0.1 + seed * 2.4) * 10 +
            Math.sin(t * 0.06 + seed * 1.2) * 6;

        const r =
            Math.sin(t * 0.55 + seed * 1.4) * rotAmp +
            Math.cos(t * 0.21 + seed * 2.6) * rotAmp * 0.45;

        const s =
            1 +
            Math.sin(t * 0.9 + seed * 1.8) * 0.045 +
            Math.cos(t * 0.43 + seed * 0.95) * 0.02;

        x.set(dx + driftX);
        y.set(dy + driftY);
        rotate.set(r);
        scale.set(s);
    });

    return (
        <div
            className="absolute pointer-events-none"
            style={{
                left: `${baseXPercent}%`,
                top: `${baseYPercent}%`,
                transform: "translate(-50%, -50%)",
            }}
        >
            <motion.div
                style={{
                    x,
                    y,
                    rotate,
                    scale,
                    opacity: reducedMotion ? 0.5 : opacity,
                    width: size,
                    height: size,
                    filter: "drop-shadow(0 0 10px rgba(0, 220, 255, 0.10))",
                }}
            >
                <div className="relative w-full h-full">
                    <img
                        src={logo.src}
                        alt={logo.name}
                        draggable={false}
                        loading="lazy"
                        className="w-full h-full object-contain select-none"
                    />

                    {logo.name === "SwiftUI" && (
                        <span
                            className="
                absolute -bottom-1 -right-1
                text-[8px] md:text-[9px]
                font-semibold
                px-1 py-[1px]
                rounded
                bg-cyan-500/20
                text-cyan-200
                border border-cyan-400/20
                backdrop-blur-sm
              "
                        >
                            UI
                        </span>
                    )}
                </div>
            </motion.div>
        </div>
    );
}

function Layer({ items, reducedMotion, className = "" }) {
    return (
        <div className={`absolute inset-0 ${className}`}>
            {items.map((item) => (
                <FloatingLogoItem
                    key={item.id}
                    item={item}
                    reducedMotion={reducedMotion}
                />
            ))}
        </div>
    );
}

export default function FloatingLogos({ numberOfLogos = 28 }) {
    const reducedMotion = useReducedMotion();

    const desktopCount = Math.max(18, Math.min(40, numberOfLogos));
    const mobileCount = Math.min(12, Math.max(6, Math.round(numberOfLogos / 2.5)));

    const desktopItems = useMemo(
        () => generatePositions(desktopCount, false),
        [desktopCount]
    );

    const mobileItems = useMemo(
        () => generatePositions(mobileCount, true),
        [mobileCount]
    );

    return (
        <div
            aria-hidden="true"
            className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none"
        >
            <Layer
                items={desktopItems}
                reducedMotion={reducedMotion}
                className="hidden md:block"
            />
            <Layer
                items={mobileItems}
                reducedMotion={reducedMotion}
                className="block md:hidden"
            />
        </div>
    );
}