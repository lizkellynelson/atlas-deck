import { motion } from 'framer-motion';
import Slide from '../components/Slide';

interface QuoteSlideProps {
  quote: string;
  author: string;
  role?: string;
  image?: string;
}

const QuoteSlide = ({ quote, author, role, image }: QuoteSlideProps) => {
  return (
    <Slide background="bg-gradient-to-br from-atlas-50 via-white to-atlas-50">
      <div className="max-w-5xl mx-auto space-y-12">
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="relative"
        >
          <svg
            className="absolute -top-6 -left-4 w-16 h-16 text-atlas-200 opacity-50"
            fill="currentColor"
            viewBox="0 0 32 32"
          >
            <path d="M10 8c-3.3 0-6 2.7-6 6s2.7 6 6 6c1.4 0 2.7-.5 3.7-1.3l-1.3 4.3c-.2.7.2 1.4.9 1.6.1 0 .2.1.3.1.6 0 1.1-.4 1.3-1l2-6.6c.1-.2.1-.5.1-.7 0-3.9-3.1-7-7-7zm14 0c-3.3 0-6 2.7-6 6s2.7 6 6 6c1.4 0 2.7-.5 3.7-1.3l-1.3 4.3c-.2.7.2 1.4.9 1.6.1 0 .2.1.3.1.6 0 1.1-.4 1.3-1l2-6.6c.1-.2.1-.5.1-.7 0-3.9-3.1-7-7-7z" />
          </svg>

          <blockquote className="text-3xl md:text-4xl lg:text-5xl font-display font-medium text-gray-900 leading-relaxed pl-12">
            {quote}
          </blockquote>
        </motion.div>

        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="flex items-center gap-6 pl-12"
        >
          {image && (
            <div className="w-16 h-16 rounded-full overflow-hidden bg-gray-200 flex-shrink-0">
              <img src={image} alt={author} className="w-full h-full object-cover" />
            </div>
          )}
          <div>
            <div className="text-2xl font-semibold text-gray-900">{author}</div>
            {role && <div className="text-lg text-gray-600">{role}</div>}
          </div>
        </motion.div>
      </div>
    </Slide>
  );
};

export default QuoteSlide;
