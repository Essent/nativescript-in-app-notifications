import { Observable } from "@nativescript/core";
import { InAppNotifications } from 'nativescript-in-app-notifications';

export class HomeViewModel extends Observable {
    private inAppNotifications: InAppNotifications;
    constructor() {
        super();
    }
}
