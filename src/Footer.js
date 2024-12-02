import React, { useEffect, useRef } from 'react';
import * as SVG from 'svg.js';

const Footer = () => {
  const footerPatternRef = useRef(null);

  useEffect(() => {
    // Vérifie si l'élément existe avant d'ajouter l'animation SVG
    if (footerPatternRef.current) {
      const draw = SVG().addTo(footerPatternRef.current).size('100%', '100%');
      draw.rect(100, 100).fill('#f06');
    }
  }, []);

  return (
    <footer className="footer">
      <div ref={footerPatternRef} className="footer-pattern"></div>
      <p>Footer content</p>
    </footer>
  );
}

export default Footer;
