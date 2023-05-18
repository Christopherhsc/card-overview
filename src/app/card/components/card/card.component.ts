import { Component, OnInit } from '@angular/core';
import { CardService } from '../../services/card.service';
import { Card } from '../../model/card.model';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent implements OnInit {
  cards: Card[] = []

  constructor(private cardsService: CardService) {}

  ngOnInit() {
    this.cards = this.cardsService.getAllCards()
  }
}
