const functions = require('firebase-functions');
//node mailer
const nodemailer=require('nodemailer');
//creates function for trigger

exports.sendEmail=functions.database.ref('/mails/mail_id').onWrite(event=>{
    let datadelta=event.data();
    let data=datadelta.val();
    console.log(data);
    if(datadelta.exists()&&!datadelta.previous.exists()){
        let userEmail=data.userEmail;
        let userName=data.userName;
        let userMessage=data.userMessage;
            // setup email data with unicode symbols
            let mailOptions = {
                from: `${userName} on ${userEmail}`, // sender address
                to: 'crycetruly@gmail.com', // list of receivers
                subject: 'Projects In Africa Website', // Subject line
                text: `${userMessage}`, // plain text body
                html: '<b>'+userMessage+'</b>' // html body
            };
            
            console.log(mailOptions);
 // send mail with defined transport object
 transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
        return console.log(error);
    }
    console.log('Message sent: %s', info.messageId); 

});
        }
});


