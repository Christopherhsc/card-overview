import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ProfileComponent } from './components/profile/profile.component';
import { UserLandingPageComponent } from './components/user-landing-page/user-landing-page.component';
import { NewsletterComponent } from '../shared/components/newsletter/newsletter.component';
import { AuthGuard } from '../auth/auth.guard';

const routes: Routes = [
  {
    path: 'profile',
    component: UserLandingPageComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: 'newsletter',
        component: NewsletterComponent,
      },
      {
        path: 'settings',
        component: ProfileComponent,
      },
      {
        path: 'transaction',
        loadChildren: () =>
          import('./components/transaction/transaction-routing.module').then(
            (m) => m.TransactionRoutingModule
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
