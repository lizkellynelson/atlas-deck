import { motion } from 'framer-motion';
import Slide from '../components/Slide';

interface ContentSlideProps {
  title: string;
  content: string | React.ReactNode;
  align?: 'left' | 'center';
}

const ContentSlide = ({ title, content, align = 'left' }: ContentSlideProps) => {
  const alignmentClass = align === 'center' ? 'text-center mx-auto' : '';

  return (
    <Slide background="bg-white">
      <div className={`space-y-8 max-w-4xl ${alignmentClass}`}>
        <motion.h2
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.1, duration: 0.6 }}
          className="text-4xl md:text-6xl font-display font-bold text-gray-900 leading-tight"
        >
          {title}
        </motion.h2>

        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="text-xl md:text-2xl text-gray-700 leading-relaxed space-y-4"
        >
          {typeof content === 'string' ? (
            <p>{content}</p>
          ) : (
            content
          )}
        </motion.div>
      </div>
    </Slide>
  );
};

export default ContentSlide;
