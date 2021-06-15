var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var attendanceSchema = new Schema({
    
    name: String,
    regNo:String,
    status:String,
    attendanceDate:Date,
   
    
});

module.exports = mongoose.model('Attendance', attendanceSchema);