//let Project = require('../models/Project');

var student = require('../models/users');


let registerController = {
    
    CreateStudent:function(req, res){
        
     var entry = new student(
        {
            Firstname:req.body.Firstname,
            Lasttname:req.body.Lastname,
            Username:req.body.Username,
            Password:req.body.Password,
            Email:req.body.Email
        
    }
    );

entry.save();
res.render('/');
},


    CreateProject:function(req, res){
        let project = new Project(req.body);

        project.save(function(err, project){
            if(err){
                res.send(err.message)
                console.log(err);
            }
            else{

                console.log(project);
                res.redirect('/');
            }
        })
    },
    newStudent:function(req,res){
    res.render('register',{title:"new Student"});
}
}

exports.CreateStudent=function(req,res){
    var entry = new student(
        {
            Firstname:req.body.Firstname,
            Lasttname:req.body.Lastname,
            Username:req.body.Username,
            Password:req.body.Password,
            Email:req.body.Email
        
    }
    );

entry.save();
res.render('/');
};
exports.newStudent=function(req,res){
    res.render('register',{title:"new Student"});
}


module.exports = registerController;