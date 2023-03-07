import { Component } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {RegisterValidators} from "../../../../core/validators/register-validators";
import IUser from "../../../../core/models/user.model";
import {AuthService} from "../../../../core/services/auth.service";

@Component({
  selector: 'auth-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent {
  title = 'Blood Donor Sign up';
  inSubmission = false;

  constructor(private auth: AuthService) {}

  name = new FormControl('', [
    Validators.required, Validators.minLength(3)
  ]);
  email = new FormControl('',
    [
      Validators.required,
      Validators.email
    ]);
  age = new FormControl<number | null>(null,
    [
      Validators.required,
      Validators.min(18),
      Validators.max(120)
    ]);
  password = new FormControl('',
    [
      Validators.required,
      Validators.pattern(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/gm)
    ]);
  confirm_password = new FormControl('',
    [
      Validators.required
    ]);
  phone = new FormControl('',
    [
      Validators.required,
      Validators.minLength(14),
      Validators.maxLength(14)
    ]);

  registerForm = new FormGroup({
    name: this.name,
    email: this.email,
    age: this.age,
    password: this.password,
    confirm_password: this.confirm_password,
    phone: this.phone
  }, [RegisterValidators.match('password', 'confirm_password')])

  async register() {
    this.inSubmission = true

    try {
      await this.auth.createUser(this.registerForm.value as IUser)
    } catch (e) {
      console.error(e)
      this.inSubmission = false
      return
    }
  }

}
