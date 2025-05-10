import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

import { Benefit } from '../../../../shared/models/benefit';

@Component({
  selector: 'app-benefits',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './benefits.component.html',
})
export class BenefitsComponent {
  @Input() sectionTitle: string = 'VORTEILE';
  @Input() sectionSubtitle: string =
    'Vorteile für dein <span class="text-primary">Unternehmen</span>';
  @Input() sectionDescription: string =
    'Was eine moderne Webseite oder ein Onlineshop für deinen Betrieb bewirken kann.';

  @Input() benefits: Benefit[] = [];
}
