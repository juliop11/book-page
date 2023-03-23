import { Component } from '@angular/core';
import { Book } from 'src/app/models/book';
import { BooksService } from 'src/app/shared/books.service';
import { ToastrService } from 'ngx-toastr';
import { Respuesta } from 'src/app/models/respuesta';
import { UserService } from 'src/app/shared/user.service';

@Component({
  selector: 'app-update-book',
  templateUrl: './update-book.component.html',
  styleUrls: ['./update-book.component.css']
})
export class UpdateBookComponent {


  constructor(public BooksService: BooksService, private toastr: ToastrService, public userService: UserService) {


  }
  public insertar(id_book: number, title: string, type: string, author: string, price: number, photo: string) {

    let newBook = new Book(title, type, author, price, photo, this.userService.user.id_user, id_book);
    console.log(newBook);

    (this.BooksService.edit(newBook).subscribe((data) => {

      this.toastr.success("La referencia del libro " + newBook.id_book + " ha sido modificada");

    }))

  }
}


