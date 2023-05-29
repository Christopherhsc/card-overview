import { Component, OnDestroy, OnInit } from '@angular/core';
import { CardService } from '../../card.service';
import { Card } from '../../card.model';
import { IonItemSliding } from '@ionic/angular';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent implements OnInit, OnDestroy {
  loadedCards!: Card[]
  private cardsSub?: Subscription

  constructor(private cardService: CardService, private router: Router) {}

  ngOnInit() {
    this.cardsSub = this.cardService.cards.subscribe(cards => {
      this.loadedCards = cards
    }) 
  }

  editCard(cardId: string, slidingItem: IonItemSliding){
    slidingItem.close()
    this.router.navigate(['/', cardId])
  }

  ngOnDestroy(): void {
    if(this.cardsSub){
      this.cardsSub.unsubscribe()
    }
  }
}
