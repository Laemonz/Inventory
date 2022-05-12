const errorCodes = require("../errorCodes");
const errorMessages = require("../errorMessages");
const HttpError = require("./HttpError");

class InternalServerError extends HttpError{
    constructor() {
        super(500, errorCodes.internalServerError, errorMessages.internalServerError);
    }
}

module.exports = InternalServerError;