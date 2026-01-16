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
      {/* Globe SVG */}
      <svg
        viewBox="0 0 200 200"
        className="w-full h-full"
        style={{
          filter: 'drop-shadow(0 0 20px rgba(206, 255, 0, 0.3))',
        }}
      >
        {/* Main circle */}
        <motion.circle
          cx="100"
          cy="100"
          r="90"
          fill="none"
          stroke="#000000"
          strokeWidth="3"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 2, ease: 'easeInOut' }}
        />

        {/* Horizontal lines (latitude) */}
        {[-60, -30, 0, 30, 60].map((offset, i) => (
          <motion.ellipse
            key={`h-${i}`}
            cx="100"
            cy={100 + offset}
            rx="90"
            ry={30 - Math.abs(offset) * 0.3}
            fill="none"
            stroke="#313131"
            strokeWidth="1.5"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 2, delay: 0.5 + i * 0.1, ease: 'easeInOut' }}
          />
        ))}

        {/* Vertical lines (longitude) */}
        {[0, 30, 60, 90, 120, 150].map((angle, i) => (
          <motion.ellipse
            key={`v-${i}`}
            cx="100"
            cy="100"
            rx={90 * Math.abs(Math.cos((angle * Math.PI) / 180))}
            ry="90"
            fill="none"
            stroke="#313131"
            strokeWidth="1.5"
            transform={`rotate(${angle} 100 100)`}
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 2, delay: 0.5 + i * 0.1, ease: 'easeInOut' }}
          />
        ))}

        {/* Twinkling nodes */}
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
              r="2"
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
            />
          );
        })}
      </svg>

      {/* Rotating animation effect */}
      <motion.div
        className="absolute inset-0 rounded-full"
        style={{
          background:
            'radial-gradient(circle at 30% 30%, rgba(206, 255, 0, 0.1) 0%, transparent 50%)',
        }}
        animate={{
          rotate: 360,
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: 'linear',
        }}
      />
    </div>
  );
};

export default AnimatedGlobe;
