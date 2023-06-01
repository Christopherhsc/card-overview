import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TransactionComponent } from './components/transaction/transaction.component';
import { TransactionDetailsComponent } from './components/transaction-details/transaction-details.component';
import { TransactionAddComponent } from './components/transaction-add/transaction-add.component';
import { TransactionEditComponent } from './components/transaction-edit/transaction-edit.component';

const routes: Routes = [
  {
    path: '',
    component: TransactionComponent,
  },
  {
    path: 'new',
    component: TransactionAddComponent,
  },
  {
    path: ':transactionId',
    component: TransactionDetailsComponent,
  },
  {
    path: 'edit/:transactionId',
    component: TransactionEditComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TransactionRoutingModule {}
