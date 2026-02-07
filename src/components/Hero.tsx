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
      className="relative w-full h-screen flex items-center justify-center overflow-hidden bg-black"
    >
      {/* YouTube Video Background */}
      <div className="absolute inset-0 w-full h-full">
        <iframe
          className="absolute top-1/2 left-1/2 w-[177.77vh] h-[100vh] min-w-[100vw] min-h-[56.25vw] -translate-x-1/2 -translate-y-1/2"
          src={`https://www.youtube.com/embed/T50IDOAlevg?autoplay=${prefersReducedMotion ? '0' : '1'}&mute=1&loop=1&playlist=T50IDOAlevg&controls=0&showinfo=0&rel=0&modestbranding=1&iv_load_policy=3&playsinline=1`}
          title="Hero Video - Background performance showcase"
          allow="autoplay; encrypted-media"
          allowFullScreen
          tabIndex={-1}
        />
      </div>
    </section>
  );
};

export default Hero;
