// src/app/app-routing.module.ts
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './pages/home/home.component';
import { MyOfferComponent } from './pages/my-offer/my-offer.component';

export const routes: Routes = [
  { path: '', component: HomeComponent }, // Standard‑Route
  { path: 'my-offer', component: MyOfferComponent },
  { path: '**', redirectTo: '' }, // Fallback: immer zur Startseite
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { scrollPositionRestoration: 'enabled' }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
