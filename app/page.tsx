'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  CheckCircle2,
  Zap,
  Award,
  Phone,
  Mail,
  MapPin,
  ArrowRight
} from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import ServicesCarousel from '@/components/ServicesCarousel';
import Navbar from '@/components/Navbar';

export default function Home() {
  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 }
  };



  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: 'Acces Alternatif',
    image: 'https://acces-alternatif.com/logo-acces-alternatif-cordiste.png',
    '@id': 'https://acces-alternatif.com',
    url: 'https://acces-alternatif.com',
    telephone: '0613671878',
    address: {
      '@type': 'PostalAddress',
      streetAddress: '130 rue Clément Ader',
      addressLocality: 'Evreux',
      postalCode: '27000',
      addressCountry: 'FR'
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 49.0241,
      longitude: 1.1508
    },
    openingHoursSpecification: {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: [
        'Monday',
        'Tuesday',
        'Wednesday',
        'Thursday',
        'Friday',
        'Saturday'
      ],
      opens: '08:00',
      closes: '19:00'
    },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '5',
      reviewCount: '62'
    },
    priceRange: '€€'
  };

  const heroImages = [
    '/optimized-realisations/ligne-de-vie-departement-60-439.jpg',
    '/optimized-realisations/nettoyage-haute-pression-departement-75-786.jpg',
    '/optimized-realisations/renovation-patrimoine-departement-78-533.jpg',
    '/optimized-realisations/securisation-site-filet-antichute.jpg',
  ];

  const [currentHeroIndex, setCurrentHeroIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentHeroIndex((prev) => (prev + 1) % heroImages.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [heroImages.length]);

  return (
    <div className="min-h-screen bg-background text-foreground font-sans selection:bg-primary selection:text-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Navbar />

      {/* Hero Section */}
      <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden bg-black">
        <div className="absolute inset-0 z-0">
          <AnimatePresence mode="popLayout">
            <motion.div
              key={currentHeroIndex}
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.5 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1.5 }}
              className="absolute inset-0"
            >
              <Image
                src={heroImages[currentHeroIndex]}
                alt="Cordiste en intervention"
                fill
                className="object-cover"
                priority
              />
            </motion.div>
          </AnimatePresence>
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-background/90 z-10" />
        </div>

        <div className="container-custom relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-6xl md:text-8xl lg:text-9xl font-black tracking-tighter mb-6 text-white text-shadow leading-none">
              ACCES <span className="text-primary block md:inline">ALTERNATIF</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto mb-4 font-light tracking-wide">
              TRAVAUX SUR CORDES & D&apos;ACCÈS DIFFICILE
            </p>
            <div className="inline-block bg-orange-600 text-white px-6 py-2 rounded-lg font-bold tracking-widest mb-10 shadow-lg">
              URGENCE 7/7 • 20 ANS D&apos;EXPÉRIENCE
            </div>
            <div className="flex flex-col items-center mb-10">
              <span className="text-xl md:text-2xl font-bold text-white mb-3">POUR TOUTE URGENCE :</span>
              <a
                href="tel:0613671878"
                className="bg-yellow-400 text-black text-2xl md:text-3xl font-black px-6 py-2 rounded-xl hover:bg-yellow-300 transition-colors shadow-lg transform hover:scale-105"
              >
                06 13 67 18 78
              </a>
            </div>
            <div className="flex flex-col md:flex-row gap-4 justify-center items-center">
              <a
                href="#contact"
                className="bg-primary text-white px-8 py-4 rounded-full font-bold uppercase tracking-wider hover:bg-red-600 transition-all transform hover:scale-105 shadow-lg shadow-primary/20"
              >
                Demander un devis
              </a>
              <a
                href="#services"
                className="px-8 py-4 rounded-full border border-white/20 hover:bg-white/10 text-white font-medium uppercase tracking-wider transition-all backdrop-blur-sm"
              >
                Découvrir nos services
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 bg-surface-highlight/5 relative">
        <div className="container-custom mx-auto grid md:grid-cols-2 gap-16 items-center">
          <motion.div {...fadeInUp}>
            <h2 className="text-sm font-bold text-primary uppercase tracking-widest mb-2">À Propos</h2>
            <h3 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">L&apos;ÉQUILIBRE <br />ENTRE DEUX MONDES</h3>
            <div className="space-y-4 text-gray-400 text-lg leading-relaxed mb-6">
              <p>
                Alex, 47 ans. Mon parcours est né d&apos;une double passion : la rigueur du <strong>BTP</strong> et la liberté du <strong>parapente</strong>.
              </p>
              <p>
                Après des années à construire au sol et autant à voler dans les airs, j&apos;ai investi toute mon énergie dans le trait d&apos;union parfait entre ces deux univers : <strong>la corde</strong>.
              </p>
              <p>
                Aujourd&apos;hui, avec plus de 10 ans d&apos;expérience, je dirige des équipes de techniciens diplômés d&apos;état <strong>(CQP & IRATA)</strong>. Nous apportons cette expertise unique d&apos;aisance verticale et de savoir-faire technique sur vos chantiers les plus complexes.
              </p>
            </div>
            <ul className="space-y-4 mb-8">
              {['Intervention Urgence 7/7', 'Spécialiste Monuments Historiques', 'Maintenance Parc HLM & Copropriétés', 'Techniciens CQP & IRATA', 'Spécialiste Yvelines (78), Essonne (91), Paris (75)'].map((item) => (
                <li key={item} className="flex items-center space-x-3 text-gray-300">
                  <CheckCircle2 className="w-5 h-5 text-primary" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <a href="#contact" className="text-white hover:text-primary font-medium inline-flex items-center transition-colors group">
              En savoir plus <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative h-[600px] rounded-2xl overflow-hidden shadow-2xl"
          >
            <Image
              src="/equipe/alex-gerant-acces-alternatif-cordiste-78.jpg"
              alt="Travaux en hauteur"
              fill
              className="object-cover hover:scale-110 transition-transform duration-700"
            />
          </motion.div>
        </div>
      </section>

      {/* Team Section */}
      <section id="team" className="py-24 bg-background relative">
        <div className="container-custom mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-sm font-bold text-primary uppercase tracking-widest mb-2">Notre Équipe</h2>
            <h3 className="text-3xl md:text-4xl font-bold mb-4">EXPERTISE & COMPLÉMENTARITÉ</h3>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Des profils experts et passionnés pour mener à bien tous vos projets.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-12 justify-items-center">
            {[
              {
                name: 'Alex',
                role: 'Président Directeur Général',
                image: '/equipe/Alex2.png',
                bio: "Cordiste aguerri et patron d'Acces Alternatif, il garantit l'excellence opérationnelle de chaque intervention.",
                objectPosition: '50% 00%',
                scale: 1.6
              },
              {
                name: 'Léo',
                role: 'Conducteur de Travaux',
                image: '/equipe/Leo.jpg',
                bio: "Expert en travaux d'accès difficile dans les Yvelines (78), Léo assure la conduite de vos chantiers avec sécurité et rigueur.",
                objectPosition: 'center',
                scale: 1
              },
              {
                name: 'Marie',
                role: 'Secrétaire Administrative',
                image: '/equipe/marie.png',
                bio: "Interlocutrice privilégiée, Marie assure une gestion fluide et réactive de tous vos dossiers administratifs.",
                objectPosition: 'center',
                scale: 1
              }
            ].map((member, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.2, duration: 0.6 }}
                className="flex flex-col items-center text-center max-w-sm"
              >
                <div className="relative w-32 h-32 mb-6 rounded-full overflow-hidden border-4 border-primary/20 shadow-xl group hover:border-primary transition-colors duration-300">
                  <Image
                    src={member.image}
                    alt={`${member.name} - ${member.role}`}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                    style={{
                      objectPosition: member.objectPosition,
                      transform: `scale(${member.scale})`
                    }}
                  />
                </div>
                <h4 className="text-xl font-bold text-white mb-2">{member.name}</h4>
                <p className="text-primary font-medium text-sm uppercase tracking-wider mb-4">{member.role}</p>
                <p className="text-gray-400 text-sm leading-relaxed">
                  {member.bio}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 bg-surface relative">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-primary/5 blur-3xl pointer-events-none" />
        <div className="container-custom mx-auto">
          <motion.div className="text-center mb-16" {...fadeInUp}>
            <h2 className="text-sm font-bold text-primary uppercase tracking-widest mb-2">Nos Activités</h2>
            <h3 className="text-4xl md:text-5xl font-bold mb-4">4 DOMAINES D&apos;EXPERTISE</h3>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Une solution adaptée à chaque contrainte architecturale ou industrielle.
            </p>
          </motion.div>

          <motion.div
            variants={fadeInUp}
            initial="initial"
            whileInView="whileInView"
          >
            <ServicesCarousel />
          </motion.div>
        </div>
      </section>

      {/* Atouts Section */}
      <section id="features" className="py-24 bg-background">
        <div className="container-custom mx-auto">
          <div className="grid md:grid-cols-3 gap-12 text-center divide-y md:divide-y-0 md:divide-x divide-white/10">
            {[
              { icon: CheckCircle2, title: 'MÉTHODOLOGIE', desc: 'Une approche rigoureuse pour chaque chantier.' },
              { icon: Zap, title: 'RÉACTIVITÉ', desc: 'Intervention rapide en cas d\'urgence 7j/7.' },
              { icon: Award, title: 'QUALITÉ', desc: 'Des prestations haut de gamme certifiées.' }
            ].map((feature, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.2 }}
                className="px-4 py-8"
              >
                <feature.icon className="w-12 h-12 mx-auto mb-6 text-primary" />
                <h4 className="text-xl font-bold mb-3 tracking-widest">{feature.title}</h4>
                <p className="text-gray-400">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust Section - Partners */}
      <section id="trust" className="py-20 bg-white/5 border-y border-white/5 overflow-hidden">
        <div className="container-custom mx-auto mb-12 text-center">
          <h3 className="text-sm font-bold text-primary uppercase tracking-widest mb-2">Partenaires</h3>
          <h4 className="text-3xl font-bold">ILS NOUS FONT CONFIANCE</h4>
        </div>

        {/* Marquee effect for logos */}
        {/* Marquee effect for logos */}
        <div className="relative flex overflow-x-hidden group">
          <div className="flex space-x-16 items-center animate-marquee whitespace-nowrap">
            {[
              { name: 'VINCI', logo: '/partners/vinci.svg' },
              { name: 'BOUYGUES', logo: '/partners/bouygues.svg' },
              { name: 'ADP', logo: '/partners/adp.svg' },
              { name: 'PARIS HABITAT', logo: '/partners/paris-habitat.svg' },
              { name: 'VERSAILLES', logo: '/partners/versailles.svg' },
              { name: 'EIFFAGE', logo: '/partners/eiffage.svg' },
              { name: 'SNCF', logo: '/partners/sncf.svg' },
              { name: 'RATP', logo: '/partners/ratp.svg' },
              { name: 'ENGIE', logo: '/partners/engie.svg' },
              { name: 'TOTALENERGIES', logo: '/partners/total.svg' }
            ].map((partner, i) => (
              <div key={i} className="relative w-32 h-16 opacity-50 hover:opacity-100 transition-opacity grayscale hover:grayscale-0">
                <Image
                  src={partner.logo}
                  alt={`${partner.name} logo`}
                  fill
                  className="object-contain"
                />
              </div>
            ))}
            {/* Duplicate for seamless loop */}
            {[
              { name: 'VINCI', logo: '/partners/vinci.svg' },
              { name: 'BOUYGUES', logo: '/partners/bouygues.svg' },
              { name: 'ADP', logo: '/partners/adp.svg' },
              { name: 'PARIS HABITAT', logo: '/partners/paris-habitat.svg' },
              { name: 'VERSAILLES', logo: '/partners/versailles.svg' },
              { name: 'EIFFAGE', logo: '/partners/eiffage.svg' },
              { name: 'SNCF', logo: '/partners/sncf.svg' },
              { name: 'RATP', logo: '/partners/ratp.svg' },
              { name: 'ENGIE', logo: '/partners/engie.svg' },
              { name: 'TOTALENERGIES', logo: '/partners/total.svg' }
            ].map((partner, i) => (
              <div key={`dup-${i}`} className="relative w-32 h-16 opacity-50 hover:opacity-100 transition-opacity grayscale hover:grayscale-0">
                <Image
                  src={partner.logo}
                  alt={`${partner.name} logo`}
                  fill
                  className="object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section id="reviews" className="py-24 bg-surface text-center">
        <div className="container-custom mx-auto">
          <div className="flex flex-col items-center mb-16">
            <div className="flex items-center space-x-1 mb-4">
              {[1, 2, 3, 4, 5].map(star => <span key={star} className="text-yellow-500 text-2xl">★</span>)}
            </div>
            <h3 className="text-4xl font-bold mb-2">EXCELLENCE RECONNUE</h3>
            <p className="text-gray-400 text-lg">Plus de <span className="text-white font-bold">60 avis 5/5</span> sur Google</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 text-left">
            {[
              { name: 'Jean-Pierre L.', role: 'Syndic de Copropriété', text: "Une intervention rapide et impeccable sur une façade difficile d'accès. L'équipe est très professionnelle." },
              { name: 'Sophie M.', role: 'Architecte', text: "Acces Alternatif a su trouver une solution technique là où d'autres avaient échoué. Je recommande vivement." },
              { name: 'Marc D.', role: 'Directeur Technique', text: "Sécurité irréprochable et respect des délais. Un partenaire de confiance pour nos sites industriels." }
            ].map((review, i) => (
              <div key={i} className="bg-surface-highlight/10 p-8 rounded-2xl border border-white/5 relative">
                <div className="absolute top-8 right-8 text-primary/20">
                  <svg width="40" height="40" viewBox="0 0 24 24" fill="currentColor"><path d="M14.017 21L14.017 18C14.017 16.896 14.321 16.067 14.929 15.513C15.536 14.959 16.634 14.682 18.223 14.682L18.777 14.682L18.777 10.054L18.223 10.054C16.829 10.054 15.939 9.695 15.553 8.976C15.166 8.257 14.973 7.027 14.973 5.284L14.973 3L19.983 3L19.983 5.204C19.983 6.904 19.825 8.01 19.509 8.522C19.193 9.034 18.665 9.29 17.925 9.29L17.705 9.29C17.073 9.29 16.757 9.619 16.757 10.278L16.757 10.592L17.202 10.592C18.681 10.592 19.78 11.025 20.499 11.89C21.218 12.755 21.577 14.085 21.577 15.88L21.577 21L14.017 21ZM5.01697 21L5.01697 18C5.01697 16.896 5.32097 16.067 5.92897 15.513C6.53697 14.959 7.63397 14.682 9.22297 14.682L9.77697 14.682L9.77697 10.054L9.22297 10.054C7.82897 10.054 6.93897 9.695 6.55297 8.976C6.16697 8.257 5.97397 7.027 5.97397 5.284L5.97397 3L10.984 3L10.984 5.204C10.984 6.904 10.826 8.01 10.51 8.522C10.194 9.034 9.66597 9.29 8.92597 9.29L8.70597 9.29C8.07397 9.29 7.75797 9.619 7.75797 10.278L7.75797 10.592L8.20297 10.592C9.68197 10.592 10.781 11.025 11.5 11.89C12.219 12.755 12.578 14.085 12.578 15.88L12.578 21L5.01697 21Z" /></svg>
                </div>
                <p className="text-gray-300 italic mb-6 relative z-10">&quot;{review.text}&quot;</p>
                <div>
                  <h5 className="font-bold text-white">{review.name}</h5>
                  <span className="text-sm text-primary">{review.role}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Teaser Section */}
      <section id="journal" className="py-24 bg-background border-t border-white/5">
        <div className="container-custom mx-auto">
          <div className="flex justify-between items-end mb-12">
            <div>
              <h3 className="text-sm font-bold text-primary uppercase tracking-widest mb-2">Le Journal</h3>
              <h4 className="text-4xl font-bold">DERNIÈRES ACTUALITÉS</h4>
            </div>
            <Link href="/blog" className="hidden md:flex items-center text-white hover:text-primary transition-colors font-medium">
              Voir tous les articles <ArrowRight className="ml-2 w-4 h-4" />
            </Link>
          </div>

          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="relative h-[400px] rounded-2xl overflow-hidden group">
              <Image
                src="/optimized-realisations/pose-pics-anti-pigeon-cordiste.jpg"
                alt="Sécurité Cordiste"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
              <div className="absolute bottom-8 left-8 right-8">
                <span className="bg-primary text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider mb-4 inline-block">Sécurité</span>
                <h3 className="text-2xl font-bold text-white mb-2">La Sécurité dans le Monde du Cordiste</h3>
                <p className="text-gray-300 line-clamp-2 mb-4">Découvrez les normes strictes et la formation rigoureuse derrière nos interventions.</p>
                <Link href="/blog/securite-travaux-hauteur-cordiste" className="inline-flex items-center text-white hover:text-primary font-bold">
                  Lire l&apos;article <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </div>
            </div>
            <div>
              <h5 className="text-xl font-bold mb-6 text-gray-400">Pourquoi nous suivre ?</h5>
              <ul className="space-y-6">
                {[
                  { title: "Réglementation à jour", desc: "Soyez informés des dernières normes de sécurité." },
                  { title: "Techniques Innovantes", desc: "Découverte des nouvelles méthodes d'accès difficile." },
                  { title: "Vie de Chantier", desc: "Immersion dans nos interventions les plus spectaculaires." }
                ].map((item, i) => (
                  <li key={i} className="flex start space-x-4">
                    <div className="w-12 h-12 rounded-full bg-surface-highlight/10 flex items-center justify-center text-primary shrink-0">
                      <CheckCircle2 className="w-5 h-5" />
                    </div>
                    <div>
                      <h6 className="font-bold text-white text-lg">{item.title}</h6>
                      <p className="text-gray-400">{item.desc}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 bg-surface relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1533630654593-b222d5d44449?q=80&w=1974&auto=format&fit=crop')] bg-cover bg-center opacity-5" />
        <div className="container-custom mx-auto relative z-10">
          <div className="bg-black/80 backdrop-blur-xl rounded-3xl p-8 md:p-16 border border-white/10 shadow-2xl max-w-5xl mx-auto">
            <div className="grid md:grid-cols-2 gap-16">
              <div>
                <h2 className="text-primary font-bold uppercase tracking-widest mb-2">Contactez-nous</h2>
                <h3 className="text-4xl font-bold mb-8">PARLEZ-NOUS DE <br />VOTRE PROJET</h3>
                <p className="text-gray-400 mb-8">
                  Besoin d&apos;un devis ou d&apos;une information ? Remplissez le formulaire ou appelez-nous directement.
                </p>

                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <MapPin className="w-6 h-6 text-primary mt-1" />
                    <div>
                      <h5 className="font-bold text-white">Adresse</h5>
                      <p className="text-gray-400">130 rue Clément Ader, 27000 Evreux</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <Phone className="w-6 h-6 text-primary mt-1" />
                    <div>
                      <h5 className="font-bold text-white">Téléphone</h5>
                      <p className="text-gray-400">06 13 67 18 78</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <Mail className="w-6 h-6 text-primary mt-1" />
                    <div>
                      <h5 className="font-bold text-white">Email</h5>
                      <a href="mailto:contact@acces-alternatif.com" className="text-gray-400 hover:text-primary transition-colors">contact@acces-alternatif.com</a>
                    </div>
                  </div>
                </div>
              </div>

              <form className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <input type="text" placeholder="Nom" className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all" />
                  <input type="text" placeholder="Prénom" className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all" />
                </div>
                <input type="email" placeholder="Email" className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all" />
                <input type="tel" placeholder="Téléphone" className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all" />
                <textarea rows={4} placeholder="Votre message" className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all"></textarea>
                <button type="submit" className="w-full bg-primary hover:bg-red-600 text-white font-bold py-4 rounded-lg uppercase tracking-wider transition-all shadow-lg shadow-primary/20">
                  Envoyer le message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black border-t border-white/10 py-12">
        <div className="container-custom mx-auto flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
          <div className="flex flex-col items-center md:items-start mb-4 md:mb-0">
            <Link href="/" className="relative h-12 w-32 mb-4 block opacity-60 hover:opacity-100 transition-opacity">
              <Image
                src="/logo-acces-alternatif-cordiste.png"
                alt="Acces Alternatif Logo"
                fill
                className="object-contain object-left"
              />
            </Link>
            <p className="mb-1">© 2026 ACCES ALTERNATIF. Tous droits réservés.</p>
            <p>SIREN : 833 017 700 00018</p>
          </div>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link href="/cgv" className="hover:text-white transition-colors">CGV / Mentions Légales</Link>
            <a href="#" className="hover:text-white transition-colors">Politique de Confidentialité</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
