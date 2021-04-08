import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HeaderService {
  typeOfPage = 'nav';
  typeOfPageBeh: BehaviorSubject<string> = new BehaviorSubject('nav')
  constructor(
  ) { }

}
