import { Component } from '@angular/core';
import { CommonService } from 'src/app/services/common.service';

@Component({
  selector: 'app-articles-main',
  templateUrl: './articles-main.component.html',
  styleUrls: ['./articles-main.component.scss']
})
export class ArticlesMainComponent {


  articlesBigArray :any= [];
  showLoader : boolean = false;
  articlesMain : boolean = true;

  constructor(private common : CommonService){}


  ngOnInit(){
    this.getttnews();
    this.articlesMain = false;
    this.showLoader = true;
    setTimeout(() => {
      this.articlesMain = true;
      this.showLoader = false;
    }, 3000);
    // this.countries();
  }

  getttnews(){
    this.common.getNews().subscribe((res:any) =>{
      console.log(res.articles, ",,,,,,,nnnnnnnnnnnnnnnnnnnnnnnnnnnn");
      this.articlesBigArray = res.articles;
    })
  }



}
