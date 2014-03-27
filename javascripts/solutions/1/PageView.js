define([
  'Backbone',
  'jQuery',
  'solutions/1/ItemView'
], function(
  Backbone,
  $,
  ItemView
) {

  var PageView = Backbone.View.extend({

    /**
     * class name to be added to this View's $el
     * @type {String}
     */
    className: 'page',

    /**
     * Template function for create HTML from this view
     *
     * @type {function}
     */
    template: _.template($('#page-template').html()),

    /**
     * Renders this view.
     *
     * @return {Backbone.View} a reference to this view
     */
    render: function() {

      // First render the container template to set up the inital empty $el
      this.$el.html(this.template({
        title: 'Exercise 1'
      }));

      // keep a reference to our container
      var $container = this.$('.items');

      // check if we have a collection
      if (this.collection) {

        // loop through each item in the collection and create a view for it
        _.each(this.collection, function(itemModel) {

          // Create a view for the current model and render it.
          var itemView = new ItemView({
            model: itemModel
          });
          itemView.render();

          // add the rendered views el to the DOM
          $container.append(itemView.el);
        });
      }

      return this;
    }

  });

  return PageView;

});