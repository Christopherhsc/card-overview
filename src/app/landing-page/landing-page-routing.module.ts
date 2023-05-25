import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingPageComponent } from './components/landing-page/landing-page.component';
import { NewsletterComponent } from '../shared/newsletter/newsletter.component';
import { LoginComponent } from '../auth/components/login/login.component';

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
        component: LoginComponent
      },
    ],
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LandingPageRoutingModule {}
