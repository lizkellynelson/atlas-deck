import { motion } from 'framer-motion';
import Slide from '../components/Slide';

interface TwoColumnSlideProps {
  title?: string;
  leftContent: React.ReactNode;
  rightContent: React.ReactNode;
}

const TwoColumnSlide = ({ title, leftContent, rightContent }: TwoColumnSlideProps) => {
  return (
    <Slide background="bg-white">
      <div className="space-y-12 w-full">
        {title && (
          <motion.h2
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.1, duration: 0.6 }}
            className="text-4xl md:text-5xl font-display font-bold text-gray-900 text-center"
          >
            {title}
          </motion.h2>
        )}

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10">
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="space-y-4"
          >
            {leftContent}
          </motion.div>

          <motion.div
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="space-y-4"
          >
            {rightContent}
          </motion.div>
        </div>
      </div>
    </Slide>
  );
};

export default TwoColumnSlide;
