import { motion } from "framer-motion";
import { Play } from "lucide-react";
import { useEffect, useState } from "react";

const BentoLayout = () => {
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

  const scrollToCovers = () => {
    const element = document.getElementById("covers");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative w-full min-h-screen bg-[#0f0f0f]">
      {/* Noise Texture */}
      <div className="absolute inset-0 z-0 noise-texture" />

      <div className="relative z-10 w-full">
        {/* Bento Grid - 4 boxes max */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-0 auto-rows-auto md:auto-rows-[50vh]">

          {/* Featured Video - Large */}
          <motion.button
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: prefersReducedMotion ? 0 : 0.6, delay: prefersReducedMotion ? 0 : 0.1 }}
            viewport={{ once: true }}
            onClick={scrollToCovers}
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                scrollToCovers();
              }
            }}
            aria-label="View latest covers - navigates to covers section"
            className="bg-[#1a1a1a] md:border-r border-b border-[#9dff00]/10 overflow-hidden group hover:bg-[#1f1f1f] active:bg-[#252525] transition-all duration-300 cursor-pointer relative focus:outline-2 focus:outline-[#9dff00] focus:outline-offset-0 text-left min-h-[50vh] md:min-h-0"
          >
            <div className="absolute inset-0 bg-[url('/covers.jpg')] bg-cover bg-center">
              <div className="absolute inset-0 bg-black/70 group-hover:bg-black/60 transition-all duration-300" />
            </div>
            <div className="relative h-full p-6 sm:p-8 md:p-12 flex flex-col justify-center items-center text-center">
              <div className="flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 mb-4 sm:mb-6 md:mb-8 border border-[#9dff00]" aria-hidden="true">
                <Play className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 text-[#9dff00] fill-[#9dff00]" />
              </div>
              <h3 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-white uppercase tracking-tight">
                LATEST<br />COVERS
              </h3>
            </div>
          </motion.button>

          {/* Members Count */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: prefersReducedMotion ? 0 : 0.6, delay: prefersReducedMotion ? 0 : 0.2 }}
            viewport={{ once: true }}
            className="bg-[#0f0f0f] border-b border-[#9dff00]/10 p-6 sm:p-8 md:p-12 py-12 sm:py-14 md:py-16 flex flex-col justify-center items-center text-center hover:bg-[#1a1a1a] transition-all duration-300"
            role="status"
            aria-label="Dance crew has 12 or more members"
          >
            <div className="text-6xl sm:text-7xl md:text-8xl font-extrabold text-[#9dff00] mb-2 sm:mb-3 md:mb-4" aria-hidden="false">4</div>
            <div className="text-lg sm:text-xl md:text-2xl font-bold text-white uppercase tracking-[0.15em] sm:tracking-[0.2em]">MEMBERS</div>
          </motion.div>

          {/* About */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: prefersReducedMotion ? 0 : 0.6, delay: prefersReducedMotion ? 0 : 0.3 }}
            viewport={{ once: true }}
            className="bg-[#0f0f0f] md:border-r border-b md:border-b-0 border-[#9dff00]/10 p-6 sm:p-8 md:p-12 py-10 sm:py-12 md:py-16 flex flex-col justify-center hover:bg-[#1a1a1a] transition-all duration-300"
            role="region"
            aria-label="About us section"
          >
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white mb-3 sm:mb-4 md:mb-6 uppercase tracking-tight">
              WHO WE ARE
            </h3>
            <p className="text-base sm:text-lg md:text-xl text-[#e0e0e0] leading-relaxed">
              A passionate dance collective bringing the electrifying energy of K-pop and J-pop to life.
            </p>
          </motion.div>

          {/* Join Us CTA */}
          <motion.button
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: prefersReducedMotion ? 0 : 0.6, delay: prefersReducedMotion ? 0 : 0.4 }}
            viewport={{ once: true }}
            onClick={() => {
              const element = document.getElementById('hero');
              if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
              }
            }}
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                const element = document.getElementById('hero');
                if (element) {
                  element.scrollIntoView({ behavior: 'smooth' });
                }
              }
            }}
            aria-label="Join our crew - auditions now open"
            className="bg-[#9dff00] p-6 sm:p-8 md:p-12 py-10 sm:py-12 md:py-16 flex flex-col justify-center items-center text-center hover:bg-[#8aef00] active:bg-[#7de000] transition-all duration-300 cursor-pointer focus:outline-2 focus:outline-[#0f0f0f] focus:outline-offset-0"
          >
            <h3 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-black mb-2 sm:mb-3 md:mb-4 uppercase tracking-tight">
              JOIN THE<br />CREW
            </h3>
            <p className="text-lg sm:text-xl md:text-2xl text-black/80 font-bold uppercase tracking-wider">
              AUDITIONS OPEN
            </p>
          </motion.button>

        </div>
      </div>
    </section>
  );
};

export default BentoLayout;
