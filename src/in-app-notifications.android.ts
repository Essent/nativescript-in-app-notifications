import { CommonInAppNotifications } from './in-app-notifications.common';

export class InAppNotifications implements CommonInAppNotifications {

    private static instance: InAppNotifications = new InAppNotifications();

    constructor() {
        if (InAppNotifications.instance) {
            throw new Error("Error: Instance failed: Use InAppNotifications.getInstance() instead of new.");
        }
        InAppNotifications.instance = this;
    }

    static getInstance() {
        return InAppNotifications.instance;
    }

    public showNotification(message: string, title: string, tapHandler: () => void, sound?: string): void {
        // no Android implementation yet
    }

}