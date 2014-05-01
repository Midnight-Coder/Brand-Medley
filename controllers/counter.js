'use strict';


var CounterModel = require('../models/counter');


module.exports = function (app) {

    app.post("/counter", function(req, res){
        console.log("POST recevied");
        console.dir(req);
    });

    // var model = new CounterModel();

    app.get('/counter', function (req, res) {
        res.render('counter', {});

    });

};
