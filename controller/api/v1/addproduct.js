const post=require('.././../../models/addproduct');

module.exports.index=function(req,res){
   
    

    post.find({}, function(err, posts)
    {
        return res.json({

            msg:'Json data from api',
             post:posts,
    
        })
    
 

    });
     

}