import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from 'code-demo/src/app/app.component';
import {AnalyticsComponent} from '../app/analytics/analytics.component';



const routes: Routes = [
  {path:'Analytics',component:AnalyticsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}