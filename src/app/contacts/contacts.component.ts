import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { HeaderService } from '../services/header.service'

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.scss']
})
export class ContactsComponent implements OnInit {

  joinUs: FormGroup;
  message = false;

  constructor(
    private formBuilder: FormBuilder,
    private headerService: HeaderService) {
}

  ngOnInit(): void {
    this.initForm();
    this.headerService.typeOfPage = 'contacs';
    this.headerService.typeOfPageBeh.next('contacts');  
  }

  initForm() {
    this.joinUs = this.formBuilder.group({
      name: new FormControl('',Validators.compose([
        Validators.required,
        this.textValidator])),
      phone: new FormControl('', Validators.compose([
        Validators.required,
        Validators.minLength(10)])),
      time: new FormControl(),
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
      this.message = true;
      setTimeout(()=>{
        this.message = false;
      },6000)

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
