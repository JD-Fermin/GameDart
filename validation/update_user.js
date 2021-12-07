const Validator = require("validator");
const validText = require("./valid-text");


module.exports = function validateUserPatchInput(data) { // should pass in data but if throw errors take out data param
  let errors = {};

  data.name = validText(data.name) ? data.name : "";
  data.email = validText(data.email) ? data.email : "";
  data.password = validText(data.password) ? data.password : "";
  data.password = validText(data.password2) ? data.password2 : "";
  data.bio = validText(data.bio) ? data.bio : "Write a little bit about yourself";
  data.profileImgUrl = validText(data.profileImgUrl) ? data.profileImgUrl : 'https://ubisoft-avatars.akamaized.net/46564bd6-ef0b-4b05-97ec-68d8473167c6/default_256_256.png';

  if (!Validator.isLength(data.name, { min: 5, max: 30 })) {
    errors.name = "Name must be between 5 and 30 chars."
  }

  if (Validator.isEmpty(data.name)) {
    errors.name = "Name field is required";
  }

  if (Validator.isEmpty(data.email)) {
    errors.email = "Email field is required";
  }

  if (!Validator.isLength(data.bio, { min: 6, max: 140 })) {
    errors.bio = "Bio should be between 6 and 140 chars";
  }

  if (!Validator.isEmail(data.email)) {
    errors.email = "Email is invalid";
  }

  if (Validator.isEmpty(data.password)) {
    errors.password = "Password field is required";
  }

  if (!Validator.isLength(data.password, { min: 6, max: 20 })) {
    errors.password = "Password must be between 6 and 20 chars."
  }

  if (!Validator.equals(data.password, data.password2)) {
    errors.password2 = "Passwords must match"
  }

  return {
    errors,
    isValid: Object.keys(errors).length === 0
  }


  return {
    errors,
    isValid: Object.keys(errors).length === 0
  }
}