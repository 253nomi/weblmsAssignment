var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var assignmentMarksSchema = new Schema({
    
    name: String,
    courseName:String,
    assignmentNo:Number,
    obtainedMarks: Number,
    totalMarks: Number,
    
});

module.exports = mongoose.model('AssignmentMarks', assignmentMarksSchema);