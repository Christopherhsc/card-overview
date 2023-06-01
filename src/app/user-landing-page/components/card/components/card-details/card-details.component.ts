import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ModalController, NavController } from '@ionic/angular';

// custom components
import { Transaction } from '../../transaction.modal';
import { CardEditComponent } from '../card-edit/card-edit.component';
import { DataService } from '../../data.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-card-details',
  templateUrl: './card-details.component.html',
  styleUrls: ['./card-details.component.scss'],
})
export class CardDetailsComponent implements OnInit, OnDestroy {
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
        component: CardEditComponent,
        componentProps: { selectedTransaction: this.transaction },
      })
      .then((modalEl) => {
        modalEl.present();
      });
  }

  cardOverview() {
    this.backCtrl.back();
  }

  ngOnDestroy(): void {
    if(this.transactionSub){
      this.transactionSub?.unsubscribe()
    }
  }
}
