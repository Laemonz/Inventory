const express = require('express')
const router = express.Router()
require('dotenv').config()
const {
    getItems,
    createItem,
    getItem,
    editItem,
    deleteItem,
    restoreItem
} = require('../operations/itemOperations')

/**
 * Get all items
 */
router.route('/').get( async(req, res, next) => {
    console.log('Getting all items')
    try{
        const items = await getItems()
        res.status(200).json(items)
    } catch (err) {
        next(err)
    }
})

/**
* Create a new item
*/
router.route('/create').post( async(req,res, next) => {
    const name= req.body.name;
    const price = req.body.price;
    console.log(`Creating Item with properties name: [${name}] and price: [${price}]`);

    try{
        await createItem(name, price)
        res.status(200).send('created')
    }
    catch(err){
        next(err);
    }
});

/**
 * Get an item
 */
router.route('/getItem/:itemID').get(async(req, res, next) => {
    const id = req.params.itemID;
    console.log(`Getting item with id: [${id}]`);
    try{
         const item = await getItem(id);
         res.status(200).json(item);
    } catch(err){
        next(err);
    }
});

/**
 * Edit an item
 */
router.route('/edit/').patch(async(req, res, next) => {
    const {id, name, price} = req.body;
    console.log(`Updating Item [${id}] with properties name: [${name}] and price: [${price}]`);

    try{
        await editItem(id, name, price)
        res.status(200).send('edited')
    } catch(err){
        next(err);
    }

})

/**
 * Delete an item
 */
 router.route('/delete/').patch(async(req, res, next) => {
    const id = req.body.id;
    const reason = req.body.reason;
    console.log(`Deleting Item with properties id: [${id}] and reason: [${reason}]`);

    try{
        await deleteItem(id, reason)
        res.status(200).send('deleted')
    } catch(err){
        next(err);
    }

})

/**
 * Restore an item
 */
 router.route('/restore/').patch(async(req, res, next) => {
     const id = req.body.id;
     console.log(`Restoring Item with properties id: [${id}]`);

     try{
         await restoreItem(id)
         res.status(200).send('restored')
     } catch(err){
         next(err);
     }

 })


module.exports = {router}