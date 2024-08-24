import { Component, Input } from '@angular/core';

@Component({
  selector: 'word-card',
  standalone: true,
  imports: [],
  template: `
    <div (click)="isReverse = !isReverse" class="card-wraper">
      @if (isReverse) {
        <p>
          <strong>{{ word.spanish }}</strong>
        </p>
      }
      @else {
        <p>{{ word.english }}</p>
      }
    </div>
  `,
  styles: `
    .card-wraper {
      background-color: #508C9B;
      padding: 10px;
      border-radius: 5px;
      margin:5px;
      cursor: pointer;
      min-width: 200px;
    }
  `,
})
export class WordCardComponent {
  @Input() word: any = {
    id: 0,
    english: 'empty',
    spanish: '',
  };
  isReverse = false;

  ngOnInit() {
    console.log('WordCardComponent ngOnInit');
    console.log(JSON.stringify(this.word))
  }
}
