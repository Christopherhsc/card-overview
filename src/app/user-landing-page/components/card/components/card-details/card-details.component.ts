import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CardService } from '../../card.service';
import { Card } from '../../card.model';

@Component({
  selector: 'app-card-details',
  templateUrl: './card-details.component.html',
  styleUrls: ['./card-details.component.scss'],
})
export class CardDetailsComponent implements OnInit {
  card?: Card;

  constructor(
    private activatedRoute: ActivatedRoute,
    private cardService: CardService
  ) {}

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe((paramMap) => {
      if (!paramMap.has('cardId')) {
        return;
      }
      const cardId = this.cardService.getCard(paramMap.get('cardId')!);
    });
  }
}
