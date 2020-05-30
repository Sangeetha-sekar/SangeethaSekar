import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import {CustomerService} from '../app/customer.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],

})
export class AppComponent {
  title = "Customer Analytics";
  disabled=true;
  searchText = "";
  //roles = {"name":this.name, "Status": this.Status};
  public name;
  public description;
  public organization;
  public Status;
  public obj = {
    'check': false,
    'name': "",
    'description': "",
    'organization': "",
    'Status': "",
    'Editable': ""
  }
  constructor(public Customer:CustomerService) {
  }
  AddRecord(page){
    this.Customer.AddRecord(page);
  }
submitForms(val){
console.log(val);
}
    submitForm(page) {
  if (page == "navigation") {
    this.Customer.dashboard = "yes";
  }
  else {
    this.Customer.dashboard = "yes";
    this.obj = {
      'check':false,
      'name': this.name,
      'description': this.description,
      'organization': this.organization,
      'Status': "Active",
      'Editable': ""
    }
    
    console.log(this.obj);
    this.Customer.Roles_objAll.unshift(this.obj);
    this.name="";
    this.description="";
    this.organization="select"; 
  }
}
}
