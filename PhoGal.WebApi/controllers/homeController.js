(function (homeController) {
    var data = require("../data");
    var fs= require("fs");
    var path= require("path");

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


        app.get('/v4', function (req, res) {
            var dir = './Gallery';
            var srcpath = dir;


            if (!fs.existsSync(dir)) {
                fs.mkdirSync(dir);
            }


            var dirs = fs.readdirSync(srcpath).filter(file => fs.lstatSync(path.join(srcpath, file)).isDirectory());
            var files = fs.readdirSync(srcpath).filter(file => fs.lstatSync(path.join(srcpath, file)).isFile());

            res.send({ albums: dirs, files: files });
            
            //res.render("index", { title: "Exp+Vash", hey: "hooooojlkjjlkjooooy", others: { files: files, albums: dirs } });



        });

    }



     
})(module.exports);