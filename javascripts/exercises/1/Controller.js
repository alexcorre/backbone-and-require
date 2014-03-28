define([
  'jquery',
  'underscore',
  'exercises/1/PageView',
  'exercises/1/ItemView',
  'exercises/1/ItemModel'
], function(
  $,
  _,
  PageView,
  ItemView,
  ItemModel
) {

  var Controller = {

    container: $('#container'),

    go: function() {

      // First, create an array of ItemModels from the global array window.ITEMS,
      // check the console in your browser to see what the ITEMS variable is. You'll
      // notice it is an array of javascript objects.
      //
      // In this exercise, we will use only Views and Models to render the items onto the page.
      //
      // ItemModel has already been created for you, and ItemView has been created but needs
      // implementation details to fit in in order to render its template.
      //
      // Hint: Create an array of Models from the data using _.each. Then Pass this to page view
      // to render. After rendering the PageView place its el into the controllers container element.

      console.log('Hello! window.ITEMS is...');
      console.log(window.ITEMS);
    }

  };

  return Controller;

});