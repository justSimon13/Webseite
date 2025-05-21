import { Component, OnDestroy, OnInit } from '@angular/core';

import { CalendlyService } from '../../../core/services/calendly/calendly.service';
import { PackagesService } from '../../../core/services/packages/packages.service';
import { RenderService } from '../../../core/services/render/render.service';
import { SchemaService } from '../../../core/services/schema/schema.service';
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
export class MyOfferSiteComponent implements OnInit, OnDestroy {
  servicePackages: ServicePackage[] = [];

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
    private renderService: RenderService,
    private calendlyService: CalendlyService,
    private schemaService: SchemaService,
    private packagesService: PackagesService
  ) {
    this.renderService.initScrollAnimation();
  }

  ngOnInit(): void {
    this.seoService.updateMeta(
      'Pakete für Webentwicklung & Onlineshops | Lösungen für Unternehmen',
      'Webseite, Onlineshop oder App entwickeln lassen? Hier findest du passende Angebote – individuell & effizient.',
      '/mein-angebot'
    );

    this.servicePackages = this.packagesService.getPackagesByCategory('web');

    this.schemaService.clearSchemas();
    this.schemaService.addLocalBusinessSchema();
    this.schemaService.addOfferCatalogSchema();
  }

  ngOnDestroy(): void {
    this.renderService.destroyScrollAnimation();
  }

  openCalendly() {
    this.calendlyService.openCalendly();
  }
}
