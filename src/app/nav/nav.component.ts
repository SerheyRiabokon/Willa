import { AfterViewChecked, Component, EventEmitter, OnDestroy, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HeaderService } from '../services/header.service';
import { NavigationExtras } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit{
 
  navExtras: NavigationExtras;
  sub: Subscription;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private headerService: HeaderService
    ) {
}

  ngOnInit(){
    this.headerService.typeOfPage = 'nav';
    this.headerService.typeOfPageBeh.next('nav');
    this.sub = this.headerService.typeOfPageBeh.subscribe();
  }

  goToPage(type) {
    this.navExtras = {
      state: {
        type:type
      }
    }
      this.router.navigate(([type]), {queryParams: {title: type, si:true}});
  }
}
 
