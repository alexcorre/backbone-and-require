define([
  'Backbone',
  'solutions/2/ItemModel'
], function(
  Backbone,
  ItemModel
) {

  var ItemsCollection = Backbone.Collection.extend({

    /**
     * Model property of a collection determines what model to make when adding or setting
     * items to a collection. This makes ItemsCollection always a Collection of Items.
     *
     * http://backbonejs.org/#Collection-model
     *
     * @type {[type]}
     */
    model: ItemModel

  });

  return ItemsCollection;

});