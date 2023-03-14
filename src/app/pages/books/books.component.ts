import { Component } from '@angular/core';
import { Book } from 'src/app/models/book';
import { BooksService } from 'src/app/shared/books.service';
import { Respuesta } from 'src/app/models/respuesta';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent {

  public books: Book[];

  constructor(public BooksService: BooksService, private toastr: ToastrService) {

    this.books = []

    this.BooksService.getBooks().subscribe((data: Respuesta) => {
      console.log(data);

      this.books = data.data;

    })
  }


  // metodos
  public findBook(id_book: string) {

    let id = parseInt(id_book) // para cambiar a number
    console.log(id);

    this.BooksService.getBook(id).subscribe((resp: Respuesta) => {
      console.log(resp);

      this.books = resp.data;

    })
  }


  eliminarLibro(id_book: string) {

    let id = parseInt(id_book)

    this.BooksService.deleteBook(id).subscribe((resp: Respuesta) => {
      if (!resp.error) {
        console.log(resp.data);
        this.toastr.success("El libro ha sido eliminado")
        this.books = resp.data
      }
    })
  }
}


  // public insertar(id_book: number, id_user: number, title: string, type: string, author: string, price: number, photo: string) {

  //   let book = new Book(id_book, id_user, title, type, author, price, photo);

  //   this.books.push(book)

  // }

  // recogerCard(libro: Book) {

  //   let findBook = this.books.filter(index => index.id_book != libro.id_book);
  //   console.log(findBook);

  //   this.books = findBook

  // }

