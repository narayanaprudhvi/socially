import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import {FormGroup,FormControl,Validators,FormArray} from '@angular/forms';

@Component({
  selector: 'app-dummy-login',
  templateUrl: './dummy-login.component.html',
  styleUrls: ['./dummy-login.component.scss']
})
export class DummyLoginComponent {
  loginForm : FormGroup;

  firstLoginForm = true;
  otpForm = false;

  loginEmail: string = '';
  loginPassword: string = '';
  loginMobilee: string = '';
  loginValidateOtp: string = '';

  // SignupForm:FormGroup;

  constructor(private authServicee: AuthService, private router: Router) {
    this.loginForm = new FormGroup({
      myEmail: new FormControl('',[Validators.required,Validators.email]),
      myPassword: new FormControl('',[Validators.required,Validators.minLength(4)])

    });
  }

  ngOnInit() {
    // this.loginWithGoogle();
  }



  loginWithOTP(){
    this.firstLoginForm = false;
    this.otpForm = true;
  }

  login(){
    if(this.loginEmail == ''){
      alert('Please enter email');
      return;
    }
    if(this.loginPassword == ''){
      alert('Please enter password');
      return;
    }
    // this.authServicee.signInWithEmailPassword(this.loginEmail, this.loginPassword);
    this.loginEmail = '';
    this.loginPassword = '';
  }

  getOtp(){

  }

  ValidateOtp(){

  }
}
