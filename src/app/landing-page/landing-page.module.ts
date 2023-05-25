import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LandingPageRoutingModule } from './landing-page-routing.module';
import { IonicModule } from '@ionic/angular';
import { SharedModule } from '../shared/shared.module';

//custom components
import { LandingPageComponent } from './components/landing-page/landing-page.component';
import { AuthModule } from '../auth/auth.module';

@NgModule({
  declarations: [LandingPageComponent],
  imports: [CommonModule, LandingPageRoutingModule, IonicModule, SharedModule, AuthModule],
})
export class LandingPageModule {}
