import * as observable from 'tns-core-modules/data/observable';
import * as pages from 'tns-core-modules/ui/page';
import {HelloWorldModel} from './main-view-model';
import { InAppNotifications } from 'nativescript-in-app-notifications';

// Event handler for Page 'loaded' event attached in main-page.xml
export function pageLoaded(args: observable.EventData) {
    // Get the event sender
    let page = <pages.Page>args.object;
    page.bindingContext = new HelloWorldModel();
}

export function onTap(): void {
    InAppNotifications.getInstance().showNotification('This is a notification', 'This is the title', () => {
        console.log('tap');
    });
}
