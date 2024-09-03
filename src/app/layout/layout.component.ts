import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MenuSections } from '../menu-sections';

@Component({
  selector: 'Layout',
  standalone: true,
  imports: [CommonModule],
  template: `<section>
    <header>
      <h2>English improver 3000</h2>
      <div class="menu">Jamburger</div>
    </header>
    <div class="game-container">
      <div class="game-menu">
        <b class="game-user">Invitado</b>
        <div class="game-menu-option" (click)="handleClick(sections.language)">
          <div
            class="arrow"
            [ngClass]="activeSection === sections.language ? 'active' : ''"
          ></div>
          Idioma
        </div>
        <div class="game-menu-option" (click)="handleClick(sections.profile)">
          <div
            class="arrow"
            [ngClass]="activeSection === sections.profile ? 'active' : ''"
          ></div>
          Perfil
        </div>
        <div class="game-menu-option" (click)="handleClick(sections.newGame)">
          <div
            class="arrow"
            [ngClass]="activeSection === sections.newGame ? 'active' : ''"
          ></div>
          Nuevo Juego
        </div>
        <div class="game-menu-option" (click)="handleClick(sections.myWords)">
          <div
            class="arrow"
            [ngClass]="activeSection === sections.myWords ? 'active' : ''"
          ></div>
          Mis palabras
        </div>
        <div class="game-menu-option" (click)="handleClick(sections.ranking)">
          <div
            class="arrow"
            [ngClass]="activeSection === sections.ranking ? 'active' : ''"
          ></div>
          Rankings
        </div>
      </div>
      <div class="game-content">
        <ng-content></ng-content>
      </div>
    </div>
  </section>`,
  styleUrl: './layout.component.scss',
})
export class LayoutComponent {
  @Input() activeSection: MenuSections = MenuSections.newGame;
  @Output() sectionSelected = new EventEmitter<MenuSections>();
  sections = MenuSections;
  handleClick(section: MenuSections) {
    this.sectionSelected.emit(section);
  }
}
