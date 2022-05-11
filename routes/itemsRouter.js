const express = require('express')
const router = express.Router()
require('dotenv').config()
//const mongoose = require('mongoose')
const Item = require('../models/Item')

const { validationError, castError } = require('../constants/errorNames')

const errorCodes = require('../constants/errorCodes')
const errorMessages = require('../constants/errorMessages')

const HttpError = require('../constants/errors/HttpError')
const ValidationError = require('../constants/errors/ValidationError')
const InternalServerError = require('../constants/errors/InternalServerError')
const NotFoundError = require('../constants/errors/NotFoundError')


/**
 * Get all items
 */
router.route('/').get( async(req,res) => {
    try{
        const items = await Item.find({}).exec(); 
        res.status(200).json(items)
    } catch (err) {
        res.status(500).send('Error: cannot get items')
    }
})

/**
* Create a new item
*/
router.route('/create').post( async(req,res, next) => {
    const item = new Item({
        name: req.body.name,
        price: req.body.price,
        deleted: false,
        deletionComment: null,
    });

    try{
        await item.save();
        res.status(200).send('Item added!');
    }
    catch(err){
        if (err.name === validationError){
            console.log('throwing!!!!!!!!!!!');
            throw new ValidationError(errorCodes.invalidItem, errorMessages.invalidItem);
        }
        else{
            console.log('still throwing!!!!!!!!!!!');
            throw new InternalServerError();
        }
    }
});

/**
 * Get an item
 */
router.route('/getItem/:itemID').get(async(req,res) => {
    const id = req.params.itemID;
    let item = null;
    try{
         item = await Item.findById(id).exec();
         res.status(200).json(item);
    } catch (err) {
        if (err.name === castError){
            throw new ValidationError(errorCodes.invalidItem, errorMessages.invalidItem);
        }
        else{
            throw new InternalServerError();
        }
    }

    // if (!item){
    //     throw new NotFoundError(errorCodes.itemNotFound, errorMessages.itemNotFound);
    // }
     
});

/**
 * Delete an item
 */
 router.route('/delete/').patch((req,res) => {
    const id = req.body.id;
    const reason = req.body.reason;

    console.log(req.body);

    if (!reason){
        throw new HttpError(400, errorCodes.invalidReason, errorMessages.invalidReason)
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
                res.status(404).send('Error: cannot delete item!');
            }
            else {
                res.status(200).send('Item deleted!');
            }
        }
    )
})

/**
 * Restore an item
 */
 router.route('/restore/').patch((req,res) => {
    const id = req.body.id;

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
                res.status(404).send('Error: cannot restore item!');
            }
            else {
                res.status(200).send('Item restored!');
            }
        }
    )
})


module.exports = {router}