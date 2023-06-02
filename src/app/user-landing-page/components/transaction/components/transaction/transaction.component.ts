import { Component, OnDestroy, OnInit } from '@angular/core';
import { DataService } from '../../../../../shared/services/data.service';
import { Transaction } from '../../transaction.modal';
import { IonItemSliding } from '@ionic/angular';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-transaction',
  templateUrl: './transaction.component.html',
  styleUrls: ['./transaction.component.scss'],
})
export class TransactionComponent implements OnInit, OnDestroy {
  loadedTransactions?: Transaction[];
  private transactionsSub?: Subscription;
  transactions?: any[];

  constructor(private dataService: DataService, private router: Router) {}

  ngOnInit() {
    this.transactionsSub = this.dataService.transactions.subscribe(
      (transactions) => {
        this.loadedTransactions = transactions;
      }
    );
  }

  ionViewWillEnter() {
    this.dataService.fetchTransactions().subscribe((response) => {
      this.loadedTransactions = response;
    });
  }

  editTransaction(transactionId: string, slidingItem: IonItemSliding) {
    slidingItem.close();
    this.router.navigate(['/', transactionId]);
  }

  ngOnDestroy(): void {
    if (this.transactionsSub) {
      this.transactionsSub.unsubscribe();
    }
  }
}
