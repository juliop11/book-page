export class User {

    id_user: number
    name: string
    last_name: string
    email: string
    photo: string
    password: string

    constructor(id_usuario: number, nombre: string, apellido: string, correo: string, foto: string, contraseña: string) {

        this.id_user = id_usuario,
            this.name = nombre,
            this.last_name = apellido,
            this.email = correo,
            this.photo = foto,
            this.password = contraseña
    }
}
