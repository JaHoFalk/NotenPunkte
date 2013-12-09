define(function(require) {

    "use strict";
    var Backbone = require('backbone');
    var template = require('hbs!app/tpl/ShellBootstrap');

    var NoteForm = require('views/NoteForm');

    return Backbone.View.extend({
        initialize: function(options) {
            this.options = options || {};
//            this.setMenu;
        },
        setFooter: function() {
//            var $footer = $('footer', this.$el);
//            $footer.html('__footer__');
        },
        events: {
            "click #add_note": "add_note",
            "click #add_fach": "add_fach"
        },
        add_fach: function() {
            console.log("Add fach ... ");
            this.getContentElement().html('__fach_form__');
        },
        add_note: function() {
            console.log("Add note ... ");
            new NoteForm({el: this.getContentElement()}).render();
        },
        setHeader: function(options) {
            this.options = options || {};
            console.log(options);
            this.render();
        },
        getContentElement: function() {
            var element = $('#content', this.$el);
            element.off();
            return element;
        },
        render: function() {
            this.$el.html(template(
                {title: this.options.title, showBackButton: this.options.showBackButton, action: this.options.action}));
            return this;
        }


    });
});

