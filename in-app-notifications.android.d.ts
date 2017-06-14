import { CommonInAppNotifications } from './in-app-notifications.common';
export declare class InAppNotifications implements CommonInAppNotifications {
    private static instance;
    constructor();
    static getInstance(): InAppNotifications;
    showNotification(message: string, timeText: string, tapHandler: () => void): void;
}
