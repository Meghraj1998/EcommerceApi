# EcommerceApi
#Codingninjas Assignnment


<h1>Product Api</h1>
<span> It is the simple product api developed for practice , User can add, update, delete ,and list the product detail</span>
<br>
<h2>How to use</h2>
<br>
<p> Add Product(Create)</p><br>
->request(Post Request)<br>
<code>http://localhost:8000/create</code><br>
->response <br>
<code>
{<br>
    "data": {<br>
        "product": {<br> 
            "_id": "5e7218a50de915060b8be89a",<br>
            "name": "iphone",<br>
            "quantity": "34",<br>
            "createdAt": "2020-03-18T12:48:37.250Z",<br>
            "updatedAt": "2020-03-18T12:48:37.250Z",<br>
            "__v": 0<br>
        }<br>
    }<br>
}<br>
</code>


<p> Delete Product</p>
->request(Delete Request)<br>
<code>http://localhost:8000/:id</code><br>
->response <br>
<code><br>
{
   Product deleted!<br>
}<br>
</code><br>


<p> List All Product</p>
->request(Get request)<br>
<code>http://localhost:8000</code><br>
->response <br>
<code><br>
{<br>
   {<br>
    "products": [
        {
            "_id": "5e7218a50de915060b8be89a",<br>
            "name": "iphone",<br>
            "quantity": "34",<br>
            "createdAt": "2020-03-18T12:48:37.250Z",
            "updatedAt": "2020-03-18T12:48:37.250Z",<br>
            "__v": 0
        }<br>
        
    ]<br>
}<br>
}
</code><br>






<br><h2>##Technologies </h2>
1-Backend ->Node.js<br>
2-Database ->MongoDB<br>

<h2>##How to use</h2>
To run this project, install it locally using npm:<br>
$ npm install<br>
$ npm start<br>
