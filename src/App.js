import React, {useRef,  useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from "react-router-dom";
import { Element, scroller } from "react-scroll"; // Pour gérer le scroll
import Projects from "./Projects.js";
import Contact from "./Contact.js";
import About from "./About.js"; // Page À propos
import Formation from "./Formation.js"; // Page Formation
import Experience from "./Experience.js"; // Page Expériences
import FloatingLogos from "./FloatingLogos.js";
import ParticleBackground from "./components/ParticleBackground.js";
import MatrixRain from "./components/MatrixRain.js";
import ParallaxElements from "./components/ParallaxElements.js";
import SectionTransitions from "./components/SectionTransitions.js";
import Typewriter from "typewriter-effect";
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, PerspectiveCamera, useGLTF } from '@react-three/drei';


// Modèle 3D de l'ordinateur
function ComputerModel() {
  const { scene } = useGLTF('/models/laptop.glb'); // Charger le modèle GLTF
  const laptopRef = useRef();

  // Animation : rotation continue du modèle
  useFrame(() => {
    if (laptopRef.current) {
      laptopRef.current.rotation.y += 0.01; // Rotation lente sur l'axe Y
    }
  });

  return (
    <mesh ref={laptopRef}>
      <primitive object={scene} scale={5} position={[0, -1, 0]} />
    </mesh>
  );
}


function ScrollToSection() {
  const location = useLocation();

  useEffect(() => {
    // Extraire la section cible de l'URL (par exemple "/?scrollTo=projects")
    const queryParams = new URLSearchParams(location.search);
    const section = queryParams.get("scrollTo");

    // Scroller vers la section correspondante si elle est définie
    if (section) {
      scroller.scrollTo(section, {
        duration: 800,
        delay: 0,
        smooth: "easeInOutQuart",
      });
    }
  }, [location]); // Re-exécute lorsqu'on change de route

  return null; // Pas besoin d'afficher quoi que ce soit
}

function App() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);
  
  // Fonction pour générer les liens avec paramètres
  const createScrollLink = (section) => `/?scrollTo=${section}`;

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <Router>
      <Element name="home"></Element>
      <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 text-gray-200 relative">
        {/* Effets de background impressionnants */}
        <ParticleBackground />
        <MatrixRain />
        <ParallaxElements />
        
        <ScrollToSection /> {/* Composant pour gérer le scroll automatique */}

        {/* Barre de navigation */}
        <header className="py-4 navbar" role="banner">
          <div className="container mx-auto px-4 flex justify-between items-center">
            <h1 className="text-2xl font-bold text-teal-400">
              <Link to={createScrollLink("home")} onClick={closeMobileMenu}>LD</Link>
            </h1>
            
            {/* Menu burger pour mobile */}
            <button 
              className="md:hidden p-2 rounded-lg bg-gray-800/50 border border-teal-400/30 text-teal-400 hover:bg-teal-400/10 hover:border-teal-400/60 focus:outline-none transition-all duration-300 backdrop-blur-sm"
              onClick={toggleMobileMenu}
              style={{
                boxShadow: '0 0 10px rgba(0, 229, 255, 0.3)'
              }}
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                   style={{
                     filter: 'drop-shadow(0 0 5px rgba(0, 229, 255, 0.5))'
                   }}>
                {isMobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>

            {/* Navigation desktop */}
            <nav className="hidden md:block" role="navigation" aria-label="Navigation principale">
              <ul className="flex space-x-6">
                <li>
                  <Link to={createScrollLink("home")} className="hover:text-teal-400 transition-colors">
                    Home
                  </Link>
                </li>
                <li>
                  <Link to={createScrollLink("projects")} className="hover:text-teal-400 transition-colors">
                    Mes Projets
                  </Link>
                </li>
                <li>
                  <Link to={createScrollLink("formation")} className="hover:text-teal-400 transition-colors">
                    Formation
                  </Link>
                </li>
                <li>
                  <Link to={createScrollLink("experience")} className="hover:text-teal-400 transition-colors">
                    Expériences
                  </Link>
                </li>
                <li>
                  <Link to={createScrollLink("about")} className="hover:text-teal-400 transition-colors">
                    À propos
                  </Link>
                </li>
                <li>
                  <Link to={createScrollLink("contact")} className="hover:text-teal-400 transition-colors">
                    Contact
                  </Link>
                </li>
              </ul>
            </nav>

            {/* Menu mobile */}
            {isMobileMenuOpen && (
              <div className="absolute top-full left-0 w-full bg-gray-900/95 backdrop-blur-sm md:hidden z-50">
                <ul className="flex flex-col space-y-4 p-6">
                  <li>
                    <Link 
                      to={createScrollLink("home")} 
                      className="block hover:text-teal-400 transition-colors text-lg"
                      onClick={closeMobileMenu}
                    >
                      Home
                    </Link>
                  </li>
                  <li>
                    <Link 
                      to={createScrollLink("projects")} 
                      className="block hover:text-teal-400 transition-colors text-lg"
                      onClick={closeMobileMenu}
                    >
                      Mes Projets
                    </Link>
                  </li>
                  <li>
                    <Link 
                      to={createScrollLink("formation")} 
                      className="block hover:text-teal-400 transition-colors text-lg"
                      onClick={closeMobileMenu}
                    >
                      Formation
                    </Link>
                  </li>
                  <li>
                    <Link 
                      to={createScrollLink("experience")} 
                      className="block hover:text-teal-400 transition-colors text-lg"
                      onClick={closeMobileMenu}
                    >
                      Expériences
                    </Link>
                  </li>
                  <li>
                    <Link 
                      to={createScrollLink("about")} 
                      className="block hover:text-teal-400 transition-colors text-lg"
                      onClick={closeMobileMenu}
                    >
                      À propos
                    </Link>
                  </li>
                  <li>
                    <Link 
                      to={createScrollLink("contact")} 
                      className="block hover:text-teal-400 transition-colors text-lg"
                      onClick={closeMobileMenu}
                    >
                      Contact
                    </Link>
                  </li>
                </ul>
              </div>
            )}
          </div>
        </header>

        {/* Routes */}
        <Routes>
          {/* Route pour la page principale */}
          <Route
            path="/"
            element={
              <>
                {/* Section Home */}
                <main>
                <SectionTransitions index={0}>
                <section className="container mx-auto px-4 py-20 md:py-40 text-center relative z-10" aria-label="Section d'accueil">
                  <h2 className="text-2xl md:text-4xl font-extrabold text-teal-400 mb-4 glitch-effect z-10">
                    <Typewriter
                      options={{
                        strings: ["Lucas Djavid", "Developper Full-Stack", "Débutant en CyberSécurité"],
                        autoStart: true,
                        loop: true,
                        deleteSpeed: 50,
                      }}
                    />
                  </h2>
                  <p className="text-base md:text-lg text-gray-400 mb-8"></p>
                  <Link 
                    to={createScrollLink("projects")} 
                    className="btn-futuristic btn-primary btn-particles inline-block px-4 py-2 text-xs md:text-sm relative z-10"
                  >
                    <span>Mes Projets</span>
                  </Link>
                  <FloatingLogos numberOfLogos={20} />
                  
                  <div className="mt-8 md:mt-16 flex justify-center relative">
                    {/* Canvas avec le modèle 3D - responsive */}
                    <Canvas 
                      style={{ 
                        height: window.innerWidth < 768 ? '200px' : '300px', 
                        width: window.innerWidth < 768 ? '300px' : '500px' 
                      }} 
                      shadows
                    >
                      <ambientLight intensity={1.5} />
                      <pointLight position={[5, 5, 5]} intensity={1} color="#ffffff" />
                      <PerspectiveCamera makeDefault position={[0, 1, 5]} />
                      <OrbitControls enableZoom={false} />
                      <ComputerModel />
                    </Canvas>
                  </div>

                  {/* Scroll to Explore Button - Responsive positioning */}
                  <div className="mt-8 md:mt-16 flex justify-center">
                    <Link 
                      to={createScrollLink("projects")} 
                      className="group flex flex-col items-center cursor-pointer hover:scale-105 transition-transform duration-300"
                      onClick={closeMobileMenu}
                    >
                      <div className="relative mb-3">
                        <span className="text-teal-400 text-xs md:text-sm font-medium tracking-wider group-hover:text-teal-300 transition-colors duration-300"
                              style={{textShadow: '0 0 10px rgba(0, 229, 255, 0.5)'}}>
                          SCROLL TO EXPLORE
                        </span>
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-teal-400/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-sm"></div>
                      </div>
                      
                      {/* Flèche animée */}
                      <div className="relative">
                        <svg 
                          className="w-5 h-5 md:w-6 md:h-6 text-teal-400 group-hover:text-teal-300 transition-colors duration-300" 
                          fill="none" 
                          stroke="currentColor" 
                          viewBox="0 0 24 24"
                          style={{
                            filter: 'drop-shadow(0 0 8px rgba(0, 229, 255, 0.6))',
                            animation: 'bounce 2s infinite'
                          }}
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                        </svg>
                        
                        {/* Effet de lueur sur la flèche */}
                        <div className="absolute inset-0 rounded-full bg-teal-400/20 blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      </div>

                      {/* Particules autour du bouton - masquées sur mobile pour éviter les débordements */}
                      <div className="absolute inset-0 pointer-events-none hidden md:block">
                        <div className="absolute -top-2 -left-2 w-1 h-1 bg-teal-400 rounded-full opacity-60 group-hover:opacity-100 transition-opacity duration-300"
                             style={{animation: 'float 3s ease-in-out infinite'}}></div>
                        <div className="absolute -top-2 -right-2 w-0.5 h-0.5 bg-cyan-300 rounded-full opacity-40 group-hover:opacity-80 transition-opacity duration-300"
                             style={{animation: 'float 4s ease-in-out infinite reverse'}}></div>
                        <div className="absolute -bottom-2 left-1/2 w-0.5 h-0.5 bg-teal-300 rounded-full opacity-50 group-hover:opacity-90 transition-opacity duration-300"
                             style={{animation: 'float 2.5s ease-in-out infinite'}}></div>
                      </div>
                    </Link>
                  </div>

                </section>
                </SectionTransitions>

                {/* Section Projets */}
                <SectionTransitions index={1}>
                <Element name="projects">
                  <Projects />
                </Element>
                </SectionTransitions>

                {/* Section Formation */}
                <SectionTransitions index={2}>
                <Element name="formation">
                  <Formation />
                </Element>
                </SectionTransitions>

                {/* Section Expériences */}
                <SectionTransitions index={3}>
                <Element name="experience">
                  <Experience />
                </Element>
                </SectionTransitions>

                <SectionTransitions index={4}>
                <Element name="about">
                  <About />
                </Element>
                </SectionTransitions>

                {/* Section Contact */}
                <SectionTransitions index={5}>
                <Element name="contact">
                  <Contact />
                </Element>
                </SectionTransitions>

                </main>
              </>
            }
          />

        </Routes>
      </div>
    </Router>
  );
}

export default App;
