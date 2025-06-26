import React, { useState } from 'react';
import { motion } from 'framer-motion';

function Experience() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  
  const experiences = [
    {
      id: 1,
      title: "Wellia - Application Mobile",
      company: "Développement Indépendant",
      period: "2024 - En cours",
      type: "Développement Mobile",
      description: "Développement complet d'une application mobile de bien-être et santé, disponible sur l'App Store et bientôt sur Google Play Store. Application complète avec backend, authentification et synchronisation cloud.",
      technologies: [
        { name: "React Native", logo: "https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg" },
        { name: "Expo GO", logo: "https://github.com/expo/expo/raw/main/apps/expo-go/assets/icon.png" },
        { name: "Google Cloud", logo: "https://upload.wikimedia.org/wikipedia/commons/5/51/Google_Cloud_logo.svg" },
        { name: "Supabase", logo: "https://seeklogo.com/images/S/supabase-logo-DCC676FFE2-seeklogo.com.png" }
      ],
      achievements: [
        "Application publiée sur l'App Store",
        "Architecture scalable avec cloud backend",
        "Authentification sécurisée",
        "Interface utilisateur moderne et intuitive",
        "Synchronisation temps réel des données"
      ],
      links: {
        appStore: "https://apps.apple.com/fr/app/wellia-ai/id6745897871",
        website: "https://wellia.ai/",
        googlePlay: "#"
      },
      status: "live",
      images: [
        {
          src: "/img/wellia-app.png",
          alt: "Interface de l'application Wellia",
          title: "Application Mobile",
          description: "Interface principale de l'application"
        },
        {
          src: "/img/welia-ai.png",
          alt: "Site web Wellia AI",
          title: "Site Web Officiel",
          description: "Page d'accueil du site Wellia AI"
        },
        {
          src: "/img/wellia-app-store.jpeg",
          alt: "Wellia sur l'App Store",
          title: "Disponible sur l'App Store",
          description: "Officiellement publié sur l'App Store d'Apple"
        }
      ]
    }
  ];

  const nextImage = (exp) => {
    setCurrentImageIndex((prev) => (prev + 1) % exp.images.length);
  };

  const prevImage = (exp) => {
    setCurrentImageIndex((prev) => (prev - 1 + exp.images.length) % exp.images.length);
  };

  const goToImage = (index) => {
    setCurrentImageIndex(index);
  };

  return (
    <section id="experience" className="bg-gray-900 py-16 md:py-20 relative overflow-hidden">
      {/* Background décoratif */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-32 h-32 border border-teal-400/30 rounded-full"></div>
        <div className="absolute bottom-40 right-20 w-24 h-24 border border-cyan-400/30 rounded-full"></div>
        <div className="absolute top-1/2 left-1/4 w-2 h-20 bg-gradient-to-b from-teal-400/30 to-transparent"></div>
        <div className="absolute top-1/3 right-1/3 w-16 h-16 border border-teal-300/20 rotate-45"></div>
      </div>

      <div className="container mx-auto px-4 md:px-6 relative">
        {/* Titre de section avec design moderne */}
        <div className="text-center mb-16 md:mb-20">
          <div className="inline-block relative">
            <h3 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-cyan-300 mb-4">
              Expériences
            </h3>
            <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-teal-400 to-cyan-300 rounded-full"></div>
          </div>
          <p className="text-gray-400 mt-6 text-lg max-w-2xl mx-auto">
            Découvrez mes réalisations professionnelles et projets innovants
          </p>
        </div>

        {/* Timeline créative */}
        <div className="relative max-w-6xl mx-auto">
          {/* Ligne centrale pour desktop */}
          <div className="hidden lg:block absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-teal-400/50 via-cyan-400/30 to-transparent rounded-full"></div>
          
          {experiences.map((exp, index) => (
            <div key={exp.id} className="relative mb-16 lg:mb-24">
              {/* Point sur la timeline */}
              <div className="hidden lg:block absolute left-1/2 transform -translate-x-1/2 top-8 z-20">
                <div className="w-8 h-8 bg-gradient-to-r from-teal-400 to-cyan-300 rounded-full border-4 border-gray-900 shadow-xl relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-teal-400 to-cyan-300 rounded-full animate-ping opacity-30"></div>
                  <div className="absolute inset-2 bg-white rounded-full"></div>
                </div>
              </div>

              {/* Card flottante alternée */}
              <div className={`lg:w-1/2 ${index % 2 === 0 ? 'lg:pr-16' : 'lg:pl-16 lg:ml-auto'}`}>
                <div className="relative group">
                  {/* Effet de halo */}
                  <div className="absolute -inset-1 bg-gradient-to-r from-teal-400/20 to-cyan-400/20 rounded-3xl blur opacity-0 group-hover:opacity-100 transition duration-1000"></div>
                  
                  {/* Card principale avec glassmorphism */}
                  <div className="relative bg-gradient-to-br from-gray-800/80 to-gray-900/60 backdrop-blur-xl rounded-3xl border border-gray-700/50 shadow-2xl overflow-hidden">
                    {/* Effet de brillance au hover */}
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                    
                    {/* Badge de statut moderne */}
                    <div className="absolute -top-4 -right-4 z-10">
                      <div className="bg-gradient-to-r from-green-400 to-teal-400 text-white px-6 py-3 rounded-2xl text-sm font-bold shadow-xl transform rotate-3">
                        <div className="flex items-center space-x-2">
                          <div className="w-3 h-3 bg-white rounded-full animate-pulse"></div>
                          <span>EN LIGNE</span>
                        </div>
                      </div>
                    </div>

                    <div className="p-8 relative z-10">
                      {/* Header avec logo App Store */}
                      <div className="flex items-start justify-between mb-6">
                        <div className="flex-1">
                          <div className="flex items-center space-x-3 mb-3">
                            {/* Logo App Store à la place du logo Apple */}
                            <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-blue-600 rounded-xl flex items-center justify-center shadow-lg">
                              <svg className="w-7 h-7 text-white" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
                              </svg>
                            </div>
                            <div>
                              <h4 className="text-2xl font-bold text-white">{exp.title}</h4>
                              <div className="flex items-center space-x-2 text-teal-400 text-sm">
                                <span className="font-semibold">{exp.company}</span>
                                <span className="text-gray-500">•</span>
                                <span className="text-gray-400">{exp.period}</span>
                              </div>
                            </div>
                          </div>
                          
                          <div className="flex items-center space-x-3 mb-4">
                            <div className="inline-flex items-center px-4 py-2 bg-teal-500/20 rounded-full border border-teal-400/40">
                              <span className="text-teal-300 text-sm font-medium">{exp.type}</span>
                            </div>
                            
                            {/* Badge App Store officiel */}
                            <div className="inline-flex items-center space-x-2 px-4 py-2 bg-gradient-to-r from-blue-600/20 to-blue-500/20 rounded-full border border-blue-400/40">
                              <svg className="w-4 h-4 text-blue-400" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
                              </svg>
                              <span className="text-blue-400 text-xs font-semibold">App Store</span>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Description */}
                      <p className="text-gray-300 leading-relaxed mb-6">
                        {exp.description}
                      </p>

                      {/* Technologies avec design moderne */}
                      <div className="mb-6">
                        <h5 className="text-lg font-semibold text-teal-400 mb-4 flex items-center">
                          <span className="w-2 h-2 bg-teal-400 rounded-full mr-3"></span>
                          Technologies utilisées
                        </h5>
                        <div className="grid grid-cols-2 gap-3">
                          {exp.technologies.map((tech, i) => (
                            <div key={i} className="flex items-center space-x-3 bg-gray-700/30 px-4 py-3 rounded-xl border border-gray-600/30 backdrop-blur-sm">
                              <img src={tech.logo} alt={tech.name} className="w-6 h-6 object-contain" />
                              <span className="text-gray-300 text-sm font-medium">{tech.name}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Réalisations */}
                      <div className="mb-8">
                        <h5 className="text-lg font-semibold text-teal-400 mb-4 flex items-center">
                          <span className="w-2 h-2 bg-teal-400 rounded-full mr-3"></span>
                          Réalisations clés
                        </h5>
                        <div className="space-y-3">
                          {exp.achievements.map((achievement, i) => (
                            <div key={i} className="flex items-start space-x-3 bg-gray-700/20 p-3 rounded-lg">
                              <div className="w-6 h-6 bg-gradient-to-r from-teal-400 to-cyan-300 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                                <span className="text-white text-xs">✓</span>
                              </div>
                              <span className="text-gray-300 text-sm leading-relaxed">{achievement}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Carrousel d'images moderne */}
                      <div className="mb-8">
                        <h5 className="text-lg font-semibold text-teal-400 mb-4 flex items-center">
                          <span className="w-2 h-2 bg-teal-400 rounded-full mr-3"></span>
                          Aperçu du projet
                        </h5>
                        
                        <div className="relative bg-gray-800/50 rounded-2xl p-4 border border-gray-600/30">
                          {/* Image avec transition */}
                          <div className="relative overflow-hidden rounded-xl">
                            <div className="w-full h-80 bg-gray-800 rounded-xl border border-gray-600/50 shadow-xl relative overflow-hidden flex items-center justify-center">
                              <img 
                                src={exp.images[currentImageIndex].src} 
                                alt={exp.images[currentImageIndex].alt}
                                className={`w-full h-full rounded-xl transition-all duration-500 ${
                                  currentImageIndex === 1 ? 'object-cover' : 'object-contain'
                                }`}
                              />
                              
                              {/* Effet de reflet pour l'app mobile (index 0) */}
                              {currentImageIndex === 0 && (
                                <div className="absolute top-2 left-2 right-2 h-20 bg-gradient-to-b from-white/10 to-transparent rounded-t-xl pointer-events-none"></div>
                              )}
                              
                              {/* Overlay pour l'image du site web (index 1) */}
                              {currentImageIndex === 1 && (
                                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/20 to-transparent rounded-xl pointer-events-none"></div>
                              )}
                            </div>

                            {/* Navigation du carrousel */}
                            {exp.images.length > 1 && (
                              <>
                                <button
                                  onClick={() => prevImage(exp)}
                                  className="absolute left-3 top-1/2 transform -translate-y-1/2 bg-gray-900/80 hover:bg-gray-800/90 rounded-full p-3 border border-gray-600/50 transition-all duration-200"
                                >
                                  <svg className="w-5 h-5 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                                  </svg>
                                </button>
                                <button
                                  onClick={() => nextImage(exp)}
                                  className="absolute right-3 top-1/2 transform -translate-y-1/2 bg-gray-900/80 hover:bg-gray-800/90 rounded-full p-3 border border-gray-600/50 transition-all duration-200"
                                >
                                  <svg className="w-5 h-5 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                  </svg>
                                </button>
                              </>
                            )}
                          </div>

                          {/* Indicateurs et info */}
                          <div className="flex items-center justify-between mt-4">
                            <div className="text-center flex-1">
                              <h6 className="text-gray-200 font-semibold text-sm mb-1">
                                {exp.images[currentImageIndex].title}
                              </h6>
                              <p className="text-gray-400 text-xs">
                                {exp.images[currentImageIndex].description}
                              </p>
                            </div>
                            
                            {exp.images.length > 1 && (
                              <div className="flex space-x-2 ml-4">
                                {exp.images.map((_, imgIndex) => (
                                  <button
                                    key={imgIndex}
                                    onClick={() => goToImage(imgIndex)}
                                    className={`w-3 h-3 rounded-full transition-all duration-200 ${
                                      imgIndex === currentImageIndex 
                                        ? 'bg-teal-400 w-8' 
                                        : 'bg-gray-600 hover:bg-gray-500'
                                    }`}
                                  />
                                ))}
                              </div>
                            )}
                          </div>
                        </div>
                      </div>

                      {/* Boutons d'action officiels */}
                      <div className="space-y-4">
                        {/* Bouton App Store officiel */}
                        <a
                          href={exp.links.appStore}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="group flex items-center justify-center w-full bg-black hover:bg-gray-900 text-white px-6 py-4 rounded-xl transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-1 border border-gray-700"
                        >
                          <div className="flex items-center space-x-4">
                            {/* Logo App Store */}
                            <svg className="w-8 h-8 text-white" viewBox="0 0 24 24" fill="currentColor">
                              <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
                            </svg>
                            <div className="text-left">
                              <div className="text-xs text-gray-300 leading-tight">Télécharger sur l'</div>
                              <div className="text-lg font-semibold leading-tight">App Store</div>
                            </div>
                            <svg className="w-5 h-5 text-gray-400 group-hover:text-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                            </svg>
                          </div>
                        </a>

                        {/* Bouton Site Web moderne */}
                        <a
                          href={exp.links.website}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="group flex items-center justify-center w-full bg-gradient-to-r from-teal-600 to-cyan-600 hover:from-teal-700 hover:to-cyan-700 text-white px-6 py-4 rounded-xl transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                        >
                          <div className="flex items-center space-x-4">
                            {/* Logo Globe */}
                            <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                            </svg>
                            <div className="text-left">
                              <div className="text-xs text-teal-100 leading-tight">Découvrir le</div>
                              <div className="text-lg font-semibold leading-tight">Site Officiel</div>
                            </div>
                            <svg className="w-5 h-5 text-teal-200 group-hover:text-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                            </svg>
                          </div>
                        </a>

                        {/* Bouton Google Play (bientôt) */}
                        <div className="group flex items-center justify-center w-full bg-gray-800/50 text-gray-400 px-6 py-4 rounded-xl cursor-not-allowed border border-gray-700/50">
                          <div className="flex items-center space-x-4">
                            {/* Logo Google Play */}
                            <svg className="w-8 h-8 text-gray-500" viewBox="0 0 24 24" fill="currentColor">
                              <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z"/>
                            </svg>
                            <div className="text-left">
                              <div className="text-xs text-gray-500 leading-tight">Bientôt disponible sur</div>
                              <div className="text-lg font-semibold leading-tight">Google Play</div>
                            </div>
                            <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Section future experiences avec design moderne */}
        <div className="mt-20 text-center">
          <div className="max-w-2xl mx-auto bg-gradient-to-r from-gray-800/50 to-gray-900/50 backdrop-blur-xl rounded-3xl p-8 border border-gray-700/50">
            <div className="w-16 h-16 bg-gradient-to-r from-teal-400 to-cyan-300 rounded-2xl mx-auto mb-6 flex items-center justify-center">
              <span className="text-white text-2xl">🚀</span>
            </div>
            <h4 className="text-2xl font-bold text-teal-400 mb-4">Prochaines étapes</h4>
            <p className="text-gray-300 leading-relaxed">
              Actuellement à la recherche de nouvelles opportunités pour contribuer à des projets innovants
              et continuer à développer mes compétences en développement mobile et web.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Experience; 