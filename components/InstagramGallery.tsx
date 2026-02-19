'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, X, Maximize2 } from 'lucide-react';
import Image from 'next/image';

interface GalleryProps {
    images: string[];
}

export default function InstagramGallery({ images }: GalleryProps) {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [lightboxOpen, setLightboxOpen] = useState(false);

    const nextImage = () => {
        setCurrentIndex((prev) => (prev + 1) % images.length);
    };

    const prevImage = () => {
        setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
    };

    const openLightbox = (index: number) => {
        setCurrentIndex(index);
        setLightboxOpen(true);
    };

    return (
        <div className="py-12 md:py-24 relative overflow-hidden bg-background">

            {/* Header Section */}
            <div className="container-custom mx-auto mb-12 relative px-4">
                <div className="text-center">
                    <h4 className="text-primary text-sm uppercase tracking-[0.2em] mb-2 font-medium">Portfolio</h4>
                    <h2 className="text-4xl md:text-5xl font-serif text-white tracking-wide">Nos Réalisations</h2>
                </div>

                {/* Counter (Desktop absolute, Mobile relative) */}
                <div className="hidden md:block absolute top-1/2 -translate-y-1/2 right-4 text-white/60 italic font-serif">
                    Photo {currentIndex + 1} sur {images.length}
                </div>
            </div>

            {/* Main Carousel Area */}
            <div className="relative w-full h-[60vh] md:h-[70vh]">
                <div className="absolute inset-0 flex items-center justify-center">
                    <AnimatePresence initial={false} mode="wait">
                        <motion.div
                            key={currentIndex}
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 1.05 }}
                            transition={{ duration: 0.7, ease: [0.32, 0.72, 0, 1] }}
                            drag="x"
                            dragConstraints={{ left: 0, right: 0 }}
                            dragElastic={1}
                            onDragEnd={(e, { offset, velocity }) => {
                                const swipe = Math.abs(offset.x) * velocity.x;

                                if (swipe < -10000) {
                                    nextImage();
                                } else if (swipe > 10000) {
                                    prevImage();
                                }
                            }}
                            className="relative w-full h-full md:w-[85%] md:h-[90%] overflow-hidden bg-black/50 md:rounded-lg shadow-2xl cursor-grab active:cursor-grabbing"
                        >
                            <Image
                                src={images[currentIndex]}
                                alt={`Réalisation ${currentIndex + 1}`}
                                fill
                                className="object-cover"
                                priority
                            />

                            {/* Dark Gradient Overlay for text contrast */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60" />

                            {/* 'Agrandir' Button Overlay */}
                            <button
                                onClick={() => openLightbox(currentIndex)}
                                className="absolute bottom-8 right-8 flex items-center gap-3 bg-white/10 backdrop-blur-md border border-white/20 px-6 py-3 rounded-full text-white hover:bg-white hover:text-black transition-all group z-20"
                            >
                                <span className="text-xs font-bold uppercase tracking-wider">Agrandir</span>
                                <div className="bg-white text-black p-1.5 rounded-full group-hover:bg-black group-hover:text-white transition-colors">
                                    <Maximize2 size={14} />
                                </div>
                            </button>
                        </motion.div>
                    </AnimatePresence>
                </div>

                {/* Navigation Buttons */}
                <button
                    onClick={prevImage}
                    className="absolute left-4 top-1/2 -translate-y-1/2 z-30 p-4 rounded-full bg-black/20 hover:bg-primary/80 backdrop-blur text-white transition-all hidden md:flex"
                >
                    <ChevronLeft size={32} />
                </button>

                <button
                    onClick={nextImage}
                    className="absolute right-4 top-1/2 -translate-y-1/2 z-30 p-4 rounded-full bg-black/20 hover:bg-primary/80 backdrop-blur text-white transition-all hidden md:flex"
                >
                    <ChevronRight size={32} />
                </button>
            </div>

            {/* Progress Indicators */}
            <div className="container-custom mx-auto mt-8 flex justify-center gap-2 px-4">
                {images.map((_, idx) => (
                    <button
                        key={idx}
                        onClick={() => setCurrentIndex(idx)}
                        className={`h-1 rounded-full transition-all duration-500 ${idx === currentIndex
                            ? 'w-12 bg-primary'
                            : 'w-2 bg-white/20 hover:bg-white/40'
                            }`}
                        aria-label={`Go to image ${idx + 1}`}
                    />
                ))}
            </div>

            {/* Lightbox Overlay */}
            <AnimatePresence>
                {lightboxOpen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-xl p-4"
                    >
                        <button
                            className="absolute top-4 right-4 text-white hover:text-primary transition-colors z-50 p-2 bg-white/10 rounded-full"
                            onClick={() => setLightboxOpen(false)}
                        >
                            <X size={32} />
                        </button>

                        <div className="relative w-full h-full max-w-7xl flex items-center justify-center">
                            <Image
                                src={images[currentIndex]}
                                alt={`Réalisation ${currentIndex + 1}`}
                                fill
                                className="object-contain"
                            />
                        </div>

                        {/* Lightbox Navigation */}
                        <button
                            className="absolute left-4 top-1/2 -translate-y-1/2 text-white hover:text-primary transition-colors p-4"
                            onClick={(e) => { e.stopPropagation(); prevImage(); }}
                        >
                            <ChevronLeft size={48} />
                        </button>
                        <button
                            className="absolute right-4 top-1/2 -translate-y-1/2 text-white hover:text-primary transition-colors p-4"
                            onClick={(e) => { e.stopPropagation(); nextImage(); }}
                        >
                            <ChevronRight size={48} />
                        </button>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}
