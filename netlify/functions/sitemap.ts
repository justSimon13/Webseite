import { Handler, HandlerEvent, HandlerContext } from '@netlify/functions';
import axios from 'axios';
import { create } from 'xmlbuilder2';

async function generateSitemapXml(): Promise<string> {
  const baseUrl = process.env.URL || 'https://simonfischer.dev';
  const strapiUrl = process.env.STRAPI_URL;

  if (!strapiUrl) {
    throw new Error('Die STRAPI_URL Umgebungsvariable ist nicht gesetzt.');
  }

  const staticRoutes = [
    '/',
    '/kontakt',
    '/impressum',
    '/datenschutz',
    '/mein-angebot',
    '/gastronomie',
    '/lieferdienst',
  ];

  const response = await axios.get(`${strapiUrl}/api/beitrags`);
  const posts = response.data.data;

  // XML-Struktur mit allen Attributen für 100% Validität
  const root = create({ version: '1.0', encoding: 'UTF-8' }).ele('urlset', {
    xmlns: 'http://www.sitemaps.org/schemas/sitemap/0.9',
    'xmlns:xsi': 'http://www.w3.org/2001/XMLSchema-instance',
    'xsi:schemaLocation':
      'http://www.sitemaps.org/schemas/sitemap/0.9 http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd',
  });

  // Statische Routen hinzufügen
  for (const route of staticRoutes) {
    root
      .ele('url')
      .ele('loc')
      .txt(`${baseUrl}${route}`)
      .up()
      // Vollständiges ISO-Datumsformat verwenden
      .ele('lastmod')
      .txt(new Date().toISOString())
      .up();
  }

  // Dynamische Routen hinzufügen mit Sicherheits-Check
  for (const post of posts) {
    // Sicherstellen, dass der Datensatz die erwartete Struktur hat
    if (post) {
      // SEO-freundlichen Slug verwenden (stelle sicher, dass dieses Feld in Strapi existiert)
      const documentId = post.documentId;
      if (documentId) {
        root
          .ele('url')
          .ele('loc')
          .txt(`${baseUrl}/blog/${documentId}`)
          .up()
          // Vollständiges ISO-Datumsformat verwenden
          .ele('lastmod')
          .txt(new Date(post.updatedAt).toISOString())
          .up();
      }
    }
  }

  return root.end({ prettyPrint: true });
}

// Der Handler bleibt gleich, ruft aber die robustere Funktion auf
const handler: Handler = async (event: HandlerEvent, context: HandlerContext) => {
  try {
    const sitemapXml = await generateSitemapXml();

    return {
      statusCode: 200,
      headers: {
        'Content-Type': 'application/xml',
      },
      body: sitemapXml,
    };
  } catch (error) {
    console.error('Fehler bei der Sitemap-Generierung:', error);
    return {
      statusCode: 500,
      body: 'Internal Server Error',
    };
  }
};

export { handler };
