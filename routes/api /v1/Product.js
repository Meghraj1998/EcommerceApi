const express = require('express');
const router = express.Router();

const productsApi = require("../../../controller/api/v1/addproduct");



console.log("product");

//get all the product in cart
router.get('/',productsApi.home);


//create or add the new product
router.post('/create',productsApi.create);

//delte the product
router.delete('/:id',productsApi.destroy);

//update the data(product data)
router.post('/:id/update_quantity',productsApi.update);



//export the  router , so that is could be used in another files
module.exports = router;