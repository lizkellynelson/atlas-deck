import { motion } from 'framer-motion';
import Slide from '../components/Slide';

interface ListItem {
  text: string;
  type?: 'check' | 'cross' | 'neutral';
}

interface ListSlideProps {
  title: string;
  items: ListItem[];
  background?: string;
  columns?: 1 | 2;
}

const ListSlide = ({ title, items, background = 'bg-white', columns = 1 }: ListSlideProps) => {
  return (
    <Slide background={background}>
      <div className="space-y-10">
        <motion.h2
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.1, duration: 0.6 }}
          className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-atlas-black"
        >
          {title}
        </motion.h2>

        <div
          className={`grid gap-4 ${
            columns === 2 ? 'md:grid-cols-2' : 'grid-cols-1'
          }`}
        >
          {items.map((item, index) => (
            <motion.div
              key={index}
              initial={{ x: -30, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.3 + index * 0.1, duration: 0.5 }}
              className="flex items-start gap-4"
            >
              <span className="text-2xl md:text-3xl flex-shrink-0 pt-1">
                {item.type === 'check' && (
                  <span className="text-atlas-lime font-bold">✓</span>
                )}
                {item.type === 'cross' && (
                  <span className="text-atlas-dark-gray font-bold">✗</span>
                )}
                {item.type === 'neutral' && (
                  <span className="text-atlas-lime font-bold">•</span>
                )}
              </span>
              <p className="text-lg md:text-xl lg:text-2xl text-atlas-black leading-relaxed">
                {item.text}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </Slide>
  );
};

export default ListSlide;
