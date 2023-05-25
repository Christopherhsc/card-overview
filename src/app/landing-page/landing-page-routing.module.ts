import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingPageComponent } from './components/landing-page/landing-page.component';
import { NewsletterComponent } from '../shared/newsletter/newsletter.component';

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
        loadChildren: () => import('../auth/auth.module').then((m) => m.AuthModule),
      },
    ]
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LandingPageRoutingModule {}
