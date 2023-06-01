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

  constructor() {}

  get cards() {
    return this._cards.asObservable();
  }

  getCard(cardId: string) {
    return this.cards.pipe(
      take(1),
      map((cards) => {
        return { ...cards.find((c) => c.id === cardId) };
      })
    );
  }

  generateRandomCardId() {
    const characters =
      'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let cardId = '';
    for (let i = 0; i < 10; i++) {
      const randomIndex = Math.floor(Math.random() * characters.length);
      cardId += characters.charAt(randomIndex);
    }
    return cardId;
  }

  addCard(
    cardId: string,
    title: string,
    active: boolean,
    price: number,
    cardName: string,
    date: Date
  ) {
    const newCard = new Card(
      cardId = this.generateRandomCardId(),
      title,
      active = true,
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
    console.log(newCard)
  });
      })
    );
  }

  updateCard(
    cardId: string,
    title: string,
    active: boolean,
    price: number,
    cardName: string,
    date: Date
  ) {
    return this.cards.pipe(
      take(1),
      delay(2000),
      tap((cards) => {
        console.log(this.cards, cards, cardId)
        const updatedCardIndex = cards.findIndex((card) => card.id === cardId);
        const updatedCards = [...cards];
        updatedCards[updatedCardIndex] = new Card(
          cardId,
          title,
          active,
          price,
          cardName,
          date
        );
        this._cards.next(updatedCards);
        console.log(updatedCards)
      })
    );
  }
  
  deleteCard(cardId: string) {
    return this.cards.pipe(
      take(1),
      delay(1000),
      tap((cards) => {
        this._cards.next(cards.filter((c) => c.id !== cardId));
      })
    );
  }
}
