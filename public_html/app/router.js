define(function(require) {

    "use strict";
    var Backbone = require('backbone');

    var HomeView = require('views/Home');
    var FachView = require('views/Fach');
    var ShellView = require('views/ShellBootstrap');

    var $body = $('body');
    var shellView = new ShellView({el: $body}).render();

    return Backbone.Router.extend({
        initialize: function() {
            shellView.setFooter();
        },
        routes: {
            '': 'home',
            'fach/:id': 'fach',
            '*path': 'home'
        },
        home: function() {
              shellView.setHeader ("Fächer");
            var view = new HomeView({el: shellView.getContentElement()});
        },
        fach: function(id) {
            shellView.setHeader (id);
            var view = new FachView({el: shellView.getContentElement()});
        },
    });
});