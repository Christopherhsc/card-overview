import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ProfileComponent } from './components/profile/profile.component';
import { UserLandingPageComponent } from './components/user-landing-page/user-landing-page.component';
import { NewsletterComponent } from '../shared/newsletter/newsletter.component';

const routes: Routes = [
  {
    path: '',
    component: UserLandingPageComponent,
    children: [
      {
        path: 'card',
        loadChildren: () =>
          import('./components/card/card-routing.module').then(
            (m) => m.CardRoutingModule,
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
