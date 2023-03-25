import { Component } from '@angular/core';
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

    let newUser = new User(this.userService.user.id_user,
      this.userService.user.name = nuevoNombre,
      this.userService.user.last_name = nuevoApellido,
      this.userService.user.email = nuevoCorrero,
      this.userService.user.photo = nuevafoto,
      this.userService.user.password)

    console.log(newUser);

    this.userService.edit(newUser).subscribe((data) => {

      console.log(data);

    })
  }
}

