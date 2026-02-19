import type { Metadata } from 'next';
import Navbar from '@/components/Navbar';
import Link from 'next/link';

export const metadata: Metadata = {
    title: 'Vidéos & Interventions | Acces Alternatif',
    description: 'Découvrez nos interventions de cordistes en vidéo : travaux sur cordes, accès difficile, nettoyage et maçonnerie en hauteur.',
    keywords: ['vidéo cordiste', 'travaux hauteur vidéo', 'acces alternatif youtube'],
};

export default function Videos() {
    return (
        <div className="min-h-screen bg-background text-foreground font-sans selection:bg-primary selection:text-white">
            <Navbar />

            <main className="pt-32 pb-16">
                <div className="container-custom mx-auto">
                    <div className="max-w-4xl mx-auto text-center mb-16">
                        <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white uppercase">
                            Nos Interventions <span className="text-primary">en Images</span>
                        </h1>
                        <p className="text-xl text-gray-300">
                            Immersion au cœur de nos chantiers les plus spectaculaires.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-1 gap-12 max-w-5xl mx-auto">
                        {/* Featured Video */}
                        <div className="group relative bg-surface-highlight/5 rounded-3xl overflow-hidden border border-white/10 shadow-2xl">
                            <div className="aspect-video w-full">
                                <iframe
                                    width="100%"
                                    height="100%"
                                    src="https://www.youtube.com/embed/Eaef-CFJXkM?si=rel=0"
                                    title="YouTube video player"
                                    frameBorder="0"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                    referrerPolicy="strict-origin-when-cross-origin"
                                    allowFullScreen
                                    className="w-full h-full"
                                ></iframe>
                            </div>
                            <div className="p-8">
                                <h2 className="text-2xl font-bold text-white mb-4">Intervention Cordiste - Acces Alternatif</h2>
                                <p className="text-gray-400">
                                    Découvrez le professionnalisme et la technicité de nos équipes lors d&apos;une intervention complexe.
                                    Rigueur, sécurité et efficacité sont les maîtres-mots de notre approche du travail en hauteur.
                                </p>
                            </div>
                        </div>

                        {/* Placeholder for more videos */}
                        {/* 
            <div className="grid md:grid-cols-2 gap-8">
               <div className="bg-surface-highlight/5 rounded-2xl p-4 border border-white/5">...</div>
               <div className="bg-surface-highlight/5 rounded-2xl p-4 border border-white/5">...</div>
            </div> 
            */}

                    </div>

                    <div className="text-center mt-16">
                        <Link href="/#contact" className="inline-block bg-primary text-white px-8 py-4 rounded-full font-bold uppercase tracking-wider hover:bg-black transition-all shadow-lg hover:shadow-primary/20">
                            Demander une intervention
                        </Link>
                    </div>

                </div>
            </main>

            <footer className="bg-black border-t border-white/10 py-12">
                <div className="container-custom mx-auto text-center text-sm text-gray-500">
                    <p>© 2026 ACCES ALTERNATIF. Tous droits réservés.</p>
                </div>
            </footer>
        </div>
    );
}
