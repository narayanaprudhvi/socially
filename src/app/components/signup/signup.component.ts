import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
// import { AuthService } from 'src/app/services/auth.service';
import { CommonService } from 'src/app/services/common.service';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss'],
})
export class SignupComponent {
  signupForm: FormGroup;

  constructor(
    public fb: FormBuilder,
    public router: Router,
    private common: CommonService
  ) {
    this.signupForm = this.fb.group({
      fullName: ['', Validators.required,],
      mobileNumber: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      loginPassword: ['', [Validators.required, Validators.minLength(6)]],
    });
  }
  eyesOffOn: boolean = true;

  showAndHidePassword() {
    this.eyesOffOn = !this.eyesOffOn;
  }
  onSignupSubmit(){

  }

  scrollToTop(){
    window.scrollTo(0, 0);
  }
}
