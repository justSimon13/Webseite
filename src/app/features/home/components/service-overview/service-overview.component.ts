import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

import { ServiceItem } from '../../../../shared/models/service-item';

@Component({
  selector: 'app-service-overview',
  imports: [CommonModule],
  templateUrl: './service-overview.component.html',
})
export class ServiceOverviewComponent {
  @Input() sectionTitle: string = 'Produkt';
  @Input() sectionSubtitle: string = 'Leistungen im <span class="text-primary">Überblick</span>';
  @Input() sectionDescription: string =
    'Du willst eine Webseite erstellen lassen? Oder ein Shop mit WordPress oder Shopify? Als erfahrener Software Developer, konnte ich mit folgenden Punkten schon gut überzeugen';

  items: ServiceItem[] = [
    {
      icon: 'icons/puzzle.svg',
      title: 'Individuell',
      description:
        'Maßgeschneiderte Webanwendungen statt Templates von der Stange. Ich entwickle genau das, was du brauchst – egal ob MVP, Webshop oder einer individuellen Softwarelösung.',
    },
    {
      icon: '/icons/stack.svg',
      title: 'Alles von Frontend bis DevOps',
      description:
        'Ob Benutzeroberfläche, Backend‑Logik oder Deployment: Als erfahrener Software Entwickler begleite ich dein Projekt ganzheitlich – technisch stark und sauber strukturiert.',
    },
    {
      icon: '/icons/lightning.svg',
      title: 'Schnelle, auffindbare Webseiten',
      description:
        'Deine Webseite oder dein Onlineshop soll nicht nur gut aussehen, sondern auch gefunden werden. Ich achte auf technische SEO, PageSpeed und optimierte Strukturen.',
    },
    {
      icon: '/icons/chat.svg',
      title: 'Klare Kommunikation & transparente Prozesse',
      description:
        'Kein Fachchinesisch – ich erkläre dir jeden Schritt verständlich. Du weißt jederzeit, wo deine Software steht und was als Nächstes passiert.',
    },
    {
      icon: '/icons/stopwatch.svg',
      title: 'Schnell, sauber, skalierbar',
      description:
        'Ich arbeite effizient, strukturiert und zukunftsorientiert. Sauberer Code ist für mich selbstverständlich – für nachhaltige Projekte.',
    },
    {
      icon: '/icons/arrows.svg',
      title: 'Freelancer‑Vorteile, kein Overhead',
      description:
        'Kein Agentur‑Overhead, keine Umwege. Direkte Zusammenarbeit, faire Preise und volle Flexibilität – ohne Kompromisse bei der Qualität.',
    },
  ];
}
