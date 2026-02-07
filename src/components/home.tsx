import Navigation from './Navigation';
import Hero from './Hero';
import HeroText from './HeroText';
import BentoLayout from './BentoLayout';
import Footer from './Footer';

function Home() {
  return (
    <div className="w-full min-h-screen bg-[#0f0f0f]">
      <Navigation />
      <Hero />
      <HeroText />
      <BentoLayout />
      <Footer />
    </div>
  );
}

export default Home;
