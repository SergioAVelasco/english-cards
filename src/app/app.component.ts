import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';
import { CardsComponent } from './cards/cards.component';
import { NewGameComponent } from './new-game/new-game.component';

enum Sections {
  home = 'home',
  cards = 'cards',
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, LayoutComponent, CardsComponent, NewGameComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})

// is not working if we use enum :c
export class AppComponent {
  activeSection = Sections.home;
  wordCollection = [
    {
      id: 1,
      english: 'Thus',
      spanish: 'Por lo tanto',
    },
    {
      id: 2,
      english: 'Turnover',
      spanish: 'Facturacion',
    },
    {
      id: 3,
      english: 'Torn',
      spanish: 'Desgarrar',
    },
    {
      id: 4,
      english: 'Nuisance',
      spanish: 'Molestia',
    },
    {
      id: 5,
      english: 'Nix',
      spanish: 'Rechazar',
    },
  ];
}
