import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { HeaderService } from '../services/header.service'

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit, OnDestroy {
  sub: Subscription;
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private headerService: HeaderService) {
}

  ngOnInit(){
    this.headerService.typeOfPage = 'home';
    this.headerService.typeOfPageBeh.next('home');
    this.sub = this.headerService.typeOfPageBeh.subscribe();
    console.log(1)
  }
  
  ngOnDestroy(){
  //   this.sub.unsubscribe();
  //   console.log(2);
  }
}
