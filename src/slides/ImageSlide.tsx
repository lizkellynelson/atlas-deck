import { motion } from 'framer-motion';
import Slide from '../components/Slide';

interface ImageSlideProps {
  imageUrl: string;
  title?: string;
  caption?: string;
  overlay?: 'light' | 'dark' | 'none';
}

const ImageSlide = ({ imageUrl, title, caption, overlay = 'dark' }: ImageSlideProps) => {
  const overlayClass =
    overlay === 'dark'
      ? 'bg-black/50'
      : overlay === 'light'
      ? 'bg-white/50'
      : '';

  return (
    <Slide className="!p-0">
      <div className="absolute inset-0">
        <img
          src={imageUrl}
          alt={title || 'Slide image'}
          className="w-full h-full object-cover"
        />
        {overlay !== 'none' && <div className={`absolute inset-0 ${overlayClass}`} />}
      </div>

      {(title || caption) && (
        <div className="relative z-10 flex flex-col justify-end h-full p-12 md:p-16 lg:p-24">
          {title && (
            <motion.h2
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className={`text-4xl md:text-6xl lg:text-7xl font-display font-bold leading-tight mb-6 ${
                overlay === 'light' ? 'text-gray-900' : 'text-white'
              }`}
            >
              {title}
            </motion.h2>
          )}

          {caption && (
            <motion.p
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className={`text-lg md:text-xl max-w-3xl ${
                overlay === 'light' ? 'text-gray-700' : 'text-gray-200'
              }`}
            >
              {caption}
            </motion.p>
          )}
        </div>
      )}
    </Slide>
  );
};

export default ImageSlide;
