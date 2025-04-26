import { Component } from '@angular/core';
import { ServiceItem } from '../../models/service-item';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-service-overview',
  imports: [CommonModule],
  templateUrl: './service-overview.component.html',
})
export class ServiceOverviewComponent {
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
