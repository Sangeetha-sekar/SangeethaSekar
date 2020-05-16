import { __decorate } from "tslib";
import { TestDirective } from './test.directive';
import { NgModule } from '@angular/core';
let SharedModule = class SharedModule {
};
SharedModule = __decorate([
    NgModule({
        declarations: [
            TestDirective,
        ],
        exports: [
            TestDirective,
        ],
    })
], SharedModule);
export { SharedModule };
//# sourceMappingURL=shared.module.js.map