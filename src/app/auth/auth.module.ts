import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';


//custom components
import { LoginComponent } from './components/login/login.component';

//custom modules
import { UserLandingPageModule } from '../user-landing-page/user-landing-page.module';


@NgModule({
  declarations: [LoginComponent],
  imports: [
    CommonModule,
    IonicModule,
    UserLandingPageModule
  ],
  exports: [LoginComponent]
})
export class AuthModule { }
