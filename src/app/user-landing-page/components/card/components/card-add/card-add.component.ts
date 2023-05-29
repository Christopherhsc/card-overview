import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { CardService } from '../../card.service';
import { LoadingController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-card-add',
  templateUrl: './card-add.component.html',
  styleUrls: ['./card-add.component.scss'],
})
export class CardAddComponent implements OnInit {
  form!: FormGroup;

  constructor(
    private cardService: CardService,
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

  onCreateTransiction() {
    if (!this.form.valid) {
      return;
    }
    this.loadingCtrl
      .create({
        message: 'Creating transiction',
      })
      .then((loadingEl) => {
        loadingEl.present();
        this.cardService
          .addCard(
            this.form.value.title,
            (this.form.value.active = true),
            +this.form.value.price,
            this.form.value.cardName,
            new Date(this.form.value.date)
          )
          .subscribe(() => {
            loadingEl.dismiss()
            this.form.reset();
            this.router.navigate(['profile', 'card']);
          });
      });
  }
}
