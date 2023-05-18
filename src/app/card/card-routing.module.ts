import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CardComponent } from './components/card/card.component';
import { CardDetailComponent } from './components/card-detail/card-detail.component';

const routes: Routes = [
  {
    path: '', component: CardComponent
  },
  {
    path: ':cardId', component: CardDetailComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CardRoutingModule { }
