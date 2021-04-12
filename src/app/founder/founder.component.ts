import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HeaderService } from '../services/header.service'

@Component({
  selector: 'app-founder',
  templateUrl: './founder.component.html',
  styleUrls: ['./founder.component.scss']
})
export class FounderComponent implements OnInit {

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private headerService: HeaderService) {
}

  ngOnInit(){
    this.headerService.typeOfPage = 'founder';
    this.headerService.typeOfPageBeh.next('founder');
  }

}
