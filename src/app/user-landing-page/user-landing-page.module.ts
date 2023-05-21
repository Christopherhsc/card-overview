import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserLandingPageRoutingModule } from './user-landing-page-routing.module';
import { IonicModule } from '@ionic/angular';

// Custom components
import { LandingPageComponent } from './user-landing-page/landing-page.component';
import { CardComponent } from './components/card/card.component';
import { NewsletterComponent } from './components/newsletter/newsletter.component';
import { ProfileComponent } from './components/profile/profile.component';

@NgModule({
  declarations: [
    LandingPageComponent,
    CardComponent,
    NewsletterComponent,
    ProfileComponent,
  ],
  imports: [CommonModule, UserLandingPageRoutingModule, IonicModule],
})
export class UserLandingPageModule {}
