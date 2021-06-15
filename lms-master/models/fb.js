var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var fbSchema = new Schema({
    
    name: String,
    phone:String,
    email:String,
    feedback: String,
    
});

module.exports = mongoose.model('FB', fbSchema);