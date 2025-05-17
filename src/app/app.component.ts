import { Component, OnDestroy } from '@angular/core';
import { NavigationEnd, Router, RouterOutlet } from '@angular/router';
import { filter } from 'rxjs';

import { FooterComponent } from './core/layout/footer/footer.component';
import { NavigationComponent } from './core/layout/navigation/navigation.component';
import { RenderService } from './core/services/render/render.service';

const SCROLL_THRESHOLD = 50;

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavigationComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent implements OnDestroy {
  constructor(
    private router: Router,
    private renderService: RenderService
  ) {
    this.renderService.executeAfterRender(() => {
      this.router.events.pipe(filter((event) => event instanceof NavigationEnd)).subscribe(() => {
        window.scrollTo(0, 0);
      });

      window.addEventListener('scroll', this.handleScroll);
    });
  }

  ngOnDestroy(): void {
    if (this.renderService.isBrowser()) {
      window.removeEventListener('scroll', this.handleScroll);
    }
  }

  handleScroll = (): void => {
    const navElement = document.querySelector('.fixed') as HTMLElement;

    if (window.scrollY > SCROLL_THRESHOLD) {
      navElement?.classList.add('nav-scrolled');
    } else {
      navElement?.classList.remove('nav-scrolled');
    }
  };
}
