import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';
import { CardsComponent } from './cards/cards.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, LayoutComponent, CardsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  wordCollection = [
    {
      id: 1,
      english: 'Hello',
      spanish: 'Hola',
    },
    {
      id: 2,
      english: 'Bye',
      spanish: 'Adiós',
    },
    {
      id: 3,
      english: 'Good morning',
      spanish: 'Buenos días',
    },
    {
      id: 4,
      english: 'Good night',
      spanish: 'Buenas noches',
    },
  ];
}
