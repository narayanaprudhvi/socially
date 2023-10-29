import { Component } from '@angular/core';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.scss'],
})
export class SideNavComponent {
  tab: any = 'tab1';
  tab1: any;
  tab2: any;
  tab3: any;
  tab4: any;
  tab5: any;
  tab6: any;
  tab7: any;

  onClick(check: any) {
    if (check == 1) {
      this.tab = 'tab1';
    } else if (check == 2) {
      this.tab = 'tab2';
    } else if (check == 3) {
      this.tab = 'tab3';
    } else if (check == 4) {
      this.tab = 'tab4';
    } else if (check == 6) {
      this.tab = 'tab6';
    } else if (check == 7) {
      this.tab = 'tab7';
    } else {
      this.tab = 'tab5';
    }
  }
}
