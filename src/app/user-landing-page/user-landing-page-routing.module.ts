import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserLandingPageModule } from './user-landing-page.module';
import { LandingPageComponent } from './user-landing-page/landing-page.component';

const routes: Routes = [{
  path: '',
  component: LandingPageComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserLandingPageRoutingModule { }
