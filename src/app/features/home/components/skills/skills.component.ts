import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

import { SHARED_COMPONENTS } from '../../../../shared/components/shared-components';
import { Skill } from '../../../../shared/models/skill';

@Component({
  selector: 'app-skills',
  imports: [CommonModule, SHARED_COMPONENTS],
  templateUrl: './skills.component.html',
})
export class SkillsComponent {
  @Input() sectionTitle: string = 'Fähigkeiten';
  @Input() sectionSubtitle: string = 'Meine <span class="text-primary">Expertise</span>';
  @Input() sectionDescription: string =
    'In meiner Softwareentwicklung setze ich auf moderne Technologien, klare Strukturen und agile Entwicklungsmethoden – für sauberen Code und nachhaltige Lösungen.';

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
    {
      icon: 'icons/palette.svg',
      title: 'UI/UX Design',
      description:
        'Ich verbinde funktionale Entwicklung mit ansprechendem Design und achte auf intuitive Benutzeroberflächen für optimale User Experience.',
    },
  ];
}
