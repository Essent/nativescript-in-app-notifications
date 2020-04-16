import { Observable } from "tns-core-modules/data/observable";
import { InAppNotifications } from 'nativescript-in-app-notifications';

export class HomeViewModel extends Observable {
    private inAppNotifications: InAppNotifications;
    constructor() {
        super();
    }
}
