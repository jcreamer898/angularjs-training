# LAB 4
    
1. Create a service in `services.js` called `Reservation` that uses `$resource` pointing to `/api/reservations/:id`, and add it to a new module called `introToAngularApp.services`
  * Use the `factory` method
  * Import the services module in `app.js`
2. Add a custom `PUT` method to the `Reservation` definition
3. Create a controller called `ReservationCtrl` that asks for the `Reservation` service as a dependency
4. Retrieve the list of reservations from the service and display the reservations on the page with `ng-repeat`
  * The list data structure looks like `[{ id: 1, name: "Jonathan", qty: 4, time: "8/31/2014 7:30pm" }]`
  * Bonus points for using filters to display date in a different format
  * Should look like "Jonathan Creamer for 3 at Aug 26, 2014 9:30:00 AM"

### Bonus

5. Create a new method on the controller for adding a reservation called `create`
6. Create a form with `name`, `qty`, `time`, fields and a `submit` button
  * Re-use the `a2DatePicker` from before, but change the kendo widget to `kendoDateTimePicker`
  * Bind the form inputs to a `reservation` model on the controller. i.e. ng-model="reservation.name", (if you use controllerAs, don't forget your controller alias!)
7. Use form validation for `required` on those fields
8. Use the `create` method to create a new `Reservation` when you submit the form
  * `$save` from `$resource` will be helpful here
  * Be sure to get the reservations again after you save the new one
9. Add a `clear` button that resets the reservation on the scope