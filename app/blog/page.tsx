import Link from 'next/link';
import Image from 'next/image';
import { ShieldCheck, ArrowRight, Home } from 'lucide-react';
import Navbar from '@/components/Navbar';
import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Blog - Actualités et Conseils Travaux sur Cordes | Acces Alternatif',
    description: 'Retrouvez nos articles sur la sécurité cordiste, les travaux en hauteur, techniques d\'accès difficile, et l\'actualité du BTP en Île-de-France.',
    keywords: ['blog cordiste', 'actualité travaux hauteur', 'sécurité chantier', 'cordiste paris', 'conseils BTP'],
};

export default function BlogIndex() {
    const posts = [
        {
            slug: 'securite-travaux-hauteur-cordiste',
            title: 'La Sécurité dans le Monde du Cordiste',
            excerpt: 'Une plongée au cœur des normes strictes, des EPI et de la formation qui garantissent la sécurité de nos interventions.',
            date: '18 Fév 2026',
            readTime: '5 min',
            category: 'Sécurité',
            image: 'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=2070&auto=format&fit=crop'
        }
    ];

    return (
        <div className="min-h-screen bg-background text-foreground font-sans selection:bg-primary selection:text-white">
            <Navbar />

            <main className="pt-32 pb-24">
                <div className="container-custom mx-auto">
                    {/* Header */}
                    <div className="text-center mb-16">
                        <h1 className="text-4xl md:text-6xl font-bold mb-4">LE JOURNAL <span className="text-primary">VERTICAL</span></h1>
                        <p className="text-gray-400 max-w-2xl mx-auto text-lg">
                            Actualités, techniques et retours d'expérience sur les travaux d'accès difficile.
                        </p>
                    </div>

                    {/* Grid */}
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {posts.map((post) => (
                            <article key={post.slug} className="group bg-surface-highlight/5 border border-white/5 rounded-2xl overflow-hidden hover:border-primary/30 transition-all duration-300">
                                <Link href={`/blog/${post.slug}`} className="block h-full">
                                    <div className="relative h-64 overflow-hidden">
                                        <Image
                                            src={post.image}
                                            alt={post.title}
                                            fill
                                            className="object-cover group-hover:scale-110 transition-transform duration-700"
                                        />
                                        <div className="absolute top-4 left-4 bg-primary text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                                            {post.category}
                                        </div>
                                    </div>
                                    <div className="p-8">
                                        <div className="flex items-center text-sm text-gray-500 mb-4 space-x-4">
                                            <span>{post.date}</span>
                                            <span className="w-1 h-1 bg-gray-600 rounded-full"></span>
                                            <span>{post.readTime}</span>
                                        </div>
                                        <h2 className="text-xl font-bold mb-4 group-hover:text-primary transition-colors line-clamp-2">
                                            {post.title}
                                        </h2>
                                        <p className="text-gray-400 text-sm mb-6 line-clamp-3 leading-relaxed">
                                            {post.excerpt}
                                        </p>
                                        <div className="flex items-center text-primary font-bold text-sm uppercase tracking-wider group-hover:translate-x-2 transition-transform">
                                            Lire l'article <ArrowRight className="ml-2 w-4 h-4" />
                                        </div>
                                    </div>
                                </Link>
                            </article>
                        ))}
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
