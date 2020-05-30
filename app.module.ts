import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {AppRoutingModule } from './app-routing.module'
import { HttpClientModule, HttpClientJsonpModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { MbscModule } from '@mobiscroll/angular-lite';
//import { Route, RouterModule } from '@angular/router';
//import { AppendPipe } from '../app/dashboard/shared/custom.pipe';

import { AppComponent } from './app.component';
//import { HelloComponent } from './hello.component';
import { SharedModule } from '../app/dashboard/shared/shared.module';
import { InputsModule } from '@progress/kendo-angular-inputs';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { PopupModule } from '@progress/kendo-angular-popup';
import { DialogComponent } from './dialog/dialog.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatDialogModule } from '@angular/material/dialog';
import {NgMultiSelectDropDownModule} from 'ng-multiselect-dropdown';
import {CustomerService} from '../app/customer.service';
import { AnalyticsComponent } from './analytics/analytics.component';

@NgModule({
  imports: [
    FormsModule,AppRoutingModule,
    HttpClientModule,MbscModule,
    HttpClientJsonpModule, MatInputModule, MatFormFieldModule, MatDialogModule, Ng2SearchPipeModule, 
    BrowserModule, FormsModule, SharedModule, InputsModule, BrowserAnimationsModule,
     PopupModule, NgMultiSelectDropDownModule.forRoot()],
  declarations: [AppComponent, DialogComponent, AnalyticsComponent],
  bootstrap: [AppComponent],
  providers: [CustomerService]
})
export class AppModule { }
