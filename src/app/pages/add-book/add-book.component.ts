import { Component } from '@angular/core';
import { Book } from 'src/app/models/book';
import { BooksService } from 'src/app/shared/books.service';
import { ToastrService } from 'ngx-toastr';
import { Respuesta } from 'src/app/models/respuesta';

@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.css']
})
export class AddBookComponent {

  public message: string;

  constructor(public BooksService: BooksService, private toastr: ToastrService) {

    this.message = null;
  }

  insertarLibro(id_book: string, id_user: string, title: string, type: string, author: string, price: string, photo: string) {

    let idBook = parseInt(id_book)
    let idUser = parseInt(id_user)
    let precio = parseInt(price)

    if (id_book == null || id_user == null || title == "" || type == "" 
    || author == "" || price == null || photo == "")

      this.toastr.error("Flata un campo obligatorio. ", "", { timeOut: 2000, positionClass: 'toast.top.center' });

    else {
      let newBook: Book = new Book(idBook, idUser, title, type, author, precio, photo);

      this.BooksService.postBook(newBook).subscribe((resp: Respuesta) => {
        if (!resp.error) {

          this.toastr.success("Se ha añadido un nuevo libro. ", "", { timeOut: 2000, positionClass: 'toast.top.center' });

          this.BooksService.book = null;
        }
        else
        this.toastr.warning("El libro ya existe", "", { timeOut: 2000, positionClass: 'toast.top.center' })
      })
    }

  }
}
