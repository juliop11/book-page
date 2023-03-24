import { Injectable } from '@angular/core';
import { Book } from '../models/book';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BooksService {

  private url = "http://localhost:3000/books" // url del api
  private url2 = "http://localhost:3000/booksPost"
  // private url3 = "http://localhost:3000/booksPut"
  // private url4 = "http://localhost:3000/booksDelete"

  public book: Book;

  constructor(private http: HttpClient) {


  }

  public getBooks(id_user:number) {
    console.log(id_user);
    
    return this.http.get( `${this.url}?id_user=${id_user}` )

  }

  public getBook(book: Book) {
    console.log(`${this.url}?id_user=${book.id_user}&?id_book=${book.id_book}`);
    
    return this.http.get(`${this.url}?id_user=${book.id_user}&id_book=${book.id_book}`)
  }


  public postBook(newBook: Book) {

    console.log(newBook);
    return this.http.post(this.url2, newBook)

  }


  public edit(book: Book) {
    console.log(book);
    
    return this.http.put(this.url, book);
  }


  public deleteBook(id_book: number, id_user:number) {
    console.log(id_book);
    console.log(id_user);
    
    let httpOptions = { headers: null, body: {id_user:id_user, id_book: id_book } }
    return this.http.delete(this.url, httpOptions)

  }
}