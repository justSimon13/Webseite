import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

import { Project } from '../../../../shared/models/project';

@Component({
  selector: 'app-projects',
  imports: [CommonModule],
  templateUrl: './projects.component.html',
})
export class ProjectsComponent {
  @Input() sectionTitle: string = 'Projekte';
  @Input() sectionSubtitle: string = 'Meine <span class="text-primary">Projekte</span>';
  @Input() sectionDescription: string =
    'Ein kleiner Einblick in vergangene Projekte – von Webshops bis zu individuellen Anwendungen. Weitere Referenzen teile ich gerne auf Anfrage.';

  project: Project = {
    title: 'Tiny Shop',
    technologies: 'ASP.NET Core MVC | C# | HTML | CSS | JavaScript',
    description:
      'Der Tiny Shop ist ein fiktiver Onlineshop und zeigt, wie ein typisches Projekt bei mir aussehen kann.',
    liveUrl: 'https://tinyshop.simonfischer.dev/',
    githubUrl: 'https://github.com/justSimon13/Tiny-Shop',
    imageUrl: '/assets/tiny-shop.png',
  };
}
