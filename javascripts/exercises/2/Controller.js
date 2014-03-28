define([
  'jquery',
  'underscore',
  'Backbone',
  'exercises/2/PageCollectionView',
  'exercises/2/ItemView',
  'exercises/2/ItemsCollection'
], function(
  $,
  _,
  Backbone,
  PageCollectionView,
  ItemView,
  ItemsCollection
) {

  var Controller = {

    container: $('#container'),

    go: function() {
      // This time lets use Backbone.Collection to take care of some
      // of the boilerplate for us.
      //
      // Take a look at ItemsCollection module. What do we need to add to it
      // to make it automatically parse data into a specific model?
      //
      // Here is the real fun. We want to use a PageCollectionView to render
      // this collection. You can see that PageCollectionView extends CollectionView.
      //
      // Take a look at CollectionView. Its not done yet! Try to figure out how to
      // implement the empty methods. Which ones do we need to override in our
      // PageCollectionView subclass?
      //
      // Finally once we have rendered the PageCollectionView. Place it into our
      // controllers container, just as we did before.
      //

      console.log('Hello! window.ITEMS is...');
      console.log(window.ITEMS);
    }

  };

  return Controller;

});