"use client";

import React, { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';
import './CustomCursor.css';

const CustomCursor = () => {
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);
  const springConfig = { damping: 25, stiffness: 100 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);

  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const moveCursor = (e) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
    };

    window.addEventListener('mousemove', moveCursor);

    return () => {
      window.removeEventListener('mousemove', moveCursor);
    };
  }, [cursorX, cursorY]);

  useEffect(() => {
    const handleHover = () => setIsHovering(true);
    const handleLeave = () => setIsHovering(false);

    const interactiveElements = document.querySelectorAll('a, button');
    interactiveElements.forEach((el) => {
      el.addEventListener('mouseenter', handleHover);
      el.addEventListener('mouseleave', handleLeave);
    });

    return () => {
      interactiveElements.forEach((el) => {
        el.removeEventListener('mouseenter', handleHover);
        el.removeEventListener('mouseleave', handleLeave);
      });
    };
  }, []);

  return (
    <motion.div
      className="custom-cursor"
      style={{
        left: cursorXSpring,
        top: cursorYSpring,
        scale: isHovering ? 1.5 : 1,
        backgroundColor: isHovering ? '#ffffffff' : '#000000ff',
      }}
    />
  );
};

export default CustomCursor;
