const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

// Middleware to parse JSON requests
app.use(express.json());

// Function to check if a number is prime
function isPrime(num) {
    // Handle edge cases
    if (num < 2) return false;
    if (num === 2) return true;
    if (num % 2 === 0) return false;
    
    // Check odd divisors up to square root
    for (let i = 3; i <= Math.sqrt(num); i += 2) {
        if (num % i === 0) return false;
    }
    
    return true;
}

// Prime checker endpoint
app.post('/api/prime', (req, res) => {
    try {
        const { number } = req.body;
        
        // Validation
        if (number === undefined || number === null) {
            return res.status(400).json({
                error: 'Number is required',
                example: { number: 17 }
            });
        }
        
        if (!Number.isInteger(number)) {
            return res.status(400).json({
                error: 'Number must be an integer',
                provided: number
            });
        }
        
        const result = isPrime(number);
        
        res.json({
            number: number,
            isPrime: result,
            message: `${number} is ${result ? 'a prime' : 'not a prime'} number`
        });
        
    } catch (error) {
        res.status(500).json({
            error: 'Internal server error',
            details: error.message
        });
    }
});

// Alternative GET endpoint for URL parameters
app.get('/api/prime/:number', (req, res) => {
    try {
        const number = parseInt(req.params.number);
        
        if (isNaN(number)) {
            return res.status(400).json({
                error: 'Invalid number format',
                provided: req.params.number
            });
        }
        
        const result = isPrime(number);
        
        res.json({
            number: number,
            isPrime: result,
            message: `${number} is ${result ? 'a prime' : 'not a prime'} number`
        });
        
    } catch (error) {
        res.status(500).json({
            error: 'Internal server error',
            details: error.message
        });
    }
});

// Health check endpoint
app.get('/health', (req, res) => {
    res.json({ status: 'OK', timestamp: new Date().toISOString() });
});

// Start server
app.listen(PORT, () => {
    console.log(`Prime API server running on http://localhost:${PORT}`);
    console.log(`\nEndpoints:`);
    console.log(`  POST /api/prime - Check prime with JSON body`);
    console.log(`  GET  /api/prime/:number - Check prime with URL parameter`);
    console.log(`  GET  /health - Health check`);
});

module.exports = app;