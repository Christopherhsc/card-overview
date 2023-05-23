import { Injectable } from '@angular/core';
import { Card } from './card.model';

@Injectable({
  providedIn: 'root',
})
export class CardService {
  private _cards: Card[] = [
    new Card('1', 'Blizzard Entertainment', true, 12, '1282'),
    new Card('2', 'Dropbox', true, 9, '1282'),
    new Card('3', 'Netflix', true, 11, '1282'),
    new Card('4', 'Viaplay', false, 8, '1282'),
  ];

  get cards() {
    return [...this._cards];
  }

  getCard(id: string) {
    return { ...this._cards.find((p) => p.id === id) };
  }

  constructor() {}
}
