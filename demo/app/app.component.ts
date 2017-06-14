import { Component } from "@angular/core";
import { InAppNotifications } from 'nativescript-in-app-notifications';

@Component({
    selector: "ns-app",
    templateUrl: "app.component.html",
})

export class AppComponent {

    public constructor() { }

    public showNotification(): void {
        InAppNotifications.getInstance().showNotification('This is a notification', '', () => {
            console.log('tap');
        });
    }
}
