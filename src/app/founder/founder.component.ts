import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-founder',
  templateUrl: './founder.component.html',
  styleUrls: ['./founder.component.scss']
})
export class FounderComponent implements OnInit {

  constructor(
    private route: ActivatedRoute,
    private router: Router) {
}

  ngOnInit(): void {
  }

}
