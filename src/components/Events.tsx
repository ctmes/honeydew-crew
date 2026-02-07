import { motion } from 'framer-motion';
import { Calendar, MapPin, Users } from 'lucide-react';

interface Event {
  id: string;
  title: string;
  date: string;
  location: string;
  attendees: string;
  image: string;
  status: 'upcoming' | 'completed';
}

const Events = () => {
  const events: Event[] = [
    {
      id: '1',
      title: 'K-Pop Festival 2024',
      date: 'March 15, 2024',
      location: 'LA Convention Center',
      attendees: '500+',
      image: 'https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?w=800&q=80',
      status: 'upcoming',
    },
    {
      id: '2',
      title: 'Dance Workshop Series',
      date: 'February 28, 2024',
      location: 'PULSE Studio',
      attendees: '50',
      image: 'https://images.unsplash.com/photo-1504609773096-104ff2c73ba4?w=800&q=80',
      status: 'upcoming',
    },
    {
      id: '3',
      title: 'New Year Showcase',
      date: 'January 1, 2024',
      location: 'The Grand Theatre',
      attendees: '300+',
      image: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=800&q=80',
      status: 'completed',
    },
    {
      id: '4',
      title: 'Holiday Special Performance',
      date: 'December 20, 2023',
      location: 'Downtown Square',
      attendees: '1000+',
      image: 'https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=800&q=80',
      status: 'completed',
    },
  ];

  return (
    <section id="events" className="relative bg-[#1a1a1a] py-32 px-6">
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
            Events & <span className="text-[#ffe600]">Shows</span>
          </h2>
          <p className="text-lg text-[#e0e0e0] max-w-2xl mx-auto">
            Join us at our upcoming performances and workshops
          </p>
        </motion.div>

        <div className="space-y-6">
          {events.map((event, index) => (
            <motion.div
              key={event.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group relative"
            >
              <div className="grid md:grid-cols-[300px,1fr] gap-6 bg-[#0f0f0f] rounded-xl overflow-hidden hover:shadow-2xl transition-all duration-300 hover:translate-y-[-4px]">
                {/* Image */}
                <div className="relative aspect-[4/3] md:aspect-auto overflow-hidden">
                  <img
                    src={event.image}
                    alt={event.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent to-[#0f0f0f]/50" />
                  
                  {/* Status Badge */}
                  <div className="absolute top-4 left-4">
                    <span
                      className={`px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider ${
                        event.status === 'upcoming'
                          ? 'bg-[#b300ff] text-white neon-glow-purple'
                          : 'bg-white/10 text-[#e0e0e0] backdrop-blur-sm'
                      }`}
                    >
                      {event.status}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-8 flex flex-col justify-center">
                  <h3 className="text-3xl font-bold text-white mb-4 group-hover:text-[#9dff00] transition-colors duration-200">
                    {event.title}
                  </h3>
                  
                  <div className="space-y-3 text-[#e0e0e0]">
                    <div className="flex items-center gap-3">
                      <Calendar className="w-5 h-5 text-[#9dff00]" />
                      <span>{event.date}</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <MapPin className="w-5 h-5 text-[#b300ff]" />
                      <span>{event.location}</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Users className="w-5 h-5 text-[#ffe600]" />
                      <span>{event.attendees} attendees</span>
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

export default Events;
