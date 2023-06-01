import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, delay, map, take, tap } from 'rxjs';
import { Transaction } from '../../user-landing-page/components/transaction/transaction.modal';
import { AuthService } from 'src/app/auth/auth.service';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  databaseConnection = 'https://card-overview-default-rtdb.europe-west1.firebasedatabase.app/'

  private _transactions = new BehaviorSubject<Transaction[]>([
    new Transaction(
      '1',
      'Blizzard Entertainment',
      true,
      12,
      '1282',
      new Date('2018-12-01')
    ),
    new Transaction('2', 'Dropbox', true, 9, '1282', new Date('2019-05-01')),
    new Transaction('3', 'Netflix', true, 11, '1282', new Date('2018-01-01')),
    new Transaction('4', 'Viaplay', false, 8, '1282', new Date('2017-03-03')),
  ]);

  constructor(private authService: AuthService, private http: HttpClient) {}

  get transactions() {
    return this._transactions.asObservable();
  }

  getTransaction(transactionId: string) {
    return this.transactions.pipe(
      take(1),
      map((transactions) => {
        return { ...transactions.find((c) => c.id === transactionId) };
      })
    );
  }

  addTransaction(
    transactionId: string,
    title: string,
    active: boolean,
    price: number,
    cardName: string,
    date: Date
  ) {
    const newTransaction = new Transaction(
      transactionId,
      title,
      active,
      price,
      cardName,
      date
    );

    this.http.post(this.databaseConnection + 'transactions.json', {...newTransaction, id: null});

    return this.transactions.pipe(
      take(1),
      delay(1000),
      tap((transactions) => {
        setTimeout(() => {
          this._transactions.next(transactions.concat(newTransaction));
  });
      })
    );
  }

  updateTransaction(
    transactionId: string,
    title: string,
    active: boolean,
    price: number,
    cardName: string,
    date: Date
  ) {
    return this.transactions.pipe(
      take(1),
      delay(2000),
      tap((transactions) => {
        const updatedTransactionIndex = transactions.findIndex((transaction) => transaction.id === transactionId);
        const updatedTransactions = [...transactions];
        updatedTransactions[updatedTransactionIndex] = new Transaction(
          transactionId,
          title,
          active,
          price,
          cardName,
          date
        );
        this._transactions.next(updatedTransactions);
      })
    );
  }
  
  deleteTransaction(transactionId: string) {
    return this.transactions.pipe(
      take(1),
      delay(1000),
      tap((transactions) => {
        this._transactions.next(transactions.filter((c) => c.id !== transactionId));
      })
    );
  }
}
