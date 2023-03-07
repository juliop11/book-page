import { Component } from '@angular/core';
import { Book } from 'src/app/models/book';
import { BooksService } from 'src/app/shared/books.service';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent {

  public books: Book[];

  constructor(public BooksService: BooksService) {

    this.books = this.BooksService.getAll()
  }

  libroBuscar(id_book: string) {
    
    if (id_book == "") {
      this.books = this.BooksService.getAll();
    }
    else {
      let number: number = Number(id_book);
      let libroBuscado = this.BooksService.getOne(number);
      
      if (libroBuscado != undefined) {
       console.log(libroBuscado);
    
        this.books = [libroBuscado];
      }
      else{ alert("Este libro no existe")}
    }
  }


  public insertar(id_book: number, id_user: number, title: string, type: string, author: string, price: number, photo: string) {

    let book = new Book(id_book, id_user, title, type, author, price, photo);

    this.books.push(book)

  }

  recogerCard(libro: Book) {

    let findBook = this.books.filter(index => index.id_book != libro.id_book);
    console.log(findBook);

    this.books = findBook

  }
}
