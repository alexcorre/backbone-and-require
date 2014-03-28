define([
  'Backbone',
  'underscore',
  'jquery'
], function(
  Backbone,
  _,
  $
) {

  /**
   * A View that can render a collection of items easily.
   * @type {[type]}
   */
  var CollectionView = Backbone.View.extend({

    /**
     * CSS selector, scoped to this views $el, to select the node in which to render
     * the collection views items.
     *
     * @type {String}
     */
    containerSelector: '.container',

    /**
     * Returns a jQuery collection for the node inside which we render and append
     * every item in this collection.
     *
     * @return {jQuery Object}
     */
    getContainer: function() {
      // TODO Implement Me!
    },

    /**
     * Getter for the collection that this collection view should render. Should be overriden if the
     * collection resides anywhere but this.collection.
     *
     * @return {Backbone.Collection} [description]
     */
    getCollection: function() {
      // TODO Implement Me!
    },

    /**
     * Called with each model in the collection
     *
     * @param  {Backbone.Model} model which we need to get a Collection View DOM node for
     * @return {[type]}       [description]
     */
    nodeForModel: function(model) {
      // TODO Implement Me!
    },

    /**
     * Renders all the items models in the collection into a view
     *
     * @return {CollectionView} [description]
     */
    render: function() {

      // TODO Implement Me!
      //
      // Hint: Use getContainer(), getCollection(), and nodeForModel() to construct
      // html to place into the DOM

      // Always return this
      return this;
    }

  });

  return CollectionView;

});