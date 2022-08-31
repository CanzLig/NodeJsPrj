const { Employee } = require('../models');
const validator = require('fluent-validator');
const config = require('../config/token.json')['token'];
const jwt = require("jsonwebtoken");

const login = async (req, res) => {
    const { username, password } = req.body;
    var validation = validator()
                        .validate(username).param('username').isNotEmpty()
                        .validate(password).param('password').isNotEmpty();

    if(!validation.check()) {
        res.status(400).json({"Error": validation.getErrors()});
    }

    let employee = await Employee.findOne({ where: { username, password }});

    if(employee !== null) {
        const token = jwt.sign({ user: employee },config.TOKEN_KEY,{ expiresIn: "1h",});
        res.status(200).json({ token });
    } else {
        res.status(404).json({ "message" : "Invalid Credentials" });
    }
}

const logOut = async (req, res) => {
    const token = req.header('authorization');
    
    await jwt.sign(String(token.split(' ')[1]).trim(), " ",{ expiresIn: 1}, (logout, err) => {
        if (logout) {
            res.status(200).send({msg : 'You have been Logged Out' });
        } else {
            res.send({msg: err});
        }
    });
}

module.exports = {
    login,
    logOut
}