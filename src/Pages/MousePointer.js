// eslint-disable-next-line
import React, { useEffect } from 'react';
import { gsap } from 'gsap';

const MousePointer = () => {
  useEffect(() => {
    const moveCircle = (e) => {
      gsap.to('.mouse-circle-mover', 1, {
        x: e.clientX,
        y: e.clientY,
        ease: 'power2.out'
      });
      gsap.to('.mouse-circle-mover-follow', 1.5, {
        x: e.clientX,
        y: e.clientY,
        ease: 'power2.out'
      });
    };

    window.addEventListener('mousemove', moveCircle);

    return () => {
      window.removeEventListener('mousemove', moveCircle);
    };
  }, []);

  return null; // Since this component doesn't render anything visible
};

export default MousePointer;
