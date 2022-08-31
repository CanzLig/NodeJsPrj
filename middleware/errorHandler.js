const errorHandler = async (err, req, res, next) => {
    if (typeof (err) === 'string') {
        // custom application error
        return res.status(400).json({ message: err });
    }

    if (err.name != '') {
        return res.status(401).json({ message: error401Message(err.name) });
    } 

    return res.status(500).json({ message: err.message });
}

const error401Message = (name) => {
    switch (name) {
        case 'JsonWebTokenError':
            return 'Invalid Token';
    
        default:
            return 'token is expired';
    }
}



module.exports = errorHandler;