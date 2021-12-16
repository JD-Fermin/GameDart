const Validator = require('validator');
const validText = require("./valid-text");

module.exports = function validateReviewInput(data) {
  let errors = {};

  data.body = validText(data.body) ? data.body : "";

  if (!Validator.isLength(data.body, {min:10, max: 250})) {
    errors.body = " Review must be between 10 and 250 chars"
  }
  if (Validator.isEmpty(data.body)) {
    errors.body = "Review field is required"
  }

  return {
    errors, 
    isValid: Object.keys(errors).length === 0
  }
}