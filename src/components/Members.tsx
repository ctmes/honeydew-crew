import { useState } from 'react';
import { motion } from 'framer-motion';
import { Instagram, Twitter, Youtube } from 'lucide-react';

interface Member {
  id: string;
  name: string;
  role: string;
  photo: string;
  socials: {
    instagram?: string;
    twitter?: string;
    youtube?: string;
  };
}

const Members = () => {
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  const members: Member[] = [
    {
      id: '1',
      name: 'YUKI',
      role: 'Main Dancer & Choreographer',
      photo: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=800&q=80',
      socials: {
        instagram: '#',
        twitter: '#',
        youtube: '#',
      },
    },
    {
      id: '2',
      name: 'JASMINE',
      role: 'Lead Dancer',
      photo: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=800&q=80',
      socials: {
        instagram: '#',
        twitter: '#',
      },
    },
    {
      id: '3',
      name: 'KAI',
      role: 'Visual & Dancer',
      photo: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&q=80',
      socials: {
        instagram: '#',
        youtube: '#',
      },
    },
    {
      id: '4',
      name: 'MIKO',
      role: 'Dancer & Video Editor',
      photo: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=800&q=80',
      socials: {
        instagram: '#',
        twitter: '#',
        youtube: '#',
      },
    },
    {
      id: '5',
      name: 'ALEX',
      role: 'Rapper & Dancer',
      photo: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=800&q=80',
      socials: {
        instagram: '#',
        twitter: '#',
      },
    },
    {
      id: '6',
      name: 'LILY',
      role: 'Dancer & Stylist',
      photo: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=800&q=80',
      socials: {
        instagram: '#',
        youtube: '#',
      },
    },
    {
      id: '7',
      name: 'RYO',
      role: 'Dancer',
      photo: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=800&q=80',
      socials: {
        instagram: '#',
        twitter: '#',
      },
    },
    {
      id: '8',
      name: 'SOFIA',
      role: 'Dancer & Social Media',
      photo: 'https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=800&q=80',
      socials: {
        instagram: '#',
        twitter: '#',
        youtube: '#',
      },
    },
  ];

  return (
    <section id="members" className="relative bg-[#1a1a1a] py-32 px-6">
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
            Our <span className="text-[#ffe600]">Team</span>
          </h2>
          <p className="text-lg text-[#e0e0e0] max-w-2xl mx-auto">
            Meet the talented dancers behind every performance
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {members.map((member, index) => (
            <motion.div
              key={member.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="relative group"
              onMouseEnter={() => setHoveredId(member.id)}
              onMouseLeave={() => setHoveredId(null)}
            >
              <div
                className={`relative aspect-square rounded-xl overflow-hidden cursor-pointer transition-all duration-300 ${
                  hoveredId === member.id ? 'shadow-2xl translate-y-[-8px]' : ''
                }`}
              >
                {/* Photo */}
                <img
                  src={member.photo}
                  alt={member.name}
                  className={`w-full h-full object-cover transition-all duration-500 ${
                    hoveredId === member.id ? 'grayscale-0' : 'grayscale'
                  }`}
                />

                {/* Info Overlay */}
                <div
                  className={`absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent transition-opacity duration-300 ${
                    hoveredId === member.id ? 'opacity-100' : 'opacity-0'
                  }`}
                >
                  <div className="absolute bottom-0 left-0 right-0 p-6 transform transition-transform duration-300">
                    <h3 className="text-white font-bold text-xl mb-1 tracking-wide">
                      {member.name}
                    </h3>
                    <p className="text-[#9dff00] text-sm mb-4 font-medium">
                      {member.role}
                    </p>

                    {/* Social Icons */}
                    <div className="flex gap-3">
                      {member.socials.instagram && (
                        <a
                          href={member.socials.instagram}
                          className="w-9 h-9 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center hover:bg-[#b300ff] transition-colors duration-200"
                        >
                          <Instagram className="w-4 h-4 text-white" />
                        </a>
                      )}
                      {member.socials.twitter && (
                        <a
                          href={member.socials.twitter}
                          className="w-9 h-9 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center hover:bg-[#b300ff] transition-colors duration-200"
                        >
                          <Twitter className="w-4 h-4 text-white" />
                        </a>
                      )}
                      {member.socials.youtube && (
                        <a
                          href={member.socials.youtube}
                          className="w-9 h-9 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center hover:bg-[#b300ff] transition-colors duration-200"
                        >
                          <Youtube className="w-4 h-4 text-white" />
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Members;
