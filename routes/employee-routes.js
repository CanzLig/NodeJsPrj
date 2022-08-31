const express = require("express");
const router = express.Router();
const auth = require('../middleware/auth');
const employeeController = require('../controllers/employeeController');

router.post('/', employeeController.addEmployee);
router.get('/', auth, employeeController.getAllEmployees);

router.get('/:id', auth, employeeController.getEmployee);
router.put('/:id', auth, employeeController.updateEmployee);
router.delete('/:id', auth, employeeController.deleteEmployee);

module.exports = router;