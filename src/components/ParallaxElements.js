import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const ParallaxElements = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll();

  // Transformations pour différents éléments
  const y1 = useTransform(scrollYProgress, [0, 1], [0, -500]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, -300]);
  const y3 = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const rotate = useTransform(scrollYProgress, [0, 1], [0, 360]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [1, 1.2, 1]);

  // Créer les transformations pour les particules orbitales individuellement
  const particle1Y = useTransform(scrollYProgress, [0, 1], [0, -200]);
  const particle1Rotate = useTransform(scrollYProgress, [0, 1], [0, 360]);
  const particle2Y = useTransform(scrollYProgress, [0, 1], [0, -400]);
  const particle2Rotate = useTransform(scrollYProgress, [0, 1], [0, -360]);
  const particle3Y = useTransform(scrollYProgress, [0, 1], [0, -600]);
  const particle3Rotate = useTransform(scrollYProgress, [0, 1], [0, 360]);
  const particle4Y = useTransform(scrollYProgress, [0, 1], [0, -800]);
  const particle4Rotate = useTransform(scrollYProgress, [0, 1], [0, -360]);
  const particle5Y = useTransform(scrollYProgress, [0, 1], [0, -1000]);
  const particle5Rotate = useTransform(scrollYProgress, [0, 1], [0, 360]);

  const particleTransforms = [
    { y: particle1Y, rotate: particle1Rotate },
    { y: particle2Y, rotate: particle2Rotate },
    { y: particle3Y, rotate: particle3Rotate },
    { y: particle4Y, rotate: particle4Rotate },
    { y: particle5Y, rotate: particle5Rotate }
  ];

  return (
    <div ref={containerRef} className="fixed inset-0 pointer-events-none z-0">
      {/* Cercles géométriques animés */}
      <motion.div
        style={{ y: y1, rotate }}
        className="absolute top-20 right-20 w-32 h-32 border-2 border-teal-400/30 rounded-full"
      />
      
      <motion.div
        style={{ y: y2, rotate: useTransform(rotate, (r) => -r) }}
        className="absolute top-60 left-10 w-24 h-24 border border-cyan-400/20 rounded-full"
      />

      <motion.div
        style={{ y: y3, scale }}
        className="absolute bottom-40 right-40 w-16 h-16 bg-gradient-to-r from-teal-400/10 to-cyan-400/10 rounded-full blur-sm"
      />

      {/* Lignes géométriques */}
      <motion.div
        style={{ y: y1 }}
        className="absolute top-0 left-1/4 w-0.5 h-96 bg-gradient-to-b from-transparent via-teal-400/30 to-transparent"
      />
      
      <motion.div
        style={{ y: y2 }}
        className="absolute top-40 right-1/3 w-0.5 h-64 bg-gradient-to-b from-transparent via-cyan-400/20 to-transparent transform rotate-45"
      />

      {/* Hexagones flottants */}
      <motion.div
        style={{ y: y1, rotate }}
        className="absolute top-96 left-1/2 w-20 h-20"
      >
        <svg viewBox="0 0 100 100" className="w-full h-full">
          <polygon
            points="50,5 95,27.5 95,72.5 50,95 5,72.5 5,27.5"
            fill="none"
            stroke="rgba(45, 212, 191, 0.3)"
            strokeWidth="2"
          />
        </svg>
      </motion.div>

      <motion.div
        style={{ y: y3, rotate: useTransform(rotate, (r) => r * 2) }}
        className="absolute bottom-60 left-1/3 w-12 h-12"
      >
        <svg viewBox="0 0 100 100" className="w-full h-full">
          <polygon
            points="50,5 95,27.5 95,72.5 50,95 5,72.5 5,27.5"
            fill="rgba(13, 148, 136, 0.1)"
            stroke="rgba(13, 148, 136, 0.4)"
            strokeWidth="1"
          />
        </svg>
      </motion.div>

      {/* Grille perspective */}
      <motion.div
        style={{ y: y2 }}
        className="absolute inset-0 opacity-10"
      >
        <div 
          className="w-full h-full"
          style={{
            backgroundImage: `
              radial-gradient(circle at 50% 50%, rgba(45, 212, 191, 0.2) 1px, transparent 1px)
            `,
            backgroundSize: '60px 60px',
            transform: 'perspective(1000px) rotateX(60deg)',
            transformOrigin: 'center bottom'
          }}
        />
      </motion.div>

      {/* Particules orbitales */}
      {particleTransforms.map((transform, i) => (
        <motion.div
          key={i}
          style={{ 
            y: transform.y,
            rotate: transform.rotate,
            top: `${20 + i * 15}%`,
            left: `${10 + i * 20}%`,
            animation: `float ${3 + i}s ease-in-out infinite alternate`,
            boxShadow: '0 0 10px rgba(45, 212, 191, 0.8)'
          }}
          className="absolute w-2 h-2 bg-teal-400 rounded-full opacity-60"
        />
      ))}
    </div>
  );
};

export default ParallaxElements; 