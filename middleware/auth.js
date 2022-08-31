const jwt = require("jsonwebtoken");

const config = require('../config/token.json')['token'];

const verifyToken = (req, res, next) => {
    const token = req.header('authorization');
    
    if (!token) {
        return res.status(403).send("A token is required for authentication");
    }
    const decoded = jwt.verify(String(token.split(' ')[1]).trim(), config.TOKEN_KEY);
    req.user = decoded;
    return next();
};

module.exports = verifyToken;