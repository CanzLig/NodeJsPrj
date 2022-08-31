const express = require("express");
const router = express.Router();
const auth = require('../middleware/auth');
const teamController = require('../controllers/teamController');

router.post('/', teamController.newTeam);
router.get('/', auth, teamController.allTeam);

router.get('/:id', auth, teamController.getTeam);
router.put('/:id', auth, teamController.updateTeam);
router.delete('/:id', auth, teamController.deleteTeam);

module.exports = router;