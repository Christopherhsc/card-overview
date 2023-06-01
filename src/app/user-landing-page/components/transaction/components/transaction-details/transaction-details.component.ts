import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ModalController, NavController } from '@ionic/angular';

// custom components
import { Transaction } from '../../transaction.modal';
import { TransactionEditComponent } from '../transaction-edit/transaction-edit.component';
import { DataService } from '../../../../../shared/services/data.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-transaction-details',
  templateUrl: './transaction-details.component.html',
  styleUrls: ['./transaction-details.component.scss'],
})
export class TransactionDetailsComponent implements OnInit, OnDestroy {
  transaction?: Transaction;
  private transactionSub?: Subscription

  constructor(
    private activatedRoute: ActivatedRoute,
    private dataService: DataService,
    private modalCtrl: ModalController,
    private backCtrl: NavController
  ) {}

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe((paramMap) => {
      if (!paramMap.has('transactionId')) {
        return;
      }
      const transactionId = paramMap.get('transactionId');
      if (transactionId !== null) {
       this.transactionSub = this.dataService.getTransaction(paramMap.get('transactionId')!).subscribe((transaction) => {
          this.transaction = transaction;
        });
      }
    });
  }

  editTransaction() {
    this.modalCtrl
      .create({
        component: TransactionEditComponent,
        componentProps: { selectedTransaction: this.transaction },
      })
      .then((modalEl) => {
        modalEl.present();
      });
  }

  transactionOverview() {
    this.backCtrl.back();
  }

  ngOnDestroy(): void {
    if(this.transactionSub){
      this.transactionSub?.unsubscribe()
    }
  }
}
