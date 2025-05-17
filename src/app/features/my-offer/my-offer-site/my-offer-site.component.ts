import { Component, OnInit, afterNextRender } from '@angular/core';

import { CalendlyService } from '../../../core/services/calendly/calendly.service';
import { ScrollAnimationService } from '../../../core/services/scroll-animation/scroll-animation.service';
import { SeoService } from '../../../core/services/seo/seo.service';
import { FaqItem } from '../../../shared/models/faq-item';
import { ProcessStep } from '../../../shared/models/process-step';
import { ServicePackage } from '../../../shared/models/service-package';
import { MY_OFFER_IMPORTS } from '../my-offer-shared';

@Component({
  selector: 'app-my-offer-site',
  imports: [MY_OFFER_IMPORTS],
  templateUrl: './my-offer-site.component.html',
})
export class MyOfferSiteComponent implements OnInit {
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

  faqItems: FaqItem[] = [
    {
      question: 'Wie lange dauert es, eine Webseite oder Web-App zu entwickeln?',
      answer:
        'Je nach Umfang dauert die Umsetzung einer Webseite ca. 2-4 Wochen, bei einer App oder individualisierten Softwarelösungen kann es einige Monate in Anspruch nehmen.',
      isOpen: false,
    },
    {
      question:
        'Kann ich meine Webseite oder Webanwendung später selbst bearbeiten oder erweitern?',
      answer:
        'Bei Wordpress und Shopify kannst du viele Inhalte und Texte selbst pflegen – du bekommst dafür eine einfache Plattform. Bei individuell entwickelten Lösungen ist es möglich teilweise selbst zu erweitern.',
      isOpen: false,
    },
    {
      question: 'Was ist ein MVP (Minimum Viable Product) und wann lohnt sich das?',
      answer:
        'Ein MVP ist eine einfache erste Version deiner Software oder App, die du schon einmal testen kannst. Es kann sich lohnen, wenn du wenig Budget hast und erstmal ein Proof of Concept brauchst oder erste Nutzer überzeugen willst.',
      isOpen: false,
    },
    {
      question: 'Sind die Webseiten und Onlineshops DSGVO-konform und rechtssicher?',
      answer:
        'Ja - Ich kümmere mich darum, dass deine Webseite unter allen technischen DSGVO-konform startet. Impressum, Datenschutzerklärung über die Datenspeicherung und weitere wichtige erklärische Anforderungen an Text und Rechten auf der anderen Seite sind ebenfalls zu beachten, hierfür empfehle ich zusätzlich eine rechtliche Prüfung durch einen Anwalt.',
      isOpen: false,
    },
  ];

  processSteps: ProcessStep[] = [
    {
      number: 1,
      title: 'Erstgespräch',
      description:
        'Wir sprechen gemeinsam über deine Ziele und Bedürfnisse um die beste Lösung zu finden.',
    },
    {
      number: 2,
      title: 'Anforderungen & Konzept',
      description:
        'Ich schaffe dir einen Jange (Engl. für Überblick) was du brauchst und erstelle gemeinsam mit dir einen Plan für die Umsetzung.',
    },
    {
      number: 3,
      title: 'Umsetzung & Abstimmung',
      description:
        'Ich kümmere mich um die technischen Belange der Entwicklung, halte dich auf dem Laufenden und sorge für reibungslose Abläufe.',
    },
    {
      number: 4,
      title: 'Launch & Übergabe',
      description:
        'Sobald wir den Launch erfolgreich durchgeführt haben, wirst du genau in die Bedienung eingewiesen und erhältst Dokumentation zum Nachschlagen.',
    },
    {
      number: 5,
      title: 'Support & Weiterentwicklung',
      description:
        'Auf Wunsch begleite ich dich langfristig mit technischem Support und Erweiterungen für deine wachsenden Features.',
    },
  ];

  constructor(
    private seoService: SeoService,
    private scrollAnimationService: ScrollAnimationService,
    private calendlyService: CalendlyService
  ) {
    afterNextRender(() => {
      setTimeout(() => {
        this.scrollAnimationService.initScrollObserver();
      }, 100);
    });
  }

  ngOnInit(): void {
    this.seoService.updateMeta(
      'Pakete für Webentwicklung & Onlineshops | Lösungen für Unternehmen',
      'Webseite, Onlineshop oder App entwickeln lassen? Hier findest du passende Angebote – individuell, effizient & DSGVO-konform.'
    );
  }

  openCalendly() {
    this.calendlyService.openCalendly();
  }
}
