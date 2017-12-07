import { platformNativeScriptDynamic } from "nativescript-angular/platform";
import { AppModule } from "./app.module";

import * as firebase from "nativescript-plugin-firebase";

firebase.init({
    onAuthStateChanged: (data) => {
        console.log(data.loggedIn ? "Logged in to firebase" : "Logged out from firebase");
        if (data.loggedIn) {
            console.log("user's email address: " + (data.user.email ? data.user.email : "N/A"));
        }
    }
});

platformNativeScriptDynamic().bootstrapModule(AppModule);
