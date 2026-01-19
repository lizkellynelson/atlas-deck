import { motion } from 'framer-motion';
import type { SlideProps } from '../types';

const Slide = ({ children, background = 'bg-white', className = '' }: SlideProps) => {
  return (
    <motion.div
      className={`slide ${background} ${className} relative`}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="slide-content">
        {children}
      </div>

      {/* Wordmark in bottom right corner */}
      <div className="absolute bottom-8 right-8">
        <img
          src="/Journalism_Atlas_wordmark_lockup_black.png"
          alt="Atlas Wordmark"
          className="h-8 w-auto opacity-50"
        />
      </div>
    </motion.div>
  );
};

export default Slide;
