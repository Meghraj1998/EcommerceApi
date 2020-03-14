var mongoose=require('mongoose');

const productSchema=new mongoose.Schema({
 

    product: {
        name: String,
        quantity: int
      }
     
}, {timestamps: true} );


const Product=mongoose.model('product', productSchema);

module.exports=Product;
