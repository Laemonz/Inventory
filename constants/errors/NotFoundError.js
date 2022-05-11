const HttpError = require("./HttpError");

class NotFoundError extends HttpError{
    constructor(code, message) {
        super(message);
        this.status = 404;
        this.code = code;
    }
}

module.exports = NotFoundError;