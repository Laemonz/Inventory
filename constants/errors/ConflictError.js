const HttpError = require("./HttpError");

class ConflictError extends HttpError{
    constructor(code, message) {
        super(409, code, message)
    }
}

module.exports = ConflictError;