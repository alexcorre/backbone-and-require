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

      // Create an array of ItemModels
      var items = [];
      _.times(10, function(index) {
        items[index] = new ItemModel({
          value: index,
          message: 'I am an Item!'
        });
      });

      // create a page view and render it in the container
      var pageView = new PageView({
        collection: items
      });
      pageView.render();
      this.container.html(pageView.el);
    }

  };

  return Controller;

});