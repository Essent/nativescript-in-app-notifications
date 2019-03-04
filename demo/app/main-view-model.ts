import { Observable } from 'tns-core-modules/data/observable';
import { InAppNotifications } from 'nativescript-in-app-notifications';

export class HelloWorldModel extends Observable {
    private inAppNotifications: InAppNotifications;

    constructor() {
        super();
    }
}
