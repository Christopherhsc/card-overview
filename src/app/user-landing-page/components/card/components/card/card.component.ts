import { Component, OnInit } from '@angular/core';
import { CardService } from '../../card.service';
import { Card } from '../../card.model';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent implements OnInit {
  loadedCards!: Card[];
  constructor(private cardService: CardService) {}

  ngOnInit() {
    this.loadedCards = this.cardService.cards
  }
}
