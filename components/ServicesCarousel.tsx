'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
    Building2, Hammer, ShieldCheck, Tent,
    Landmark, Factory, Siren,
    ArrowRight, ChevronLeft, ChevronRight
} from 'lucide-react';
import Link from 'next/link';

const services = [
    {
        icon: Building2,
        title: 'Nettoyage Vitres',
        desc: 'Lavage de vitres toutes hauteurs, verrières et façades IGH.',
        href: '/services/nettoyage-vitres-hauteur'
    },
    {
        icon: Hammer,
        title: 'Maçonnerie',
        desc: 'Purges de sécurité, rejointoiement et rénovation de façades.',
        href: '/services/maconnerie-purge-facade'
    },
    {
        icon: ShieldCheck,
        title: 'Sécurisation',
        desc: 'Pose de filets antichute, lignes de vie et points d\'ancrage.',
        href: '/services/securisation-site-filets'
    },
    {
        icon: Tent,
        title: 'Événementiel',
        desc: 'Accrochage de kakémonos, éclairage et structures scéniques.',
        href: '/services/evenementiel-spectacle'
    },
    {
        icon: Landmark,
        title: 'Patrimoine 78/27',
        desc: 'Restauration monuments historiques Versailles & Évreux.',
        href: '/services/patrimoine-78-27'
    },
    {
        icon: Factory,
        title: 'Industrie 91',
        desc: 'Maintenance usines & parcs HLM en Essonne.',
        href: '/services/industrie-91'
    },
    {
        icon: Siren,
        title: 'Urgence Paris 75',
        desc: 'Accès exigu, cours intérieures et mises en sécurité express.',
        href: '/services/paris-75-urgence'
    }
];

export default function ServicesCarousel() {
    const [currentIndex, setCurrentIndex] = useState(0);

    // Number of visible cards depending on screen size (simplified for logic: 1 on mobile, 3 on desktop)
    // For a smoother custom carousel, we'll increment by 1 but show a window of items

    const itemsPerView = { mobile: 1, desktop: 3 };
    const isMobile = typeof window !== 'undefined' && window.innerWidth < 768;
    const viewSize = isMobile ? itemsPerView.mobile : itemsPerView.desktop;

    // We want to loop or just scroll. Let's do a circular loop logic or simple bounded scroll.
    // For a "carousel", circular is nicer but bounded is easier to implement robustly quickly without libs.
    // Let's do simple bounded for reliability.

    const maxIndex = Math.max(0, services.length - viewSize);

    const next = () => {
        setCurrentIndex(prev => (prev >= maxIndex ? 0 : prev + 1));
    };

    const prev = () => {
        setCurrentIndex(prev => (prev <= 0 ? maxIndex : prev - 1));
    };

    // Calculate translation percentage
    // e.g. if desktop (3 items), each item is 33.33% width.
    // We translate by currentIndex * 33.33%
    const itemWidth = isMobile ? 100 : 33.333;

    return (
        <div className="relative group">
            <div className="overflow-hidden px-4 md:px-0">
                <motion.div
                    className="flex"
                    animate={{ x: `-${currentIndex * itemWidth}%` }}
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                >
                    {services.map((service, index) => (
                        <div
                            key={index}
                            className={`flex-shrink-0 w-full md:w-1/3 px-4 box-border`}
                        >
                            <Link
                                href={service.href}
                                className="block h-full group/card p-8 bg-surface-highlight/10 border border-white/5 rounded-2xl hover:bg-surface-highlight/30 hover:border-primary/30 transition-all duration-300"
                            >
                                <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-6 group-hover/card:bg-primary group-hover/card:text-white text-primary transition-colors duration-300">
                                    <service.icon className="w-7 h-7" />
                                </div>
                                <h4 className="text-xl font-bold mb-3">{service.title}</h4>
                                <p className="text-gray-400 text-sm leading-relaxed mb-6 h-12 line-clamp-2">{service.desc}</p>
                                <span className="text-primary text-sm font-bold uppercase tracking-wider flex items-center group-hover/card:translate-x-2 transition-transform">
                                    En savoir plus <ArrowRight className="w-4 h-4 ml-2" />
                                </span>
                            </Link>
                        </div>
                    ))}
                </motion.div>
            </div>

            {/* Controls */}
            <button
                onClick={prev}
                className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-12 p-3 bg-black/50 hover:bg-primary text-white rounded-full backdrop-blur-sm transition-all z-10 border border-white/10"
                aria-label="Previous"
            >
                <ChevronLeft size={24} />
            </button>
            <button
                onClick={next}
                className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-12 p-3 bg-black/50 hover:bg-primary text-white rounded-full backdrop-blur-sm transition-all z-10 border border-white/10"
                aria-label="Next"
            >
                <ChevronRight size={24} />
            </button>

            {/* Dots */}
            <div className="flex justify-center gap-2 mt-8">
                {Array.from({ length: services.length - (viewSize - 1) }).map((_, idx) => (
                    <button
                        key={idx}
                        onClick={() => setCurrentIndex(idx)}
                        className={`h-1.5 rounded-full transition-all duration-300 ${idx === currentIndex ? 'w-8 bg-primary' : 'w-2 bg-white/20'
                            }`}
                    />
                ))}
            </div>
        </div>
    );
}
