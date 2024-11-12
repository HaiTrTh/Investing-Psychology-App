const express = require('express');
const router = express.Router();
const { getRandomAffirmation } = require('../controllers/affirmationsController');

router.get('/', getRandomAffirmation);

module.exports = router;
