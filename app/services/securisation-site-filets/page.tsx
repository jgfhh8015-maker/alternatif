import type { Metadata } from 'next';
import Navbar from '@/components/Navbar';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft, CheckCircle2 } from 'lucide-react';
import InstagramGallery from '@/components/InstagramGallery';

export const metadata: Metadata = {
    title: 'Sécurisation de Site & Pose de Filets | Acces Alternatif',
    description: 'Installation de protections collectives et individuelles : filets antichute, lignes de vie, points d\'ancrage. Sécurisation de chantiers BTP.',
    keywords: ['pose filet sécurité', 'ligne de vie toiture', 'point ancrage', 'garde corps provisoire', 'sécurité chantier hauteur'],
};

export default function Securisation() {
    const galleryImages = [
        '/optimized-realisations/securisation-site-filet-antichute.jpg',
        '/optimized-realisations/securisation-site-departement-91-937.jpg',
        '/optimized-realisations/installation-ligne-vie-securite.jpg',
        '/optimized-realisations/pose-filets-departement-02-806.jpg',
        '/optimized-realisations/inspection-toiture-acces-difficile.jpg',
        '/optimized-realisations/ligne-de-vie-departement-60-439.jpg',
        '/optimized-realisations/intervention-cordiste-batiment-industriel.jpg',
        '/optimized-realisations/securisation-site-departement-60-932.jpg',
        '/optimized-realisations/pose-pics-anti-pigeon-cordiste.jpg',
        '/optimized-realisations/expert-travaux-acrobatiques-ile-de-france.jpg',
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
                                SÉCURISATION <span className="text-primary block">DE SITES & BÂTIMENTS</span>
                            </h1>
                            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                                Protégez vos équipes et le public. Nous installons des dispositifs de protection certifiés pour garantir la sécurité de vos zones à risques et chantiers en hauteur.
                            </p>

                            <div className="space-y-6 bg-surface-highlight/5 p-8 rounded-2xl border border-white/5">
                                <h3 className="text-xl font-bold text-white mb-4">Nos Solutions de Protection :</h3>
                                <ul className="space-y-3">
                                    {['Pose de filets de sécurité (antichute & pare-gravats)', 'Installation de lignes de vie (toitures terrasses)', 'Points d\'ancrage normés EN-795', 'Garde-corps définitifs ou provisoires', 'Sécurisation d\'accès (échelles à crinoline)'].map((item) => (
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
                                src="/optimized-realisations/securisation-site-filet-antichute.jpg"
                                alt="Pose de filets de sécurité"
                                fill
                                className="object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                            <div className="absolute bottom-8 left-8">
                                <p className="text-white font-bold text-lg">Chantier BTP</p>
                                <p className="text-primary">Pose de filets sous charpente</p>
                            </div>
                        </div>
                    </div>

                    <InstagramGallery images={galleryImages} />

                    <div className="mt-20 bg-primary rounded-3xl p-12 text-center">
                        <h2 className="text-3xl font-bold text-white mb-4">Votre site est-il aux normes ?</h2>
                        <p className="text-white/80 mb-8 max-w-2xl mx-auto">Nous réalisons l'audit et l'installation de vos équipements de protection.</p>
                        <Link href="/#contact" className="bg-white text-primary px-8 py-4 rounded-full font-bold uppercase tracking-wider hover:bg-black hover:text-white transition-all shadow-xl">
                            Demander un Audit Sécurité
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
