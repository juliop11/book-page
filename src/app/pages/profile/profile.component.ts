import { Component } from '@angular/core';
import { last } from 'rxjs';
import { User } from 'src/app/models/user';
import { UserService } from 'src/app/shared/user.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent {

  public user: User;

  constructor(public userService: UserService) {

  }
  public modificar(nuevoNombre: string, nuevoApellido: string, nuevoCorrero: string, nuevafoto: string) {

    let idUser = this.userService.user.id_user
    let nombre = nuevoNombre == "" ? null : nuevoNombre
    let apellido = nuevoApellido == "" ? null : nuevoApellido
    let email = nuevoCorrero == "" ? null : nuevoCorrero
    let photo = nuevafoto == "" ? null : nuevafoto
    let password = this.userService.user.password

    let newUser = new User(idUser, nombre, apellido, email, photo, password);

    console.log(newUser);

    this.userService.edit(newUser).subscribe((data) => {

      if (nombre != null) {
        this.userService.user.name = nombre
      }
      if (apellido != null) {
        this.userService.user.last_name = apellido
      }
      if (email != null) {
        this.userService.user.email = email
      }

      console.log(data);

    })
  }
}

