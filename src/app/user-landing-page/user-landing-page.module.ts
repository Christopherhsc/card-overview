import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserLandingPageRoutingModule } from './user-landing-page-routing.module';
import { IonicModule } from '@ionic/angular';

// Custom components
import { CardModule } from './components/card/card.module';
import { LandingPageComponent } from './user-landing-page/landing-page.component';
import { NewsletterComponent } from './components/newsletter/newsletter.component';
import { ProfileComponent } from './components/profile/profile.component';

@NgModule({
  declarations: [LandingPageComponent, NewsletterComponent, ProfileComponent],
  imports: [
    CommonModule,
    UserLandingPageRoutingModule,
    IonicModule,
    CardModule,
  ],
})
export class UserLandingPageModule {}
