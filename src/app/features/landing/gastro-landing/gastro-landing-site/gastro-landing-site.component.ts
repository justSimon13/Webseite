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
        'Online-Reservierungssystem',
        'Küchendisposition, Warenwirtschaft, QR-Bestellung',
        'App-ähnliche Funktionen oder Schnittstellen',
        'Maßgeschneiderte Lösungen für komplexe Anforderungen',
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

  gastroProcessSteps: ProcessStep[] = [
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
      title: 'Weiterentwicklung & Support (optional)',
      description:
        'Auf Wunsch begleite ich dich nach dem Launch weiter – z. B. bei Updates, Erweiterungen oder SEO.',
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
      question: 'Kann ich auch später noch etwas dazubuchen?',
      answer:
        'Ja – alle Lösungen sind modular aufgebaut. Du kannst mit der Website starten und später z.B. den Onlineshop ergänzen. Ich gestalte die Architektur von Anfang an so, dass Erweiterungen problemlos möglich sind.',
      isOpen: false,
    },
    {
      question: 'Ist mein Shop oder meine Seite rechtssicher?',
      answer:
        'Ich nutze Generatoren von eRecht24 für Impressum und Datenschutz. Für AGBs empfehle ich anwaltliche Prüfung. Alle relevanten rechtlichen Aspekte werden während der Entwicklung berücksichtigt.',
      isOpen: false,
    },
    {
      question: 'Wie schnell bin ich online?',
      answer:
        'In der Regel ist dein Projekt innerhalb von 2–4 Wochen online – je nach Paket und Vorbereitung. Bei dringendem Bedarf kann in manchen Fällen auch eine schnellere Umsetzung ermöglicht werden.',
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
      'Digitale Lösungen für die Gastronomie – Website, Shop & App',
      'Moderne Webseiten, Onlineshops und Web-Apps für Restaurants, Lieferdienste und Feinkostbetriebe – individuell umgesetzt, mobil optimiert & SEO-ready.'
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
