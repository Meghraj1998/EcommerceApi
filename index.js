 
const express = require('express');
const app = express();
const port = 8000;
 
const db = require('./config/mongoose');
var bodyParser = require('body-parser')

app.use(express.urlencoded());
//app.use(bodyParser.urlencoded({ extended: true }))

app.use(bodyParser.json())



const router=require('./routes/api /v1/addproduct');
 
 
  app.use('/', router);


 

app.listen(port, function(err)
{
if(err)
{
    console.log("Cannot run server");
     
}
 
console.log("Server running"+port);


});
