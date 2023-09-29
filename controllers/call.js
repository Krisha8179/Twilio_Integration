require("dotenv").config();

function isPhoneNumberValid(phoneNumber) {
    const phoneRegex = /^\+[1-9]\d{1,14}$/; 
    return phoneRegex.test(phoneNumber);
  }

exports.sendCall = async(req,res,next)=>{
    try{
        const ToNumber = req.body.ToNumber;

        if (!isPhoneNumberValid(ToNumber)) {
            return res.status(400).json({ error: 'Invalid phone number' });
          }

        const twilio = require('twilio')(process.env.TWILIO_SID, process.env.TWILIO_AUTH_TOKEN)

        await twilio.calls.create({
            from: process.env.TWILIO_NUMBER,
            to: ToNumber,
            url:process.env.CALL_URL
        });
        res.status(200).json({message: 'call sent successfully'})
    }catch(err){
        console.log(err);
        res.status(500).json({error: 'an error occurred on the server'});        
    }
}

