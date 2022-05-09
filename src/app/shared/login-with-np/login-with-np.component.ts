import { Component, OnInit } from '@angular/core';
import {FormControl, Validators} from '@angular/forms';
import { AuthService } from '../../home/auth.service';

@Component({
  selector: 'app-login-with-np',
  templateUrl: './login-with-np.component.html',
  styleUrls: ['./login-with-np.component.scss']
})
export class LoginWithNpComponent implements OnInit {
  nameFormControl = new FormControl('', [Validators.required]);
  emailFormControl = new FormControl('', [Validators.required, Validators.email]);
  passwordFormControl = new FormControl('', [Validators.required]);

  constructor(public authservice:AuthService) { }

  email!: string;
  password!: string;

  ngOnInit(): void {
  }

  signUp() {
    this.authservice.SignUp(this.email, this.password);
    this.email = '';
    this.password = '';
    }

    SignInWithUserId() {
      this.authservice.SignIn(this.email, this.password);
      this.email = '';
      this.password = '';
      }

}
