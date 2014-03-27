// Require Main Config
requirejs.config({

  baseUrl: 'javascripts',

  paths: {
    'Backbone': 'lib/backbone',
    'underscore': 'lib/underscore',
    'jquery': 'http://code.jquery.com/jquery-2.1.0.min'
  }

});

// Kickstart

// Exercise 0 - Setup require.js

// require(['Backbone'], function(Backbone) {
//   if (!Backbone) {
//     alert('I Cant find backbone!');
//   } else {
//     alert('I found backbone');
//   }
// });

// Solution 1 - Create and render a List of 10 Items in a container with an array of models

require(['solutions/1/Controller'], function(Controller) {
  Controller.go();
});

// Solution 1 - Create and render a List of 10 Items in a container Collection and CollectionView

//
