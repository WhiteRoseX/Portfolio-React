import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

// Liste des logos que tu souhaites afficher
const logos = [
  "https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png", 
  "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f1/Vitejs-logo.svg/640px-Vitejs-logo.svg.png", 
  "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/640px-React-icon.svg.png", 
  "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Node.js_logo_2015.svg/640px-Node.js_logo_2015.svg.png", 
  // Ajoute d'autres logos ici...
];

const FloatingLogos = ({ numberOfLogos = 20 }) => {
  const [positions, setPositions] = useState([]);

  // Fonction pour générer une position aléatoire pour chaque logo
  const randomPositionWithinBounds = (width, height) => ({
    x: Math.random() * width - width / 2,
    y: Math.random() * height - height / 2,
  });

  // Calculer la taille de l'écran et définir les positions des logos
  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      const height = window.innerHeight;
      const newPositions = [];
      
      for (let i = 0; i < numberOfLogos; i++) {
        newPositions.push(randomPositionWithinBounds(width, height));
      }

      setPositions(newPositions);
    };

    handleResize();  // Initialiser les positions des logos

    // Réajuster la position des logos quand la taille de l'écran change
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [numberOfLogos]);

  return (
    <>
      {positions.map((pos, index) => (
        <motion.div
          key={index}
          style={{
            position: "absolute",
            left: `${pos.x}px`,
            top: `${pos.y}px`,
            width: "30px",  // Taille des logos
            height: "30px",
            pointerEvents: "none",  // Pas d'interaction avec le curseur
          }}
          animate={{
            x: [pos.x, Math.random() * window.innerWidth - window.innerWidth / 2],
            y: [pos.y, Math.random() * window.innerHeight - window.innerHeight / 2],
            scale: [1, 1, 0.5], // Reste à taille normale, puis rétrécit à la fin
            opacity: [1, 1, 0.3], // Reste opaque, puis diminue à la fin
          }}
          transition={{
            duration: Math.random() * 3 + 3,  // Durée totale entre 3 et 6 secondes
            times: [0, 0.75, 1], // 75% du temps : pas de changement, 25% : transition
            repeat: Infinity, // L'animation se répète à l'infini
            repeatType: "loop",
            ease: "easeInOut",
          }}
        >
          <img
            src={logos[index % logos.length]}  // Utilisation du logo à l'index actuel
            alt="logo"
            style={{
              width: "100%",
              height: "100%",
              objectFit: "contain",
            }}
          />
        </motion.div>
      ))}
    </>
  );
};

export default FloatingLogos;
