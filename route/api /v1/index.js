const express=require('express');
const router=express.Router();

router.use('/addproduct',require('./post'));



module.exports=router;