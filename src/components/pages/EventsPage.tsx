import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

const EventsPage = () => {
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
    { id: 28, date: "19 Dec", title: "Idol Mic Night", milestone: "", year: "2025" },

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
        <section className="px-4 md:px-8 lg:px-16 mb-12">
          <div className="max-w-7xl mx-auto">
            <h1 className="text-6xl md:text-8xl font-extrabold text-white uppercase tracking-tight mb-4">
              EVENTS
            </h1>
            <p className="text-xl text-[#e0e0e0] max-w-2xl">
              Our performance history across Perth and beyond
            </p>
          </div>
        </section>

        {/* Stats Bar */}
        <section className="bg-[#9dff00] py-8 px-4 md:px-8 lg:px-16 mb-0">
          <div className="max-w-7xl mx-auto flex flex-wrap justify-center md:justify-between items-center gap-8">
            <div className="text-center">
              <div className="text-5xl font-extrabold text-black">{events.length}</div>
              <div className="text-lg font-bold text-black/70 uppercase tracking-wider">PERFORMANCES</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-extrabold text-black">{years.length}</div>
              <div className="text-lg font-bold text-black/70 uppercase tracking-wider">YEARS</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-extrabold text-black">∞</div>
              <div className="text-lg font-bold text-black/70 uppercase tracking-wider">MEMORIES</div>
            </div>
          </div>
        </section>

        {/* Timeline */}
        <section className="px-4 md:px-8 lg:px-16 py-16">
          <div className="max-w-7xl mx-auto">
            {years.map((year) => (
              <div key={year} className="mb-20 last:mb-0">
                {/* Year Header */}
                <div className="flex items-center gap-6 mb-10">
                  <h2 className="text-6xl md:text-8xl font-extrabold text-[#9dff00] uppercase tracking-tight shrink-0">
                    {year}
                  </h2>
                  <div className="flex-1 h-[2px] bg-[#9dff00]/30" />
                  <div className="text-lg font-bold text-[#e0e0e0]/60 uppercase tracking-wider shrink-0">
                    {groupedEvents[year].length} {groupedEvents[year].length === 1 ? 'EVENT' : 'EVENTS'}
                  </div>
                </div>

                {/* Events List */}
                <div className="space-y-0">
                  {groupedEvents[year].map((event, index) => (
                    <article
                      key={event.id}
                      className="group grid grid-cols-[80px_1fr] md:grid-cols-[120px_1fr] gap-0 border-b border-[#9dff00]/10 last:border-b-0 hover:bg-[#1a1a1a]/50 transition-all duration-300"
                    >
                      {/* Date Column */}
                      <div className="py-6 px-4 border-r border-[#9dff00]/10 flex flex-col justify-center">
                        <span className="text-[#9dff00] font-extrabold text-sm md:text-base uppercase tracking-wider">
                          {event.date}
                        </span>
                      </div>

                      {/* Content Column */}
                      <div className="py-6 px-6 flex flex-col justify-center">
                        {event.milestone && (
                          <span className="text-[#9dff00]/80 text-xs md:text-sm font-bold uppercase tracking-[0.15em] mb-1">
                            {event.milestone}
                          </span>
                        )}
                        <h3 className="text-lg md:text-2xl font-extrabold text-white uppercase tracking-tight group-hover:text-[#9dff00] transition-colors duration-300">
                          {event.title}
                        </h3>
                      </div>
                    </article>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Call to Action */}
        <section className="bg-[#1a1a1a] border-t border-[#9dff00]/10 py-16 px-4 md:px-8 lg:px-16">
          <div className="max-w-7xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-extrabold text-white uppercase tracking-tight mb-4">
              WANT US AT YOUR EVENT?
            </h2>
            <p className="text-xl text-[#e0e0e0] mb-8 max-w-2xl mx-auto">
              Book Honeydew Crew for your next festival, convention, or celebration
            </p>
            <button className="bg-[#9dff00] text-black px-10 py-4 text-xl font-extrabold uppercase tracking-wider hover:bg-[#8aef00] transition-colors duration-300">
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
