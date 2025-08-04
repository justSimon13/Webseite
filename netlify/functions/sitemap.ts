import { Handler, HandlerEvent, HandlerContext } from '@netlify/functions';
import axios from 'axios';
import { create } from 'xmlbuilder2';

import { environment } from '../../src/environments/environment';

async function generateSitemapXml(): Promise<string> {
  const baseUrl = environment.baseUrl;
  const strapiUrl = environment.strapiUrl;

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

  const root = create({ version: '1.0', encoding: 'UTF-8' }).ele('urlset', {
    xmlns: 'http://www.sitemaps.org/schemas/sitemap/0.9',
  });

  for (const route of staticRoutes) {
    root
      .ele('url')
      .ele('loc')
      .txt(`${baseUrl}${route}`)
      .up()
      .ele('lastmod')
      .txt(new Date().toISOString().split('T')[0])
      .up();
  }

  for (const post of posts) {
    const postSlug = post.attributes.slug;
    if (postSlug) {
      root
        .ele('url')
        .ele('loc')
        .txt(`${baseUrl}/blog/${postSlug}`)
        .up()
        .ele('lastmod')
        .txt(new Date(post.attributes.updatedAt).toISOString().split('T')[0])
        .up();
    }
  }

  return root.end({ prettyPrint: true });
}

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
