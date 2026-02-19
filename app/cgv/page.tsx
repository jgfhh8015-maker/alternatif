import type { Metadata } from 'next';
import Navbar from '@/components/Navbar';
import Link from 'next/link';
import Image from 'next/image';

export const metadata: Metadata = {
    title: 'Conditions Générales de Vente (CGV) | Acces Alternatif',
    description: 'Consultez les conditions générales de vente (CGV) de la société Acces Alternatif, spécialiste des travaux sur cordes et d\'accès difficile.',
    robots: {
        index: false,
        follow: true,
    }
};

export default function CGV() {
    return (
        <div className="min-h-screen bg-background text-foreground font-sans selection:bg-primary selection:text-white">
            <Navbar />

            <main className="pt-32 pb-16">
                <div className="container-custom mx-auto">
                    <div className="max-w-4xl mx-auto mb-16">
                        <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white uppercase text-center">
                            Conditions Générales de Vente <span className="text-primary">(CGV)</span>
                        </h1>
                        <p className="text-center text-gray-400 mb-12">
                            En vigueur au 01/01/2026
                        </p>

                        <div className="prose prose-invert max-w-none text-gray-300">
                            <section className="mb-8">
                                <h2 className="text-2xl font-bold text-white mb-4">1. Préambule et Identification</h2>
                                <p>
                                    Les présentes Conditions Générales de Vente (CGV) régissent les relations contractuelles entre la société **ACCES ALTERNATIF** et ses clients.<br />
                                    Elles s&apos;appliquent à toutes les prestations de travaux sur cordes, travaux en hauteur, nettoyage et maintenance proposées par la société.
                                </p>
                                <ul className="list-disc pl-6 space-y-2 mt-4">
                                    <li><strong>Dénomination sociale :</strong> ACCES ALTERNATIF</li>
                                    <li><strong>Forme juridique :</strong> SASU (Société par actions simplifiée à associé unique)</li>
                                    <li><strong>Siège social :</strong> 130 rue Clément Ader, 27000 Evreux</li>
                                    <li><strong>SIREN :</strong> 833 017 700</li>
                                    <li><strong>SIRET :</strong> 833 017 700 00018</li>
                                    <li><strong>Numéro TVA Intracommunautaire :</strong> FR38833017700</li>
                                    <li><strong>Activité (Code NAF/APE) :</strong> Travaux de maçonnerie générale et gros œuvre de bâtiment (4399C)</li>
                                    <li><strong>Gérant et associé :</strong> M. Alexandre Heux</li>
                                    <li><strong>Téléphone :</strong> 06 13 67 18 78</li>
                                    <li><strong>Email :</strong> contact@acces-alternatif.com</li>
                                </ul>
                            </section>

                            <section className="mb-8">
                                <h2 className="text-2xl font-bold text-white mb-4">2. Objet et Champ d&apos;application</h2>
                                <p>
                                    Toute commande de travaux ou de prestations de services implique l&apos;acceptation sans réserve par le client (ci-après le &quot;Client&quot;) et son adhésion pleine et entière aux présentes CGV, qui prévalent sur tout autre document du Client, et notamment sur toutes conditions générales d&apos;achat, sauf accord dérogatoire exprès et préalable d&apos;ACCES ALTERNATIF.
                                </p>
                            </section>

                            <section className="mb-8">
                                <h2 className="text-2xl font-bold text-white mb-4">3. Devis et Commandes</h2>
                                <p>
                                    Nos prestations donnent lieu à l&apos;établissement préalable d&apos;un devis gratuit, valable pour une durée de **30 jours** à compter de sa date d&apos;émission, sauf stipulation contraire.
                                </p>
                                <p className="mt-2">
                                    La commande est considérée comme définitivement acceptée dès la réception par ACCES ALTERNATIF du devis daté et signé par le Client, revêtu de la mention &quot;Bon pour accord&quot; et du cachet commercial (pour les professionnels), accompagné le cas échéant de l&apos;acompte demandé.
                                </p>
                            </section>

                            <section className="mb-8">
                                <h2 className="text-2xl font-bold text-white mb-4">4. Prix et Modalités de Paiement</h2>
                                <p>
                                    Les prix sont libellés en euros (€) et calculés hors taxes (HT). Ils seront majorés du taux de TVA en vigueur au jour de la facturation.
                                </p>
                                <ul className="list-disc pl-6 space-y-2 mt-4">
                                    <li>
                                        <strong>Paiement :</strong> Sauf convention contraire, les factures sont payables à 30 jours date de facture par virement bancaire ou chèque.
                                    </li>
                                    <li>
                                        <strong>Acomptes :</strong> Un acompte de 30% à 50% peut être exigé à la commande, selon la nature et l&apos;importance du chantier.
                                    </li>
                                    <li>
                                        <strong>Retard de paiement :</strong> En cas de retard de paiement, des pénalités de retard égales à 3 fois le taux d&apos;intérêt légal seront exigibles de plein droit, ainsi qu&apos;une indemnité forfaitaire pour frais de recouvrement de 40€ (Art. D.441-5 du Code de Commerce).
                                    </li>
                                </ul>
                            </section>

                            <section className="mb-8">
                                <h2 className="text-2xl font-bold text-white mb-4">5. Exécution des Travaux et Délais</h2>
                                <p>
                                    ACCES ALTERNATIF s&apos;engage à mettre en œuvre tous les moyens nécessaires à la bonne exécution des travaux commandés (obligation de moyens).
                                </p>
                                <p className="mt-2">
                                    Les délais d&apos;exécution sont donnés à titre indicatif. Ils peuvent être remis en cause par des intempéries (vent fort, pluie, gel) rendant les travaux sur cordes dangereux ou impossibles, des cas de force majeure, ou des retards liés à d&apos;autres corps d&apos;état.
                                </p>
                            </section>

                            <section className="mb-8">
                                <h2 className="text-2xl font-bold text-white mb-4">6. Sécurité et Accès</h2>
                                <p>
                                    Le Client s&apos;engage à faciliter l&apos;accès au chantier pour les équipes d&apos;ACCES ALTERNATIF. Si des autorisations spécifiques (voirie, copropriété) sont nécessaires, elles sont à la charge du Client, sauf accord contraire spécifié au devis.
                                </p>
                            </section>

                            <section className="mb-8">
                                <h2 className="text-2xl font-bold text-white mb-4">7. Réception des Travaux</h2>
                                <p>
                                    La réception des travaux a lieu dès la fin de l&apos;intervention. Elle donne lieu à l&apos;établissement d&apos;un procès-verbal ou d&apos;un bon d&apos;intervention signé par les deux parties.
                                </p>
                            </section>

                            <section className="mb-8">
                                <h2 className="text-2xl font-bold text-white mb-4">8. Assurances et Responsabilités</h2>
                                <p>
                                    ACCES ALTERNATIF atteste avoir souscrit une assurance Responsabilité Civile Professionnelle et Décennale (le cas échéant) couvrant les risques liés à son activité. Une attestation peut être fournie sur demande avant le début des travaux.
                                </p>
                            </section>

                            <section className="mb-8">
                                <h2 className="text-2xl font-bold text-white mb-4">9. Propriété Intellectuelle (Photos)</h2>
                                <p>
                                    Sauf refus exprès du Client, ACCES ALTERNATIF se réserve le droit de prendre des photos des travaux réalisés pour ses références commerciales (site internet, réseaux sociaux), en veillant à l&apos;anonymat du lieu si demandé.
                                </p>
                            </section>

                            <section className="mb-8">
                                <h2 className="text-2xl font-bold text-white mb-4">10. Litiges</h2>
                                <p>
                                    En cas de litige, les parties s&apos;efforceront de trouver une solution amiable. À défaut, le tribunal compétent sera celui du siège social d&apos;ACCES ALTERNATIF (Evreux).
                                </p>
                            </section>
                        </div>

                    </div>
                </div>
            </main>

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
                        <p>© 2026 ACCES ALTERNATIF. Tous droits réservés.</p>
                        <p className="mt-1">SIREN : 833 017 700 00018</p>
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
