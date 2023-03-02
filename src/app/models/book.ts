export class Book {

    id_book: number
    id_user: number
    title: string
    type: string
    author: string
    price: number
    photo: string

    constructor(libro: number = 0, usuario: number = 0, titulo: string, tipo: string, autor: string, precio: number, foto: string){

        this.id_book = libro,
        this.id_user = usuario,
        this.title = titulo,
        this.type = tipo,
        this.author = autor,
        this.price = precio,
        this.photo = foto
    }
}

