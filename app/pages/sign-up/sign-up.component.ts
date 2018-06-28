import { Component } from "@angular/core";
import { RouterExtensions } from "nativescript-angular/router";

@Component({
    selector: "sign-up",
    moduleId: module.id,
    templateUrl: "./sign-up.component.html",
})
export class SignUpComponent {

    constructor(private routerExtensions: RouterExtensions) {

    }

    goBack() {
        this.routerExtensions.back();        
    }
    
}