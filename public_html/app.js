require.config({
    baseUrl: 'lib',
    paths: {
// frame specific values
        bootstrap: "bootstrap3/js/bootstrap.min",
        shellview: '../app/views/shell/ShellBootstrap',
        // app
        app: '../app',
        tpl: '../app/tpl',
        views: '../app/views',
        models: '../app/models',
        // core libs
        jquery: 'jquery/jquery',
        backbone: 'backbone/backbone',
        // template
        Underscore: 'underscore/underscore',
        underscore: 'require-handlebars-plugin/hbs/underscore',
        handlebars: 'require-handlebars-plugin/Handlebars',
        hbs: 'require-handlebars-plugin/hbs',
        i18nprecompile: 'require-handlebars-plugin/hbs/i18nprecompile',
        json2: 'require-handlebars-plugin/hbs/json2',
      
    },
    shim: {
        'jQuery': {
            exports: '$'
        },
        'backbone': {
            deps: ['Underscore', 'jquery'],
            exports: 'Backbone'
        },
        'Underscore': {
            exports: '_'
        },
        'Handlebars': {
            deps: ['handlebars'],
            exports: 'Handlebars'
        },
        // frame specific library
        'bootstrap': {
            deps: ['jquery'],
            exports: 'bootstrap'
        },
       
    },
    hbs: {
        templateExtension: 'html',
        disableI18n: true,
        disableHelpers: true
    }
});
require(['jquery', 'backbone', 'handlebars', 'app/router', 'bootstrap'],
        function($, Backbone, Handlebars, Router, Bootstrap) {

            // Handlebars logger
            Handlebars.logger.log = function(level) {
                if (level >= Handlebars.logger.level) {
                    console.log.apply(console, [].concat(["Handlebars: "], _.toArray(arguments)));
                }
            };
            // DEBUG: 0, INFO: 1, WARN: 2, ERROR: 3,
            Handlebars.registerHelper('log', Handlebars.logger.log);
            Handlebars.logger.level = 0;
            // Init
            var router = new Router();
            Backbone.history.start();
        });