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

// exercise 1 - Create and render a List of 10 Items in a container with an array of models

// require(['exercises/1/Controller'], function(Controller) {
//   Controller.go();
// });

// solution 1 - Create and render a List of 10 Items in a container Collection and CollectionView

require(['solutions/1/Controller'], function(Controller) {
  Controller.go();
});

// exercise 2 - Create and render a List of 10 Items in a container with an array of models

// require(['exercises/2/Controller'], function(Controller) {
//   Controller.go();
// });

// solution 2 - Create and render a List of 10 Items in a container Collection and CollectionView

// require(['solutions/2/Controller'], function(Controller) {
//   Controller.go();
// });
