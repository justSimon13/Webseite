import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

import { CalendlyService } from '../../../../core/services/calendly/calendly.service';
import { ServicePackage } from '../../../../shared/models/service-package';

@Component({
  selector: 'app-service-packages',
  templateUrl: './service-packages.component.html',
  imports: [CommonModule],
})
export class ServicePackagesComponent {
  constructor(private calendlyService: CalendlyService) {}

  packages: ServicePackage[] = [
    {
      id: 1,
      title: 'Website Starter',
      subtitle: 'Incl. CMS/Wordpress',
      targetUsers:
        'Für Einzelunternehmer & kleine Unternehmen, die eine professionelle & gepflegte und skalierbare WordPress-Website benötigen',
      features: [
        'WordPress oder statische Website',
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
        'Inklusive 100 Produkte (WOO), 500€',
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
      calendlyParam: 'a1=4',
      enabled: true,
      featured: true,
    },
  ];

  openCalendly(paket: string) {
    this.calendlyService.openCalendly(paket);
  }
}
