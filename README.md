# Inventory App #
This is a Fullstack Application developed with MongoDB, Express, React, and Nodejs. 

## Prerequisites ##
### Install Node JS
https://nodejs.org/en/

## Setup / Instalation ##
Download the project and open the root directory.
Run the following commands to install the required packages

```bash
npm install

cd client
npm install
```

You must also set the environment variables for both the frontend and backend.
1. Create a `.env` file in `/` and set the following variables

   ```bash
   MONGODB_URI = your mongoDB connection string
   PORT = your server port here
   ```

   
2. Create a `.env` file in `/client` and set the following variables

   ```bash
   REACT_APP_SERVER_URL = server url (eg: http://localhost:3000)
   ```

## Running the App ##
1. Start the React App by navigating to `/` and running `npm start`
2. Start the Server by navigating to `/client` and running `npm start`
3. The app can now be seen by naviagating to http://localhost:3000

## Running the Production Build
1. Add the following line to the `.env` file found in `/`

   ```bash
   NODE_ENV=production
   ```

2. Navigate to `/client` and run `npm run build`

This will make the Express server serve the production build of the React app to the user.  
To run the app, simply run navigate to `/` and run `npm start`.  
The production build will now be running on the server address (default: http://localhost:4000).  
