define(function(require) {
  var Firebase = require("firebase");
  var $ = require("jquery");
  var b = require("bootstrap");
  var h = require("hbs");
  var Q = require("q");
  var userStorage = require("5-user-data-storage");

  return {
  
    deleteMovie: function(parent) {
      var deferredDelete = Q.defer();
      var deleteRef = new Firebase ("https://faceontoast.firebaseio.com/users/" + userStorage.getUid() + "/" + parent);
      deleteRef.remove();

    return deferredDelete.promise; 

    }  /* end of deleteMovie function */

  }; /* end of return */
    
}); /* end of define function */
    

    


      
      




