import React, { useEffect, useRef } from 'react';

const MatrixRain = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');

    // Caractères utilisés (code binaire + quelques caractères japonais pour l'effet Matrix)
    const chars = '01アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲン';
    const charArray = chars.split('');

    let columns;
    let drops = [];

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      
      const fontSize = 16;
      columns = Math.floor(canvas.width / fontSize);
      
      // Réinitialiser les gouttes
      drops = [];
      for (let i = 0; i < columns; i++) {
        drops[i] = Math.random() * canvas.height;
      }
    };

    const draw = () => {
      // Effet de fade avec un rectangle semi-transparent (plus intense pour être plus discret)
      ctx.fillStyle = 'rgba(17, 24, 39, 0.1)'; // Gris très foncé avec plus de transparence
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      const fontSize = 14;
      ctx.font = `${fontSize}px monospace`;
      ctx.textAlign = 'center';

      for (let i = 0; i < columns; i++) {
        // Caractère aléatoire
        const char = charArray[Math.floor(Math.random() * charArray.length)];
        
        // Couleur variable selon la position (effet de fade) - plus discret
        const opacity = Math.random();
        if (opacity > 0.99) {
          // Caractères lumineux très rares
          ctx.fillStyle = 'rgba(255, 255, 255, 0.6)';
        } else if (opacity > 0.97) {
          ctx.fillStyle = 'rgba(45, 212, 191, 0.5)';
        } else {
          ctx.fillStyle = `rgba(13, 148, 136, ${0.1 + opacity * 0.2})`;
        }

        // Dessiner le caractère
        ctx.fillText(char, i * fontSize, drops[i] * fontSize);

        // Redémarrer la goutte au hasard ou quand elle atteint le bas
        if (drops[i] * fontSize > canvas.height && Math.random() > 0.95) {
          drops[i] = 0;
        }
        
        // Déplacer la goutte vers le bas
        drops[i] += Math.random() * 0.5 + 0.5;
      }
    };

    // Configuration initiale
    resizeCanvas();
    
    // Animation
    const interval = setInterval(draw, 35);

    // Event listeners
    window.addEventListener('resize', resizeCanvas);

    return () => {
      clearInterval(interval);
      window.removeEventListener('resize', resizeCanvas);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0"
      style={{ opacity: 0.15 }}
    />
  );
};

export default MatrixRain; 