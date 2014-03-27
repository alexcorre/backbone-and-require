// Require Main Config
requirejs.config({

  baseUrl: 'javascripts',

  paths: {
    'Backbone': 'lib/backbone',
    'underscore': 'lib/underscore',
    'jQuery': 'http://code.jquery.com/jquery-2.1.0.min'
  },

  shim: {
    'jQuery': {
      exports: '$'
    },

    'Backbone': {
      // These script dependencies should be loaded before loading
      // backbone.js
      deps: ['underscore', 'jQuery'],
      // Once loaded, use the global 'Backbone' as the
      // module value.
      exports: 'Backbone'
    }
  }
});

// Kickstart

// Solution 0 - Setup require.js

require(['Backbone'], function(Backbone) {
  if (!Backbone) {
    alert('I Cant find backbone!');
  } else {
    alert('I found backbone');
  }
  console.log('Backbone is: ', Backbone);
});

// Solution 1 - Create and render a List of 10 Items in a container with an array of models

// require(['solutions/1/Controller'], function(Controller) {
//   Controller.go();
// });

// Solution 1 - Create and render a List of 10 Items in a container Collection and CollectionView

//
