import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

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
    private router: Router) {
}

  ngOnInit(): void {
    this.initForm();
  }

  initForm() {
    this.joinUs = this.formBuilder.group({
      name: new FormControl('',Validators.required),
      phone: new FormControl('', Validators.compose([
        Validators.required,
        Validators.minLength(1)])),
      time: new FormControl(Validators.required),
      comment: new FormControl()  
    });
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
