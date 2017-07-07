const _ = require('lodash')

//
// Declare utils object
//
const utils = {}

//
// Removes trailing /<string> suffixes that
// may exist in the user ids. This happens
// if a user logs in to jabber more than
// once at the same time
//
utils.realJID = function (jid='') {
  return jid.split('/')[0].replace(/\\20/g, '.')
}

//
// Lookup values
//
utils.lookup = function (type, map, key) {
  var found = map[key]

  if(!found) {
    console.log(`... ${type} ${key} not found`)
  }

  return found
}

//
// Obtain the username from a jid
//
utils.username = function (users, jid) {
  return utils.lookup('user', users, utils.realJID(jid)).username
}

//
// Find the message body
//
utils.body = function (message) {
  var body = message.body_string || message.body_text

  if(!body) {
    console.log('... message body is empty')
  }

  return body
}

//
// Coverts the to / from JIDs to a members
// array
//
utils.members = function(users, to, from) {
  return _.sortBy([
    utils.username(users, to),
    utils.username(users, from),
  ])
}

//
// Convert ISO to millis
//
utils.millis = function(date) {
  return new Date(date).getTime()
}

//
// Export the functions
//
module.exports = utils