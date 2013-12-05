define(function(require) {

    "use strict";

    var Backbone = require('backbone');
    var template = require('hbs!app/tpl/Fach');

    return Backbone.View.extend({
        initialize: function() {
            this.render();
        },
        events: {
            "click #ok": "notensave",
        },
        notensave: function() {
            var punkte = this.$el.find("#punkte")
                    .val();
            var note = this.$el.find("#note")
                    .val();
            console.log("Eingabe Punkte: " + punkte + " Eingabe Note: " + note);
        },
        render: function() {
            // render table
            this.$el.html(template());
            return this;
        }
    });

});