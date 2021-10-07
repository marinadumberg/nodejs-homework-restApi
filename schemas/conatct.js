const Joi = require('joi')

const schema = Joi.object({ name: Joi.string().min(1).required(), email: Joi.string().min(1).required(), phone: Joi.number().min(0.01).required(), }

)

module.exports = schema
