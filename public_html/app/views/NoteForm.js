define(function(require) {

    "use strict";

    var Backbone = require('backbone');
    var template = require('hbs!app/tpl/NoteForm');

    var Data = require('models/Fach');

    return Backbone.View.extend({
        initialize: function(options) {
            // TODO bind this
            this.options = options || {};
            this.render();
        },
        events: {
            "click #ok": "notensave",
//            "click #ok": "test"
        },
        test: function() {
            var faecher = new Data.Faecher();
            faecher.fetch();
            var fach = new Data.Fach();
            faecher.add(fach);
            fach.save();

            faecher.models.forEach(function(model) {
                console.log("Model in collection: " + model.get("created"));
            });

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