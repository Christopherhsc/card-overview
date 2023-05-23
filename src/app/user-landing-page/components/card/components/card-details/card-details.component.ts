import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
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
    private cardService: CardService,
    private router: Router
  ) {}

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe((paramMap) => {
      if (!paramMap.has('cardId')) {
        return;
      }
      const cardId = paramMap.get('cardId');
      if (cardId !== null) {
        this.card = this.cardService.getCard(cardId);
      }
    });
  }

  goToEditCard() {
    this.router.navigate(['cardId', '/edit' ]);
  }
}
