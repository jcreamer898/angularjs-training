/* Add your directives here */
angular.module('introToAngularApp.directives', [])  
  .directive('a2DatePicker', function() {
    return {
      restrict: 'A',
      link: function(scope, $el) {
        $el.kendoDateTimePicker({
          start: '',
          min: new Date(),
          change: function() {
            scope.$apply();
          }
        });
      }
    };
  });