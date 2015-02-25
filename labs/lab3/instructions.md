* [Go Back](../index.html)

# LAB 3

1. Create a module for directives called `introToAngularApp.directives` and import it in the app module
2. Create a directive called `a2DatePicker` and wrap the element with a kendo date picker. Use ng-model="reservation.date" to set the date on the scope.
  * Limit the directive to only work as an attribute
  * HINT with kendo ui, `element.kendoDatePicker()` is how you create a new date picker
  * ANOTHER hint with kendo ui, you'll need to pass a "change" function in the "kendoDatePicker" options, and `$scope.$apply()` to affect the scope
3. Create a new `input` element in the body of the page and add the `a2DatePicker` directive to it
4. Output the value of `reservation.date` to the page

### BONUS

5. Create a controller called "NavigationCtrl" and add a `div` to the page that uses it with `ng-controller`
6. Create `items` on the `NavigationCtrl`'s scope
  * The array should look like... `[{ url: '/link' }]`
7. Create a directive called `a2MobileNavigation` that creates an isolate scope, and add `items` to the isolated scope
  * Limit the directive to only work as an element
  * Add the following template to the page and set the `templateUrl` to the `id` on the template

```js  
<script type="text/ng-template" id="/mobileNav.html">
  <select ng-model="activeItem" ng-change="goTo()" ng-options="item.title for item in items">
    <option value="">Jump to Page</option>
  </select>
</script>
```
8. Create a `goTo` function in the `a2MobileNavigation`'s `link` function on the directive's scope
  * The function should alert out the `activeItem.url` on the directive's scope
9. Add the `a2-mobile-navigation` directive to the HTML inside the `NavigationCtrl` html block, and pass in the `items` from the controller through the `items` attribute on the directive

