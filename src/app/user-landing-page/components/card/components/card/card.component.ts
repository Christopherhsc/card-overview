import { Component, OnInit } from '@angular/core';
import { CardService } from '../../card.service';
import { Card } from '../../card.model';
import { IonItemSliding } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent implements OnInit {
  loadedCards!: Card[];
  constructor(private cardService: CardService, private router: Router) {}

  ngOnInit() {
    this.loadedCards = this.cardService.cards;
  }

  editCard(cardId: string, slidingItem: IonItemSliding){
    slidingItem.close()
    this.router.navigate(['/', cardId])
  }
}
