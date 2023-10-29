import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonService } from 'src/app/services/common.service';

@Component({
  selector: 'app-trendings',
  templateUrl: './trendings.component.html',
  styleUrls: ['./trendings.component.scss']
})
export class TrendingsComponent {

  newsArray : any[] = [];

  constructor(private _router: Router, private common : CommonService){

  }
  ngOnInit(){
    this.getNewss();
  }

  getNewss(){
    this.common.getNews().subscribe((res:any) =>{
      // console.log(res, ",,,,,,,,,,,.............");
      this.newsArray = res.articles;
      console.log(this.newsArray);

    })
  }
  singleNewsArray = [];
  goToArticles(i:any){
    console.log(this.newsArray[i], "//////////////////////////////////");
    this.singleNewsArray = this.newsArray[i];
    console.log(this.singleNewsArray);
  }

}
