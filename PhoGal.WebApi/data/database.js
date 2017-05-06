(function (db) {
    var mongodb = require('mongodb');
    var mongoUrl = "mongodb://localhost:27017/PhoGal";
    var theDb = null;


    db.getDb = function (next) {

        if (!theDb) {
            mongodb.MongoClient.connect(mongoUrl, function (err, db) {

                if (err) {
                    next(err, null);
                }
                else {

                    theDb = {
                        db: db,
                        notes: db.collection("notes")
                    };

                    next(null, theDb);
                }
            });
        } else {
            next(null, theDb);
        }
    }

})(module.exports);