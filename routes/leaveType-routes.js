const express = require("express");
const router = express.Router();
const leaveTypeController = require('../controllers/leaveTypeController');
const auth = require('../middleware/auth');

router.post('/', auth, leaveTypeController.addLeaveType);
router.get('/', auth, leaveTypeController.allLeaveType);
router.put('/:id', auth, leaveTypeController.updateLeaveType);
router.delete('/:id', auth, leaveTypeController.deleteLeaveType);

module.exports = router;