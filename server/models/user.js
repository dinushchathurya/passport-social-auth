const mongoose = require('mongoose')
const Schema = mongoose.Schema;

// create User Schema //
var User = new Schema({
    name: String,
    someId: String
});

module.exports = mongoose.model('users', User);