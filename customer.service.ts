import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  dashboard = "yes";
  Roles_objAll = [];
  
  constructor() {
    this.Roles_objAll = [{
      'check': true,
      'name': 'Gilbert Owen',
      'description': 'Technologies',
      'organization': 'Holland',
      'Status': 'Active',
      'Editable': true
    },
    {
      'check': true,
      'name': 'Sue Holland',
      'description': 'Technologies',
      'organization': 'Holland',
      'Status': 'Active',
      'Editable': true
    },
    {
      'check': true,
      'name': 'Brandon Wilson',
      'description': 'Technologies',
      'organization': 'Holland',
      'Status': 'Active',
      'Editable': true
    },
    {
      'check': true,
      'name': 'Mina Price',
      'description': 'Technologies',
      'organization': 'Holland',
      'Status': 'Inactive',
      'Editable': true
    }
    ]};
  
  deleteRecord(index) {
    this.Roles_objAll.splice(index, 1);
  }
  AddRecord(page) {
    console.log("hi");
    
    if (page == "navigation") {
      this.dashboard = "no";
    }
    else {
      this.dashboard = "no";
    }
  }
  
   }
