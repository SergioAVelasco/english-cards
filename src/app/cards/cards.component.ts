import { Component, Input } from '@angular/core';
import { WordCardComponent } from '../word-card/word-card.component';

@Component({
  selector: 'cards-collection',
  standalone: true,
  imports: [WordCardComponent],
  templateUrl: './cards.component.html',
  styleUrl: './cards.component.scss',
})
export class CardsComponent {
  @Input() words: any[] = [];
}
