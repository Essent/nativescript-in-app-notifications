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

		// const queue = ios.getter(NSOperationQueue, NSOperationQueue.mainQueue);
		// this.deepLinkObserver = NSNotificationCenter.defaultCenter.addObserverForNameObjectQueueUsingBlock(EBBannerViewDidClick, undefined, queue, () => {
		// 	this.tapHandler();
		// });
	}

	static getInstance() {
		return InAppNotifications.instance;
	}

	public showNotification(message: string, timeText: string, tapHandler: () => void): void {
		this.tapHandler = tapHandler;
        // EBForeNotification.setBannerViewTimeText(timeText);
        // EBForeNotification.handleRemoteNotificationSoundIDIsIos10
        // (
			// {"aps": {"alert":message} },
			// 1312,	/* 1312 is the default push notification sound on iOS */
			// true
        // );

		let notification = BSForegroundNotification.init({});
		// let notification = BSForegroundNotification.titleLabelSubtitleLabelCategoryIdentifier("title", "subtitle", "category");
		notification.presentNotification();
	}
}
