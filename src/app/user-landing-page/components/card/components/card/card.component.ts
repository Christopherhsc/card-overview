import { Component, OnDestroy, OnInit } from '@angular/core';
import { DataService } from '../../data.service';
import { Transaction } from '../../transaction.modal';
import { IonItemSliding } from '@ionic/angular';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent implements OnInit, OnDestroy {
  loadedTransactions!: Transaction[]
  private transactionsSub?: Subscription

  constructor(private dataService: DataService, private router: Router) {}

  ngOnInit() {
    this.transactionsSub = this.dataService.transactions.subscribe(transactions => {
      this.loadedTransactions = transactions
    }) 
  }

  editTransaction(transactionId: string, slidingItem: IonItemSliding){
    slidingItem.close()
    this.router.navigate(['/', transactionId])
  }

  ngOnDestroy(): void {
    if(this.transactionsSub){
      this.transactionsSub.unsubscribe()
    }
  }
}
