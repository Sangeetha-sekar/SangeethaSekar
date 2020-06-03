import { Component} from '@angular/core';


@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent{
firstname:'';
lastname:'';
email:'';
phone:'';
address:'';

  constructor() { }

 
submitForm(page){}
}
