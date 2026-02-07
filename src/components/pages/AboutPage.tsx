import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

const AboutPage = () => {
  return (
    <div className="w-full min-h-screen bg-[#0f0f0f]">
      <Navigation />

      <main className="pt-24 pb-16">
        {/* Hero Section */}
        <section className="px-4 sm:px-6 md:px-8 lg:px-16 mb-0">
          <div className="max-w-7xl mx-auto">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-extrabold text-white uppercase tracking-tight mb-2 sm:mb-3 md:mb-4">
              ABOUT
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-[#e0e0e0] max-w-2xl">
              The story behind Honeydew Crew
            </p>
          </div>
        </section>

        {/* Grid Layout */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-0 mt-8 sm:mt-10 md:mt-12">
          {/* Image Block */}
          <div className="relative aspect-[4/3] sm:aspect-square md:aspect-auto md:min-h-[600px] bg-[#1a1a1a] border-b md:border-r border-[#9dff00]/10">
            <img
              src="https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?w=800&q=80"
              alt="Dance crew performance"
              className="absolute inset-0 w-full h-full object-cover"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
          </div>

          {/* Mission Block */}
          <div className="bg-[#0f0f0f] border-b border-[#9dff00]/10 p-6 sm:p-8 md:p-12 lg:p-16 flex flex-col justify-center">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white uppercase tracking-tight mb-4 sm:mb-5 md:mb-6">
              OUR MISSION
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-[#e0e0e0] leading-relaxed mb-5 sm:mb-6 md:mb-8">
              We are a passionate dance collective dedicated to bringing the electrifying energy of K-pop and J-pop to life through precision choreography and explosive performances.
            </p>
            <p className="text-sm sm:text-base md:text-lg text-[#e0e0e0] leading-relaxed">
              Founded in 2020, Honeydew Crew has grown from a small group of dance enthusiasts into a renowned collective that has performed at major events and festivals across the region.
            </p>
          </div>

          {/* Stats Block */}
          <div className="bg-[#9dff00] p-6 sm:p-8 md:p-12 lg:p-16 flex flex-col justify-center border-b md:border-b-0 md:border-r border-[#9dff00]/10">
            <div className="grid grid-cols-2 gap-4 sm:gap-6 md:gap-8">
              <div>
                <div className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-black mb-1 sm:mb-2">50+</div>
                <div className="text-base sm:text-lg md:text-xl font-bold text-black/80 uppercase tracking-wider">Covers</div>
              </div>
              <div>
                <div className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-black mb-1 sm:mb-2">4</div>
                <div className="text-base sm:text-lg md:text-xl font-bold text-black/80 uppercase tracking-wider">Members</div>
              </div>
              <div>
                <div className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-black mb-1 sm:mb-2">30+</div>
                <div className="text-base sm:text-lg md:text-xl font-bold text-black/80 uppercase tracking-wider">Events</div>
              </div>
              <div>
                <div className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-black mb-1 sm:mb-2">1000+</div>
                <div className="text-base sm:text-lg md:text-xl font-bold text-black/80 uppercase tracking-wider">Followers</div>
              </div>
            </div>
          </div>

          {/* Values Block */}
          <div className="bg-[#1a1a1a] p-6 sm:p-8 md:p-12 lg:p-16 flex flex-col justify-center">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white uppercase tracking-tight mb-5 sm:mb-6 md:mb-8">
              OUR VALUES
            </h2>
            <div className="space-y-4 sm:space-y-5 md:space-y-6">
              <div>
                <h3 className="text-lg sm:text-xl font-extrabold text-[#9dff00] uppercase tracking-tight mb-1 sm:mb-2">
                  PRECISION
                </h3>
                <p className="text-sm sm:text-base text-[#e0e0e0]">
                  Every move matters. We dedicate countless hours to perfecting every detail.
                </p>
              </div>
              <div>
                <h3 className="text-lg sm:text-xl font-extrabold text-[#9dff00] uppercase tracking-tight mb-1 sm:mb-2">
                  CREATIVITY
                </h3>
                <p className="text-sm sm:text-base text-[#e0e0e0]">
                  We bring our unique style to every performance while respecting the original artistry.
                </p>
              </div>
              <div>
                <h3 className="text-lg sm:text-xl font-extrabold text-[#9dff00] uppercase tracking-tight mb-1 sm:mb-2">
                  COMMUNITY
                </h3>
                <p className="text-sm sm:text-base text-[#e0e0e0]">
                  Dance brings people together. We're building a supportive community of passionate performers.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Practice Schedule */}
        <section className="px-4 sm:px-6 md:px-8 lg:px-16 py-10 sm:py-12 md:py-16 bg-[#0f0f0f] border-t border-[#9dff00]/10">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white uppercase tracking-tight mb-5 sm:mb-6 md:mb-8">
              PRACTICE SCHEDULE
            </h2>
            <div className="grid grid-cols-1 gap-0 max-w-2xl">
              <div className="flex justify-between items-center py-3 sm:py-4 border-b border-[#9dff00]/20">
                <span className="text-base sm:text-lg md:text-xl font-bold text-[#9dff00] uppercase">MON-FRI</span>
                <span className="text-base sm:text-lg md:text-xl text-[#e0e0e0]">7:00 PM - 9:00 PM</span>
              </div>
              <div className="flex justify-between items-center py-3 sm:py-4 border-b border-[#9dff00]/20">
                <span className="text-base sm:text-lg md:text-xl font-bold text-[#9dff00] uppercase">WEEKENDS</span>
                <span className="text-base sm:text-lg md:text-xl text-[#e0e0e0]">2:00 PM - 6:00 PM</span>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default AboutPage;
