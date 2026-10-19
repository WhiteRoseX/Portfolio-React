
import React, { useEffect, useRef, useState } from "react";
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link,
    useLocation,
} from "react-router-dom";
import { Element, scroller } from "react-scroll";
import Typewriter from "typewriter-effect";
import { Canvas, useFrame } from "@react-three/fiber";
import {
    OrbitControls,
    PerspectiveCamera,
    useGLTF,
} from "@react-three/drei";

import Projects from "./Projects.js";
import Contact from "./Contact.js";
import About from "./About.js";
import Formation from "./Formation.js";
import Experience from "./Experience.js";
import FloatingLogos from "./FloatingLogos.js";
import GooeyNav from "./Goeynav.js";

// Modèle 3D de l'ordinateur
function ComputerModel() {
    const { scene } = useGLTF("/models/laptop.glb");
    const laptopRef = useRef(null);

    useFrame((_, delta) => {
        if (laptopRef.current) {
            laptopRef.current.rotation.y += delta * 0.6;
        }
    });

    return (
        <group ref={laptopRef}>
            <primitive
                object={scene}
                scale={5}
                position={[0, -1, 0]}
            />
        </group>
    );
}

// Navigation automatique vers les sections
function ScrollToSection() {
    const location = useLocation();

    useEffect(() => {
        const queryParams = new URLSearchParams(location.search);
        const section = queryParams.get("scrollTo");

        if (section) {
            scroller.scrollTo(section, {
                duration: 800,
                delay: 0,
                smooth: "easeInOutQuart",
                offset: -85,
            });
        }
    }, [location]);

    return null;
}

const scrollLink = (section) => `/?scrollTo=${section}`;

function App() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const [activeSectionIndex, setActiveSectionIndex] = useState(0);
    const isAutoScrolling = useRef(false);
    const scrollTimeoutRef = useRef(null);

    useEffect(() => {
        const sections = [
            "home",
            "projects",
            "formation",
            "experience",
            "about",
            "contact",
        ];

        let frameId = null;

        const updateActiveSection = () => {
            frameId = null;

            // Ne pas changer la sélection pendant
            // une navigation automatique
            if (isAutoScrolling.current) {
                return;
            }

            // Ligne virtuelle située à 35 % de l'écran
            const activationLine = Math.min(
                window.innerHeight * 0.35,
                260
            );

            let currentIndex = 0;

            sections.forEach((id, index) => {
                const element = document.getElementById(id);

                if (!element) return;

                const rect = element.getBoundingClientRect();

                if (rect.top <= activationLine) {
                    currentIndex = index;
                }
            });

            // Dernière section quand on atteint le bas
            const atBottom =
                window.scrollY + window.innerHeight >=
                document.documentElement.scrollHeight - 5;

            if (atBottom) {
                currentIndex = sections.length - 1;
            }

            setActiveSectionIndex((previous) =>
                previous === currentIndex ? previous : currentIndex
            );
        };

        const scheduleUpdate = () => {
            if (frameId !== null) return;

            frameId = requestAnimationFrame(updateActiveSection);
        };

        // Première détection
        scheduleUpdate();

        window.addEventListener("scroll", scheduleUpdate, {
            passive: true,
        });

        window.addEventListener("resize", scheduleUpdate);

        return () => {
            window.removeEventListener("scroll", scheduleUpdate);
            window.removeEventListener("resize", scheduleUpdate);

            if (frameId !== null) {
                cancelAnimationFrame(frameId);
            }
        };
    }, []);

    useEffect(() => {
        return () => {
            if (scrollTimeoutRef.current) {
                clearTimeout(scrollTimeoutRef.current);
            }
        };
    }, []);


    const closeMobileMenu = () => setIsMobileMenuOpen(false);

    const gooeyItems = [
        { label: "Home", href: scrollLink("home") },
        { label: "Mes Projets", href: scrollLink("projects") },
        { label: "Formation", href: scrollLink("formation") },
        { label: "Expériences", href: scrollLink("experience") },
        { label: "À propos", href: scrollLink("about") },
        { label: "Contact", href: scrollLink("contact") },
    ];

    return (
        <Router>
            <Element name="home" />

            <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 text-gray-200 relative">
                <ScrollToSection />

                {/* BARRE DE NAVIGATION */}

                <header
                    className="
    fixed
    top-0
    left-0
    w-full
    z-50
    py-3
    bg-[#111827]/75
    backdrop-blur-2xl
    backdrop-saturate-150
    border-b border-white/10
    shadow-[0_8px_32px_rgba(0,0,0,0.15)]
  "
                    role="banner"
                >

                    <div className="container mx-auto px-4 flex justify-between items-center">
                        <h1 className="text-2xl font-bold text-teal-400">
                            <Link
                                to={scrollLink("home")}
                                onClick={closeMobileMenu}
                            >
                                LD
                            </Link>
                        </h1>

                        {/* Menu burger mobile */}
                        <button
                            type="button"
                            className="md:hidden p-2 rounded-lg bg-gray-800/50 border border-teal-400/30 text-teal-400 hover:bg-teal-400/10 hover:border-teal-400/60 focus:outline-none transition-all duration-300 backdrop-blur-sm"
                            onClick={() =>
                                setIsMobileMenuOpen((open) => !open)
                            }
                            aria-expanded={isMobileMenuOpen}
                            aria-label={
                                isMobileMenuOpen
                                    ? "Fermer le menu"
                                    : "Ouvrir le menu"
                            }
                            style={{
                                boxShadow: "0 0 10px rgba(0, 229, 255, 0.3)",
                            }}
                        >
                            <svg
                                className="w-6 h-6"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                                aria-hidden="true"
                                style={{
                                    filter:
                                        "drop-shadow(0 0 5px rgba(0, 229, 255, 0.5))",
                                }}
                            >
                                {isMobileMenuOpen ? (
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M6 18L18 6M6 6l12 12"
                                    />
                                ) : (
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M4 6h16M4 12h16M4 18h16"
                                    />
                                )}
                            </svg>
                        </button>

                        {/* Navigation desktop */}
                        <div className="relative hidden md:block">
                            <GooeyNav
                                items={gooeyItems.map((item) => ({
                                    ...item,
                                    href: "#",
                                }))}

                                particleCount={12}
                                particleDistances={[64, 12]}
                                particleR={65}
                                animationTime={520}
                                timeVariance={140}
                                colors={[1, 1, 2, 2, 3, 4]}
                                activeSectionIndex={activeSectionIndex}
                                initialActiveIndex={0}
                                onSelect={(item, index) => {
                                    const map = {
                                        home: "home",
                                        "mes projets": "projects",
                                        formation: "formation",
                                        "expériences": "experience",
                                        "à propos": "about",
                                        contact: "contact",
                                    };

                                    const section = map[item.label.toLowerCase()] || "home";

                                    // Bloquer la détection automatique du scroll
                                    isAutoScrolling.current = true;

                                    // Sélectionner directement la destination
                                    setActiveSectionIndex(index);

                                    // Mettre à jour l'URL
                                    window.history.pushState(
                                        {},
                                        "",
                                        `/?scrollTo=${section}`
                                    );

                                    // Déclencher le scroll existant
                                    window.dispatchEvent(
                                        new PopStateEvent("popstate")
                                    );

                                    // Annuler un éventuel ancien déverrouillage
                                    if (scrollTimeoutRef.current) {
                                        clearTimeout(scrollTimeoutRef.current);
                                    }

                                    // Réactiver la détection après la transition
                                    scrollTimeoutRef.current = setTimeout(() => {
                                        isAutoScrolling.current = false;
                                        scrollTimeoutRef.current = null;
                                    }, 950);
                                }}

                            />
                        </div>

                        {/* Menu mobile */}
                        {isMobileMenuOpen && (
                            <div className="absolute top-full left-0 w-full bg-gray-900/95 backdrop-blur-sm md:hidden z-50">
                                <ul className="flex flex-col space-y-4 p-6">
                                    {gooeyItems.map((item) => (
                                        <li key={item.label}>
                                            <Link
                                                to={item.href}
                                                className="block hover:text-teal-400 transition-colors text-lg"
                                                onClick={closeMobileMenu}
                                            >
                                                {item.label}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        )}
                    </div>
                </header>

                <Routes>
                    <Route
                        path="/"
                        element={
                            <main>
                                {/*
                  SECTION D'ACCUEIL
                  Toute la largeur est disponible pour les logos.
                */}
                                <section
                                    id="home"
                                    className="relative isolate w-full overflow-hidden py-20 md:py-40 text-center"
                                    aria-label="Section d'accueil"
                                >
                                    {/* LOGOS FLOTTANTS EN ARRIÈRE-PLAN */}
                                    <div
                                        className="absolute inset-0 z-0 pointer-events-none"
                                        aria-hidden="true"
                                    >
                                        <FloatingLogos numberOfLogos={30} />
                                    </div>

                                    {/* CONTENU CENTRAL AU-DESSUS DES LOGOS */}
                                    <div className="container mx-auto px-4 relative z-10">

                                        {/* Titre animé */}
                                        <h2 className="text-2xl md:text-4xl font-extrabold text-teal-400 mb-4 glitch-effect">
                                            <Typewriter
                                                options={{
                                                    strings: [
                                                        "Lucas Djavid",
                                                        "Développeur Full-Stack",
                                                        "Développeur iOS",
                                                    ],
                                                    autoStart: true,
                                                    loop: true,
                                                    deleteSpeed: 50,
                                                }}
                                            />
                                        </h2>

                                        <p className="text-base md:text-lg text-gray-400 mb-8" />

                                        {/* Bouton Mes Projets */}
                                        <Link
                                            to={scrollLink("projects")}
                                            className="btn-futuristic btn-primary btn-particles inline-block px-4 py-2 text-xs md:text-sm relative z-10"
                                        >
                                            <span>Mes Projets</span>
                                        </Link>

                                        {/* ORDINATEUR 3D */}
                                        <div className="mt-8 md:mt-16 flex justify-center relative">
                                            <div className="w-[300px] h-[200px] md:w-[500px] md:h-[300px]">
                                                <Canvas
                                                    shadows
                                                    style={{
                                                        width: "100%",
                                                        height: "100%",
                                                    }}
                                                >
                                                    <ambientLight intensity={1.5} />

                                                    <pointLight
                                                        position={[5, 5, 5]}
                                                        intensity={1}
                                                        color="#ffffff"
                                                    />

                                                    <PerspectiveCamera
                                                        makeDefault
                                                        position={[0, 1, 5]}
                                                    />

                                                    <OrbitControls enableZoom={false} />

                                                    <ComputerModel />
                                                </Canvas>
                                            </div>
                                        </div>

                                        {/* SCROLL TO EXPLORE */}
                                        <div className="mt-8 md:mt-16 flex justify-center">
                                            <Link
                                                to={scrollLink("projects")}
                                                className="group flex flex-col items-center cursor-pointer hover:scale-105 transition-transform duration-300"
                                                onClick={closeMobileMenu}
                                            >
                                                <div className="relative mb-3">
                                                    <span
                                                        className="text-teal-400 text-xs md:text-sm font-medium tracking-wider group-hover:text-teal-300 transition-colors duration-300"
                                                        style={{
                                                            textShadow:
                                                                "0 0 10px rgba(0, 229, 255, 0.5)",
                                                        }}
                                                    >
                                                        SCROLL TO EXPLORE
                                                    </span>

                                                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-teal-400/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-sm" />
                                                </div>

                                                {/* Flèche animée */}
                                                <div className="relative">
                                                    <svg
                                                        className="w-5 h-5 md:w-6 md:h-6 text-teal-400 group-hover:text-teal-300 transition-colors duration-300"
                                                        fill="none"
                                                        stroke="currentColor"
                                                        viewBox="0 0 24 24"
                                                        aria-hidden="true"
                                                        style={{
                                                            filter:
                                                                "drop-shadow(0 0 8px rgba(0, 229, 255, 0.6))",
                                                            animation: "bounce 2s infinite",
                                                        }}
                                                    >
                                                        <path
                                                            strokeLinecap="round"
                                                            strokeLinejoin="round"
                                                            strokeWidth={2}
                                                            d="M19 14l-7 7m0 0l-7-7m7 7V3"
                                                        />
                                                    </svg>

                                                    <div className="absolute inset-0 rounded-full bg-teal-400/20 blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                                </div>

                                                {/* Particules près du bouton */}
                                                <div className="absolute inset-0 pointer-events-none hidden md:block">
                                                    <div
                                                        className="absolute -top-2 -left-2 w-1 h-1 bg-teal-400 rounded-full opacity-60 group-hover:opacity-100 transition-opacity duration-300"
                                                        style={{
                                                            animation:
                                                                "float 3s ease-in-out infinite",
                                                        }}
                                                    />

                                                    <div
                                                        className="absolute -top-2 -right-2 w-0.5 h-0.5 bg-cyan-300 rounded-full opacity-40 group-hover:opacity-80 transition-opacity duration-300"
                                                        style={{
                                                            animation:
                                                                "float 4s ease-in-out infinite reverse",
                                                        }}
                                                    />

                                                    <div
                                                        className="absolute -bottom-2 left-1/2 w-0.5 h-0.5 bg-teal-300 rounded-full opacity-50 group-hover:opacity-90 transition-opacity duration-300"
                                                        style={{
                                                            animation:
                                                                "float 2.5s ease-in-out infinite",
                                                        }}
                                                    />
                                                </div>
                                            </Link>
                                        </div>
                                    </div>
                                </section>

                                {/* SECTION PROJETS */}
                                <Element name="projects" id="projects">
                                    <Projects />
                                </Element>

                                {/* SECTION FORMATION */}
                                <Element name="formation" id="formation">
                                    <Formation />
                                </Element>

                                {/* SECTION EXPÉRIENCES */}
                                <Element name="experience" id="experience">
                                    <Experience />
                                </Element>

                                {/* SECTION À PROPOS */}
                                <Element name="about" id="about">
                                    <About />
                                </Element>

                                {/* SECTION CONTACT */}
                                <Element name="contact" id="contact">
                                    <Contact />
                                </Element>
                            </main>
                        }
                    />
                </Routes>
            </div>
        </Router>
    );
}

export default App;
