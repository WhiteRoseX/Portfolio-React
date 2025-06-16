import { Element, scroller } from "react-scroll"; // Pour gérer le scroll
import React ,{useEffect} from "react";
import { motion } from "framer-motion";

// Importation des logos (ajoutez les logos dans le dossier /src/assets ou un autre dossier adapté)
import chessLogo from "./echec.png"; // Remplacez par le chemin vers le logo des échecs
import techLogo from "./tech-logo.png"; // Remplacez par le chemin vers le logo informatique
import gymLogo from "./gym.png"; // Remplacez par le chemin vers le logo salle de sport

function About() {

  useEffect(() => {
    // Scroll automatiquement tout en haut de la page
    window.scrollTo(0, 0);
  }, []);

  return (
    
    <section id="about" className="bg-gray-900 text-gray-200 py-16 md:py-20">
      <Element name="about"></Element>
      <div className="container mx-auto px-4">
        {/* Titre avec animation */}
        <motion.h2
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-3xl md:text-4xl font-bold text-teal-400 text-center mb-8 md:mb-16 tracking-wider glitch-effect"
        >
          À propos de moi
        </motion.h2>

        {/* Carte futuriste */} 
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="relative bg-gray-800 p-4 md:p-8 rounded-lg shadow-lg flex flex-col md:flex-row items-center justify-between space-y-6 md:space-y-0 md:space-x-8"
        >
          {/* Texte à gauche */}
          <div className="flex-1">
            <motion.h3
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="text-xl md:text-2xl font-semibold text-teal-400 mb-4"
            >
              Lucas Djavid
            </motion.h3>
            <motion.p
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-sm md:text-base text-gray-300 mb-4 leading-relaxed"
            >
              Je suis un développeur Full-Stack passionné par la technologie et
              l'innovation. Avec une expérience dans le développement web,
              l'analyse de cybersécurité et la résolution de problèmes
              algorithmiques, je cherche constamment à repousser les limites de
              mes compétences.
            </motion.p>
            <motion.p
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-sm md:text-base text-gray-300 leading-relaxed"
            >
              En dehors du code, j'adore relever des défis créatifs et travailler sur des projets innovants.
              Mon objectif est de continuer à apprendre et à contribuer à des
              projets qui ont un impact significatif.
            </motion.p>
          </div>

          {/* Image ronde avec le point animé */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative flex items-center justify-center"
          >
            <div className="relative group">
              {/* Image avec l'effet glitch */}
              <div className="relative w-32 h-32 md:w-48 md:h-48 rounded-full border-4 border-teal-400 shadow-lg object-cover glitch-container">
                <img
                  src="/img/photo.png" // Remplace par ton chemin d'image
                  alt="Lucas Djavid"
                  className="absolute inset-0 w-full h-full rounded-full object-cover glitch-img"
                />
              </div>

              {/* Cercle contenant le point animé */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="relative w-full h-full">
                  {/* Cercle transparent pour l'animation */}
                  <div className="absolute w-full h-full rounded-full border-2 border-transparent animate-spin-slow">
                    {/* Point animé */}
                    <div
                      className="absolute w-2 h-2 bg-teal-400 rounded-full"
                      style={{
                        top: "0", // Place initialement le point au sommet
                        left: "50%",
                        transform: "translate(-50%, -50%)", // Centrer le point
                      }}
                    ></div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
        {/* Section Passions */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="mt-20 text-center"
        >
          <h3 className="text-2xl md:text-3xl font-semibold text-teal-400 mb-6 md:mb-8">
            Mes Passions
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-10">
            {/* Passion 1: Jeux d'échecs */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              whileHover={{ scale: 1.05, duration: 0.1 }} // Ajoute l'effet de mise à l'échelle au survol
              viewport={{ once: true }}
              className="bg-gray-800 p-4 md:p-6 rounded-lg shadow-lg text-gray-300"
            >
              <div className="flex justify-center mb-4">
                <img src={chessLogo} alt="Jeux d'échecs" className="w-12 h-12 md:w-16 md:h-16 object-contain" />
              </div>
              <h4 className="text-xl md:text-2xl font-semibold text-teal-400 mb-4">Jeux d'échecs</h4>
              <p className="text-sm md:text-base">
                Les échecs sont une passion de longue date. Mon Elo de plus de 1015 témoigne de mon
                investissement dans ce jeu stratégique. J'aime relever des défis et tester
                de nouvelles tactiques pour toujours m'améliorer.
              </p>
            </motion.div>


            {/* Passion 2: Informatique */}
            {/* Passion 1: Jeux d'échecs */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              whileHover={{ scale: 1.05, duration: 0.1 }} // Ajoute l'effet de mise à l'échelle au survol
              viewport={{ once: true }}
              className="bg-gray-800 p-4 md:p-6 rounded-lg shadow-lg text-gray-300"
            >
              <div className="flex justify-center mb-4">
                <img src={techLogo} alt="Informatique" className="w-12 h-12 md:w-16 md:h-16 object-contain" />
              </div>
              <h4 className="text-xl md:text-2xl font-semibold text-teal-400 mb-4">Informatique</h4>
              <p className="text-sm md:text-base">
              L'informatique est un domaine qui me fascine depuis toujours. Que ce soit en
                programmation, en systèmes ou en cybersécurité, j'aime explorer tout ce qui touche
                à la technologie et aux nouvelles innovations.
              </p>
            </motion.div>



            {/* Passion 3: Salle de sport */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              whileHover={{ scale: 1.05, duration: 0.1 }} // Ajoute l'effet de mise à l'échelle au survol
              viewport={{ once: true }}
              className="bg-gray-800 p-4 md:p-6 rounded-lg shadow-lg text-gray-300"
            >
              <div className="flex justify-center mb-4">
                <img src={gymLogo} alt="Salle de sport" className="w-12 h-12 md:w-16 md:h-16 object-contain" />
              </div>
              <h4 className="text-xl md:text-2xl font-semibold text-teal-400 mb-4">Salle de sport</h4>
              <p className="text-sm md:text-base">
                La salle de sport est pour moi un moyen de rester en forme et de me challenger. 
                J'adore les séances de musculation et les entraînements intenses pour repousser mes limites.
              </p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default About;
