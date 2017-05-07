(function (homeController) {
    var data = require("../data");

    homeController.init = function (app) {

        app.get('/v1', function (req, res) {

            data.getCategories(function (err, results) {

                res.render("index", { title: "Exp+Vash", hey: "hooooojlkjjlkjooooy", others: results });

                console.log('hello');
            });

        });


        app.get('/v2', function (req, res) {

            data.getNotes(function (err, results) {

                if (err) {
                    console.log(err)
                }
                else {


                    res.render("index", {
                        title: "Exp+Vash",
                        hey: "v2222222222222222222222222222222",
                        others: results,
                        msg: req.flash('msg')
                    });
                }
            });

        });

        app.post('/v3', function (req, res) {

            data.createName(req.body.name, function (err) {
                if (err) {
                    req.flash('msg', err);
                    res.redirect('/v2');

                }
                else {
                    res.redirect('/v2');

                }
            });

        });

    }




})(module.exports);