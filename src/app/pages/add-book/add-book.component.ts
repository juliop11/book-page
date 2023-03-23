import { Component } from '@angular/core';
import { Book } from 'src/app/models/book';
import { BooksService } from 'src/app/shared/books.service';
import { ToastrService } from 'ngx-toastr';
import { Respuesta } from 'src/app/models/respuesta';
import { UserService } from 'src/app/shared/user.service';

@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.css']
})
export class AddBookComponent {

  public message: string;

  constructor(public BooksService: BooksService, private toastr: ToastrService,public userService:UserService) {

    this.message = null;
  }

  insertarLibro(title: string, type: string, author: string, price: string, photo: string) {

    
    let precio = parseInt(price)

    if ( title == "" || type == "" || author == "" || price == null || photo == "")
      this.toastr.error("Flata un campo obligatorio. ", "", { timeOut: 2000, positionClass: 'toast.top.center' });

    else {
      let newBook: Book = new Book(title, type, author, precio, photo,this.userService.user.id_user);
      console.log(newBook);
      

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
