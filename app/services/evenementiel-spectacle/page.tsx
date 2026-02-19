import type { Metadata } from 'next';
import Navbar from '@/components/Navbar';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft, CheckCircle2 } from 'lucide-react';
import InstagramGallery from '@/components/InstagramGallery';

export const metadata: Metadata = {
    title: 'Événementiel & Spectacle en Hauteur | Acces Alternatif',
    description: 'Accrochage de décors, éclairages, kakémonos en hauteur. Sécurisation technique pour le spectacle vivant et l\'événementiel.',
    keywords: ['rigger spectacle', 'accrochage décor hauteur', 'événementiel cordiste', 'pose kakemono', 'éclairage scénique hauteur'],
};

export default function Evenementiel() {
    const galleryImages = [
        '/optimized-realisations/pose-bache-evenementiel-hauteur.jpg',
        '/optimized-realisations/expert-travaux-acrobatiques-ile-de-france.jpg',
        '/optimized-realisations/cordiste-monument-historique-paris.jpg',
        '/optimized-realisations/intervention-cordiste-batiment-industriel.jpg',
        '/optimized-realisations/nettoyage-haute-pression-facade.jpg',
        '/optimized-realisations/ravalement-facade-corde-versailles.jpg',
    ];

    return (
        <div className="min-h-screen bg-background text-foreground font-sans selection:bg-primary selection:text-white">
            <Navbar />

            <main className="pt-24 pb-16">
                <div className="container-custom mx-auto">
                    <Link href="/#services" className="inline-flex items-center text-gray-400 hover:text-primary transition-colors mb-8">
                        <ArrowLeft className="w-4 h-4 mr-2" /> Retour aux services
                    </Link>

                    <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
                        <div>
                            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white leading-tight">
                                ÉVÉNEMENTIEL <span className="text-primary block">& SPECTACLE</span>
                            </h1>
                            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                                Donnez une dimension verticale à vos événements. Nous assurons la pose et la sécurisation de vos installations les plus audacieuses (éclairage, son, décors) en toute discrétion.
                            </p>

                            <div className="space-y-6 bg-surface-highlight/5 p-8 rounded-2xl border border-white/5">
                                <h3 className="text-xl font-bold text-white mb-4">Notre Expertise Scénique :</h3>
                                <ul className="space-y-3">
                                    {['Pose de bâches publicitaires géantes (Kakémonos)', 'Installation de structures scéniques et grills techniques', 'Accrochage lumière et son en hauteur', 'Sécurisation des techniciens et acrobates', 'Intervention en milieux confinés ou atypiques'].map((item) => (
                                        <li key={item} className="flex items-center space-x-3 text-gray-300">
                                            <CheckCircle2 className="w-5 h-5 text-primary shrink-0" />
                                            <span>{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>

                        <div className="relative h-[600px] rounded-2xl overflow-hidden shadow-2xl grayscale hover:grayscale-0 transition-all duration-700">
                            <Image
                                src="/optimized-realisations/pose-bache-evenementiel-hauteur.jpg"
                                alt="Installation événementielle en hauteur"
                                fill
                                className="object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                            <div className="absolute bottom-8 left-8">
                                <p className="text-white font-bold text-lg">Festival en Plein Air</p>
                                <p className="text-primary">Accroche lumière sur structure</p>
                            </div>
                        </div>
                    </div>

                    <InstagramGallery images={galleryImages} />

                    <div className="mt-20 bg-primary rounded-3xl p-12 text-center">
                        <h2 className="text-3xl font-bold text-white mb-4">Un projet événementiel complexe ?</h2>
                        <p className="text-white/80 mb-8 max-w-2xl mx-auto">Nos riggers et cordistes vous accompagnent de l&apos;étude à l&apos;installation.</p>
                        <Link href="/#contact" className="bg-white text-primary px-8 py-4 rounded-full font-bold uppercase tracking-wider hover:bg-black hover:text-white transition-all shadow-xl">
                            Consulter un Expert
                        </Link>
                    </div>

                </div>
            </main>

            <footer className="bg-black border-t border-white/10 py-12">
                <div className="container-custom mx-auto flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
                    <p>© 2026 ACCES ALTERNATIF. Tous droits réservés.</p>
                </div>
            </footer>
        </div>
    );
}
