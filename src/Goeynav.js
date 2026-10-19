
import React, {
    useEffect,
    useLayoutEffect,
    useRef,
    useState,
} from "react";

const PALETTE = {
    1: "#27CAB6",
    2: "#19AFA6",
    3: "#68E1D2",
    4: "#B5FFF2",
};

const random = (min, max) =>
    min + Math.random() * (max - min);

const GooeyNav = ({
    items = [],
    animationTime = 600,
    particleCount = 15,
    particleDistances = [90, 10],
    particleR = 100,
    timeVariance = 300,
    colors = [1, 2, 3, 1, 2, 3, 1, 4],
    initialActiveIndex = 0,
    activeSectionIndex,
    onSelect,
}) => {
    const containerRef = useRef(null);
    const navRef = useRef(null);
    const pillRef = useRef(null);
    const particlesRef = useRef(null);

    const [activeIndex, setActiveIndex] = useState(
        initialActiveIndex
    );

    // Synchronisation avec la section visible.
    // Ne déclenche pas les particules.
    useEffect(() => {
        if (
            Number.isInteger(activeSectionIndex) &&
            activeSectionIndex >= 0 &&
            activeSectionIndex < items.length
        ) {
            setActiveIndex(activeSectionIndex);
        }
    }, [activeSectionIndex, items.length]);

    // Positionnement du fond vert et des particules.
    const placeEffects = (element) => {
        const root = containerRef.current;

        if (!root || !element) return;

        const rootRect = root.getBoundingClientRect();
        const itemRect = element.getBoundingClientRect();

        const position = {
            left: `${itemRect.left - rootRect.left}px`,
            top: `${itemRect.top - rootRect.top}px`,
            width: `${itemRect.width}px`,
            height: `${itemRect.height}px`,
        };

        if (pillRef.current) {
            Object.assign(pillRef.current.style, position);
        }

        if (particlesRef.current) {
            Object.assign(
                particlesRef.current.style,
                position
            );
        }
    };

    // Mise à jour lors du scroll ou du redimensionnement.
    useLayoutEffect(() => {
        const update = () => {
            const item =
                navRef.current?.children[activeIndex];

            if (item) {
                placeEffects(item);
            }
        };

        update();

        const observer =
            typeof ResizeObserver !== "undefined"
                ? new ResizeObserver(update)
                : null;

        if (observer && containerRef.current) {
            observer.observe(containerRef.current);
        }

        window.addEventListener("resize", update);

        return () => {
            observer?.disconnect();
            window.removeEventListener("resize", update);
        };
    }, [activeIndex, items.length]);

    // Évite une animation depuis le coin supérieur
    // gauche au premier chargement.
    useEffect(() => {
        const frame = requestAnimationFrame(() => {
            pillRef.current?.classList.add("gn-ready");
        });

        return () => cancelAnimationFrame(frame);
    }, []);

    // Génération des particules Gooey.
    const makeParticles = () => {
        const layer = particlesRef.current;

        if (!layer) return;

        if (
            window.matchMedia?.(
                "(prefers-reduced-motion: reduce)"
            ).matches
        ) {
            layer.replaceChildren();
            return;
        }

        // Nettoyage des particules précédentes.
        layer.replaceChildren();

        const fragment =
            document.createDocumentFragment();

        const count = Math.max(
            0,
            Math.min(60, Math.floor(particleCount))
        );

        if (count === 0) return;

        for (let i = 0; i < count; i++) {
            // Répartition circulaire avec variation
            // naturelle de direction.
            const angle =
                (i / count) * Math.PI * 2 +
                random(-0.14, 0.14);

            const startRadius =
                particleDistances[0] *
                random(0.75, 1.12);

            const endRadius =
                particleDistances[1] *
                random(0.6, 1.6);

            // Légère courbure des trajectoires.
            const bend = random(
                -particleR * 0.12,
                particleR * 0.12
            );

            const startX =
                Math.cos(angle) * startRadius;

            const startY =
                Math.sin(angle) * startRadius;

            const endX =
                Math.cos(angle) * endRadius;

            const endY =
                Math.sin(angle) * endRadius;

            const midX =
                startX * 0.35 +
                endX * 0.65 -
                Math.sin(angle) * bend;

            const midY =
                startY * 0.35 +
                endY * 0.65 +
                Math.cos(angle) * bend;

            // Durée et décalage propres à chaque goutte.
            const duration = Math.max(
                450,
                animationTime * 1.55 +
                random(
                    -timeVariance / 2,
                    timeVariance / 2
                )
            );

            const delay = random(0, 70);
            const size = random(9, 17);

            const colorId =
                colors[
                Math.floor(Math.random() * colors.length)
                ];

            const color =
                PALETTE[colorId] || PALETTE[1];

            const particle =
                document.createElement("span");

            const dot =
                document.createElement("span");

            particle.className = "gn-particle";
            dot.className = "gn-dot";

            // Propriétés transmises aux animations CSS.
            const values = {
                "--gn-start-x": `${startX}px`,
                "--gn-start-y": `${startY}px`,
                "--gn-mid-x": `${midX}px`,
                "--gn-mid-y": `${midY}px`,
                "--gn-end-x": `${endX}px`,
                "--gn-end-y": `${endY}px`,
                "--gn-time": `${duration}ms`,
                "--gn-delay": `${delay}ms`,
                "--gn-size": `${size}px`,
                "--gn-color": color,
            };

            Object.entries(values).forEach(
                ([key, value]) => {
                    particle.style.setProperty(key, value);
                }
            );

            particle.appendChild(dot);

            // Suppression automatique de chaque particule.
            particle.addEventListener(
                "animationend",
                (event) => {
                    if (event.target === particle) {
                        particle.remove();
                    }
                },
                { once: true }
            );

            fragment.appendChild(particle);
        }

        // Insertion de toutes les particules ensemble.
        layer.appendChild(fragment);
    };

    // Gestion des clics.
    const handleSelect = (item, index, element) => {
        setActiveIndex(index);

        // Le fond commence sa transition.
        placeEffects(element);

        // Les particules apparaissent autour
        // de l'onglet de destination.
        makeParticles();

        // La logique de scroll reste gérée par App.js.
        if (typeof onSelect === "function") {
            onSelect(item, index);
        }
    };

    return (
        <>
            <style>
                {`
          /* CONTENEUR */

          .gn-root {
            position: relative;
            isolation: isolate;
            overflow: visible;
          }

          /* FOND DE SÉLECTION OPAQUE */

          .gn-pill {
            position: absolute;
            z-index: 0;

            border-radius: 9999px;

            background: #27CAB6;

            box-shadow:
              0 4px 14px rgba(39, 202, 182, 0.25);

            pointer-events: none;
          }

          .gn-pill.gn-ready {
            transition:
              left 430ms cubic-bezier(0.22, 1, 0.36, 1),
              top 430ms cubic-bezier(0.22, 1, 0.36, 1),
              width 430ms cubic-bezier(0.22, 1, 0.36, 1),
              height 430ms cubic-bezier(0.22, 1, 0.36, 1);
          }

          /* NAVIGATION */

          .gn-nav {
            position: relative;
            z-index: 2;
          }

          .gn-list {
            display: flex;
            align-items: center;
            gap: 2rem;

            padding: 0 1rem;
            margin: 0;

            list-style: none;
          }

          .gn-item {
            position: relative;
            flex-shrink: 0;
            border-radius: 9999px;
          }

          .gn-link {
            display: block;
            position: relative;

            padding: 0.6em 1em;

            color: #ffffff;
            text-decoration: none;
            white-space: nowrap;

            border-radius: 9999px;
            outline-offset: 4px;

            transition: color 180ms ease;
            cursor: pointer;
          }

          .gn-link:hover {
            color: #b5fff2;
          }

          .gn-active .gn-link,
          .gn-active .gn-link:hover {
            color: #ffffff;
          }

          .gn-link:focus-visible {
            outline: 2px solid #b5fff2;
          }

          /* COUCHE DES PARTICULES */

          .gn-particles-layer {
            position: absolute;
            z-index: 5;

            overflow: visible;
            pointer-events: none;

            /* On garde les particules visibles */
            filter: none;
          }

          /* PARTICULE INDIVIDUELLE */

          .gn-particle {
            position: absolute;

            top: 50%;
            left: 50%;

            width: var(--gn-size);
            height: var(--gn-size);

            margin-left:
              calc(var(--gn-size) * -0.5);

            margin-top:
              calc(var(--gn-size) * -0.5);

            opacity: 0;
            pointer-events: none;

            animation:
              gn-flight
              var(--gn-time)
              cubic-bezier(0.2, 0.7, 0.35, 1)
              var(--gn-delay)
              both;

            will-change: transform, opacity;
          }

          /* GOUTTE LUMINEUSE */

          .gn-dot {
            display: block;

            width: 100%;
            height: 100%;

            border-radius: 50%;

            background: var(--gn-color);

            box-shadow:
              0 0 7px 1px
                rgba(39, 202, 182, 0.65),
              0 0 15px
                rgba(104, 225, 210, 0.25);

            animation:
              gn-drop
              var(--gn-time)
              ease-in-out
              var(--gn-delay)
              both;
          }

          /* Reflet discret sur les gouttes */

          .gn-dot::after {
            content: "";

            display: block;

            width: 38%;
            height: 38%;

            border-radius: 50%;

            background:
              rgba(255, 255, 255, 0.65);

            transform:
              translate(65%, 45%);

            filter: blur(1px);
          }

          /* TRAJECTOIRE DES PARTICULES */

          @keyframes gn-flight {
            0% {
              transform:
                translate(
                  var(--gn-start-x),
                  var(--gn-start-y)
                )
                scale(0.4);

              opacity: 0;
            }

            12% {
              opacity: 1;
            }

            50% {
              transform:
                translate(
                  var(--gn-mid-x),
                  var(--gn-mid-y)
                )
                scale(1);

              opacity: 1;
            }

            78% {
              opacity: 0.95;
            }

            100% {
              transform:
                translate(
                  var(--gn-end-x),
                  var(--gn-end-y)
                )
                scale(0.3);

              opacity: 0;
            }
          }

          /* RESPIRATION DES GOUTTES */

          @keyframes gn-drop {
            0% {
              transform: scale(0.35);
            }

            30% {
              transform: scale(1.05);
            }

            65% {
              transform: scale(0.85);
            }

            100% {
              transform: scale(0);
            }
          }

          /* ACCESSIBILITÉ */

          @media (
            prefers-reduced-motion: reduce
          ) {
            .gn-pill.gn-ready {
              transition: none;
            }

            .gn-link {
              transition: none;
            }
          }
        `}
            </style>

            <div
                className="gn-root"
                ref={containerRef}
            >
                {/* Fond turquoise mobile */}
                <span
                    className="gn-pill"
                    ref={pillRef}
                    aria-hidden="true"
                />

                {/* Navigation principale */}
                <nav
                    className="gn-nav"
                    aria-label="Navigation principale"
                >
                    <ul
                        className="gn-list"
                        ref={navRef}
                    >
                        {items.map((item, index) => {
                            const isActive =
                                activeIndex === index;

                            return (
                                <li
                                    key={`${item.label}-${index}`}
                                    className={`gn-item ${isActive ? "gn-active" : ""
                                        }`}
                                >
                                    <a
                                        className="gn-link"
                                        href={item.href || "#"}
                                        aria-current={
                                            isActive
                                                ? "page"
                                                : undefined
                                        }
                                        onClick={(event) => {
                                            event.preventDefault();

                                            handleSelect(
                                                item,
                                                index,
                                                event.currentTarget.parentElement
                                            );
                                        }}
                                        onKeyDown={(event) => {
                                            if (event.key === " ") {
                                                event.preventDefault();

                                                handleSelect(
                                                    item,
                                                    index,
                                                    event.currentTarget.parentElement
                                                );
                                            }
                                        }}
                                    >
                                        {item.label}
                                    </a>
                                </li>
                            );
                        })}
                    </ul>
                </nav>

                {/* Particules visibles au-dessus de la barre */}
                <span
                    className="gn-particles-layer"
                    ref={particlesRef}
                    aria-hidden="true"
                />
            </div>
        </>
    );
};

export default GooeyNav;
