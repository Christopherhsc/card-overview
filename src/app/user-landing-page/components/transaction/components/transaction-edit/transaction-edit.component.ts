import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Transaction } from '../../transaction.modal';
import { LoadingController, ModalController } from '@ionic/angular';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { DataService } from '../../../../../shared/services/data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-transaction-edit',
  templateUrl: './transaction-edit.component.html',
  styleUrls: ['./transaction-edit.component.scss'],
})
export class TransactionEditComponent implements OnInit, OnDestroy {
  @Input() selectedTransaction?: Transaction;
  form!: FormGroup;

  constructor(
    private modalCtrl: ModalController,
    private dataService: DataService,
    private loadingCtrl: LoadingController,
    private router: Router
  ) {}

  ngOnInit() {
    this.form = new FormGroup({
      transactionId: new FormControl(this.selectedTransaction?.id, {
        updateOn: 'blur',
      }),
      title: new FormControl(this.selectedTransaction?.title, {
        updateOn: 'blur',
        validators: [
          Validators.required,
          Validators.minLength(1),
          Validators.maxLength(22),
        ],
      }),
      active: new FormControl(this.selectedTransaction?.active, {
        updateOn: 'blur',
      }),
      price: new FormControl(this.selectedTransaction?.price, {
        updateOn: 'blur',
      }),
      cardName: new FormControl(this.selectedTransaction?.cardName, {
        updateOn: 'blur',
        validators: [Validators.maxLength(12)],
      }),
      date: new FormControl(null, {
        updateOn: 'blur',
      }),
    });
  }

  onEditTransaction() {
    if (!this.form.valid) {
      return;
    }
    this.loadingCtrl
      .create({
        message: 'Updating transaction...',
      })
      .then((loadingEl) => {
        loadingEl.present();
        this.dataService
          .updateTransaction(
            this.form.value.transactionId,
            this.form.value.title,
            this.form.value.active,
            this.form.value.price,
            this.form.value.cardName,
            this.form.value.date
          )
          .subscribe(() => {
            loadingEl.dismiss();
            this.closeModal()
            this.backToTransactionView()
          });
      });
  }

  backToTransactionView(){
    this.router.navigate(['profile', 'transaction'])
  }

  deleteTransaction(transactionId: any){
    this.loadingCtrl.create({message: 'Deleting transaction...'}).then(loadingEl => {
      loadingEl.present()
    this.dataService.deleteTransaction(transactionId).subscribe(() => {
      loadingEl.dismiss()
    })

    })
    this.closeModal()
    this.backToTransactionView()
  }

  closeModal() {
    this.modalCtrl.dismiss();
  }

  ngOnDestroy() {}
}
