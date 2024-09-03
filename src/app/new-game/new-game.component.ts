import { Component } from '@angular/core';

@Component({
  selector: 'new-game',
  standalone: true,
  imports: [],
  template: `
    <div class="main-wrapper">
      <h4>Options</h4>
      <b> Dificulty: </b>

      <div class="input-group">
        <input
          type="radio"
          name="easy"
          id="easy"
          value="easy"
          [checked]="selectedOption === 'easy'"
          (click)="selectedOption = 'easy'"
          disabled
        />
        <label for="easy">Easy</label>
        <input type="radio" name="normal" id="normal" value="normal" />
        <label for="normal">Normal</label>
        <input type="radio" name="hard" id="hard" value="hard" />
        <label for="hard">Hard</label>
        <input
          type="radio"
          name="test"
          id="test"
          value="test"
          [checked]="selectedOption === 'test'"
          (click)="selectedOption = 'test'"
        />
        <label for="Test">Test</label>
      </div>
      <button>
        <b> Start </b>
      </button>
    </div>
  `,
  styles: `
    .main-wrapper {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      }
      .input-group {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        padding: 10px 0;
      }
      `,
})
export class NewGameComponent {
  selectedOption = 'test';
}
