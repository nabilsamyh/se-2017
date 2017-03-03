
var mongoose = require('mongoose');

var PorSchema = mongoose.Schema({
    title:{
        type:String,
        required:true, 
        unique:true
    },
    URL:String
})

var Por = mongoose.model("Por", projectSchema);

module.exports = Por;