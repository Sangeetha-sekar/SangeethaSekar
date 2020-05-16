import { __decorate } from "tslib";
import { DashboardHome } from './dashboard.component';
import { SharedModule } from './shared/shared.module';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
const appRoutes = [
    {
        path: '', component: DashboardHome
    },
];
let DashboardModule = class DashboardModule {
};
DashboardModule = __decorate([
    NgModule({
        declarations: [
            DashboardHome,
        ],
        imports: [
            SharedModule,
            RouterModule.forChild(appRoutes),
        ],
    })
], DashboardModule);
export { DashboardModule };
//# sourceMappingURL=dashboard.module.js.map