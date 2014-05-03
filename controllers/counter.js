'use strict';

var CounterModel = require('../models/counter');
var mtwitter = require('mtwitter'),
    config = require('../config/app.json'),
    async = require('async');

module.exports = function (app) {
    app.post("/counter", function(req, res){
        var brand1={}, brand2={}, model={};
        brand1.name = req.param('brand1').toLowerCase();
        brand2.name = req.param('brand2').toLowerCase();
        brand1.count = 0;
        brand2.count = 0;
        model = {brand1: brand1, brand2: brand2};

        async.auto({
            init: function(callback){
                brand1.twitter = new mtwitter(config.twitter);
                brand2.twitter = new mtwitter(config.twitter);
                callback();
            },
            searchbrand1: ['init', function(callback, results){
                console.log("Searching Twittr");
                brand1.twitter.get('search/tweets', {q: "#" + brand1.name, count: 100}, function(err, item) {
                  console.log(item.statuses.length);
                  brand1.count = item.statuses.length;
                  callback(null);
                });
            }],

            searchbrand2: ['searchbrand1', function(callback,results){
                brand2.twitter.get('search/tweets', {q: "#" + brand2.name, count: 100}, function(err, item) {
                  console.log(item.statuses.length);
                  brand2.count = item.statuses.length;
                  callback(null);
                });
            }],
            render: ['searchbrand2',function(callback, results){
                console.dir(model);
                console.log("brand1:" + brand1.count + " brand2:" + brand2.count + "----" + results);
                res.render('counter', model);
                callback(null);
            }],
        }, function(err,results){
                console.log(err,results);
        });
    });

    app.get('/counter', function (req, res) {
        res.redirect('/');
    });
};
