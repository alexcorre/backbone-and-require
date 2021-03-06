define([
  'Backbone',
  'jquery',
  'exercises/2/CollectionView',
  'exercises/2/ItemView'
], function(
  Backbone,
  $,
  CollectionView,
  ItemView
) {

  var PageView = CollectionView.extend({

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
     * @override to return the selector for this particular view. Can assume
     * this is scoped to the views $el.
     *
     * @type {String}
     */
    containerSelector: '.items',

    /**
     * Renders this view.
     *
     * @return {Backbone.View} a reference to this view
     */
    render: function() {

      // First render the container template to set up the inital empty $el
      this.$el.html(this.template({
        title: 'Exercise 2'
      }));

      // Call Collection Views Render method
      CollectionView.prototype.render.call(this);

      // Always return this view
      return this;
    },

    /**
     * @override nodeForModel to returned view $els for each model
     */
    nodeForModel: function(model) {
      // TODO Implement Me!
    }

  });

  return PageView;

});