import { motion } from 'framer-motion';

const About = () => {
  return (
    <section id="about" className="relative bg-card py-32 px-6 overflow-hidden">

      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Media */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="aspect-[4/5] overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1504609773096-104ff2c73ba4?w=800&q=80"
                alt="Dance Group"
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
              />
            </div>

            {/* Accent Element - Sharp Block instead of Blur */}
            <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-primary z-[-1]" />
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-6xl md:text-8xl font-black text-foreground mb-8 tracking-tighter uppercase leading-none">
              About <span className="text-primary">Us</span>
            </h2>

            <div className="space-y-8 text-muted-foreground text-lg leading-relaxed font-medium">
              <p>
                <span className="text-foreground font-bold">Honeydew Crew</span> is a high-energy dance collective
                redefining K-pop and J-pop coverage.
              </p>

              <p>
                We don't just cover dances; we create performances. Our mission is to capture the raw energy of urban dance culture and bring it to the streets.
              </p>

              <p className="border-l-4 border-primary pl-6 py-2 text-foreground font-bold italic">
                "We don't need a stage to dance."
              </p>

              <div className="grid grid-cols-3 gap-8 pt-8 border-t border-border">
                <div className="text-left">
                  <div className="text-5xl font-black text-foreground mb-2 tracking-tighter">50+</div>
                  <div className="text-xs text-primary font-bold uppercase tracking-widest">Covers</div>
                </div>
                <div className="text-left">
                  <div className="text-5xl font-black text-foreground mb-2 tracking-tighter">8</div>
                  <div className="text-xs text-primary font-bold uppercase tracking-widest">Members</div>
                </div>
                <div className="text-left">
                  <div className="text-5xl font-black text-foreground mb-2 tracking-tighter">100K</div>
                  <div className="text-xs text-primary font-bold uppercase tracking-widest">Views</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
