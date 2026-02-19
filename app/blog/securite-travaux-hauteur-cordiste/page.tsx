import Link from 'next/link';
import Image from 'next/image';
import { ArrowLeft, Calendar, User, Clock, ShieldCheck } from 'lucide-react';
import Navbar from '@/components/Navbar';
import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'La Sécurité dans le Monde du Cordiste | Blog Acces Alternatif',
    description: 'Découvrez les normes de sécurité strictes, les équipements de protection individuelle (EPI) et la formation rigoureuse des cordistes pour les travaux en hauteur.',
    keywords: ['securité cordiste', 'travaux hauteur', 'EPI cordiste', 'CQP cordiste', 'réglementation travaux hauteur', 'sécurité chantier'],
};

export default function BlogPost() {
    return (
        <div className="min-h-screen bg-background text-foreground font-sans selection:bg-primary selection:text-white">
            <Navbar />

            <main className="pt-24 pb-16">
                <article className="container-custom mx-auto max-w-4xl">
                    {/* Breadcrumb */}
                    <div className="mb-8">
                        <Link href="/" className="inline-flex items-center text-gray-400 hover:text-primary transition-colors">
                            <ArrowLeft className="w-4 h-4 mr-2" /> Retour à l&apos;accueil
                        </Link>
                    </div>

                    {/* Header */}
                    <header className="mb-12 text-center">
                        <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium mb-4">
                            <ShieldCheck className="w-4 h-4" />
                            <span>Sécurité & Réglementation</span>
                        </div>
                        <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white leading-tight">
                            La Sécurité dans le Monde du Cordiste : Une Priorité Absolue
                        </h1>
                        <div className="flex justify-center items-center gap-6 text-gray-400 text-sm">
                            <div className="flex items-center gap-2">
                                <User className="w-4 h-4" />
                                <span>Par L&apos;Équipe Technique</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <Calendar className="w-4 h-4" />
                                <span>18 Février 2026</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <Clock className="w-4 h-4" />
                                <span>5 min de lecture</span>
                            </div>
                        </div>
                    </header>

                    {/* Featured Image */}
                    <div className="relative h-[400px] w-full mb-12 rounded-2xl overflow-hidden">
                        <Image
                            src="/optimized-realisations/nettoyage-haute-pression-departement-75-786.jpg"
                            alt="Cordiste équipé et sécurisé"
                            fill
                            className="object-cover"
                            priority
                        />
                    </div>

                    {/* Content */}
                    <div className="prose prose-invert prose-lg max-w-none">
                        <p className="lead text-xl text-gray-300 mb-8">
                            Le métier de cordiste fascine par sa hauteur et sa technicité. Mais derrière chaque intervention spectaculaire se cache une rigueur absolue en matière de sécurité. Loin de l&apos;image du cascadeur, le cordiste est un technicien hautement qualifié dont la vie dépend de la maîtrise parfaite de son environnement et de son matériel.
                        </p>

                        <h2 className="text-2xl font-bold text-white mt-12 mb-6">1. La Formation : Le Socle de la Sécurité</h2>
                        <p className="text-gray-400 mb-4">
                            On ne s&apos;improvise pas cordiste. En France, la profession est strictement encadrée. Pour exercer, il est impératif de posséder une certification reconnue telle que le <strong>CQP Cordiste</strong> (Certificat de Qualification Professionnelle) ou le <strong>CATC</strong> (Certificat d&apos;Aptitude aux Travaux sur Cordes).
                        </p>
                        <p className="text-gray-400 mb-4">
                            Ces formations, d&apos;une durée de plusieurs semaines, enseignent :
                        </p>
                        <ul className="list-disc pl-6 mb-6 text-gray-400 space-y-2">
                            <li>L&apos;installation de systèmes d&apos;ancrage fiables.</li>
                            <li>Les techniques de progression sur cordes (descente, remontée, passage de fractionnement).</li>
                            <li>Le secours à une personne en difficulté (évacuation d&apos;un binôme).</li>
                            <li>L&apos;analyse des risques spécifiques à chaque chantier.</li>
                        </ul>

                        <h2 className="text-2xl font-bold text-white mt-12 mb-6">2. L&apos;Équipement de Protection Individuelle (EPI)</h2>
                        <p className="text-gray-400 mb-4">
                            L&apos;équipement du cordiste est sa seconde peau. Il ne s&apos;agit pas seulement d&apos;un harnais, mais d&apos;un système complet et redondant garantissant une sécurité maximale.
                        </p>
                        <div className="grid md:grid-cols-2 gap-8 my-8">
                            <div className="bg-surface-highlight/10 p-6 rounded-xl border border-white/5">
                                <h3 className="text-lg font-bold text-primary mb-2">Le Harnais Intégral</h3>
                                <p className="text-gray-400 text-sm">Confortable et robuste, il dispose de points d&apos;accroche sternaux et dorsaux pour l&apos;antichute, et ventraux pour la suspension.</p>
                            </div>
                            <div className="bg-surface-highlight/10 p-6 rounded-xl border border-white/5">
                                <h3 className="text-lg font-bold text-primary mb-2">Le Système Double Cordes</h3>
                                <p className="text-gray-400 text-sm">Toujours deux cordes : une <strong>corde de travail</strong> pour la suspension et une <strong>corde de sécurité</strong> équipée d&apos;un antichute mobile.</p>
                            </div>
                        </div>

                        <h2 className="text-2xl font-bold text-white mt-12 mb-6">3. La Préparation et l&apos;Analyse des Risques</h2>
                        <p className="text-gray-400 mb-4">
                            Avant même de toucher une corde, une analyse de risque approfondie est réalisée. Chaque chantier fait l&apos;objet d&apos;un <strong>Plan Particulier de Sécurité et de Protection de la Santé (PPSPS)</strong> ou d&apos;un plan de prévention.
                        </p>
                        <p className="text-gray-400 mb-4">
                            Les facteurs analysés incluent :
                        </p>
                        <ul className="list-disc pl-6 mb-6 text-gray-400 space-y-2">
                            <li>La solidité des supports d&apos;ancrage (béton, charpente métallique).</li>
                            <li>La protection des tiers au sol (balisage de zone).</li>
                            <li>Les conditions météorologiques (vent, pluie, orage).</li>
                            <li>La co-activité avec d&apos;autres corps de métier.</li>
                        </ul>

                        <h2 className="text-2xl font-bold text-white mt-12 mb-6">Conclusion</h2>
                        <p className="text-gray-400 mb-6">
                            La sécurité n&apos;est pas une option, c&apos;est l&apos;essence même du métier de cordiste. Chez <strong>Acces Alternatif</strong>, nous appliquons ces standards avec une rigueur militaire pour garantir la sécurité de nos techniciens et la sérénité de nos clients.
                        </p>
                        <div className="bg-primary/10 border border-primary/20 p-6 rounded-xl mt-8">
                            <p className="text-white font-medium text-center">
                                Un projet complexe ? Besoin d&apos;une intervention en hauteur sécurisée ? <br />
                                <Link href="/#contact" className="text-primary hover:underline font-bold mt-2 inline-block">Contactez nos experts dès aujourd&apos;hui.</Link>
                            </p>
                        </div>
                    </div>
                </article>
            </main>

            {/* Footer */}
            <footer className="bg-black border-t border-white/10 py-12">
                <div className="container-custom mx-auto flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
                    <p>© 2026 ACCES ALTERNATIF. Tous droits réservés.</p>
                </div>
            </footer>
        </div>
    );
}
