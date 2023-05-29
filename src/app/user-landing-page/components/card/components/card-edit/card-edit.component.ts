import { Component, Input, OnInit } from '@angular/core';
import { Card } from '../../card.model';
import { ModalController } from '@ionic/angular';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { CardService } from '../../card.service';

@Component({
  selector: 'app-card-edit',
  templateUrl: './card-edit.component.html',
  styleUrls: ['./card-edit.component.scss'],
})
export class CardEditComponent implements OnInit {
  @Input() selectedCard?: Card;
  form!: FormGroup;

  constructor(
    private modalCtrl: ModalController,
    private cardService: CardService
  ) {}

  ngOnInit() {
    this.form = new FormGroup({
      title: new FormControl(this.selectedCard?.title, {
        updateOn: 'blur',
        validators: [Validators.required, Validators.minLength(1), Validators.maxLength(22)],
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
    console.log(this.form);
    this.closeModal()
  }

  closeModal() {
    this.modalCtrl.dismiss();
  }
}
