# Movie History

Movie History is created by Marybeth Snodgrass, Jason Stiltner, and Jessawynne Parker.

## Requirements
1. Must have the ability to register a user in Firebase
1. Must have the ability to log in
1. You must use Firebase to store movies
1. You must be able to add movies
1. You must be able to remove movies
1. Each movie must have the following properties
   1. Movie name
   1. Year released
   1. An array of major actors
   1. An integer rating of 1-5
   1. A boolean value that, if true, means that you have Watched the movie
1. You must be using Grunt to automate Javascript testing
1. You must be using Grunt to automate SASS compilation

## Need to Install: 
Jquery, Handlebars, Lodash, HandleBars, Q, Bootstrap, Firebase, Bootstrap, Stars (bootstrap plugin)

and require config file includes
```
require.config({
  baseUrl: './javascripts',
  paths: {
    'jquery': '../lib/bower_components/jquery/dist/jquery.min',
    'lodash': '../lib/bower_components/lodash/lodash.min',
    'hbs': '../lib/bower_components/require-handlebars-plugin/hbs',
    'q': '../lib/bower_components/q/q',
    'firebase': '../lib/bower_components/firebase/firebase',
    'bootstrap': '../lib/bower_components/bootstrap/dist/js/bootstrap.min',
    'stars': '../lib/bower_components/bootstrap-star-rating/js/star-rating'
  },
  shim: {
    'bootstrap': ['jquery'],
    'stars': ['bootstrap'],
    'firebase': {
      exports: 'Firebase'
    }
  }
});
```