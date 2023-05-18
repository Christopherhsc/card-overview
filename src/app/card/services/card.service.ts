import { Injectable } from '@angular/core';
import { Card } from '../model/card.model';

@Injectable({
  providedIn: 'root',
})
export class CardService {
  cards: Card[] = [
    {
      id: '1',
      title: 'Blizzard',
      active: true,
      price: 12,
      cardName: 9911,
    },
    {
      id: '2',
      title: 'Dropbox',
      active: true,
      price: 7,
      cardName: 9911,
    },
    {
      id: '3',
      title: 'Trackmania Canyon',
      active: false,
      price: 12,
      cardName: 9911,
    },
    {
      id: '4',
      title: 'Netflix',
      active: true,
      price: 20,
      cardName: 1212,
    },
  ];

  constructor() {}

  getAllCards() {
    return [...this.cards];
  }

  getCard(cardId: string) {
    return {
      ...this.cards.find((card) => {
        return card.id === cardId;
      }),
    };
  }

  deleteCard(cardId: string){
    this.cards = this.cards.filter(card => {
      return card.id !== cardId
    })
  }
}
