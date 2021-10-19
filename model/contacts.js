const { Schema, model } = require('mongoose')
const Joi = require('joi')

// const phoneRegexp = /^\+?\(?[0-9]{1,4}\)?[-.\s]?[0-9]{1,3}[-.\s]?[0-9]{1,4}$/
// const emailRegexp = /^[a-zA-Z0-9]+[a-zA-Z0-9_.-]+[a-zA-Z0-9_-]+@[a-zA-Z0-9]+[a-zA-Z0-9.-]+.[a-z]{2,4}$/
const contactSchema = Schema(
  {
    name: {
      type: String,
      required: [true, 'name is required'],
    },
    email: {
      type: String,
      required: [true, 'email is required'],
      unique: true,
      match: emailRegexp,
    },
    phone: {
      type: String,
      required: [true, 'phone is required'],
      unique: true,
      match: phoneRegexp,
    },
    favorite: {
      type: Boolean,
      default: false,
    },
  },
  { versionKey: false, timestamps: true },
)

const joiSchema = Joi.object({
  name: Joi.string().min(3).max(30),
  email: Joi.string().pattern(emailRegexp),
  phone: Joi.string().pattern(phoneRegexp),
  favorite: Joi.boolean(),
})
const updateFavoriteSchema = Joi.object({
  favorite: Joi.boolean().required(),
})
const Contact = model('contact', contactSchema)

module.exports = {
  Contact,
  joiSchema,
  updateFavoriteSchema,
}
