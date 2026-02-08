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
    <section id="events" className="relative bg-background py-32 px-6">
      <div className="relative z-10 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-20 border-b border-gray-200 pb-10"
        >
          <h2 className="text-6xl md:text-8xl font-black text-foreground mb-4 tracking-tighter uppercase leading-none">
            Events & <span className="text-primary">Shows</span>
          </h2>
          <p className="text-xl text-muted-foreground font-medium max-w-2xl">
            Where to find us next.
          </p>
        </motion.div>

        <div className="space-y-1">
          {events.map((event, index) => (
            <motion.div
              key={event.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="group relative"
            >
              <div className="grid md:grid-cols-[400px,1fr] bg-card overflow-hidden group-hover:bg-secondary transition-colors duration-300 cursor-pointer">
                {/* Image */}
                <div className="relative aspect-[16/9] md:aspect-auto overflow-hidden">
                  <img
                    src={event.image}
                    alt={event.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />

                  {/* Status Badge */}
                  <div className="absolute top-4 left-4">
                    <span
                      className={`px-4 py-1 text-sm font-bold uppercase tracking-widest ${event.status === 'upcoming'
                          ? 'bg-primary text-black'
                          : 'bg-white/80 text-black backdrop-blur-sm'
                        }`}
                    >
                      {event.status}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-8 md:p-12 flex flex-col justify-center relative">
                  <h3 className="text-3xl md:text-4xl font-black text-foreground mb-6 uppercase tracking-tight group-hover:text-primary transition-colors duration-300">
                    {event.title}
                  </h3>

                  <div className="space-y-4 text-muted-foreground font-medium text-lg">
                    <div className="flex items-center gap-4">
                      <Calendar className="w-5 h-5 text-foreground" />
                      <span className="group-hover:text-foreground transition-colors">{event.date}</span>
                    </div>
                    <div className="flex items-center gap-4">
                      <MapPin className="w-5 h-5 text-foreground" />
                      <span className="group-hover:text-foreground transition-colors">{event.location}</span>
                    </div>
                    <div className="flex items-center gap-4">
                      <Users className="w-5 h-5 text-foreground" />
                      <span className="group-hover:text-foreground transition-colors">{event.attendees} attendees</span>
                    </div>
                  </div>

                  {/* Arrow Indicator */}
                  <div className="hidden md:block absolute bottom-12 right-12 opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">
                    <div className="w-12 h-12 rounded-full border border-gray-300 flex items-center justify-center">
                      <svg className="w-6 h-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
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
