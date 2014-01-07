define(function(require) {

    "use strict";

    var Backbone = require('backbone');
    var template = require('hbs!app/tpl/NoteForm');

    var Data = require('models/Fach');

    var notenArray = new Array("6", "5-", "5", "5+", "4-", "4", "4+", "3-", "3", "3+", "2-", "2", "2+", "1-", "1",
        "1+");

    return Backbone.View.extend({
        initialize: function(options) {
            // TODO bind this
            this.options = options || {};
            this.render();
        },
        events: {
            "click #ok": "notensave",
            "change #slider": "convertValue",
        },
        convertValue: function() {
            var sliderValue = this.$el.find("#slider").val();
            var sliderValueString = 'Punkte: ' + sliderValue + ", Note: " + notenArray[sliderValue];
            this.$el.find("#sliderValue").html(sliderValueString);
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
//            var punkte = this.$el.find("#punkte").val();
//            var note = this.$el.find("#note").val();
////        $possible_values = array( 'a', 1, 'good' );
//if ( !in_array( $untrusted, $possible_values ) )
//  die( "Don't do that!" );

            var sliderValue = this.$el.find("#slider").val();
            console.log("Eingabe Punkte: " + sliderValue + " Eingabe Note: " + notenArray[sliderValue]);
            
            // Reset slider
            var sliderValue = this.$el.find("#slider").val(0);
            var sliderValueString = 'Punkte: 0, Note: 6';
            this.$el.find("#sliderValue").html(sliderValueString);


        },
        render: function() {
            // render table
            this.$el.html(template());
            return this;
        }
    });

});