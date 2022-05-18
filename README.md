# Inventory App #
This is a Fullstack Application developed with MongoDB, Express, React, and Nodejs. 

## Prerequisites
This application uses MongoDB Atlas to store data.  

In order to run this application you need to have a MongoDB account.  
Follow the steps [here](https://www.mongodb.com/docs/guides/cloud/connectionstring/) and select
`Connect your application` at the end to get a NodeJs connection string.  

This string will be used to connect to the Atlas DB.

## Setup / Instalation ##
Run the following commands to install the required dependencies:
   
   ```bash
   npm i

   cd client
   npm i
   cd ..
   ```

## Replit Specific Steps
The application is hosted on replit [here](https://replit.com/@Laemonz/Inventory),  

If you wish to simply run the app, just click the big green run button above ☝️  
If forking this repo, follow the steps below to get the app running.

1. Using the secrets mangager on the right hand side, input the following key value pairs:

   ```bash
   MONGODB_URI: <your mongoDB connection string>
   NODE_ENV: production
   REACT_APP_SERVER: <the replit app url> (eg: https://Inventory.laemonz.repl.co)
   SERVER_PORT: 8080
   ```
2. Build the client using `npm run build:client`
3. Run the app using the green run button or `npm start:server`

## Run Locally
### Running the Production Build
1. Create a `.env` file in the root directory of the project with the following contents.  

   ```bash
   MONGODB_URI: <your mongoDB connection string>
   NODE_ENV=production
   ```
   
    If `MONGODB_URI` is not set, the application will attempt to use a local DB.  
   This requires that you have MongoDB installed on your machine.

2. Run `npm run build:client`

This will make the Express server serve the production build of the React app.  
To run the app, simply run navigate to the root directory and run `npm start:server`.  
The production build will now be running (default: http://localhost:4000).

## Running the development build of the app ##
1. Create a `.env` file in the root directory of the project with the following contents.  
   ```bash
   MONGODB_URI: <your mongoDB connection string>
   ```
   If `MONGODB_URI` is not set, the application will attempt to use a local DB.  
   This requires that you have MongoDB installed on your machine.

2. Start the Server by running `npm run start:server` from the root directory
3. Start the React app by running `npm run start:client` from the root directory
4. The app can now be seen by navigating to http://localhost:3000. The server will be running on http://localhost:4000

