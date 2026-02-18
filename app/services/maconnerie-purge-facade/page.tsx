import type { Metadata } from 'next';
import Navbar from '@/components/Navbar';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft, CheckCircle2 } from 'lucide-react';
import InstagramGallery from '@/components/InstagramGallery';

export const metadata: Metadata = {
    title: 'Maçonnerie Sur Corde & Ravalement | Acces Alternatif',
    description: 'Réparations de façade, purges de sécurité, rejointoiement, et confortement de structures en accès difficile.',
    keywords: ['maçonnerie cordiste', 'ravalement façade accès difficile', 'purge façade', 'rejointoiement', 'fissures façade'],
};

export default function Maconnerie() {
    const galleryImages = [
        '/optimized-realisations/maconnerie-sur-corde-rejointoiement.jpg',
        '/optimized-realisations/maconnerie-corde-departement-95-483.jpg',
        '/optimized-realisations/purge-facade-urgence-78-91.jpg',
        '/optimized-realisations/maconnerie-corde-departement-02-207.jpg',
        '/optimized-realisations/ravalement-facade-corde-versailles.jpg',
        '/optimized-realisations/travaux-hauteur-maintenance-hlm.jpg',
        '/optimized-realisations/cordiste-monument-historique-paris.jpg',
        '/optimized-realisations/intervention-cordiste-batiment-industriel.jpg',
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
                                MAÇONNERIE <span className="text-primary block">& PURGES DE SÉCURITÉ</span>
                            </h1>
                            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                                Intervention urgente ou planifiée sur vos façades dégradées. Nous sécurisons les éléments menaçants et rénovons durablement le bâti ancien ou moderne.
                            </p>

                            <div className="space-y-6 bg-surface-highlight/5 p-8 rounded-2xl border border-white/5">
                                <h3 className="text-xl font-bold text-white mb-4">Nos Interventions :</h3>
                                <ul className="space-y-3">
                                    {['Purge de balcons et façades (Mise en sécurité)', 'Reprise de fissures et éclats de béton', 'Rejointoiement de pierres et briques', 'Réfection de nez de balcons', 'Application d\'hydrofuge'].map((item) => (
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
                                src="/optimized-realisations/maconnerie-sur-corde-rejointoiement.jpg"
                                alt="Cordiste maçonnerie"
                                fill
                                className="object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                            <div className="absolute bottom-8 left-8">
                                <p className="text-white font-bold text-lg">Paris Centre</p>
                                <p className="text-primary">Rénovation Facade Haussmannienne</p>
                            </div>
                        </div>
                    </div>

                    <InstagramGallery images={galleryImages} />

                    <div className="mt-20 bg-primary rounded-3xl p-12 text-center">
                        <h2 className="text-3xl font-bold text-white mb-4">Une façade fragilisée ?</h2>
                        <p className="text-white/80 mb-8 max-w-2xl mx-auto">N'attendez pas l'accident. Nous intervenons en urgence pour la mise en sécurité.</p>
                        <Link href="/#contact" className="bg-white text-primary px-8 py-4 rounded-full font-bold uppercase tracking-wider hover:bg-black hover:text-white transition-all shadow-xl">
                            Diagnostic & Devis Gratuit
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
