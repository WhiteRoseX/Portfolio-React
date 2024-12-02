import React from "react";
import { motion } from "framer-motion";
import Projects from "./Projects";

function ProjectModal({ isOpen, onClose, title, description, image_path, link, date, technologies }) {
  if (!isOpen) return null;

  // Animation pour la modal
  const modalVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.3 } },
  };

  // Animation pour l'arrière-plan de la modal
  const backdropVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 0.6, transition: { duration: 0.5 } },
  };

  return (
    <>
      {/* Arrière-plan de la modal avec animation */}
      <motion.div
        className="fixed inset-0 bg-black bg-opacity-50 zindex-absolu"
        variants={backdropVariants}
        initial="hidden"
        animate="visible"
        onClick={onClose}
      ></motion.div>

      {/* Effet d'onde en boucle */}
      <motion.div
        className="fixed inset-0 flex items-center justify-center z-40"
        animate={{
          scale: [1, 10],
          opacity: [1, 0],
        }}
        transition={{
          duration: 2,
          ease: "easeOut",
        }}
      >
        <div className="absolute w-64 h-64 border-4 border-teal-500 rounded-full"></div>
      </motion.div>

      {/* Contenu du modal avec animation */}
      <motion.div
        className="fixed inset-0 flex items-center justify-center zindex-absolu"
        variants={modalVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="bg-gray-800 text-white p-6 rounded-xl shadow-2xl w-3/4 md:w-1/2 max-w-md relative">
          <button
            onClick={onClose}
            className="absolute top-3 right-3 text-gray-300 hover:text-white zindex-absolu"
          >
            ✕
          </button>

          {/* Image centrée */}
          <motion.img
            src={image_path}
            alt={title}
            className="rounded-xl mb-6 w-full h-64 object-cover"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          />

          {/* Titre */}
          <h3 className="text-3xl font-bold text-teal-400 mb-4 text-center">{title}</h3>

          {/* Description */}
          <p className="text-gray-300 mb-4 text-center">{description}</p>

          {/* Lien */}
          {link && (
            <a
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-teal-400 hover:underline mb-4 block text-center"
            >
              Lien vers le projet
            </a>
          )}

          {/* Date */}
          {date && (
            <p className="text-gray-400 text-sm mb-6 text-center">{`Date: ${date}`}</p>
          )}

          {/* Affichage des technologies avec logos */}
          <div className="flex flex-wrap justify-center gap-4 mt-4">
            {technologies.map((tech, index) => (
              <div key={index} className="flex flex-col items-center">
                <img
                  src={tech.logo}
                  alt={tech.name}
                  className="w-8 h-8 object-contain"
                />
                <span className="text-sm text-gray-400 mt-1">{tech.name}</span>
              </div>
            ))}
          </div>

          {/* Bouton pour fermer */}
          <button
            onClick={onClose}
            className="px-6 py-3 bg-teal-500 text-white font-semibold rounded-full hover:bg-teal-600 transition-all duration-300"
          >
            Fermer
          </button>
        </div>
      </motion.div>
    </>
  );
}

export default ProjectModal;
