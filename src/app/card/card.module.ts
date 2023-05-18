import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { CardRoutingModule } from './card-routing.module';

// my components
import { CardComponent } from './components/card/card.component';
import { CardDetailComponent } from './components/card-detail/card-detail.component';

@NgModule({
  imports: [CommonModule, CardRoutingModule, IonicModule],
  declarations: [CardComponent, CardDetailComponent]
})
export class CardModule {}
