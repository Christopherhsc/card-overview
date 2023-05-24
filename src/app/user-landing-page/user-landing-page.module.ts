import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserLandingPageRoutingModule } from './user-landing-page-routing.module';
import { IonicModule } from '@ionic/angular';

// Custom components
import { CardModule } from './components/card/card.module';
import { ProfileComponent } from './components/profile/profile.component';
import { UserLandingPageComponent } from './components/user-landing-page/user-landing-page.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [UserLandingPageComponent, ProfileComponent],
  imports: [
    CommonModule,
    UserLandingPageRoutingModule,
    IonicModule,
    CardModule,
    SharedModule
  ],
})
export class UserLandingPageModule {}
