import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';


//custom components
import { AuthComponent } from './components/auth/auth.component';

//custom modules
import { UserLandingPageModule } from '../user-landing-page/user-landing-page.module';


@NgModule({
  declarations: [AuthComponent],
  imports: [
    CommonModule,
    IonicModule,
    UserLandingPageModule
  ],
  exports: [AuthComponent]
})
export class AuthModule { }
