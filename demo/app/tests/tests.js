var InAppNotifications = require("nativescript-in-app-notifications").InAppNotifications;
var inAppNotifications = new InAppNotifications();

describe("greet function", function() {
    it("exists", function() {
        expect(inAppNotifications.greet).toBeDefined();
    });

    it("returns a string", function() {
        expect(inAppNotifications.greet()).toEqual("Hello, NS");
    });
});