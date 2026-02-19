import type { Metadata } from 'next';
import Navbar from '@/components/Navbar';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft, CheckCircle2 } from 'lucide-react';
import InstagramGallery from '@/components/InstagramGallery';

export const metadata: Metadata = {
    title: 'Rénovation Patrimoine & Monuments Historiques (78 / 27) | Acces Alternatif',
    description: 'Expertise cordiste pour la restauration de bâtiments anciens et monuments historiques. Intervention sur Versailles, Saint-Germain-en-Laye et Évreux.',
    keywords: ['ravalement versailles', 'cordiste monument historique', 'toiture evreux', 'rénovation patrimoine 78', 'nettoyage église'],
};

export default function Patrimoine() {
    const galleryImages = [
        '/optimized-realisations/cordiste-monument-historique-paris.jpg',
        '/optimized-realisations/renovation-patrimoine-departement-78-533.jpg',
        '/optimized-realisations/ravalement-facade-corde-versailles.jpg',
        '/optimized-realisations/maconnerie-sur-corde-rejointoiement.jpg',
        '/optimized-realisations/toiture-zinc-departement-95-68.jpg',
        '/optimized-realisations/inspection-toiture-acces-difficile.jpg',
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
                                PATRIMOINE <span className="text-primary block">& BÂTI ANCIEN</span>
                            </h1>
                            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                                Interventions délicates sur bâtiments classés et monuments historiques dans les Yvelines (78) et l&apos;Eure (27). Nous allions techniques alpines et respect des matériaux anciens.
                            </p>

                            <div className="space-y-6 bg-surface-highlight/5 p-8 rounded-2xl border border-white/5">
                                <h3 className="text-xl font-bold text-white mb-4">Nos Spécialités :</h3>
                                <ul className="space-y-3">
                                    {['Dévégétalisation respectueuse des pierres', 'Rejointoiement à la chaux', 'Inspection de toitures d\'églises et châteaux', 'Mise en sécurité de gargouilles et corniches', 'Intervention sur Versailles & Évreux'].map((item) => (
                                        <li key={item} className="flex items-center space-x-3 text-gray-300">
                                            <CheckCircle2 className="w-5 h-5 text-primary shrink-0" />
                                            <span>{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>

                        <div className="relative h-[600px] rounded-2xl overflow-hidden shadow-2xl">
                            <Image
                                src="/optimized-realisations/cordiste-monument-historique-paris.jpg"
                                alt="Rénovation monument historique"
                                fill
                                className="object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                            <div className="absolute bottom-8 left-8">
                                <p className="text-white font-bold text-lg">Versailles (78)</p>
                                <p className="text-primary">Restauration de Toiture</p>
                            </div>
                        </div>
                    </div>

                    <InstagramGallery images={galleryImages} />

                    <div className="mt-20 bg-primary rounded-3xl p-12 text-center">
                        <h2 className="text-3xl font-bold text-white mb-4">Un projet patrimonial ?</h2>
                        <p className="text-white/80 mb-8 max-w-2xl mx-auto">Nos techniciens sont formés aux spécificités du bâti ancien.</p>
                        <Link href="/#contact" className="bg-white text-primary px-8 py-4 rounded-full font-bold uppercase tracking-wider hover:bg-black hover:text-white transition-all shadow-xl">
                            Devis Restauration
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
