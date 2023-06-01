import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TransactionRoutingModule } from './transaction-routing.module';
import { IonicModule } from '@ionic/angular';
import { ReactiveFormsModule } from '@angular/forms';

// custom components
import { TransactionComponent } from './components/transaction/transaction.component';
import { TransactionDetailsComponent } from './components/transaction-details/transaction-details.component';
import { TransactionAddComponent } from './components/transaction-add/transaction-add.component';
import { TransactionEditComponent } from './components/transaction-edit/transaction-edit.component';

@NgModule({
  declarations: [
    TransactionComponent,
    TransactionDetailsComponent,
    TransactionAddComponent,
    TransactionEditComponent,
  ],
  imports: [CommonModule, TransactionRoutingModule, IonicModule, ReactiveFormsModule],
})
export class TransactionModule {}
