import { Component } from '@angular/core';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.scss']
})
export class MessagesComponent {
  showAllMessageCards : boolean = true;
  singleConversatiionCardd : boolean = false;


  messageSSearch : any;

  messages : Array<messagee> = [
    {
      name : 'Ashok',
      message  : 'You : I just landed a job offer! Excited for the next chapter.' ,
    },
    {
      name : 'Gretchen',
      message  : 'You : I just landed a job offer! Excited for the next chapter.' ,
    },
    {
      name : 'Jaxson',
      message  : 'You : I just landed a job offer! Excited for the next chapter.' ,
    },
    {
      name : 'Zaire',
      message  : 'You : I just landed a job offer! Excited for the next chapter.' ,
    },
    {
      name : 'Kierra',
      message  : 'You : I just landed a job offer! Excited for the next chapter.' ,
    },
  ];
  constructor( ){
  }

  ngonInit(){

  }

  activeIndex = 0;
  customColors: string[] = ['#FFBCDC;', '#FFEE44', '#D7A3C9', '#CDE809', '#E0682B'];

}
interface messagee {
  name : string;
  message : string;
}
