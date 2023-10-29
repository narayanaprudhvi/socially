import { FormGroup, FormBuilder } from '@angular/forms';
import { Component,AfterViewInit } from '@angular/core';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  currentDateTime: Date = new Date();

  feedsForm : FormGroup;
  feedData : any ={};

  postsArray : any =[
    {
      profileName : 'narayana Prudhvi',
      profileNickName : 'nP',
      profileTime : '25',
      profilePostContent : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam facilis maiores quas corporis, quidem officiis harum commodi similique dolores excepturi nihil earum dolore fuga. Temporibus aspernatur culpa accusantium perferendis consequatur',
    },
    {
      profileName : 'venkat Raju',
      profileNickName : 'V R',
      profileTime : '40',
      profilePostContent : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam facilis maiores quas corporis, quidem officiis harum commodi similique dolores excepturi nihil earum dolore fuga. Temporibus aspernatur culpa accusantium perferendis consequatur'
    },
    {
      profileName : 'Ashok Kumar',
      profileNickName : 'A K',
      profileTime : '50',
      profilePostContent : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam facilis maiores quas corporis, quidem officiis harum commodi similique dolores excepturi nihil earum dolore fuga. Temporibus aspernatur culpa accusantium perferendis consequatur'
    },
    {
      profileName : 'Uday Kumar',
      profileNickName : 'U K',
      profileTime : '12',
      profilePostContent : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam facilis maiores quas corporis, quidem officiis harum commodi similique dolores excepturi nihil earum dolore fuga. Temporibus aspernatur culpa accusantium perferendis consequatur'
    },
    {
      profileName : 'shivani',
      profileNickName : 'S V',
      profileTime : '45',
      profilePostContent : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam facilis maiores quas corporis, quidem officiis harum commodi similique dolores excepturi nihil earum dolore fuga. Temporibus aspernatur culpa accusantium perferendis consequatur'
    },
    {
      profileName : 'Gayathri',
      profileNickName : 'G',
      profileTime : '22',
      profilePostContent : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam facilis maiores quas corporis, quidem officiis harum commodi similique dolores excepturi nihil earum dolore fuga. Temporibus aspernatur culpa accusantium perferendis consequatur'
    },
    {
      profileName : 'Adithya',
      profileNickName : 'A B D',
      profileTime : '32',
      profilePostContent : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam facilis maiores quas corporis, quidem officiis harum commodi similique dolores excepturi nihil earum dolore fuga. Temporibus aspernatur culpa accusantium perferendis consequatur'
    },
  ]

  constructor(private fb : FormBuilder) {
    this.feedsForm = this.fb.group({
    })
   }

  ngOnInit() {
    this.updateDateTime();
    setInterval(() => {
      this.updateDateTime();
    }, 1000);
  }

  updateDateTime() {
    this.currentDateTime = new Date();
  }

  like : boolean = false;
  toggleLikee(x:any){
    x.like = ! x.like;
  }
  disLike : boolean = true;

  disLikee(x:any){
    x.disLike = ! x.disLike;
   }

   displayFullText : boolean = false;

   toggleDisplay(i:any){
    this.displayFullText = ! this.displayFullText;
   }

}
