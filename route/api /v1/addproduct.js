const express=require('express');
const router=express.Router();
const postApi=require('../../../controllers/api/v1/addproduct');


router.get('/', postApi.index);




module.exports=router;