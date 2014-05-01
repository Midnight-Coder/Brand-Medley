'use strict';


var CounterModel = require('../models/counter');


module.exports = function (app) {

    app.post("/counter", function(req, res){
        console.log("POST recevied:" + req.param('brand1') + " & " + req.param('brand2'));
        var model = {brand1:req.param('brand1').toLowerCase(), brand2: req.param('brand2').toLowerCase()};
        res.render('counter', model);
    });

    // var model = new CounterModel();

    app.get('/counter', function (req, res) {
        //Redirect all direct requests to home
        res.redirect('/');
    });

};
