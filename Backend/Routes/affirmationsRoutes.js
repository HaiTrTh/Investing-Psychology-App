const express = require('express');
const router = express.Router();
const { getRandomAffirmation } = require('../controllers/affirmationsController');

router.get('/random', getRandomAffirmation);
module.exports = router;

