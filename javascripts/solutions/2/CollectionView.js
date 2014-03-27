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
      return this.$(this.containerSelector);
    },

    /**
     * Getter for the collection that this collection view should render. Should be overriden if the
     * collection resides anywhere but this.collection.
     *
     * @return {Backbone.Collection} [description]
     */
    getCollection: function() {
      if (this.collection) {
        return this.collection;
      } else {
        throw 'Must override getCollection to tell the CollectionView where to find it!';
      }
    },

    /**
     * Called with each model in the collection
     *
     * @param  {Backbone.Model} model which we need to get a Collection View DOM node for
     * @return {[type]}       [description]
     */
    nodeForModel: function(model) {
      throw 'Must override nodeForModel to return a rendered View';
    },

    /**
     * Renders all the items models in the collection into a view
     *
     * @return {CollectionView} [description]
     */
    render: function() {
      var $container = this.getContainer();
      var collection = this.getCollection();

      // Loop through each model and get a rendered DOM node for it
      collection.each(_.bind(function(model) {
        var node = this.nodeForModel(model);
        $container.append(node);
      }, this));

      return this;
    }

  });

  return CollectionView;

});