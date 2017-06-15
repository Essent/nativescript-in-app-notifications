# NativeScript In App Notifications plugin

This is a plugin to show in app notifications on iOS, using [BSForegroundNotification](https://github.com/Essent/ForegroundNotification/tree/3.0-alpha) v3.0-alpha).

## Demo

Check out the [demo](./demo) folder for a sample usage.

## Angular 2

Usage:

1. Add the plugin to your project:

  ```ts
  tns plugin add nativescript-in-app-notifications
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
npm run dev.ios
```