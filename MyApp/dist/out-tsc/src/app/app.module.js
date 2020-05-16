import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { SharedModule } from '../app/dashboard/shared/shared.module';
const appRoutes = [
    { path: 'websites', loadChildren: '../websites/websites.module#WebsitesModule' },
    { path: 'dashboard', loadChildren: '../dashboard/dashboard.module#DashboardModule' },
];
0;
let AppModule = class AppModule {
};
AppModule = __decorate([
    NgModule({
        imports: [BrowserModule, FormsModule, SharedModule, RouterModule.forRoot(appRoutes),],
        declarations: [AppComponent, HelloComponent],
        bootstrap: [AppComponent]
    })
], AppModule);
export { AppModule };
//# sourceMappingURL=app.module.js.map