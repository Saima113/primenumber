Prime Number API
A simple REST API built with Node.js and Express that checks whether a given number is prime or not.

Features
✅ Check if a number is prime via POST or GET request
✅ Input validation and error handling
✅ Efficient prime checking algorithm (O(√n) complexity)
✅ Clean JSON responses
✅ Health check endpoint
API Endpoints
Method	Endpoint	Description
POST	/api/prime	Check prime with JSON body
GET	/api/prime/:number	Check prime with URL parameter
GET	/health	Health check
Quick Start
Prerequisites
Node.js (v14 or higher)
npm
Installation & Running
bash
# Clone the repository
git clone https://github.com/Saima113/primenumber.git
cd primenumber

# Install dependencies
npm install

# Start the server
npm start
Server will be running at http://localhost:3000

API Usage Examples
POST Request
bash
curl -X POST http://localhost:3000/api/prime \
  -H "Content-Type: application/json" \
  -d '{"number": 17}'
Response:

json
{
  "number": 17,
  "isPrime": true,
  "message": "17 is a prime number"
}
GET Request
bash
curl http://localhost:3000/api/prime/17
Testing Proof
Postman Collection
Import the postman_collection.json file to test all endpoints.

Test Results Screenshots
Screenshot 1: Prime number test
Screenshot 2: Non-prime number test

Algorithm Details
The prime checking algorithm:

Handles edge cases (numbers < 2)
Returns true immediately for 2
Returns false for even numbers > 2
Checks only odd divisors up to √n
Time Complexity: O(√n)
Space Complexity: O(1)

Technologies Used
Node.js
Express.js
JavaScript ES6+
Author
Saima - Saima113

License
MIT License

