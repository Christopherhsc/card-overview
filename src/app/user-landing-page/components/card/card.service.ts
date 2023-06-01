import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, delay, map, take, tap } from 'rxjs';
import { Card } from './card.model';
import { AuthService } from 'src/app/auth/auth.service';

@Injectable({
  providedIn: 'root',
})
export class CardService {
  databaseConnection = 'https://card-overview-default-rtdb.europe-west1.firebasedatabase.app/'

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

  constructor(private authService: AuthService, private http: HttpClient) {}

  get cards() {
    return this._cards.asObservable();
  }

  getTransaction(cardId: string) {
    return this.cards.pipe(
      take(1),
      map((cards) => {
        return { ...cards.find((c) => c.id === cardId) };
      })
    );
  }

  generateRandomTransactionId() {
    const characters =
      'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let cardId = '';
    for (let i = 0; i < 10; i++) {
      const randomIndex = Math.floor(Math.random() * characters.length);
      cardId += characters.charAt(randomIndex);
    }
    return cardId;
  }

  addTransaction(
    cardId: string,
    title: string,
    active: boolean,
    price: number,
    cardName: string,
    date: Date
  ) {
    const newCard = new Card(
      cardId,
      title,
      active,
      price,
      cardName,
      date
    );

    this.http.post(this.databaseConnection, 'transactions.json')

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

  updateTransaction(
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
