import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = 'https://primespark.in'

    const routes = [
        '',
        '/services/data-analysis',
        '/services/technical-documentation',
        '/services/full-stack-development',
        '/services/digital-marketing',
        '/contact-form',
    ]

    return routes.map((route) => ({
        url: `${baseUrl}${route}`,
        lastModified: new Date(),
        changeFrequency: route === '' ? 'daily' : 'weekly',
        priority: route === '' ? 1 : 0.8,
    }))
}
