import { ServicePackage } from '../../shared/models/service-package';

export const packagesConfig: ServicePackage[] = [
  {
    id: 1,
    title: 'Webseiten Starter',
    subtitle: 'Incl. CMS/Wordpress',
    description:
      'Eine moderne, individuell gestaltete Website – mobiloptimiert, suchmaschinenfreundlich und angepasst an dein Corporate Design.',
    targetUsers:
      'Für Selbstständige, Gründer oder kleine Unternehmen, die mit einer modernen, mobiloptimierten und suchmaschinenfreundlichen Webseite professionell im Netz auftreten möchten.',
    features: [
      'Leicht bedienbares Redaktionssystem / CMS (WordPress)',
      'Individuelles Design abgestimmt auf dein Unternehmen',
      'Optimiert für Mobilgeräte und Tablets',
      'Schnelle Ladezeiten & Suchmaschinenfreundlichkeit',
      'Standortanzeige via Google Maps',
      'Kontaktmöglichkeiten per Formular, WhatsApp oder Terminbuchung',
    ],
    duration: 'Zwischen 1-2 Wochen',
    calendlyParam: 'a1=1',
    enabled: true,
    featured: false,
    category: 'web',
  },
  {
    id: 2,
    title: 'Business Shop',
    subtitle: 'Shopify oder WooCommerce',
    description:
      'Erweiterung zur Verkaufsplattform – ideal für Produkte, Speisen, Dienstleistungen oder Tickets. Inklusive Bezahl- und Versandlogik.',
    targetUsers:
      'Für Unternehmen, die physische oder digitale Produkte online verkaufen möchten – mit responsivem Design, integrierter Zahlungsabwicklung und optimiert für Mobile Commerce.',
    features: [
      'Professioneller Onlineshop mit einfacher Produktpflege',
      'Verkauf physischer oder digitaler Produkte',
      'Integrierte Bezahlmethoden wie PayPal, Stripe oder Klarna',
      'Versandoptionen & lokale Abholung frei wählbar',
      'Rabattaktionen & Gutscheinfunktionen',
      'Optional: Lagerverwaltung & Bestandsanzeige',
    ],
    duration: 'Zwischen 2-3 Wochen',
    calendlyParam: 'a1=2',
    enabled: true,
    featured: false,
    category: 'web',
  },
  {
    id: 3,
    title: 'Digitale Software Lösung',
    subtitle: 'Maßgeschneiderte Webentwicklung',
    description:
      'Individuell entwickelte Webanwendung – perfekt für spezielle Prozesse, interne Tools oder automatisierte Abläufe.',
    targetUsers:
      'Für Unternehmen mit komplexen Anforderungen, die individuelle Webanwendungen, Prozessautomatisierung oder API-Integrationen benötigen – z. B. für interne Tools, Bestellsysteme oder kundenorientierte Software.',
    features: [
      'Individuell entwickelte Webanwendung für dein Business',
      'Moderne Benutzeroberfläche & intuitive Bedienung',
      'Funktionen exakt auf deine Prozesse abgestimmt',
      'Anbindung an bestehende Systeme oder Datenquellen möglich',
      'Live-Daten & Echtzeit-Anzeigen (z. B. Bestellstatus)',
      'Sichere & skalierbare Webtechnologie im Hintergrund',
    ],
    duration: 'Nach Absprache',
    calendlyParam: 'a1=3',
    enabled: true,
    featured: true,
    category: 'web',
  },
  {
    id: 4,
    title: 'Gastronomie Webseite',
    subtitle: 'Incl. CMS/Wordpress',
    description:
      'Maßgeschneiderte Restaurant-Webseite mit Speisekarte, Reservierungssystem und mobiloptimiertem Design – perfekt für Restaurants & Cafés.',
    targetUsers:
      'Für Restaurants, Cafés und Bars, die online sichtbar sein wollen – mit moderner Website, Speisekarte, Reservierungsfunktion und optimaler Darstellung auf Mobilgeräten.',
    features: [
      'Moderne Website mit individuellem Design',
      'Mobilfreundlich & suchmaschinenoptimiert',
      'Speisekarte digital einpflegbar',
      'Tischreservierungen direkt über die Website',
      'Öffnungszeiten & Standort auf Google Maps',
      'Kontaktaufnahme über Formular oder WhatsApp',
      'Optional auch als schnelle statische Version verfügbar',
    ],
    duration: 'Zwischen 1-2 Wochen',
    calendlyParam: 'a1=1',
    enabled: true,
    featured: false,
    category: 'gastro',
  },
  {
    id: 5,
    title: 'Online-Shop für Gastronomie',
    subtitle: 'Shopify oder WooCommerce',
    description:
      'Shop-System zur Bestellung von Speisen und Getränken – inkl. Lieferzeiten und Kundenverwaltung.',
    targetUsers:
      'Für gastronomische Betriebe, die Speisen oder Getränke online zur Abholung oder Lieferung anbieten möchten – inklusive flexibler Bezahl- und Versandoptionen.',
    features: [
      'Komplette Online-Bestellfunktion für Speisen & Getränke',
      'Übersichtliche Produktkategorien & Varianten',
      'Einfache Bezahlung direkt im Shop',
      'Abhol- und Lieferoptionen frei wählbar',
      'Aktionen & Gutscheine einsetzbar',
      'Ideal für Abholservice oder kontaktlose Lieferung',
    ],
    duration: 'Zwischen 2-3 Wochen',
    calendlyParam: 'a1=2',
    enabled: true,
    featured: false,
    category: 'gastro',
  },
  {
    id: 6,
    title: 'Digitale Gastro-Lösung',
    subtitle: 'Maßgeschneiderte Webentwicklung',
    description:
      'Individuelle Softwarelösungen für Küche, Bestellabwicklung, Mitarbeiterprozesse und QR-Systeme in der Gastronomie.',
    targetUsers:
      'Für Gastronomiebetriebe mit individuellen digitalen Anforderungen – von QR-Bestellungen über Küchenmonitore bis hin zu internen Verwaltungssystemen.',
    features: [
      'Persönliche Beratung zur digitalen Umsetzung',
      'Maßgeschneiderte Funktionen für dein Gastro-Konzept',
      'Web-App z. B. für QR-Bestellung oder Küchenmonitor',
      'Digitale Abläufe für Service, Küche oder Lager',
      'Integration in bestehende Systeme möglich',
      'Skalierbar & zukunftssicher entwickelt',
    ],
    duration: 'Nach Absprache',
    calendlyParam: 'a1=3',
    enabled: true,
    featured: true,
    category: 'gastro',
  },
  {
    id: 7,
    title: 'Lieferdienst Webseite',
    subtitle: 'Incl. CMS/Wordpress',
    description:
      'Professionelle Webseite für Getränkelieferdienste – mobil optimiert, lokal auffindbar & schnell geladen.',
    targetUsers:
      'Für Getränkelieferanten, Lebensmittelservices oder regionale Zustelldienste, die eine gepflegte, mobiloptimierte und lokal auffindbare Webseite benötigen.',
    features: [
      'Modernes, responsives Design für jede Bildschirmgröße',
      'Suchmaschinenoptimiert für lokale Auffindbarkeit',
      'Digitale Darstellung des Sortiments',
      'Kontaktaufnahme über Formular oder Buchungstool',
      'Integration von Google Maps & Öffnungszeiten',
      'Optional auch als schnelle statische Variante umsetzbar',
    ],
    duration: 'Zwischen 1-2 Wochen',
    calendlyParam: 'a1=1',
    enabled: true,
    featured: false,
    category: 'delivery',
  },
  {
    id: 8,
    title: 'Online-Shop für Lieferdienst',
    subtitle: 'Shopify oder WooCommerce',
    description:
      'Onlineshop mit Lieferzeit-Plugins, QR-Bestellung und Kundenverwaltung – speziell für Lieferdienste mit Produktkatalog.',
    targetUsers:
      'Für Lieferdienste, die ihren Produktkatalog online vertreiben möchten – mit intuitivem Shop-System, Zahlungsmethoden und automatisierter Lieferlogik.',
    features: [
      'Einfach bedienbarer Onlineshop für dein Sortiment',
      'Flexible Bezahlmethoden wie PayPal oder Barzahlung',
      'Lieferung oder Abholung individuell einstellbar',
      'Produktübersicht nach Kategorien (z. B. Getränke)',
      'Kundenfreundliche Bestellabwicklung mit klaren Abläufen',
      'Ideal für schnelle & zuverlässige Lieferprozesse',
    ],
    duration: 'Zwischen 2-3 Wochen',
    calendlyParam: 'a1=2',
    enabled: true,
    featured: false,
    category: 'delivery',
  },
  {
    id: 9,
    title: 'Digitale Lösung für Lieferdienste',
    subtitle: 'Maßgeschneiderte Webentwicklung',
    description:
      'Web-App für Routenplanung, Bestellabwicklung und Live-Verfügbarkeiten – ideal für Lieferdienste mit eigenem Fuhrpark.',
    targetUsers:
      'Für Lieferunternehmen mit eigenem Fuhrpark oder speziellen Anforderungen – z. B. Routenplanung, Live-Tracking, CRM oder Lagerverwaltung in einer zentralen Weblösung.',
    features: [
      'Digitale Planung & Umsetzung nach deinen Anforderungen',
      'Web-App für z. B. Routenplanung, Live-Tracking oder Kundenverwaltung',
      'Optimiert für Lieferprozesse & Echtzeitdaten',
      'Anpassbar an deine bestehende Infrastruktur',
      'Skalierbar, sicher & effizient entwickelt',
    ],
    duration: 'Nach Absprache',
    calendlyParam: 'a1=3',
    enabled: true,
    featured: true,
    category: 'delivery',
  },
];
