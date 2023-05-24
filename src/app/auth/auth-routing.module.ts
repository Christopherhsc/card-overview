import { NgModule, inject } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthComponent } from './components/auth/auth.component';
import { AuthGuard } from './auth.guard';
import { UserLandingPageModule } from '../user-landing-page/user-landing-page.module';

const routes: Routes = [
  {
    path: '',
    component: AuthComponent,
    canActivate: [() => inject(AuthGuard).canActivate]
  },
  {
    path: '?',
    component: UserLandingPageModule
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AuthRoutingModule {}
