const { User } = require('../../models')
const jwt = require('jsonwebtoken')

const login = async (req, res) => {
  try {
    const { email, password } = req.body

    const user = await User.findOne({ email })

    if (!user || !user.comparePassword(password)) {
      res.json({
        status: 'error',
        code: 400,
        message: 'Email or password is wrong',
      })
    }
    const { _id } = user
    const payload = {
      _id,
    }
    const { SECRET_KEY } = process.env

    const token = jwt.sign(payload, SECRET_KEY)

    await User.findByIdAndUpdate(user._id, { token })

    res.json({
      status: 'success',
      code: 200,
      data: {
        token,
      },
    })
  } catch (error) {
    res.status(401).json(error)
  }
}

module.exports = login
