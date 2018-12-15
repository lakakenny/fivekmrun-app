import { Component, OnInit } from '@angular/core';
import { UserRegistration } from '../models/user-registration.model';

@Component({
  selector: 'registration',
  templateUrl: './registration.component.html',
  moduleId: module.id,
})
export class RegistrationComponent implements OnInit {

  userRegistration: UserRegistration;

  constructor() { }

  ngOnInit() {
    this.userRegistration = new UserRegistration();
  }

}
