define([
  'Backbone',
  'jquery',
  'solutions/1/ItemView'
], function(
  Backbone,
  $,
  ItemView
) {

  var PageView = Backbone.View.extend({

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

      // First render the container template to set up the inital empty $el. Look at the
      // page-template in index.html to see what info we can pass to the template. Lets pass
      // in the title 'Exercise 1'.
      this.$el.html(this.template({
        title: 'Exercise 1'
      }));

      // Now that our $el is filled with the template, we want to loop through the collection
      // and create an ItemView for each model in the list, render it, and append it to the .items ul

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

      // Always return this
      return this;
    }

  });

  return PageView;

});