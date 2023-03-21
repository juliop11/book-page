import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, AbstractControl } from '@angular/forms';
import { User } from 'src/app/models/user';
import { UserService } from 'src/app/shared/user.service';

@Component({
  selector: 'app-form-register',
  templateUrl: './form-register.component.html',
  styleUrls: ['./form-register.component.css']
})
export class FormRegisterComponent {

  public myForm: FormGroup;


  constructor(private formBuilder: FormBuilder, private userService: UserService) {

    this.buildForm();
  }

  private buildForm() {

    let minPassLength = 8;

    this.myForm = this.formBuilder.group({
      nombre: [, Validators.required],
      apellido: [, Validators.required],
      correo: [, [Validators.required, Validators.email]],
      foto: [, Validators.required],
      password: [, [Validators.required, Validators.minLength(minPassLength)]],
      confirmarContrasena: [, [Validators.required, this.checkPassword]]
    });

  }
  private checkPassword(control: AbstractControl) {
    let res = { matchPassword: true };

    if (control.parent?.value.password == control.value)
      res = null

    return res
  }


  public register() {

    let dataForm = this.myForm.value;
    let user = new User(0, dataForm.nombre, dataForm.apellido, dataForm.correo, null, dataForm.contraseña);
    console.log(user);

    this.userService.postRegister(user).subscribe(data => {

      console.log(data);

    })
  }

  ngOnInit(): void {

  }
}
