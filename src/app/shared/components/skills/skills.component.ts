import { Component } from '@angular/core';
import { Skill } from '../../models/skill';
import { CommonModule } from '@angular/common';
import { CtaSmallComponent } from '../cta-small/cta-small.component';

@Component({
  selector: 'app-skills',
  imports: [CommonModule, CtaSmallComponent],
  templateUrl: './skills.component.html',
})
export class SkillsComponent {
  skills: Skill[] = [
    {
      icon: 'icons/code.svg',
      title: 'Programmiersprachen',
      description:
        'Ich bin Web‑Entwickler mit fundierten Kenntnissen in C#, JavaScript sowie HTML und CSS.',
    },
    {
      icon: 'icons/gear.svg',
      title: 'Frameworks',
      description:
        'Für die Entwicklung arbeite ich mit Angular, VueJs und ASP .NET für vielseitige Webanwendungen.',
    },
    {
      icon: 'icons/chip.svg',
      title: 'Technologien',
      description:
        'Zudem bin ich vertraut mit Docker zur Containerisierung von Anwendungen sowie Traefik und Nginx.',
    },
    {
      icon: 'icons/process.svg',
      title: 'Entwicklungsprozess',
      description:
        'Geübt im agilen Arbeiten nach Scrum‑Methodik, um Projekte effizient umzusetzen sowie dem Kanban‑Board.',
    },
    {
      icon: 'icons/database.svg',
      title: 'Datenbanken',
      description:
        'Für die Persistierung von Daten habe ich Erfahrung mit MySQL und MongoDB für relationale und NoSQL‑Datenbanklösungen.',
    },
  ];
}
