define(function(require) {
  var Firebase = require("firebase");
  var $ = require("jquery");
  var q = require("q");
  var bootstrap = require("bootstrap");
  var stars = require("stars");

  //handlebars templates
  var templates = require("3-loadtemplates");
  var userStorage = require("5-user-data-storage");
  var register = require("register");
  var login = require("4-login");
  var findMovie = require("findMovie");
  var deleteMovie = require("delete-movie");
  var moviesFB = require("movies-to-FB");
  var fbToDOM = require("FB-to-DOM");
  var fbToDOMwatched = require("FB-to-DOM-watched");
  var watchedBtnTrue = require("watched-btn-true");
  var filterWatched = require("filter-watched");
  var filterUnwatched = require("filter-unwatched");
  var filterFavorites = require("filter-favorites");
  var deletor = require("deletefromFB");


// ***** Event handlers for log-in/register
  //shows new user view after user clicks 'register' button
  $("body").on('click', "#register", function() {
    register.register();
  });

  //shows user home view after user clicks 'log in' button
  $("body").on('click', "#log-in", function (event) {
    login.login();
    $(".rating").rating();
  });

// ***** Search/add movies functionality 
  //searches movies when enter key is pressed
  $("body").on('keyup', function (event) {
  	if (event.which===13)
    findMovie.findMovie();
    }
  });

// ***** Event handlers for watched and favorite buttons
  //updates FB to make watched = true when "watched" button is clicked
  $("body").on('click', '.watchedBtn', function (event) {
    var parentID = $(this).parent().attr("id");

    console.log("parentID", parentID);
    watchedBtnTrue.watchedTrue(parentID);
    $(this).parent().remove();
  });

// ***** Event handlers for movie filters

  //filters user's movies to show all the movies that the user has selected when user clicks "all movies"
  $("body").on('click', '#allYourMovies', function (event) {
    fbToDOM.fbToDOM();
  });
    
  //filters user's movies to show only their movies marked 'watched', when "watched" filter is clicked.
  $("body").on('click', "#watched", function() {
    filterWatched.filterWatched();
    fbToDOMwatched.fbToDOMwatched();
  });

  //filters user's movies to show only their movies marked 'unwatched', when "unwatched" filter is clicked.
  $("body").on('click', "#unwatched", function() {
    filterUnwatched.filterUnwatched();
  });

  //filters user's movies to show only their favorited (5 stars) movies, when "favorites" filter is clicked.
  $("body").on('click', "#favorites", function() {
    filterFavorites.filterFavorites();
  });


// ***** Delete button
  $("body").on("click", ".deleteBtn", function(e){
    var parent = $(this).parent().attr("id");
    console.log("parent", parent);  
    deleteMovie.deleteMovie(parent);
    $(this).parent().remove();
  });

});

    




