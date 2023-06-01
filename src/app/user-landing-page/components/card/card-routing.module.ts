import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CardComponent } from './components/card/card.component';
import { CardDetailsComponent } from './components/card-details/card-details.component';
import { CardAddComponent } from './components/card-add/card-add.component';
import { CardEditComponent } from './components/card-edit/card-edit.component';

const routes: Routes = [
  {
    path: '',
    component: CardComponent,
  },
  {
    path: 'new',
    component: CardAddComponent,
  },
  {
    path: ':transactionId',
    component: CardDetailsComponent,
  },
  {
    path: 'edit/:transactionId',
    component: CardEditComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CardRoutingModule {}
