const express = require("express");
const router = express.Router();
const auth = require('../middleware/auth');
const projectController = require('../controllers/projectController');

router.post('/', auth, projectController.newProject);
router.get('/', auth, projectController.allProject);

router.get('/:id', auth, projectController.getProject);
router.put('/:id', auth, projectController.updateProject);
router.delete('/:id', auth, projectController.deleteProject);

module.exports = router;