import { Injectable } from '@angular/core';
import { Book } from '../models/book';

@Injectable({
  providedIn: 'root'
})
export class BooksService {

  private books: Book[]

  constructor() {

    this.books = [
      new Book(234, 7, "El principito", "Tapa blanda", "Antonie de Saint", 25, "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5DOdmwI_VVPqoYsVGnoDX9UA3M0_hXP1BiQ&usqp=CAU"),
      new Book(655, 6, "Harry potter", "Tapa dura", "Joanne Rowling", 35, "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSIBa889rxTjtuFJTW5MOA7MXT_m77i7mfGBg&usqp=CAU"),
      new Book(557, 8, "La chica del tren", "Tapa blanda", "Paula Hawkins", 28, "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFPnric7nxjrwba_ktZFJP2cOrHhorE-EGew&usqp=CAU")
    ];

  }
  public getAll(): Book[] {

    return this.books
  }
  public getOne(id_libro: number): Book {

    let posicionLibro = -1;

    for (let i = 0; i < this.books.length; i++) {

      if (this.books[i].id_book == id_libro) {
        posicionLibro = i;
      }
    }
    return this.books[posicionLibro];

  }
  public add(book: Book): void {

    this.books.push(book)

  }
  public edit(book: Book): boolean {
    for (let i = 0; i < this.books.length; i++) {
      if (this.books[i].id_book == book.id_book) {
        this.books[i] = book
      }
    }
    return true;
  }
  public delete(id_book: number): boolean {
    for (let i = 0; i < this.books.length; i++) {
      if (this.books[i].id_book == id_book) {
        this.books.splice(i, 1);
      }
    }
    return true;
  }
}
