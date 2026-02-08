import { motion } from "framer-motion";
import { Play, ArrowRight, Instagram } from "lucide-react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

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
    <section className="relative w-full bg-background text-foreground py-20">
      <div className="w-full">
        {/* Modern Studio Grid - Bold & Clean */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-0.5 bg-border border-y border-border">

          {/* Featured Video - Large Block */}
          <motion.button
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            onClick={scrollToCovers}
            className="group relative w-full h-[60vh] md:h-auto overflow-hidden bg-white text-left cursor-pointer border-r border-border"
            aria-label="View latest covers"
          >
            {/* Background Image with Scale Effect */}
            <div className="absolute inset-0 bg-[url('/covers.jpg')] bg-cover bg-center transition-transform duration-700 ease-out group-hover:scale-105 will-change-transform" />
            <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-500" />

            {/* Content with Overlay Gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent flex flex-col justify-end p-8 md:p-12">
              <div className="flex items-center gap-4 mb-4 transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 delay-100">
                <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center text-black">
                  <Play className="w-5 h-5 fill-current ml-1" />
                </div>
                <span className="text-white font-bold tracking-widest uppercase text-sm">Watch Now</span>
              </div>

              <h3 className="text-4xl md:text-6xl font-black text-white uppercase leading-[0.9] tracking-tighter shadow-xl">
                Latest<br />Covers
              </h3>
            </div>
          </motion.button>

          {/* Right Column Grid */}
          <div className="grid grid-rows-3 h-full gap-0.5">

            {/* Members Block */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="bg-card hover:bg-secondary transition-colors duration-300 p-8 md:p-12 flex flex-row items-center justify-between group overflow-hidden relative"
            >
              <div className="relative z-10">
                <div className="text-7xl font-black text-primary tracking-tighter leading-none group-hover:translate-x-2 transition-transform duration-300">4</div>
                <div className="text-xl font-bold uppercase tracking-wider mt-2 text-foreground">Core Members</div>
              </div>
              <Link to="/members" className="w-12 h-12 rounded-full border border-foreground/20 flex items-center justify-center group-hover:bg-foreground group-hover:text-background transition-all duration-300 transform group-hover:rotate-45">
                <ArrowRight className="w-5 h-5" />
              </Link>
            </motion.div>

            {/* About Block */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-card hover:bg-secondary transition-colors duration-300 p-8 md:p-12 flex flex-col justify-center relative overflow-hidden group"
            >
              <h3 className="text-3xl font-black text-foreground mb-4 uppercase tracking-tight group-hover:text-primary transition-colors duration-300">
                Who We Are
              </h3>
              <p className="text-muted-foreground text-lg leading-relaxed max-w-md group-hover:text-foreground transition-colors duration-300">
                Bringing the electrifying energy of K-pop & J-pop to the streets.
              </p>
              <ArrowRight className="absolute bottom-12 right-12 w-8 h-8 opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 text-primary" />
            </motion.div>

            {/* Join Us CTA - Solid Brand Block */}
            <motion.button
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
              onClick={() => {
                const element = document.getElementById('hero');
                if (element) {
                  element.scrollIntoView({ behavior: 'smooth' });
                }
              }}
              className="bg-primary hover:bg-white transition-colors duration-300 p-8 flex flex-col justify-center items-center text-center relative overflow-hidden group w-full text-black h-full"
            >
              <div className="relative z-10 transform transition-transform duration-500 group-hover:scale-105">
                <h3 className="text-5xl md:text-6xl font-black uppercase tracking-tighter leading-none mb-2">
                  Join Us
                </h3>
                <p className="text-xl font-bold uppercase tracking-widest border-b-2 border-black pb-1 inline-block">
                  Auditions Open
                </p>
              </div>
            </motion.button>

          </div>

        </div>
      </div>
    </section>
  );
};

export default BentoLayout;
