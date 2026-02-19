import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = 'https://acces-alternatif.com';

    const services = [
        'nettoyage-vitres-hauteur',
        'maconnerie-purge-facade',
        'securisation-site-filets',
        'evenementiel-spectacle',
        'patrimoine-78-27',
        'industrie-91',
        'paris-75-urgence'
    ];

    const serviceUrls = services.map(service => ({
        url: `${baseUrl}/services/${service}`,
        lastModified: new Date(),
        changeFrequency: 'monthly' as const,
        priority: 0.8,
    }));

    return [
        {
            url: baseUrl,
            lastModified: new Date(),
            changeFrequency: 'weekly',
            priority: 1,
        },
        ...serviceUrls,
        {
            url: `${baseUrl}/blog`,
            lastModified: new Date(),
            changeFrequency: 'weekly',
            priority: 0.8,
        },
        {
            url: `${baseUrl}/blog/securite-travaux-hauteur-cordiste`,
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 0.7,
        },
    ];
}
