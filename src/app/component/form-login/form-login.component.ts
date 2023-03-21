import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user';
import { NgForm } from '@angular/forms';
import { UserService } from 'src/app/shared/user.service';

@Component({
  selector: 'app-form-login',
  templateUrl: './form-login.component.html',
  styleUrls: ['./form-login.component.css']
})
export class FormLoginComponent {

  public user: User;

  constructor(private userService: UserService) {

    this.user = new User(0, "", "", "", "", "");

  }

  onSubmit(form: NgForm) {

    this.userService.postLogin(this.user).subscribe((data: User) => {
      console.log(data);
      if (this.userService.logueado = false) {
        console.log("Los datos no coinciden");
      }
      else {
        this.userService.user = data
      }
    })
    console.log(form.value);
    console.log(this.user);
  }

  ngOnInit(): void {

  }
}
