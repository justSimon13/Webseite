// navigation.component.ts
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  imports: [CommonModule, RouterModule],
})
export class NavigationComponent {
  isMobileMenuOpen = false;

  toggleMobileMenu() {
    this.isMobileMenuOpen = !this.isMobileMenuOpen;
  }

  // Navigationselemente für einfachere Verwendung
  navItems = [
    { label: 'Home', path: '/', exact: true },
    { label: 'Über mich', path: '/mein-angebot', exact: false },
  ];
}
