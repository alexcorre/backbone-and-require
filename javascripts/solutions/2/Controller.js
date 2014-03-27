define([
  'jquery',
  'underscore',
  'Backbone',
  'solutions/2/PageCollectionView',
  'solutions/2/ItemView',
  'solutions/2/ItemsCollection'
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

      // Create a new Collection of ItemModels
      var itemsCollection = new ItemsCollection(window.ITEMS);

      // create a page view and render it in the container
      var pageView = new PageCollectionView({
        collection: itemsCollection
      });
      pageView.render();

      // Put the rendered page view onto the page
      this.container.html(pageView.el);
    }

  };

  return Controller;

});