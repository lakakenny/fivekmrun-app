import { Component, OnInit } from '@angular/core';
import { UserRegistration } from '../models/user-registration.model';
import { Switch } from 'tns-core-modules/ui/switch/switch';
import { RegistrationService } from '~/services';

@Component({
  selector: 'registration',
  templateUrl: './registration.component.html',
  moduleId: module.id,
})
export class RegistrationComponent implements OnInit {

  userRegistration: UserRegistration;
  buttonEnabled: boolean = false;
  
  constructor(private registrationService: RegistrationService) { }

  ngOnInit() {
    this.userRegistration = new UserRegistration();
  }

  agreementSwitch(args): void {
      let agreementSwitch = <Switch>args.object;
      if (agreementSwitch.checked) {
          this.buttonEnabled = true;
      } else {
          this.buttonEnabled = false;
      }
  }

  submitRegistration(): void {
    this.registrationService.submitRegistration(this.userRegistration);
  }
}
