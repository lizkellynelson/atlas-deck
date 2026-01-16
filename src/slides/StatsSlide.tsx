import { motion } from 'framer-motion';
import Slide from '../components/Slide';

interface Stat {
  value: string;
  label: string;
  description?: string;
}

interface StatsSlideProps {
  title: string;
  stats: Stat[];
}

const StatsSlide = ({ title, stats }: StatsSlideProps) => {
  return (
    <Slide background="bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="space-y-16">
        <motion.h2
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.1, duration: 0.6 }}
          className="text-4xl md:text-6xl font-display font-bold text-gray-900 text-center"
        >
          {title}
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3 + index * 0.15, duration: 0.6 }}
              className="text-center space-y-3 p-8 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="text-5xl md:text-6xl font-display font-bold text-atlas-600">
                {stat.value}
              </div>
              <div className="text-xl md:text-2xl font-semibold text-gray-900">
                {stat.label}
              </div>
              {stat.description && (
                <div className="text-base text-gray-600 pt-2">
                  {stat.description}
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </Slide>
  );
};

export default StatsSlide;
