import type { Metadata } from 'next';
import Navbar from '@/components/Navbar';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft, CheckCircle2 } from 'lucide-react';
import InstagramGallery from '@/components/InstagramGallery';

export const metadata: Metadata = {
    title: 'Nettoyage de Vitres en Hauteur & Accès Difficile | Acces Alternatif',
    description: 'Service professionnel de nettoyage de vitres en hauteur, verrières et façades vitrées. Intervention cordiste sur Paris et Île-de-France (78, 91, 75).',
    keywords: ['nettoyage vitre hauteur', 'cordiste vitre', 'laveur de vitre alpiniste', 'nettoyage verrière', 'accès difficile'],
};

export default function NettoyageVitres() {
    const galleryImages = [
        '/optimized-realisations/nettoyage-vitres-acces-difficile.jpg',
        '/optimized-realisations/nettoyage-haute-pression-facade.jpg',
        '/optimized-realisations/cordiste-monument-historique-paris.jpg',
        '/optimized-realisations/travaux-hauteur-maintenance-hlm.jpg',
        '/optimized-realisations/intervention-cordiste-batiment-industriel.jpg',
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
                                NETTOYAGE DE <span className="text-primary block">VITRES EN HAUTEUR</span>
                            </h1>
                            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                                Redonnez de l'éclat à vos façades vitrées. Nos techniciens cordistes interviennent sur les surfaces les plus inaccessibles avec une finition impeccable, sans trace, et en toute sécurité.
                            </p>

                            <div className="space-y-6 bg-surface-highlight/5 p-8 rounded-2xl border border-white/5">
                                <h3 className="text-xl font-bold text-white mb-4">Nos Interventions :</h3>
                                <ul className="space-y-3">
                                    {['Lavage de vitres toutes hauteurs', 'Nettoyage de verrières et dômes', 'Dépoussiérage de structures métalliques', 'Traitement anti-calcaire', 'Remise en état après chantier'].map((item) => (
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
                                src="/optimized-realisations/nettoyage-vitres-acces-difficile.jpg"
                                alt="Cordiste nettoyant des vitres"
                                fill
                                className="object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                            <div className="absolute bottom-8 left-8">
                                <p className="text-white font-bold text-lg">La Défense, Paris</p>
                                <p className="text-primary">Intervention sur IGH</p>
                            </div>
                        </div>
                    </div>

                    <InstagramGallery images={galleryImages} />

                    <div className="mt-20 bg-primary rounded-3xl p-12 text-center">
                        <h2 className="text-3xl font-bold text-white mb-4">Besoin d'un devis pour vos vitres ?</h2>
                        <p className="text-white/80 mb-8 max-w-2xl mx-auto">Réponse sous 24h. Intervention possible 7j/7 en Île-de-France.</p>
                        <Link href="/#contact" className="bg-white text-primary px-8 py-4 rounded-full font-bold uppercase tracking-wider hover:bg-black hover:text-white transition-all shadow-xl">
                            Demander un devis gratuit
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
