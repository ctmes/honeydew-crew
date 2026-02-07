import { useState, useEffect } from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import EventGallery from '../EventGallery';

// Helper function to convert event title to folder name slug
const slugify = (text: string) => {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '');
};

// Type for event images
interface EventImageData {
  [eventSlug: string]: string[];
}

const EventsPage = () => {
  const [expandedEvents, setExpandedEvents] = useState<Set<number>>(new Set());
  const [eventImages, setEventImages] = useState<EventImageData>({});

  // Toggle event expansion
  const toggleEvent = (eventId: number) => {
    setExpandedEvents(prev => {
      const newSet = new Set(prev);
      if (newSet.has(eventId)) {
        newSet.delete(eventId);
      } else {
        newSet.add(eventId);
      }
      return newSet;
    });
  };

  // Get images for a specific event based on its title and year
  const getEventImages = (title: string, year: string): string[] => {
    const folderSlug = `${slugify(title)}-${year}`;
    return eventImages[folderSlug] || [];
  };

  // Load event images on mount
  useEffect(() => {
    const fetchImageMapping = async () => {
      try {
        const response = await fetch('/events/manifest.json');
        if (response.ok) {
          const mapping = await response.json();
          setEventImages(mapping);
        }
      } catch (error) {
        console.error('Failed to load event images manifest:', error);
      }
    };

    fetchImageMapping();
  }, []);

  const events = [
    // 2023
    { id: 1, date: "20 Sept", title: "Japanese Studies Society Matsuri", milestone: "Debut", year: "2023" },
    { id: 2, date: "15 Oct", title: "PPIA x Study Perth Cultural Exchange", milestone: "Invitation to Perform", year: "2023" },

    // 2024
    { id: 3, date: "14 April", title: "Buddha's Birthday and Multicultural Festival", milestone: "Invitation to Perform", year: "2024" },
    { id: 4, date: "11 May", title: "Oz Comic Con 2024", milestone: "Convention Debut", year: "2024" },
    { id: 5, date: "1 June", title: "The Muvement", milestone: "Opening Performance Invitation from Muyuu", year: "2024" },
    { id: 6, date: "5 July", title: "Hoshi: To The Moon", milestone: "", year: "2024" },
    { id: 7, date: "8 Sept", title: "Evolve", milestone: "Vocal Performance Debut with JustCosplaySings", year: "2024" },
    { id: 8, date: "13 Sept", title: "Tokyo Rock Fest", milestone: "Opening Performance Invitation from JustCosplaySings", year: "2024" },
    { id: 9, date: "18 Sept", title: "Japanese Studies Society Matsuri", milestone: "Closing Performers", year: "2024" },
    { id: 10, date: "26 Sept", title: "UWA Spring Feast", milestone: "", year: "2024" },
    { id: 11, date: "12 Oct", title: "Tokyo Market", milestone: "", year: "2024" },
    { id: 12, date: "2 Nov", title: "Canning Show with Evolve", milestone: "", year: "2024" },

    // 2025
    { id: 13, date: "3 March", title: "WoofChip's Birthday Bash", milestone: "Invitation to Perform", year: "2025" },
    { id: 14, date: "15 March", title: "Perth Japan Festival", milestone: "", year: "2025" },
    { id: 15, date: "22 March", title: "Storm Stage", milestone: "Surprise Collab Stage with RainsDizzy", year: "2025" },
    { id: 16, date: "5 Apr", title: "Oz Comic Con", milestone: "", year: "2025" },
    { id: 17, date: "13 Apr", title: "Idol Lab Day", milestone: "", year: "2025" },
    { id: 18, date: "1 May", title: "UWA PAC Autumn Feast", milestone: "Invitation to Perform", year: "2025" },
    { id: 19, date: "3 May", title: "Tokyo Alley", milestone: "", year: "2025" },
    { id: 20, date: "31 Aug", title: "Evolve", milestone: "", year: "2025" },
    { id: 21, date: "31 Aug", title: "Evolve", milestone: "Collab Stage with JustCosplaySings", year: "2025" },
    { id: 22, date: "12 Sept", title: "Hoshi: Pixelate", milestone: "", year: "2025" },
    { id: 23, date: "17 Sept", title: "Japanese Studies Society Matsuri", milestone: "Closing Performers", year: "2025" },
    { id: 24, date: "25 Sept", title: "UWA Spring Feast", milestone: "Closing Performers", year: "2025" },
    { id: 25, date: "1 Nov", title: "The Muvement 2", milestone: "Decchan First Solo Stage", year: "2025" },
    { id: 26, date: "29 Nov", title: "Hoshi Con", milestone: "", year: "2025" },
    { id: 27, date: "30 Nov", title: "Hoshi Con — Diversity 'Our Moment' Showcase", milestone: "Decchan with ViFi (Special Collab Unit with Eon & RainsDizzy)", year: "2025" },
    { id: 28, date: "19 Dec", title: "Idol Mic Night", milestone: "", year: "2025", description: "Our end of year showcase event featuring solo performances and group songs." },

    // 2026
    { id: 29, date: "19 Jan", title: "Epic Con", milestone: "", year: "2026" },
  ];

  const groupedEvents = events.reduce((acc, event) => {
    if (!acc[event.year]) {
      acc[event.year] = [];
    }
    acc[event.year].push(event);
    return acc;
  }, {} as Record<string, typeof events>);

  const years = Object.keys(groupedEvents).sort((a, b) => Number(b) - Number(a));

  return (
    <div className="w-full min-h-screen bg-[#0f0f0f]">
      <Navigation />

      <main className="pt-24 pb-16">
        {/* Header */}
        <section className="px-4 sm:px-6 md:px-8 lg:px-16 mb-8 sm:mb-10 md:mb-12">
          <div className="max-w-7xl mx-auto">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-extrabold text-white uppercase tracking-tight mb-2 sm:mb-3 md:mb-4">
              EVENTS
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-[#e0e0e0] max-w-2xl">
              Our performance history across Perth and beyond
            </p>
          </div>
        </section>

        {/* Stats Bar */}
        <section className="bg-[#9dff00] py-6 sm:py-7 md:py-8 px-4 sm:px-6 md:px-8 lg:px-16 mb-0">
          <div className="max-w-7xl mx-auto grid grid-cols-3 md:flex md:justify-between items-center gap-4 sm:gap-6 md:gap-8">
            <div className="text-center">
              <div className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-black">30+</div>
              <div className="text-xs sm:text-sm md:text-lg font-bold text-black/70 uppercase tracking-wider">PERFORMANCES</div>
            </div>
            <div className="text-center">
              <div className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-black">{years.length}</div>
              <div className="text-xs sm:text-sm md:text-lg font-bold text-black/70 uppercase tracking-wider">YEARS</div>
            </div>
            <div className="text-center">
              <div className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-black">∞</div>
              <div className="text-xs sm:text-sm md:text-lg font-bold text-black/70 uppercase tracking-wider">MEMORIES</div>
            </div>
          </div>
        </section>

        {/* Timeline */}
        <section className="px-4 sm:px-6 md:px-8 lg:px-16 py-10 sm:py-12 md:py-16">
          <div className="max-w-7xl mx-auto">
            {years.map((year) => (
              <div key={year} className="mb-12 sm:mb-16 md:mb-20 last:mb-0">
                {/* Year Header */}
                <div className="flex items-center gap-3 sm:gap-4 md:gap-6 mb-6 sm:mb-8 md:mb-10">
                  <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-extrabold text-[#9dff00] uppercase tracking-tight shrink-0">
                    {year}
                  </h2>
                  <div className="flex-1 h-[2px] bg-[#9dff00]/30" />
                  <div className="text-sm sm:text-base md:text-lg font-bold text-[#e0e0e0]/60 uppercase tracking-wider shrink-0">
                    {groupedEvents[year].length} {groupedEvents[year].length === 1 ? 'EVENT' : 'EVENTS'}
                  </div>
                </div>

                {/* Events List */}
                <div className="space-y-0">
                  {groupedEvents[year].slice().reverse().map((event, index) => {
                    const images = getEventImages(event.title, event.year);
                    const hasImages = images.length > 0;
                    const isExpanded = expandedEvents.has(event.id);
                    const folderSlug = `${slugify(event.title)}-${event.year}`;
                    const hasContent = hasImages || !!event.description;

                    return (
                      <div key={event.id}>
                        <article
                          onClick={() => hasContent && toggleEvent(event.id)}
                          className={`group grid grid-cols-[70px_1fr] sm:grid-cols-[90px_1fr] md:grid-cols-[120px_1fr] gap-0 border-b border-[#9dff00]/10 last:border-b-0 hover:bg-[#1a1a1a]/50 active:bg-[#1a1a1a]/70 transition-all duration-300 ${hasContent ? 'cursor-pointer' : ''} ${isExpanded ? 'bg-[#1a1a1a]/70' : ''}`}
                        >
                          {/* Date Column */}
                          <div className="py-4 sm:py-5 md:py-6 px-2 sm:px-3 md:px-4 border-r border-[#9dff00]/10 flex flex-col justify-center">
                            <span className="text-[#9dff00] font-extrabold text-xs sm:text-sm md:text-base uppercase tracking-wider">
                              {event.date}
                            </span>
                          </div>

                          {/* Content Column */}
                          <div className="py-4 sm:py-5 md:py-6 px-3 sm:px-4 md:px-6 flex flex-col justify-center">
                            <div className="flex items-start justify-between gap-2">
                              <div className="flex-1">
                                {event.milestone && (
                                  <span className="text-[#9dff00]/80 text-[10px] sm:text-xs md:text-sm font-bold uppercase tracking-[0.1em] sm:tracking-[0.15em] mb-0.5 sm:mb-1 line-clamp-2 block">
                                    {event.milestone}
                                  </span>
                                )}
                                <h3 className="text-sm sm:text-base md:text-lg lg:text-2xl font-extrabold text-white uppercase tracking-tight group-hover:text-[#9dff00] transition-colors duration-300">
                                  {event.title}
                                </h3>
                              </div>
                              {hasContent && (
                                <div className={`flex items-center gap-1 sm:gap-2 text-[#9dff00] transition-transform duration-300 ${isExpanded ? 'rotate-180' : ''}`}>
                                  {hasImages ? (
                                    <>
                                      <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 sm:w-5 sm:h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                      </svg>
                                      <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 sm:w-5 sm:h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                      </svg>
                                    </>
                                  ) : (
                                    <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 sm:w-5 sm:h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                    </svg>
                                  )}
                                </div>
                              )}
                            </div>
                          </div>
                        </article>

                        {/* Expandable Content */}
                        <div
                          className={`overflow-hidden transition-all duration-500 ease-in-out ${isExpanded ? 'max-h-[2000px] opacity-100' : 'max-h-0 opacity-0'}`}
                        >
                          <div className="bg-[#1a1a1a] p-4 sm:p-6 md:p-8 border-b border-[#9dff00]/10">
                            {event.description && (
                              <p className="text-[#e0e0e0] mb-6 text-sm sm:text-base md:text-lg max-w-3xl leading-relaxed">
                                {event.description}
                              </p>
                            )}
                            {hasImages && (
                              <EventGallery
                                images={images}
                                folderSlug={folderSlug}
                                title={event.title}
                              />
                            )}
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Call to Action */}
        <section className="bg-[#1a1a1a] border-t border-[#9dff00]/10 py-10 sm:py-12 md:py-16 px-4 sm:px-6 md:px-8 lg:px-16">
          <div className="max-w-7xl mx-auto text-center">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-white uppercase tracking-tight mb-2 sm:mb-3 md:mb-4">
              WANT US AT YOUR EVENT?
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-[#e0e0e0] mb-6 sm:mb-7 md:mb-8 max-w-2xl mx-auto px-4 sm:px-0">
              Book Honeydew Crew for your next festival, convention, or celebration
            </p>
            <button className="bg-[#9dff00] text-black px-6 sm:px-8 md:px-10 py-3 sm:py-3.5 md:py-4 text-base sm:text-lg md:text-xl font-extrabold uppercase tracking-wider hover:bg-[#8aef00] active:bg-[#7de000] transition-colors duration-300 min-h-[48px] touch-manipulation">
              GET IN TOUCH
            </button>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default EventsPage;
