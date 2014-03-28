define([
  'Backbone',
  'jquery'
], function(
  Backbone,
  $
) {

  var ItemView = Backbone.View.extend({

    /**
     * The type of tag this views $el should have. Defaults to div.
     *
     * @type {String}
     */
    tagName: 'li',

    /**
     * Class to be added to this views $el
     *
     * @type {String}
     */
    className: 'item',

    /**
     * Template function for create HTML from this view
     *
     * @type {function}
     */
    template: _.template($('#item-template').html()),

    /**
     * Renders this view.
     *
     * @return {Backbone.View} a reference to this view
     */
    render: function() {
      this.$el.html(this.template({
        model: this.model
      }));

      return this;
    }

  });

  return ItemView;

});