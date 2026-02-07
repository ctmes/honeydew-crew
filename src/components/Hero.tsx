import { useEffect, useState, useRef } from 'react';

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

  return (
    <section
      id="hero"
      className="relative w-full h-[100svh] flex items-center justify-center overflow-hidden bg-black"
    >
      {/* Self-hosted Video Background */}
      <div className="absolute inset-0 w-full h-full">
        <video
          ref={videoRef}
          className="absolute inset-0 w-full h-full object-cover"
          autoPlay={!prefersReducedMotion}
          muted
          loop
          playsInline
          aria-label="Hero Video - Background performance showcase"
        >
          <source src="/hero-video.webm" type="video/webm" />
          <source src="/hero-video.mp4" type="video/mp4" />
        </video>

        {/* Play button overlay for mobile when autoplay fails */}
        {showPlayButton && !isPlaying && (
          <button
            onClick={handlePlayClick}
            className="absolute inset-0 w-full h-full flex items-center justify-center bg-black/30 cursor-pointer z-10 transition-opacity hover:bg-black/40"
            aria-label="Play video"
          >
            <div className="w-20 h-20 md:w-24 md:h-24 rounded-full bg-white/90 flex items-center justify-center shadow-lg transform transition-transform hover:scale-110">
              <svg
                className="w-8 h-8 md:w-10 md:h-10 text-black ml-1"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M8 5v14l11-7z" />
              </svg>
            </div>
          </button>
        )}
      </div>
    </section>
  );
};

export default Hero;
