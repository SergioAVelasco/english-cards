import { Component, Input } from '@angular/core';

@Component({
  selector: 'word-card',
  standalone: true,
  imports: [],
  template: `
    <div (click)="isReverse = !isReverse" class="card-wraper">
      <b>
        @if (isReverse) {
        {{ word.spanish }}
        } @else {
        {{ word.english }}
        }
      </b>
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
      color: white;
      font-size: 20px;
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
    console.log(JSON.stringify(this.word));
  }
}
