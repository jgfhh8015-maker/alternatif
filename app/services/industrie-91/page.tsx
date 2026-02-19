import type { Metadata } from 'next';
import Navbar from '@/components/Navbar';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft, CheckCircle2 } from 'lucide-react';
import InstagramGallery from '@/components/InstagramGallery';

export const metadata: Metadata = {
    title: 'Maintenance Industrielle & HLM (91) | Acces Alternatif',
    description: 'Solutions d\'accès difficile pour l\'industrie et les parcs immobiliers en Essonne. Nettoyage silos, pose de filets, maintenance HLM.',
    keywords: ['cordiste 91', 'maintenance industrielle essonne', 'nettoyage silo', 'maintenance hlm evry', 'travaux hauteur industrie'],
};

export default function Industrie() {
    const galleryImages = [
        '/optimized-realisations/intervention-cordiste-batiment-industriel.jpg',
        '/optimized-realisations/travaux-hauteur-maintenance-hlm.jpg',
        '/optimized-realisations/securisation-site-filet-antichute.jpg',
        '/optimized-realisations/nettoyage-haute-pression-facade.jpg',
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
                                INDUSTRIE (91) <span className="text-primary block">& GRANDS ENSEMBLES</span>
                            </h1>
                            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                                Une réponse opérationnelle aux besoins de maintenance des sites industriels et parcs sociaux (HLM) en Essonne et sud Île-de-France.
                            </p>

                            <div className="space-y-6 bg-surface-highlight/5 p-8 rounded-2xl border border-white/5">
                                <h3 className="text-xl font-bold text-white mb-4">Nos Interventions Techniques :</h3>
                                <ul className="space-y-3">
                                    {['Nettoyage de silos et structures métalliques', 'Pose de filets anti-pigeons sur HLM', 'Recherche de fuites sur bardages industriels', 'Maintenance de vitrerie inaccessible', 'Zones d\'activités : Évry, Massy, Les Ulis'].map((item) => (
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
                                src="/optimized-realisations/intervention-cordiste-batiment-industriel.jpg"
                                alt="Maintenance industrielle cordiste"
                                fill
                                className="object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                            <div className="absolute bottom-8 left-8">
                                <p className="text-white font-bold text-lg">Essonne (91)</p>
                                <p className="text-primary">Maintenance Site Industriel</p>
                            </div>
                        </div>
                    </div>

                    <InstagramGallery images={galleryImages} />

                    <div className="mt-20 bg-primary rounded-3xl p-12 text-center">
                        <h2 className="text-3xl font-bold text-white mb-4">Besoin d&apos;un contrat de maintenance ?</h2>
                        <p className="text-white/80 mb-8 max-w-2xl mx-auto">Nous intervenons sur site sécurisé avec toutes les habilitations requises.</p>
                        <Link href="/#contact" className="bg-white text-primary px-8 py-4 rounded-full font-bold uppercase tracking-wider hover:bg-black hover:text-white transition-all shadow-xl">
                            Contacter le Pôle Industrie
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
