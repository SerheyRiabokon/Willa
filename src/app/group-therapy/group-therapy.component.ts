import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-group-therapy',
  templateUrl: './group-therapy.component.html',
  styleUrls: ['./group-therapy.component.scss']
})
export class GroupTherapyComponent implements OnInit {

  constructor(
    private route: ActivatedRoute,
    private router: Router) {
}

  ngOnInit(): void {
  }

}
