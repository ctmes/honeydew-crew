import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
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

interface EventImageData {
    [eventSlug: string]: string[];
}

const GalleryPage = () => {
    const [eventImages, setEventImages] = useState<EventImageData>({});
    const location = useLocation();

    // Reusing the same events list for consistent data. Ideally this should be in a shared config/context.
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

    // Helper to get images
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

    // Scroll to hash on mount/update
    useEffect(() => {
        if (location.hash) {
            const id = location.hash.replace('#', '');
            const element = document.getElementById(id);
            if (element) {
                setTimeout(() => {
                    element.scrollIntoView({ behavior: 'smooth' });
                }, 100); // Small delay to ensure render
            }
        } else {
            window.scrollTo(0, 0);
        }
    }, [location, eventImages]); // Re-run when images load as layout might shift

    // Filter events that actually have images
    const eventsWithImages = events.filter(event => {
        const images = getEventImages(event.title, event.year);
        return images.length > 0;
    }).reverse(); // Show newest first? Or preserve timeline order? Events page is reverse timeline, let's match that.

    return (
        <div className="w-full min-h-screen bg-[#0f0f0f]">
            <Navigation />

            <main className="pt-24 pb-16">
                {/* Header */}
                <section className="px-4 sm:px-6 md:px-8 lg:px-16 mb-8 sm:mb-10 md:mb-12">
                    <div className="max-w-7xl mx-auto">
                        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-extrabold text-white uppercase tracking-tight mb-2 sm:mb-3 md:mb-4">
                            GALLERY
                        </h1>
                        <p className="text-base sm:text-lg md:text-xl text-[#e0e0e0] max-w-2xl">
                            Moments captured from our journey
                        </p>
                    </div>
                </section>

                {/* Gallery List */}
                <section className="px-4 sm:px-6 md:px-8 lg:px-16">
                    <div className="max-w-7xl mx-auto space-y-16 sm:space-y-24">
                        {eventsWithImages.map(event => {
                            const folderSlug = `${slugify(event.title)}-${event.year}`;
                            const images = getEventImages(event.title, event.year);

                            return (
                                <div key={event.id} id={folderSlug} className="scroll-mt-24">
                                    <div className="flex items-center gap-4 mb-6 sm:mb-8">
                                        <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#9dff00] uppercase tracking-tight">
                                            {event.title}
                                        </h2>
                                        <span className="text-white/50 font-mono text-sm sm:text-base border border-white/10 px-2 py-1 rounded">
                                            {event.year}
                                        </span>
                                    </div>

                                    <EventGallery
                                        images={images}
                                        folderSlug={folderSlug}
                                        title={event.title}
                                    />
                                </div>
                            );
                        })}

                        {eventsWithImages.length === 0 && (
                            <div className="text-center py-20 text-white/50">
                                Loading galleries...
                            </div>
                        )}
                    </div>
                </section>

            </main>

            <Footer />
        </div>
    );
}

export default GalleryPage;
