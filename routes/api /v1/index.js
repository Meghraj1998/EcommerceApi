const express=require('express');
const router=express.Router();




 //router the request to product
router.use('/',require('./Product'));





module.exports=router;