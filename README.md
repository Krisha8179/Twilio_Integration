## Nodejs API for Twilio_Integration

A node.js api for Twilio_Integration.

## Server features

1. Used Express server to serve API endpoints.
2. Intergrated Twilio for communication.

## Description

* User can send the sms to the requested mobile number, before sending the sms api will check whether the given mobile number is valid or not , if it is valid then it will send the sms.
* User can make the call to the requested mobile number, before making the phone call api will check whether the given mobile number is valid or not, if it is valid then it will make the call.
* User can send the whatsapp message to the requested mobile number, before sending the whatsapp message api will check whether the givrn mobile number is valid or not , if it is valid then it will send the whatsapp message.


## API endpoints

1. **/call**  - To make the call for given phone number.
2. **/sms**  - To send the sms for given phone number.
3. **/whatsapp** - To send the whatssapp message given whatsapp message.


## Dependencies

* Cors (Any origin works in our API)
* Express
* dotenv (get the .env file working with environment variables)
* Twilio (to communicate) 
* body parser(to parse the incoming body requests)


 
