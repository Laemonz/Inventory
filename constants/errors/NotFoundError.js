const HttpError = require("./HttpError");

class NotFoundError extends HttpError{
    constructor(code, message) {
        super(404, code, message)
    }
}

module.exports = NotFoundError;