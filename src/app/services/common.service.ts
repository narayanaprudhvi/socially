import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  newsUrl : string ='https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=ad574c62e9754f9c992eacf2a346cd98';

  countriesUrl : string = 'https://restcountries.com/v3.1/all?fields';

  // weatherUrl : string ='https://dark-sky.p.rapidapi.com/%7Blatitude%33.44,%7Blongitude%-94.04&apiKey=b058385c26mshfc27ee77a25fecfp1e7260jsne08b1de65d3';


  constructor(private http : HttpClient) { }

  ngOnInit(){

  }

  getNews(){
  return this.http.get(this.newsUrl);
  }

  // getWeather(){
  // return this.http.get(this.weatherUrl);
  // }

  getCountries(){
    return  this.http.get<any>(`${this.countriesUrl}=name;capital`);
  }
}
