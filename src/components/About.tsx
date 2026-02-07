import { motion } from 'framer-motion';

const About = () => {
  return (
    <section id="about" className="relative bg-[#0f0f0f] py-32 px-6">
      <div className="noise-texture absolute inset-0" />
      
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
            <div className="aspect-[4/5] rounded-xl overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1504609773096-104ff2c73ba4?w=800&q=80"
                alt="Dance Group"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#9dff00]/20 to-transparent" />
            </div>
            
            {/* Accent Element */}
            <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-[#9dff00]/20 rounded-xl blur-3xl" />
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-5xl md:text-7xl font-extrabold text-white mb-6 tracking-tight uppercase">
              About <span className="text-[#b300ff]">Us</span>
            </h2>
            
            <div className="space-y-6 text-[#e0e0e0] text-lg leading-relaxed">
              <p>
                <span className="text-white font-semibold">Honeydew Crew</span> is a high-energy dance collective 
                specializing in K-pop and J-pop choreography. Founded in 2020, we've grown from a small 
                group of passionate dancers to a recognized name in the dance cover community.
              </p>
              
              <p>
                Our mission is to bring the electrifying energy of K-pop and J-pop performances to audiences 
                worldwide, while fostering a community of talented dancers who share our passion for precision, 
                creativity, and stage presence.
              </p>
              
              <p>
                Inspired by legendary studios like <span className="text-[#9dff00] font-semibold">1MILLION Dance Studio</span>, 
                we combine technical excellence with bold artistic expression. Every performance is a celebration 
                of dance culture and the power of collective creativity.
              </p>

              <div className="grid grid-cols-3 gap-6 pt-8">
                <div className="text-center">
                  <div className="text-4xl font-bold text-[#9dff00] mb-2">50+</div>
                  <div className="text-sm text-[#e0e0e0] uppercase tracking-wider">Covers</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-[#ff006e] mb-2">8</div>
                  <div className="text-sm text-[#e0e0e0] uppercase tracking-wider">Members</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-[#ff006e] mb-2">100K+</div>
                  <div className="text-sm text-[#e0e0e0] uppercase tracking-wider">Views</div>
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
