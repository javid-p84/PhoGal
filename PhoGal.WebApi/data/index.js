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

    data.getNotes = function (next) {

        database.getDb(function (err, db) {

            if (err) {

                console.log(err);
                next(err);
            }
            else {

                db.notes.find().toArray(function (err, items) {
                    if (err) {
                        next(err)
                    }
                    else {
                        next(null, items);
                    }
                });
            }
        });

    }


    data.createName = function (newName, next) {

        database.getDb(function (err, db) {

            if (err) {

                console.log(err);
                next(err);
            }
            else {

                var name = { name: newName };



                var fs = require('fs');

                var dir = './tmp';

                if (!fs.existsSync(dir)) {
                    fs.mkdirSync(dir);

                }


                if (!fs.existsSync(newName)) {
                    fs.mkdirSync(dir + '/' + newName);
                }

                db.notes.find(name).count(function (err, count) {

                    if (count > 0) {
                        var err = newName + ' already exist';
                        next(err);
                    }
                    else {

                        db.notes.insert(name, function (err) {
                            if (err) {
                                console.log('error on connecting to insert Db : ' + err);
                                next(err);
                            }
                            else
                                next();

                        });
                    }
                });
            }
        });

    }

    seedDB();

})(module.exports);