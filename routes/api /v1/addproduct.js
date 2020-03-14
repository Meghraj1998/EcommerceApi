const express = require('express');
const router = express.Router();

const productsApi = require("../../../controller/api/v1/addproduct");



console.log("product");
router.get('/',productsApi.home);

router.post('/create',productsApi.create);


router.delete('/:id',productsApi.destroy);
router.post('/:id/update_quantity',productsApi.update);


module.exports = router;