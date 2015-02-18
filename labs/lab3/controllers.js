angular.module('introToAngularApp.controllers', [])
  .controller('NavigationCtrl', function() {
    this.items = [{
      url: '/',
      title: 'Home'
    }, {
      url: '/about',
      title: 'About'
    }];
  });