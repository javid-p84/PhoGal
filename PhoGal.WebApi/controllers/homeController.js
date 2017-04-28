(function (homeController) {
    var data = require("../data");

    homeController.init = function (app) {

        app.get('/v1', function (req, res) {

            data.getCategories(function (err, results) {

                res.render("index", { title: "Exp+Vash", hey: "hooooooooooooy", others: results });


            });

        });
    }

})(module.exports);