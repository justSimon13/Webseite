import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
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

  navItems = [
    { label: 'Home', path: '/', exact: true },
    { label: 'Mein Angebot', path: '/mein-angebot', exact: false },
  ];
}
