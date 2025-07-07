import React, { useState } from 'react';

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
    <section id="experience" className="bg-gray-900 py-20 relative overflow-hidden">
      {/* Background décoratif subtil */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-32 left-20 w-24 h-24 border border-teal-400/30 rounded-full"></div>
        <div className="absolute bottom-32 right-32 w-16 h-16 border border-cyan-400/30 rounded-full"></div>
      </div>

      <div className="container mx-auto px-6 relative">
        {/* Titre simple et épuré */}
        <div className="text-center mb-16">
          <h3 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-cyan-300 mb-4">
            Expériences
          </h3>
          <div className="w-24 h-1 bg-gradient-to-r from-teal-400 to-cyan-300 rounded-full mx-auto"></div>
        </div>

        {/* Layout horizontal aéré */}
        {experiences.map((exp, index) => (
          <div key={exp.id} className="max-w-7xl mx-auto">
            
                         {/* Header simple */}
             <div className="flex items-center space-x-4 mb-12">
               <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center shadow-xl">
                 <svg className="w-8 h-8 text-white" viewBox="0 0 24 24" fill="currentColor">
                   <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
                 </svg>
               </div>
               <div>
                 <h4 className="text-3xl font-bold text-white mb-1">{exp.title}</h4>
                 <div className="flex items-center space-x-3 text-gray-400">
                   <span>{exp.company}</span>
                   <span>•</span>
                   <span>{exp.period}</span>
                 </div>
               </div>
             </div>

            {/* Layout en 3 colonnes pour desktop */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
              
              {/* Colonne 1: Description + Tech */}
              <div className="space-y-8">
                <div>
                  <h5 className="text-xl font-semibold text-teal-400 mb-4">Description</h5>
                  <p className="text-gray-300 leading-relaxed">{exp.description}</p>
                </div>
                
                <div>
                  <h5 className="text-xl font-semibold text-teal-400 mb-4">Technologies</h5>
                  <div className="grid grid-cols-2 gap-3">
                    {exp.technologies.map((tech, i) => (
                      <div key={i} className="flex items-center space-x-2 bg-gray-700/30 px-3 py-2 rounded-lg">
                        <img src={tech.logo} alt={tech.name} className="w-5 h-5 object-contain" />
                        <span className="text-gray-300 text-sm">{tech.name}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Colonne 2: Carrousel d'images */}
              <div className="space-y-6">
                <h5 className="text-xl font-semibold text-teal-400">Aperçu</h5>
                
                <div className="relative bg-gray-800/30 rounded-2xl p-4 border border-gray-600/30">
                  <div className="relative overflow-hidden rounded-xl">
                    <div className="w-full h-64 bg-gray-800 rounded-xl border border-gray-600/50 relative overflow-hidden flex items-center justify-center">
                      <img 
                        src={exp.images[currentImageIndex].src} 
                        alt={exp.images[currentImageIndex].alt}
                        className={`w-full h-full rounded-xl transition-all duration-500 ${
                          currentImageIndex === 1 ? 'object-cover' : 'object-contain'
                        }`}
                      />
                      
                      {currentImageIndex === 0 && (
                        <div className="absolute top-2 left-2 right-2 h-16 bg-gradient-to-b from-white/10 to-transparent rounded-t-xl pointer-events-none"></div>
                      )}
                    </div>

                    {/* Navigation */}
                    {exp.images.length > 1 && (
                      <>
                        <button
                          onClick={() => prevImage(exp)}
                          className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-gray-900/80 hover:bg-gray-800/90 rounded-full p-2 border border-gray-600/50 transition-all duration-200"
                        >
                          <svg className="w-4 h-4 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                          </svg>
                        </button>
                        <button
                          onClick={() => nextImage(exp)}
                          className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-gray-900/80 hover:bg-gray-800/90 rounded-full p-2 border border-gray-600/50 transition-all duration-200"
                        >
                          <svg className="w-4 h-4 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                          </svg>
                        </button>
                      </>
                    )}
                  </div>

                  {/* Indicateurs */}
                  <div className="flex justify-center space-x-2 mt-4">
                    {exp.images.map((_, imgIndex) => (
                      <button
                        key={imgIndex}
                        onClick={() => goToImage(imgIndex)}
                        className={`w-2 h-2 rounded-full transition-all duration-200 ${
                          imgIndex === currentImageIndex ? 'bg-teal-400 w-6' : 'bg-gray-600'
                        }`}
                      />
                    ))}
                  </div>
                  
                  <div className="text-center mt-3">
                    <p className="text-gray-400 text-sm">{exp.images[currentImageIndex].title}</p>
                  </div>
                </div>
              </div>

              {/* Colonne 3: Réalisations + Actions */}
              <div className="space-y-8">
                <div>
                  <h5 className="text-xl font-semibold text-teal-400 mb-4">Réalisations</h5>
                  <div className="space-y-3">
                    {exp.achievements.map((achievement, i) => (
                      <div key={i} className="flex items-start space-x-3">
                        <div className="w-5 h-5 bg-gradient-to-r from-teal-400 to-cyan-300 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                          <span className="text-white text-xs">✓</span>
                        </div>
                        <span className="text-gray-300 text-sm">{achievement}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <h5 className="text-xl font-semibold text-teal-400 mb-4">Liens</h5>
                  <div className="space-y-3">
                    <a
                      href={exp.links.appStore}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-3 bg-black hover:bg-gray-900 text-white px-4 py-3 rounded-xl transition-all duration-200 shadow-lg hover:shadow-xl"
                    >
                      <svg className="w-6 h-6 text-white" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
                      </svg>
                      <span className="font-semibold">App Store</span>
                    </a>
                    
                    <a
                      href={exp.links.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-3 bg-gradient-to-r from-teal-600 to-cyan-600 hover:from-teal-700 hover:to-cyan-700 text-white px-4 py-3 rounded-xl transition-all duration-200 shadow-lg"
                    >
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                      </svg>
                      <span className="font-semibold">Site Web</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}

        {/* Section future experiences compacte */}
        <div className="mt-24 text-center">
          <div className="max-w-2xl mx-auto bg-gray-800/30 rounded-2xl p-8 border border-gray-700/30">
            <div className="w-12 h-12 bg-gradient-to-r from-teal-400 to-cyan-300 rounded-xl mx-auto mb-4 flex items-center justify-center">
              <span className="text-white text-xl">🚀</span>
            </div>
            <h4 className="text-xl font-bold text-teal-400 mb-3">Prochaines étapes</h4>
            <p className="text-gray-300">
              À la recherche de nouvelles opportunités pour contribuer à des projets innovants.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Experience; 