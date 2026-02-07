import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const HeroText = () => {
  const scrollToCovers = () => {
    const element = document.getElementById("covers");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="hero-text"
      className="relative w-full py-16 sm:py-20 md:py-32 lg:py-40 flex items-center justify-center bg-[#0f0f0f] border-b border-[#9dff00]/20"
    >
      {/* Noise Texture */}
      <div className="absolute inset-0 z-0 noise-texture" />

      {/* Content */}
      <div className="relative z-10 text-center px-4 sm:px-6 max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <div className="text-xs sm:text-sm tracking-[0.12em] sm:tracking-[0.15em] uppercase text-[#e0e0e0] mb-3 sm:mb-4">
            Dance Collective
          </div>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-white mb-4 sm:mb-6 tracking-tight"
        >
          HONEYDEW
          <br />
          <span className="text-[#9dff00] neon-glow-green">CREW</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-base sm:text-lg md:text-xl lg:text-2xl text-[#e0e0e0] mb-8 sm:mb-10 md:mb-12 max-w-2xl mx-auto px-2"
        >
          High-energy K-pop & J-pop dance covers that bring the stage to life
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.45 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <Button
            onClick={scrollToCovers}
            size="lg"
            className="bg-[#9dff00] hover:bg-[#9dff00]/90 active:bg-[#8aef00] text-black px-6 sm:px-8 py-4 sm:py-5 md:py-6 text-base sm:text-lg rounded-lg font-semibold uppercase tracking-wider transition-all duration-200 hover:scale-105 neon-glow-green min-h-[48px] touch-manipulation"
          >
            Watch Our Covers
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroText;
