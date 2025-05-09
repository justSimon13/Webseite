import { Component, AfterViewInit, OnInit } from '@angular/core';

import { CalendlyService } from '../../../../core/services/calendly/calendly.service';
import { ScrollAnimationService } from '../../../../core/services/scroll-animation/scroll-animation.service';
import { SeoService } from '../../../../core/services/seo/seo.service';
import { ProcessStep } from '../../../../shared/components/process-steps-vertical/process-steps-vertical.component';
import { ClientLogo } from '../../../../shared/models/client-logo';
import { CtaConfig } from '../../../../shared/models/cta-config';
import { FaqItem } from '../../../../shared/models/faq-item';
import { SectionConfig } from '../../../../shared/models/section-config';
import { ServicePackage } from '../../../../shared/models/service-package';
import { LANDING_IMPORTS } from '../../landing-shared';

@Component({
  selector: 'app-liefer-landing-site',
  imports: [LANDING_IMPORTS],
  templateUrl: './liefer-landing-site.component.html',
})
export class LieferLandingSiteComponent implements AfterViewInit, OnInit {
  servicePackagesConfig: SectionConfig = {
    sectionTitle: 'Angebote',
    sectionSubtitle: 'Meine Angebote für <span class="text-primary">Lieferdienste</span>',
    sectionDescription:
      'Entdecke maßgeschneiderte digitale Lösungen, die perfekt zu den Anforderungen deines Lieferdienstes passen.',
  };

  servicePackages: ServicePackage[] = [
    {
      id: 1,
      title: 'Website Starter',
      subtitle: 'Ideal für lokale Lieferdienste oder Kurierbetriebe',
      targetUsers:
        'Für kleine und mittelgroße Lieferdienste, die eine professionelle Online-Präsenz benötigen',
      features: [
        'Mobilfreundliche Website mit Leistungen & Kontakt',
        'Öffnungszeiten & Liefergebiete',
        'Optional: Anfrageformular oder Call-to-Action',
      ],
      duration: 'Zwischen 1-2 Wochen',
      calendlyParam: 'a1=1',
      enabled: true,
      featured: false,
    },
    {
      id: 2,
      title: 'Business Shop Paket',
      subtitle: 'Für Lieferdienste mit regelmäßigem Sortiment',
      targetUsers: 'Für Getränke-, Feinkost- und andere Lieferdienste mit festem Produktangebot',
      features: [
        'Onlineshop mit Shopify oder WooCommerce',
        'Lieferoptionen über Plugins (z.B. Zapiet, Delivery Slots)',
        'Produktvarianten, Bestellfenster, Zahlungsintegration',
      ],
      duration: 'Zwischen 2-3 Wochen',
      calendlyParam: 'a1=2',
      enabled: true,
      featured: true,
    },
    {
      id: 3,
      title: 'Quick MVP / Starter-App',
      subtitle: 'Ideal für einfache Bestellsysteme',
      targetUsers: 'Für Lieferdienste mit Fokus auf schnelle, einfache Bestellabwicklung',
      features: [
        'Umsetzung z.B. mit Firebase',
        'Für digitale Bestellzettel, Tagesaktionen oder Wiederbesteller',
        'Schnelle Implementierung & leichte Bedienung',
      ],
      duration: 'Zwischen 2-4 Wochen',
      calendlyParam: 'a1=3',
      enabled: false,
      featured: false,
    },
    {
      id: 4,
      title: 'Individuelle Webentwicklung',
      subtitle: 'Für anspruchsvolle Lösungen',
      targetUsers: 'Für komplexe Anforderungen im Gastronomiebereich',
      features: [
        'Entwicklung individueller Weblösungen nach Bedarf',
        'Technisches Konzept basierend auf deinem Workflow',
        'Anbindung an bestehende Systeme oder Schnittstellen',
        'Optional: Bestellprozesse, Produktverwaltung, Tourenplanung',
        'Umsetzung erfolgt flexibel & nach Absprache',
      ],
      duration: 'Nach Absprache',
      calendlyParam: 'a1=4',
      enabled: true,
      featured: false,
    },
  ];

  processConfig = {
    sectionTitle: 'PROZESS',
    sectionSubtitle: 'So läuft dein <span class="text-primary">Lieferdienst-Projekt</span> ab',
    sectionDescription:
      'Von der ersten Idee bis zur fertigen digitalen Lösung – ein klarer Weg zu deinem individuellen Online-Auftritt.',
  };

  processSteps: ProcessStep[] = [
    {
      number: 1,
      title: 'Kostenloses Erstgespräch',
      description:
        'Wir besprechen, welche Lösung zu deinem Lieferangebot passt – von der einfachen Website bis zum vollwertigen Shop.',
    },
    {
      number: 2,
      title: 'Empfehlung & Festpreis-Angebot',
      description:
        'Du bekommst eine ehrliche Einschätzung und ein verbindliches Angebot – ohne Überraschungen.',
    },
    {
      number: 3,
      title: 'Umsetzung & Designanpassung',
      description:
        'Ich richte die passende Lösung technisch ein und stimme Struktur & Design auf dein Sortiment ab.',
    },
    {
      number: 4,
      title: 'Go Live & Einführung',
      description:
        'Deine Website oder dein Shop geht online – du bekommst eine verständliche Einführung zur späteren Pflege.',
    },
    {
      number: 5,
      title: 'Support & Erweiterung',
      description:
        'Auf Wunsch begleite ich dich auch nach dem Launch – z.B. bei SEO, Produktpflege oder neuen Funktionen.',
      highlight: 'optional',
    },
  ];

  ctaConfig: CtaConfig = {
    title:
      'Du willst dein <span class="text-primary font-bold">Lieferdienst</span> digital sichtbar machen?',
    description:
      'Ob Getränkelieferung, Lebensmittelversand oder lokaler Kurierdienst – gemeinsam finden wir die passende digitale Lösung für dein Angebot.',
    buttonText: 'Erstgespräch vereinbaren',
    linkText: 'Oder informiere dich über meine Angebote',
    linkUrl: '/mein-angebot',
  };

  clientLogosConfig = {
    title: 'Lieferdienste, die mir vertrauen',
    subtitle:
      'Von Getränkelieferanten bis zu Lebensmittelkurieren – mein Erfahrungsschatz im Bereich Lieferservices',
  };

  clientLogos: ClientLogo[] = [
    {
      src: 'assets/images/logos/getraenkedienst-west-logo.svg',
      alt: 'Getränkedienst West Logo',
    },
    {
      src: 'assets/images/logos/logo-2.svg',
      alt: 'Lieferdienst Logo 2',
    },
    {
      src: 'assets/images/logos/logo-3.svg',
      alt: 'Lieferdienst Logo 3',
    },
    {
      src: 'assets/images/logos/logo-4.svg',
      alt: 'Lieferdienst Logo 4',
    },
    {
      src: 'assets/images/logos/logo-5.svg',
      alt: 'Lieferdienst Logo 5',
    },
  ];

  lieferdienstFaqItems: FaqItem[] = [
    {
      question: 'Wie schnell bin ich online?',
      answer:
        'In der Regel ist dein Onlineshop oder deine Webseite innerhalb von 2–3 Wochen einsatzbereit – je nach Umfang und Vorbereitung. In einem kostenlosen Erstgespräch klären wir, was für deinen Betrieb sinnvoll ist.',
      isOpen: false,
    },
    {
      question: 'Kann ich später noch etwas dazubuchen?',
      answer:
        'Ja – dein Projekt ist flexibel erweiterbar. Ob neue Produkte, Funktionen oder zusätzliche Seiten: Ich kann jederzeit Updates umsetzen oder Erweiterungen ergänzen.',
      isOpen: false,
    },
    {
      question: 'Ist meine Seite DSGVO-konform?',
      answer:
        'Ja – Impressum, Datenschutzerklärung und (auf Wunsch) AGB erstelle ich mit eRecht24. Ich achte darauf, dass deine Seite alle rechtlich nötigen Inhalte enthält.',
      isOpen: false,
    },
    {
      question: 'Kann ich Inhalte später selbst ändern?',
      answer:
        'Das hängt vom gewählten Paket ab: Bei einem Shop mit Shopify oder WooCommerce kannst du Produkte, Bilder und Texte später selbst ändern – inklusive verständlicher Einführung. Bei individuellen Weblösungen ohne CMS erfolgen Änderungen durch mich.',
      isOpen: false,
    },
    {
      question: 'Für welche Betriebe ist das Angebot geeignet?',
      answer:
        'Die Lösungen richten sich an Getränkelieferdienste, regionale Händler, Lebensmittel- und Feinkostanbieter sowie andere Lieferbetriebe, die ihre Produkte online präsentieren oder verkaufen möchten.',
      isOpen: false,
    },
  ];

  benefitsConfig = {
    sectionTitle: 'VORTEILE',
    sectionSubtitle: 'Vorteile für dein <span class="text-primary">Lieferunternehmen</span>',
    sectionDescription:
      'Warum sich eine professionelle digitale Präsenz für deinen Lieferdienst auszahlt.',
  };

  lieferdienstBenefits = [
    {
      icon: 'M15 12a3 3 0 11-6 0 3 3 0 016 0z M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z',
      title: 'Mehr Sichtbarkeit',
      description:
        'Werde von potenziellen Kunden gefunden und generiere mehr Bestellungen für deinen Lieferdienst.',
    },
    {
      icon: 'M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10',
      title: 'Strukturiertes Angebot',
      description:
        'Präsentiere dein Sortiment klar strukturiert und mache es deinen Kunden leicht, zu bestellen.',
    },
    {
      icon: 'M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z',
      title: 'Mobile Optimierung',
      description:
        'Deine Kunden können auch unterwegs bequem bestellen – optimal für spontane Bestellungen.',
    },
    {
      icon: 'M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z',
      title: 'Zeitersparnis',
      description:
        'Reduziere Telefonanfragen und automatisiere den Bestellprozess für mehr Effizienz im Tagesgeschäft.',
    },
    {
      icon: 'M13 7h8m0 0v8m0-8l-8 8-4-4-6 6',
      title: 'Höhere Umsätze',
      description:
        'Mit einem professionellen Online-Auftritt steigen in der Regel Bestellfrequenz und Warenkorbwerte.',
    },
    {
      icon: 'M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z',
      title: 'Flexibel erweiterbar',
      description:
        'Starte mit dem Grundpaket und erweitere deine digitale Präsenz nach und nach je nach Bedarf.',
    },
  ];

  constructor(
    private seoService: SeoService,
    private scrollAnimationService: ScrollAnimationService,
    private calendlyService: CalendlyService
  ) {}

  ngOnInit(): void {
    this.seoService.updateMeta(
      'Digitale Lösungen für Lieferdienste – Website, Shop & App erstellen lassen',
      'Webseite, Onlineshop oder App für deinen Lieferdienst – modern, mobil optimiert & auf dein Sortiment abgestimmt. Ideal für Getränke-, Lebensmittel- & Kurierdienste.'
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
