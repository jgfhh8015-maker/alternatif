import type { Metadata } from 'next';
import Navbar from '@/components/Navbar';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft, CheckCircle2 } from 'lucide-react';
import InstagramGallery from '@/components/InstagramGallery';

export const metadata: Metadata = {
    title: 'Urgences & Accès Difficiles Paris (75) | Acces Alternatif',
    description: 'Intervention cordiste en milieu dense à Paris. Cours intérieures, puits de lumière, mise en sécurité urgente de façades.',
    keywords: ['cordiste paris', 'urgence façade 75', 'travaux cour intérieure', 'accès difficile paris', 'purge danger paris'],
};

export default function Paris() {
    const galleryImages = [
        '/optimized-realisations/purge-facade-urgence-78-91.jpg',
        '/optimized-realisations/nettoyage-haute-pression-departement-75-786.jpg',
        '/optimized-realisations/nettoyage-vitres-acces-difficile.jpg',
        '/optimized-realisations/travaux-hauteur-departement-75-468.jpg',
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
                                PARIS (75) <span className="text-primary block">& ACCÈS EXIGU</span>
                            </h1>
                            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                                L'expertise du travail sur corde adaptée à la densité parisienne. Nous intervenons là où les nacelles et échafaudages ne passent pas.
                            </p>

                            <div className="space-y-6 bg-surface-highlight/5 p-8 rounded-2xl border border-white/5">
                                <h3 className="text-xl font-bold text-white mb-4">Notre Force à Paris :</h3>
                                <ul className="space-y-3">
                                    {['Intervention en cours intérieures et puits de lumière', 'Mise en sécurité urgente (purge d\'éléments menaçants)', 'Travaux sur toitures en zinc', 'Pose depics anti-pigeons discrets', 'Rapidité de déploiement (Moto-Cordiste)'].map((item) => (
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
                                src="/optimized-realisations/purge-facade-urgence-78-91.jpg"
                                alt="Intervention cordiste Paris"
                                fill
                                className="object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                            <div className="absolute bottom-8 left-8">
                                <p className="text-white font-bold text-lg">Paris Centre (75)</p>
                                <p className="text-primary">Mise en sécurité sur cour</p>
                            </div>
                        </div>
                    </div>

                    <InstagramGallery images={galleryImages} />

                    <div className="mt-20 bg-primary rounded-3xl p-12 text-center">
                        <h2 className="text-3xl font-bold text-white mb-4">Urgence à Paris ?</h2>
                        <p className="text-white/80 mb-8 max-w-2xl mx-auto">Nos équipes sont prêtes à intervenir en 24/48h pour sécuriser vos bâtiments.</p>
                        <Link href="/#contact" className="bg-white text-primary px-8 py-4 rounded-full font-bold uppercase tracking-wider hover:bg-black hover:text-white transition-all shadow-xl">
                            Intervention Express
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
