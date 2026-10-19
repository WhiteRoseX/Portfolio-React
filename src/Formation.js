
import React, { useRef } from "react";
import {
    motion,
    useScroll,
    useSpring,
    useReducedMotion,
} from "framer-motion";

import SectionBackground from "./SectionBackground";

// =====================================================
// FORMATIONS
// =====================================================

const steps = [
    {
        id: "bac",
        title: "Bac Général",
        subtitle: "Spécialités Maths & SES",
        img: "/img/Lavoisier.jpg",
        alt: "Bac Général",
        desc:
            "Base scientifique et économique : raisonnement, analyse et curiosité. Cette étape m’a donné une vraie appétence pour la modélisation et la logique.",
    },
    {
        id: "but",
        title: "BUT Informatique",
        subtitle: "2 ans d’apprentissage",
        img: "/img/sorbonne.webp",
        alt: "BUT Informatique",
        desc:
            "Développement, algorithmique, bases de données, POO et gestion de projet. Projets en équipe, bonnes pratiques et esprit produit.",
    },
    {
        id: "cnam",
        title: "Formation Informatique & Cybersécurité",
        subtitle: "Conservatoire national des arts et métiers",
        img: "https://www.cnam-bourgognefranchecomte.fr/sites/default/files/2025-06/lecnam_logo-2024_rvb.png",
        alt: "Logo officiel du Cnam",
        isLogo: true,
        desc:
            "Approfondissement de mes connaissances en informatique et en cybersécurité. Étude des systèmes informatiques, des réseaux et des enjeux liés à la sécurité des systèmes d’information.",
    },
    {
        id: "42",
        title: "École 42 Paris",
        subtitle: "Formation en développement informatique",
        img: "https://upload.wikimedia.org/wikipedia/commons/8/8d/42_Logo.svg",
        alt: "Logo officiel de l'École 42",
        isLogo: true,
        desc:
            "Apprentissage intensif de la programmation à travers une pédagogie fondée sur les projets, l’autonomie et l’entraide. Développement en C, environnement Unix/Linux, algorithmique et résolution de problèmes.",
    },
];

// =====================================================
// ANIMATIONS
// =====================================================

const ease = [0.22, 1, 0.36, 1];

const viewportSettings = {
    once: false,
    amount: 0.15,
    margin: "-5% 0px -5% 0px",
};

// =====================================================
// IMAGE RONDE ANIMÉE
// =====================================================

function FormationImage({ step, mobile = false, reducedMotion }) {
    return (
        <motion.img
            src={step.img}
            alt={step.alt}
            loading="lazy"
            initial={
                reducedMotion
                    ? false
                    : {
                        opacity: 0,
                        scale: 0.7,
                        y: 12,
                    }
            }
            whileInView={
                reducedMotion
                    ? undefined
                    : {
                        opacity: 1,
                        scale: 1,
                        y: 0,
                    }
            }
            viewport={{
                once: false,
                amount: 0.3,
            }}
            transition={{
                duration: reducedMotion ? 0 : 0.65,
                ease,
            }}
            className={`
        rounded-full
        shadow-md
        ${mobile
                    ? "h-12 w-12"
                    : "h-24 w-24 md:h-28 md:w-28"
                }
        ${step.isLogo
                    ? `object-contain bg-white ${mobile ? "p-1.5" : "p-3"
                    }`
                    : "object-cover"
                }
      `}
        />
    );
}

// =====================================================
// CARTE ANIMÉE
// =====================================================

function FormationCard({
    step,
    right = false,
    mobile = false,
    reducedMotion,
}) {
    return (
        <motion.article
            initial={
                reducedMotion
                    ? false
                    : {
                        opacity: 0,
                        x: mobile ? 0 : right ? 28 : -28,
                        y: mobile ? 22 : 14,
                    }
            }
            whileInView={
                reducedMotion
                    ? undefined
                    : {
                        opacity: 1,
                        x: 0,
                        y: 0,
                    }
            }
            viewport={viewportSettings}
            transition={{
                duration: reducedMotion ? 0 : 0.7,
                ease,
            }}
            className={`
        bg-gray-800
        rounded-2xl
        shadow-md
        ${mobile
                    ? "p-4"
                    : "p-6 md:p-8"
                }
      `}
        >
            <h3
                className={
                    mobile
                        ? "text-xl font-bold text-white"
                        : "text-2xl md:text-3xl font-bold text-white"
                }
            >
                {step.title}
            </h3>

            <h4
                className={
                    mobile
                        ? "text-base text-teal-400 mt-1"
                        : "text-lg md:text-xl text-teal-400 mt-1"
                }
            >
                {step.subtitle}
            </h4>

            <p
                className={
                    mobile
                        ? "mt-2 text-sm text-gray-300 leading-relaxed"
                        : "mt-3 text-sm md:text-base text-gray-300 leading-relaxed"
                }
            >
                {step.desc}
            </p>
        </motion.article>
    );
}

// =====================================================
// COMPOSANT FORMATION
// =====================================================

function Formation() {
    const sectionRef = useRef(null);
    const reducedMotion = useReducedMotion();

    // Progression de lecture dans la section
    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ["start 80%", "end 25%"],
    });

    // Progression lissée pour la ligne de timeline
    const smoothProgress = useSpring(scrollYProgress, {
        stiffness: 90,
        damping: 28,
        mass: 0.5,
    });

    return (
        <section
            ref={sectionRef}
            className="bg-[#171E2D] text-gray-200"
        >
            {/* ================= EN-TÊTE ================= */}

            <div className="container mx-auto px-4 md:pt-20">
                <motion.h2
                    initial={
                        reducedMotion
                            ? false
                            : {
                                opacity: 0,
                                y: 20,
                            }
                    }
                    whileInView={
                        reducedMotion
                            ? undefined
                            : {
                                opacity: 1,
                                y: 0,
                            }
                    }
                    viewport={viewportSettings}
                    transition={{
                        duration: 0.7,
                        ease,
                    }}
                    className="text-center text-4xl md:text-5xl font-extrabold text-white glitch-effect"
                >
                    Formation
                </motion.h2>

                <motion.p
                    initial={
                        reducedMotion
                            ? false
                            : {
                                opacity: 0,
                                y: 15,
                            }
                    }
                    whileInView={
                        reducedMotion
                            ? undefined
                            : {
                                opacity: 1,
                                y: 0,
                            }
                    }
                    viewport={viewportSettings}
                    transition={{
                        duration: 0.7,
                        delay: 0.1,
                        ease,
                    }}
                    className="mx-auto mt-3 max-w-2xl text-center text-gray-400 text-sm md:text-base"
                >
                    Un parcours clair et structuré, sans artifices.
                </motion.p>
            </div>

            {/* ================= TIMELINE DESKTOP ================= */}

            <div className="container mx-auto px-4 md:pb-28">
                <div className="relative mx-auto hidden max-w-5xl md:block">

                    {/* Ligne centrale grise */}
                    <div
                        className="
              absolute left-1/2 top-0 bottom-0
              -translate-x-1/2
              w-px bg-gray-700
            "
                    />

                    {/* Ligne turquoise qui progresse au scroll */}
                    <motion.div
                        aria-hidden="true"
                        style={{
                            scaleY: reducedMotion ? 1 : smoothProgress,
                            transformOrigin: "top center",
                        }}
                        className="
              absolute left-1/2 top-0 bottom-0
              -translate-x-1/2
              w-[2px] bg-teal-400/70
            "
                    />

                    <ul className="space-y-20 mt-12">
                        {steps.map((s, idx) => {
                            const right = idx % 2 === 1;

                            return (
                                <li
                                    key={s.id}
                                    className="relative grid grid-cols-2 items-start gap-12"
                                >
                                    {/* Image ronde */}
                                    <div
                                        className="
                      absolute left-1/2
                      -translate-x-1/2
                      -top-2 z-10
                    "
                                    >
                                        <FormationImage
                                            step={s}
                                            reducedMotion={reducedMotion}
                                        />
                                    </div>

                                    {/* Carte de contenu */}
                                    <div
                                        className={
                                            right
                                                ? "col-start-2"
                                                : "col-start-1"
                                        }
                                    >
                                        <FormationCard
                                            step={s}
                                            right={right}
                                            reducedMotion={reducedMotion}
                                        />
                                    </div>

                                    {/* Colonne vide opposée */}
                                    <div
                                        className={
                                            right
                                                ? "col-start-1"
                                                : "col-start-2"
                                        }
                                    />
                                </li>
                            );
                        })}
                    </ul>
                </div>

                {/* ================= TIMELINE MOBILE ================= */}

                <div className="md:hidden mt-10 pb-16">
                    <div className="relative pl-16">

                        {/* Ligne verticale grise */}
                        <div
                            className="
                absolute left-6 top-0 bottom-0
                w-px bg-gray-700
              "
                        />

                        {/* Progression turquoise au scroll */}
                        <motion.div
                            aria-hidden="true"
                            style={{
                                scaleY: reducedMotion ? 1 : smoothProgress,
                                transformOrigin: "top center",
                            }}
                            className="
                absolute left-6 top-0 bottom-0
                w-[2px] bg-teal-400/70
              "
                        />

                        <ul className="space-y-10">
                            {steps.map((s) => (
                                <li
                                    key={s.id}
                                    className="relative"
                                >
                                    {/* Image alignée à la timeline */}
                                    <div
                                        className="
                      absolute
                      -left-16 top-2
                      z-10
                    "
                                    >
                                        <FormationImage
                                            step={s}
                                            mobile
                                            reducedMotion={reducedMotion}
                                        />
                                    </div>

                                    {/* Carte mobile */}
                                    <FormationCard
                                        step={s}
                                        mobile
                                        reducedMotion={reducedMotion}
                                    />
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Formation;
