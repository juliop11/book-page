import { Injectable } from '@angular/core';
import { Book } from '../models/book';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BooksService {

  private url = "http://localhost:3000/books" // url del api

  public book: Book;

  constructor(private http: HttpClient) { 


  }

  public getBooks() {

    return this.http.get(this.url)

  }

  public getBook(id_book:number){
    return this.http.get(`${this.url}?id=${id_book}`)
  }


  public postBook(newBook: Book) {

    return this.http.post(this.url, newBook)

  }


  public edit(book:Book){
    return this.http.put(this.url, book);
  }


  public deleteBook(id: number) {
    
    let httpOptions = {headers: null, body: {id_book:id}}
    return this.http.delete(this.url, httpOptions)

  }
 }