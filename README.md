# Inventory App #
This is a Fullstack Application developed with MongoDB, Express, React, and Nodejs. 

## Setup / Instalation ##
Run `npm i` to install dependencies.

## Running the Production Build
1. Create a `.env` file in the root directory of the project with the following contents.  
   If using replit, these should already be setup and you can ignore this step

   ```bash
   NODE_ENV=production
   ```

2. Run `npm run build:client`

This will make the Express server serve the production build of the React app.  
To run the app, simply run navigate to the root directory and run `npm start:server`.  
The production build will now be running (default: http://localhost:4000).

## Running the development build of the app ##
1. Start the Server by running `npm run start:server` from the root directory
2. Start the React app by running `npm run start:client` from the root directory
3. The app can now be seen by navigating to http://localhost:3000. The server will be running on http://localhost:4000

