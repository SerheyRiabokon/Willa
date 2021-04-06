import { Component, ElementRef, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  
  @Input()pageType = '';

  constructor(
    private element: ElementRef,
  ) { }

  ngOnInit() {
  }

}
