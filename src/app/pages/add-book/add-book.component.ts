import { Component } from '@angular/core';
import { Book } from 'src/app/models/book';
import { BooksService } from 'src/app/shared/books.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.css']
})
export class AddBookComponent {

  public books: Book[];

  constructor(public BooksService: BooksService, private toastr:ToastrService) {


  }
  public insertar(id_book: number, id_user: number, title: string, type: string, author: string, price: number, photo: string) {

    let book = new Book(id_book, id_user, title, type, author, price, photo);

    this.BooksService.add(book);

    this.toastr.success("Se ha añadido un nuevo libro");
  }
}
