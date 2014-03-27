define([
  'jquery',
  'underscore',
  'solutions/1/PageView',
  'solutions/1/ItemView',
  'solutions/1/ItemModel'
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

      // Create an array of ItemModels from the global array window.ITEMS
      var itemModels = [];
      _.each(window.ITEMS, function(item) {
        var model = new ItemModel(item);
        itemModels.push(model)
      });

      // create a PageView and set the itemModels as its 'collection' attribute. Render
      // it and put it into the controllers container.
      var pageView = new PageView({
        collection: itemModels
      });
      pageView.render();
      this.container.html(pageView.el);
    }

  };

  return Controller;

});