import { Component, Input, OnInit } from '@angular/core';
import { CardService } from '../../card.service';
import { Card } from '../../card.model';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-card-edit',
  templateUrl: './card-edit.component.html',
  styleUrls: ['./card-edit.component.scss'],
})
export class CardEditComponent implements OnInit {
  @Input() selectedCard?: Card;
  card?: Card;

  constructor(private cardSerive: CardService, private modalCtrl: ModalController) {}

  ngOnInit() {
  }

  closeModal() {
    this.modalCtrl.dismiss()
  }
}
