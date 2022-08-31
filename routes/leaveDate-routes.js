const express = require("express");
const router = express.Router();
const leaveDateController = require('../controllers/leaveDateController');
const auth = require('../middleware/auth');


router.post('/', auth, leaveDateController.addLeaveDate);
router.get('/:id', auth, leaveDateController.getEmployeeLeavedatePerMonth);
router.put('/:id', auth, leaveDateController.updateLeaveDate);
router.delete('/:id', auth, leaveDateController.deleteLeaveDate);

module.exports = router;