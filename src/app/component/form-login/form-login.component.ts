import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user';
import { NgForm } from '@angular/forms';
import { UserService } from 'src/app/shared/user.service';
import { Router } from '@angular/router';
import { Respuesta } from 'src/app/models/respuesta';

@Component({
  selector: 'app-form-login',
  templateUrl: './form-login.component.html',
  styleUrls: ['./form-login.component.css']
})
export class FormLoginComponent {

  public user: User;
 

  constructor(private userService: UserService, private router: Router) {

    this.user = new User(0, "", "", "", "", "");

  }

  onSubmit(form: NgForm) {
    console.log('datos form ***********************');
    console.log(form.value);
    console.log(this.user);

    this.userService.postLogin(this.user).subscribe((data: Respuesta) => {
      console.log(data);
      if (data.error) {
        console.log("Los datos no coinciden");
      }
      else {
        // cambiamos el valor del atributo USER del servicio USUARIO por el valor del usuario LOGEADO
        this.userService.user = data.userdata[0]
        this.userService.logueado = true
        this.router.navigate(['/books']);
      }
    })
   
  }

  ngOnInit(): void {

  }
}
