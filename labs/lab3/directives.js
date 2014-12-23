angular.module('introToAngularApp.directives', [])  
  .directive('a2DatePicker', function() {
    return {
      restrict: 'A',
      link: function(scope, $el) {
        $el.kendoDatePicker({
          format: "M/d/yyyy",
          change: function() {
            scope.$apply();
          }
        });
      }
    };
  })
  .directive('a2MobileNavigation', function() {
    return {
      restict: 'E',
      templateUrl: '/mobileNav.html',
      scope: {
        items: '='
      },
      link: function(scope) {
        scope.goTo = function() {
          alert('Going to: ' + scope.activeItem.url);
        };
      }
    };
  });