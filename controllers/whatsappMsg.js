require("dotenv").config();

function isPhoneNumberValid(phoneNumber) {
    const phoneRegex = /^\+[1-9]\d{1,14}$/; 
    return phoneRegex.test(phoneNumber);
  }


exports.sendWhatsappMessage = async (req, res, next) => {
    try{
        const ToNumber = req.body.ToNumber;

        if (!isPhoneNumberValid(ToNumber)) {
            return res.status(400).json({ error: 'Invalid phone number' });
          }

        const twilio = require('twilio')(process.env.TWILIO_SID, process.env.TWILIO_AUTH_TOKEN)

        await twilio.messages.create({
            from: `whatsapp:${process.env.TWILIO_NUMBER}`,
            body:"this is a whatsapp test message",
            to: `whatsapp:${ToNumber}`
        });
    
        res.status(200).json({message: 'whatsapp message sent successfully'});
    } catch(err){
        console.log(err);
        res.status(500).json({error: 'an error occurred on the server'});
    };
}

