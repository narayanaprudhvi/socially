import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';
import axios from 'axios';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  isLoggedIn = false;
  GoogleAuthProvider: any;

  private readonly apiUrl = 'https://news67.p.rapidapi.com/v2/country-news'; // Replace with the RapidAPI endpoint URL
  private readonly apiKey = 'b058385c26mshfc27ee77a25fecfp1e7260jsne08b1de65d33'; // Replace with your RapidAPI API key
  async makeRequest(): Promise<any> {
    try {
      const response = await axios.get(this.apiUrl, {
        headers: {
          'x-rapidapi-host': 'news67.p.rapidapi.com', // Replace with the RapidAPI host
          'x-rapidapi-key': this.apiKey,
        },
      });
      return response.data;
    } catch (error) {
      console.error('Error making API request:', error);
      throw error;
    }
  }

  constructor(public afs: AngularFireAuth, private router: Router) {}

  signInWithGoogle() {
  }

  // registerWithEmailPassword(user: {email : string, password : string}){
  //   return this.afs.createUserWithEmailAndPassword(user.email, user.password);
  // }

  // login method
  // signInWithEmailPassword(email: string, password: string) {
  //   return this.afs.signInWithEmailAndPassword(email, password).then(
  //     () => {
  //       this.router.navigateByUrl('/home');
  //       localStorage.setItem('token', 'true');
  //     },
  //     (err) => {
  //       alert(err.message);
  //       this.router.navigateByUrl('/welcome');
  //     }
  //   );
  // }

  // register method
  // signUpWithEmailPassword(email: string, password: string) {
  //   return this.afs.createUserWithEmailAndPassword(email, password).then(
  //     () => {
  //       this.router.navigateByUrl('/welcome');
  //       alert('Registration Successfully');
  //     },
  //     (err) => {
  //       alert(err.message);
  //       this.router.navigateByUrl('/welcome');
  //     }
  //   );
  // }



  get windowRef(){
    return window;
  }
}
