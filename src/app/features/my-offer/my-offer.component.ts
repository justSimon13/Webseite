import { Component } from '@angular/core';
import { CtaComponent } from '../../shared/components/cta/cta.component';
import { ProcessStepsComponent } from '../../shared/components/process-steps/process-steps.component';
import { FaqComponent } from '../../shared/components/faq/faq.component';
import { ServicePackagesComponent } from '../../shared/components/service-packages/service-packages.component';
import { ClientsComponent } from '../../shared/components/clients/clients.component';
import { ScrollAnimationService } from '../../core/services/scroll-animation.service';

@Component({
  selector: 'app-my-offer',
  imports: [
    ProcessStepsComponent,
    FaqComponent,
    ServicePackagesComponent,
    CtaComponent,
    ClientsComponent,
  ],
  templateUrl: './my-offer.component.html',
  styleUrl: './my-offer.component.css',
})
export class MyOfferComponent {
  constructor(private scrollAnimationService: ScrollAnimationService) {}

  ngAfterViewInit(): void {
    setTimeout(() => {
      this.scrollAnimationService.initScrollObserver();
    }, 100);
  }
}
