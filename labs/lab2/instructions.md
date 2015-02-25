* [Go Back](/)

# LAB 2

1. Reuse the form from the last lab, and add 2 buttons, `send` and `clear`
2. Create a module in `app.js` called `introToAngularApp`
3. Create a new controllers module in controllers.js called `introToAngularApp.controllers` and add it to the dependencies array in the `introToAngularApp` module
4. Create a new controller called `ContactCtrl` and add it to a new div on the page with `ng-controller`
5. Create a `send` method in the controller that binds to a `click` event on the `send` button and `console.log`'s a message that says...

    "A message has been sent to NAME at EMAIL that says CONTENT"
 
### Bonus    

6. Disable the button (`ng-disabled`) unless there's an `email` and `message` defined in the scope    
7. Create a `clear` method in the controller that attaches to the `clear` button clears the content of all the inputs, selects, and textareas on the page.
8. Show a success message on the page after clicking `send` by utilizing `ng-show` and a variable on the scope to trigger it
9. Hide the message after 5 seconds by importing `$timeout` with DI