import { __decorate } from "tslib";
import { WebsitesHome } from './websites.component';
import { SharedModule } from '../shared.module';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
const appRoutes = [
    {
        path: '', component: WebsitesHome
    },
];
let WebsitesModule = class WebsitesModule {
};
WebsitesModule = __decorate([
    NgModule({
        declarations: [
            WebsitesHome,
        ],
        entryComponents: [
            WebsitesHome,
        ],
        imports: [
            SharedModule,
            RouterModule.forChild(appRoutes),
        ],
    })
], WebsitesModule);
export { WebsitesModule };
//# sourceMappingURL=websites.module.js.map