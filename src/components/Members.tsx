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
    <section id="members" className="relative bg-background py-32 px-6 overflow-hidden">

      <div className="relative z-10 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-20 border-b border-gray-200 pb-10"
        >
          <h2 className="text-6xl md:text-8xl font-black text-foreground mb-4 tracking-tighter uppercase leading-none">
            The <span className="text-primary">Crew</span>
          </h2>
          <p className="text-xl text-muted-foreground font-medium max-w-2xl">
            Meet the dancers behind the movement.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-0.5 bg-gray-200 border border-gray-200">
          {members.map((member, index) => (
            <motion.div
              key={member.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="group relative aspect-[3/4] overflow-hidden bg-white hover:z-10"
            >
              <div className="absolute inset-0 bg-gray-100">
                <img
                  src={member.photo}
                  alt={member.name}
                  className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110 group-hover:grayscale-0 grayscale"
                />
              </div>

              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                <h3 className="text-2xl font-black text-white uppercase tracking-tighter mb-1 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  {member.name}
                </h3>
                <p className="text-primary font-bold uppercase text-sm tracking-wider transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-75">
                  {member.role}
                </p>

                <div className="flex gap-4 mt-4 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-100">
                  {member.socials.instagram && (
                    <a href={member.socials.instagram} className="text-white hover:text-primary transition-colors">
                      <Instagram className="w-5 h-5" />
                    </a>
                  )}
                  {member.socials.twitter && (
                    <a href={member.socials.twitter} className="text-white hover:text-primary transition-colors">
                      <Twitter className="w-5 h-5" />
                    </a>
                  )}
                  {member.socials.youtube && (
                    <a href={member.socials.youtube} className="text-white hover:text-primary transition-colors">
                      <Youtube className="w-5 h-5" />
                    </a>
                  )}
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
