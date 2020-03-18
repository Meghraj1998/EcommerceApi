# EcommerceApi
#Codingninjas Assignnment


<h1>Product Api</h1>
<span> It is the simple product api developed for practice , User can add, update, delete ,and list the product detail</span>

<h2>How to use</h2>

<p> Add Product(Create)</p>
->request(Post Request)
<code>http://localhost:8000/create</code>
->response 
<code>
{
    "data": {
        "product": {
            "_id": "5e7218a50de915060b8be89a",
            "name": "iphone",
            "quantity": "34",
            "createdAt": "2020-03-18T12:48:37.250Z",
            "updatedAt": "2020-03-18T12:48:37.250Z",
            "__v": 0
        }
    }
}
</code>


<p> Delete Product</p>
->request(Delete Request)
<code>http://localhost:8000/:id</code>
->response 
<code>
{
   Product deleted!
}
</code>


<p> List All Product</p>
->request(Get request)
<code>http://localhost:8000</code>
->response 
<code>
{
   {
    "products": [
        {
            "_id": "5e7218a50de915060b8be89a",
            "name": "iphone",
            "quantity": "34",
            "createdAt": "2020-03-18T12:48:37.250Z",
            "updatedAt": "2020-03-18T12:48:37.250Z",
            "__v": 0
        },
        {
            "_id": "5e7215b30de915060b8be898",
            "name": "knvkdnvd",
            "quantity": "34",
            "createdAt": "2020-03-18T12:36:03.770Z",
            "updatedAt": "2020-03-18T12:36:03.770Z",
            "__v": 0
        },
        {
            "_id": "5e6cc9f8bb1a8b15068a9262",
            "name": "knvkdnvd",
            "quantity": "34",
            "createdAt": "2020-03-14T12:11:36.314Z",
            "updatedAt": "2020-03-14T12:11:36.314Z",
            "__v": 0
        }
    ]
}
}
</code>






##Technologies 
1-Backend ->Node.js
2-Database ->MongoDB

##How to use
To run this project, install it locally using npm:
$ npm install
$ npm start
