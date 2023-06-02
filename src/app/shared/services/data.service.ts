import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, delay, map, switchMap, take, tap } from 'rxjs';
import { Transaction } from '../../user-landing-page/components/transaction/transaction.modal';
import { AuthService } from 'src/app/auth/auth.service';

interface Transactiondata {
  title: string;
  active: boolean;
  price: number;
  cardName: string;
  date: string;
}

@Injectable({
  providedIn: 'root',
})
export class DataService {
  databaseConnection =
    'https://card-overview-default-rtdb.europe-west1.firebasedatabase.app/';

  private _transactions = new BehaviorSubject<Transaction[]>([]);

  constructor(private authService: AuthService, private http: HttpClient) {}

  get transactions() {
    return this._transactions.asObservable();
  }

  fetchTransactions() {
    return this.http
      .get<{ [key: string]: Transactiondata }>(
        this.databaseConnection + '.json'
      )
      .pipe(
        map((resData) => {

          const transactions = [];
          for (const key in resData) {
            if (resData.hasOwnProperty(key)) {
              transactions.push(
                new Transaction(
                  key,
                  resData[key].title,
                  resData[key].active,
                  resData[key].price,
                  resData[key].cardName,
                  resData[key].date
                )
              );
            }
          }
          return transactions;
        }),
        tap((transactions) => {
          this._transactions.next(transactions);
        })
      );
  }

  getTransaction(id: string) {
    return this.transactions.pipe(
      take(1),
      map((transactions) => {
        return { ...transactions.find((t) => t.id === id) };
      })
    );
  }

  addTransaction(
    title: string,
    active: boolean,
    price: number,
    cardName: string,
    date: string
  ) {
    const newTransaction = new Transaction(
      Math.random().toString(),
      title,
      active,
      price,
      cardName,
      date
    );
    let generatedId: string;

    return this.http
      .post<{ name: string }>(this.databaseConnection + 'transactions.json', {
        ...newTransaction,
        id: null,
      })
      .pipe(
        switchMap((resData) => {
          generatedId = resData.name;
          return this.transactions;
        }),
        take(1),
        tap((transactions) => {
          newTransaction.id = generatedId;
          this._transactions.next(transactions.concat(newTransaction));
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
        const updatedTransactionIndex = transactions.findIndex(
          (transaction) => transaction.id === transactionId
        );
        const updatedTransactions = [...transactions];
        updatedTransactions[updatedTransactionIndex] = new Transaction(
          transactionId,
          title,
          active,
          price,
          cardName,
          date.toISOString()
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
        this._transactions.next(
          transactions.filter((c) => c.id !== transactionId)
        );
      })
    );
  }
}
