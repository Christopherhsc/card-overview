import { Component, OnInit } from '@angular/core';
import { CardService } from '../../card.service';
import { Card } from '../../card.model';

@Component({
  selector: 'app-card-edit',
  templateUrl: './card-edit.component.html',
  styleUrls: ['./card-edit.component.scss'],
})
export class CardEditComponent  implements OnInit {

  constructor(private cardSerive: CardService) { }

  ngOnInit() {
  }

}
