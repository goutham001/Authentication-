const mongoose = require('mongoose');

// establish connection to mongodb
var database = {
    connectivity: (config) => {
        mongoose.Promise = global.Promise;
        mongoose.connect(config.db.uri, { useFindAndModify: false, useUnifiedTopology: true, useNewUrlParser: true });
        const db = mongoose.connection;
        return db;
    }
}

module.exports = database;