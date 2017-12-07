import { Component, OnInit, NgZone } from "@angular/core";

import { Item } from "./item";
import { ItemService } from "./item.service";

import * as firebase from "nativescript-plugin-firebase";

@Component({
    selector: "ns-items",
    moduleId: module.id,
    templateUrl: "./items.component.html",
})
export class ItemsComponent implements OnInit {
    items: Item[];

    constructor(private itemService: ItemService, private ngZone: NgZone) { }

    ngOnInit(): void {
        this.items = this.itemService.getItems();

        this.createUser();
    }

    createUser() {
        firebase.createUser({
            email: 'test001@gmail.com',
            password: '123456'
        }).then((result) => {
            console.log(result);
        }).catch(e => {
            console.log(e);
        })
    }
}
