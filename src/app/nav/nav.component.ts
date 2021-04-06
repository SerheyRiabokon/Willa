import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {
 pageType="nav";
 
  constructor(
    private route: ActivatedRoute,
    private router: Router) {
}

  ngOnInit(): void {
  }

}
