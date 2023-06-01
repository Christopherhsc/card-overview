import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Card } from '../../card.model';
import { LoadingController, ModalController } from '@ionic/angular';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { CardService } from '../../card.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-card-edit',
  templateUrl: './card-edit.component.html',
  styleUrls: ['./card-edit.component.scss'],
})
export class CardEditComponent implements OnInit, OnDestroy {
  @Input() selectedCard?: Card;
  form!: FormGroup;

  constructor(
    private modalCtrl: ModalController,
    private cardService: CardService,
    private loadingCtrl: LoadingController,
    private router: Router
  ) {}

  ngOnInit() {
    this.form = new FormGroup({
      cardId: new FormControl(this.selectedCard?.id, {
        updateOn: 'blur',
      }),
      title: new FormControl(this.selectedCard?.title, {
        updateOn: 'blur',
        validators: [
          Validators.required,
          Validators.minLength(1),
          Validators.maxLength(22),
        ],
      }),
      active: new FormControl(this.selectedCard?.active, {
        updateOn: 'blur',
      }),
      price: new FormControl(this.selectedCard?.price, {
        updateOn: 'blur',
      }),
      cardName: new FormControl(this.selectedCard?.cardName, {
        updateOn: 'blur',
        validators: [Validators.maxLength(12)],
      }),
      date: new FormControl(this.selectedCard?.Date?.toISOString(), {
        updateOn: 'blur',
      }),
    });
  }

  onEditTransiction() {
    if (!this.form.valid) {
      return;
    }
    this.loadingCtrl
      .create({
        message: 'Updating transaction...',
      })
      .then((loadingEl) => {
        loadingEl.present();
        this.cardService
          .updateCard(
            this.form.value.cardId,
            this.form.value.title,
            this.form.value.active,
            this.form.value.price,
            this.form.value.cardName,
            this.form.value.date
          )
          .subscribe(() => {
            loadingEl.dismiss();
            this.closeModal()
            this.backToCardView()
          });
      });
  }

  backToCardView(){
    this.router.navigate(['profile', 'card'])
  }

  deleteTransiction(cardId: any){
    this.loadingCtrl.create({message: 'Deleting transaction...'}).then(loadingEl => {
      loadingEl.present()
    this.cardService.deleteCard(cardId).subscribe(() => {
      loadingEl.dismiss()
    })

    })
    this.closeModal()
    this.backToCardView()
  }

  closeModal() {
    this.modalCtrl.dismiss();
  }

  ngOnDestroy() {}
}
