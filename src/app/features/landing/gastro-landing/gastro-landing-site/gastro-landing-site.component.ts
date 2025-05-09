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
      title: 'Website Starter',
      subtitle: 'Ideal für Lokale, Cafés & Imbissbetriebe',
      targetUsers:
        'Für Restaurants, Cafés und kleine Gastronomiebetriebe, die eine professionelle Online-Präsenz benötigen',
      features: [
        'Moderne, mobilfreundliche Webseite',
        'Kontakt & Öffnungszeiten',
        'Google Maps Integration',
        'Optional: Speisekarte, Bewertungen, Reservierung',
      ],
      duration: 'Zwischen 1-2 Wochen',
      calendlyParam: 'a1=1',
      enabled: true,
      featured: false,
    },
    {
      id: 2,
      title: 'Business Shop',
      subtitle: 'Perfekt für Feinkost, Lieferdienste & Takeaway',
      targetUsers: 'Für Gastronomiebetriebe, die ihre Produkte online verkaufen möchten',
      features: [
        'Onlineshop mit Shopify oder WooCommerce',
        'Abholung oder Lieferung mit Zeitfenstern',
        'Mobil & SEO-optimiert',
        'Bestellvorgang mit Zahlungsmöglichkeiten',
      ],
      duration: 'Zwischen 2-3 Wochen',
      calendlyParam: 'a1=2',
      enabled: true,
      featured: true,
    },
    {
      id: 3,
      title: 'Quick MVP / Starter-App',
      subtitle: 'Für einfache digitale Tools',
      targetUsers: 'Für Gastronomiebetriebe mit spezifischen digitalen Anforderungen',
      features: [
        'Umsetzung z.B. mit Firebase',
        'Ideal für kleine Lösungen mit geringem Budget',
        'Tageskarten, Bestellmasken o. Ä.',
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
        'Ob Website, Shop oder App – du bekommst eine klare Empfehlung, was sinnvoll und realistisch ist.',
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

  ctaConfig: CtaConfig = {
    title:
      'Du willst dein digitales <span class="text-primary font-bold">Gastronomieprojekt</span> starten?',
    description:
      'Egal ob Restaurant-Website, Onlineshop für Lieferdienste oder individuelle Anwendung für deinen Gastronomie-Betrieb – gemeinsam finden wir die beste Lösung für dein Vorhaben.',
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
        'Das hängt vom gewählten Paket ab:<br /><br /><strong>Website oder Onlineshop</strong> (z. B. mit WordPress oder Shopify): Du kannst <em>Texte, Bilder und Produkte</em> später selbst ändern – mit verständlicher Einführung.<br /><br /><strong>Individuelle Weblösungen</strong> (ohne CMS): Änderungen übernehme ich – dafür ist die Lösung besonders schlank und auf deinen Betrieb zugeschnitten.',
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
      'Gastronomie Website & Onlineshop erstellen lassen | Simon Fischer',
      'Digitale Lösungen für Gastronomie – Website, Shop oder App erstellen lassen. Klar strukturiert, mobil optimiert & SEO-ready.'
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
