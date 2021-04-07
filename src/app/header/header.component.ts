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

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private headerService: HeaderService
  ) {}

  ngOnInit() {
  }

  goToNavAndBack(){
    if(this.headerService.typeOfPage == 'nav'){
      this.router.navigate([''], {replaceUrl: true});
      this.showHeader = true;
    }else if(this.headerService.typeOfPage == 'home'){
      this.router.navigate(['nav'], {replaceUrl: true});
      this.showHeader = true;
    }else{
      this.router.navigate(['nav'], {replaceUrl: true});
      this.showHeader = false;
    }
    // this.headerService.typeOfPage.subscribe(res=>{
    //   if(res == 'nav'){
    //     this.router.navigate([''], {replaceUrl: true});
    //     this.showHeader = true;
    //   }else if(res == 'home'){
    //     this.router.navigate(['nav'], {replaceUrl: true});
    //     this.showHeader = true;
    //   }else{
    //     this.router.navigate(['nav'], {replaceUrl: true});
    //     this.showHeader = false;
    //   }
    // })
    
  }
  
}
