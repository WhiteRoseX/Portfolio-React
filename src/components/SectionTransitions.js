import React from 'react';
import { motion } from 'framer-motion';

const SectionTransitions = ({ children, index = 0 }) => {
  // Variants pour différents types d'animations
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2,
        duration: 0.8
      }
    }
  };

  const revealVariants = {
    hidden: { 
      clipPath: 'polygon(0 0, 0 0, 0 100%, 0% 100%)',
      opacity: 0 
    },
    visible: { 
      clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)',
      opacity: 1,
      transition: {
        duration: 1.2,
        ease: "easeInOut"
      }
    }
  };

  const slideVariants = {
    hidden: { 
      x: index % 2 === 0 ? -100 : 100,
      opacity: 0,
      scale: 0.8
    },
    visible: { 
      x: 0,
      opacity: 1,
      scale: 1,
      transition: {
        type: "spring",
        damping: 20,
        stiffness: 100,
        duration: 1
      }
    }
  };

  const morphVariants = {
    hidden: {
      borderRadius: "50%",
      scale: 0,
      rotate: 180,
      opacity: 0
    },
    visible: {
      borderRadius: "0%",
      scale: 1,
      rotate: 0,
      opacity: 1,
      transition: {
        duration: 1.5,
        ease: "easeOut",
        type: "spring",
        bounce: 0.3
      }
    }
  };

  const glitchVariants = {
    hidden: { 
      opacity: 0,
      filter: 'hue-rotate(0deg) saturate(100%)'
    },
    visible: { 
      opacity: 1,
      filter: 'hue-rotate(360deg) saturate(100%)',
      transition: {
        duration: 2,
        ease: "easeInOut"
      }
    }
  };

  // Choisir le variant en fonction de l'index de la section
  const getVariant = () => {
    switch (index % 4) {
      case 0: return revealVariants;
      case 1: return slideVariants;
      case 2: return morphVariants;
      case 3: return glitchVariants;
      default: return revealVariants;
    }
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      className="relative overflow-hidden"
    >
      <motion.div
        variants={getVariant()}
        className="relative"
      >
        {/* Overlay d'effet lumineux */}
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          whileInView={{ 
            opacity: [0, 0.5, 0],
            scale: [0, 2, 4],
          }}
          transition={{ 
            duration: 2,
            times: [0, 0.5, 1],
            delay: 0.5
          }}
          viewport={{ once: true }}
          className="absolute inset-0 bg-gradient-radial from-teal-400/20 via-transparent to-transparent pointer-events-none"
          style={{
            background: 'radial-gradient(circle at center, rgba(45, 212, 191, 0.2) 0%, transparent 70%)'
          }}
        />

        {/* Particules de transition */}
        <motion.div className="absolute inset-0 pointer-events-none">
          {[...Array(8)].map((_, i) => (
            <motion.div
              key={i}
              initial={{ 
                x: Math.random() * window.innerWidth,
                y: Math.random() * window.innerHeight,
                opacity: 0,
                scale: 0
              }}
              whileInView={{
                x: Math.random() * window.innerWidth,
                y: Math.random() * window.innerHeight,
                opacity: [0, 1, 0],
                scale: [0, 1, 0]
              }}
              transition={{
                duration: 3,
                delay: i * 0.2,
                repeat: Infinity,
                repeatType: "loop"
              }}
              viewport={{ once: false }}
              className="absolute w-1 h-1 bg-teal-400 rounded-full"
              style={{
                boxShadow: '0 0 10px rgba(45, 212, 191, 0.8)'
              }}
            />
          ))}
        </motion.div>

        {/* Ligne de scan horizontale */}
        <motion.div
          initial={{ x: '-100%', opacity: 0 }}
          whileInView={{ 
            x: '100vw',
            opacity: [0, 1, 1, 0]
          }}
          transition={{ 
            duration: 2,
            times: [0, 0.1, 0.9, 1],
            delay: 0.3
          }}
          viewport={{ once: true }}
          className="absolute top-1/2 left-0 w-32 h-0.5 bg-gradient-to-r from-transparent via-teal-400 to-transparent pointer-events-none z-10"
          style={{
            boxShadow: '0 0 20px rgba(45, 212, 191, 0.8)'
          }}
        />

        {children}
      </motion.div>
    </motion.div>
  );
};

export default SectionTransitions; 