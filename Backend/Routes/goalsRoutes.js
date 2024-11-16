const express = require('express');
const router = express.Router();
const { getGoals, addGoal } = require('../controllers/goalsController');

router.get('/', getGoals);
router.post('/', addGoal);

module.exports = router;