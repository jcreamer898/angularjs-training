### LAB

1. Create a module for directives called `introToAngularApp.directives` and import it in the app module
2. Create a directive called "a2DatePicker" and wrap the element with a kendo date picker. Use ng-model="reservation.date" to set the date on the scope.
  * Limit the directive to only work as an attribute
  * HINT with kendo ui, element.kendoDatePicker() is how you create a new date picker
  * ANOTHER hint with kendo ui, you'll need to pass a "change" function in the "kendoDatePicker" options
3. Use the directive on an input element in the body of the page.
4. Output the value of "date" on the root scope to the page
  * Don't forget to $scope.$apply either ;)
5. Create a directive called "a2MobileNavigation" that creates an isolate scope. Pass in an array of items to the directive via an attribute called items.
  * Limit the directive to only work as an element
  * Pass the items into a select list that uses the ng-options directive to create a list of links
6. Create a controller called "NavigationCtrl" and add a div to the page that uses it with ng-controller
7. Add the a2-mobile-navigation directive to the HTML inside the NavigationCtrl html block
8. Pass in an array of { url: 'link' }'s to the directive from the NavigationCtrl via the "items" attribute