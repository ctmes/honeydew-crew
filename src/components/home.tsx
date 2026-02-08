import Navigation from './Navigation';
import Hero from './Hero';
import BentoLayout from './BentoLayout';
import Footer from './Footer';

function Home() {
  return (
    <div className="w-full min-h-screen bg-background">
      <Navigation />
      <Hero />
      <BentoLayout />
      <Footer />
    </div>
  );
}

export default Home;
