import { __decorate } from "tslib";
import { Directive } from '@angular/core';
let TestDirective = class TestDirective {
    constructor(el) {
        el.nativeElement.style.backgroundColor = 'yellow';
    }
};
TestDirective = __decorate([
    Directive({
        selector: '[test-directive]'
    })
], TestDirective);
export { TestDirective };
//# sourceMappingURL=test.directive.js.map