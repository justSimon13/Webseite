import { Component, HostListener } from '@angular/core';
import { NavigationEnd, Router, RouterOutlet } from '@angular/router';
import { NavigationComponent } from './shared/components/navigation/navigation.component';
import { FooterComponent } from './shared/components/footer/footer.component';
import { ScrollAnimationService } from './core/services/scroll-animation.service';
import { filter } from 'rxjs';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NavigationComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  constructor(private router: Router) {}

  ngOnInit(): void {
    this.router.events
      .pipe(filter((event) => event instanceof NavigationEnd))
      .subscribe(() => {
        window.scrollTo(0, 0);
      });

    window.addEventListener('scroll', this.handleScroll);
  }

  ngOnDestroy() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  handleScroll = () => {
    const navElement = document.querySelector('.fixed') as HTMLElement;

    if (window.scrollY > 50) {
      navElement?.classList.add('nav-scrolled');
    } else {
      navElement?.classList.remove('nav-scrolled');
    }
  };

  onWindowScroll() {
    const navElement = document.querySelector('.nav-fixed') as HTMLElement;

    if (window.scrollY > 50) {
      navElement?.classList.add('nav-scrolled');
    } else {
      navElement?.classList.remove('nav-scrolled');
    }
  }
}
