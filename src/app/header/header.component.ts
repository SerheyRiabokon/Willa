import { Component, OnInit} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HeaderService } from '../services/header.service'

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
 
  showHeader = true;
  whiteStyle = false;
  checkbox;
  toggleStatus = false;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private headerService: HeaderService
  ) {
  }

  ngOnInit() {
    this.checkbox = document.querySelector('.checkbox');
  }

  goToNavAndBack(){
    if(this.headerService.typeOfPage == 'nav'){
      this.router.navigate([''], {replaceUrl: true});
    }else{
      this.router.navigate(['nav'], {replaceUrl: true});
    }
    this.headerService.typeOfPageBeh.subscribe(res=>{
      if(res == 'group'){
        this.showHeader = false;
        this.whiteStyle = false;
        this.toggleStatus = false;
      }else if(res == 'programs'){
        this.showHeader = false;
        this.whiteStyle = true;
        this.toggleStatus = false;
      }else if(res == 'founder'){
        this.showHeader = false;
        this.whiteStyle = true;
        this.toggleStatus = false;
      }else if(res == 'contacts'){
        this.showHeader = false;
        this.whiteStyle = false;
        this.toggleStatus = false;
      }else if(res == 'about'){
        this.showHeader = true;
        this.whiteStyle = false;
        this.toggleStatus = false;
      }else if(res == 'nav'){
        this.showHeader = true;
        this.whiteStyle = false;
        this.toggleStatus = true;
      } else{
        this.toggleStatus = false;
        this.showHeader = true;
        this.whiteStyle = false;
      }   
    })  
  }
}
