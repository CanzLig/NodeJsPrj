const express = require("express");
const router = express.Router();
const loginController = require('../controllers/loginController');
const auth = require('../middleware/auth');



router.post('/login',loginController.login);
router.get('/logOut', auth, loginController.logOut);
module.exports = router;