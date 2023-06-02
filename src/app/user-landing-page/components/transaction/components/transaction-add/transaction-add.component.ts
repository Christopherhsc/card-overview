import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { DataService } from '../../../../../shared/services/data.service';
import { LoadingController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-transaction-add',
  templateUrl: './transaction-add.component.html',
  styleUrls: ['./transaction-add.component.scss'],
})
export class TransactionAddComponent implements OnInit {
  form!: FormGroup;

  constructor(
    private dataService: DataService,
    private loadingCtrl: LoadingController,
    private router: Router
  ) {}

  ngOnInit() {
    this.form = new FormGroup({
      title: new FormControl(null, {
        updateOn: 'blur',
        validators: [
          Validators.required,
          Validators.minLength(1),
          Validators.maxLength(22),
        ],
      }),
      active: new FormControl(null, {
        updateOn: 'blur',
      }),
      price: new FormControl(null, {
        updateOn: 'blur',
      }),
      cardName: new FormControl(null, {
        updateOn: 'blur',
        validators: [Validators.maxLength(12)],
      }),
      date: new FormControl(null, {
        updateOn: 'blur',
      }),
    });
  }

  onCreateTransaction() {
    if (!this.form.valid) {
      return;
    }
    this.loadingCtrl
      .create({
        message: 'Creating transaction',
      })
      .then((loadingEl) => {
        loadingEl.present();
        this.dataService
          .addTransaction(
            this.form.value.title,
            (this.form.value.active = true),
            this.form.value.price,
            this.form.value.cardName,
            this.form.value.date
          )
          .subscribe(() => {
            loadingEl.dismiss()
            this.form.reset();
            this.router.navigate(['profile', 'transaction']);
          });
      });
  }
}
