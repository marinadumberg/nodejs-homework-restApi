const { Schema, model } = require('mongoose')
const Joi = require('joi')

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

    },
    phone: {
      type: String,
      required: [true, 'phone is required'],
      unique: true,

    },
    favorite: {
      type: Boolean,
      default: false,
    },
  },
  { versionKey: false, timestamps: true },
)

const joiSchema = Joi.object({
  name: Joi.string().min(1).required(),
  email: Joi.string().min(1).required(),
  phone: Joi.number().min(0.01).required(),
  favorite: Joi.boolean()
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
