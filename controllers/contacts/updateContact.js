const { Contact } = require('../../model')
const updateContact = async (req, res, next) => {
  try {
    const { contactId } = req.params
    const result = await Contact.findByIdAndUpdate(contactId, req.body, {
      new: true,
    })
    if (!result) {
      res.status(404).json({
        status: 'error',
        code: 404,
        message: `Conatct with ID=${contactId} not found`,
      })
      return
    }
    res.json({
      status: 'success',
      code: 200,
      message: '✔️ Contact updated',
      data: { result },
    })
  } catch (error) {
    next(error)
  }
}

module.exports = updateContact