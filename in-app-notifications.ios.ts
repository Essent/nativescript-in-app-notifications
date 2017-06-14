import { CommonInAppNotifications } from './in-app-notifications.common';
import { ios } from 'utils/utils';

declare const BSForegroundNotification: any;

export class InAppNotifications implements CommonInAppNotifications {

	private static instance: InAppNotifications = new InAppNotifications();
	private deepLinkObserver: any;
	private tapHandler: () => void;

	constructor() {
		if (InAppNotifications.instance) {
			throw new Error("Error: Instance failed: Use InAppNotifications.getInstance() instead of new.");
		}
		InAppNotifications.instance = this; 
	}

	static getInstance() {
		return InAppNotifications.instance;
	}

	public showNotification(message: string, timeText: string, tapHandler: () => void): void {
		this.tapHandler = tapHandler;
		let notification = new BSForegroundNotification(); 
		notification.presentNotification();
	}
}
