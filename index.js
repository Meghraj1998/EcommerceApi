 //this is the main index file(serever will first launch this file)

const express = require('express');
const app = express();
const port = 8000;
const db = require('./config/mongoose');
var bodyParser = require('body-parser')


//middleWare for converting form data into text
app.use(express.urlencoded());
app.use(bodyParser.json())


//router to router the request to addProduct
const router=require('./routes/api /v1/index');
 
 
//route all the request to router fodler(get,post,delete,etc)
  app.use('/', router);


 

app.listen(port, function(err)
{
if(err)
{
    console.log("Cannot run server");
     
}
 
console.log("Server running"+port);


});
