import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';

import { AuthRoutingModule } from './auth-routing.module';

//custom components
import { AuthComponent } from './components/auth/auth.component';

//custom modules
import { UserLandingPageModule } from '../user-landing-page/user-landing-page.module';


@NgModule({
  declarations: [AuthComponent],
  imports: [
    CommonModule,
    AuthRoutingModule,
    IonicModule,
    UserLandingPageModule
  ],
  exports: [AuthComponent]
})
export class AuthModule { }
