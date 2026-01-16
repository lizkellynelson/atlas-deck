import { motion } from 'framer-motion';
import Slide from '../components/Slide';

interface EmphasisSlideProps {
  text: string;
  background?: string;
  textColor?: string;
}

const EmphasisSlide = ({
  text,
  background = 'bg-atlas-black',
  textColor = 'text-atlas-lime',
}: EmphasisSlideProps) => {
  return (
    <Slide background={background}>
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        className="text-center"
      >
        <h2
          className={`text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-display font-bold leading-tight ${textColor} max-w-5xl mx-auto`}
        >
          {text}
        </h2>
      </motion.div>
    </Slide>
  );
};

export default EmphasisSlide;
