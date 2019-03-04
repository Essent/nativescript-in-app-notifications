# NativeScript In App Notifications plugin
[![npm version](https://badge.fury.io/js/nativescript-in-app-notifications.svg)](https://www.npmjs.com/package/nativescript-in-app-notifications)

This is a plugin to show in app notifications on iOS, using [BSForegroundNotification](https://github.com/Essent/ForegroundNotification/tree/3.1) v3.1).

## Demo

Check out the [demo](./demo) folder for a sample usage.

## Angular 2

Usage:

1. Add the plugin to your project:

  ```ts
  npm install nativescript-in-app-notifications
  ```

2. To show a notification call `showNotification`:
```ts
  InAppNotifications.getInstance().showNotification('This is a notification', 'This is the title', () => {
              console.log('tap');
          });
  ```

# Try the Demo

To try the demo run the following commands:

```sh
npm run setup
npm run build.demo
npm run dev.ios
```

If you change files in the demo project and want to run the app again:
```sh
npm run build.demo
npm run dev.ios
```