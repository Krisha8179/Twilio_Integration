const express = require('express');
const router = express.Router();
const smsController = require('../controllers/sms');


router.post('/sms', smsController.sendSms);

module.exports = router;
