import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {

pageType="home";
  
  constructor(
    private route: ActivatedRoute,
    private router: Router) {
}

  ngOnInit(): void {
  }
}
