'use client';

import { motion } from 'framer-motion';
import { useTheme } from 'next-themes';
import { Bot, Brain, Code, Sparkles, Zap, Network } from 'lucide-react';

const elements = [
  { Icon: Bot, left: '10%', top: '20%', size: 40, delay: 0 },
  { Icon: Brain, left: '30%', top: '60%', size: 50, delay: 0.1 },
  { Icon: Code, left: '60%', top: '30%', size: 45, delay: 0.2 },
  { Icon: Sparkles, left: '80%', top: '70%', size: 35, delay: 0.3 },
  { Icon: Network, left: '40%', top: '80%', size: 55, delay: 0.4 },
  { Icon: Zap, left: '70%', top: '40%', size: 40, delay: 0.5 },
];

export function FloatingElements() {
  const { theme } = useTheme();

  return (
    <div className="relative w-full h-full">
      <motion.div
        className="absolute inset-0"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        {elements.map(({ Icon, left, top, size, delay }, i) => (
          <motion.div
            key={i}
            className="absolute"
            style={{
              left,
              top,
              width: size,
              height: size,
            }}
            initial={{ scale: 0, opacity: 0 }}
            animate={{
              scale: 1,
              opacity: 0.5,
              y: [0, -20, 0],
            }}
            transition={{
              y: {
                duration: 3 + i * 0.2,
                repeat: Infinity,
                ease: "easeInOut",
                repeatType: "reverse"
              },
              scale: {
                duration: 0.5,
                delay
              },
              opacity: {
                duration: 0.5,
                delay
              }
            }}
          >
            <div className="relative w-full h-full">
              <div className="absolute inset-0 rounded-full bg-primary/10 blur-xl" />
              <div className="relative w-full h-full flex items-center justify-center">
                <Icon className="w-1/2 h-1/2 text-primary" />
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}