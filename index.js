'use strict'

module.exports = function getCheckSum(s) { 
  let check = 0
  for (let i = 1; i < s.length; i++) { 
    check = check ^ s.charCodeAt(i) 
  } 
  return check.toString(16).toUpperCase()
}
