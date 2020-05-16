import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HttpClientJsonpModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
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
@NgModule({
  imports: [
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,MbscModule,
    HttpClientJsonpModule, MatInputModule, MatFormFieldModule, MatDialogModule, Ng2SearchPipeModule, BrowserModule, FormsModule, SharedModule, InputsModule, BrowserAnimationsModule, PopupModule],
  declarations: [AppComponent, DialogComponent],
  bootstrap: [AppComponent],
  providers: []
})
export class AppModule { }
