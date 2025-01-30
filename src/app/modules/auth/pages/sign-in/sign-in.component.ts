import { Component, OnInit } from '@angular/core';
import { BtnComponent } from '../../../common-components/btn/btn.component';
import { InputComponent } from '../../../common-components/input/input.component';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-sign-in',
  imports: [BtnComponent, InputComponent, ReactiveFormsModule],
  templateUrl: './sign-in.component.html',
  styles: ``,
})
export class SignInComponent implements OnInit {
  signinForm: FormGroup = new FormGroup({});
  onForgotPasswordHandler(arg0: string) {
    throw new Error('Method not implemented.');
  }
  signinBtnHandler(arg0: string) {
    throw new Error('Method not implemented.');
  }
  ngOnInit(): void {
    this.createSignin();
  }
  createSignin() {
    this.signinForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required]),
    });
  }
}
