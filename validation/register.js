const Validator = require('validator');
const validText = require("./valid-text");
// take out data param if it messes up
// possible bug?? error overwrite
module.exports = function validateRegisterInput(data) {
    let errors = {};
   
    data.name === validText(data.name) ? data.name : '';
    data.email === validText(data.email) ? data.email : '';
    data.password === validText(data.password) ? data.password : '';
    data.password2 === validText(data.password2) ? data.password2 : '';

    if(!Validator.isLength(data.name, { min: 5, max: 30 })) {
        errors.name = "Name must be between 5 and 30 chars."
    }

    if (Validator.isEmpty(data.name)) {
        errors.name = "Name field is required";
    }

    if (Validator.isEmpty(data.email)) {
        errors.email = "Email field is required";
    }

    if (!Validator.isEmail(data.email)) {
        errors.email = "Email is invalid";
    }

    if (Validator.isEmpty(data.password)) {
        errors.password = "Password field is required";
    }

    if(!Validator.isLength(data.password, { min: 6, max: 20 })) {
        errors.password = "Password must be between 6 and 20 chars."
    }

    if(!Validator.equals(data.password, data.password2)) {
        errors.password2 = "Passwords must match"
    }

    return {
        errors,
        isValid: Object.keys(errors).length === 0
    }

}