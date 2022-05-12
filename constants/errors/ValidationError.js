const HttpError = require("./HttpError");

class ValidationError extends HttpError{
    constructor(code, message) {
        super(400, code, message)
    }
}

module.exports = ValidationError;