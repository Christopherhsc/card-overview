import { NgModule, inject } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthComponent } from './components/auth/auth.component';
import { AuthGuard } from './auth.guard';
import { UserLandingPageComponent } from '../user-landing-page/components/user-landing-page/user-landing-page.component';

const routes: Routes = [
  {
    path: '',
    component: AuthComponent,
  },
  {
    path: 'profile',
    loadChildren: () =>
      import('../user-landing-page/user-landing-page.module').then(
        (m) => m.UserLandingPageModule
      ),
  },
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AuthRoutingModule {}


// {
//   path: 'profile',
//   component: UserLandingPageComponent,
//   // canActivate: [() => inject(AuthGuard).canActivate]
// },