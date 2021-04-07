import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HeaderService } from '../services/header.service'

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {
  
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private headerService: HeaderService) {
}

  ngOnInit(){
    this.headerService.typeOfPage = 'home';
    //this.headerService.typeOfPage.next('home');
  }
}
