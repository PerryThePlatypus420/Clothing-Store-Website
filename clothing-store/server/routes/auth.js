const jwt = require('jsonwebtoken');
const User = require('../models/User'); // Import your User model

const authenticateToken = async (req, res, next) => {
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1];


    if (token == null) return res.sendStatus(401); // No token provided

    jwt.verify(token, 'randomdigits_1234567890', async (err, user) => {
        if (err) return res.sendStatus(403); // Invalid token

        // Optionally: Fetch user data from the database if needed
        try {
            const userData = await User.findById(user.userId); // Adjust based on your schema
            if (!userData) return res.sendStatus(404); // User not found
            req.user = userData; // Attach user data to req
            next(); // Continue to the next middleware or route handler
        } catch (error) {
            return res.sendStatus(500); // Internal server error
        }
    });
};

module.exports = authenticateToken;
