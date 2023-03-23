import { Component } from '@angular/core';
import { Book } from 'src/app/models/book';
import { BooksService } from 'src/app/shared/books.service';
import { Respuesta } from 'src/app/models/respuesta';
import { ToastrService } from 'ngx-toastr';
import { User } from 'src/app/models/user';
import { UserService } from 'src/app/shared/user.service';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent {

  public books: Book[];
 

  constructor(public BooksService: BooksService, private toastr: ToastrService, public userService: UserService) {

    this.books = []
    // accedemos al servicio de usuario para recoger la información del user LOGUEADO
    // console.log(this.userService.user.id_user);
    this.BooksService.getBooks(this.userService.user.id_user).subscribe((data: Respuesta) => {
      console.log(data);

      this.books = data.data;
      console.log(this.books);
      

    })
  }


  // metodos
  public findBook(id_book: string) {

    let id = parseInt(id_book) // para cambiar a number
    // console.log(id);

    const book = this.books.find(book => book.id_book == id);
    // console.log(book);
    
    this.BooksService.getBook(book).subscribe((resp: Respuesta) => {
      // console.log(resp);
      this.books = resp.data
      // ñapa > revisar aapi
      // const findBook = resp.data.find(book => book.id_book == id)
      // this.books = [findBook];

    })
  }


  eliminarLibro(id_book: string) {

    let idBK = parseInt(id_book)

    this.BooksService.deleteBook(idBK,this.userService.user.id_user).subscribe((resp: Respuesta) => {
      if (!resp.error) {
        console.log(resp.data);
        this.toastr.success("El libro ha sido eliminado")
        
        this.BooksService.getBooks(this.userService.user.id_user).subscribe((data: Respuesta) => {
          console.log(data);
    
          this.books = data.data;
          console.log(this.books);
        })
    
      }
    })
  }
}


