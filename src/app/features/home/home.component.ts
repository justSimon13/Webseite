import { Component } from '@angular/core';
import { ServiceOverviewComponent } from '../../shared/components/service-overview/service-overview.component';
import { SkillsComponent } from '../../shared/components/skills/skills.component';
import { ProjectsComponent } from '../../shared/components/projects/projects.component';
import { ClientsComponent } from '../../shared/components/clients/clients.component';
import { CtaComponent } from '../../shared/components/cta/cta.component';
import { TestimonialsComponent } from '../../shared/components/testimonials/testimonials.component';
import { ScrollAnimationService } from '../../core/services/scroll-animation.service';

@Component({
  selector: 'app-home',
  imports: [
    ServiceOverviewComponent,
    SkillsComponent,
    ProjectsComponent,
    ClientsComponent,
    TestimonialsComponent,
    CtaComponent,
  ],
  templateUrl: './home.component.html',
})
export class HomeComponent {
  constructor(private scrollAnimationService: ScrollAnimationService) {}

  ngAfterViewInit(): void {
    setTimeout(() => {
      this.scrollAnimationService.initScrollObserver();
    }, 100);
  }
}
