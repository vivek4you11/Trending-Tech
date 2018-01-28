const express = require('express');
const app = express();

const port = process.env.PORT || 3000;
const router = express.Router();
const data = require('./userdata.json');

router.get('/users', function(req,res){
    res.json(data);
});

app.use('/api', router);

app.listen(port, function(){
    console.log("Server is running at ", port);
});