import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HeaderService } from '../services/header.service'

@Component({
  selector: 'app-programs',
  templateUrl: './programs.component.html',
  styleUrls: ['./programs.component.scss']
})
export class ProgramsComponent implements OnInit{

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private headerService: HeaderService) {
}

  ngOnInit(){
    this.headerService.typeOfPage = 'programs';
    this.headerService.typeOfPageBeh.next('programs');
  }
  

}
