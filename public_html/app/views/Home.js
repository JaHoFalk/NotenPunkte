define(function(require) {

    "use strict";

    var Backbone = require('backbone');
    var template = require('hbs!app/tpl/Home');
    
    return Backbone.View.extend({
        initialize: function() {
            this.render();
        },
        render: function() {
            // render table
            this.$el.html(template({title:'Home'}));
            return this;
        }
    });

});