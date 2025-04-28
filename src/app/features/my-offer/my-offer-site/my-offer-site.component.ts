import { Component } from '@angular/core';
import { CtaComponent } from '../../../shared/components/cta/cta.component';
import { ProcessStepsComponent } from '../components/process-steps/process-steps.component';
import { FaqComponent } from '../../../shared/components/faq/faq.component';
import { ServicePackagesComponent } from '../components/service-packages/service-packages.component';
import { ClientsComponent } from '../../home/components/clients/clients.component';
import { ScrollAnimationService } from '../../../core/services/scroll-animation/scroll-animation.service';
import { CalendlyService } from '../../../core/services/calendly/calendly.service';

@Component({
  selector: 'app-my-offer',
  imports: [
    ProcessStepsComponent,
    FaqComponent,
    ServicePackagesComponent,
    CtaComponent,
    ClientsComponent,
  ],
  templateUrl: './my-offer-site.component.html',
})
export class MyOfferSiteComponent {
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
