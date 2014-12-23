## LAB
    
1. Create a service called Reservation that uses $resource on "/api/reservations" and add it to an "introToAngularApp.services" module
  * Use the `factory` method
2. Add a custom PUT method to the ngResource definition
3. Create a controller called ReservationCtrl that asks for the Reservation service as a dependency
4. Retrieve the list of reservations from the service and display the reservations on the page with ng-repeat
  * The list looks like `[{ id: 1, name: "Jonathan", qty: 4, time: "8/31/2014 7:30pm" }]`
  * Bonus points for using filters to display dates
  * Should look like "Jonathan Creamer for 3 at Aug 26, 2014 9:30:00 AM"
5. Create a new method on the Controller for adding a reservation
6. Create a form with name, qty, time, and submit fields
  * Re-use the a2DatePicker from before, but change the kendo widge to `kendoDateTimePicker`
  * Bind the form inputs to a "reservation" model on the controller. i.e. ng-model="reservation.name", (if you use controllerAs, don't forget your controller alias!)
7. Use form validation for required on those fields
  * The css is already in place, you just need to use the right combination of `ng-if` directives on the built in validation properties
8. Use the create method to create a new Reservation and then re-render the list of reservations
9. Add a clear button that resets the reservation on the scope