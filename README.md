Step-by-Step Testing in Thunder Client
1. Register a New User
Method: POST

URL: http://localhost:5000/api/register

Body (JSON):

json
Copy
Edit
{
  "email": "testuser@example.com",
  "password": "password123"
}
Expected Result:

json
Copy
Edit
{
  "message": "User registered"
}
2. Login to Get JWT Token
Method: POST

URL: http://localhost:5000/api/login

Body (JSON):

json
Copy
Edit
{
  "email": "testuser@example.com",
  "password": "password123"
}
Expected Result:

json
Copy
Edit
{
  "token": "YOUR_JWT_TOKEN_HERE"
}
Copy the token from this response. You'll use it in the next requests.

3. Get All Products
Method: GET

URL: http://localhost:5000/api/products

No Auth Required

4. Get Product by ID
Method: GET

URL: http://localhost:5000/api/products/<product_id>

Replace <product_id> with the actual product ID from the previous list.

5. Add to Cart (Protected)
Method: POST

URL: http://localhost:5000/api/cart

Auth:

Go to Auth tab in Thunder Client.

Select Bearer Token and paste the JWT token.

Body (JSON):

json
Copy
Edit
{
  "productId": "PASTE_PRODUCT_ID_HERE",
  "quantity": 2
}
Expected Result:

json
Copy
Edit
{
  "_id": "some_cart_id",
  "userId": "...",
  "productId": "...",
  "quantity": 2
}
6. Update Cart Item (Protected)
Method: PUT

URL: http://localhost:5000/api/cart/<product_id>

Auth: Use Bearer Token (same as above)

Body (JSON):

json
Copy
Edit
{
  "quantity": 3
}
7. Remove Cart Item (Protected)
Method: DELETE

URL: http://localhost:5000/api/cart/<product_id>

Auth: Use Bearer Token

🔐 Using Bearer Token in Thunder Client
Go to Thunder Client → your request (e.g., /api/cart).

Click Auth tab.

Choose Bearer Token.

Paste the token from the login step.

