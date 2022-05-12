const HttpError = require("../constants/errors/HttpError")
const errorCodes = require('../constants/errorCodes')
const errorMessages = require('../constants/errorMessages')


const errorHandler = (error, req, res, next) => {
    console.log('error:');
    console.log(error);
    if (error instanceof HttpError){
        const {status, code, message } = error;
        res.status(status).send({code, message})
    } else {
        res.status(500).send({
            code: errorCodes.internalServerError, 
            message: errorMessages.internalServerError
        })
    }
}

module.exports = errorHandler