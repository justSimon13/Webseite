import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./features/home/home-site/home-site.component').then((m) => m.HomeSiteComponent),
  },
  {
    path: 'mein-angebot',
    loadComponent: () =>
      import('./features/my-offer/my-offer-site/my-offer-site.component').then(
        (m) => m.MyOfferSiteComponent
      ),
  },
  {
    path: 'kontakt',
    loadComponent: () =>
      import('./features/contact/contact-site/contact-site.component').then(
        (m) => m.ContactSiteComponent
      ),
  },
  {
    path: 'datenschutz',
    loadComponent: () =>
      import('./features/privacy-policy/privacy-policy-site/privacy-policy-site.component').then(
        (m) => m.PrivacyPolicySiteComponent
      ),
  },
  {
    path: 'impressum',
    loadComponent: () =>
      import('./features/imprint/imprint-site/imprint-site.component').then(
        (m) => m.ImprintSiteComponent
      ),
  },
  {
    path: 'gastronomie',
    loadComponent: () =>
      import(
        './features/landing/gastro-landing/gastro-landing-site/gastro-landing-site.component'
      ).then((m) => m.GastroLandingSiteComponent),
  },
  {
    path: '**',
    redirectTo: '',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { scrollPositionRestoration: 'enabled' })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
