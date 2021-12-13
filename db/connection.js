// mongo atlas connection

require('dotenv').config();
const mongoose = require('mongoose');

// mongo url and connection 

const mongoURI = process.env.DATABASE_URL;
const db = mongoose.connection;

// connect to mongo

mongoose.connect (
    mongoURI, 
    {
        useNewUrlParser:true,
        useUnifiedToplogy:true,
        useCreateIndex: true,
    },
    () =>{
        console.log(`connection with mongo is established with the ${mongoURI}`);
    }
);

//define callback funcrtion for various events in the the event of an occurence of an error

db.on('error', (err)=> console.log(err.message + 'is mongoDB NOT RUNNING?'));
db.on('connected', ()=> console.log('mongo connected:' + mongoURI));
db.on('disconnected', ()=> console.log ('mongo is disconnected at the moment man!'));

//open the connection
db.on('open', ()=> console.log ('✅ connection is successfuly made!'));

//instance configured connected to our db-locally, in addition to the model config

module.exports = mongoose;