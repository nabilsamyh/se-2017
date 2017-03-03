

var mongoose=require("mongoose");

var schema=mongoose.Schema;

var userSchema=new schema({
   Firstname:String,
   Lastname:String,
   Username:String,
  Password:String,
  Email:String
   

});

exports=mongoose.model('Registrations',userSchema);