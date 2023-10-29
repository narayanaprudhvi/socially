import { FormGroup, FormBuilder } from '@angular/forms';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  crossIconModel : any;


  constructor( private fb: FormBuilder, public router : Router){

  }

  clearCross(){
    this.crossIconModel = '';
  }
  onLogOut(){
    this.router.navigateByUrl('/login');
  }
}
