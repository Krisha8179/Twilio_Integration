const express = require('express');
const router = express.Router();
const whatsappMessageController = require('../controllers/whatsappMsg');


router.post('/whatsapp', whatsappMessageController.sendWhatsappMessage);

module.exports = router;
