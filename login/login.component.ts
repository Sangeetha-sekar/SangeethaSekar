import { Component,OnDestroy } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnDestroy  {
  public Email;
  public user;
  public Password;  
  public obj = {
    'Email': "",
    'Password': ""
  }
  // Main object of the Credinatial Details
  public loginMemberDetails = [
    {'Email':"sangysekar@gmail.com",'Password':"password"},
    {'Email':"keerthi@gmail.com",'Password':"keerthi"},
    {'Email':"sekar@gmail.com",'Password':"sekar"},
    {'Email':"kavitha@gmail.com",'Password':"kavitha"}
  ];

  constructor( public router:Router ) { }

logIn(){
       /* Login Member Details condition Start check the main object*/
      this.loginMemberDetails.forEach(function(key,val,index) { 
        console.log(this.Email);
        /*if(key.Email == this.Email && key.Password == this.Password){
          //this.router.navigate(['success']);
          window.alert('Login successfull');

   return false;     
           // this.router.navigate(['success']);
              }else{
                window.alert('Login Unsuccessfull');
              }*/
      })  
      /* Login Member Details condition Start */
}
ngOnDestroy(){

}
signUp(){
  this.router.navigate(['registration']);
}
}


