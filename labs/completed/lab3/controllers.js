angular.module("introToAngularApp.controllers", [])
  .controller("NavigationCtrl", function() {
    "use strict";

    this.items = [{
      url: "/",
      title: "Home"
    }, {
      url: "/about",
      title: "About"
    }];
  });