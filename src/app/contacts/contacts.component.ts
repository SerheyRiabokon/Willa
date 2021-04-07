import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { HeaderService } from '../services/header.service'

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.scss']
})
export class ContactsComponent implements OnInit {

  joinUs: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private headerService: HeaderService) {
}

  ngOnInit(): void {
    this.initForm();
    this.headerService.typeOfPage = 'contacs';
    //this.headerService.typeOfPage.next('contacts');  
  }

  initForm() {
    this.joinUs = this.formBuilder.group({
      name: new FormControl('',Validators.compose([
        Validators.required,
        this.textValidator, Validators.minLength(3)])),
      phone: new FormControl('', Validators.compose([
        Validators.required,
        Validators.minLength(10)])),
      time: new FormControl(Validators.required),
      comment: new FormControl()  
    });
  }
  textValidator(control: FormControl) {
    const value = control.value;
    const text = /^[a-zA-Zа-яА-ЯёЁ'][a-zA-Z-а-яА-ЯёЁ' ]+[a-zA-Zа-яА-ЯёЁ']?$/.test(value);
    if (!text) {
      return { invalid: 'Invalid field'};
    } else {
      return null;
    }
  }
 
  submit(){
    if (!this.joinUs.invalid) {
      const person = {
        user: {
          name: this.joinUs.value.name,
          phone: this.joinUs.value.phone,
          time: this.joinUs.value.time,
          comment: this.joinUs.value.comment
        }
      };
      console.log(person);
    }  
  }
}
