import { Component , ElementRef} from '@angular/core';
import { $ } from 'protractor';
//import { ModalserviceService } from './modalservice.service';
import {ViewEncapsulation} from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import{DialogComponent} from './dialog/dialog.component';
import { mobiscroll } from '@mobiscroll/angular-lite';


mobiscroll.settings = {
    theme: 'ios',
    themeVariant: 'light'
};
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent {
  calendarOneWeek: Date;
    calendarTwoWeek: Date;
    calendarThreeWeek: Date;
    popupFlag = "";
  constructor(public dialog: MatDialog) {
    window.localStorage.removeItem("pop")
  }
  searchText;
  heroes = [
    { name: 'Kristie Minshall',tel:'+61415148804',classType: 'AE+C?',Type:false,chatMember:'',noteType:'Add note'},
    { name: 'Sarah Symons',tel:'+61415148804',classType: 'AE+C?',Type:false,chatMember:'Friends with Rya..',noteType:'Edit note'},
    { name: 'Kylie Jolly',tel:'+61422131209',classType: 'AE+C?',Type:true,chatMember:'',noteType:'Add note'},
    { name: 'Muniba Jose',tel:'+61422131299',classType: 'AE+C?',Type:false,chatMember:'',noteType:'Add note'}
  ];
  openDialog(){
        this.dialog.open(DialogComponent);
        window.localStorage.setItem("pop","Available")
      }
      notes()
      {
        window.localStorage.setItem("pop","Notes")
        this.dialog.open(DialogComponent);
        window.localStorage.removeItem("pop");
        //this.popupFlag = "Notes";
      }
}