﻿(function (homeController) {
    var data = require("../data");

    homeController.init = function (app) {

        app.get('/v1', function (req, res) {

            data.getCategories(function (err, results) {

                res.render("index", { title: "Exp+Vash", hey: "hooooojlkjjlkjooooy", others: results });

                console.log('hello');
            });

        });


        app.get('/v2', function (req, res) {

            data.getCategories(function (err, results) {

                res.render("index", { title: "Exp+Vash", hey: "v2222222222222222222222222222222", others: results });

                console.log('hello'); 
            });

        });
    }

})(module.exports);