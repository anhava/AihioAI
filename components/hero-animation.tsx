'use client';

import { useEffect, useRef, useState } from 'react';
import { motion, useAnimation } from 'framer-motion';

const GLOBE_SIZE = 400;
const NUM_POINTS = 800;
const POINT_SIZE = 2;
const ROTATION_SPEED = 0.001;

function generatePoints() {
  const points = [];
  for (let i = 0; i < NUM_POINTS; i++) {
    const theta = Math.random() * Math.PI * 2;
    const phi = Math.acos(Math.random() * 2 - 1);
    const x = GLOBE_SIZE/2 * Math.sin(phi) * Math.cos(theta);
    const y = GLOBE_SIZE/2 * Math.sin(phi) * Math.sin(theta);
    const z = GLOBE_SIZE/2 * Math.cos(phi);
    points.push({ x, y, z });
  }
  return points;
}

function rotatePoint(point: { x: number; y: number; z: number }, angle: number) {
  const cosA = Math.cos(angle);
  const sinA = Math.sin(angle);
  return {
    x: point.x * cosA - point.z * sinA,
    y: point.y,
    z: point.x * sinA + point.z * cosA,
  };
}

export function HeroAnimation() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [points] = useState(generatePoints());
  const [rotation, setRotation] = useState(0);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    let animationFrame: number;

    const animate = () => {
      setRotation(r => r + ROTATION_SPEED);
      animationFrame = requestAnimationFrame(animate);
    };

    animationFrame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrame);
  }, []);

  if (!mounted) return null;

  return (
    <div 
      ref={containerRef}
      className="relative w-full h-full flex items-center justify-center"
    >
      <div 
        className="relative"
        style={{
          width: GLOBE_SIZE,
          height: GLOBE_SIZE,
          perspective: 1000,
        }}
      >
        {points.map((point, i) => {
          const rotated = rotatePoint(point, rotation);
          const scale = (rotated.z + GLOBE_SIZE/2) / GLOBE_SIZE;
          const opacity = Math.max(0.1, scale);

          return (
            <motion.div
              key={i}
              className="absolute rounded-full bg-primary"
              style={{
                width: POINT_SIZE,
                height: POINT_SIZE,
                left: '50%',
                top: '50%',
                x: rotated.x,
                y: rotated.y,
                opacity,
                scale,
              }}
              initial={false}
              animate={{
                x: rotated.x,
                y: rotated.y,
                opacity,
                scale,
              }}
              transition={{
                duration: 0,
                ease: 'linear',
              }}
            />
          );
        })}
      </div>

      {/* Connection lines */}
      <div className="absolute inset-0">
        {Array.from({ length: 8 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute inset-0 border border-primary/10 rounded-full"
            style={{
              scale: 0.4 + i * 0.1,
            }}
            animate={{
              opacity: [0.2, 0.4, 0.2],
              scale: [0.4 + i * 0.1, 0.42 + i * 0.1, 0.4 + i * 0.1],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              delay: i * 0.2,
            }}
          />
        ))}
      </div>
    </div>
  );
}