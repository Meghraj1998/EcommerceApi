//get the database obj from model folder to make changes in DB
const Product = require('../../../model/index');



//home function return all the products detail from DB
module.exports.home = async function(req, res){
    

    console.log("product");
           let products  = await Product.find({})
           .sort('-createdAt');
        
           return res.json(200,{
                products:products
           });
       
}



//This Function create the product in Db
module.exports.create = async function(req, res){
   try{
       console.log("product");
        console.log(req.body);


            let product = await Product.create({
                name: req.body.name,
                quantity: req.body.quantity
            });
            
            return res.json(200,{
                data:{
                    product:product
                }
            })
       
    }catch(err){
        console.log("Error while creating a product",err);
        return res.json(500,{
            message:"Internal server error"
        });
     }
}



//This function delete the product
module.exports.destroy = async function (req, res) {
    try {
        let product = await Product.findById(req.params.id);
        
            product.remove();

        

           
        return res.json(200,{
            message:"Product Deleted"
        });
        
    }catch (err) {
        console.log("Error while deleting the product",err);
        return res.json(500,{
                message:"Internal server error"
        });
    }

}


//this method update the data
module.exports.update = function(req,res){

    try {
        Product.findOneAndUpdate({_id:req.params.id},
            {$set:
                {quantity:req.params.number}},function(err,product){
                if(err){
                    console.log("product not found");
                }
                return res.json(200,{
                    data:{
                        product:product,
                    },
                    message:"Updated Successfully"
                });

            }
            );
        
    }catch (err) {
        console.log("Error ",err);
        return res.json(500,{
                message:"Server error"
        });
    }

}