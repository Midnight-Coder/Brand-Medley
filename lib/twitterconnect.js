'use strict';

var Twitter = require('mtwitter');

function authenticate(conf) {
    var twitter = new Twitter({
        consumer_key: conf.APIkey,
        consumer_secret: conf.APIsecret,
        application_only: true
    });
    console.log("---------------Authenticated Twitter app------------------");
}

function search(query){
    var params = {
        'q':query,
        'count':5
        // ,'result_type': 'recent'
    };

    twitter.get('search/tweets', params, function(err, item) {
        var count = item.statuses.length;
        console.log(params.q + ": " + count);
    });
}

module.exports = {
    authenticate: authenticate,
    search:search
};
