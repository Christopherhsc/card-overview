import { Injectable } from '@angular/core';
import { Card } from './card.model';
import { BehaviorSubject, delay, map, take, tap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CardService {
  private _cards = new BehaviorSubject<Card[]>([
    new Card(
      '1',
      'Blizzard Entertainment',
      true,
      12,
      '1282',
      new Date('2018-12-01')
    ),
    new Card('2', 'Dropbox', true, 9, '1282', new Date('2019-05-01')),
    new Card('3', 'Netflix', true, 11, '1282', new Date('2018-01-01')),
    new Card('4', 'Viaplay', false, 8, '1282', new Date('2017-03-03')),
  ]);

  get cards() {
    return this._cards.asObservable();
  }

  getCard(id: string) {
    return this.cards.pipe(
      take(1),
      map((cards) => {
        return { ...cards.find((p) => p.id === id) };
      })
    );
  }

  addCard(
    title: string,
    active: boolean,
    price: number,
    cardName: string,
    date: Date
  ) {
    const newCard = new Card(
      Math.random().toString(),
      title,
      active,
      price,
      cardName,
      date
    );
    return this.cards.pipe(
      take(1),
      delay(1000),
      tap((cards) => {
        setTimeout(() => {
          this._cards.next(cards.concat(newCard));
        });
      })
    );
  }

  constructor() {}
}
