define(function(require) {

    "use strict";
    var Backbone = require('backbone');
    var BackboneLocalStorage = require('backbonelocalstorage');

    var Model = Backbone.Model.extend({
        defaults: function() {
            return {
                created: "created on " + new Date().toISOString()
            }
        }
    });

    var Collection = Backbone.Collection.extend({
        model: Model,
        localStorage: new Backbone.LocalStorage("fach")
    });

    return {
        Fach: Model,
        Faecher: Collection
    };
});