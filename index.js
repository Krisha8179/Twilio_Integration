const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const fs = require('fs');


const cors = require('cors');
const smsRoutes = require('./routes/sms');
const callRoutes = require('./routes/call');
const whatsappMsgRoutes = require('./routes/whatsappMsg');

const app = express();
app.use(bodyParser.json({extended: false}));



app.use(cors());

app.use(smsRoutes);
app.use(callRoutes);
app.use(whatsappMsgRoutes);

app.listen(5000);

