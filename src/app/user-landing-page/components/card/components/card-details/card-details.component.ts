import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ModalController, NavController } from '@ionic/angular';

// custom components
import { Card } from '../../card.model';
import { CardEditComponent } from '../card-edit/card-edit.component';
import { CardService } from '../../card.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-card-details',
  templateUrl: './card-details.component.html',
  styleUrls: ['./card-details.component.scss'],
})
export class CardDetailsComponent implements OnInit, OnDestroy {
  card?: Card;
  private cardSub?: Subscription

  constructor(
    private activatedRoute: ActivatedRoute,
    private cardService: CardService,
    private modalCtrl: ModalController,
    private backCtrl: NavController
  ) {}

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe((paramMap) => {
      if (!paramMap.has('cardId')) {
        return;
      }
      const cardId = paramMap.get('cardId');
      if (cardId !== null) {
       this.cardSub = this.cardService.getCard(paramMap.get('cardId')!).subscribe((card) => {
          this.card = card;
        });
      }
    });
  }

  editCard() {
    this.modalCtrl
      .create({
        component: CardEditComponent,
        componentProps: { selectedCard: this.card },
      })
      .then((modalEl) => {
        modalEl.present();
      });
  }

  cardOverview() {
    this.backCtrl.back();
  }

  ngOnDestroy(): void {
    if(this.cardSub){
      this.cardSub?.unsubscribe()
    }
  }
}
