angular.module('introToAngularApp.services', [])
  .factory('Reservations', function($resource) {
    return $resource('/api/reservations/:id', {
      id: '@id'
    },
    {
      'update': { method:'PUT' }
    });
  })