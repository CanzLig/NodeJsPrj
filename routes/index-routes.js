const express = require('express');
const router = express.Router();

// Get Home Page of The Web Application
router.get('/', function(req, res) {
    res.send('Library Home Page');
});

router.use('/leaves', require('./leaveDate-routes'));
router.use('/employees', require('./employee-routes'));
router.use('/leavetypes', require('./leaveType-routes'));
router.use('/teams', require('./team-routes'));
router.use('/projects', require('./project-routes'));
router.use('/', require('./login-routes'));


module.exports = router;