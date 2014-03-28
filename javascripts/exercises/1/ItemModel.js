define(['Backbone'], function(Backbone) {

  // Declare an ItemModel class which extends Backbone.Model. If we had any
  // custom logic that only ItemsModels needed to know how to do, then we
  // would put it in this class.
  var ItemModel = Backbone.Model.extend({});

  // Return the class for this ItemModel module.
  return ItemModel;
});