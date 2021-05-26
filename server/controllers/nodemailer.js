require('dotenv').config();
const { EMAIL_PASSWORD, EMAIL, OTHER_EMAIL } = process.env;

module.exports = {
  sendEmail: (req,res) => {
    const transporter = nodemailer.createTransport({
      service:'gmail',
      auth: {
        user: EMAIL,
        pass: EMAIL_PASSWORD
      }
    })
      
    const option = {
      from: EMAIL,
      to: OTHER_EMAIL,
      subject: `Email sent from: ${req.body.email}`,
      text: `Message from ${req.body.name}: ${req.body.message}`
    }

    transporter.sendMail(option, function(err) {
      if(err) {
        console.log('Email not sent.')
      } else {
        console.log('Email sent.')
      }
    })
  }
}
