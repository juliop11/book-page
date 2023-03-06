import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Book } from 'src/app/models/book';
import { BooksService } from 'src/app/shared/books.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {

  @Input() cardBook: Book;
  @Input() par: boolean;

  @Output() eventBoton = new EventEmitter<Book>();
constructor(public BooksService:BooksService){

}

 mandarCard() {
    
    this.BooksService.delete(this.cardBook.id_book)
  }

}

