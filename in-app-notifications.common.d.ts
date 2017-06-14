export interface CommonInAppNotifications {
    showNotification(message: string, timeText: string, tapHandler: () => void): void;
}
