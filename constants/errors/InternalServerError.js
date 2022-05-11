const errorCodes = require("../errorCodes");
const errorMessages = require("../errorMessages");
const HttpError = require("./HttpError");

class InternalServerError extends HttpError{
    constructor() {
        super(errorMessages.internalServerError);
        this.status = 500;
        this.code = errorCodes.internalServerError;
    }
}

module.exports = InternalServerError;