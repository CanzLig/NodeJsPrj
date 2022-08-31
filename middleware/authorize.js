
const authorize = (roles = [], req, res, next) => {
    if(roles.length && !roles.includes(req.user.role)) {
        return res.status(401).json({ message: 'Unauthorized'});
    }
    return next();
}

module.exports = authorize;