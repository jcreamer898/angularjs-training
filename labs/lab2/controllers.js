angular.module("introToAngularApp.controllers", [])
  .controller("ContactCtrl", function($timeout) {
    var self = this;
    
    this.send = function(name, email, comment) {
      alert("You have a sent a message that says: " + comment + " to: " + name + " at: " + email);
      this.sent = true;
      
      $timeout(function() {
        self.sent = false;
      }, 5000);
      
      this.clear();
    };

    this.clear = function() {
      this.user.name = "";
      this.user.email = "";
      this.user.comment = "";
      this.user.emailType = "";
    };
  });