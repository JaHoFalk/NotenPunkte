define(function(require) {

    "use strict";

    var Backbone = require('backbone');
    var template = require('hbs!app/tpl/Fach');
    
    return Backbone.View.extend({
        initialize: function(options) {
            // TODO bind this
            this.options = options || {};
            this.render();
        },
        
        events: {
            "click #ok": "fachsave"
        },
        
        fachsave: function() {
            var neuesfach = this.$el.find("#fach").val();
            console.log(neuesfach + " wurde gespeichert.");
        },
            
        render: function() {
            // render table
            this.$el.html(template());
            return this;
        }
        
    });
   });