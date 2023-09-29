const express = require('express');
const router = express.Router();
const callController = require('../controllers/call');


router.post('/call', callController.sendCall);

module.exports = router;
