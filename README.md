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

You must also set the environment variables for the backend server.  
Create a `.env` file in `/` and set the following variables

   ```bash
   MONGODB_URI = your mongoDB connection string
   PORT = your server port here
   ```

## Running the App ##
1. Start the Server by running `npm run start:server` from the root directory
2. Start the React app by running `npm run start:client` from the root directory
3. The app can now be seen by navigating to http://localhost:3000. The server will be running on http://localhost:4000

## Running the Production Build
1. Add the following line to the `.env` file found in `/`

   ```bash
   NODE_ENV=production
   ```

2. Navigate to `/client` and run `npm run build`

This will make the Express server serve the production build of the React app to the user.  
To run the app, simply run navigate to `/` and run `npm start:server`.  
The production build will now be running on the server address (default: http://localhost:4000).  
