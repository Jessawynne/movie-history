define(function(require) {
  var Firebase = require("firebase");
  //handlebars templates
  var loadTemplate = require("3-loadtemplates");
  var userStorage = require("5-user-data-storage");

  //get a reference to our Firebase app
  var ref = new Firebase("https://faceontoast.firebaseio.com");
  //create new user/account when register account button is clicked
  $("body").on("click", "#register", function(event) {
    ref.createUser({
      email    : $("#email").val(),
      password : $("#password").val()
    }, function(error, userData) {
      if (error) {
        console.log("Error creating user:", error);
      } else {
        userStorage.setUser(userData);
        console.log("Successfully created user account with uid:", userData.uid);
        console.log("Successfully created user account:", userData);
      }
    });
  });//end register new user
  
  //log in user that is already registered
  $("body").on("click", "#log-in", function() {
    ref.authWithPassword({
      email    : $("#email").val(),
      password : $("#password").val()
    }, function(error, authData) {
      if (error) {
        console.log("Login Failed!", error);
      } else {
        console.log("Authenticated successfully with payload:", authData);
        console.log("Authenticated successfully with payload:", authData.uid);

        //need to pass ID info to new function to populate the Dom.
        // completeProfile.showProfile(authData.uid); <-- not the correct variable names
      }
    });
  });//end login

});//end require