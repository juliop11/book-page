import { Component } from '@angular/core';
import { Book } from 'src/app/models/book';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent {

  public books: Book[];

  constructor() {

    this.books = [
      new Book(234, 7, "El principito", "Tapa blanda", "Antonie de Saint", 25, "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5DOdmwI_VVPqoYsVGnoDX9UA3M0_hXP1BiQ&usqp=CAU"),
      new Book(655, 6, "Harry potter", "Tapa dura", "Joanne Rowling", 35, "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSIBa889rxTjtuFJTW5MOA7MXT_m77i7mfGBg&usqp=CAU"),
      new Book(557, 8, "La chica del tren", "Tapa blanda", "Paula Hawkins", 28, "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFPnric7nxjrwba_ktZFJP2cOrHhorE-EGew&usqp=CAU")
    ];
  }


  public insertar(id_book: number, id_user: number, title: string, type: string, author: string, price: number, photo: string) {

    let book = new Book(id_book, id_user, title, type, author, price, photo);

    this.books.push(book)

  }

  recogerCard(libro: Book){
      
    let findBook = this.books.filter(index => index.id_book != libro.id_book);
    console.log(findBook);

    this.books = findBook
    
  }
}
