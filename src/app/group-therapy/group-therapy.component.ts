import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HeaderService } from '../services/header.service'

@Component({
  selector: 'app-group-therapy',
  templateUrl: './group-therapy.component.html',
  styleUrls: ['./group-therapy.component.scss']
})
export class GroupTherapyComponent implements OnInit {

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private headerService: HeaderService) {
}

  ngOnInit(){
    this.headerService.typeOfPage = 'group';
    this.headerService.typeOfPageBeh.next('group');
  }

}
