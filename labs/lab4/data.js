angular.module("a2MockData", ["ngMockE2E"])
  .run(function($httpBackend) {
    "use strict";

    var reservations = [{
      id: 1,
      name: "Jonathan Creamer",
      qty: "3",
      time: "2014-08-26T14:30:00.000Z"
    }, {
      id: 2,
      name: "Ralph Whitbeck",
      qty: "4",
      time: "2014-08-26T17:00:00.000Z"
    }, {
      id: 3,
      name: "Mike Hostetler",
      qty: "9",
      time: "2014-09-07T00:30:00.000Z"
    }, {
      id: 4,
      name: "John Kellar",
      qty: "6",
      time: "2014-09-17T01:00:00.000Z"
    }];
    
    $httpBackend.whenGET("/api/reservations")
      .respond(reservations);
      
    $httpBackend.whenPOST("/api/reservations").respond(function(method, url, data) {
      var reservation = angular.fromJson(data);
      reservations.push(reservation);
      return [200, reservation, {}];
    });
  });