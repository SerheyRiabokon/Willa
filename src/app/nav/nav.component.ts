import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HeaderService } from '../services/header.service';
import { NavigationExtras } from '@angular/router';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {
 
  navExtras: NavigationExtras;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private headerService: HeaderService
    ) {
}

  ngOnInit(){
    this.headerService.typeOfPage = 'nav';
    //this.headerService.typeOfPage.next('nav');
    console.log(this.navExtras);
  }

  goToPage(type) {
    this.navExtras = {
      state: {
        type:type
      }
    }
      this.router.navigate(([type]), this.navExtras);
  }
}
