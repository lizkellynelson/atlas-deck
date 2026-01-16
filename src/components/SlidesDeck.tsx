import { AnimatePresence } from 'framer-motion';
import { useSlideNavigation } from '../hooks/useSlideNavigation';

interface SlidesDeckProps {
  slides: React.ReactNode[];
}

const SlidesDeck = ({ slides }: SlidesDeckProps) => {
  const { currentSlide, touchHandlers } = useSlideNavigation(slides.length);

  return (
    <div className="relative w-full h-screen overflow-hidden" {...touchHandlers}>
      <AnimatePresence mode="wait">
        <div key={currentSlide}>
          {slides[currentSlide]}
        </div>
      </AnimatePresence>

      {/* Logo watermark */}
      <div className="fixed top-6 right-6 z-50 w-12 h-12 opacity-40 hover:opacity-100 transition-opacity">
        <img src="/Journalism_Atlas_icon_green_transparent.png" alt="Atlas" className="w-full h-full" />
      </div>

      {/* Progress indicator */}
      <div className="fixed bottom-8 left-0 right-0 flex justify-center items-center gap-4 px-8 z-50">
        <div className="flex gap-2">
          {slides.map((_, index) => (
            <div
              key={index}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                index === currentSlide
                  ? 'w-8 bg-atlas-600'
                  : 'w-1.5 bg-gray-300 hover:bg-gray-400 cursor-pointer'
              }`}
            />
          ))}
        </div>
        <div className="text-sm font-medium text-gray-600 bg-white/80 backdrop-blur-sm px-3 py-1 rounded-full">
          {currentSlide + 1} / {slides.length}
        </div>
      </div>

      {/* Navigation hints */}
      {currentSlide < slides.length - 1 && (
        <div className="fixed bottom-8 right-8 text-gray-400 text-sm font-medium animate-pulse">
          Press → or swipe left
        </div>
      )}
    </div>
  );
};

export default SlidesDeck;
