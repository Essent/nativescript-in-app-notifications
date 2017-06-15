export interface CommonInAppNotifications {
    showNotification(message: string, title: string, tapHandler: () => void, sound?: string): void;
}
