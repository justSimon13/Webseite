export const schemaConfig = {
  business: {
    name: 'Simon Fischer Consulting',
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
      latitude: 48.7819,
      longitude: 9.1674,
    },
    openingHours: {
      opens: '10:00',
      closes: '18:00',
      days: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
    },
  },
  services: {
    main: {
      name: 'Meine Service-Pakete',
      offers: [
        {
          name: 'Webseiten Starter',
          description:
            'Für Einzelunternehmer & kleine Unternehmen, die eine professionelle & gepflegte und skalierbare Webseite benötigen.',
          serviceType: 'Webdesign',
        },
        {
          name: 'Business Shop',
          description:
            'Für Unternehmen mit Produkten, die einen Online Shop benötigen, der komfortabel für Smartphone & Mobile optimiert ist.',
          serviceType: 'E-Commerce Entwicklung',
        },
        {
          name: 'Individuelle Softwarelösung',
          description:
            'Für komplexe Anforderungen, APIs, individuelle Anwendungen, Software und Systeme.',
          serviceType: 'Web App Entwicklung',
        },
      ],
    },
    gastro: {
      name: 'Digitale Lösungen für Gastronomiebetriebe',
      offers: [
        {
          name: 'Gastronomie Webseite',
          description:
            'Maßgeschneiderte Restaurant-Webseite mit Speisekarte, Reservierungssystem und mobiloptimiertem Design – perfekt für Restaurants & Cafés.',
          serviceType: 'Webdesign für Gastronomie',
        },
        {
          name: 'Online-Shop für Gastronomie',
          description:
            'Shop-System zur Bestellung von Speisen und Getränken – inkl. Lieferzeiten, Tischbestellung via QR-Code und Kundenverwaltung.',
          serviceType: 'E-Commerce für Gastronomie',
        },
        {
          name: 'Digitale Gastro-Lösung',
          description:
            'Individuelle Softwarelösungen für Küche, Bestellabwicklung, Mitarbeiterprozesse und QR-Systeme in der Gastronomie.',
          serviceType: 'Gastronomie Softwareentwicklung',
        },
      ],
    },
    lieferdienst: {
      name: 'Digitale Lösungen für Lieferdienste',
      offers: [
        {
          name: 'Lieferdienst Webseite',
          description:
            'Professionelle One-Pager-Webseite für Getränkelieferdienste – mobil optimiert, lokal auffindbar & schnell geladen.',
          serviceType: 'Webdesign für Lieferdienste',
        },
        {
          name: 'Business Shop für Lieferdienste',
          description:
            'Onlineshop mit Lieferzeit-Plugins, QR-Bestellung und Kundenverwaltung – speziell für Lieferdienste mit Produktkatalog.',
          serviceType: 'E-Commerce für Lieferdienste',
        },
        {
          name: 'Digitale Lösung für Lieferdienste',
          description:
            'Web-App für Routenplanung, Bestellabwicklung und Live-Verfügbarkeiten – ideal für Lieferdienste mit eigenem Fuhrpark.',
          serviceType: 'Lieferdienst Softwareentwicklung',
        },
      ],
    },
  },
};
