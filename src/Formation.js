import React from 'react';

function Formation() {
  return (
    <section className="container mx-auto px-4 py-16 md:py-20 text-center">
      <div className="max-w-4xl mx-auto">
        {/* Titre principal avec effet glitch */}
        <h2 className="text-2xl md:text-5xl font-extrabold mb-8 md:mb-16 glitch-effect" data-text="FORMATION">
          FORMATION
        </h2>

        {/* Card de formation futuriste */}
        <div className="relative bg-gradient-to-br from-gray-800/80 to-gray-900/90 rounded-2xl p-4 md:p-8 border border-teal-400/30 backdrop-blur-sm overflow-hidden">
          {/* Effet de grille futuriste en arrière-plan */}
          <div className="absolute inset-0 opacity-10">
            <div className="h-full w-full" style={{
              backgroundImage: `
                linear-gradient(rgba(0, 229, 255, 0.3) 1px, transparent 1px),
                linear-gradient(90deg, rgba(0, 229, 255, 0.3) 1px, transparent 1px)
              `,
              backgroundSize: '20px 20px'
            }}></div>
          </div>

          {/* Effet de scanning futuriste */}
          <div className="absolute inset-0 opacity-30">
            <div className="w-full h-1 bg-gradient-to-r from-transparent via-teal-400 to-transparent animate-pulse" 
                 style={{
                   animation: 'scan 3s linear infinite',
                   position: 'absolute',
                   top: '0',
                   left: '0'
                 }}></div>
          </div>

          {/* Effet de lueur périphérique */}
          <div className="absolute inset-0 rounded-2xl">
            <div className="absolute top-0 left-0 w-full h-full rounded-2xl bg-gradient-to-r from-teal-500/10 via-transparent to-blue-500/10 animate-pulse"></div>
          </div>

          {/* Particules flottantes sophistiquées */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute top-1/4 left-1/4 w-1 h-1 bg-teal-400 rounded-full opacity-60"
                 style={{animation: 'float 4s ease-in-out infinite'}}></div>
            <div className="absolute top-3/4 right-1/4 w-0.5 h-0.5 bg-blue-300 rounded-full opacity-40"
                 style={{animation: 'float 6s ease-in-out infinite reverse'}}></div>
            <div className="absolute top-1/2 left-3/4 w-1.5 h-1.5 bg-teal-300 rounded-full opacity-50"
                 style={{animation: 'float 5s ease-in-out infinite'}}></div>
            <div className="absolute top-1/3 right-1/3 w-0.5 h-0.5 bg-cyan-400 rounded-full opacity-70"
                 style={{animation: 'float 3s ease-in-out infinite'}}></div>
          </div>

          {/* Effet holographique */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-teal-400/5 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-500"
               style={{transform: 'skewX(-45deg)'}}></div>

          {/* Contenu principal */}
          <div className="relative z-10">
            {/* Badge futuriste */}
            <div className="inline-flex items-center px-4 py-2 mb-6 bg-gradient-to-r from-teal-500/20 to-blue-500/20 rounded-full border border-teal-400/50 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-teal-400/10 to-blue-400/10 animate-pulse"></div>
              <div className="w-3 h-3 bg-teal-400 rounded-full mr-3 relative z-10" 
                   style={{
                     animation: 'glow 2s ease-in-out infinite alternate',
                     boxShadow: '0 0 10px rgba(0, 229, 255, 0.8)'
                   }}></div>
              <span className="text-teal-400 font-semibold text-sm tracking-wider relative z-10"
                    style={{textShadow: '0 0 10px rgba(0, 229, 255, 0.5)'}}>EN COURS</span>
            </div>

            {/* Titre de la formation */}
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-4 relative">
              <span style={{
                textShadow: '0 0 20px rgba(0, 229, 255, 0.6), 0 0 40px rgba(0, 229, 255, 0.4)',
                animation: 'textGlow 3s ease-in-out infinite alternate'
              }}>BUT Informatique</span>
              <div className="absolute inset-0 opacity-20" 
                   style={{
                     background: 'linear-gradient(45deg, transparent, rgba(0, 229, 255, 0.1), transparent)',
                     animation: 'shimmer 4s ease-in-out infinite'
                   }}></div>
            </h3>

            {/* Année d'étude */}
            <div className="text-lg md:text-xl mb-6 font-semibold">
              <span className="text-green-400">1ère année validée</span>
              <span className="text-gray-400 mx-2">•</span>
              <span className="text-teal-400">2ème année en cours</span>
            </div>

            {/* Description futuriste */}
            <div className="bg-gray-900/50 rounded-xl p-4 md:p-6 border border-teal-400/20">
              <p className="text-sm md:text-base text-gray-300 leading-relaxed mb-4">
                Formation spécialisée en développement informatique, couvrant les technologies 
                modernes et les pratiques de l'industrie.
              </p>
              
              {/* Technologies/compétences avec effet futuriste */}
              <div className="flex flex-wrap justify-center gap-2 md:gap-3">
                {[
                  'Maths',
                  'JavaScript',
                  'Java',
                  'Réseaux',
                  'Gestion de projet',
                  'Bases de données',
                  'Développement Web',
                  'Algorithmes',
                  'Cybersécurité'
                ].map((skill, index) => (
                  <span 
                    key={index}
                    className="px-2 md:px-3 py-1 bg-gradient-to-r from-teal-500/30 to-blue-500/30 rounded-full text-teal-300 text-xs md:text-sm border border-teal-400/30 hover:border-teal-400/60 transition-all duration-300 cursor-default relative overflow-hidden group"
                    style={{
                      textShadow: '0 0 5px rgba(0, 229, 255, 0.5)',
                      animationDelay: `${index * 0.1}s`
                    }}
                  >
                    <span className="absolute inset-0 bg-gradient-to-r from-transparent via-teal-400/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                          style={{transform: 'translateX(-100%)', animation: 'slideGlow 2s ease-in-out infinite'}}></span>
                    <span className="relative z-10">{skill}</span>
                  </span>
                ))}
              </div>
            </div>

            {/* Indicateur de progression futuriste */}
            <div className="mt-8">
              <div className="flex justify-between items-center mb-2">
                <span className="text-gray-400 text-sm">Progression du BUT</span>
                <span className="text-sm font-semibold">
                  <span className="text-green-400">1ère année : 100%</span>
                  <span className="text-gray-400"> • </span>
                  <span className="text-teal-400">2ème année : 60%</span>
                </span>
              </div>
              <div className="space-y-2">
                {/* Barre 1ère année */}
                <div className="w-full bg-gray-700 rounded-full h-2 overflow-hidden">
                  <div 
                    className="h-full bg-gradient-to-r from-green-400 to-green-500 rounded-full relative"
                    style={{ width: '100%' }}
                  >
                    <div className="absolute inset-0 bg-white/20 animate-pulse"></div>
                  </div>
                </div>
                {/* Barre 2ème année */}
                <div className="w-full bg-gray-700 rounded-full h-2 overflow-hidden">
                  <div 
                    className="h-full bg-gradient-to-r from-teal-400 to-blue-400 rounded-full relative"
                    style={{ width: '60%' }}
                  >
                    <div className="absolute inset-0 bg-white/20 animate-pulse"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Particles flottantes */}
          <div className="absolute top-4 left-4 w-2 h-2 bg-teal-400 rounded-full animate-ping opacity-60"></div>
          <div className="absolute top-8 right-8 w-1 h-1 bg-blue-400 rounded-full animate-pulse opacity-40"></div>
          <div className="absolute bottom-6 left-8 w-1.5 h-1.5 bg-teal-300 rounded-full animate-bounce opacity-50"></div>
          <div className="absolute bottom-4 right-4 w-2 h-2 bg-blue-300 rounded-full animate-ping opacity-30"></div>
        </div>
      </div>
    </section>
  );
}

export default Formation; 