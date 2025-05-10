import { Component, OnInit, AfterViewInit } from '@angular/core';

import { CalendlyService } from '../../../../core/services/calendly/calendly.service';
import { ScrollAnimationService } from '../../../../core/services/scroll-animation/scroll-animation.service';
import { SeoService } from '../../../../core/services/seo/seo.service';
import { CtaConfig } from '../../../../shared/models/cta-config';
import { FaqItem } from '../../../../shared/models/faq-item';
import { ProcessStep } from '../../../../shared/models/process-step';
import { SectionConfig } from '../../../../shared/models/section-config';
import { ServicePackage } from '../../../../shared/models/service-package';
import { LANDING_IMPORTS } from '../../landing-shared';

@Component({
  selector: 'app-gastro-landing-site',
  imports: [LANDING_IMPORTS],
  templateUrl: './gastro-landing-site.component.html',
})
export class GastroLandingSiteComponent implements OnInit, AfterViewInit {
  servicePackagesConfig: SectionConfig = {
    sectionTitle: 'Angebote',
    sectionSubtitle: 'Meine Angebote für <span class="text-primary">Gastronomiebetriebe</span>',
    sectionDescription:
      'Entdecke maßgeschneiderte digitale Lösungen, die perfekt zu den Anforderungen deines gastronomischen Betriebs passen.',
  };

  servicePackages: ServicePackage[] = [
    {
      id: 1,
      title: 'Webseiten Starter',
      subtitle: 'Incl. CMS/Wordpress',
      targetUsers:
        'Für Einzelunternehmer & kleine Unternehmen, die eine professionelle & gepflegte und skalierbare Webseite benötigen',
      features: [
        'WordPress oder statische Webseite',
        'Komplettes Webdesign',
        'Suchmaschinenoptimierung',
        'Mobile Optimierung & Responsiveness',
        'Setup von Plugins & Domain',
        'Basis-Design & Struktur',
        'Integration deiner Inhalte (Text & Bilder)',
        'Einrichtung mit Admin-Zugang',
      ],
      duration: 'Zwischen 1-2 Wochen',
      calendlyParam: 'a1=1',
      enabled: true,
      featured: false,
    },
    {
      id: 2,
      title: 'Business Shop Paket',
      subtitle: 'Shopify oder WooCommerce',
      targetUsers:
        'Für Unternehmen mit Produkten, die einen Online Shop benötigen, der komfortabel für Smartphone & Mobile optimiert ist',
      features: [
        'Shopify oder WooCommerce',
        'Produkt- & Warenmanagement',
        'Zahlungsabwicklung & SSL',
        'Design-Anpassungen nach Wunsch',
        'Domain-Setup',
      ],
      duration: 'Zwischen 2-3 Wochen',
      calendlyParam: 'a1=2',
      enabled: true,
      featured: false,
    },
    {
      id: 3,
      title: 'Smart Web-App',
      subtitle: 'Individuelle Software & Hosting',
      targetUsers:
        'Für Startups, die eine eigene Idee umsetzen, skalieren oder unkompliziert entwickeln möchten',
      features: [
        'Technische Konzeption',
        'MVP-Entwicklung & Hosting',
        'Technisch saubere Umsetzung',
        'Konzept & Strategie für Mobile & Desktop',
        'Kontinuierliche Weiterentwicklung (Updates, Optimierung, Hosting)',
      ],
      duration: 'Zwischen 4-6 Wochen',
      calendlyParam: 'a1=3',
      enabled: false,
      featured: false,
    },
    {
      id: 4,
      title: 'Individuelle Softwarelösung',
      subtitle: 'Maßgeschneiderte Webentwicklung',
      targetUsers:
        'Für komplexe Anforderungen, APIs, individuelle Anwendungen, Software und Systeme',
      features: [
        'Individuelle Anforderungen & Specs',
        'Skalierbare Architektur',
        'Technische Beratung',
        'Maßgeschneiderte Webentwicklung',
        'Integration in bestehende IT-Infrastruktur',
        'Laufende technische Betreuung',
      ],
      duration: 'Nach Absprache',
      calendlyParam: 'a1=3',
      enabled: true,
      featured: true,
    },
  ];

  processConfig = {
    sectionTitle: 'PROZESS',
    sectionSubtitle: 'So läuft dein <span class="text-primary">Gastro-Projekt</span> ab',
    sectionDescription:
      'Von der ersten Idee bis zum fertigen digitalen Auftritt – ein klarer Weg zu deiner individuellen Gastro-Lösung.',
  };

  processSteps: ProcessStep[] = [
    {
      number: 1,
      title: 'Kostenloses Erstgespräch',
      description: 'Wir sprechen über deinen Betrieb, dein Ziel und welches Paket zu dir passt.',
    },
    {
      number: 2,
      title: 'Entscheidung für das passende Setup',
      description:
        'Ob Webseite, Shop oder App – du bekommst eine klare Empfehlung, was sinnvoll und realistisch ist.',
    },
    {
      number: 3,
      title: 'Umsetzung & individuelles Design',
      description:
        'Ich setze dein Projekt technisch auf, strukturiere deine Inhalte und stimme das Design auf deinen Betrieb ab.',
    },
    {
      number: 4,
      title: 'Go Live & Einführung',
      description:
        'Deine Lösung geht online – mobil optimiert, klar aufgebaut und direkt einsatzbereit. Du bekommst eine verständliche Einführung zur Pflege.',
    },
    {
      number: 5,
      title: 'Weiterentwicklung & Support',
      description:
        'Auf Wunsch begleite ich dich nach dem Launch weiter – z. B. bei Updates, Erweiterungen oder SEO.',
      highlight: 'optional',
    },
  ];

  gastroBenefits = [
    {
      icon: 'M5 3a2 2 0 00-2 2v2a2 2 0 002 2h14a2 2 0 002-2V5a2 2 0 00-2-2H5z M3 13a2 2 0 012-2h14a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6z',
      title: 'Digitale Speisekarte',
      description:
        'Präsentiere deine Gerichte modern und ansprechend – auch auf mobilen Geräten und ohne PDF.',
    },
    {
      icon: 'M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z',
      title: 'Weniger Anrufe & Missverständnisse',
      description:
        'Reservierungen, Öffnungszeiten oder Kontaktdaten sind direkt auf der Seite – für mehr Klarheit.',
    },
    {
      icon: 'M7 7h10M7 11h10M7 15h5',
      title: 'Klare Struktur',
      description:
        'Informationen wie Öffnungszeiten, Kontakt oder Menüs sind logisch aufgebaut und sofort auffindbar.',
    },
    {
      icon: 'M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z',
      title: 'Mobilfreundlich',
      description:
        'Ob am Smartphone oder Tablet – deine Gäste finden sich überall problemlos zurecht.',
    },
    {
      icon: 'M13 7h8m0 0v8m0-8l-8 8-4-4-6 6',
      title: 'Mehr Gäste & Reservierungen',
      description:
        'Mit einem professionellen Auftritt wirst du besser gefunden und steigerst die Chance auf neue Gäste.',
    },
    {
      icon: 'M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z',
      title: 'Wächst mit deinem Betrieb',
      description:
        'Ob digitaler Start oder Erweiterung – deine Lösung passt sich flexibel deinem Wachstum an.',
    },
  ];

  ctaConfig: CtaConfig = {
    title:
      'Du willst dein digitales <span class="text-primary font-bold">Gastronomieprojekt</span> starten?',
    description:
      'Egal ob Restaurant-Webseite, Onlineshop für Lieferdienste oder individuelle Anwendung für deinen Gastronomie-Betrieb – gemeinsam finden wir die beste Lösung für dein Vorhaben.',
    buttonText: 'Erstgespräch vereinbaren',
    linkText: 'Oder informiere dich über meine Angebote',
    linkUrl: '/mein-angebot',
  };

  gastroFaqItems: FaqItem[] = [
    {
      question: 'Wie schnell bin ich online?',
      answer:
        'In der Regel ist deine digitale Lösung innerhalb von <strong>2–3 Wochen</strong> fertig – je nach Umfang und Vorbereitung. Du bekommst eine <strong>mobil optimierte</strong>, <strong>technisch saubere</strong> Umsetzung, die direkt einsatzbereit ist. In einem <strong>kostenlosen Erstgespräch</strong> klären wir, was für deinen Betrieb sinnvoll ist.',
      isOpen: false,
    },
    {
      question: 'Kann ich später noch etwas dazubuchen?',
      answer:
        'Natürlich – deine Lösung ist <strong>flexibel erweiterbar</strong>. Ob <em>Speisekarte</em>, <em>Onlineshop</em>, <em>Zusatzfunktionen</em> oder <em>neue Inhalte</em> – wir können jederzeit ausbauen.',
      isOpen: false,
    },
    {
      question: 'Ist meine Seite DSGVO-konform?',
      answer:
        'Ja – <strong>Impressum</strong>, <strong>Datenschutzerklärung</strong> und (auf Wunsch) <strong>AGB</strong> erstelle ich mit <a href="https://www.e-recht24.de/" target="_blank" rel="noopener noreferrer">eRecht24</a>. Ich achte darauf, dass deine Seite alle rechtlich nötigen Inhalte enthält.',
      isOpen: false,
    },
    {
      question: 'Kann ich Inhalte später selbst ändern?',
      answer:
        'Das hängt vom gewählten Paket ab:<br /><br /><strong>Webseite oder Onlineshop</strong> (z. B. mit WordPress oder Shopify): Du kannst <em>Texte, Bilder und Produkte</em> später selbst ändern – mit verständlicher Einführung.<br /><br /><strong>Individuelle Weblösungen</strong> (ohne CMS): Änderungen übernehme ich – dafür ist die Lösung besonders schlank und auf deinen Betrieb zugeschnitten.',
      isOpen: false,
    },
    {
      question: 'Für welche Betriebe ist das Angebot geeignet?',
      answer:
        'Die Lösungen richten sich an <strong>Restaurants, Lieferdienste, Imbisse, Cafés, Caterer, Foodtrucks</strong> oder <strong>Feinkostläden</strong> – also alle, die ihr gastronomisches Angebot <em>professionell online präsentieren oder verkaufen</em> wollen.',
      isOpen: false,
    },
  ];

  constructor(
    private seoService: SeoService,
    private scrollAnimationService: ScrollAnimationService,
    private calendlyService: CalendlyService
  ) {}

  ngOnInit(): void {
    this.seoService.updateMeta(
      'Gastronomie Webseite & Onlineshop erstellen lassen | Simon Fischer',
      'Digitale Lösungen für Gastronomie – Webseite, Shop oder App erstellen lassen. Klar strukturiert, mobil optimiert & SEO-ready.'
    );
  }

  ngAfterViewInit(): void {
    setTimeout(() => {
      this.scrollAnimationService.initScrollObserver();
    }, 100);
  }

  openCalendly(packageType?: string): void {
    if (packageType) {
      this.calendlyService.openCalendly(packageType);
    } else {
      this.calendlyService.openCalendly();
    }
  }
}
