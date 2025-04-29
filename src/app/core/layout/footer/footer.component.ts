// footer.component.ts
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  imports: [RouterModule],
})
export class FooterComponent {
  currentYear = new Date().getFullYear();
}
