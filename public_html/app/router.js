define(function(require) {

    "use strict";
    var Backbone = require('backbone');

    var FachView = require('views/FachList');
    var NoteView = require('views/NoteList');
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
            shellView.setHeader({title: "Fächer", action:'add_fach'});
            var view = new FachView({el: shellView.getContentElement()});
        },
        fach: function(id) {
            shellView.setHeader({title: id, showBackButton: true, action:'add_note'});
            var view = new NoteView({el: shellView.getContentElement()});
        },
    });
});