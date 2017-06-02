(function (albumController) {
    var fs = require('fs');
    var path = require('path');

    albumController.init = function (app) {

        app.get('/api/album', function (req, res) {
            var dir = './Gallery';
            var srcpath = dir;



            if (!fs.existsSync(dir)) {
                fs.mkdirSync(dir);
            }


            var dirs = fs.readdirSync(srcpath).filter(file => fs.lstatSync(path.join(srcpath, file)).isDirectory());
            var files = fs.readdirSync(srcpath).filter(file => fs.lstatSync(path.join(srcpath, file)).isFile());


            res.send({ albums: dirs, files: files });

        });
    };
})(module.exports);