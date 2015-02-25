angular.module("introToAngularApp.services", [])
  .factory("Reservations", function($resource) {
    "use strict";

    return $resource("/api/reservations/:id", {
      id: "@id"
    },
    {
      "update": { method:"PUT" }
    });
  });