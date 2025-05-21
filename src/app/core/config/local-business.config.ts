/**
 * Konfiguration für die LocalBusiness Schema.org Daten
 */
export const localBusinessConfig = {
  '@type': 'LocalBusiness',
  '@context': 'https://schema.org',
  name: 'Fischer IT Solutions',
  image: 'https://simonfischer.dev/assets/profile.jpg',
  url: 'https://simonfischer.dev',
  telephone: '+49 179 1351905',
  email: 'info@simonfischer.dev',
  description:
    'Individuelle Webseiten, Onlineshops & Softwarelösungen für Unternehmen. Modern, effizient & verständlich umgesetzt.',
  address: {
    street: 'Azenbergstraße 41',
    city: 'Stuttgart',
    postalCode: '70174',
    country: 'DE',
  },
  geo: {
    latitude: 48.788303154829684,
    longitude: 9.16314907234341,
  },
  openingHours: {
    opens: '10:00',
    closes: '18:00',
    days: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
  },
};
