import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, AbstractControl } from '@angular/forms';


@Component({
  selector: 'app-form-register',
  templateUrl: './form-register.component.html',
  styleUrls: ['./form-register.component.css']
})
export class FormRegisterComponent {

  public myForm: FormGroup;

  constructor(private formBuilder: FormBuilder) {

    this.buildForm();
  }



  private buildForm() {

    let minPassLength = 8;

    this.myForm = this.formBuilder.group({
      nombre: [, Validators.required],
      email: [, [Validators.required, Validators.email]],
      password: [, [Validators.required, Validators.minLength(minPassLength)]],
      confirmarContrasena: [, [Validators.required, this.checkPassword]]
    });

  }
  private checkPassword(control:AbstractControl){
    let res = {matchPassword : true};

    if(control.parent?.value.password == control.value)
    res = null

    return res
 }


  public register() {

    let user = this.myForm.value;
    console.log(user);
  }

 

  ngOnInit(): void{

  }
}
