import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';


//custom components
import { LoginComponent } from './components/login/login.component';
import { ReactiveFormsModule, NgForm } from '@angular/forms';

//custom modules
import { UserLandingPageModule } from '../user-landing-page/user-landing-page.module';
import { RegisterComponent } from './components/register/register.component';


@NgModule({
  declarations: [LoginComponent, RegisterComponent],
  imports: [
    CommonModule,
    IonicModule,
    UserLandingPageModule,
    ReactiveFormsModule
  ],
  exports: []
})
export class AuthModule { }
