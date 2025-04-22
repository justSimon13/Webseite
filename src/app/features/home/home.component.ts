import { Component } from '@angular/core';
import { ServicePackagesComponent } from '../../shared/components/service-packages/service-packages.component';
import { SkillsComponent } from '../../shared/components/skills/skills.component';
import { ProjectsComponent } from '../../shared/components/projects/projects.component';
import { ClientsComponent } from '../../shared/components/clients/clients.component';
import { CtaComponent } from '../../shared/components/cta/cta.component';
import { TestimonialsComponent } from '../../shared/components/testimonials/testimonials.component';

@Component({
  selector: 'app-home',
  imports: [
    ServicePackagesComponent,
    SkillsComponent,
    ProjectsComponent,
    ClientsComponent,
    TestimonialsComponent,
    CtaComponent,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {}
