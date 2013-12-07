define(function(require) {

    "use strict";
    var Backbone = require('backbone');
    var template = require('hbs!app/tpl/ShellBootstrap');

    return Backbone.View.extend({
        title: "Fächer",
        initialize: function() {
//            this.setMenu;
        },
     
        setFooter: function() {
//            var $footer = $('footer', this.$el);
//            $footer.html('__footer__');
        },
        setHeader: function(title) {
            this.title=title;
            this.render();
        },
        
        getContentElement: function() {
            var element = $('#content', this.$el);
            element.off();
            return element;
        },
        render: function() {
            this.$el.html(template({title:this.title}));
            return this;
        }


    });
});

