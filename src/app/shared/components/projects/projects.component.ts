import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Project } from '../../models/project';

@Component({
  selector: 'app-projects',
  imports: [CommonModule],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css',
})
export class ProjectsComponent {
  project: Project = {
    title: 'Tiny Shop',
    technologies: 'ASP.NET Core MVC | C# | HTML | CSS | JavaScript',
    description:
      'Der Tiny Shop ist ein fiktiver Onlineshop und zeigt, wie ein typisches Projekt bei mir aussehen kann.',
    liveUrl: 'https://tinyshop.simonfischer.dev/',
    githubUrl: 'https://github.com/justSimon13/Tiny-Shop',
    imageUrl: '/tiny-shop.png',
  };
}
