import SlidesDeck from './components/SlidesDeck';
import TitleSlide from './slides/TitleSlide';
import ContentSlide from './slides/ContentSlide';
import StatsSlide from './slides/StatsSlide';
import QuoteSlide from './slides/QuoteSlide';
import TwoColumnSlide from './slides/TwoColumnSlide';
import ImageSlide from './slides/ImageSlide';

function App() {
  const slides = [
    // Title Slide
    <TitleSlide
      title="The Independent Journalism Atlas"
      subtitle="Mapping the future of journalism, one story at a time"
      author="Presented by Atlas Deck"
    />,

    // Mission Statement
    <ContentSlide
      title="Our Mission"
      content="The Independent Journalism Atlas is dedicated to illuminating critical stories that shape our world. We believe in the power of independent journalism to hold the powerful accountable, give voice to the marginalized, and inform engaged citizens."
      align="center"
    />,

    // Stats About Impact
    <StatsSlide
      title="Our Impact in 2025"
      stats={[
        {
          value: '500+',
          label: 'Stories Published',
          description: 'Investigative pieces and features',
        },
        {
          value: '2.5M',
          label: 'Readers Reached',
          description: 'Across 120 countries',
        },
        {
          value: '15',
          label: 'Awards Won',
          description: 'Including Pulitzer nomination',
        },
      ]}
    />,

    // What We Cover
    <TwoColumnSlide
      title="What We Cover"
      leftContent={
        <div className="space-y-6">
          <div className="space-y-2">
            <h3 className="text-2xl font-display font-bold text-atlas-700">Climate Justice</h3>
            <p className="text-lg text-gray-700">
              Investigating environmental crimes and highlighting solutions from frontline
              communities.
            </p>
          </div>
          <div className="space-y-2">
            <h3 className="text-2xl font-display font-bold text-atlas-700">
              Corporate Accountability
            </h3>
            <p className="text-lg text-gray-700">
              Exposing corruption and following the money trail in politics and business.
            </p>
          </div>
          <div className="space-y-2">
            <h3 className="text-2xl font-display font-bold text-atlas-700">Human Rights</h3>
            <p className="text-lg text-gray-700">
              Documenting abuses and amplifying voices fighting for justice worldwide.
            </p>
          </div>
        </div>
      }
      rightContent={
        <div className="space-y-6">
          <div className="space-y-2">
            <h3 className="text-2xl font-display font-bold text-atlas-700">Tech & Privacy</h3>
            <p className="text-lg text-gray-700">
              Investigating surveillance capitalism and digital rights in the modern age.
            </p>
          </div>
          <div className="space-y-2">
            <h3 className="text-2xl font-display font-bold text-atlas-700">Global Health</h3>
            <p className="text-lg text-gray-700">
              Reporting on healthcare inequity and pharmaceutical industry practices.
            </p>
          </div>
          <div className="space-y-2">
            <h3 className="text-2xl font-display font-bold text-atlas-700">Media Literacy</h3>
            <p className="text-lg text-gray-700">
              Combating misinformation and teaching critical thinking in the digital age.
            </p>
          </div>
        </div>
      }
    />,

    // Testimonial
    <QuoteSlide
      quote="The Independent Journalism Atlas doesn't just report the news—they reveal the systems that shape our reality. Their work is essential."
      author="Dr. Sarah Martinez"
      role="Professor of Journalism, Columbia University"
    />,

    // Visual Impact - You can replace this URL with actual images
    <ImageSlide
      imageUrl="https://images.unsplash.com/photo-1504711434969-e33886168f5c?w=1920&q=80"
      title="Stories That Matter"
      caption="From local communities to global movements, we bring you the stories that traditional media overlooks."
      overlay="dark"
    />,

    // How We Work
    <ContentSlide
      title="How We Work"
      content={
        <div className="space-y-6">
          <div className="flex items-start gap-4">
            <div className="text-4xl font-bold text-atlas-600 flex-shrink-0">01</div>
            <div>
              <h3 className="text-2xl font-semibold mb-2">Deep Research</h3>
              <p className="text-gray-600">
                Months of investigation, fact-checking, and verification before publication.
              </p>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <div className="text-4xl font-bold text-atlas-600 flex-shrink-0">02</div>
            <div>
              <h3 className="text-2xl font-semibold mb-2">Community Partnership</h3>
              <p className="text-gray-600">
                Working directly with affected communities to tell their stories authentically.
              </p>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <div className="text-4xl font-bold text-atlas-600 flex-shrink-0">03</div>
            <div>
              <h3 className="text-2xl font-semibold mb-2">Impact-Driven</h3>
              <p className="text-gray-600">
                Every story is designed to create real change and hold power accountable.
              </p>
            </div>
          </div>
        </div>
      }
    />,

    // Call to Action
    <ContentSlide
      title="Join the Movement"
      content={
        <div className="space-y-8">
          <p className="text-2xl">
            Independent journalism needs independent support. Here's how you can help:
          </p>
          <div className="grid gap-6">
            <div className="bg-atlas-50 p-6 rounded-xl">
              <h3 className="text-2xl font-bold text-atlas-900 mb-2">Subscribe</h3>
              <p className="text-gray-700">
                Get our in-depth investigations delivered to your inbox.
              </p>
            </div>
            <div className="bg-atlas-50 p-6 rounded-xl">
              <h3 className="text-2xl font-bold text-atlas-900 mb-2">Support</h3>
              <p className="text-gray-700">
                Become a member and fund the stories that matter most.
              </p>
            </div>
            <div className="bg-atlas-50 p-6 rounded-xl">
              <h3 className="text-2xl font-bold text-atlas-900 mb-2">Share</h3>
              <p className="text-gray-700">
                Amplify our work by sharing stories with your network.
              </p>
            </div>
          </div>
        </div>
      }
    />,

    // Closing Slide
    <TitleSlide
      title="Thank You"
      subtitle="Together, we can build a more informed and just world"
      author="atlas-deck.org | @AtlasJournalism"
    />,
  ];

  return <SlidesDeck slides={slides} />;
}

export default App;
