import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CardRoutingModule } from './card-routing.module';
import { IonicModule } from '@ionic/angular';
import { ReactiveFormsModule } from '@angular/forms';

// custom components
import { CardComponent } from './components/card/card.component';
import { CardDetailsComponent } from './components/card-details/card-details.component';
import { CardAddComponent } from './components/card-add/card-add.component';
import { CardEditComponent } from './components/card-edit/card-edit.component';

@NgModule({
  declarations: [
    CardComponent,
    CardDetailsComponent,
    CardAddComponent,
    CardEditComponent,
  ],
  imports: [CommonModule, CardRoutingModule, IonicModule, ReactiveFormsModule],
})
export class CardModule {}
