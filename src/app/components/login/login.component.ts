import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { Observable } from 'rxjs';
// import { AuthService } from 'src/app/services/auth.service';
import { CommonService } from 'src/app/services/common.service';

// import { AngularFireAuth } from '@angularfire/auth';
// import * as firebase from 'firebase/app';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  providers: [MessageService],
})
export class LoginComponent {
  loginForm: FormGroup;
  signupForm: FormGroup;

  loginData = 'showLoginForm';

  data: any;

  ngOnInit(){
    // this.getNewss();
  }

  // getNewss(){
  // this.common.getNews().subscribe((news) =>{
  //   console.log(news, ":............");

  // })
  // }

  constructor(public fb: FormBuilder, private messageService: MessageService, public router : Router,
     private common : CommonService) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      loginPassword: ['', [Validators.required, Validators.minLength(6)]],
    });

    this.signupForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      loginPassword: ['', [Validators.required, Validators.minLength(6)]],
    })
  }

  eyesOffOn: boolean = true;

  showAndHidePassword() {
    this.eyesOffOn = !this.eyesOffOn;
  }
  onLoginSubmit() {
    window.scrollTo(0, 0);
    this.messageService.add({
      severity: 'success',
      summary: 'Success',
      detail: 'Login Successfully',
    });
    setTimeout(() => {
      this.router.navigateByUrl('/home');
    }, 2000);
  }

  showSIGNUPform(){
    // this.router.navigateByUrl('/signup');
    this.loginData = 'showSignUpForm';
    window.scrollTo(0, 0);
  }

  mobileNumber : any;
  otpotp : any;
  scrollToTop(){
    window.scrollTo(0, 0);
  }

}
