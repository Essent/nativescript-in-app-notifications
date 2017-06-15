import { CommonInAppNotifications } from './in-app-notifications.common';
export declare class InAppNotifications implements CommonInAppNotifications {
    private static instance;
    constructor();
    static getInstance(): InAppNotifications;
    showNotification(message: string, title: string, tapHandler: () => void, sound?: string): void;
}
