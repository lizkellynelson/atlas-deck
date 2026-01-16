import { motion } from 'framer-motion';
import Slide from '../components/Slide';

interface TitleSlideProps {
  title: string;
  subtitle?: string;
  author?: string;
}

const TitleSlide = ({ title, subtitle, author }: TitleSlideProps) => {
  return (
    <Slide background="bg-gradient-to-br from-atlas-900 via-atlas-800 to-atlas-700">
      <div className="text-center space-y-8">
        <motion.h1
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="text-5xl md:text-7xl lg:text-8xl font-display font-bold text-white leading-tight"
        >
          {title}
        </motion.h1>

        {subtitle && (
          <motion.p
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-xl md:text-3xl text-atlas-100 font-light max-w-4xl mx-auto"
          >
            {subtitle}
          </motion.p>
        )}

        {author && (
          <motion.p
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="text-lg md:text-xl text-atlas-200 font-medium pt-8"
          >
            {author}
          </motion.p>
        )}
      </div>
    </Slide>
  );
};

export default TitleSlide;
