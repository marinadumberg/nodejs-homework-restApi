const { Contact } = require('../../models')

const getById = async (req, res, next) => {
  try {
    const { contactId } = req.params
    const contact = { _id: contactId, owner: req.user._id }
    const result = await Contact.findOne(
      contact,
      '_id name email phone favorite',
    )
    if (!result) {
      const error = new Error(`Conatct with ID=${contactId} not found`)
      error.status = 404
      throw error
    }
    res.json({
      status: 'sucess',
      code: 200,
      data: {
        result,
      },
    })
  } catch (error) {
    next(error)
  }
}

module.exports = getById
