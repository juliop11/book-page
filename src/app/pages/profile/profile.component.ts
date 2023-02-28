import { Component } from '@angular/core';
import { User } from 'src/app/models/user';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent {

  usuario: User;

  constructor() {

    this.usuario = new User(1234, "Julio", "Pérez", "julioperezobrero@hotmail.com", "https://img.freepik.com/foto-gratis/hombre-sujetando-vaso_1258-340.jpg?size=626&ext=jpg&ga=GA1.2.939502610.1676634689&semt=sph", "456123");

  }
  public modificar(nuevoNombre: string, nuevoApellido: string, nuevoCorrero: string, nuevafoto: string) {

    this.usuario.name = nuevoNombre,
      this.usuario.last_name = nuevoApellido,
      this.usuario.email = nuevoCorrero,
      this.usuario.photo = nuevafoto

      console.log(this.usuario);
      
  }
}

