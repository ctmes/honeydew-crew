import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

const VideosPage = () => {
  const videos = [
    {
      id: 1,
      title: "NewJeans - Super Shy",
      thumbnail: "https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?w=800&q=80",
      views: "125K",
      date: "2024"
    },
    {
      id: 2,
      title: "BLACKPINK - Pink Venom",
      thumbnail: "https://images.unsplash.com/photo-1518834107812-67b0b7c58434?w=800&q=80",
      views: "98K",
      date: "2024"
    },
    {
      id: 3,
      title: "BTS - Dynamite",
      thumbnail: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=800&q=80",
      views: "210K",
      date: "2023"
    },
    {
      id: 4,
      title: "aespa - Supernova",
      thumbnail: "https://images.unsplash.com/photo-1547153760-18fc86324498?w=800&q=80",
      views: "87K",
      date: "2024"
    },
    {
      id: 5,
      title: "Stray Kids - LALALALA",
      thumbnail: "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=800&q=80",
      views: "156K",
      date: "2024"
    },
    {
      id: 6,
      title: "TWICE - Talk That Talk",
      thumbnail: "https://images.unsplash.com/photo-1524041255072-7da0525d6b34?w=800&q=80",
      views: "143K",
      date: "2023"
    }
  ];

  return (
    <div className="w-full min-h-screen bg-[#0f0f0f]">
      <Navigation />
      
      <main className="pt-24 pb-16 px-4 md:px-8 lg:px-16">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-6xl md:text-8xl font-extrabold text-white uppercase tracking-tight mb-4">
            VIDEOS
          </h1>
          <p className="text-xl text-[#e0e0e0] mb-12 max-w-2xl">
            Watch our high-energy K-pop & J-pop dance cover performances
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-0">
            {videos.map((video) => (
              <article
                key={video.id}
                className="group relative aspect-video bg-[#1a1a1a] border border-[#9dff00]/10 overflow-hidden cursor-pointer hover:border-[#9dff00]/40 transition-all duration-300"
              >
                <img
                  src={video.thumbnail}
                  alt={video.title}
                  className="absolute inset-0 w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
                
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="w-16 h-16 border-2 border-[#9dff00] flex items-center justify-center">
                    <svg className="w-8 h-8 text-[#9dff00] fill-[#9dff00]" viewBox="0 0 24 24">
                      <polygon points="5 3 19 12 5 21 5 3" />
                    </svg>
                  </div>
                </div>

                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="text-xl font-extrabold text-white uppercase tracking-tight mb-2">
                    {video.title}
                  </h3>
                  <div className="flex gap-4 text-sm text-[#e0e0e0]">
                    <span>{video.views} views</span>
                    <span>{video.date}</span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default VideosPage;
