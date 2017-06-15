import { CommonInAppNotifications } from './in-app-notifications.common';

declare const BSForegroundNotification: any;

export class InAppNotifications implements CommonInAppNotifications {

	private static instance: InAppNotifications = new InAppNotifications();

	constructor() {
		if (InAppNotifications.instance) {
			throw new Error('Error: Instance failed: Use InAppNotifications.getInstance() instead of new.');
		}
		InAppNotifications.instance = this; 
	}

	static getInstance() {
		return InAppNotifications.instance;
	}

	public showNotification(message: string, title: string, tapHandler: () => void, sound: string = ''): void {
		const params = {
			'aps': {
				'category': '',
				'alert': {
					'body': message,
					'title': title
				},
				'sound': sound
			}
		};
		let notification = new BSForegroundNotification();
		notification.presentNotificationWithUserInfoCompletion(params, tapHandler);
	}
}
