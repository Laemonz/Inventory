const express = require('express');
const mongoose = require('mongoose')
const path = require('path')
const cors = require('cors');
require('dotenv').config()

const {router: itemsRouter} = require('./routes/itemsRouter');
const errorHandler = require('./middleware/errorHandler');

const app = express();
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended: true}));

// Routes
app.use('/items', itemsRouter)

// Error handling
app.use(errorHandler);

const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017' //connect to DB or use local DB
const PORT = process.env.SERVER_PORT || 4000;


// set NODE_ENV to production to run the production build of the app
if (process.env.NODE_ENV === 'production'){
    console.log('Application is running in production mode');

    app.use(express.static(path.join(__dirname, '/client/build')))
    app.get('/*', (req, res) => {
        res.sendFile(path.join(__dirname, 'client', 'build', 'index.html'), (err)=>{
            if (err) {
              res.status(500).send(err)
            }
        })
    })
} else {
    app.get('/', (req,res) => {
        res.send('Server is running in development mode');
    })
}



mongoose.connect(`${MONGODB_URI}/ShopifyItems`, { useNewUrlParser: true, useUnifiedTopology:true });
const connection = mongoose.connection;

connection.once('open', () =>  {
    console.log("MongoDB database connection established successfully");
})

app.listen(PORT, () => {
        console.log("Listening on Port: " + PORT);
        (MONGODB_URI==='mongodb://127.0.0.1:27017') ? console.log('Connecting to local MongoDB database...') : console.log('Connecting to MongoDB Atlas database...')
});