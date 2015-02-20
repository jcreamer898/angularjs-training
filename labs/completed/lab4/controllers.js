(function() {
  "use strict";

  function ReservationCtrl (Reservations, $scope) {
    var self = this;
    
    this.list = Reservations.query();
    
    this.create = function(name, qty, time) {
      if (!$scope.reservations.$invalid) {
        var res = new Reservations({
          name: this.reservation.name,
          qty: this.reservation.qty,
          time: new Date(this.reservation.time)
        });
        
        res.$save(function() {
          self.list = Reservations.query();
        }); 

        this.clear();
        $scope.reservations.$setPristine();
      }
    };
    
    this.clear = function() {
      this.reservation = {};
    };
  }

  angular.module("introToAngularApp.controllers", [])
    .controller("ReservationCtrl", ReservationCtrl);
}());