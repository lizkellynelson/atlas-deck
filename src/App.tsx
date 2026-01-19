import SlidesDeck from './components/SlidesDeck';
import AnimatedGlobe from './components/AnimatedGlobe';
import ContentSlide from './slides/ContentSlide';
import ListSlide from './slides/ListSlide';
import TwoColumnSlide from './slides/TwoColumnSlide';
import Slide from './components/Slide';
import { motion } from 'framer-motion';

function App() {
  const slides = [
    // Slide 1 — Title with Bold Design
    <Slide background="bg-black">
      <div className="relative w-full h-full overflow-hidden">
        {/* Animated Globe - positioned top right */}
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
                Building Infrastructure for the Emerging Future of Journalism
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
                  <span className="text-atlas-dark-green flex-shrink-0 font-bold">•</span>
                  <span>Audiences increasingly trust <span className="underline">people</span> over <span className="underline">institutions</span></span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-atlas-dark-green flex-shrink-0 font-bold">•</span>
                  <span>
                    Communities rely on independent creators for civic accountability, local
                    reporting, cultural context, and service journalism
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-atlas-dark-green flex-shrink-0 font-bold">•</span>
                  <span>Individual creators are the atomic units generating information</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-atlas-dark-green flex-shrink-0 font-bold">•</span>
                  <span>Yet infrastructure remains anchored to a bygone past</span>
                </li>
              </ul>

              <p className="font-semibold text-atlas-black pt-6">The opportunity:</p>
              <ul className="space-y-3 pl-6">
                <li className="flex items-start gap-3">
                  <span className="text-atlas-dark-green flex-shrink-0 font-bold">•</span>
                  <span>
                    Invert the model with intention — empower creators to collectively and individually own their work,
                    audience, and reputation
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-atlas-dark-green flex-shrink-0 font-bold">•</span>
                  <span>
                    Build portable, transparent authority that travels with creators across
                    platforms
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-atlas-dark-green flex-shrink-0 font-bold">•</span>
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
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="relative z-10 h-full flex items-center justify-center px-16"
        >
          <p className="text-4xl md:text-5xl lg:text-6xl font-display font-black text-atlas-white leading-tight text-center max-w-5xl">
            The news ecosystems is fracturing and federating. We needs to invest in new infrastructure designed to support that new reality.
          </p>
        </motion.div>
      </div>
    </Slide>,

    // Slide 3 — The Problems
    <ListSlide
      title="The Problems"
      items={[
        { text: 'No directory — impossible hard to find them', type: 'cross' },
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
          text: 'No support for the profession at a social services level: Health insurance, legal services, mental health, security, financial stability, etc. are all a patchwork of approaches',
          type: 'cross',
        },
      ]}
    />,

    // Slide 3B — Result with Bold Typography
    <Slide background="bg-atlas-lime">
      <div className="relative h-full overflow-hidden">
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
            The frontier of journalism is invisible, unverifiable, and unsupported.
          </p>
        </motion.div>
      </div>
    </Slide>,

    // Slide 4 — Why Now
    <Slide background="bg-white">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ y: -30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-atlas-black mb-8">
            Why We're Acting Now
          </h2>
          <div className="space-y-8">
            <h3 className="text-2xl md:text-3xl font-display font-bold text-atlas-black">
              Five forces converging:
            </h3>
            <div className="space-y-4 text-lg md:text-xl text-atlas-dark-gray">
              <div className="flex items-start gap-4">
                <span className="text-3xl font-bold text-atlas-dark-green flex-shrink-0">1</span>
                <p>Legacy media shrinking while creator ecosystem expands</p>
              </div>
              <div className="flex items-start gap-4">
                <span className="text-3xl font-bold text-atlas-dark-green flex-shrink-0">2</span>
                <p>AI search/agents fundamentally changing discovery</p>
              </div>
              <div className="flex items-start gap-4">
                <span className="text-3xl font-bold text-atlas-dark-green flex-shrink-0">3</span>
                <p>Social platforms evolving to broadcast + DM models</p>
              </div>
              <div className="flex items-start gap-4">
                <span className="text-3xl font-bold text-atlas-dark-green flex-shrink-0">4</span>
                <p>Trust shifting from institutions to individuals</p>
              </div>
              <div className="flex items-start gap-4">
                <span className="text-3xl font-bold text-atlas-dark-green flex-shrink-0">5</span>
                <p>Renewed investments in local information ecosystems</p>
              </div>
            </div>
            <p className="text-lg md:text-xl text-atlas-dark-gray pt-4">
              <span className="font-bold text-atlas-black">Plus:</span> Creators like Carlos Eduardo Espina, Amber Sherman and Marisa Kabas emerging from
              diverse backgrounds — trained journalists, educators, storytellers, curators — with no
              shared infrastructure connecting them to communities and funders.
            </p>
          </div>
        </motion.div>
      </div>
    </Slide>,

    // Slide 4B — Bold Emphasis with Visual Interest
    <Slide background="bg-white">
      <div className="relative h-full overflow-hidden">
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="relative z-10 h-full flex items-center justify-center px-20"
        >
          <p className="text-5xl md:text-6xl lg:text-7xl font-display font-black text-atlas-black leading-tight text-center max-w-4xl">
            What we're building at The&nbsp;Atlas
          </p>
        </motion.div>
      </div>
    </Slide>,

    // Slide 4C — Atlas as Connective Tissue (Recent Work)
    <Slide background="bg-white">
      <div className="relative h-full overflow-hidden">
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
              We start, by listening to those doing the work, and making connections …
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
            'CREATOR Advisory board: Recruitment underway',
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
              <span className="text-atlas-dark-green font-bold text-xl flex-shrink-0">✓</span>
              <span className="text-atlas-dark-gray">{item}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </Slide>,

    // Slide 7 — Why Infrastructure Matters
    <TwoColumnSlide
      title="What we mean when we say Infrastructure …"
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
            We ARE
          </h3>
          <div className="space-y-3 text-lg md:text-xl">
            {[
              'Making journalism-minded creators visible and verifiable',
              'Establishing credibility and trust signals',
              'Enabling fair partnerships and portability',
              'Strengthening local information ecosystems',
              'Making responsible funding possible',
              'Fostering interoperability across platforms',
            ].map((item, i) => (
              <div key={i} className="flex items-start gap-3">
                <span className="text-2xl text-atlas-dark-green font-bold flex-shrink-0">✓</span>
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
                  <span className="text-atlas-dark-green flex-shrink-0 text-2xl">•</span>
                  <span>
                    <strong className="text-atlas-black">Chicago</strong> — National model for
                    integrating creators into civic information ecosystems
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-atlas-dark-green flex-shrink-0 text-2xl">•</span>
                  <span>
                    <strong className="text-atlas-black">Washington, DC</strong> — Bootstrap with our
                    existing network and connections
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-atlas-dark-green flex-shrink-0 text-2xl">•</span>
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
          The question we're exploring:
        </p>
        <p className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-atlas-lime leading-tight max-w-4xl mx-auto">
          Where can a functional layer of existing creator journalism be mapped, verified, and
          integrated to strengthen local communities?
        </p>
      </motion.div>
    </Slide>,

    // Slide 9 — The Value We Unlock
    <Slide background="bg-white">
      <div className="relative w-full h-full flex items-center">
        <div className="relative z-10 w-full px-12 py-8 max-w-5xl mx-auto">
          <div className="space-y-8">
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
                <span className="text-atlas-dark-green flex-shrink-0">•</span>
                <span>Platform API access and licensing</span>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-atlas-dark-green flex-shrink-0">•</span>
                <span>Partnership intermediation services</span>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-atlas-dark-green flex-shrink-0">•</span>
                <span>PR distribution and marketplace fees</span>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-atlas-dark-green flex-shrink-0">•</span>
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
              <span className="text-3xl font-bold text-atlas-dark-green flex-shrink-0">✓</span>
              <div>
                <p className="font-bold text-atlas-black">First-mover advantage</p>
                <p className="text-atlas-dark-gray">
                  We're building the infrastructure no one else is and started this work almost
                  three years ago with Project C.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <span className="text-3xl font-bold text-atlas-dark-green flex-shrink-0">✓</span>
              <div>
                <p className="font-bold text-atlas-black">Deep credibility</p>
                <p className="text-atlas-dark-gray">
                  Project C community, Top 50 list, collective connections in journalism, academia
                  and creator worlds
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <span className="text-3xl font-bold text-atlas-dark-green flex-shrink-0">✓</span>
              <div>
                <p className="font-bold text-atlas-black">Proven operators</p>
                <p className="text-atlas-dark-gray">
                  Each of us has 20+ years in journalism innovation, audience strategy, platforms and entrepreneurialism
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <span className="text-3xl font-bold text-atlas-dark-green flex-shrink-0">✓</span>
              <div>
                <p className="font-bold text-atlas-black">Early traction</p>
                <p className="text-atlas-dark-gray">Active partnerships generating revenue</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <span className="text-3xl font-bold text-atlas-dark-green flex-shrink-0">✓</span>
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
              <span className="text-3xl font-bold text-atlas-dark-green flex-shrink-0">✓</span>
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
