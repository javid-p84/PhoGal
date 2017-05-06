(function (data) {

    var seedData = require('./seedData');
    var database = require('./database');

    data.getCategories = function (next) {
        next(null, seedData.initialNotes);
    };

    function seedDB() {
        database.getDb(function (err, db) {
            if (err) {
                console.log('error on connecting to Db : ' + err);
            }
            else {
                
                db.notes.count(function (err, count) {
                    if (err) {
                        console.log('error on connecting to count Db : ' + err);
                    }

                    else {
                        if (count == 0) {
                            console.log('inserting');
                            seedData.initialNotes.forEach(function (note) {

                                db.notes.insert(note, function (err) {
                                    if (err) {
                                        console.log('error on connecting to insert Db : ' + err);
                                    }

                                });
                            });
                        }
                        else {
                            console.log('db is already there');

                        }

                    }
                });

            }

        });

    }

    seedDB();

})(module.exports);