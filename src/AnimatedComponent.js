import React, { useEffect } from "react";
import anime from "animejs";

const AnimatedComponent = () => {
  useEffect(() => {
    anime({
      targets: '.box',
      translateX: 250,
      duration: 2000,
      loop: true,
      direction: 'alternate',
      easing: 'easeInOutQuad'
    });
  }, []);

  return <div className="box" style={{ width: 100, height: 100, background: "blue" }} />;
};

export default AnimatedComponent;
