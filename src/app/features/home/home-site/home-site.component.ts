import { Component } from '@angular/core';
import { ClientsComponent } from '../components/clients/clients.component';
import { CtaComponent } from '../../../shared/components/cta/cta.component';
// import { TestimonialsComponent } from '../../../shared/components/testimonials/testimonials.component';
import { ScrollAnimationService } from '../../../core/services/scroll-animation/scroll-animation.service';
import { SkillsComponent } from '../components/skills/skills.component';
import { ProjectsComponent } from '../components/projects/projects.component';
import { ServiceOverviewComponent } from '../components/service-overview/service-overview.component';
import { CalendlyService } from '../../../core/services/calendly/calendly.service';

@Component({
  selector: 'app-home',
  imports: [
    ServiceOverviewComponent,
    SkillsComponent,
    ProjectsComponent,
    ClientsComponent,
    // TestimonialsComponent,
    CtaComponent,
  ],
  templateUrl: './home-site.component.html',
})
export class HomeSiteComponent {
  constructor(
    private scrollAnimationService: ScrollAnimationService,
    private calendlyService: CalendlyService
  ) {}

  ngAfterViewInit(): void {
    setTimeout(() => {
      this.scrollAnimationService.initScrollObserver();
    }, 100);
  }

  openCalendly() {
    this.calendlyService.openCalendly();
  }
}
