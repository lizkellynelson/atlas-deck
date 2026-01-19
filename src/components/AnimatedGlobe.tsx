const AnimatedGlobe = () => {
  return (
    <div className="relative w-full max-w-md mx-auto aspect-square">
      {/* Static Atlas Logo */}
      <div
        className="absolute inset-0"
        style={{
          filter: 'drop-shadow(0 0 20px rgba(206, 255, 0, 0.3))',
        }}
      >
        <img
          src="/Journalism_Atlas_logo_acid_green.png"
          alt="Atlas Logo"
          className="w-full h-full"
        />
      </div>
    </div>
  );
};

export default AnimatedGlobe;
