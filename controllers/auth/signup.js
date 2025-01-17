
const { User } = require('../../models')
const { Conflict } = require('http-errors')

const signup = async (req, res, next) => {
  try {
    const { email, password, subscription } = req.body
    console.log(req.body)
    const user = await User.findOne({ email })

    if (user) {
      throw new Conflict('Already register')
    }

    const newUser = new User({ email, subscription })
    newUser.setPassword(password)
    await newUser.save()

    res.status(201).json({
      status: 'success',
      code: 201,
      message: ' Success register',
      newUser,
    })
  } catch (error) {
    res.status(409).json(error.message)
  }
}
module.exports = signup
