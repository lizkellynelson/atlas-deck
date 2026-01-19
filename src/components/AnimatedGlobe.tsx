import { motion } from 'framer-motion';
import { useState } from 'react';

const AnimatedGlobe = () => {
  const [nodes] = useState(() => {
    // Generate random positions for twinkling nodes
    const nodeCount = 30;
    return Array.from({ length: nodeCount }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      delay: Math.random() * 2,
      duration: 1 + Math.random() * 2,
    }));
  });

  return (
    <div className="relative w-full max-w-md mx-auto aspect-square">
      {/* Static Atlas Logo */}
      <div
        className="absolute inset-0"
        style={{
          filter: 'drop-shadow(0 0 20px rgba(206, 255, 0, 0.3))',
        }}
      >
        <img
          src="/Journalism_Atlas_icon_green_transparent.png"
          alt="Atlas Logo"
          className="w-full h-full"
        />
      </div>

      {/* Twinkling nodes overlay */}
      <svg
        viewBox="0 0 200 200"
        className="absolute inset-0 w-full h-full pointer-events-none"
      >
        {nodes.map((node) => {
          // Project node onto sphere surface
          const theta = (node.x / 100) * Math.PI * 2;
          const phi = ((node.y / 100) * Math.PI) / 2 + Math.PI / 4;
          const radius = 85;

          const x = 100 + radius * Math.cos(theta) * Math.sin(phi);
          const y = 100 + radius * Math.sin(theta) * Math.sin(phi);

          return (
            <motion.circle
              key={node.id}
              cx={x}
              cy={y}
              r="3"
              fill="#ceff00"
              initial={{ opacity: 0, scale: 0 }}
              animate={{
                opacity: [0, 1, 0],
                scale: [0, 1.5, 0],
              }}
              transition={{
                duration: node.duration,
                delay: node.delay,
                repeat: Infinity,
                repeatDelay: 0.5,
              }}
              style={{
                filter: 'blur(1px)',
              }}
            />
          );
        })}
      </svg>

      {/* Glow effect */}
      <motion.div
        className="absolute inset-0 rounded-full pointer-events-none"
        style={{
          background:
            'radial-gradient(circle at 30% 30%, rgba(206, 255, 0, 0.15) 0%, transparent 50%)',
        }}
        animate={{
          opacity: [0.5, 0.8, 0.5],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />
    </div>
  );
};

export default AnimatedGlobe;
