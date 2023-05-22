import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserLandingPageModule } from './user-landing-page.module';
import { LandingPageComponent } from './user-landing-page/landing-page.component';
import { NewsletterComponent } from './components/newsletter/newsletter.component';
import { ProfileComponent } from './components/profile/profile.component';
import { CardComponent } from './components/card/components/card/card.component';

const routes: Routes = [
  {
    path: '',
    component: LandingPageComponent,
    children: [
      {
        path: 'card',
        loadChildren: () =>
          import('./components/card/card-routing.module').then(
            (m) => m.CardRoutingModule
          ),
      },
      {
        path: 'newsletter',
        component: NewsletterComponent,
      },
      {
        path: 'profile',
        component: ProfileComponent,
      },
      {
        path: ':cardId',
        loadChildren: () =>
          import('./components/card/card-routing.module').then(
            (m) => m.CardRoutingModule
          ),
      },
      { path: '', redirectTo: '', pathMatch: 'full' },
    ],
  },
  { path: '', redirectTo: '', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UserLandingPageRoutingModule {}
