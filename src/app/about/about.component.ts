import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HeaderService } from '../services/header.service'


@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private headerService: HeaderService
    ) {
}

  ngOnInit(){
    this.headerService.typeOfPage = 'about';
    //this.headerService.typeOfPage.next('about');
  }

}
