import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingPageComponent } from './components/landing-page/landing-page.component';
import { NewsletterComponent } from '../shared/newsletter/newsletter.component';
import { AuthComponent } from '../auth/components/auth/auth.component';

const routes: Routes = [
  {
    path: '',
    component: LandingPageComponent,
    children: [
      {
        path: 'newsletter',
        component: NewsletterComponent,
      },
      {
        path: 'login',
        component: AuthComponent
      },
    ]
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LandingPageRoutingModule {}
