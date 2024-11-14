const express = require('express');
const router = express.Router();
const { getRandomAffirmation } = require('../Controllers/affirmationsController');

router.get('/', getRandomAffirmation);

module.exports = router;
