import SlidesDeck from './components/SlidesDeck';
import AnimatedGlobe from './components/AnimatedGlobe';
import ContentSlide from './slides/ContentSlide';
import ListSlide from './slides/ListSlide';
import TwoColumnSlide from './slides/TwoColumnSlide';
import Slide from './components/Slide';
import { motion } from 'framer-motion';

function App() {
  const slides = [
    // Slide 1 — Title with Bold Geometric Design
    <Slide background="bg-black">
      <div className="relative w-full h-full overflow-hidden">
        {/* Large diagonal lime shape - SUPER BOLD COLOR BLOCKING */}
        <motion.div
          initial={{ x: 1400 }}
          animate={{ x: 0 }}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
          className="absolute top-0 right-0 w-[60%] h-full bg-atlas-lime z-0"
          style={{ clipPath: 'polygon(25% 0, 100% 0, 100% 100%, 0% 100%)' }}
        />

        {/* Animated Globe - positioned on lime background */}
        <div className="absolute top-16 right-24 w-56 h-56 z-10">
          <AnimatedGlobe />
        </div>

        {/* Content */}
        <div className="relative z-20 h-full flex flex-col justify-center pl-16 pr-8 max-w-5xl">
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="space-y-8"
          >
            <h1 className="text-6xl md:text-7xl lg:text-8xl font-display font-black text-white leading-[0.95] tracking-tight max-w-3xl drop-shadow-lg">
              THE INDEPENDENT JOURNALISM ATLAS
            </h1>
            <div className="space-y-4 max-w-2xl">
              <p className="text-2xl md:text-3xl font-display font-bold text-white drop-shadow-md">
                Building Infrastructure for the Future of Journalism
              </p>
              <p className="text-lg md:text-xl text-white font-light">
                Discovery, standards, and fair partnerships for a more open and resilient media future.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </Slide>,

    // Slide 2 — The Transformation
    <ContentSlide
      title="The Transformation"
      content={
        <div className="space-y-8">
          <div className="space-y-6">
            <h3 className="text-3xl font-display font-bold text-atlas-black">
              Journalism is evolving from institutions to individuals
            </h3>
            <div className="space-y-4 text-lg md:text-xl text-atlas-dark-gray">
              <p className="font-semibold text-atlas-black">The shift is real:</p>
              <ul className="space-y-3 pl-6">
                <li className="flex items-start gap-3">
                  <span className="text-atlas-lime flex-shrink-0 font-bold">•</span>
                  <span>Audiences increasingly trust <span className="underline">people</span> over <span className="underline">institutions</span></span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-atlas-lime flex-shrink-0 font-bold">•</span>
                  <span>
                    Communities rely on independent creators for civic accountability, local
                    reporting, cultural context, and service journalism
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-atlas-lime flex-shrink-0 font-bold">•</span>
                  <span>Individual creators are the atomic units generating information</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-atlas-lime flex-shrink-0 font-bold">•</span>
                  <span>Yet infrastructure remains anchored to a bygone past</span>
                </li>
              </ul>

              <p className="font-semibold text-atlas-black pt-6">The opportunity:</p>
              <ul className="space-y-3 pl-6">
                <li className="flex items-start gap-3">
                  <span className="text-atlas-lime flex-shrink-0 font-bold">•</span>
                  <span>
                    Invert the model with intention — empower creators to collectively and individually own their work,
                    audience, and reputation
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-atlas-lime flex-shrink-0 font-bold">•</span>
                  <span>
                    Build portable, transparent authority that travels with creators across
                    platforms
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-atlas-lime flex-shrink-0 font-bold">•</span>
                  <span>Create systems where credibility flourishes without gatekeeping</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      }
    />,

    // Slide 2B — Bold Emphasis with Geometric Design
    <Slide background="bg-atlas-dark-gray">
      <div className="relative h-full overflow-hidden">
        {/* Diagonal lime accent */}
        <motion.div
          initial={{ x: -800, y: 800 }}
          animate={{ x: 0, y: 0 }}
          transition={{ duration: 1, ease: 'easeOut' }}
          className="absolute bottom-0 left-0 w-96 h-96 bg-atlas-lime opacity-30"
          style={{ clipPath: 'polygon(0 0, 100% 100%, 0 100%)' }}
        />

        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="relative z-10 h-full flex items-center justify-center px-16"
        >
          <p className="text-4xl md:text-5xl lg:text-6xl font-display font-black text-atlas-white leading-tight text-center max-w-5xl">
            Without infrastructure,{' '}
            <span className="text-atlas-lime">we cannot strengthen</span>{' '}
            the news ecosystems our democracy needs.
          </p>
        </motion.div>
      </div>
    </Slide>,

    // Slide 3 — The Problems
    <ListSlide
      title="The Problems"
      items={[
        { text: 'No directory — impossible to find them', type: 'cross' },
        { text: 'No trust signals — difficult to verify credibility', type: 'cross' },
        { text: 'No standards — each creator applies their own approach', type: 'cross' },
        { text: 'No interoperability — locked into platform silos', type: 'cross' },
        { text: 'No funder intelligence — philanthropy cannot see or assess them', type: 'cross' },
        {
          text: 'Partnership uncertainty — Publishers and creators are just learning how to work together with limited models and frameworks',
          type: 'cross',
        },
        {
          text: 'Platform-dependent monetization — limited control over revenue',
          type: 'cross',
        },
        {
          text: 'No support for the profession at a social services level: Mental health, stability',
          type: 'cross',
        },
      ]}
    />,

    // Slide 3B — Result with Bold Typography
    <Slide background="bg-atlas-lime">
      <div className="relative h-full overflow-hidden">
        {/* Geometric accent */}
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.2, ease: 'easeOut' }}
          className="absolute top-0 right-0 w-[600px] h-[600px] bg-black opacity-10"
          style={{ clipPath: 'polygon(100% 0, 100% 100%, 50% 100%)' }}
        />

        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="relative z-10 h-full flex flex-col items-center justify-center px-16 space-y-12"
        >
          <p className="text-4xl md:text-5xl lg:text-6xl font-display font-black text-atlas-black uppercase tracking-tight leading-none">
            RESULT
          </p>
          <p className="text-2xl md:text-3xl lg:text-4xl font-display font-bold text-atlas-black leading-tight text-center max-w-4xl">
            The most dynamic frontier of journalism is invisible, unverifiable, and unsupported.
          </p>
        </motion.div>
      </div>
    </Slide>,

    // Slide 4 — Why Now
    <Slide background="bg-white">
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ x: -30, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-atlas-black mb-8">
            Why Now
          </h2>
          <div className="space-y-8">
            <h3 className="text-2xl md:text-3xl font-display font-bold text-atlas-black">
              Five forces converging:
            </h3>
            <div className="space-y-4 text-lg md:text-xl text-atlas-dark-gray">
              <div className="flex items-start gap-4">
                <span className="text-3xl font-bold text-atlas-lime flex-shrink-0">1</span>
                <p>Legacy media shrinking while creator ecosystem expands</p>
              </div>
              <div className="flex items-start gap-4">
                <span className="text-3xl font-bold text-atlas-lime flex-shrink-0">2</span>
                <p>AI search/agents fundamentally changing discovery</p>
              </div>
              <div className="flex items-start gap-4">
                <span className="text-3xl font-bold text-atlas-lime flex-shrink-0">3</span>
                <p>Social platforms evolving to broadcast + DM models</p>
              </div>
              <div className="flex items-start gap-4">
                <span className="text-3xl font-bold text-atlas-lime flex-shrink-0">4</span>
                <p>Trust shifting from institutions to individuals</p>
              </div>
              <div className="flex items-start gap-4">
                <span className="text-3xl font-bold text-atlas-lime flex-shrink-0">5</span>
                <p>Renewed investments in local information ecosystems</p>
              </div>
            </div>
            <p className="text-lg md:text-xl text-atlas-dark-gray pt-4">
              <span className="font-bold text-atlas-black">Plus:</span> Creators emerging from
              diverse backgrounds — trained journalists, educators, storytellers, curators — with no
              shared infrastructure connecting them to communities and funders.
            </p>
          </div>
        </motion.div>

        <motion.div
          initial={{ x: 30, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="flex justify-center items-center"
        >
          <div className="grid grid-cols-1 gap-6">
            <div className="relative w-64 h-64">
              <img
                src="/carlos_espina.png"
                alt="Carlos Espina"
                className="w-full h-full object-cover rounded-2xl shadow-2xl"
              />
            </div>
            <div className="relative w-64 h-64">
              <img
                src="/amber_sherman.png"
                alt="Amber Sherman"
                className="w-full h-full object-cover rounded-2xl shadow-2xl"
              />
            </div>
            <div className="relative w-64 h-64">
              <img
                src="/marisa_kabas.png"
                alt="Marisa Kabas"
                className="w-full h-full object-cover rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </motion.div>
      </div>
    </Slide>,

    // Slide 4A — Creator Ecosystem Visualization
    <Slide background="bg-atlas-dark-gray">
      <div className="relative h-full flex flex-col justify-center items-center px-12 py-8">
        <motion.h2
          initial={{ y: -30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.1, duration: 0.6 }}
          className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-white mb-8 text-center"
        >
          The Tension: Platform Power vs. Creator Identity
        </motion.h2>

        {/* Quadrant Chart */}
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="relative w-full max-w-5xl aspect-[4/3] bg-white rounded-xl shadow-2xl p-8"
        >
          {/* Y-Axis Label */}
          <div className="absolute left-2 top-1/2 -translate-y-1/2 -rotate-90">
            <p className="text-sm md:text-base font-display font-bold text-atlas-black whitespace-nowrap">
              Geography / Affinity / Identity →
            </p>
          </div>

          {/* X-Axis Label */}
          <div className="absolute bottom-2 left-1/2 -translate-x-1/2">
            <p className="text-sm md:text-base font-display font-bold text-atlas-black">
              ← Platforms →
            </p>
          </div>

          {/* Grid Lines */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none p-8">
            <line x1="50%" y1="10%" x2="50%" y2="90%" stroke="#e5e5e5" strokeWidth="2" />
            <line x1="10%" y1="50%" x2="90%" y2="50%" stroke="#e5e5e5" strokeWidth="2" />
          </svg>

          {/* Scatter Plot of Creators (represented as circles) */}
          <div className="absolute inset-0 p-12">
            {/* Top Left Quadrant - Local/Identity focused, Few platforms */}
            {[...Array(8)].map((_, i) => (
              <motion.div
                key={`tl-${i}`}
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.5 + i * 0.05, duration: 0.3 }}
                className="absolute w-8 h-8 md:w-10 md:h-10 bg-atlas-lime rounded-full border-2 border-atlas-black shadow-lg"
                style={{
                  left: `${15 + Math.random() * 20}%`,
                  top: `${15 + Math.random() * 20}%`,
                }}
              />
            ))}

            {/* Top Right Quadrant - Local/Identity focused, Many platforms */}
            {[...Array(12)].map((_, i) => (
              <motion.div
                key={`tr-${i}`}
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.6 + i * 0.04, duration: 0.3 }}
                className="absolute w-8 h-8 md:w-10 md:h-10 bg-atlas-lime rounded-full border-2 border-atlas-black shadow-lg"
                style={{
                  left: `${55 + Math.random() * 30}%`,
                  top: `${15 + Math.random() * 20}%`,
                }}
              />
            ))}

            {/* Bottom Left Quadrant - Platform agnostic, Few platforms */}
            {[...Array(6)].map((_, i) => (
              <motion.div
                key={`bl-${i}`}
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.7 + i * 0.06, duration: 0.3 }}
                className="absolute w-8 h-8 md:w-10 md:h-10 bg-atlas-lime rounded-full border-2 border-atlas-black shadow-lg opacity-70"
                style={{
                  left: `${15 + Math.random() * 20}%`,
                  top: `${55 + Math.random() * 25}%`,
                }}
              />
            ))}

            {/* Bottom Right Quadrant - Platform agnostic, Many platforms */}
            {[...Array(15)].map((_, i) => (
              <motion.div
                key={`br-${i}`}
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.8 + i * 0.03, duration: 0.3 }}
                className="absolute w-8 h-8 md:w-10 md:h-10 bg-atlas-lime rounded-full border-2 border-atlas-black shadow-lg"
                style={{
                  left: `${55 + Math.random() * 30}%`,
                  top: `${55 + Math.random() * 25}%`,
                }}
              />
            ))}

            {/* Platform labels */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.2, duration: 0.5 }}
              className="absolute right-8 top-1/4 text-xs md:text-sm font-bold text-atlas-dark-gray"
            >
              YouTube<br/>Substack<br/>Beehiiv
            </motion.div>
          </div>
        </motion.div>

        <motion.p
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 1.3, duration: 0.6 }}
          className="text-lg md:text-xl text-white text-center mt-6 max-w-4xl italic"
        >
          Each dot represents a creator journalist navigating platform choices while maintaining their identity and serving their community.
        </motion.p>
      </div>
    </Slide>,

    // Slide 4B — Bold Emphasis with Visual Interest
    <Slide background="bg-white">
      <div className="relative h-full overflow-hidden">
        {/* Diagonal green and white treatment */}
        <motion.div
          initial={{ x: 800 }}
          animate={{ x: 0 }}
          transition={{ duration: 0.9, ease: 'easeOut' }}
          className="absolute top-0 right-0 w-[60%] h-full bg-atlas-lime"
          style={{ clipPath: 'polygon(25% 0, 100% 0, 100% 100%, 0% 100%)' }}
        />

        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="relative z-10 h-full flex items-center justify-center px-20"
        >
          <p className="text-5xl md:text-6xl lg:text-7xl font-display font-black text-atlas-black leading-tight text-center max-w-5xl">
            What we're building at The Atlas
          </p>
        </motion.div>
      </div>
    </Slide>,

    // Slide 4C — Atlas as Connective Tissue (Recent Work)
    <Slide background="bg-white">
      <div className="relative h-full overflow-hidden">
        {/* Lime diagonal accent */}
        <motion.div
          initial={{ y: -800 }}
          animate={{ y: 0 }}
          transition={{ duration: 1, ease: 'easeOut' }}
          className="absolute top-0 left-0 w-full h-[40%] bg-atlas-lime opacity-20"
          style={{ clipPath: 'polygon(0 0, 100% 0, 100% 60%, 0 80%)' }}
        />

        <div className="relative z-10 h-full flex flex-col justify-center px-16 py-12">
          <motion.h2
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-atlas-black mb-10"
          >
            Atlas as Connective Tissue
          </motion.h2>

          <div className="space-y-8 max-w-5xl">
            <motion.p
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="text-2xl md:text-3xl font-display font-bold text-atlas-black"
            >
              We're part of that connective tissue — and we're already building it.
            </motion.p>

            <div className="grid md:grid-cols-2 gap-8">
              <motion.div
                initial={{ x: -30, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.4, duration: 0.6 }}
                className="bg-atlas-light-gray p-6 rounded-xl border-l-4 border-atlas-lime"
              >
                <h3 className="text-xl md:text-2xl font-display font-bold text-atlas-black mb-3">
                  Connecting Creators
                </h3>
                <p className="text-lg text-atlas-dark-gray">
                  Brokering partnerships that help creator journalists find collaboration opportunities and build stronger networks.
                </p>
              </motion.div>

              <motion.div
                initial={{ x: 30, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.6 }}
                className="bg-atlas-light-gray p-6 rounded-xl border-l-4 border-atlas-lime"
              >
                <h3 className="text-xl md:text-2xl font-display font-bold text-atlas-black mb-3">
                  Platform Partnerships
                </h3>
                <p className="text-lg text-atlas-dark-gray">
                  Facilitating deals that create fair partnership frameworks between platforms and independent creators.
                </p>
              </motion.div>

              <motion.div
                initial={{ x: -30, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.6, duration: 0.6 }}
                className="bg-atlas-light-gray p-6 rounded-xl border-l-4 border-atlas-lime"
              >
                <h3 className="text-xl md:text-2xl font-display font-bold text-atlas-black mb-3">
                  Mediation & Standards
                </h3>
                <p className="text-lg text-atlas-dark-gray">
                  Building the frameworks that make these connections possible — establishing trust signals, ethics standards, and partnership templates.
                </p>
              </motion.div>

              <motion.div
                initial={{ x: 30, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.7, duration: 0.6 }}
                className="bg-atlas-light-gray p-6 rounded-xl border-l-4 border-atlas-lime"
              >
                <h3 className="text-xl md:text-2xl font-display font-bold text-atlas-black mb-3">
                  Building Momentum
                </h3>
                <p className="text-lg text-atlas-dark-gray">
                  Each connection strengthens the ecosystem — proving that infrastructure-first thinking can unlock value for everyone.
                </p>
              </motion.div>
            </div>

            <motion.p
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.8, duration: 0.6 }}
              className="text-xl text-atlas-dark-gray pt-4 italic"
            >
              This is what connective tissue looks like in practice.
            </motion.p>
          </div>
        </div>
      </div>
    </Slide>,

    // Slide 5 — What We're Building (with geometric accent)
    <Slide background="bg-white">
      <div className="relative h-full overflow-hidden">
        {/* Large lime geometric accent on right */}
        <motion.div
          initial={{ x: 800 }}
          animate={{ x: 0 }}
          transition={{ duration: 1, ease: 'easeOut' }}
          className="absolute top-0 right-0 w-[400px] h-full bg-atlas-lime opacity-20"
          style={{ clipPath: 'polygon(50% 0, 100% 0, 100% 100%, 0% 100%)' }}
        />

        <div className="relative z-10 h-full flex flex-col justify-center px-16 py-12">
          <motion.h2
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-atlas-black mb-10"
          >
            What We're Building
          </motion.h2>

          <div className="space-y-8 max-w-5xl">
            <h3 className="text-2xl md:text-3xl font-display font-bold text-atlas-black">
              Four Infrastructure Pillars
            </h3>

            <div className="space-y-6">
              <motion.div
                initial={{ x: -30, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.4, duration: 0.6 }}
                className="border-l-4 border-atlas-lime pl-6 py-2 bg-atlas-light-gray/30 rounded-r-lg pr-6"
              >
                <h4 className="text-xl md:text-2xl font-bold text-atlas-black mb-2">
                  1. Standards & Frameworks
                </h4>
                <p className="text-lg md:text-xl text-atlas-dark-gray">
                  Transparent, creator-informed ethics and credibility standards developed with
                  Trusting News, CNTI, Pew, The Video Consortium, and creators themselves.
                </p>
              </motion.div>

              <motion.div
                initial={{ x: -30, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.6 }}
                className="border-l-4 border-atlas-lime pl-6 py-2 bg-atlas-light-gray/30 rounded-r-lg pr-6"
              >
                <h4 className="text-xl md:text-2xl font-bold text-atlas-black mb-2">
                  2. Discovery & Mapping
                </h4>
                <p className="text-lg md:text-xl text-atlas-dark-gray">
                  A comprehensive, verified, searchable database of creator-journalists — by beat,
                  geography, format, audience, trust indicators, business model, and more.
                </p>
              </motion.div>

              <motion.div
                initial={{ x: -30, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.6, duration: 0.6 }}
                className="border-l-4 border-atlas-lime pl-6 py-2 bg-atlas-light-gray/30 rounded-r-lg pr-6"
              >
                <h4 className="text-xl md:text-2xl font-bold text-atlas-black mb-2">
                  3. Platform Intermediation
                </h4>
                <p className="text-lg md:text-xl text-atlas-dark-gray">
                  Systems and templates enabling creators, newsrooms, civic institutions, and
                  platforms to collaborate fairly — licensing, syndication, and partnerships without
                  exploitation.
                </p>
              </motion.div>

              <motion.div
                initial={{ x: -30, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.7, duration: 0.6 }}
                className="border-l-4 border-atlas-lime pl-6 py-2 bg-atlas-light-gray/30 rounded-r-lg pr-6"
              >
                <h4 className="text-xl md:text-2xl font-bold text-atlas-black mb-2">
                  4. New Products & Marketplaces
                </h4>
                <p className="text-lg md:text-xl text-atlas-dark-gray">
                  Creator-centered revenue opportunities: PR distribution (with Stacker), public
                  health RFP pipelines (with Harvard Chan), B2B research and consulting marketplaces.
                </p>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </Slide>,

    // Slide 6 — Our Traction
    <Slide background="bg-atlas-light-gray">
      <div className="space-y-10">
        <motion.h2
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.1, duration: 0.6 }}
          className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-atlas-black"
        >
          Our Traction
        </motion.h2>

        <div className="grid gap-4 text-lg md:text-xl">
          {[
            '1,000+ verified creators mapped (growing weekly)',
            'Top 50 US Creator-Model Journalists list published',
            'Active partnerships: Substats, Press Forward Chicago, SmartNews, Stacker, Chicago Public Media, ICFJ, The Video Consortium',
            '$240K Year 1 partnership revenue projected',
            'Database launch: February 2026 (Knight Media Forum)',
            'Advisory board: Recruitment underway',
            'Community engagement: Project C newsletter + network',
            'Team depth: 20+ years in journalism innovation, audience strategy, platforms, and trust frameworks',
          ].map((item, index) => (
            <motion.div
              key={index}
              initial={{ x: -30, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.3 + index * 0.1, duration: 0.5 }}
              className="flex items-start gap-4 bg-white p-4 rounded-lg"
            >
              <span className="text-atlas-lime font-bold text-xl flex-shrink-0">✓</span>
              <span className="text-atlas-dark-gray">{item}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </Slide>,

    // Slide 7 — Why Infrastructure Matters
    <TwoColumnSlide
      title="Why Infrastructure Matters"
      leftContent={
        <div className="space-y-6">
          <h3 className="text-2xl md:text-3xl font-display font-bold text-atlas-black">
            We are NOT:
          </h3>
          <div className="space-y-3 text-lg md:text-xl">
            {[
              'A newsroom',
              'A platform',
              'A content studio',
              'An agency',
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-3">
                <span className="text-2xl text-atlas-dark-gray font-bold">✗</span>
                <span className="text-atlas-dark-gray">{item}</span>
              </div>
            ))}
          </div>
        </div>
      }
      rightContent={
        <div className="space-y-6">
          <h3 className="text-2xl md:text-3xl font-display font-bold text-atlas-black">
            We ARE building:
          </h3>
          <div className="space-y-3 text-lg md:text-xl">
            {[
              'Makes journalism-minded creators visible and verifiable',
              'Establishes credibility and trust signals',
              'Enables fair partnerships and portability',
              'Strengthens local information ecosystems',
              'Makes responsible funding possible',
              'Fosters interoperability across platforms',
            ].map((item, i) => (
              <div key={i} className="flex items-start gap-3">
                <span className="text-2xl text-atlas-lime font-bold flex-shrink-0">✓</span>
                <span className="text-atlas-dark-gray">{item}</span>
              </div>
            ))}
          </div>
        </div>
      }
    />,

    // Slide 7B — Bold Statement with White and Green Diagonal
    <Slide background="bg-white">
      <div className="relative h-full overflow-hidden">
        {/* Diagonal green background */}
        <motion.div
          initial={{ x: -800 }}
          animate={{ x: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="absolute top-0 left-0 w-[65%] h-full bg-atlas-lime"
          style={{ clipPath: 'polygon(0 0, 100% 0, 75% 100%, 0% 100%)' }}
        />

        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative z-10 h-full flex items-center justify-center px-20"
        >
          <div className="space-y-8 text-center">
            <p className="text-6xl md:text-7xl lg:text-8xl font-display font-black text-atlas-black leading-none uppercase">
              WE'RE BUILDING THE ROADS
            </p>
            <p className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-atlas-black leading-tight">
              Others will drive the cars.
            </p>
          </div>
        </motion.div>
      </div>
    </Slide>,

    // Slide 8 — 2026 Priority (with partnership pathways on right)
    <Slide background="bg-white">
      <div className="h-full flex flex-col justify-center px-16 py-12">
        <div className="grid lg:grid-cols-[1fr,350px] gap-12 items-start">
          {/* Left column - main content */}
          <div className="space-y-8">
            <motion.h2
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.1, duration: 0.6 }}
              className="text-4xl md:text-5xl font-display font-bold text-atlas-black"
            >
              2026 Priority: Collaborative Database Expansion
            </motion.h2>

            <motion.div
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="space-y-4"
            >
              <h3 className="text-2xl md:text-3xl font-display font-bold text-atlas-black">
                Building with the Right Partners
              </h3>
              <p className="text-lg md:text-xl text-atlas-dark-gray">
                <span className="font-bold text-atlas-black">Our goal:</span> Make the database as
                expansive and useful as possible by partnering with efforts already supporting local
                information ecosystems.
              </p>
            </motion.div>

            <motion.div
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="space-y-4"
            >
              <h4 className="text-xl md:text-2xl font-bold text-atlas-black">
                Early opportunities:
              </h4>
              <ul className="space-y-3 text-lg md:text-xl text-atlas-dark-gray pl-6">
                <li className="flex items-start gap-3">
                  <span className="text-atlas-lime flex-shrink-0 text-2xl">•</span>
                  <span>
                    <strong className="text-atlas-black">Chicago</strong> — National model for
                    integrating creators into civic information ecosystems
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-atlas-lime flex-shrink-0 text-2xl">•</span>
                  <span>
                    <strong className="text-atlas-black">Washington, DC</strong> — Bootstrap with our
                    existing network and connections
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-atlas-lime flex-shrink-0 text-2xl">•</span>
                  <span>
                    <strong className="text-atlas-black">Additional cities</strong> — Identifying
                    where creator journalism layers can be mapped and empowered
                  </span>
                </li>
              </ul>
            </motion.div>
          </div>

          {/* Right column - partnership pathways */}
          <motion.div
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="bg-atlas-lime p-8 rounded-xl space-y-4 h-fit"
          >
            <h4 className="text-xl font-display font-bold text-atlas-black">Partnership pathways:</h4>
            <div className="space-y-2 text-base md:text-lg text-atlas-black">
              <div>• Knight Cities programs</div>
              <div>• Press Forward chapters</div>
              <div>• LA Local initiatives</div>
              <div>• New Public networks</div>
              <div>• Beehiiv</div>
              <div>• Substack</div>
              <div>• YouTube</div>
              <div>• Other civic info efforts</div>
            </div>
          </motion.div>
        </div>
      </div>
    </Slide>,

    // Slide 8B — Key Question
    <Slide background="bg-atlas-dark-gray">
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="text-center space-y-8"
      >
        <p className="text-2xl md:text-3xl font-display font-bold text-atlas-white">
          The question we're asking:
        </p>
        <p className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-atlas-lime leading-tight max-w-4xl mx-auto">
          Where can a functional layer of existing creator journalism be mapped, verified, and
          integrated to strengthen local communities?
        </p>
      </motion.div>
    </Slide>,

    // Slide 9 — The Value We Unlock (with bold geometric photo grid)
    <Slide background="bg-white">
      <div className="relative w-full h-full flex items-center">
        {/* Large diagonal lime background - VERY VISIBLE */}
        <div
          className="absolute top-0 right-0 w-[55%] h-full bg-atlas-lime z-0"
          style={{ clipPath: 'polygon(20% 0, 100% 0, 100% 100%, 0% 100%)' }}
        />

        <div className="relative z-10 w-full px-12 py-8">
          <div className="grid lg:grid-cols-[1.2fr,1fr] gap-12 items-center max-w-7xl mx-auto">
            {/* Left column - text content */}
            <div className="space-y-6">
              <motion.h2
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.1, duration: 0.6 }}
                className="text-4xl md:text-5xl font-display font-bold text-atlas-black"
              >
                The Value We Unlock
              </motion.h2>

              <div className="grid grid-cols-2 gap-4">
                <motion.div
                  initial={{ y: 30, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.2, duration: 0.6 }}
                  className="space-y-2 bg-atlas-light-gray p-4 rounded-lg"
                >
                  <h3 className="text-lg font-display font-bold text-atlas-black">For Funders</h3>
                  <ul className="space-y-1 text-sm text-atlas-dark-gray">
                    <li>• Visibility into credible local information</li>
                    <li>• Data to inform investments</li>
                    <li>• Trust assessment tools</li>
                  </ul>
                </motion.div>

                <motion.div
                  initial={{ y: 30, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.3, duration: 0.6 }}
                  className="space-y-2 bg-atlas-light-gray p-4 rounded-lg"
                >
                  <h3 className="text-lg font-display font-bold text-atlas-black">For Creators</h3>
                  <ul className="space-y-1 text-sm text-atlas-dark-gray">
                    <li>• Legitimacy without gatekeeping</li>
                    <li>• Revenue pathways</li>
                    <li>• Portable reputation</li>
                  </ul>
                </motion.div>

                <motion.div
                  initial={{ y: 30, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.4, duration: 0.6 }}
                  className="space-y-2 bg-atlas-light-gray p-4 rounded-lg"
                >
                  <h3 className="text-lg font-display font-bold text-atlas-black">
                    For Publishers & Platforms
                  </h3>
                  <ul className="space-y-1 text-sm text-atlas-dark-gray">
                    <li>• Discover credible creators</li>
                    <li>• New audience models</li>
                  </ul>
                </motion.div>

                <motion.div
                  initial={{ y: 30, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.5, duration: 0.6 }}
                  className="space-y-2 bg-atlas-light-gray p-4 rounded-lg"
                >
                  <h3 className="text-lg font-display font-bold text-atlas-black">
                    For Communities
                  </h3>
                  <ul className="space-y-1 text-sm text-atlas-dark-gray">
                    <li>• Transparent trust signals</li>
                    <li>• Accountable journalism</li>
                    <li>• Pluralistic media</li>
                  </ul>
                </motion.div>
              </div>
            </div>

            {/* Right column - photo grid */}
            <motion.div
              initial={{ x: 50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="relative"
            >
              <div className="grid grid-cols-2 gap-4 w-full max-w-md mx-auto">
                <a
                  href="https://www.platformer.news/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative aspect-square overflow-hidden cursor-pointer transform transition-all duration-500 hover:scale-105 hover:rotate-1 hover:z-20 shadow-xl"
                >
                  <img
                    src="/casey_newton.jpg"
                    alt="Casey Newton"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-20 transition-opacity duration-300" />
                </a>

                <a
                  href="https://www.youtube.com/BeccaFarsace"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative aspect-square overflow-hidden cursor-pointer transform transition-all duration-500 hover:scale-105 hover:rotate-1 hover:z-20 shadow-xl"
                >
                  <img
                    src="/becca_farsace.jpg"
                    alt="Becca Farsace"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-20 transition-opacity duration-300" />
                </a>

                <a
                  href="https://hunterharris.substack.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative aspect-square overflow-hidden cursor-pointer transform transition-all duration-500 hover:scale-105 hover:rotate-1 hover:z-20 shadow-xl"
                >
                  <img
                    src="/hunter_harris.png"
                    alt="Hunter Harris"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-20 transition-opacity duration-300" />
                </a>

                <a
                  href="https://www.instagram.com/kahlil.greene/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative aspect-square overflow-hidden cursor-pointer transform-all duration-500 hover:scale-105 hover:rotate-1 hover:z-20 shadow-xl"
                >
                  <img
                    src="/kahlil_greene.jpg"
                    alt="Kahlil Greene"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-20 transition-opacity duration-300" />
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </Slide>,

    // Slide 10 — Financial Model
    <ContentSlide
      title="Financial Model & Sustainability"
      content={
        <div className="space-y-8">
          <div className="bg-atlas-lime p-6 rounded-xl">
            <p className="text-xl md:text-2xl font-display font-bold text-atlas-black text-center">
              Creator-first principle: We don't ask creators for money. Revenue comes from
              institutions that benefit from creator infrastructure.
            </p>
          </div>

          <div className="space-y-4">
            <h3 className="text-2xl md:text-3xl font-display font-bold text-atlas-black">
              Revenue Strategy
            </h3>
            <p className="text-lg md:text-xl text-atlas-dark-gray">
              <span className="font-bold text-atlas-black">Our goal:</span> Infrastructure that pays for itself while serving public good
            </p>
            <p className="text-lg md:text-xl text-atlas-dark-gray">
              <span className="font-bold text-atlas-black">Year 1 partnership revenue:</span> $240K
              (SmartNews, Stacker, CPM, ICFJ)
            </p>
          </div>

          <div className="space-y-4">
            <h3 className="text-2xl md:text-3xl font-display font-bold text-atlas-black">
              Fundraising Goal
            </h3>
            <p className="text-lg md:text-xl text-atlas-dark-gray">
              Talking to partners to raise $3-5 million.
            </p>
            <p className="text-lg md:text-xl text-atlas-dark-gray">
              That would create a pathway to be 50% supported by earned revenue by Year 3.
            </p>
            <p className="text-lg md:text-xl text-atlas-dark-gray">
              It would also give us time to explore pathways towards greater commercial investment alongside community stewardship, governance and, even, ownership — something we've already begun.
            </p>
          </div>

          <div className="space-y-4">
            <h4 className="text-xl md:text-2xl font-bold text-atlas-black">
              Earned revenue streams:
            </h4>
            <div className="grid gap-3 text-lg md:text-xl text-atlas-dark-gray">
              <div className="flex items-start gap-3">
                <span className="text-atlas-lime flex-shrink-0">•</span>
                <span>Platform API access and licensing</span>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-atlas-lime flex-shrink-0">•</span>
                <span>Partnership intermediation services</span>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-atlas-lime flex-shrink-0">•</span>
                <span>PR distribution and marketplace fees</span>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-atlas-lime flex-shrink-0">•</span>
                <span>Data and research products</span>
              </div>
            </div>
          </div>
        </div>
      }
    />,

    // Slide 11 — Why Us
    <ContentSlide
      title="Why Us"
      content={
        <div className="space-y-6">
          <div className="grid gap-5 text-lg md:text-xl">
            <div className="flex items-start gap-4">
              <span className="text-3xl font-bold text-atlas-lime flex-shrink-0">✓</span>
              <div>
                <p className="font-bold text-atlas-black">First-mover advantage</p>
                <p className="text-atlas-dark-gray">
                  We're building the infrastructure no one else is and started this work almost
                  three years ago with Project C.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <span className="text-3xl font-bold text-atlas-lime flex-shrink-0">✓</span>
              <div>
                <p className="font-bold text-atlas-black">Deep credibility</p>
                <p className="text-atlas-dark-gray">
                  Project C community, Top 50 list, collective connections in journalism, academia
                  and creator worlds
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <span className="text-3xl font-bold text-atlas-lime flex-shrink-0">✓</span>
              <div>
                <p className="font-bold text-atlas-black">Proven operators</p>
                <p className="text-atlas-dark-gray">
                  Each of us has 20+ years in journalism innovation, audience strategy, platforms and entrepreneurialism
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <span className="text-3xl font-bold text-atlas-lime flex-shrink-0">✓</span>
              <div>
                <p className="font-bold text-atlas-black">Early traction</p>
                <p className="text-atlas-dark-gray">Active partnerships generating revenue</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <span className="text-3xl font-bold text-atlas-lime flex-shrink-0">✓</span>
              <div>
                <p className="font-bold text-atlas-black">Values-aligned approach</p>
                <ul className="text-atlas-dark-gray space-y-1 pl-4">
                  <li>• Creator-first (never extracting from creators)</li>
                  <li>• Transparent and collaborative</li>
                  <li>• Globally informed while honoring local context</li>
                  <li>• Building toward creator/steward governance</li>
                </ul>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <span className="text-3xl font-bold text-atlas-lime flex-shrink-0">✓</span>
              <div>
                <p className="font-bold text-atlas-black">
                  Clear, achievable roadmap with February 2026 launch milestone
                </p>
              </div>
            </div>
          </div>
        </div>
      }
    />,

    // Slide 12 — Call to Action
    <Slide background="bg-atlas-black">
      <motion.div
        initial={{ y: 30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="space-y-10 text-center"
      >
        {/* Logo */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="w-48 h-48 mx-auto mb-8"
        >
          <img src="/Journalism_Atlas_logo_acid_green.png" alt="Atlas Logo" className="w-full h-full object-contain" />
        </motion.div>

        <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-atlas-white px-8">
          Let's build the next era of journalism infrastructure{' '}
          <span className="text-atlas-lime">together</span>
        </h2>

        {/* Centered Database Launch Date */}
        <p className="text-2xl md:text-3xl font-bold text-atlas-lime">
          Database launches February 2026
        </p>

        <div className="space-y-8 text-left max-w-3xl mx-auto px-8">
          <div>
            <p className="text-2xl font-bold text-atlas-lime mb-4">We seek anchor partners for:</p>
            <ul className="space-y-2 text-lg md:text-xl text-atlas-white">
              <li>• Chicago pilot launch</li>
              <li>• National database & standards development</li>
              <li>• Multi-city expansion (Press Forward, Knight Cities)</li>
              <li>• Global metadata & interoperability layer</li>
              <li>• Standards development</li>
            </ul>
          </div>

          {/* Smaller Contact Info */}
          <div className="bg-atlas-dark-gray p-6 rounded-xl space-y-2 text-atlas-white text-center">
            <p className="text-sm font-bold text-atlas-white">Contact:</p>
            <div className="space-y-1 text-sm">
              <p>Justin Bank — justin@journalismatlas.com</p>
              <p>Ryan Kellett — ryan@journalismatlas.com</p>
              <p>Liz Kelly Nelson — liz@journalismatlas.com</p>
            </div>
            <p className="text-sm pt-2 font-bold">journalismatlas.com</p>
          </div>
        </div>

        <p className="text-base md:text-lg text-atlas-white font-display italic px-8 max-w-4xl mx-auto">
          The Independent Journalism Atlas — Charting the path toward a more open, plural, and
          resilient media future.
        </p>
      </motion.div>
    </Slide>,
  ];

  return <SlidesDeck slides={slides} />;
}

export default App;
