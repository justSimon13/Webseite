import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

import { ClientLogo } from '../../../../shared/models/client-logo';

@Component({
  selector: 'app-client-divider',
  imports: [CommonModule],
  templateUrl: './client-divider.component.html',
})
export class ClientDividerComponent {
  @Input() title: string = 'Kunden, die mir vertrauen';
  @Input() subtitle: string = '';
  @Input() showBackground: boolean = true;
  @Input() logos: ClientLogo[] = [
    {
      src: 'logos/jse-logo.png',
      alt: 'JSE Logo',
    },
    {
      src: 'logos/easyday-logo.png',
      alt: 'EasyDay Logo',
    },
    {
      src: 'logos/digital35-logo.png',
      alt: 'Digital35 Logo',
    },
    {
      src: 'logos/halbautomaten-logo.png',
      alt: 'Halbautomaten Logo',
    },
    {
      src: 'logos/getraenkedienst-west-logo.png',
      alt: 'Getränkedienst West Logo',
    },
  ];
}
