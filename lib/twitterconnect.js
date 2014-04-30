'use strict';

var Twitter = require('mtwitter');

var twit = function () {
    return {
        authenticate: function (conf) {
            var twitter = new Twitter({
                consumer_key: conf.APIkey,
                consumer_secret: conf.APIsecret,
                application_only: true
            });

            //TODO: make twitter accessible for twitter.get
            console.log("---------------Authenticated Twitter app------------------");
        }
    };
};

module.exports = twit();
