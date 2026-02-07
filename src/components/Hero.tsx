import { useEffect, useState } from 'react';

const Hero = () => {
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setPrefersReducedMotion(mediaQuery.matches);

    const handleChange = (e: MediaQueryListEvent) => {
      setPrefersReducedMotion(e.matches);
    };

    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  return (
    <section
      id="hero"
      className="relative w-full h-[100svh] flex items-center justify-center overflow-hidden bg-black"
    >
      {/* Self-hosted Video Background */}
      <div className="absolute inset-0 w-full h-full">
        <video
          className="absolute inset-0 w-full h-full object-cover pointer-events-none"
          autoPlay={!prefersReducedMotion}
          muted
          loop
          playsInline
          aria-label="Hero Video - Background performance showcase"
        >
          <source src="/hero-video.webm" type="video/webm" />
          <source src="/hero-video.mp4" type="video/mp4" />
        </video>
      </div>
    </section>
  );
};

export default Hero;
