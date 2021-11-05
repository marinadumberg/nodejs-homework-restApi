const sgMail = require('@sendgrid/mail')
require('dotenv').config()
const { SENDGRID_KEY } = process.env

sgMail.setApiKey(SENDGRID_KEY)

const sendEmail = async (data) => {
  const email = { ...data, from: 'marina.dumberg@inbox.lv' }

  await sgMail
    .send(email)
    .then(() => {
      console.log('email sent')
    })
    .catch((error) => {
      console.log(error.message)
    })
}

module.exports = sendEmail
