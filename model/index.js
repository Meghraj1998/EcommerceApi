 
const mongoose = require('mongoose');


 //desgining the scahema for the porduct
const productSchema = new mongoose.Schema(
    {
        name:{
            type: String,
            required: true,
        },
        quantity:{
            type:String,
            required:true,
        }

    },{
        timestamps:true
    }
);


const Product = mongoose.model('Product',productSchema);

//exporting the schema
module.exports = Product;