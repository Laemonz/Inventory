require('dotenv').config()
const Item = require('../models/Item')

const { validationError, castError } = require('../constants/errorNames')

const errorCodes = require('../constants/errorCodes')
const errorMessages = require('../constants/errorMessages')

const ValidationError = require('../constants/errors/ValidationError')
const InternalServerError = require('../constants/errors/InternalServerError')
const NotFoundError = require('../constants/errors/NotFoundError')


/**
 * Get all items
 */
const getItems = async() =>  await Item.find({}).exec();

/**
 * Create a new item
 */
const createItem= async(name, price) => {
    const item = new Item({
        name: name,
        price: price,
        deleted: false,
        deletionComment: null,
    });

    try{
        await item.save();
    }
    catch(err){
        if (err.name === validationError){
            throw new ValidationError(errorCodes.invalidItem, errorMessages.invalidItem);
        }
        else{
            throw new InternalServerError();
        }
    }
}

/**
 * Get an item
 */
const getItem = async(id) => {
    let item = null;
    try{
        item = await Item.findById(id).exec();
    } catch (err) {
        if (err.name === castError){
            throw new ValidationError(errorCodes.invalidItem, errorMessages.invalidItem);
        }
        else{
            throw new InternalServerError();
        }
    }
    if (!item){
        throw new NotFoundError(errorCodes.itemNotFound, errorMessages.itemNotFound);
    }
    return item;
}

/**
 * Delete an item
 */
const deleteItem = async(id, reason) => {
    if (!reason){
        throw new ValidationError(errorCodes.invalidReason, errorMessages.invalidReason)
    }

    Item.findOneAndUpdate(
        {id: id},
        {
            $set: {
                deleted: true,
                deletionComment: reason,
            }
        },
        (error) => {
            if (error) {
                throw new NotFoundError(errorCodes.itemNotFound, errorMessages.itemNotFound)
            }
        }
    )
}

/**
 * Restore an item
 */
const restoreItem = async(id) => {
    Item.findOneAndUpdate(
        {id: id},
        {
            $set: {
                deleted: false,
                deletionComment: null,
            }
        },
        (error) => {
            if (error) {
                throw new NotFoundError(errorCodes.itemNotFound, errorMessages.itemNotFound)
            }
        }
    )
}


module.exports = {
    getItems,
    createItem,
    getItem,
    deleteItem,
    restoreItem
}