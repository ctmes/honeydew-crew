import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import useEmblaCarousel from 'embla-carousel-react';
import AutoScroll from 'embla-carousel-auto-scroll';

interface EventGalleryProps {
    images: string[];
    folderSlug: string;
    title: string;
}

const EmblaRow = ({
    images,
    direction = 'forward',
    speed = 1,
    onImageClick
}: {
    images: string[],
    direction?: 'forward' | 'backward',
    speed?: number,
    onImageClick: (index: number) => void
}) => {
    // Use negative speed for backward (right) direction
    const actualSpeed = direction === 'forward' ? speed : -speed;

    const [emblaRef] = useEmblaCarousel(
        {
            loop: true,
            dragFree: true,
            containScroll: false
        },
        [
            AutoScroll({
                speed: actualSpeed,
                stopOnInteraction: false,
                stopOnMouseEnter: true,
                playOnInit: true
            })
        ]
    );

    return (
        <div className="overflow-hidden w-full cursor-grab active:cursor-grabbing" ref={emblaRef}>
            <div className="flex touch-pan-y">
                {images.map((image, index) => (
                    <div
                        key={`${image}-${index}`}
                        className="flex-[0_0_auto] min-w-0 pl-4 relative"
                    >
                        <div
                            className="relative w-64 sm:w-80 md:w-96 aspect-video overflow-hidden rounded-lg brightness-90 hover:brightness-110 transition-all duration-300 cursor-pointer shadow-lg hover:shadow-[#9dff00]/20"
                            onClick={() => onImageClick(index)}
                        >
                            <img
                                src={image}
                                alt={`Event image ${index}`}
                                className="w-full h-full object-cover select-none pointer-events-none"
                                loading="lazy"
                            />
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

const EventGallery = ({ images, folderSlug, title }: EventGalleryProps) => {
    const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(null);

    // Split images into two rows
    const midPoint = Math.ceil(images.length / 2);
    const row1Images = images.slice(0, midPoint);
    const row2Images = images.slice(midPoint);

    // If there are very few images, duplicating them helps Embla loop smoothly
    // Embla handles looping well, but having enough content to fill the screen is good
    const effectiveRow1 = row1Images.length < 4 ? [...row1Images, ...row1Images, ...row1Images] : row1Images;
    const effectiveRow2 = row2Images.length < 4 ? [...row2Images, ...row2Images, ...row2Images] : row2Images;

    // Add folder path to images
    const getFullPath = (img: string) => `/events/${folderSlug}/${img}`;
    const getThumbPath = (img: string) => `/events/${folderSlug}/${img.replace('.webp', '_thumb.webp')}`;

    const fullPathImages = images.map(getFullPath);
    const row1Full = effectiveRow1.map(getThumbPath);
    const row2Full = effectiveRow2.map(getThumbPath);

    // Handle keyboard navigation
    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (selectedImageIndex === null) return;

            if (e.key === 'Escape') setSelectedImageIndex(null);
            if (e.key === 'ArrowLeft') {
                setSelectedImageIndex(prev =>
                    prev === null ? null : (prev === 0 ? images.length - 1 : prev - 1)
                );
            }
            if (e.key === 'ArrowRight') {
                setSelectedImageIndex(prev =>
                    prev === null ? null : (prev === images.length - 1 ? 0 : prev + 1)
                );
            }
        };

        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [selectedImageIndex, images.length]);

    return (
        <div className="w-full bg-[#1a1a1a] py-6 space-y-6 border-b border-[#9dff00]/10 select-none">

            {/* Row 1 - Scrolls Forward (Left) */}
            <EmblaRow
                images={row1Full}
                direction="forward"
                speed={1}
                onImageClick={(idx) => {
                    // idx is correct because effectiveRow1 contains valid images (even if duplicated, idx % original len is handled if mapped back, 
                    // but here we might need to be careful if we duplicated)
                    // Simpler approach: find the image name in the original list
                    const imgName = row1Full[idx].split('/').pop()?.replace('_thumb.webp', '.webp');
                    const originalIndex = images.findIndex(img => img === imgName);
                    if (originalIndex !== -1) setSelectedImageIndex(originalIndex);
                }}
            />

            {/* Row 2 - Scrolls Backward (Right) */}
            {effectiveRow2.length > 0 && (
                <EmblaRow
                    images={row2Full}
                    direction="backward"
                    speed={0.8}
                    onImageClick={(idx) => {
                        const imgName = row2Full[idx].split('/').pop()?.replace('_thumb.webp', '.webp');
                        const originalIndex = images.findIndex(img => img === imgName);
                        if (originalIndex !== -1) setSelectedImageIndex(originalIndex);
                    }}
                />
            )}

            {/* Lightbox Overlay */}
            <AnimatePresence>
                {selectedImageIndex !== null && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-xl p-4 sm:p-8"
                        onClick={() => setSelectedImageIndex(null)}
                    >
                        {/* Close Button */}
                        <button
                            className="absolute top-4 right-4 text-white hover:text-[#9dff00] transition-colors z-50 p-2"
                            onClick={(e) => {
                                e.stopPropagation();
                                setSelectedImageIndex(null);
                            }}
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
                        </button>

                        {/* Navigation Buttons */}
                        <button
                            className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 text-white hover:text-[#9dff00] transition-colors hover:scale-110 p-2"
                            onClick={(e) => {
                                e.stopPropagation();
                                setSelectedImageIndex(prev => prev === null || prev === 0 ? images.length - 1 : prev - 1);
                            }}
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="15 18 9 12 15 6"></polyline></svg>
                        </button>

                        <button
                            className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 text-white hover:text-[#9dff00] transition-colors hover:scale-110 p-2"
                            onClick={(e) => {
                                e.stopPropagation();
                                setSelectedImageIndex(prev => prev === null || prev === images.length - 1 ? 0 : prev + 1);
                            }}
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 18 15 12 9 6"></polyline></svg>
                        </button>

                        {/* Main Image */}
                        <motion.div
                            layoutId={`image-${selectedImageIndex}`}
                            className="relative w-full h-full flex items-center justify-center p-4"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <img
                                src={fullPathImages[selectedImageIndex]}
                                alt={`${title} - view ${selectedImageIndex + 1}`}
                                className="max-w-full max-h-[90vh] object-contain shadow-2xl rounded-sm"
                            />
                            <div className="absolute bottom-8 left-0 right-0 text-center text-white/50 text-sm font-mono tracking-widest uppercase pointer-events-none">
                                {title} — {selectedImageIndex + 1} / {images.length}
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

export default EventGallery;
