const HttpError = require("./HttpError");

class ValidationError extends HttpError{
    constructor(code, message) {
        super(message);
        this.status = 400;
        this.code = code;
    }
}

module.exports = ValidationError;