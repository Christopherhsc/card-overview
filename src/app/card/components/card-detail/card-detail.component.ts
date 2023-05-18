import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { CardService } from '../../services/card.service';
import { Card } from '../../model/card.model';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-card-detail',
  templateUrl: './card-detail.component.html',
  styleUrls: ['./card-detail.component.scss'],
})
export class CardDetailComponent implements OnInit {
  loadedCard?: Card;
  constructor(
    private activatedRoute: ActivatedRoute,
    private cardService: CardService,
    private router: Router,
    private alertCtrl: AlertController
  ) {}

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe((paramMap) => {
      if (!paramMap.has('cardId')) {
        //redirect
        this.router.navigate(['/']);
        return;
      }
      const cardId = paramMap.get('cardId');
      if (cardId !== null) {
        this.loadedCard = this.cardService.getCard(cardId);
      }
    });
  }

  onDeleteCard() {
    this.alertCtrl
      .create({
        header: 'DELETE',
        message: 'Do you really want to delete this transaction?',
        buttons: [
          {
            text: 'Cancel',
            role: 'cancel',
          },
          {
            text: 'delete',
            handler: () => {
              this.cardService.deleteCard(this.loadedCard?.id!);
              this.router.navigate(['/']);
            },
          },
        ],
      })
      .then((alertEl) => {
        alertEl.present();
      });
  }
}
