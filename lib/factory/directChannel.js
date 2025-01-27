const Joi = require('joi')
const validate = require('./validate')

//
// Define the schema
//
const schema = {
  header: Joi.string().allow('').optional(),
  members: Joi.array().items(Joi.string()).min(2).max(8)
}

//
// Generate a valid object
//
module.exports = function (props) {
  return {
    type: 'direct_channel',
    direct_channel: validate(schema, props)
  }
}
