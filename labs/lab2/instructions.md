### LAB

1. Create a module in app.js called "introToAngularApp"
2. Create a new controllers module called "introToAngularApp.controllers" and add it to the dependencies in the app module
3. Create a new controller called "ContactCtrl" and add it to a new element on the page
4. Create a send method that binds to a button on the page and alerts a message that says...

    "You have a sent a message that says CONTENT to NAME at EMAIL"
    
5. Disable the button unless there's an email and message    
6. Create a clear method that clears the content of all the inputs, selects, and textareas on the page.
7. Show a success message after successfully alerting
8. Hide the message after 5 seconds by importing `$timeout` with DI in the controller's factory function