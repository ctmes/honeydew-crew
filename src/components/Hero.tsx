import { useEffect, useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';

const Hero = () => {
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [showPlayButton, setShowPlayButton] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setPrefersReducedMotion(mediaQuery.matches);

    const handleChange = (e: MediaQueryListEvent) => {
      setPrefersReducedMotion(e.matches);
    };

    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  useEffect(() => {
    const video = videoRef.current;
    if (!video || prefersReducedMotion) return;

    // Try to play the video
    const playVideo = async () => {
      try {
        await video.play();
        setIsPlaying(true);
        setShowPlayButton(false);
      } catch (error) {
        // Autoplay was prevented (common on mobile)
        console.log('Autoplay prevented, showing play button');
        setShowPlayButton(true);
        setIsPlaying(false);
      }
    };

    // Attempt to play when video is ready
    if (video.readyState >= 3) {
      playVideo();
    } else {
      video.addEventListener('canplay', playVideo, { once: true });
    }

    // Track play/pause state
    const handlePlay = () => {
      setIsPlaying(true);
      setShowPlayButton(false);
    };
    const handlePause = () => setIsPlaying(false);

    video.addEventListener('play', handlePlay);
    video.addEventListener('pause', handlePause);

    return () => {
      video.removeEventListener('canplay', playVideo);
      video.removeEventListener('play', handlePlay);
      video.removeEventListener('pause', handlePause);
    };
  }, [prefersReducedMotion]);

  const handlePlayClick = async () => {
    const video = videoRef.current;
    if (!video) return;

    try {
      await video.play();
      setIsPlaying(true);
      setShowPlayButton(false);
    } catch (error) {
      console.error('Failed to play video:', error);
    }
  };

  const scrollToCovers = () => {
    const element = document.getElementById("covers");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="hero"
      className="relative w-full h-[100svh] flex items-center justify-center overflow-hidden bg-background"
    >
      <div className="absolute inset-0 w-full h-full">
        <video
          ref={videoRef}
          className="absolute inset-0 w-full h-full object-cover pointer-events-none"
          autoPlay={!prefersReducedMotion}
          muted
          loop
          playsInline
          poster="/covers.jpg"
          aria-label="Hero Video - Background performance showcase"
        >
          <source src="/hero-video.webm" type="video/webm" />
          Your browser does not support the video tag.
        </video>

        {/* Dark Overlay - slightly lighter for Urban Clean look */}
        <div className="absolute inset-0 bg-black/40 pointer-events-none" />

        {/* Play button overlay for mobile when autoplay fails */}
        {showPlayButton && !isPlaying && (
          <button
            onClick={handlePlayClick}
            className="absolute inset-0 w-full h-full flex items-center justify-center bg-black/40 cursor-pointer z-10 transition-opacity hover:bg-black/50"
            aria-label="Play video"
          >
            <div className="w-20 h-20 md:w-24 md:h-24 rounded-full bg-white flex items-center justify-center shadow-xl transform transition-transform hover:scale-105 active:scale-95">
              <svg
                className="w-8 h-8 md:w-10 md:h-10 text-black translate-x-1"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M8 5v14l11-7z" />
              </svg>
            </div>
          </button>
        )}
      </div>

      {/* Hero Text Overlay */}
      <div className="relative z-20 text-center px-4 sm:px-6 max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0 }}
          viewport={{ once: true }}
        >
          <div className="text-xs sm:text-sm tracking-[0.15em] uppercase text-white/80 mb-4 font-bold">
            Dance Collective
          </div>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          viewport={{ once: true }}
          className="text-5xl sm:text-7xl md:text-8xl font-black text-white mb-6 tracking-tighter uppercase leading-none mix-blend-overlay"
        >
          HONEYDEW
          <br />
          <span className="text-primary mix-blend-normal">CREW</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-lg sm:text-xl md:text-2xl text-white/90 mb-10 max-w-2xl mx-auto font-medium"
        >
          High-energy K-pop & J-pop dance covers.<br />
          Bringing the stage to the streets.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.45 }}
          viewport={{ once: true }}
        >
          <Button
            onClick={scrollToCovers}
            size="lg"
            className="bg-primary hover:bg-white text-black text-lg px-8 py-6 rounded-none font-bold uppercase tracking-widest transition-all duration-300 hover:scale-105"
          >
            Watch Covers
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
