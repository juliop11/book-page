import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Book } from 'src/app/models/book';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {

  @Input() cardBook: Book;
  @Input() par: boolean;

  @Output() eventBoton = new EventEmitter<Book>();


  mandarCard() {
    console.log(this.cardBook);

    this.eventBoton.emit(this.cardBook)
  }

}

