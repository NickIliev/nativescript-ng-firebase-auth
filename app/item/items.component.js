"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var item_service_1 = require("./item.service");
var firebase = require("nativescript-plugin-firebase");
var ItemsComponent = (function () {
    function ItemsComponent(itemService, ngZone) {
        this.itemService = itemService;
        this.ngZone = ngZone;
    }
    ItemsComponent.prototype.ngOnInit = function () {
        this.items = this.itemService.getItems();
        // this.createUser();
    };
    ItemsComponent.prototype.createUser = function () {
        firebase.createUser({
            email: 'test001@gmail.com',
            password: '123456'
        }).then(function (result) {
            console.log(result);
        }, function (errorMessage) {
            console.log(errorMessage);
        });
    };
    ItemsComponent = __decorate([
        core_1.Component({
            selector: "ns-items",
            moduleId: module.id,
            templateUrl: "./items.component.html",
        }),
        __metadata("design:paramtypes", [item_service_1.ItemService, core_1.NgZone])
    ], ItemsComponent);
    return ItemsComponent;
}());
exports.ItemsComponent = ItemsComponent;
