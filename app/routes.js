// require dependincies 
var express = require('express');
var router = express.Router();
var projectController = require('./controllers/projectController');
var loginController = require('./controllers/loginController');
var registerController = require('./controllers/registerController');



// add routes
router.get('/', projectController.getAllProjects);
router.get('/login', loginController.getAllPortofolios);
//router.get('/register',function(req,res,next){
  //  res.render('index',{title: 'Express'});
//});

router.get('/register',function(req,res){
    registerController.newStudent(req,res);  // YET TO BE DEFINED
});

router.post('/register',function(req,res){
    registerController.CreateStudent(req,res);
});





/*router.get('/Portofolios',function(req,res){
    var responseObj = { message :'OK' };
    res.send(responseObj);
});

router.get('/ilike/:icecreamchoice/:name',function(req,res){
    var choice = req.params.icecreamchoice;
    var name = req.params.name;
    var responseObj = { message: 'Hey ' + name + ' I like ' + choice + ' too!'};

    res.send(responseObj);
}); */
router.post('/project', projectController.createProject);

// export router

module.exports = router;

/*

/* GET home page. */
/*
router.get('/', function(req, res) {
res.render('home.html')

});
router.get('/newcustomer', function(req, res) {
customerCtr.newCustomer(req,res);
});

router.post('/newcustomer',type,function(req, res) {
customerCtr.CreateCustomer(type,req,res);
});
module.exports = router;
*/