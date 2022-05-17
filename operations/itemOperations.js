require('dotenv').config()
const Item = require('../models/Item')

const { validationError, castError } = require('../constants/errorNames')

const errorCodes = require('../constants/errorCodes')
const errorMessages = require('../constants/errorMessages')

const InternalServerError = require('../constants/errors/InternalServerError')
const ValidationError = require('../constants/errors/ValidationError')
const NotFoundError = require('../constants/errors/NotFoundError')
const ConflictError = require('../constants/errors/ConflictError')


const findAndUpdate = async({ filter, update, options = { new: true, lean: true } }) => {
    let doc;
    try{
        doc = await Item.findOneAndUpdate(filter, {$set: update}, options);
    } catch (err){
        if (err.name === validationError){
            throw new ValidationError(errorCodes.invalidItem, errorMessages.invalidItem);
        }
        else if (err.name === castError){
            throw new ValidationError(errorCodes.invalidItem, errorMessages.invalidItem);
        }
        else{
            throw new InternalServerError();
        }
    }
    if (!doc){
        throw new NotFoundError(errorCodes.itemNotFound, errorMessages.itemNotFound)
    }
    return doc;
}

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
        return item;
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
 * Edit an item
 */
const editItem = async(id, name, price) => {
    const item = await getItem(id);
    if (item.deleted){
        throw new ConflictError(errorCodes.itemDeletedEdit, errorMessages.itemDeletedEdit);
    }
    const filter = { _id: id };
    const update = {
        name: name,
        price: price,
    };
    return findAndUpdate({filter, update});
}

/**
 * Delete an item
 */
const deleteItem = async(id, reason) => {
    const item = await getItem(id);
    if (item.deleted){
        throw new ConflictError(errorCodes.itemAlreadyDeleted, errorMessages.itemAlreadyDeleted);
    }

    const filter = { _id: id };
    const update = {
        deleted: true,
        deletionComment: reason,
    };
    return findAndUpdate({filter, update});
}

/**
 * Restore an item
 */
const restoreItem = async(id) => {
    const item = await getItem(id);
    if (!item.deleted){
        throw new ConflictError(errorCodes.itemNotDeleted, errorMessages.itemNotDeleted);
    }

    const filter = { _id: id };
    const update = {
        deleted: false,
        deletionComment: null,
    };
    return findAndUpdate({filter, update});
}


module.exports = {
    getItems,
    createItem,
    getItem,
    editItem,
    deleteItem,
    restoreItem
}