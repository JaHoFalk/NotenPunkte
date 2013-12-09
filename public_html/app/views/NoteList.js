define(function(require) {

    "use strict";

    var Backbone = require('backbone');

    var Data = require('models/Fach');

    return Backbone.View.extend({
        initialize: function() {
            this.render();
        },
        render: function() {
            // render table
            this.$el.html("__TODO__");
            return this;
        }
    });

});