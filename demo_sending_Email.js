var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
  host: 'mail.gmx.com',
  port: 587,
  //secure: true,
  
  auth: {
    user: 'michael.habermueller@gmx.de',
    pass: 'I190510h!'
  }
});

var mailOptions = {
  from: 'michael.habermueller@gmx.de',
  to: 'michael.habermueller@sap.com',
  subject: 'Sending Email using Node.js',
  text: 'That was easy!'
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});