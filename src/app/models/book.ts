export class Book {

    id_book: number
    id_user: number
    title: string
    type: string
    author: string
    price: number
    photo: string

    constructor( titulo: string, tipo: string, autor: string, precio: number, foto: string, usuario: number = 0, libro: number = 0){

        this.id_book = libro,
        this.id_user = usuario,
        this.title = titulo,
        this.type = tipo,
        this.author = autor,
        this.price = precio,
        this.photo = foto
    }
}

