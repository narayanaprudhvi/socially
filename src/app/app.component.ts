import { Component } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'socially';
  // showMenu: boolean = false;
  // showMenuu: boolean = false;
  // trueFalse : boolean = false;

  showHeader = true;
  showFooter = true;

  constructor(private router: Router) {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        if (event.url.includes('/login') || event.url.includes('/signup')) {
          this.showHeader = false;
          this.showFooter = false;
        } else {
          this.showHeader = true;
          this.showFooter = true;
        }
      }
    });
  }

  ngOnInit() {
    window.scrollTo(0, 0);

    // this.router.events.subscribe((event) => {
    //   if (event instanceof NavigationEnd) {
    //     const currentUrl = event.url;
    //     this.showMenu = currentUrl !== '/login';
    //   }
    // });

    // this.router.events.subscribe((eventt) => {
    //   if (eventt instanceof NavigationEnd) {
    //     const currentUrll = eventt.url;
    //     this.showMenu = currentUrll !== '/signup';
    //   }
    // });

    // this.applicantno = sessionStorage.getItem('Applicantid')
    // this.getApllicantdetails(this.applicantno)

    // getapplicantdetails
  }
}
