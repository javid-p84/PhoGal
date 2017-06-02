(function (controllers) {

    var homeController = require('./homeController');
    var albumController = require('./albumController');

    controllers.init = function (app) {
        homeController.init(app);
        albumController.init(app);
    }

})(module.exports); 