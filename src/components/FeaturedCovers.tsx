import { useState } from 'react';
import { motion } from 'framer-motion';
import { Play } from 'lucide-react';

interface CoverVideo {
  id: string;
  title: string;
  artist: string;
  thumbnail: string;
  videoUrl: string;
}

const FeaturedCovers = () => {
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  const covers: CoverVideo[] = [
    {
      id: '1',
      title: 'Dynamite',
      artist: 'BTS',
      thumbnail: 'https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=800&q=80',
      videoUrl: '#',
    },
    {
      id: '2',
      title: 'How You Like That',
      artist: 'BLACKPINK',
      thumbnail: 'https://images.unsplash.com/photo-1524368535928-5b5e00ddc76b?w=800&q=80',
      videoUrl: '#',
    },
    {
      id: '3',
      title: 'Kick It',
      artist: 'NCT 127',
      thumbnail: 'https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?w=800&q=80',
      videoUrl: '#',
    },
    {
      id: '4',
      title: 'God\'s Menu',
      artist: 'Stray Kids',
      thumbnail: 'https://images.unsplash.com/photo-1506157786151-b8491531f063?w=800&q=80',
      videoUrl: '#',
    },
    {
      id: '5',
      title: 'Next Level',
      artist: 'aespa',
      thumbnail: 'https://images.unsplash.com/photo-1445510861639-5651173bc5d5?w=800&q=80',
      videoUrl: '#',
    },
    {
      id: '6',
      title: 'Thunderous',
      artist: 'Stray Kids',
      thumbnail: 'https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=800&q=80',
      videoUrl: '#',
    },
  ];

  return (
    <section id="covers" className="relative bg-[#0f0f0f] py-32 px-6">
      <div className="noise-texture absolute inset-0" />
      
      <div className="relative z-10 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-7xl font-extrabold text-white mb-4 tracking-tight uppercase">
            Featured <span className="text-[#b300ff]">Covers</span>
          </h2>
          <p className="text-lg text-[#e0e0e0] max-w-2xl mx-auto">
            Watch our latest performances and experience the energy
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {covers.map((cover, index) => (
            <motion.div
              key={cover.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group relative aspect-video rounded-xl overflow-hidden cursor-pointer"
              onMouseEnter={() => setHoveredId(cover.id)}
              onMouseLeave={() => setHoveredId(null)}
            >
              {/* Thumbnail */}
              <img
                src={cover.thumbnail}
                alt={`${cover.title} by ${cover.artist}`}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />

              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />

              {/* Hover Overlay */}
              <div
                className={`absolute inset-0 bg-black/60 transition-opacity duration-300 ${
                  hoveredId === cover.id ? 'opacity-100' : 'opacity-0'
                }`}
              />

              {/* Play Button */}
              <div
                className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 transition-all duration-300 ${
                  hoveredId === cover.id ? 'scale-100 opacity-100' : 'scale-75 opacity-0'
                }`}
              >
                <motion.div
                  animate={hoveredId === cover.id ? { scale: [1, 1.1, 1] } : {}}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="w-20 h-20 rounded-full border-4 border-[#9dff00] flex items-center justify-center neon-glow-green bg-black/20"
                >
                  <Play className="w-8 h-8 text-white fill-white ml-1" />
                </motion.div>
              </div>

              {/* Info */}
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <h3 className="text-white font-bold text-xl mb-1">{cover.title}</h3>
                <p className="text-[#e0e0e0] text-sm">{cover.artist}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedCovers;
