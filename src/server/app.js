var express = require('express');
var app = express();

var port = process.env.PORT || 3000;
var router = express.Router();
var data = require('./userdata.json');

router.get('/users', function(req,res){
    res.json(data);
});

app.use('/api', router);

app.listen(port, function(){
    console.log("Server is running at ", port);
});