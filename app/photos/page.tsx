import type { Metadata } from 'next';
import Navbar from '@/components/Navbar';
import InstagramGallery from '@/components/InstagramGallery';
import Link from 'next/link';

export const metadata: Metadata = {
    title: 'Galerie Photos & Réalisations | Acces Alternatif',
    description: 'Découvrez nos réalisations en images : travaux sur monuments historiques, maintenance HLM, industrie et nettoyage de vitres.',
    keywords: ['photos cordiste', 'réalisations travaux hauteur', 'chantier monuments historiques', 'maintenance hlm photos'],
};

export default function Photos() {
    // Optimized and SEO-renamed images from realizations
    const images = [
        '/optimized-realisations/cordiste-monument-historique-paris.jpg',
        '/optimized-realisations/nettoyage-haute-pression-departement-75-786.jpg',
        '/optimized-realisations/renovation-patrimoine-departement-78-533.jpg',
        '/optimized-realisations/travaux-hauteur-maintenance-hlm.jpg',
        '/optimized-realisations/securisation-site-filet-antichute.jpg',
        '/optimized-realisations/maconnerie-sur-corde-rejointoiement.jpg',
        '/optimized-realisations/pose-pics-anti-pigeon-cordiste.jpg',
        '/optimized-realisations/intervention-cordiste-batiment-industriel.jpg',
        '/optimized-realisations/pose-bache-evenementiel-hauteur.jpg',
        '/optimized-realisations/toiture-zinc-departement-95-68.jpg',
        '/optimized-realisations/travaux-hauteur-departement-75-468.jpg',
        '/optimized-realisations/securisation-site-departement-91-937.jpg',
        '/optimized-realisations/ravalement-facade-corde-versailles.jpg',

        '/optimized-realisations/ligne-de-vie-departement-60-439.jpg'
    ];

    return (
        <div className="min-h-screen bg-background text-foreground font-sans selection:bg-primary selection:text-white">
            <Navbar />

            <main className="pt-32 pb-16">
                <div className="container-custom mx-auto">
                    <div className="max-w-4xl mx-auto text-center mb-16">
                        <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white uppercase">
                            Nos Réalisations <span className="text-primary">Photos</span>
                        </h1>
                        <p className="text-xl text-gray-300 mb-8">
                            De la restauration de <strong>Monuments Historiques</strong> à la maintenance de parcs <strong>HLM</strong>, en passant par l&apos;industrie.
                        </p>
                    </div>

                    <InstagramGallery images={images} />

                    <div className="text-center mt-16">
                        <p className="text-gray-400 mb-6">Vous avez un projet similaire ?</p>
                        <Link href="/#contact" className="inline-block bg-primary text-white px-8 py-4 rounded-full font-bold uppercase tracking-wider hover:bg-black transition-all shadow-lg hover:shadow-primary/20">
                            Discutons-en
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
